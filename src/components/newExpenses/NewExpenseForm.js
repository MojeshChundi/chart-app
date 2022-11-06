//import react from "react";
import { useState } from "react";
import "./NewExpensForm.css";
const NewExpenseForm = () => {
  const [titleEntered, setTitle] = useState("");
  const [amountEntered, setAmount] = useState("");
  const [dateEntered, setDate] = useState("");

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const clickHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: titleEntered,
      amount: amountEntered,
      date: dateEntered,
    };
    console.log(inputData);
  };

  return (
    <form onSubmit={clickHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-10"
            max="2022-12-25"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
