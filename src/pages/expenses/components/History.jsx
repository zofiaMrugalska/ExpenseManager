import { useContext } from "react";
import Context from "../../../Context";

const History = () => {
  const { mode } = useContext(Context);
  const { historyData } = useContext(Context);
  const reversedHistoryData = [...historyData].reverse();
  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

  return (
    <div className=" font-K2D">
      <section className="max-w-[600px] lg:max-w-[800px] lg:mx-auto   ">
        <h1
          className={` mt-8  text-lg sm:text-2xl font-semibold border-b-2 ${
            mode === "light" ? "border-black" : "border-white"
          }`}
        >
          History:
        </h1>
        {reversedHistoryData.map((value, index) => {
          return (
            <div key={index}>
              {value.incomesTitle && (
                <div
                  className={`grid grid-cols-3 text-center mt-5 py-3 px-6 rounded-xl text-base sm:text-lg ${changeBackgroundColor} `}
                >
                  <p>{value.incomesTitle}</p>
                  <p>{value.incomesDate}</p>
                  <p className=" text-green-600 font-semibold">{value.incomesAmount}$</p>
                </div>
              )}

              {value.expensesTitle && (
                <div
                  className={`grid grid-cols-3 text-center mt-5 py-3 px-6 rounded-xl text-base sm:text-lg ${changeBackgroundColor} `}
                >
                  <p>{value.expensesTitle}</p>
                  <p>{value.expensesDate}</p>
                  <p className=" text-red-600 font-semibold">{value.expensesAmount}$</p>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default History;
