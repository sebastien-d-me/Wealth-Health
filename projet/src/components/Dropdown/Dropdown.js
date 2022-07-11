function Dropdown({name, onChangeDropdown, optionsList, optionValue, optionTitle}) {
    // Template
    return (
        <select id={name} name={name} onChange={(e) => {onChangeDropdown(e.target.value)} }>
            {
                optionsList.map((option) => {
                    return <option key={option[optionValue]} value={option[optionValue]}>{option[optionTitle]}</option>
                })
            }
        </select>
    );
}

export default Dropdown;