
import reactLogo from './assets/react.svg';
import bdevelopmentLogo from './assets/Media/imgs/logoWhite.png';
import bootstrapLogo from './assets/bootstrap-logo-shadow.png';
import './App.css';
import PracticeOne from './Components/PracticeOne';
import Morallogic from './Components/Morallogic';
import LightButtom from './Components/LightButtom';


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="" className="d-inline-block align-text-top react-logo" />
            <img src={bootstrapLogo} alt="" className="d-inline-block align-text-top bootstrap-logo" />
            <h3><strong>React Practices</strong> - BJMM</h3>
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
        </div>
      </div>
    </>
  )
}

export default App
