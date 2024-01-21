import React, { useState } from 'react'
import axios from "axios"
import "./employer.css"

function GetEmployer() {
    const [employerNumber, setEmployerNumber] = useState(null)
    
      const HandleGetEmployer = async (e) => {
          e.preventDefault();
    
          try {
            const response = await axios.get(`http://localhost:8000/user/employer/${employerNumber}`);
            console.log('Response from server:', response.data);
          } catch (error) {
            console.error('Error making GET request:', error);
          }
      };
    
      const handleChange = (e) => {
        setEmployerNumber(e.target.value)
      };

  return (
    <>
        <form onSubmit={HandleGetEmployer}>

        <label for="employerNumber">Employer Phone Number:</label>
        <input type="number" id="employerNumber" name="employerNumber" value={employerNumber}
        onChange={handleChange} required/>

        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default GetEmployer
