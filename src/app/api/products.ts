import axios from "axios";

const apiProducts = axios.create({
    baseURL: 'https://fakestoreapi.com'
}) 


export default apiProducts;