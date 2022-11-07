//import react from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveDataHandler = (saveFormData) => {
    const FormData = {
      ...saveFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(FormData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};
export default NewExpenses;
