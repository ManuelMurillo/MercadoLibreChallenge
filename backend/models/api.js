exports.TransformSearchQuery = function (response) {
    return [response].map((data) => {

        let categories = data.data.filters[0] !== undefined ?
            data.data.filters
                .filter((element) => element.id === 'category')
                .map((info) => info.values)[0]
                .map((value) => value.path_from_root)[0]
                .map((value) => value.name) :
                [];

        let items = data.data.results
            .map((element) => {
                return {
                    id: element.id,
                    title: element.title,
                    price: {
                        currency: element.currency_id,
                        amount: element.price,
                        decimals: 0,
                    },
                    picture: element.thumbnail,
                    condition: element.condition,
                    free_shipping: element.shipping.free_shipping,
                }
            })

        return {
            author: {
                name: 'Jhoan Manuel',
                lastName: 'Murillo Yara'
            },
            categories: categories,
            items: items,
        }
    })
}

exports.TransformDetailItem = function (response1, response2) {

    let item = {
        id: response1.id,
        title: response1.title,
        price: {
            currency: response1.currency_id,
            amount: response1.price,
            decimals: 0,
        },
        picture: response1.thumbnail,
        condition: response1.condition,
        free_shipping: response1.shipping.free_shipping,
        sold_quantity: response1.sold_quantity,
        description: response2.plain_text,
    }

    return {
        author: {
            name: 'Jhoan Manuel',
            lastName: 'Murillo Yara'
        },
        item: item,
    }
}
