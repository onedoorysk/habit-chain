import React, {Component} from 'react'

class RemainingTimer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countHH: '', countMM: '', countSS: ''
    }
  }
  // Every 1 seconds, count timer
  componentDidMount() {
    const countHH = 23 - new Date().getHours()
    const countMM = 59 - new Date().getMinutes()
    const countSS = 59 - new Date().getSeconds()
    this.setState({countHH, countMM, countSS})
    setInterval(
      () => {
        const isFinishedToday = this.state.countHH === 0 && this.state.countMM === 0 && this.state.countSS === 0
        const isPassedHour = this.state.countHH > 0 && this.state.countMM === 0 && this.state.countSS === 0
        const isPassedMinute = this.state.countMM > 0 && this.state.countSS === 0
        let countHH = '', countMM = '', countSS = ''
        // If today has finished, count-time will be reset
        if (isFinishedToday) {
          this.settingTimer()
          this.props.finishedDay()
          return
        }
        // When 1 hours have passed, count-timer will be calculated
        if (isPassedHour) {
          countHH = this.state.countHH - 1
          countMM = 59
          countSS = 59
          this.setState({countHH, countMM, countSS})
          return
        } else if (isPassedMinute) {
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
      <div className="timer-block">
        <div className="timer-block__text">
          <span>Today&#39;s remaining time</span>
        </div>
        <div className="timer-block__timer">
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

export default RemainingTimer
