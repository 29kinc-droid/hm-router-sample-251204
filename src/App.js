import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp";
import Article from "./pages/Article";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
