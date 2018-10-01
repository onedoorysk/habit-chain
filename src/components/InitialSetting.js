import React from 'react'
import {withStyles} from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Input from '@material-ui/core/Input'
// import FormHelperText from '@material-ui/core/FormHelperText'
import store from '../store'
import Setting1 from './Setting1'
import Setting2 from './Setting2'

const styles = {
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '900',
    backgroundColor: '#FFFFFF'
  },
  setting1: {
    margin: '100px 0 0 0',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  steppers: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '42px',
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px 0 15px'
  },
  stepperLabel: {
    color: '#444444',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      color: '#A7A7A7'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: '0',
    appearance: 'none'
  },
  stepperText: {
    fontSize: '12px',
    margin: '1px 0 0 0'
  },
  stepBar: {
    width: '200px',
    height: '5px',
    border: '1px solid #979797'
  }
}

const InitialSetting = ({classes}) => {
  const {completedSetting1, completedSetting2} = store.getState().setting
  const {
    root
  } = classes
  return (
    <div
      className={root}
      style={{display: completedSetting1 && completedSetting2 ? 'none' : 'block'}}
    >
      <Setting1 />
      <Setting2 />
    </div>
  )
}

export default withStyles(styles)(InitialSetting)