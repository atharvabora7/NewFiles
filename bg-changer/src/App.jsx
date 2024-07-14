import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 -inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 py-1 bg-red-600 rounded-full"
            >
              Red
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 bg-blue-700 rounded-full"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 bg-green-500 rounded-full"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
