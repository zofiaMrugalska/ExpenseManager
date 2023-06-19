import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" font-K2D p-7 flex items-end justify-between ">
      <h1 className=" text-4xl font-bold">ExpenseManager</h1>
      <ul className="flex  items-center gap-8 text-xl">
        <Link to={"/"} className=" font-semibold hover:scale-110 hover:text-green-600">
          Home
        </Link>
        <Link to={"/expenses"} className=" font-semibold hover:scale-110 hover:text-green-600">
          Expenses
        </Link>
        <FaRegMoon size={18} className="cursor-pointer hover:scale-125" />
      </ul>
    </nav>
  );
};
export default Navbar;
