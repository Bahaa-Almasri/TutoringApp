import React from "react";
import Home from "./components/Home/Home";
import Courses from "./components/Courses";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Tutors from "./components/Tutors";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignInPage from "./components/SignIn";
import ScrollToTop from "./components/ScrollToTop";
import Booking from "./components/Booking";

export default function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/tutors/booking" element={<Booking />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}