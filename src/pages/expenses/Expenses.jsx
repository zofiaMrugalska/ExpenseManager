import Transaction from "./components/NewTransaction/Transaction";
import History from "./components/History";
import YourBudget from "./components/YourBudget";

const Expenses = () => {
  return (
    <div>
      <YourBudget />
      <Transaction />
      <History />
    </div>
  );
};
export default Expenses;
