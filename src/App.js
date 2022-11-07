import React from "react";
import NewExpenses from "./components/newExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";
function App() {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let/s gets started!"),
  //   React.createElement(Expenses, {})
  // );
  const addExpenseHandler = (addData) => {
    console.log("ap js");
    console.log(addData);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
