import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signin from 'pages/Signin';
import Test from 'pages/Test';
import Products from 'pages/Products';
import Load from 'pages/Load';
import Search from 'pages/Search';
import Product from 'pages/Product';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/test" element={<Test />} />
      <Route path="/product/search" element={<Search />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/load" element={<Load />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default Router;
