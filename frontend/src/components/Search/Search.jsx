import React, { useContext } from 'react';
import useCustomForm from "../../hooks/useCustomForm";


const Search = ( props ) => {
    
    const { submitSearch } = props;
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
            
                <button >Search</button>
            </form>
        </div>
    );
}
export default Search