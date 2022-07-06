import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../views/homepage/HomePage";
import NotFoundPage from "../views/pageNotFound/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
