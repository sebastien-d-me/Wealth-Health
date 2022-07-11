import "./List.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import DataTable from "../../components/DataTable/DataTable";


function List() {
    // Employees list
    const employees = JSON.parse(localStorage.getItem("employees")) || [];


    // Template
    return (
        <>
            {/* Title */}
            <PageTitle title="View current employee(s)" />
                
            {/* Table */}
            <DataTable data={employees} nameData={Object.getOwnPropertyNames(employees[0] || "")} />
        </>
    );
}

export default List;