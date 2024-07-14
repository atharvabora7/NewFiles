import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card changeText="Read" />
      <Card />
    </>
  );
};

export default App;
