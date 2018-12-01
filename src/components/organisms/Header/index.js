import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'} className="header__link">
        HABIT CHAIN
      </Link>
    </header>
  )
}

export default Header
