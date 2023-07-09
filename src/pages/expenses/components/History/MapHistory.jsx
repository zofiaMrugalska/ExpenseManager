import { useContext, useEffect, useState } from "react";
import Context from "../../../../Context";

import { HiOutlineTrash } from "react-icons/hi";

const MapHistory = ({ value, index, filterIncomes, filterExpenses, deleteItem }) => {
  const { mode, historyData, setHistoryData } = useContext(Context);

  const [editBtn, setEditBtn] = useState(true);
  const [editingData, setEditingData] = useState({ ...historyData[index] });

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

  const toggleEditBtn = () => {
    setEditBtn(!editBtn);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    if (name === "incomesAmount" || name === "expensesAmount") {
      setEditingData((previousData) => ({
        ...previousData,
        [name]: Number(value),
      }));
    } else {
      setEditingData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    setHistoryData((previousList) => {
      const newList = [...previousList];
      newList[index] = editingData;
      return newList;
    });
    toggleEditBtn();
    console.log(historyData);
  };

  const thereIsIncomesData = () => {
    return value.incomesAmount || value.incomesDate || value.incomesTitle;
  };

  const thereIsExpensesData = () => {
    return value.expensesAmount || value.expensesDate || value.expensesTitle;
  };

  return (
    <div key={index}>
      {thereIsIncomesData() && (
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
              value={editingData.incomesTitle}
              onChange={handleChangeInput}
              className=" max-w-[110px] border border-black rounded-lg"
            />
          )}

          {editBtn ? (
            <p>{value.incomesDate}</p>
          ) : (
            <input
              name="incomesDate"
              value={editingData.incomesDate}
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
              value={editingData.incomesAmount}
              onChange={handleChangeInput}
              type="number"
              className=" max-w-[110px] border border-black rounded-lg"
            />
          )}

          <HiOutlineTrash onClick={() => deleteItem(index)} size={23} className=" cursor-pointer" />

          {editBtn ? (
            <button onClick={toggleEditBtn} className=" hover:scale-110 hover:font-semibold">
              edit
            </button>
          ) : (
            <button onClick={handleSave} className=" hover:scale-110 hover:font-semibold">
              save
            </button>
          )}
        </div>
      )}

      {thereIsExpensesData() && (
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
              value={editingData.expensesTitle}
              onChange={handleChangeInput}
              className=" max-w-[110px] border border-black rounded-lg"
            />
          )}

          {editBtn ? (
            <p>{value.expensesDate}</p>
          ) : (
            <input
              name="expensesDate"
              value={editingData.expensesDate}
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
              value={editingData.expensesAmount}
              onChange={handleChangeInput}
              type="number"
              className=" max-w-[110px] border border-black rounded-lg"
            />
          )}

          <HiOutlineTrash onClick={() => deleteItem(index)} size={23} className=" cursor-pointer" />

          {editBtn ? (
            <button onClick={toggleEditBtn} className=" hover:scale-110 hover:font-semibold">
              edit
            </button>
          ) : (
            <button onClick={handleSave} className=" hover:scale-110 hover:font-semibold">
              save
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default MapHistory;
