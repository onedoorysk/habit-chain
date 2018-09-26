import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    maxWidth: '100%',
    margin: '0 auto',
    height: '56px',
    backgroundColor: '#1C75BC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  title: {
    color: '#E5E5E5',
    fontSize: '24px'
  }
}
const Header = (props) => {
  return (
    <header className={props.classes.root}>
      <div className={props.classes.title}>HABIT CHAIN</div>
    </header>
  )
}

export default withStyles(styles)(Header)

