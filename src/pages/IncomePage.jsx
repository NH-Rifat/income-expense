import { useState } from "react";
import Menu from "./Shared/Menu";

const IncomePage = () => {
  const [count, setCount] = useState(0);

  const handleRegister = (e) => {
    e.preventDefault();
    const income = e.target.income.value;
    setCount(count + Number(income));
    e.target.income.value = "";
  };

  return (
    <div>
      <Menu />
      <h1 className="text-2xl flex justify-center items-center mt-24 px-2 text-center">
        Income: {count}
      </h1>
      <form onSubmit={handleRegister}>
        <div className="flex justify-center items-center mt-4">
          <input
            type="number"
            name="income"
            id="income"
            min="0"
            className="max-w-md appearance-none rounded-md border border-blue-500 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="submit"
            value="Add"
            className="ml-2 py-3 px-6 bg-blue-500 rounded-md text-center text-white cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default IncomePage;
