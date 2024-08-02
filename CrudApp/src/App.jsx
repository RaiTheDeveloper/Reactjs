import Page from "./components/page.jsx";
import Product from "./components/product.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <Router>
    <Routes>
    <Route exact path="/products/search" element={<Page/>}/>
    <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/products" element={<Page />} />
    </Routes>
  </Router>    )
}