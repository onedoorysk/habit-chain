import React, {Component} from 'react'
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
    this.state = {
      countHH: '',
      countMM: '',
      countSS: ''
    }
    this.styles = props.classes
  }

  settingTimer() {
    let countHH = ''
    let countMM = ''
    let countSS = ''
    const timeLagHH = 24 - new Date().getHours()
    const timeLagMM = 60 - new Date().getMinutes()
    const timeLagSS = 60 - new Date().getSeconds()
    // ex) input: 20:20:XX
    //   current: 21:30:XX
    //    expect: 22:49:XX
    if (timeLagHH < 1 && timeLagMM <= 0) {
      countHH = timeLagHH + 23
      countMM = timeLagMM + 59
    }
    // ex) input: 21:40:XX
    //   current: 21:30:XX
    //    expect: 00:09:XX
    if (timeLagHH === 0 && timeLagMM > 0) {
      countHH = timeLagHH
      countMM = timeLagMM - 1
    }
    // ex) input: 20:40:XX
    //   current: 21:30:XX
    //    expect: 23:09:XX
    if (timeLagHH < 0 && timeLagMM > 0) {
      countHH = timeLagHH + 24
      countMM = timeLagMM - 1
    }
    // ex) input: 22:40:XX
    //   current: 21:30:XX
    //    expect: 01:09:XX
    if (timeLagHH > 0 && timeLagMM > 0) {
      countHH = timeLagHH
      countMM = timeLagMM - 1
    }
    // ex) input: 22:20:XX
    //   current: 21:30:XX
    //    expect: 00:59:XX
  if (timeLagHH > 0 && timeLagMM <= 0) {
    countHH = timeLagHH - 1
    countMM = timeLagMM + 59
  }
    countSS = timeLagSS
    this.setState({countHH, countMM, countSS})
  }

  // Before DOM tree is added, set count timer
  componentWillMount() {
    this.settingTimer()
  }

  // Every 1 seconds, count timer
  componentDidMount() {
    setInterval(
      () => {
        let countHH = ''
        let countMM = ''
        let countSS = ''
        // If today has finished, count-time will be reset
        if (this.state.countHH === 0 && this.state.countMM === 0 && this.state.countSS === 0) {
          this.settingTimer()
          return
        }
        // When 1 hours have passed, count-timer will be calculated
        if (this.state.countHH > 0 && this.state.countMM === 0 && this.state.countSS === 0) {
          countHH = this.state.countHH - 1
          countMM = 59
          countSS = 59
          this.setState({countHH, countMM, countSS})
          return
        } else if (this.state.countMM > 0 && this.state.countSS === 0) {
        // When 1 minutes have passed, count-timer will be calculated
          countMM = this.state.countMM - 1
          countSS = 59
          this.setState({countMM, countSS})
          return
        }
        countSS = this.state.countSS - 1
        this.setState({countSS})
      }, 1000
    )
  }

  render() {
    const {countHH, countMM, countSS} = this.state
    return (
      <div className={this.styles.root}>
        <div className={this.styles.tag}>
          <span>Today's remaining time</span>
        </div>
        <div className={this.styles.timer}>
          {countHH < 10 ?
            `0${countHH}:` : `${countHH}:`}
          {countMM < 10 ?
            `0${countMM}:` : `${countMM}:`}
          {countSS < 10 ?
            `0${countSS}` : countSS}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Timer)