import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InboxPage from "./pages/InboxPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/inbox" element={<InboxPage />} />
    </Routes>
  );
}

export default App;