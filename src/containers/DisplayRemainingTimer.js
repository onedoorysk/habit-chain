import {connect} from 'react-redux'
import RemainingTimer from '../components/organisms/RemainingTimer'
import {finishedDayAction} from '../actions'

const mapDispatchToProps = dispatch => ({
  finishedDay: () => dispatch(finishedDayAction)
})

export default connect(undefined, mapDispatchToProps)(RemainingTimer)
