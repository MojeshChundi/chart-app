//import react from "react";
import { useRef } from "react";
import "./NewExpensForm.css";
const NewExpenseForm = () => {
  const useref = useRef(null);
  const seref = useRef(null);
  const eref = useRef(null);
  const clickHandle = (e) => {
    e.preventDefault();

    console.log(useref.current.value);
    console.log(seref.current.value);
    console.log(eref.current.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>title</label>
          <input type="text" ref={seref} />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input type="number" step="0.01" min="0.01" ref={eref} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="Date" min="2019-01-10" max="2022-12-25" ref={useref} />
        </div>
      </div>
      <div className="new-expense__action">
        <button onClick={clickHandle}>Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
