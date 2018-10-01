import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    width: '100%',
    margin: '0 auto',
    height: '56px',
    backgroundColor: '#1C75BC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    zIndex: '950',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  title: {
    fontSize: '24px',
    color: '#FFFFFF'
  },
  link: {
    textDecoration: 'none'
  }
}
const Header = ({classes}) => {
  const {root, title, link} = classes
  return (
    <header className={root}>
      <Link
        to={'/'}
        className={link}
      >
        <div className={title}>HABIT CHAIN</div>
      </Link>
    </header>
  )
}

export default withStyles(styles)(Header)

