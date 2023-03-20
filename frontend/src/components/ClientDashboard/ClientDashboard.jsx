import React, { useState, useEffect } from "react";
import axios from "axios";
import './ClientDashboard.css'

const ClientDashboard = () => {
  const [searchContractors, setSearchContractors] = useState([]);
  const [allResponse, setAllResponse] = useState([]);
  const [user, setUser] = useState();
  const [userdetails, setUserdetails] = useState([]);
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const [zipcode, setZipcode] = useState();
  const [typeofCare, setTypeOfCare] = useState();
  const [allHelpRequest, setAllHelpRequest] = useState();
  const[id,setId]=useState()


  useEffect(() => {
    getSearchContractors();

  }, []);
  const submit = () => {
    let userDetails = allResponse.filter((data) => {
      return data.zipcode == user;
    });
    setUserdetails(userDetails);
  };

  async function getSearchContractors() {
    const response = await axios.get("http://127.0.0.1:8000/api/auth/users/");
    setAllResponse(response.data);
  }
  async function getAllHepRequest() {
    const token =localStorage.getItem("token")
    const response = await axios.get(
     `http://127.0.0.1:8000/api/care_requests/${id}/`,
     {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    );
    console.log("res", response.data);
    setAllHelpRequest(response.data);
  }
  const idSubmit=()=>{
    getAllHepRequest()
  }
  const handlesubmit = async () => {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMTY1NTQ3LCJpYXQiOjE2NzkzMDE1NDcsImp0aSI6IjM2ZDliZjQzODc3ZDQzNzNiMDg0YjdkYjY3MmU4YzY3IiwidXNlcl9pZCI6MywiaXNfY29udHJhY3RvciI6ZmFsc2UsInVzZXJuYW1lIjoiYmV0aHRob21wc29uIiwiZmlyc3RfbmFtZSI6IiIsInppcGNvZGUiOjc4MjEwfQ.-upgvSoaTJlGwRrhB2Yo6ADaNDZCZo0zRtgeYHXuKGQ"
     
    let data = {
      zipcode: user,
      type_of_care: typeofCare,
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/care_requests/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("post response", response);

      setShow(true)


  };
  return (
    <div className="main">
      <div>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        className="form-control"
        placeholder="Type zipcode here..."
        style={{ width: "100%" }}
      />
      <button className="submit" onClick={submit}>Submit</button>
      {userdetails.map((data) => {
        return data?.is_contractor &&
        <>
    
         <p>{data?.username}</p>
         </>
      })}
      <button className="submit" onClick={() => setFlag(true)} >
        Help
      </button>
      {flag ? (
        <div>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTypeOfCare(e.target.value)}
            placeholder="Type care request here..."
            style={{ width: "100%" }}
          />
          <button className="submit" onClick={handlesubmit}>Submit</button>
          {show ? (
            <div>
              <p>{typeofCare}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      {/* <input type="text" onChange={(e)=>setId(e.target.value)} placeholder="Type Id here" /> */}
      {/* <button onClick={idSubmit}>Submit</button> */}

          <div>
            <p>{allHelpRequest?.type_of_care}</p>
          </div>
          </div>
    </div>
  );
};

export default ClientDashboard;
