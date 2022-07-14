import "./DataTable.css";
import { useState, useEffect } from "react";


function DataTable({data, nameData}) {
    // Search
    const [dataSearchInput, setDataSearchInput] = useState("");
    const [dataSearched, setDataSearched] = useState([]);
    const [dataSearchActive, setDataSearchActive] = useState(false);

    useEffect(() => {
        let resultFound = [];

        /* If the field contains at least one value */
        if(dataSearchInput !== "") {

            /* Initialize states */
            setDataSearched([]);
            setDataSearchActive(true);

            /* For each employee */
            dataSorted.forEach((properties, index) => {
                /* Checks if the search matches an item */
                Object.keys(properties).forEach(function(key) {
                    if(properties[key].toLowerCase().includes(dataSearchInput.toLowerCase())) {
                        resultFound.push(data[index]);
                    }
                });
            });

            /* Put the results in the table */
            setDataSearched([...new Set(resultFound)]);
        } else {
            setDataSearchActive(false);
            setDataSearched([]);
        }
    }, [dataSearchInput]);


    // Sort
    const [dataSorted, setDataSorted] = useState(data);
    const [dataShow, setDataShow] = useState(true);

    const sortData = (order, type) => {
        /* Do the filter */
        if(order === "ASC") {
            if(dataSearchActive === false) {
                setDataSorted(dataSorted.sort((a, b) => a[type].localeCompare(b[type])));
            } else {
                setDataSearched(dataSearched.sort((a, b) => a[type].localeCompare(b[type])));
            }
        } else {
            if(dataSearchActive === false) {
                setDataSorted(dataSorted.sort((a, b) => b[type].localeCompare(a[type])));
            } else {
                setDataSearched(dataSearched.sort((a, b) => b[type].localeCompare(a[type])));
            }
        }

        /* Refresh */
        setDataShow(false);
    }


    // Entries
    const [selectedEntries, setSelectedEntries] = useState(10);
    const [minEntries, setMinEntries] = useState(0);
    const [maxEntries, setMaxEntries] = useState(0);

    const handleChangeEntries = (event) => {  
        setSelectedEntries(parseInt(event.target.value));  
        if(page * selectedEntries + 1 > maxPage) {
            setPage(0);
        }
    }

    // Pages 
    const [page, setPage] = useState(0);

    const maxPage = Math.ceil(data.length / selectedEntries);

    const handlePreviousPage = () => {
        if(page === 1) {
            setPage(0);
        } else {
            setPage((page + selectedEntries) % maxPage);
        }
    }

    const handleNextPage = () => {
        setPage((page + 1) % maxPage);
    }

    useEffect(() => {
        setMinEntries(page * selectedEntries + 1);
        setMaxEntries((page * selectedEntries) + selectedEntries);
    }, [page, selectedEntries])


    // Refresh
    useEffect(() => {
        setDataShow(true);
    }, [dataShow, dataSorted]);
    
  

    // Template
    return(
        <>
            {/* Search */}
            <span className="data-category">Search</span>
            <div className="data-search">
                <label htmlFor="search">Search</label>
                <input id="search" name="search" onChange={e => setDataSearchInput(e.target.value)} placeholder="Your search" type="search" />
            </div>

            {/* Entries */}
            <span className="data-category">Entries</span>
            <div className="data-entries">
                <div className="data-entries-select">
                    <label>Number of entries per page</label>
                    <select defaultValue={10} onChange={handleChangeEntries}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <span className="data-entries-total">Showing {minEntries} to {maxEntries} of {data.length} entries.</span>
            </div>

            {/* Pages */}
            <div>
                <button onClick={handlePreviousPage} disabled={!page}>Prev</button>
                <button onClick={handleNextPage} disabled={page === Math.ceil(data.length / selectedEntries) - 1}>Next</button>
            </div>

            {/* Table */}
            <span className="data-category">Table</span>
            <div className="data-table-container">
                <table className="data-table">
                    {/* Name of the properties */}
                    <thead className="data-table-head">
                        <tr className="data-table-row">
                            {/* If there is no employees */}
                            {
                                nameData.length === 0 &&
                                <td className="">There is no employees for the moment...</td>
                            }

                            {/* If there is at least 1 employee */}
                            {
                                nameData.length !== 0 && nameData.map((name, index) =>
                                    <td className="data-table-sort" key={index}>
                                        <i className="data-table-sort-arrow ri-arrow-down-s-line" onClick={() => sortData("ASC", name)}></i>
                                        {name}
                                        <i className="data-table-sort-arrow ri-arrow-up-s-line" onClick={() => sortData("DESC", name)}></i> 
                                    </td>
                                )
                            }
                        </tr>
                    </thead>

                    {/* Property values */}
                    <tbody className="data-table-body">
                        {
                            dataShow === true && dataSearchActive === true && dataSearched.map((element, index) =>
                                <tr className="data-table-row" key={index}>
                                    {
                                        nameData.map((name, index) => 
                                            <td className="data-table-body-value" key={index}>{element[name]}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                        
                        {
                            dataShow === true && dataSearchActive === false && dataSorted.slice(page * selectedEntries, selectedEntries * (page + 1)).map((element, index) => 
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
            </div>
        </>
    );
}

export default DataTable;