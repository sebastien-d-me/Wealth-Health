import "./List.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import DataTable from "../../components/DataTable/DataTable";


function List() {
    // Employees list
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    let employeesNameData;
    if(employees.length !== 0) {
        employeesNameData = Object.getOwnPropertyNames(employees[0]) || "";
    } else {
        employeesNameData = [];
    }


    // Template
    return (
        <>
            {/* Title */}
            <PageTitle title="View current employee(s)" />
                
            {/* Table */}
            <DataTable data={employees} nameData={employeesNameData} />
        </>
    );
}

export default List;