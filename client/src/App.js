import "./App.css";
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
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
        <Navbar />
        <Signin />
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Protected><Profile /></Protected>}></Route>
        </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
