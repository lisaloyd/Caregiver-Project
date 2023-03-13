import React, { useState, useContext } from 'react';
import useCustomForm from "../../hooks/useCustomForm";
import ClientContext from "../../context/ClientContext";


const ClientDashboard = (props) => {
    const { submitNote } = useContext(ClientContext);
    const defaultValues = {
        notes: ""
    }
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues,
        submitNote
      );
    return (
        <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Notes:{" "}
            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </label>
          
        
         
        
          <button>Submit Note</button>
        </form>
      </div>
    )
}
export default ClientDashboard