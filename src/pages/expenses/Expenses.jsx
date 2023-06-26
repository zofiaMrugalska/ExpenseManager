import Transaction from "./components/NewTransaction/Transaction";
import History from "./components/History";
import YourBudget from "./components/YourBudget";

const Expenses = () => {
  return (
    <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 ">
      <div>
        <YourBudget />
        <Transaction />
      </div>

      <History />
    </div>
  );
};
export default Expenses;
