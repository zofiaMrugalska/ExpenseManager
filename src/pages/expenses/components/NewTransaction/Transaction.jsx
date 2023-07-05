import { useContext } from "react";
import Context from "../../../../Context";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

import ExpensesForm from "./ExpensesForm";
import IncomesForm from "./IncomesForm";

const Transaction = () => {
  const { mode } = useContext(Context);

  const [incomesIsOpen, setIncomesIsOpen] = useState(false);
  const [expensesIsOpen, setExpensesIsOpen] = useState(false);

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

  const openCloseIncomes = () => {
    setIncomesIsOpen(!incomesIsOpen);
  };

  const openCloseExpenses = () => {
    setExpensesIsOpen(!expensesIsOpen);
  };

  return (
    <div className=" font-K2D">
      <section className="max-w-[600px] ">
        <h1
          className={` mt-8  text-lg sm:text-2xl font-semibold border-b-2 ${
            mode === "light" ? "border-black" : "border-white"
          }`}
        >
          Add new transaction:
        </h1>
        <div>
          <button
            className={`flex items-center justify-center gap-4 w-full mt-8 ${changeBackgroundColor} p-4 rounded-xl text-lg font-semibold hover:bg-[#B0E2C7] hover:text-black`}
            onClick={openCloseIncomes}
          >
            INCOMES <SlArrowDown size={22} />
          </button>

          {incomesIsOpen && <IncomesForm />}
        </div>

        <div>
          <button
            className={`flex items-center justify-center gap-4 w-full mt-8 ${changeBackgroundColor} p-4 rounded-xl text-lg font-semibold hover:bg-[#FEC7C7]  hover:text-black`}
            onClick={openCloseExpenses}
          >
            EXPENSES <SlArrowDown size={22} />
          </button>

          {expensesIsOpen && <ExpensesForm />}
        </div>
      </section>
    </div>
  );
};
export default Transaction;
