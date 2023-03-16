import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ClientDashboard = () => {
  const [searchContractors, setSearchContractors] = useState([])
  const [allResponse, setAllResponse] = useState([])
const[user,setUser]=useState()
const[userdetails,setUserdetails]=useState([])
const [flag,setFlag]=useState(false)
const [show,setShow]=useState(false)
const [quary,setQueary]=useState('')
const [date,setDate]=useState(new Date)
console.log("quary and date",quary,date)

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
    
  }
  console.log("user",user)
  return (  
   <div>
    <input type='text'  onChange={(e)=>setUser(e.target.value)}className='form-control' placeholder='Please type zipcode here...' style={{width:"20%"}} />
    <button onClick={submit}>Submit</button>
   { userdetails.map(data=>{
      return(
        <p>{data?.username}</p>
      )
    })}
    <button onClick={()=>setFlag(true)} className="btn-success">Help</button>
    {
      flag ?
      <div>
        <input type="text" className='form-control' onChange={(e)=>setQueary(e.target.value)}  placeholder='Please type your need here...' style={{width:"60%"}} />
        <input type='date'className='form-control' onChange={(e)=>setDate(e.target.value)} style={{width:"60%"}}/>
        <button onClick={()=>setShow(true)}>Submit</button>
        {show?
          <div>
           <p>{quary}</p>
         <p>{date}</p>
         </div>
         :null
        }
      </div>
      :null
    }
   </div> 
  );
}
 
export default ClientDashboard;



