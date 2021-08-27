import NewComponentExpenses from "./components/NewComponentExpenses";

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
  return (
    <div>
      <h2> Let 's get started!</h2>
      <NewComponentExpenses items={expenses} />
    </div>
  );
}
export default App;
