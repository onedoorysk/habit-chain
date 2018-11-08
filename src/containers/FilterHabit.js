import { connect } from 'react-redux'
import HabitFilter from '../components/Filter/HabitFilter'
import { filterListAction } from '../actions'

const mapStateToProps = state => ({
  habit: state.habit,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  filterList: tabName => dispatch(filterListAction(tabName))
})

export default connect(mapStateToProps, mapDispatchToProps)(HabitFilter)