import { useContext } from "react";
import Context from "../../../../Context";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

import Filter from "./Filter";

const History = () => {
  const { mode, historyData, setHistoryData } = useContext(Context);

  const [filterIncomes, setFilterIncomes] = useState(true);
  const [filterExpenses, setFilterExpenses] = useState(true);
  const [filterAll, setFilterAll] = useState(true);

  const [editBtn, setEditBtn] = useState(true);

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

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

  const toggleEditBtn = () => {
    setEditBtn(!editBtn);
  };

  const handleChangeInput = (event) => {};

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
          {sortedHistoryData.map((value, index) => {
            return (
              <div key={index}>
                {value.incomesTitle && (
                  <div
                    className={`grid grid-cols-5 place-items-center mt-5 py-3 px-3 rounded-xl text-base sm:text-lg ${changeBackgroundColor} ${
                      filterIncomes ? `block` : `hidden`
                    } `}
                  >
                    {editBtn ? (
                      <p>{value.incomesTitle}</p>
                    ) : (
                      <input
                        name="incomesTitle"
                        value={value.incomesTitle}
                        onChange={handleChangeInput}
                        className=" max-w-[110px] border border-black rounded-lg"
                      />
                    )}

                    {editBtn ? (
                      <p>{value.incomesDate}</p>
                    ) : (
                      <input
                        name="incomesDate"
                        value={value.incomesDate}
                        onChange={handleChangeInput}
                        type="date"
                        className=" max-w-[110px] border border-black rounded-lg"
                      />
                    )}

                    {editBtn ? (
                      <p className=" text-green-600 font-semibold">{value.incomesAmount}$</p>
                    ) : (
                      <input
                        name="incomesAmount"
                        value={value.incomesAmount}
                        onChange={handleChangeInput}
                        type="number"
                        className=" max-w-[110px] border border-black rounded-lg"
                      />
                    )}

                    <HiOutlineTrash
                      onClick={() => deleteItem(index)}
                      size={23}
                      className=" cursor-pointer"
                    />
                    <button
                      onClick={toggleEditBtn}
                      className=" hover:scale-110 hover:font-semibold"
                    >
                      edit
                    </button>
                  </div>
                )}

                {value.expensesTitle && (
                  <div
                    className={`grid grid-cols-5 place-items-center mt-5 py-3 px-3 rounded-xl text-base sm:text-lg ${changeBackgroundColor} ${
                      filterExpenses ? "block" : "hidden"
                    }`}
                  >
                    {editBtn ? (
                      <p>{value.expensesTitle}</p>
                    ) : (
                      <input
                        name="expensesTitle"
                        value={value.expensesTitle}
                        onChange={handleChangeInput}
                        className=" max-w-[110px] border border-black rounded-lg"
                      />
                    )}

                    {editBtn ? (
                      <p>{value.expensesDate}</p>
                    ) : (
                      <input
                        name="expensesDate"
                        value={value.expensesDate}
                        onChange={handleChangeInput}
                        type="date"
                        className=" max-w-[110px] border border-black  rounded-lg"
                      />
                    )}

                    {editBtn ? (
                      <p className=" text-red-600 font-semibold">{value.expensesAmount}$</p>
                    ) : (
                      <input
                        name="expensesAmount"
                        value={value.expensesAmount}
                        onChange={handleChangeInput}
                        type="number"
                        className=" max-w-[110px] border border-black rounded-lg"
                      />
                    )}

                    <HiOutlineTrash
                      onClick={() => deleteItem(index)}
                      size={23}
                      className=" cursor-pointer"
                    />
                    <button
                      onClick={toggleEditBtn}
                      className=" hover:scale-110 hover:font-semibold"
                    >
                      edit
                    </button>
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
