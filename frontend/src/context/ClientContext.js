import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cuid from "cuid";

const ClientContext = createContext();

export default ClientContext;

function setSearchObject(results) {
  if (!results) {
    return null;
  }
  return {
    results: results.data,
    
  };
}
export const ClientProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/care_requests/";
  const [SearchObject, setSearchObject] = useState(setSearchObject(decodedUser));
  

  
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();
  const id = cuid()
  const submitNote = async(noteData) => {
    try {
      let finalData = {
        note: noteData.note
      }
      let response = await axios.post(`${BASE_URL}/${id}/notes/`, finalData) // TODO make sure this matches the backend, ask about 1 in url
      if (response.status === 201) {
        
        setIsServerError(false);
        navigate("/client");
      } else {
        navigate("/register"); // TODO if form fails go back to submission page to view error
      }
    } catch (error) {
      console.log (error)
    }
  }

  const submitSearch = async(searchData) => {
    try {
      
      let response = await axios.get(`${BASE_URL}/zipcode/${searchData}`)
      if (response.status === 200) {
        setIsServerError(false);
        navigate("/search");
      } else {
        navigate("/error");
      }
    } catch (error) {
      
    }
  }

  

  

  const contextData = {
    submitNote,
    isServerError,
  };

  return (
    <ClientContext.Provider value={contextData}>{children}</ClientContext.Provider>
  );
};
