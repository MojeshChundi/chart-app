import "./ExepenseItem.css";
function ExpenseAmount(props) {
  const amount = props.amount;
  return (
    <div className="expense-item__description">
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}
export default ExpenseAmount;
