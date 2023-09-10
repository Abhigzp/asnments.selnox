import React from 'react';
import './App.css';
import EmployeeForm from './EmployeeDropdown';
import DatePicker from './DatePicker';

function App() {
  return (
    <div className="App">
      <h1>Employee Dropdown and Date Picker</h1>
      <div className="container">
        <EmployeeForm />
        <DatePicker />
      </div>
    </div>
  );
}

export default App;
