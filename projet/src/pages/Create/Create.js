import "./Create.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import States from "../../assets/data/States.json";
import Departments from "../../assets/data/Departments.json";
import Modal from "../../components/Modal/Modal";


function Create() {
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    const modalParameter = {
        "backgroundColor": "#EEEEEE",
        "borderRadius": 10,
        "boxShadow": "0 0 5px #1B1919",
        "color": "#1B1919",
        "fontSize": 18,
        "height": "fit-content",
        "padding": "20px 50px",
        "width": "fit-content"
    }


    // Employee
    const [employee, setEmployee] = useState({
        /* Informations */
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "startDate": "",

        /* Address */
        "state": "",
        "zipCode": "",
        "street": "",
        "city": "",

        /* Department */
        "department": ""     
    });


    // Form
    const handleFormChange = (event) => {
        setEmployee({
            ...employee, [event.target.name]: event.target.value
        });
    };

    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const handleFormDateChange = (name, value) => {
        setEmployee({
            ...employee, [name]: value
        });
    };

    const handleFormDropdownChange = (name, value) => {
        setEmployee({
            ...employee, [name]: value
        });
    }

    
    // Save 
    const saveEmployee = () => {
        /* Show the modal */
        setModalShow(!modalShow);
        setDisplayModal(true);

        /* Get the list of current employees */
        const employees = JSON.parse(localStorage.getItem("employees")) || [];

        /* Add the employee to the list */
        employees.push(employee);

        /* Save the new employees list */
        localStorage.setItem("employees", JSON.stringify(employees));
    }


    // Template
    return (
        <>
            <span className="create-title">Create a new employee</span>
            
            <form action="#">
                {/* Form Informations */}
                <div className="form-divider">
                    <span>Informations</span>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="first-name">First name</label>
                        <input id="first-name" name="firstName" onChange={handleFormChange} placeholder="Your first name" type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="last-name">Last name</label>
                        <input id="last-name" name="lastName" onChange={handleFormChange} placeholder="Your last name" type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="date-of-birth">Date of birth</label>
                        <DatePicker className="date-picker-input" id="date-of-birth" onChange={(date) => {handleFormDateChange("dateOfBirth", date); setDateOfBirth(date)} } placeholderText="Your birth date" selected={dateOfBirth} />
                    </div>
                    <div className="form-col">
                        <label htmlFor="start-date">Start date</label>
                        <DatePicker className="date-picker-input" id="start-date" onChange={(date) => {handleFormDateChange("startDate", date); setStartDate(date)} } placeholderText="Your start date" selected={startDate} />
                    </div>
                </div>


                {/* Form Address */}
                <div className="form-divider">
                    <span>Address</span>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="state">State</label>
                        <Dropdown name="state" onChangeDropdown={(value) => handleFormDropdownChange("state", value)} optionsList={States} optionValue="abbreviation" optionTitle="name" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" name="zipCode" onChange={handleFormChange} type="number" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="street">Street</label>
                        <input id="street" name="street" onChange={handleFormChange} type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" onChange={handleFormChange} type="text" />
                    </div>
                </div>


                {/* Form Department */}
                <div className="form-divider">
                    <span>Department</span>
                </div>

                <div className="form-row form-row-full">
                    <div className="form-col form-col-full">
                        <label htmlFor="department">Department</label>
                        <Dropdown name="department" onChangeDropdown={(value) => handleFormDropdownChange("department", value)} optionsList={Departments} optionValue="value" optionTitle="title" />
                    </div>
                </div>
            </form>


            {/* Form Button */}
            <button id="form-btn" onClick={saveEmployee} type="submit">Save</button>


            {/* Form Message */}
            {
                displayModal === true &&
                <Modal key={modalShow} id="modal-created" parameter={modalParameter} message="Employee Created !" />
            }
        </>
    );
}

export default Create;