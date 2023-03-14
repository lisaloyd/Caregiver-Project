import React, { useContext } from 'react';
import ClientContext from "../../context/ClientContext";
import useCustomForm from "../../hooks/useCustomForm";


const Search = ({ getSearchOutcome }) => {
    
    const { submitSearch } = useContext(ClientContext);
    const defaultValues = {
        searchTerm: ""
    }
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues,
        submitSearch
      );
    return (
        <div className="search-bar">
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              value={formData.searchTerm}
              onChange={handleInputChange}
            />
            
                <button style={{color: "white"}} >Search</button>
            </form>
        </div>
    );
}
export default Search