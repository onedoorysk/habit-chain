import React from 'react'
import {withStyles} from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Input from '@material-ui/core/Input'
// import FormHelperText from '@material-ui/core/FormHelperText'
import store from '../store'
import {settingTimerAction, initialSetAction} from '../actions'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

const styles = {
  setting1Text: {
    color: '#444444',
    fontSize: '20px'
  },
  setting1: {
    margin: '245px 0 0 0',
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

const hourData = [21, 20, 22, 23, 24, 25, 26]
const minuteData = [0, 15, 30, 45]

const Setting1 = ({classes}) => {
  const {completedSetting1} = store.getState().setting
  const {
    setting1Text,
    setting1,
    steppers,
    stepperLabel,
    stepperText,
    stepBar
  } = classes
  let hourInput = null
  let minuteInput = null
  return (
    <div>
      <div
        className={setting1}
        style={{display: completedSetting1 ? 'flex' : 'none'}}
      >
        <div className={setting1Text}>HABITを作成してください。</div>
        <div>
          <select
            defaultValue="24"
            ref={node => hourInput = node}
          >
            {hourData.map(hour => <option value={hour}>{hour}</option>)}
          </select>
          <span>:</span>
          <select
            defaultValue="0"
            ref={node => minuteInput = node}
          >
            {minuteData.map(minute => <option value={minute}>{minute}</option>)}
          </select>
        </div>
      </div>
      <div className={steppers}>
        <button
          className={stepperLabel}
        >
          <ChevronLeft
            onClick={() => store.dispatch()}
          />
          <div className={stepperText}>BACK</div>
        </button>
        <div className={stepBar}></div>
        <button className={stepperLabel}
          onClick={() => {
            store.dispatch(settingTimerAction(hourInput.value, minuteInput.value))
            store.dispatch(initialSetAction(true, false))
          }}
        >
          <div className={stepperText}>NEXT</div>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Setting1)