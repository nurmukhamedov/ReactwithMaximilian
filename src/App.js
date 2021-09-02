import React from "react";
import ExpensesFilter from "./components/ExpenseFilter";
import NewComponentExpenses from "./components/NewComponentExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insuranse",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 2, 10),
    },
    {
      id: "e3",
      title: "Pencil",
      amount: 65.67,
      date: new Date(2021, 9, 8),
    },
    {
      id: "e4",
      title: "Pen",
      amount: 56.67,
      date: new Date(2021, 8, 25),
    },
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <NewComponentExpenses items={expenses} />
    </div>
  );
}
export default App;
