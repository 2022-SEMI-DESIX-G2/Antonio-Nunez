//import logo from './logo.svg';
import React from 'react'
//import './App.css';
import GlobalStyles from './Styles/GlobalStyles';
import { Home } from "./Components/Home";
import { Sidebar } from "./Components/Sidebar";
import { Widgets } from "./Components/Widgets";

function App() {
  return (
    <div className="App">
   <h1>Clon Twitter con Firebase 🐦🐦</h1>


   <Sidebar/>


  

   <Home/>



   <Widgets/>




   <GlobalStyles/>

    </div>
  );
}

export default App;
