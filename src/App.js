import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Book from './pages/Book';
import Student from './pages/Student';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}