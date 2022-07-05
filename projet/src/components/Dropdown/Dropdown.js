/** Rajouter height, width, border, background etc.. */

function Dropdown({name, optionsList, optionValue, optionTitle}) {
    return (
        <select id={name} name={name}>
            {
                optionsList.map((option) => {
                    return <option key={option[optionValue]} value={option[optionValue]}>{option[optionTitle]}</option>
                })
            }
        </select>
    );
}

export default Dropdown;