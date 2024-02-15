import axios from "axios";


const apiProductsPlat = axios.create({
    baseURL: ' https://api.escuelajs.co/api/v1'
})


export default apiProductsPlat;