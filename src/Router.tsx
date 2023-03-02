import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signin from 'pages/Signin';
import Test from 'pages/Test';
import Products from 'pages/Products';
import Product from 'pages/Product';
import Load from 'pages/Load';
import { ChatHandler } from 'pages/Chat';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/test" element={<Test />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/load" element={<Load />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/chat/:id" element={<ChatHandler roomId={1} />} />
    </Routes>
  );
};

export default Router;
