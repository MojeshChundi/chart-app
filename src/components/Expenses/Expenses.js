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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} SelectYear={yearHandler} />
        {filteredYear.map((ele) => (
          <ExepenseItem
            key={ele.id}
            date={ele.date}
            title={ele.title}
            amount={ele.amount}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
