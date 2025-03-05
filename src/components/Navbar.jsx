import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <h1>List Viewer</h1>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar