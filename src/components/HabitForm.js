import React from 'react'
import store from '../store'
import {addHabitAction, changeHabitTextAction} from '../actions'
import '../App.css'

export default () => {
  const currentHabitTextValue = store.getState().form
  let input = null
  return (
    <div>
      <div>ADD HABIT</div>
      <input type="text" ref={node => input = node} onChange={e => store.dispatch(changeHabitTextAction(e.currentTarget.value))} />
      <button
        onClick={() => {
          store.dispatch(addHabitAction(currentHabitTextValue))
          input.value = null
          store.dispatch(changeHabitTextAction(''))
        }}
      >OK
      </button>
    </div>
  )
}