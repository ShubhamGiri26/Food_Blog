import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navi = useNavigate();
function go (){
    navi('./home')
}

  return (
    <div>
      <button onClick={go}>Read More</button>
      <button onClick={go}>Read More</button>
      <button onClick={go}>Read More</button>
      <button onClick={go}>Read More</button>
      <button onClick={go}>Read More</button>
      <button onClick={go}>Read More</button>
    </div>
  )
}

export default Nav
