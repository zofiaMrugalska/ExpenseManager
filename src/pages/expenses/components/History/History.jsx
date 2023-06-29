import { useContext } from "react";
import Context from "../../../../Context";
import Filter from "./Filter";
import { useState } from "react";

const History = () => {
  const { mode, historyData } = useContext(Context);

  const reversedHistoryData = [...historyData].reverse();

  const [filterIncomes, setFilterIncomes] = useState(true);
  const [filterExpenses, setFilterExpenses] = useState(true);
  const [filterAll, setFilterAll] = useState(true);

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

  return (
    <div className=" font-K2D">
      <section className="max-w-[600px] lg:max-w-[800px] lg:mx-auto   ">
        <div className="flex flex-col">
          <h1
            className={` mt-8  text-lg sm:text-2xl font-semibold border-b-2 ${
              mode === "light" ? "border-black" : "border-white"
            }`}
          >
            History:
          </h1>
          <Filter
            setFilterIncomes={setFilterIncomes}
            setFilterExpenses={setFilterExpenses}
            setFilterAll={setFilterAll}
          />
        </div>

        <div className="max-w-[600px] max-h-[300px] overflow-auto">
          {reversedHistoryData.map((value, index) => {
            return (
              <div key={index}>
                {value.incomesTitle && (
                  <div
                    className={`grid grid-cols-3 text-center mt-5 py-3 px-6 rounded-xl text-base sm:text-lg ${changeBackgroundColor}  ${
                      filterIncomes ? `block` : `hidden`
                    } `}
                  >
                    <p>{value.incomesTitle}</p>
                    <p>{value.incomesDate}</p>
                    <p className=" text-green-600 font-semibold">{value.incomesAmount}$</p>
                  </div>
                )}

                {value.expensesTitle && (
                  <div
                    className={`grid grid-cols-3 text-center mt-5 py-3 px-6 rounded-xl text-base sm:text-lg ${changeBackgroundColor} ${
                      filterExpenses ? "block" : "hidden"
                    }`}
                  >
                    <p>{value.expensesTitle}</p>
                    <p>{value.expensesDate}</p>
                    <p className=" text-red-600 font-semibold">{value.expensesAmount}$</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default History;