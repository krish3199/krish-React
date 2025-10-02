import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/about" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
