import { Line } from "react-chartjs-2";
import { useContext } from "react";
import Context from "../../../../Context";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () => {
  const { historyData } = useContext(Context);

  const sortedDates = historyData
    .map((data) => data.incomesDate)
    .sort((a, b) => new Date(a) - new Date(b));

  const chartData = {
    labels: sortedDates,
    datasets: [
      {
        label: "Income",
        data: historyData.map((data) => data.incomesAmount),
      },
    ],
  };

  return (
    <div className="w-[600px] mt-12">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
