import './App.css';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import Navbar from './components/navbar';
import TextForm from './components/textarea1';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [almsg, nwalmsg] = useState(null)
  const vlchange = (event) => {
    if (mode === 'dark'){
    document.body.style.backgroundColor = val1;
    }
    val2(event.target.value);
  }
  const [val1, val2] = useState('#252955')
  const showmsg = (msg, msgtype) => {
    nwalmsg({
      message: msg,
      messagetype: msgtype
    })
    setTimeout(() => {
      nwalmsg(null)
    }, 1500);
  }
  const changemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = val1
      showmsg("Dark Mode Enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showmsg("Light Mode Enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title='Navbar' abtxt="About" enable={changemode} toggle={mode} clrchange={vlchange} val1={val1} />
      <Alert alert={almsg} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/TextCraft" element={<TextForm showmsg={showmsg} mode={mode} />} />
          <Route exact path="/about" element={<Aboutus mode = {mode} val1 = {val1}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
