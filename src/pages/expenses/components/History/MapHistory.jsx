import { useContext, useState } from "react";
import Context from "../../../../Context";
import { useForm } from "react-hook-form";
import { HiOutlineTrash } from "react-icons/hi";

const MapHistory = ({ value, index, filterIncomes, filterExpenses, deleteItem }) => {
  const { mode, historyData, setHistoryData } = useContext(Context);

  const [editBtn, setEditBtn] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";
  const inputStyle = `max-w-[60px] sm:max-w-[100px] lg:max-w-[60px] xl:max-w-[80px] 2xl:max-w-[100px] border border-black rounded-lg ${changeBackgroundColor}`;

  const thereIsIncomesData = () => {
    return value.incomesAmount || value.incomesDate || value.incomesTitle;
  };

  const thereIsExpensesData = () => {
    return value.expensesAmount || value.expensesDate || value.expensesTitle;
  };

  const toggleEditBtn = () => {
    setEditBtn(!editBtn);
  };

  const onSubmit = (data) => {
    toggleEditBtn();
    let newList = [...historyData];
    newList[index] = data;
    setHistoryData(newList);
    reset();
  };

  return (
    <div key={index}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("incomesTitle", {
                  required: "title is required",
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="text"
                placeholder={value.incomesTitle}
                className={` ${inputStyle}`}
              />
            )}

            {editBtn ? (
              <p>{value.incomesDate}</p>
            ) : (
              <input
                {...register("incomesDate", {
                  required: "title is required",
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="date"
                className={` ${inputStyle}`}
              />
            )}

            {editBtn ? (
              <p className=" text-green-600 font-semibold">{value.incomesAmount}$</p>
            ) : (
              <input
                {...register("incomesAmount", {
                  required: "title is required",
                  valueAsNumber: true,
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="number"
                placeholder={value.incomesAmount}
                className={` ${inputStyle}`}
              />
            )}

            <HiOutlineTrash
              onClick={() => deleteItem(index)}
              size={23}
              className=" cursor-pointer"
            />

            {editBtn ? (
              <button onClick={toggleEditBtn} className=" hover:scale-110 hover:font-semibold">
                edit
              </button>
            ) : (
              <button onSubmit={onSubmit} className=" hover:scale-110 hover:font-semibold">
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
                {...register("expensesTitle", {
                  required: "title is required",
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="text"
                placeholder={value.expensesTitle}
                className={` ${inputStyle}`}
              />
            )}

            {editBtn ? (
              <p>{value.expensesDate}</p>
            ) : (
              <input
                {...register("expensesDate", {
                  required: "title is required",
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="date"
                placeholder={value.expensesDate}
                className={` ${inputStyle}`}
              />
            )}

            {editBtn ? (
              <p className=" text-red-600 font-semibold">{value.expensesAmount}$</p>
            ) : (
              <input
                {...register("expensesAmount", {
                  required: "title is required",
                  valueAsNumber: true,
                  minLength: { value: 1, message: "no less than 4 characters" },
                  maxLength: { value: 20, message: "no more than 20 characters" },
                })}
                type="number"
                placeholder={value.expensesAmount}
                className={` ${inputStyle}`}
              />
            )}

            <HiOutlineTrash
              onClick={() => deleteItem(index)}
              size={23}
              className=" cursor-pointer"
            />

            {editBtn ? (
              <button onClick={toggleEditBtn} className=" hover:scale-110 hover:font-semibold">
                edit
              </button>
            ) : (
              <button onSubmit={onSubmit} className=" hover:scale-110 hover:font-semibold">
                save
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};
export default MapHistory;
