import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductsList from '../../components/ProductsList/ProductsList';
import '../../assets/css/pages.css';

const Products = () => {
    const [searchParams] = useSearchParams();
    
    return(
        <div className="page-container">
            <h1>{searchParams.get('category')}</h1>
            <ProductsList query={searchParams.get('category')} />
        </div>
    );
}

export default Products;