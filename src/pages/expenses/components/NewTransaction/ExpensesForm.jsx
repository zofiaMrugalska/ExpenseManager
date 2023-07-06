import { useContext } from "react";
import Context from "../../../../Context";
import { useForm } from "react-hook-form";

const ExpensesForm = () => {
  const { mode, addHistoryData, historyData } = useContext(Context);

  const changeBackgroundColor = mode === "light" ? "bg-[#F3F3F3]" : "bg-[#272626]";
  const inputStyle = `border rounded-xl p-2 w-full ${changeBackgroundColor}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const expensesForm = (data) => {
    addHistoryData(data);

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(expensesForm)} className="mt-4 mb-14 grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label>title:</label> <br />
          <input
            {...register("expensesTitle", {
              required: "title is required",
              minLength: { value: 4, message: "no less than 4 characters" },
              maxLength: { value: 20, message: "no more than 20 characters" },
            })}
            type="text"
            className={`${inputStyle}`}
          />
          <p className="text-red-500 text-sm">{errors.expensesTitle?.message} </p>
        </div>
        <div>
          <label>date:</label> <br />
          <input
            {...register("expensesDate", { required: "date is requried" })}
            type="date"
            className={`${inputStyle}`}
          />
          <p className="text-red-500 text-sm">{errors.expensesDate?.message} </p>
        </div>
        <div>
          <label>amount:</label> <br />
          <input
            {...register("expensesAmount", {
              required: "amount is required",
              valueAsNumber: true,
              min: { value: 1, message: "only positive numbers" },
            })}
            type="number"
            step="0.01"
            className={`${inputStyle}`}
          />
          <p className="text-red-500 text-sm">{errors.expensesAmount?.message} </p>
        </div>
        <button
          onSubmit={expensesForm}
          className={`col-span-2 rounded-lg ${
            mode === "light" ? "text-black" : "text-black"
          } bg-[#78E476]`}
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default ExpensesForm;
