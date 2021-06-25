var express = require('express');
var router = express.Router();
var rest = require('../modules/services');
var models = require('../models/api');


/* GET home page. */

router.get('/items', function (req, res) {

    rest.getJSON(`/sites/MLA/search?q=${req.query.q}`).then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let result = models.TransformSearchQuery(response);
        res.json(result);
    }, (error) => {
        console.log(error)
        res.statusCode = 404;
        res.end(`Hubo un error al consultar la informacion: ${error}`);
    })
});

router.get('/items/:id', function (req, res) {

    Promise.all([
        rest.getJSON(`/items/${req.params.id}`),
        rest.getJSON(`/items/${req.params.id}/description`)
    ]).then(([resId, resDescription]) => {
        let result = models.TransformDetailItem(resId.data, resDescription.data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    },(error)=> {
        res.statusCode = 404;
        res.end(`Hubo un error al consultar la informacion: ${error}`);
    })
});


module.exports = router;
