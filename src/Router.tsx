import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signin from 'pages/Signin';
import Test from 'pages/Test';
import Products from 'pages/Products';
import Load from 'pages/Load';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/test" element={<Test />} />
      {
      /* 
      /product =>  모든 매물 보여주는 페이지.(Products 컴포넌트 사용)
      /product/:id  => product 페이지에서 매물 클릭하면 나오는 매물 상세 정보 페이지. (Product 컴포넌트 사용)
      아래 페이지들은 이후 동적 라우팅
      */}
      <Route path="/product" element={<Products />} />
      <Route path="/product/load" element={<Load />} />
    </Routes>
  );
};

export default Router;
