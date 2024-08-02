import React from 'react'
import { useState,useEffect } from 'react'
import { fetchSingleItem } from '../services/apiservice';
import { useParams } from 'react-router-dom';


const Product = () => {
    const [product,setProduct]=useState([]);
    const {id} = useParams();   
   
    useEffect(()=>{
        const loadProduct = async(id)=>{
            // console.log(id);
            const fetchedProduct = await fetchSingleItem(id);
            setProduct(fetchedProduct);
        };
        loadProduct(id);
    },[id]);
    if (!product) return <p>Loading...</p>;
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src={product.thumbnail} // Assuming images is an array and we want to show the first image
                alt={product.title}
                className="w-full h-64 md:w-1/2 object-cover"
              />
              <div className="p-6 md:w-1/2">
                <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                {/* <p className="text-lg font-bold mb-4">Price: ${product.price.toFixed(2)}</p> */}
                <p className="text-gray-600 mb-4">Category: {product.category}</p>
                <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
                {/* <p className="text-yellow-500 mb-4">Rating: {product.rating.toFixed(1)}</p> */}
                <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
                <p className="text-gray-600 mb-4">SKU: {product.sku}</p>
           
               
              </div>
            </div>
          </div>
        </div>
      );
}

export default Product