import React, { useEffect, useState } from "react";
import { auth, provider } from "./config/firebase-config";
import {
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Protected><Profile /></Protected>}></Route>
        </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
