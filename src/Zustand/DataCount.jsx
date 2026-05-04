import React from "react";
import useStore from "./DataStore";

const DataCount = () => {
  const { count, increase, decrease, Multipule } = useStore();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">

        <h1 className="text-2xl font-bold mb-4">Counter</h1>

        <h2 className="text-5xl font-semibold text-blue-600 mb-6">
          {count}
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={increase}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            + Increase
          </button>

          <button
            onClick={decrease}
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            - Decrease
          </button>

          <button
            onClick={Multipule}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition"
          >
            × Multiply
          </button>
        </div>

      </div>

    </div>
  );
};

export default DataCount;