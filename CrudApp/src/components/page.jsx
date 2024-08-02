import React from 'react'
import { useState,useEffect } from 'react';
import { fetchitems } from '../services/apiservice';
import {Header} from "./header.jsx";
const Page = () => {

const [items,setItems]= useState([]);

useEffect(()=>{
    const loadItems = async()=>{
        const fetcheditems= await fetchitems();
        setItems(fetcheditems);
    }
    loadItems();
},[]);

console.log(items);
return (
    <>
    <Header/>
    <div className="p-6 bg-gray-100 min-h-screen">
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(item => (
          <li key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-lg font-bold mb-2">Price: ${item.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-2">Category: {item.category}</p>
              <p className="text-gray-600 mb-2">Stock: {item.stock}</p>
              <p className="text-yellow-500 mb-2">Rating: {item.rating.toFixed(1)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
  

};

export default Page