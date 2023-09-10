import React, { useState } from 'react';
import employeesData from './employees.json';

const EmployeeForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleEmployeeDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="employee-dropdown">
      <div className="employee-dropdown-header" onClick={toggleEmployeeDropdown}>
        <span>Select an Employee</span>
        <span className="employee-dropdown-icon">▼</span>
      </div>
      {isOpen && (
        <div className="employee-dropdown-dropdown">
          <div className="employee-categories">
            {/* Render parent categories and checkboxes */}
            {/* Handle checkbox selections */}
          </div>
          <div className="employee-subcategories">
            {/* Render subcategories */}
          </div>
        </div>
      )}
      <input
        type="text"
        value={selectedCategory || ''}
        placeholder="Select an employee"
        readOnly
      />
    </div>
  );
};

export default EmployeeForm;
