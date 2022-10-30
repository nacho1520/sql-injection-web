import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../../pages/Main/Main";
import Products from "../../pages/Products/Products";
import SearchPage from "../../pages/Search/SearchPage";
import Login from "../../pages/Login/Login";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    );
}

export default Router;