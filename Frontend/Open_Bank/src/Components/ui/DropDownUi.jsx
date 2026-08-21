export default function DropDownUi({dropdownOptions}) {
  return (
    <>
      <select className="cards_data_dropdown" name="cards" id="">
        {dropdownOptions.map((option) => (
          <option className="cards_data_dropdown" value="">
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
