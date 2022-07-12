function Dropdown({name, onChangeDropdown, optionsList}) {
    // Template
    return (
        <select defaultValue={optionsList[0].abbreviation} id={name} name={name} onChange={(e) => {onChangeDropdown(e.target.value)} }>
            {
                optionsList.map((option, index) => {
                    return <option key={index} value={option["abbreviation"]}>{option["name"]}</option>
                })
            }
        </select>
    );
}

export default Dropdown;