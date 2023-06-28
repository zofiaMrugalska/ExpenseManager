import { useContext } from "react";
import Context from "../../../../Context";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const History = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { mode } = useContext(Context);
  const { historyData } = useContext(Context);

  const reversedHistoryData = [...historyData].reverse();

  const openCloseFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

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
          <div className="flex justify-end pb-3 ">
            <button
              onClick={openCloseFilter}
              className={`flex items-center max-w-[100px] px-6  ${changeBackgroundColor}`}
            >
              Filter <IoMdArrowDropdown />
            </button>
          </div>

          {filterIsOpen && (
            <div className="flex justify-end">
              <ul className="text-center px-4 pb-3">
                <li className=" border-b-2 cursor-pointer">Incomes</li>
                <li className=" border-b-2 cursor-pointer">Expenses</li>
                <li className=" border-b-2 cursor-pointer">All</li>
              </ul>
            </div>
          )}
        </div>

        <div className="max-w-[600px] max-h-[300px] overflow-auto">
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
        </div>
      </section>
    </div>
  );
};
export default History;
