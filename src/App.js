import React from 'react';
import './App.css';
// import EmployeeForm from './EmployeeDropdown';
// import DatePicker from './DatePicker';
import EmployeeForm from "./components/employeForm"

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <EmployeeForm />
        <DatePicker /> */}
        <EmployeeForm/>
      </div>
    </div>
  );
}

export default App;
