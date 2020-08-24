import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'

const APP_ID = "h2opufdw"

function App() {
  const [name, setName] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    const enteredName = prompt('Enter your name?')
    setName(enteredName)

    window.Intercom('onShow', () => setOpen(true))
    window.Intercom('onHide', () => setOpen(false))
  }, [])

  useEffect(() => {
    if(name !== null){
      window.Intercom('boot', {
        app_id: APP_ID,
        custom_launcher_selector: '#chatLauncher',
        name: name, // Full name
        email: "customer@example.com", // Email address
        created_at: Date.now() // Signup date as a Unix timestamp
      })
    }
  }, [name])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is a custom chat launcher</p>
        <button className="button" id="chatLauncher">{open ? "Close" : "Open"} Chat</button>
      </header>
    </div>
  );
}

export default App;
