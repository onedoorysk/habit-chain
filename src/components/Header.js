import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <header className="header">
      <Link to={'/'} className="header__link">
        HABIT CHAIN
      </Link>
    </header>
  )
}