import React, {useState } from 'react';
import axios from 'axios';
import "./employer.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployer() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employerNumber: '',
  });

  const HandleCreateEmployer = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post(`http://localhost:8000/user/employer/create`, formData);
        toast.success("Employer created successfully.")
        console.log('Response from server:', response.data);
      } catch (error) {
        toast.error("Please register the employer first.")
        console.error('Error making GET request:', error);
      }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <form onSubmit={HandleCreateEmployer}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name}
        onChange={handleChange} required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email}
        onChange={handleChange} required/>

        <label for="employerNumber">Phone Number of the Employer</label>
        <input type="number" id="employerNumber" name="employerNumber" value={formData.employerNumber}
        onChange={handleChange} required/>

        <button type="submit">Submit</button>
    </form>
    <ToastContainer/>
    </>
  )
}

export default CreateEmployer
