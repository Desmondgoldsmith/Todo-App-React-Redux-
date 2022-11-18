import React from 'react'
import { useSelector } from 'react-redux'
import './todocontent.css'

function Todocontent() {
  const todoList = useSelectorector()
  return (
    <div className='todo_c'>
    Todocontent
    </div>
  )
}

export default Todocontent