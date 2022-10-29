import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import "./ExepenseItem.css";

function ExepenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseAmount amount={props.amount} />
    </div>
  );
}

export default ExepenseItem;
