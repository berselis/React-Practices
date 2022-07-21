import { useState } from 'react';
import bmxImg from '..//public/bmx.png';
import exerciseImg from '..//public/exerciselogic1.png';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './Components/Card';
import Logic1 from './Components/Logic1';

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

const exercise = {
  UrlImg:exerciseImg,
  Result: 0
}

function App() {
  //const [count, setCount] = useState(0);

  let { Nombre, Edad, DeporteFav, PasaTiempo } = person;

  return (
    <>
      <div className="App">
        <img src={bmxImg} className="bmx" alt="bmx imagen" />
        <h2> <strong>Nombre: </strong> <br/><small> {Nombre}</small></h2>
        <h2> <strong>Edad: </strong> <br/><small> {Edad} años</small></h2>
        <h2> <strong>Deporte Fav: </strong> <br/><small> {DeporteFav}</small></h2>
        <h2> <strong>Pasatiempo: </strong> <br/><small> {PasaTiempo}</small></h2>
      </div>

      <Card objInfo={hobbies}/>
      
      <Card objInfo={skill}/>  

      <Logic1 objData={FindSumFromData(1000)}/>
    </>
  )
}

export default App

function FindSumFromData(number = 10, a = 3, b = 5){
  for(let i = 1; i < number; i++){
    if(i % a == 0 || i % b == 0){
      exercise.Result += i;
    }
  }
  return exercise;
}
