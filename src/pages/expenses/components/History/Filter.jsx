import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../../../Context";

const Filter = ({ setFilterIncomes, setFilterExpenses, setFilterAll }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { mode, historyData, setHistoryData } = useContext(Context);

  const openCloseFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";
  console.log(historyData);

  // const onlyIncomes = () => {
  //   const showIncomes = historyData.filter((value) => {
  //     return value.hasOwnProperty("incomesTitle");
  //   });
  //   setHistoryData(showIncomes);
  // };

  // const onlyExpenses = () => {
  //   const showExpenses = historyData.filter((value) => {
  //     return value.hasOwnProperty("expensesTitle");
  //   });
  //   setHistoryData(showExpenses);
  // };

  const incomesFilter = () => {
    setFilterIncomes(true);
    setFilterExpenses(false);
    setFilterAll(false);
  };

  const expensesFilter = () => {
    setFilterIncomes(false);
    setFilterExpenses(true);
    setFilterAll(false);
  };

  const allFilter = () => {
    setFilterIncomes(true);
    setFilterExpenses(true);
    setFilterAll(true);
  };

  return (
    <div>
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
            <li onClick={incomesFilter} className=" border-b-2 cursor-pointer">
              Incomes
            </li>
            <li onClick={expensesFilter} className=" border-b-2 cursor-pointer">
              Expenses
            </li>
            <li onClick={allFilter} className=" border-b-2 cursor-pointer">
              All
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Filter;
