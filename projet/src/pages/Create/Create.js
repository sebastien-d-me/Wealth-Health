import "./Create.css";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
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
        "First name": "",
        "Last name": "",
        "Date of birth": "",
        "Start date": "",

        /* Address */
        "State": "",
        "ZIP Code": "",
        "Street": "",
        "City": "",

        /* Department */
        "Department": ""     
    });


    // Form
    /* Elements */
    const handleFormChange = (event) => {
        setEmployee({
            ...employee, [event.target.name]: event.target.value
        });
    };

    /* DatePicker */
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const handleFormDateChange = (name, value) => {
        setEmployee({
            ...employee, [name]: new Date(value).toLocaleDateString("fr")
        });
    };

    /* Dropdown */
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
            {/* Title */}
            <PageTitle title="Create a new employee" />
            
            {/* Form */}
            <form action="#">
                {/* Form Informations */}
                <div className="form-divider">
                    <span>Informations</span>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="first-name">First name</label>
                        <input id="first-name" name="First name" onChange={handleFormChange} placeholder="Your first name" type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="last-name">Last name</label>
                        <input id="last-name" name="Last name" onChange={handleFormChange} placeholder="Your last name" type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="date-of-birth">Date of birth</label>
                        <DatePicker className="date-picker-input" dateFormat="dd/MM/yyyy" id="date-of-birth" locale={fr} onChange={(date) => {handleFormDateChange("Date of birth", date); setDateOfBirth(date)} } placeholderText="Your birth date" selected={dateOfBirth} />
                    </div>
                    <div className="form-col">
                        <label htmlFor="start-date">Start date</label>
                        <DatePicker className="date-picker-input" dateFormat="dd/MM/yyyy" id="start-date" locale={fr} onChange={(date) => {handleFormDateChange("Start date", date); setStartDate(date)} } placeholderText="Your start date" selected={startDate} />
                    </div>
                </div>


                {/* Form Address */}
                <div className="form-divider">
                    <span>Address</span>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="state">State</label>
                        <Dropdown name="State" onChangeDropdown={(value) => handleFormDropdownChange("State", value)} optionsList={States} optionValue="abbreviation" optionTitle="name" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" name="ZIP Code" onChange={handleFormChange} type="number" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="street">Street</label>
                        <input id="street" name="Street" onChange={handleFormChange} type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="city">City</label>
                        <input id="city" name="City" onChange={handleFormChange} type="text" />
                    </div>
                </div>


                {/* Form Department */}
                <div className="form-divider">
                    <span>Department</span>
                </div>

                <div className="form-row form-row-full">
                    <div className="form-col form-col-full">
                        <label htmlFor="department">Department</label>
                        <Dropdown id="departement" name="Department" onChangeDropdown={(value) => handleFormDropdownChange("Department", value)} optionsList={Departments} optionValue="value" optionTitle="title" />
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