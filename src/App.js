import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployer from './pages/employer/CreateEmployer';
import CreateWorker from './pages/worker/CreateWorker';
import GetEmployer from "./pages/employer/GetEmployer";
import GetWorker from "./pages/worker/GetWorker";
import Navbar from './components/Navbar/navbar';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="routes">
          <Routes>
            <Route path="/create_employer" element={<CreateEmployer />} />
            <Route path="/create_worker" element={<CreateWorker />} />
            <Route path="/get_employer" element={<GetEmployer />} />
            <Route path="/get_worker" element={<GetWorker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
