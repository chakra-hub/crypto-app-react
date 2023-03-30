import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
      <ul className="lists">
        <li className="list_item"><Link to="/">Exchanges</Link></li>
        <li className="list_item"><Link to="/coins">Coins</Link></li>
      </ul>
    </div>
  )
}

export default Header
