import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import store from '../store'
import {countTimerAction} from '../actions/index'

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
    fontSize: '12px'
  },
  timer: {
    color: '#E5E5E5',
    margin: '0 15px 0 0',
    fontSize: '18px'
  }
}

class Timer extends Component {

  constructor(props) {
    super(props)
    this.styles = props.classes
    this.timer = store.getState().timer
    store.dispatch(countTimerAction)
  }

  componentDidMount() {
    this.countTimer = setInterval(
      () => store.dispatch(countTimerAction),
      1000
    )
  }

  render() {
    return (
      <div className={this.styles.root}>
        <div className={this.styles.tag}>
          <span>Today's remaining time</span>
        </div>
        <div className={this.styles.timer}>
          {this.timer.countHH < 10 ?
            `0${this.timer.countHH}:` : `${this.timer.countHH}:`}
          {this.timer.countMM < 10 ?
            `0${this.timer.countMM}:` : `${this.timer.countMM}:`}
          {this.timer.countSS < 10 ?
            `0${this.timer.countSS}` : this.timer.countSS}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Timer)