import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    backgroundColor: '#000000',
    width: '100%',
    height: '35px',
    borderRadius: '5% 5% 0 0 / 5% 5% 0 0',
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tag: {
    color: '#E5E5E5',
    margin: '0 0 0 15px',
    fontSize: '10px'
  },
  timer: {
    color: '#E5E5E5',
    margin: '0 15px 0 0',
    fontSize: '18px'
  }
}

const Timer = ({classes}) => {
  const {root, tag, timer} = classes
  return (
    <div className={root}>
      <div className={tag}>残り時間</div>
      <div className={timer}>11:22:33</div>
    </div>
  )
}

export default withStyles(styles)(Timer)