import React, { useState } from 'react';
import axios from "axios";


const SearchResult = ({}) => {
    const [searchOutcome, setSearchOutcome] = useState([]);

    async function getSearchOutcome(searchTerm) {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/care_requests/all/"
        );
        if (response.data.care_request)
         setSearchOutcome(
            response.data.care_request.map((care_request) =>({
                id: care_request.id.zipcode, 
            }))                          
          );
        }    
    }
    return (
        <div>
            <Search getSearchOutcome={getSearchOutcome} />
        </div>
    )

export default SearchResult;