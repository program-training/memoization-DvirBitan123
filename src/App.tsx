import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from './Exercises/1/App'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <App1/>
    </>
  )
}

export default App

