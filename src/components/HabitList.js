import React from 'react'
import store from '../store'
import {Link} from 'react-router-dom'
import {checkHabitAction, dayCountAction} from '../actions'

export default () => {
  const habitList = store.getState().habit
  const currentFilter = store.getState().filter
  return (
    <div>
      <ul>
        {
          habitList.filter(habit => {
            switch (currentFilter) {
              case 'not yet':
                return !habit.completed
              case 'done':
                return habit.completed
              case 'all':
                return habit
              default:
                return habit
            }
          }).map(({id, habitName, completed}) => {
            return (
              <li key={id}>
                <Link to={`/detail/${id}`}>
                  {habitName}
                </Link>
                <input
                  type="checkbox"
                  checked={completed ? 'checked' : ''}
                  onChange={() => store.dispatch(checkHabitAction(id))}
                />
              </li>
            )
          })
        }
      </ul>
      <button
        onClick={() => store.dispatch(dayCountAction)}
        disabled={habitList.filter(habit => !habit.completed).length > 0 ? 'disabled' : '' }
      >
        COMPLETE TODAY'S TASK!!
      </button>
    </div>
  )
}