import "./DataTable.css";
import { useState, useEffect } from "react";


function DataTable({data, nameData}) {
    // Sort data
    const [dataSorted, setDataSorted] = useState(data);
    const [dataShow, setDataShow] = useState(true);

    const sortData = (order, type) => {
        /* Do the filter */
        if(order === "ASC") {
            setDataSorted(dataSorted.sort((a, b) => a[type].localeCompare(b[type])));
        } else {
            setDataSorted(dataSorted.sort((a, b) => b[type].localeCompare(a[type])));
        }

        /* Refresh data */
        setDataShow(false);
    }

    /* Refresh data */
    useEffect(() => {
        setDataShow(true)
    }, [dataShow]);


    // Template
    return(
        <table className="data-table">
            {/* Nom des propriétés */}
            <thead className="data-table-head">
                <tr className="data-table-row">
                    {
                        nameData.map((name, index) =>
                            <td className="data-table-sort" key={index}>
                                <i className="data-table-sort-arrow ri-arrow-down-s-line" onClick={() => sortData("ASC", name)}></i>
                                {name}
                                <i className="data-table-sort-arrow ri-arrow-up-s-line" onClick={() => sortData("DESC", name)}></i> 
                            </td>
                        )
                    }
                </tr>
            </thead>

            {/* Valeurs des propriétés */}
            <tbody className="data-table-body">
                {
                    dataShow === true && dataSorted.map((element, index) => 
                        <tr className="data-table-row" key={index}>
                            {
                                nameData.map((name, index) => 
                                    <td className="data-table-body-value" key={index}>{element[name]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default DataTable;