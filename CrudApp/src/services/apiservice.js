import axios from 'axios';

const api = axios.create({
    baseURL:'https://dummyjson.com'
});
export const fetchSingleItem = async(id)=>{
    console.log(id);
    const response = await api.get(`/products/${id}`)
    return response.data;
}
export const fetchitems = async()=>{
const response = await api.get('/products');
return response.data.products;
}