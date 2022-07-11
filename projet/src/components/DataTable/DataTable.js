import "./DataTable.css";


function DataTable({data, nameData}) {
    return(
        <table className="data-table">
            {/* Nom des propriétés */}
            <thead className="data-table-head">
                <tr className="data-table-row">
                {
                    nameData.map((name, index) => 
                        <th className="data-table-head-value" key={index}>{name}</th>
                    )
                }
                </tr>
            </thead>

            {/* Valeurs des propriétés */}
            <tbody className="data-table-body">
                {
                    data.map((element, index) =>
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