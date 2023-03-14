import React, { useState } from 'react';

const Search = ({ getSearchOutcome }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (typeof getSearchOutcome === "function") {
            getSearchOutcome(searchTerm);
        }
    };

    return (
        <div className="search-bar">
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
            <input 
                type='search'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
                <button tyle={{color: "white"}} to="/my-search">Search</button>
            </form>
        </div>
    );
}
export default Search