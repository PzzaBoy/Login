import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./components/Search/Search";
import { Login } from './components/Login/Login'
import { useContext } from "react";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
