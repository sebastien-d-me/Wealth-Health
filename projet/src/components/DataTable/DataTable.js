import "./DataTable.css";
import { useState, useEffect } from "react";


function DataTable({data, nameData}) {
    // Search
    const [dataSearchInput, setDataSearchInput] = useState("");
    const [dataSearched, setDataSearched] = useState([]);
    const [dataSearchActive, setDataSearchActive] = useState(false);

    useEffect(() => {
        let resultFound = [];
        /* Si le champ contient au moins une valeur */
        if(dataSearchInput !== "") {
            /* Initialise les states */
            setDataSearched([]);
            setDataSearchActive(true);
            /* Pour chaque employé */
            dataSorted.forEach((properties, index) => {
                /* Vérifie si la recherche correspond à un élément */
                Object.keys(properties).forEach(function(key) {
                    if(properties[key].toLowerCase().includes(dataSearchInput.toLowerCase())) {
                        resultFound.push(data[index]);
                    }
                });
            });
            /* Met les résultats dans le tableau */
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

    
    // Refresh
    useEffect(() => {
        setDataShow(true)
    }, [dataShow, dataSorted]);
    
  

    // Template
    return(
        <>
            {/* Recherche */}
            <div className="data-search">
                <label htmlFor="search">Search</label>
                <input id="search" name="search" onChange={e => setDataSearchInput(e.target.value)} placeholder="Your search" type="search" />
            </div>

            {/* Tableau */}
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
                        dataShow === true && dataSearchActive === false && dataSorted.map((element, index) => 
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
        </>
    );
}

export default DataTable;