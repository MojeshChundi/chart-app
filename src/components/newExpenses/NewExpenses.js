//import react from "react";
import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveDataHandler = (saveFormData) => {
    const FormData = {
      ...saveFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(FormData);
    setisEditing(false);
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <NewExpenseForm
          onSaveData={saveDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
