import axios from 'axios'
import env from './environments/environments'

const HttpInstance = axios.create({
    baseURL: env.BaseUrl
});

export { HttpInstance };
