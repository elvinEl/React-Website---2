import React, { useContext } from 'react'
import {darkMode} from '../context/Context'
function DarkMode() {
  const {mode,setMode} = useContext(darkMode)
  const change = ()=>{
    setMode(!mode)
  }
  return (
    <div>
<button onClick={change}>Mode</button>
    </div>
  )
}

export default DarkMode