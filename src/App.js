import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"

import './App.css'
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";

function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <Route exact key="exchanges" path="/" element={<Exchanges/>}/>
        <Route exact key="coins" path="/coins" element={<Coins/>}/>
      </Routes>
    </Router>
  );
}

export default App;
