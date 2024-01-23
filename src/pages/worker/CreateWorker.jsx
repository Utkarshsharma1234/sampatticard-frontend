import {useState, React} from 'react'
import "./worker.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateWorker() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        workerNumber: '',
        employerNumber : ''
      });
    
      const HandleCreateWorker = async (e) => {
          e.preventDefault();
    
          try {
            const response = await axios.post(`http://localhost:8000/user/domestic_worker/create`, formData);
            toast.success("Worker onboarded successfully.")
            console.log('Response from server:', response.data);
          } catch (error) {
            toast.error("Employer with the given phone number doesn't exist.")
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
      <form onSubmit={HandleCreateWorker}>
        <label for="name">Name of the worker:</label>
        <input type="text" id="name" name="name" value={formData.name}
        onChange={handleChange} required/>

        <label for="email">Email of the worker:</label>
        <input type="email" id="email" name="email" value={formData.email}
        onChange={handleChange} required/>

        <label for="workerNumber">Phone Number of the worker:</label>
        <input type="number" id="workerNumber" name="workerNumber" value={formData.workerNumber}
        onChange={handleChange} required/>

        <label for="employerNumber">Employer Phone Number:</label>
        <input type="number" id="employerNumber" name="employerNumber" value={formData.employerNumber}
        onChange={handleChange} required/>

        <button type="submit">Submit</button>
    </form>
    <ToastContainer/>
    </>
  )
}

export default CreateWorker
