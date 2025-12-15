import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LiaisonBank from './Pages/Dashboard'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LiaisonBank />} />
      </Routes>
    </Router>
  )
}

export default App