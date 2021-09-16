import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iYOylb3Lzlz4m4CLeOcwy4ir_l-Tu9kRYjnxiLEjudQ'
    }
})