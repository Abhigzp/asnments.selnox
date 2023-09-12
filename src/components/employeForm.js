// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormWrapper = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const InputGroup = styled.div`
//   // margin-bottom: 20px;
// `;

// const Label = styled.label`
//   // display: block;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
  
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// function EmployeeForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     lname: '',
//     dob: '',
//     startDate: '',
//     endDate: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate start and end dates
//     if (new Date(formData.startDate) >= new Date(formData.endDate)) {
//       alert('Start date must be less than end date');
//       return;
//     }
//     // Handle form submission
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <FormWrapper>
//       <form onSubmit={handleSubmit}>
//         <div style={{display:"flex", justifyContent:"space-around" }}>
//         <div style={{ margin: "5px" }}>
//         {/* <InputGroup> */}
//           <Label>First Name</Label>
//           <Input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         {/* </InputGroup> */}
//         </div>
//         <div style={{ margin: "5px" }}>
//         {/* <InputGroup> */}
//           <Label>Last Name</Label>
//           <Input
//             type="text"
//             name="lname"
//             value={formData.lname}
//             onChange={handleChange}
//             required
//           />
//         {/* </InputGroup> */}
//         </div>
//         </div>
        
//         <InputGroup>
//           <Label>Date of Birth</Label>
//           <Input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </InputGroup>
//         <div  style={{display:"flex", justifyContent:"space-around" }}>
//         <div>
//         <InputGroup>
//           <Label>Start Date</Label>
//           <Input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//             required
//           />
//         </InputGroup>
//         </div>
//        <div>
//         <InputGroup>
//           <Label>End Date</Label>
//           <Input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//             required
//           />
//         </InputGroup>
//         </div>
//         </div>
//         <InputGroup>
//           <Label>Description</Label>
//           <TextArea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//           />
//         </InputGroup>
//         <button type="submit">Submit</button>
//       </form>
//     </FormWrapper>
//   );
// }

// export default EmployeeForm;


import "./employeForm.css";

import React, { useState } from 'react';

const EmployeeForm = () => {
  const [userData,setUserData]=useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    startDate: '',
    endDate: '',
    currentSalary: '',
    joiningDate: '',
    describeYourself: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(prevValue=> [...prevValue,formData])
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      startDate: "",
      endDate: "",
      currentSalary: "",
      joiningDate: "",
      describeYourself: ""
    });
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Employee Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-row">
          <label className="form-label" htmlFor="firstName">First Name</label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-row">
          <label className="form-label" htmlFor="dob">Date of Birth</label>
          <input
            className="form-input"
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-row">
          <label className="form-label" htmlFor="startDate">Start Date</label>
          <input
            className="form-input"
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="endDate">End Date</label>
          <input
            className="form-input"
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-row">
          <label className="form-label" htmlFor="currentSalary">Current Salary</label>
          <input
            className="form-input"
            type="number"
            id="currentSalary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-row">
          <label className="form-label" htmlFor="joiningDate">Joining Date</label>
          <input
            className="form-input"
            type="date"
            id="joiningDate"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="date-row">
          <label className="form-label" htmlFor="describeYourself">
            Describe Yourself
          </label>
          <textarea
            className="form-input"
            id="describeYourself"
            name="describeYourself"
            value={formData.describeYourself}
            onChange={handleChange}
            placeholder="Describe yourself"
          />
        </div>
        <div className="clearfix"></div>
        <div className="form-buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="save">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;


