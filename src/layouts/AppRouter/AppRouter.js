import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";

// <Routes>
// <Route path="/login" element={<Login />} />
// <Route path="/register" element={<Register />} />
// <Route path="/" index element={<Home />} />

// <Route path="/user/:id" index element={<UserPage />} />
// </Routes>

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
