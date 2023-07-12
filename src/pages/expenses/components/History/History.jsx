import { useContext, useState } from "react";
import Context from "../../../../Context";

import Filter from "./Filter";
import MapHistory from "./MapHistory";

const History = () => {
  const { mode, historyData, setHistoryData } = useContext(Context);

  const [filterIncomes, setFilterIncomes] = useState(true);
  const [filterExpenses, setFilterExpenses] = useState(true);
  const [setFilterAll] = useState(true);

  const sortedHistoryData = historyData.sort((a, b) => {
    const dateA = new Date(a.expensesDate || a.incomesDate);
    const dateB = new Date(b.expensesDate || b.incomesDate);
    return dateB - dateA;
  });

  const deleteItem = (index) => {
    const newHistoryData = [...sortedHistoryData];
    newHistoryData.splice(index, 1);
    setHistoryData(newHistoryData);
  };

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
          {sortedHistoryData.map((value, index) => (
            <div key={index}>
              <MapHistory
                value={value}
                index={index}
                filterIncomes={filterIncomes}
                filterExpenses={filterExpenses}
                deleteItem={deleteItem}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default History;
