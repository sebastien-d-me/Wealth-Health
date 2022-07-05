import "./Create.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import States from "../../assets/data/States.json";
import Departments from "../../assets/data/Departments.json";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";


function Create() {
    /* Modal */
    const [modalShow, setModalShow] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    const saveEmployee = () => {
        setModalShow(!modalShow);
        setDisplayModal(true);
    }


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
                        <input id="first-name" placeholder="Your first name" type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="last-name">Last name</label>
                        <input id="last-name" placeholder="Your last name" type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="date-of-birth">Date of birth</label>
                        <input id="date-of-birth" type="date" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="start-date">Start date</label>
                        <input id="start-date" type="date" />
                    </div>
                </div>


                {/* Form Address */}
                <div className="form-divider">
                    <span>Address</span>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="state">State</label>
                        <Dropdown name="state" optionsList={States} optionValue="abbreviation" optionTitle="name" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                    </div>
                </div>


                {/* Form Department */}
                <div className="form-divider">
                    <span>Department</span>
                </div>

                <div className="form-row form-row-full">
                    <div className="form-col form-col-full">
                        <label htmlFor="department">Department</label>
                        <Dropdown name="department" optionsList={Departments} optionValue="value" optionTitle="title" />
                    </div>
                </div>
            </form>


            {/* Form Button */}
            <button id="form-btn" onClick={saveEmployee}>Save</button>


            {/* Form Message */}
            {
                displayModal === true &&
                <Modal key={modalShow} id="modal-created" message="Employee Created !" />
            }
        </>
    );
}

export default Create;