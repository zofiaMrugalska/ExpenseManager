import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../../../Context";

const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { mode } = useContext(Context);

  const openCloseFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";

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
            <li className=" border-b-2 cursor-pointer">Incomes</li>
            <li className=" border-b-2 cursor-pointer">Expenses</li>
            <li className=" border-b-2 cursor-pointer">All</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Filter;
