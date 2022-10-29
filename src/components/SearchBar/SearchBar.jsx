import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';

const SearchBar = () => {
    const inputReference = useRef();
    const navigate = useNavigate();

    const searchProduct = event => {
        event.preventDefault();
        navigate('/search', {
             state: {
                query: inputReference.current.value
             }
            });
    }

    return (
        <div className="form-container">
            <form method="GET" className="form" onSubmit={ e => searchProduct(e) }>
		    	<label htmlFor="" className="search-label" >Buscar producto:</label>
		    	<input type="text" className="search-bar" ref={inputReference}/>
		    	<button className="search-btn">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;