import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ProductBanner from "../ProductBanner/ProductBanner";

const ProductsSearched = ({ query }) => {
    const [products, setProducts] = useState(query);
    const { data, isLoading, fetchData } = useFetch(`/api/products/search?search=${products}`);

    useEffect(() => {
        setProducts(query);
    });

    useEffect(() => {
        fetchData();
    }, [products]);

    const showProducts = () => {
        return(
            <div>
                {
                    data.length > 0 &&
                    data.map((product, index) => {
                        return(
                            <div className="" key={index}>
                                <ProductBanner 
                                    name={product.name}
                                    price={product.price}
                                    image={`http://localhost:4000/images/products/${product.image}`}
                                    description={product.description}  />
                            </div>
                        );
                    })
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
            {
                data && data.length > 0 &&
                showProducts()
            }
        </div>
    );
}

export default ProductsSearched;