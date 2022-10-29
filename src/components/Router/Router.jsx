import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../../pages/Main/Main";
import Products from "../../pages/Products/Products";
import SearchPage from "../../pages/Search/SearchPage";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/search" element={<SearchPage />} />
        </Routes>
    );
}

export default Router;