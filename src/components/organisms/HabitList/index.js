import React from 'react'
import Habit from '../Habit'
import AddHabit from '../../../containers/AddHabit'
import AddHabitButton from '../../../containers/AddHabitButton'

const HabitList = ({allHabitList, filterHabitList, recordOfHabit, doneHabit, registRecord, classes}) => (
  <div>
    <ul className="habit-list">
      {filterHabitList.map(habit => (
        <Habit
          key={habit.id}
          recordList={recordOfHabit}
          onClick={id => {
            doneHabit(id)
            registRecord(id)
          }}
          {...habit}
          {...classes} />)
      )}
    </ul>
    {allHabitList.length < 1 && <div className="add-message">ADD NEW HABIT!</div>}
    <AddHabit />
    <AddHabitButton />
  </div>
)

export default HabitList
