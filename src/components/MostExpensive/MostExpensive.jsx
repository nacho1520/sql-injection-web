import React from "react";
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../hooks/useFetch';
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import './MostExpensive.css';

const MostExpensive = () => {
    const { data, isLoading, fetchData } = useFetch('/api/products/expensive');

    const showProducts = () => {
        return(
            <div className="expensive-container">
                { data.length > 0 && 
                data.map((product, index) => {
                    return(
                        <div className="col-sm-6 col-md-3 my-4" key={index}>
                            <ProductCard image={`http://localhost:4000/images/products/${product.image}`} 
                            title={product.name} 
                            price={product.price} 
                            />
                        </div>
                    );})
                }
            </div>
        );
    }

    return (
        <div className="main-container">
            { isLoading && <LoaderSpinner /> }
            { data && data.length > 0 && 
                showProducts()
            }
        </div>
    );
}

export default MostExpensive;