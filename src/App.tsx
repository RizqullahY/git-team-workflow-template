import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default App;
