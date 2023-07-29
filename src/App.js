import React from "react";
import Eth from "./Eth";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <Router>
        <Header/>
        <Routes>
            <Route path="/eth" element={<Eth />} />
    
        </Routes>
      </Router>
    </>
  );
}

export default App;
