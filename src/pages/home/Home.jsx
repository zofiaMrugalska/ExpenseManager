import img from "../../images/expenseMenagerHome.png";
const Home = () => {
  return (
    <div className="font-K2D mt-16 ">
      <section className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:place-items-start">
        <div>
          <h1 className=" text-2xl font-bold">Manage Your Budget with ExpenseManager!</h1>
          <p className=" text-lg mt-7">
            Have you ever wondered how to effectively manage your finances?
            <br />
            Our application is here to help you! With our tools, it's easy to track your expenses,
            income, and expenditures, as well as generate charts.
          </p>
          <h2 className=" text-xl font-bold mt-5">Take control of your money !</h2>
        </div>
        <img src={img} alt="home page illustration" className="mt-14 lg:mt-0" />
      </section>
    </div>
  );
};
export default Home;
