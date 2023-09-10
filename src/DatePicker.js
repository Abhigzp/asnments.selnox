import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className="date-picker">
      <div className="date-picker-header" onClick={toggleDatePicker}>
        <span>Select a Date</span>
        <span className="date-picker-icon">▼</span>
      </div>
      {isOpen && (
        <div className="date-picker-dropdown">
          {/* Calendar UI goes here */}
          {/* Handle date selection */}
        </div>
      )}
      <input
        type="text"
        value={selectedDate || ''}
        placeholder="Select a date"
        readOnly
      />
    </div>
  );
};

export default DatePicker;
