import ExepenseItem from "./ExepenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">no expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((ele) => (
        <ExepenseItem
          key={ele.id}
          date={ele.date}
          title={ele.title}
          amount={ele.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
