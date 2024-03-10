import "./App.css";
import { Routes, Route } from "react-router-dom";
import All from "./Pages/All";
import Navbar from "./components/Navbar"
import Database from "./Pages/Database";
import DataScience from "./Pages/DataScience";
import FullStackDevelopment from "./Pages/FullStackDevelopment";

function App() {
  
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/all" Component={All} />
      <Route path="/Database" Component={Database} />
      <Route path="/DataScience" Component={DataScience} />
      <Route path="/FullStackDevelopment" Component={FullStackDevelopment} />
    </Routes> 
   </div>
  )
}

export default App;