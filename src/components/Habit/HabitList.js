import React, {Component} from 'react'
import '../../App.css'
import Habit from './Habit'
import AddHabit from '../../containers/AddHabit'
import AddHabitButton from '../../containers/AddHabitButton'

const HabitList = ({habitList, recordOfHabit, doneHabit, registRecord}) => (
  <div>
    <ul className="habit-list">
      {habitList.map(habit => (
        <Habit
          key={habit.id}
          id={habit.id}
          recordList={recordOfHabit}
          onClick={id => {
            console.log(id)
            doneHabit(id)
            registRecord(id)
          }}
          {...habit} />)
      )}
    </ul>
    {habitList.length < 1 && <div className="add-message">ADD NEW HABIT!</div>}
    <AddHabit />
    <AddHabitButton />
  </div>
)

export default HabitList