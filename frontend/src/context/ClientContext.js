// import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import cuid from "cuid";



// const ClientContext = createContext();

// export default ClientContext;
// //setSearchOutcome
// function setSearchObject(results) {
//   if (!results) {
//     return null;
//   }
//   return {
//     results: results.data,
    
//   };
// }
// export const ClientProvider = ({ children }) => {
 
//   const BASE_URL = "http://127.0.0.1:8000/api/care_requests/";
//   const [search, setSearch] = useState(null); //searchData
//   const [notes, setNotes] = useState([]);

  
//   const [isServerError, setIsServerError] = useState(false);
//   const navigate = useNavigate();
//   const id = cuid();
//   const submitNote = async(noteData) => {
//     try {
//       let finalData = {
//         note: noteData.note
//       }
//       let response = await axios.post(`${BASE_URL}/${id}/notes/`, finalData) // TODO make sure this matches the backend, ask about 1 in url
//       if (response.status === 201) {
//         setNotes([...notes, response.data])
//         setIsServerError(false);

//         navigate("/client");
//       } else {
//         navigate("/register"); 
//       }
//     } catch (error) {
//       console.log (error)
//     }
//   }

//   const submitSearch = async(searchData) => {
//     try {
      
//       let response = await axios.get(`${BASE_URL}/zipcode/${searchData}`)
//       if (response.status === 200) {
//         setIsServerError(false);
//         setSearch(response.data);
//         navigate("/search");
//       } else {
//         navigate("/error");
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const contextData = {
//     submitNote,
//     submitSearch,
//     isServerError,
//     search,
//     notes,
//   };

//   return (
//     <ClientContext.Provider value={contextData}>{children}</ClientContext.Provider>
//   );
// };
