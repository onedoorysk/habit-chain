import React from 'react'
import store from '../store'
import '../App.css'
import {Link} from 'react-router-dom'
import {checkHabitAction, dayCountAction} from '../actions'

export default () => {
  const habitList = store.getState().habit
  return (
    <div>
      <ul className="habit">
        {
          habitList.map(({id, habitName, completed}) => {
            return (
              <li
                className="habit__list"
                key={id}
              >
                <Link
                  to={`/detail/${id}`}
                >
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