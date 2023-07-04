import Transaction from "./components/NewTransaction/Transaction";
import History from "./components/History/History";
import YourBudget from "./components/Budget/YourBudget";
import Chart from "./components/Chart/Chart";

const Expenses = () => {
  return (
    <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 ">
      <div>
        <YourBudget />
        <Transaction />
      </div>

      <div>
        <History />
        <Chart />
      </div>
    </div>
  );
};
export default Expenses;
