import { useContext, useState } from "react";
import Context from "../../../../Context";

const YourBudget = () => {
  const { mode } = useContext(Context);
  const { historyData } = useContext(Context);

  console.log(historyData);
  const totalIncomesAmount = historyData.reduce((sum, amount) => {
    if (amount.incomesAmount) {
      return sum + amount.incomesAmount;
    } else {
      return sum;
    }
  }, 0);
  console.log(totalIncomesAmount);

  const totalExpensesAmount = historyData.reduce((sum, amount) => {
    if (amount.expensesAmount) {
      return sum + amount.expensesAmount;
    } else {
      return sum;
    }
  }, 0);
  console.log(totalExpensesAmount);

  const yourBudgetAmount = totalIncomesAmount - totalExpensesAmount;

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";
  return (
    <div className="font-K2D">
      <section className=" max-w-[600px]  grid grid-cols-2 gap-4 py-8 ">
        <div className={`col-span-2 p-7 rounded-xl ${changeBackgroundColor} `}>
          <h1 className=" text-base sm:text-lg font-medium">YOUR BUDGET:</h1>
          <h2 className=" text-3xl sm:text-5xl text-right font-medium">
            {yourBudgetAmount.toFixed(2)}$
          </h2>
        </div>

        <div
          className={`max-w-[300px] mt-4 p-7 rounded-xl lg:overflow-auto  ${changeBackgroundColor}`}
        >
          <h1 className=" text-sm sm:text-base font-medium">INCOMES:</h1>
          <h2 className="mt-3 text-xl sm:text-3xl font-medium">+{totalIncomesAmount}$</h2>
        </div>

        <div
          className={`max-w-[300px] mt-4 p-6 rounded-xl lg:overflow-auto ${changeBackgroundColor}`}
        >
          <h1 className=" text-sm sm:text-base font-medium">EXPENSES:</h1>
          <h2 className="mt-3 text-xl sm:text-3xl font-medium">-{totalExpensesAmount}$</h2>
        </div>
      </section>
    </div>
  );
};
export default YourBudget;
