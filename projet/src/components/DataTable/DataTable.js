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
            /* Go to the first page */
            setPage(0);

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
            if(resultFound.length !== 0) {
                setDataSearched([...new Set(resultFound)]);
            } else {
                resultFound.push("None");
                setDataSearched(resultFound);
            }
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
    }

    // Pages 
    const [page, setPage] = useState(0);

    const maxPage = Math.ceil(data.length / selectedEntries);

    const handlePreviousPage = () => {
        if(page === 1) {
            setPage(0);
        } else if(page + selectedEntries % maxPage === page) {
            setPage(page - 1 % maxPage);
        } else {
            setPage((page + selectedEntries) % maxPage);
        }
    }

    const handleNextPage = () => {
        setPage((page + 1) % maxPage);
    }

    useEffect(() => {
        /* Min / Max entries */
        if(dataSearchInput === "") {
            setMinEntries(page * selectedEntries + 1);
            if((page * selectedEntries + selectedEntries) < data.length) {
                setMaxEntries(page * selectedEntries + selectedEntries);
            } else {
                setMaxEntries(data.length);
            }
        } else {
            setMinEntries(page * selectedEntries + 1);
            if((page * selectedEntries + selectedEntries) < dataSearched.length) {
                setMaxEntries(page * selectedEntries + selectedEntries);
            } else {
                setMaxEntries(dataSearched.length);
            }
        }

        /* Go to the first page if more than maxPage */
        if(minEntries > data.length) {
            setPage(0);
        }
    }, [page, dataSearched, dataSearchInput, selectedEntries, minEntries])


    // Refresh
    useEffect(() => {
        setDataShow(true);
    }, [dataShow, dataSorted]);
    
  

    // Template
    return(
        <>
            {/* Search */}
            {
                data.length !== 0 &&
                <>
                    <span className="data-category">Search</span>
                    <div className="data-search">
                        <label htmlFor="search">Search</label>
                        <input id="search" name="search" onChange={e => setDataSearchInput(e.target.value)} placeholder="Your search" type="search" />
                    </div>
                </>
            }

            {/* Entries */}
            {
                data.length !== 0 &&
                <>
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
                        {
                            dataSearchInput === "" &&
                            <span className="data-entries-total">Showing {minEntries} to {maxEntries} of {data.length} entries.</span>
                        }
                        {
                            dataSearchInput !== "" &&
                            <span className="data-entries-total">Showing {minEntries} to {maxEntries} of {dataSearched.length} entries.</span>
                        }
                    </div>
                </>
            }

            {/* Pages */}
            {
                data.length !== 0 && dataSearchInput === "" &&
                <div>
                    <button className="btn-data-table" style={{display: !page ? "none": "" }} onClick={handlePreviousPage}>Previous page</button>
                    <button className="btn-data-table" style={{display: page === Math.ceil(data.length / selectedEntries) - 1 ? "none": "" }} onClick={handleNextPage}>Next page</button>
                </div>
            }
            {
                data.length !== 0 && dataSearchInput !== "" &&
                <div>
                    <button className="btn-data-table" style={{display: !page ? "none": "" }} onClick={handlePreviousPage}>Previous page</button>
                    <button className="btn-data-table" style={{display: page === Math.ceil(dataSorted.length / selectedEntries) - 1 || page * selectedEntries + selectedEntries >= dataSearched.length ? "none": "" }} onClick={handleNextPage}>Next page</button>
                </div>
            }

            {/* Table */}
            <span className="data-category">Table</span>
            <div className="data-table-container">
                <table className="data-table">
                    {/* Name of the properties */}
                    <thead className="data-table-head">
                        <tr className="data-table-row">
                            {/* If there is no employees */}
                            {
                                nameData.length === 0 || dataSearched[0] === "None" &&
                                <td className="">There is no employees for the moment...</td>
                            }

                            {/* If there is at least 1 employee */}
                            {
                                nameData.length !== 0 && dataSearched[0] !== "None" && nameData.map((name, index) =>
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
                            dataShow === true && dataSearchActive === true && dataSearched[0] !== "None" && dataSearched.slice(page * selectedEntries, selectedEntries * (page + 1)).map((element, index) =>
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