import React, { useState } from "react";
import ExepenseItem from "./ExepenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setSelectedYear] = useState("2020");
  const yearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredYear = props.items.filter((expens) => {
    return expens.date.getFullYear().toString() === filterYear;
  });
  let expenseContent;
  if (filteredYear.length === 0) {
    expenseContent = <p>No Expense Found</p>;
  } else if (filteredYear.length === 1) {
    expenseContent = <p>Only one Expense Add More</p>;
  } else {
    expenseContent = filteredYear.map((ele) => (
      <ExepenseItem
        key={ele.id}
        date={ele.date}
        title={ele.title}
        amount={ele.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} SelectYear={yearHandler} />
        {expenseContent}
      </Card>
    </div>
  );
}
export default Expenses;
