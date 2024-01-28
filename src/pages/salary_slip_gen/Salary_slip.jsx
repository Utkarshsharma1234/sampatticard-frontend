import React, { useState } from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Salary_slip() {

  const [workerNumber, setWorkerNumber] = useState(null)

  const handleChange = (e) =>{
    setWorkerNumber(e.target.value)
  }

  // url = "https://conv.sampatticards.com"
  const HandleGetSalarySlip =async (e) =>{
    e.preventDefault();

    try{
      const FileDownload = require("js-file-download");
  
      const response = await axios.get(`https://conv.sampatticards.com/user/generate_salary_slip/${workerNumber}`);

      FileDownload(response.data, `${workerNumber}_salary_slip.pdf`);
      console.log(response)
    }

    catch (error){
      toast.error("Domestic Worker with the given number doesn't exist.")
    }
  }


  return (
    <>
      <form onSubmit={HandleGetSalarySlip}>
        <label for="workerNumber">Domestic Worker Phone Number:</label>
        <input
          type="number"
          id="workerNumber"
          name="workerNumber"
          value={workerNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default Salary_slip;
