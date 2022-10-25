import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../../pages/Main/Main";
import Products from "../../pages/Products/Products";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/products" element={<Products />} />
        </Routes>
    );
}

export default Router;