// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';

// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,SetAlert]=useState(null);
 
  const showAlert=(msg,type)=>{
    SetAlert({
     msg:msg,
     type:type,
    })
    setTimeout(()=>{
        SetAlert(null);
    },2000)
  }
  const toggleMode=()=>{
     if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Active","success");
     }
    else {
      setMode('dark');
      document.body.style.backgroundColor="#1d4a7f";
      showAlert("Dark Mode Active","success");

    }
  }
  return (
    <>

    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
   
   
    
    

     <TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert}/>
   
     </div>
    
     </>
  );
}

export default App;
