import foto from "./static/covid.jpg"
import './App.css';
import Cards from "./componets/Cards";
import ContrySelector from "./componets/ContrySelector";
import { useState } from "react";


function App() {
  const [selectedCountry, changeSelectedCountry] = useState("brazil")


  return (
    <div className="App">
     <h1 className="title">Numero de casos de Covid-19 pelo mundo</h1>
      <ContrySelector changeSelectedCountry = {changeSelectedCountry} selectedCountry = {selectedCountry}/>
      <Cards selectedCountry = {selectedCountry}/>
    </div>
  );
}

export default App;
