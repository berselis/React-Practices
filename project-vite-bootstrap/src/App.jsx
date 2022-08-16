import reactLogo from './assets/react.svg';
import bdevelopmentLogo from './assets/Media/imgs/logoWhite.png';
import bootstrapLogo from './assets/bootstrap-logo-shadow.png';
import './App.css';
import PracticeOne from './Components/PracticeOne';
import Morallogic from './Components/Morallogic';
import LightButtom from './Components/LightButtom';
import Fibonachi from './Components/Fibonachi';
import ShowHidePass from './Components/ShowHidePass';
import RandomColor from './Components/RandomColor';
import FibonacciEvenValue from './Components/FibonacciEvenValue';
import Countries from './Components/Countries';
import Form from './Components/Form';
import CarApiAcademlo from './Components/CarApiAcademlo';


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="" className="d-inline-block align-text-top react-logo" />
            <img src={bootstrapLogo} alt="" className="d-inline-block align-text-top bootstrap-logo" />
            <h3><strong>React Practices</strong> - Berselis J. Mendoza M.</h3>
          </a>
          <img src={bdevelopmentLogo} alt="BJMM" className='bdevelopment-logo' />
        </div>
      </nav>
      <div className='container '>
        <div className='row layout-center'>
          <PracticeOne />
          <Morallogic />
          <LightButtom />
          <LightButtom />
          <LightButtom />
          <LightButtom />
          <Fibonachi/>
          <ShowHidePass/>
          <RandomColor/>
          <FibonacciEvenValue/>
          <Form/>
          <CarApiAcademlo/>



        </div>
      </div>
      <footer className='footer navbar-dark bg-dark'> </footer>
    </> 
  )
}

export default App
