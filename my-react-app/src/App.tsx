
import {useState} from 'react'
import Button from './components/Button';
import Alert from './components/Alert';
const App = () => {
  const [alertVisible , SetAlertVisibility] =  useState(false);
  return (
    <div>
      
      { alertVisible && <Alert onClose={()=>SetAlertVisibility(false)}>My alert</Alert>}
      <Button  children='Click me' onClick={()=>SetAlertVisibility(true)}></Button>
    </div>
  )
}

export default App
