import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://aritno9.herokuapp.com/'
    }
)