import axios from "axios"


const $axios = axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
})
export default $axios
