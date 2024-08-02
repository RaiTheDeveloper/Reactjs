import axios from 'axios';

const api = axios.create({
    baseURL:'https://dummyjson.com'
});
export const fetchSingleItem = async(id)=>{
    console.log(id);
    const response = await api.get(`/products/${id}`)
    return response.data;
}

export const fetchQueryItems=async(query)=>{
    const response = await api.get(`/products/search?q=${query}`)
    return response.data.products;
}

export const fetchitems = async()=>{
const response = await api.get('/products');
return response.data.products;
}