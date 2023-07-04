import { Line } from "react-chartjs-2";
import { useContext } from "react";
import Context from "../../../../Context";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () => {
  const { mode, historyData } = useContext(Context);

  const sortedData = historyData
    .slice()
    .sort((a, b) => new Date(a.incomesDate) - new Date(b.incomesDate));

  const Dates = sortedData.map((data) => data.incomesDate);

  const incomesAmounts = sortedData.map((data) => data.incomesAmount);

  const chartData = {
    labels: Dates,
    datasets: [
      {
        label: "Income",
        data: incomesAmounts,
        borderColor: "rgb(55, 138, 63)",
        backgroundColor: "rgb(90, 153, 96)",
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
          <button>Incomes chart</button>
          <button>Expenses chart</button>
        </div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
