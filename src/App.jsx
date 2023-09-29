import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import {Add,Remove} from './Action'

function App() {
  const count =useSelector((store)=>store)
  const Dispatch=useDispatch()

  return (
    <>
     <h1>Counter:{count}</h1>
     <button onClick={()=>Dispatch(Add())}>ADD</button>
     <button disabled={count==0} onClick={()=>Dispatch(Remove())}>REMOVE</button>
    </>
  )
}

export default App