import React, {Component} from 'react'
import '../../App.css'
import Habit from './Habit'
import AddHabit from '../../containers/AddHabit'
import AddHabitButton from '../../containers/AddHabitButton'

class HabitList extends Component {

  componentDidMount() {
    this.props.firstProcess()
  }

  render() {
    return (
      <div>
        <ul className="habit-list">
          {this.props.habitList.map(habit => (
            <Habit
              key={habit.id}
              id={habit.id}
              recordList={this.props.recordOfHabit}
              onClick={id => {
                this.props.doneHabit(id)
                this.props.registRecord(id)
              }}
              {...habit} />)
          )}
        </ul>
        {this.props.habitList.length < 1 && <div className="add-message">ADD NEW HABIT!</div>}
        <AddHabit />
        <AddHabitButton />
      </div>
    )
  }
}

export default HabitList