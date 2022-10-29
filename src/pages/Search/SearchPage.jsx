import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import ProductsSearched from "../../components/ProductsSearched/ProductsSearched";
import '../../assets/css/pages.css';

const SearchPage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    
    return(
        <div className="page-container">
            <h1>Resultado de busqueda: {location.state.query}</h1>
            <ProductsSearched  query={location.state.query} />
        </div>
    );
}

export default SearchPage;