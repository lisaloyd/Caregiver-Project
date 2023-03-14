import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ClientContext = createContext();

export default ClientContext;


export const ClientProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/care_requests/";
  
  
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();
  const submitNote = async(noteData) => {
    try {
      let finalData = {
        note: registerData.note
      }
      let response = await axios.post(`${BASE_URL}/2/notes/`, finalData) // TODO make sure this matches the backend, ask about 1 in url
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

  

  

  

  const contextData = {
    submitNote,
    isServerError,
  };

  return (
    <ClientContext.Provider value={contextData}>{children}</ClientContext.Provider>
  );
};
