import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/navbar';
import Home from './pages/home/home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Contact from './pages/contact/contact';
import AllCategories from './pages/allCategory/allCategories';
import Category from './pages/category/category';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<ProductDetails />} path='/productDetails/:ProductId' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<AllCategories />} path='/Categories' />
        <Route element={<Category />} path='/category/:categoryTitle' />
      </Routes>
    </>
  );
}

export default App;
