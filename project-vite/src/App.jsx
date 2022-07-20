import { useState } from 'react';
import bmxImg from '..//public/bmx.png';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './Components/Card';

const person = {
  Nombre: 'Berselis J. Mendoza M.',
  Edad: 35,
  DeporteFav: 'BMX Street',
  PasaTiempo: 'Explorar ligres nuevos'
};
const hobbies = {
  title:"Hobbies",
  list:['Montar Bmx', 'Compartir con la familia', 'Ir a excursiones', 'Jugar al PS4']
};

const skill = {
  title:"Skills",
  list:['HTML/CSS', 'JavaScript', 'C# ASP.NET', 'SQL Server']
};

function App() {
  //const [count, setCount] = useState(0);

  let { Nombre, Edad, DeporteFav, PasaTiempo } = person;

  return (
    <>
      <div className="App">
        <img src={bmxImg} className="bmx" alt="bmx imagen" />
        <h2> <strong>Nombre: </strong> <small> {Nombre}</small></h2>
        <h2> <strong>Edad: </strong> <small> {Edad} años</small></h2>
        <h2> <strong>Deporte Fav: </strong> <small> {DeporteFav}</small></h2>
        <h2> <strong>Pasatiempo: </strong> <small> {PasaTiempo}</small></h2>
      </div>

      <Card objInfo={hobbies}/>
      
      <Card objInfo={skill}/>

      
    </>
  )
}

export default App
