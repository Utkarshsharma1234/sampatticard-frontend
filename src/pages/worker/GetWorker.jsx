import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetWorker() {

    const [workerNumber, setWorkerNumber] = useState(null)

    const handleChange = (e) =>{
        setWorkerNumber(e.target.value)
    }

    const HandleGetWorker = async (e) => {
        e.preventDefault();
  
        try {
          const response = await axios.get(`https://conv.sampatticards.com/user/domestic_worker/${workerNumber}`);
          toast.success("The worker with the given phone number exists.");
          console.log('Response from server:', response.data);
        } catch (error) {
          toast.error("Worker not found. Please register the worker first.")
        }
    };

  return (
    <>
        <form onSubmit={HandleGetWorker}>

            <label for="workerNumber">Domestic Worker Phone Number:</label>
            <input type="number" id="workerNumber" name="workerNumber" value={workerNumber}
            onChange={handleChange} required/>

            <button type="submit">Submit</button>
    </form>
    <ToastContainer/>
    </>
  )
}

export default GetWorker
