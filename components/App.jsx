"use client";

import React from "react"
import { BrowserRouter as Router, Routes , Route , Link , redirect} from "react-router-dom"
import { Homepage } from "./Homepage";

export const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}