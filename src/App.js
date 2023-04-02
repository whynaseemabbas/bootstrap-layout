import { useState } from 'react';
import BootsLayout from './BootsLayout';
import TextForm from './TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = 'gray'
      showAlert(": Dark Mode has been Enabled","success")
    }else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert(": Light Mode has been Enabled","success")

    }
  }

  return (
    <div className="App">
    <BootsLayout mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm showAlert={showAlert} mode={mode} title="Enter the Text to Analyze" />
    </div>
  );
}

export default App;
