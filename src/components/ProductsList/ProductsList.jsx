import React, { useState, useEffect } from "react";
import './ProductsList.css';
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ query }) => {
    const [category, setCategoy] = useState(query);
    const { data, isLoading, fetchData } = useFetch(`/api/products?category=${category}`);


    useEffect(() => {
        setCategoy(query);   
    })

    useEffect(() => {
        fetchData();
    }, [category])

    const showProducts = () => {
        return(
            <div className="productsContainer">
                { data.length > 0 && 
                data.map((product, index) => {
                    return(
                        <div className="col-sm-6 col-md-3 my-4" key={index}>
                            <ProductCard image={`http://localhost:4000/images/products/${product.image}`} 
                            title={product.name} 
                            description={product.description} 
                            price={product.price} 
                            />
                        </div>
                    );})
                }
            </div>
        );
    }

    return(
        <div>
            { !data && 
                <div className="loader-container">
                    <LoaderSpinner />
                </div> 
            }
            { data && data.length > 0 && 
                showProducts()
            }
        </div>
    );
}

export default ProductsList;