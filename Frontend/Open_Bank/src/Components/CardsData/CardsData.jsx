import DropDownUi from "../ui/DropDownUi";
import "./CardsData.css"


export default function CardsData() {

const dropDownNames = [
  {
    name: "Cards",
  },
  {
    name: "Credit Card",
  },
  {
    name: "Debit Card",
  },
  {
    name: "FD Card",
  },
  {
    name: "RD Card",
  },
];

  return (
    <>
      <DropDownUi dropdownOptions={dropDownNames} />
    </>
  );
}
