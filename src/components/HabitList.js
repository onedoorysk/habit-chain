import React, {Component} from 'react'
import '../App.css'
import {readStorageDataAction} from '../actions'
import Habit from './Habit'
import AddHabit from './AddHabit'
import AddHabitButton from './AddHabitButton'
import {connect} from 'react-redux'

class HabitList extends Component {

  componentWillMount() {
    this.props.readStorageData()
  }

  render() {
    const {habitList, filter} = this.props
    return (
      <div>
        <ul className="habit-list">
          {
            habitList.filter(habit => {
              switch (filter) {
                case 'not yet':
                  return !habit.completed
                case 'done':
                  return habit.completed
                case 'all':
                  return habit
                default:
                  return habit
              }
            }).map(habit => <Habit key={habit.id} habit={habit} />)
          }
        </ul>
        {
          habitList.length < 1
          ? <div className="add-message">ADD NEW HABIT!</div>
          : null
        }
        <AddHabit />
        <AddHabitButton />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {filter, habit} = state
  return {
    filter: filter,
    habitList: habit
  }
}

const mapDisptchToProps = dispatch => {
  return {
    readStorageData: () => dispatch(readStorageDataAction)
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(HabitList)