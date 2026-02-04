
import './App.css'
import logo_home from './assets/home.jpg'
import LogAlert from './components/LogAlert/LogAlert.jsx'
import FindNumber from './components/FindNumber/FindNumber.jsx';
import Mouse from './components/Mouse/Mouse.jsx';


function App() {
 
  const my_name ="Kaniet";

  const text_log =()=> {
    console.log(my_name)
  }
  const alert_text =()=> {
    alert('Hello world!')
  }

  return (
    <>
     <div>Hello world!</div>
     <button className='main_btn' onClick={text_log}>Start</button>
     <button className="alert" onClick={alert_text}>Next</button>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, molestias dolorum? Repellendus, quos ex impedit neque adipisci fuga corrupti obcaecati perferendis ullam rerum, veniam consectetur sint sunt ipsa, inventore assumenda?</p>
     <p>{my_name}</p>
     <img src={logo_home} alt="dhdhd" />
     <LogAlert/>
     <FindNumber/>
     <Mouse/>
    </>
  )
}

export default App
