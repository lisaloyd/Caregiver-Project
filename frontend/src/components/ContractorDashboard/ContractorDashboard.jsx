import React, { useState, useEffect } from "react";
import axios from "axios";

const ContractorDashboard = (props) => {
  const [zipcode, setZipcode] = useState();
  const [userdetails, setUserdetails] = useState([]);
  const [allResponse, setAllResponse] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getSearchContractors();
  }, []);
  async function getSearchContractors() {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/care_requests/all/"
    );
    console.log("res", response.data);
    setAllResponse(response.data);
  }
  const submit = () => {
    let userDetails = allResponse.filter((data) => {
      return data.zipcode == zipcode;
    });
    setUserdetails(userDetails);
    console.log("userDetails", userDetails);
  };
  console.log("date", date);
  return (
    
      <div className="main">
        <div className="search_container">
        <input
          type="text"
          onChange={(e) => setZipcode(e.target.value)}
          className="form-control"
          placeholder="Please type zipcode here..."
          style={{ width: "50%" }}
        />
        <button onClick={submit}>Submit</button>
        </div>
       
        {userdetails.map((data) => {
          return (
            <>
              <p>
                Client Id :{data.client_id} Type of Care :{data?.type_of_care}
              </p>
              ;
            </>
          );
        })}
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      {<p>I will be available on {date} </p>}
      </div>
      
    
  );
};
export default ContractorDashboard;
