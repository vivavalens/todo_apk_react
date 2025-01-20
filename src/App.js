import React from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import Todo from "./component/Todolist";
import AddTodo from "./component/Addtodo";
import './index.css'; // Import Tailwind CSS

function App(){
    return(
  <BrowserRouter>
      <div>
        <Header/>


      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Todo" element={<Todo/>}/>
        <Route path="/AddTodo" element={<AddTodo/>}/>

      </Routes>
      </div>
      </BrowserRouter>

    )
}











export default App