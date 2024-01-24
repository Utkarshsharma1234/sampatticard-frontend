import React, { useState } from 'react'
import axios from "axios"
import "./employer.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetEmployer() {
    const [employerNumber, setEmployerNumber] = useState(null)
    
      const HandleGetEmployer = async (e) => {
          e.preventDefault();
    
          try {
            const response = await axios.get(`https://conv.sampatticards.com/user/employer/${employerNumber}`);
            toast.success("The employer with the given number exists")
            console.log('Response from server:', response.data);
          } catch (error) {
            toast.error("The employer is not registered. Please register the employer first.")
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
    <ToastContainer/>
    </>
  )
}

export default GetEmployer
