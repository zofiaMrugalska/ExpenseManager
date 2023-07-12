import { useContext, useState } from "react";
import Context from "../../../../Context";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.register();

const Chart = () => {
  const { mode, historyData } = useContext(Context);

  const [incomesChartOpen, setIncomesChartOpen] = useState(true);
  const [expensesChartOpen, setExpensesChartOpen] = useState(false);

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

  const openIncomes = () => {
    setIncomesChartOpen(!incomesChartOpen);
  };

  const openExpenses = () => {
    setExpensesChartOpen(!expensesChartOpen);
  };

  const sortedIncomesData = historyData
    .filter((data) => data.hasOwnProperty("incomesAmount"))
    .slice()
    .sort((a, b) => new Date(a.incomesDate) - new Date(b.incomesDate));

  const datesIncomes = sortedIncomesData.map((data) => data.incomesDate);

  const incomesAmounts = sortedIncomesData.map((data) => data.incomesAmount);

  const chartIncomesData = {
    labels: datesIncomes,
    datasets: [
      {
        label: "Income",
        data: incomesAmounts,
        borderColor: "rgb(55, 138, 63)",
        backgroundColor: "rgb(90, 153, 96)",
      },
    ],
  };

  const sortedExpensesData = historyData
    .filter((data) => data.hasOwnProperty("expensesAmount"))
    .slice()
    .sort((a, b) => new Date(a.expensesDate) - new Date(b.expensesDate));

  const datesExpenses = sortedExpensesData.map((data) => data.expensesDate);

  const expensesAmounts = sortedExpensesData.map((data) => data.expensesAmount);

  const charExpensesData = {
    labels: datesExpenses,
    datasets: [
      {
        label: "Expense",
        data: expensesAmounts,
        borderColor: "rgb(173, 21, 16)",
        backgroundColor: "rgb(219, 45, 39)",
      },
    ],
  };

  return (
    <div className=" font-K2D">
      <div className="max-w-[600px] lg:max-w-[800px] lg:mx-auto mt-16">
        <div
          className={`flex justify-between text-lg sm:text-2xl font-semibold border-b-2 mb-8 ${
            mode === "light" ? "border-black" : "border-white"
          }`}
        >
          <button
            onClick={openIncomes}
            className={`${changeBackgroundColor} mb-2 p-2 rounded-xl text-lg font-semibold hover:bg-[#B0E2C7] hover:text-black`}
          >
            Incomes chart
          </button>
          <button
            onClick={openExpenses}
            className={`${changeBackgroundColor} mb-2 p-2 rounded-xl text-lg font-semibold hover:bg-[#FEC7C7] hover:text-black`}
          >
            Expenses chart
          </button>
        </div>
        {incomesChartOpen && <Line data={chartIncomesData} />}
        {expensesChartOpen && <Line data={charExpensesData} />}
      </div>
    </div>
  );
};

export default Chart;
