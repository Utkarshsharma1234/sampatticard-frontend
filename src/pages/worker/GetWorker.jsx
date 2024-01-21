import React, { useState } from 'react'
import axios from "axios"

function GetWorker() {

    const [workerNumber, setWorkerNumber] = useState(null)

    const handleChange = (e) =>{
        setWorkerNumber(e.target.value)
    }

    const HandleGetWorker = async (e) => {
        e.preventDefault();
  
        try {
          const response = await axios.get(`http://localhost:8000/user/domestic_worker/${workerNumber}`);
          console.log('Response from server:', response.data);
        } catch (error) {
          console.error('Error making GET request:', error);
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
    </>
  )
}

export default GetWorker
