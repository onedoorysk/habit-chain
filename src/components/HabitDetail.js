import React from 'react'
import store from '../store'
import {Link} from 'react-router-dom'
import {deleteHabitAction} from '../actions'
import {doneHabitAction} from '../actions'

export default (props) => {
  const habitList = store.getState().habit
  let targetHabit = {}
  habitList.forEach(habit => {
    if (habit.id === props.match.params.id) {
      targetHabit = habit
    }
  })
  const {id, habitName, description, completed} = targetHabit
  return (
    <div>
      <div>
        <h2>{habitName}</h2>
        <p>{description}</p>
        <input type="checkbox" checked={completed ? 'checked' : ''} onChange={() => store.dispatch(doneHabitAction(id))}/>
        <button onClick={() => store.dispatch(deleteHabitAction(targetHabit.id))}>×</button>
      </div>
      <div>
        <Link to='/'>Back</Link>
      </div>
    </div>
  )
}