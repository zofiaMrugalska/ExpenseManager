import { useContext } from "react";
import ModeContext from "../../../ModeContext";

const YourBudget = () => {
  const { mode } = useContext(ModeContext);
  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";
  return (
    <div className="font-K2D">
      <section className=" max-w-[600px]  grid grid-cols-2 gap-4 py-8 ">
        <div className={`col-span-2 p-7 rounded-xl ${changeBackgroundColor} `}>
          <h1 className=" text-base sm:text-lg font-medium">YOUR BUDGET:</h1>
          <h2 className=" text-3xl sm:text-5xl text-right font-medium">0.00$</h2>
        </div>

        <div className={` mt-4 p-7 rounded-xl ${changeBackgroundColor}`}>
          <h1 className=" text-sm sm:text-base font-medium">INCOMES:</h1>
          <h2 className="mt-3 text-xl sm:text-3xl font-medium">0.00$</h2>
        </div>
        <div className={` mt-4 p-6 rounded-xl ${changeBackgroundColor}`}>
          <h1 className=" text-sm sm:text-base font-medium">EXPENSES:</h1>
          <h2 className="mt-3 text-xl sm:text-3xl font-medium">0.00$</h2>
        </div>
      </section>
    </div>
  );
};
export default YourBudget;
