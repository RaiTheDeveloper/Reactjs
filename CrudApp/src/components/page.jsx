import React from 'react'
import { useState,useEffect } from 'react';
import { fetchitems, fetchQueryItems } from '../services/apiservice';
import {Header} from "./header.jsx";
import SearchBar from './searchbar.jsx';
import { useSearchParams } from 'react-router-dom';
const Page = () => {
const [searchParams] =useSearchParams();
const query = searchParams.get('q');
const [items,setItems]= useState([]);
if(!query)
useEffect(()=>{
    const loadItems = async()=>{
        const fetcheditems= await fetchitems();
        setItems(fetcheditems);
    }
    loadItems();
},[]);
else 
useEffect(()=>{
    const loadItems = async()=>{
        const fetcheditems= await fetchQueryItems(query);
        setItems(fetcheditems);
    }
    loadItems(query);
},[query]);
console.log(items);
return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="p-2">
        <SearchBar />
      </div>
      <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
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
    </div>
  );

};

export default Page