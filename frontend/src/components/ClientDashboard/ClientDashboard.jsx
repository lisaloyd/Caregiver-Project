import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import useCustomForm from "../../hooks/useCustomForm";

const ClientDashboard = () => {
  const [searchContractors, setSearchContractors] = useState([])
  const [allResponse, setAllResponse] = useState([])
const[user,setUser]=useState()
const[userdetails,setUserdetails]=useState([])

useEffect(()=>{
  getSearchContractors()
},[])
const submit=()=>{
let userDetails= allResponse.filter(data=>{
    return data.zipcode==user
  })
  setUserdetails(userDetails)
  console.log("userDetails",userDetails)
}

  

  async function getSearchContractors(){
    const response = await axios.get('http://127.0.0.1:8000/api/auth/users/');
    console.log("res",response.data)
    setAllResponse(response.data)
    // if (response.data.is_contractors) {
     
      
    //   setSearchContractors(
    //     response.data.is_contractors.map((is_contractor) =>({
    //       username: is_contractor.username.zipcode,
    //     }))
    //   )
    // }
  }
  console.log("user",user)
  return (  
   <div>
    <input type='text'  onChange={(e)=>setUser(e.target.value)} />
    <button onClick={submit}>Submit</button>
   { userdetails.map(data=>{
      return(
        <p>{data?.username}</p>
      )
    })}
   </div> 
  );
}
 
export default ClientDashboard;



// const ClientDashboard = (props) => {
//     const { submitNote } = props;
//     const defaultValues = {
//         notes: ""
//     }
//     const [formData, handleInputChange, handleSubmit] = useCustomForm(
//         defaultValues,
//         submitNote
//       );
//     return (
//         <div className="container">
//         <form className="form" onSubmit={handleSubmit}>
//           <label>
//             Notes:{" "}
//             <input
//               type="text"
//               name="notes"
//               value={formData.notes}
//               onChange={handleInputChange}
//             />
//           </label>
          
        
         
        
//           <button>Submit Note</button>
//         </form>
//       </div>
//     )
// }
// export default ClientDashboard