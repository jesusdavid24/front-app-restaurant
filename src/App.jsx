import { useState } from 'react'
import Login from './components/login/Login.jsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='login'>
        <Login />
      </div>
    </>
  )
}

export default App
