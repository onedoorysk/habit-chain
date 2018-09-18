import React from 'react'
import store from '../store'
import {addHabitAction, typeHabitNameAction, typeHabitDescriptionAction} from '../actions'
import '../App.css'

export default () => {
  const {habitName, description} = store.getState().form
  let nameInput = null
  let descriptionInput = null

  return (
    <div>
      <div>
        <div>HABIT NAME</div>
        <input
          type="text"
          ref={node => nameInput = node}
          onChange={e => store.dispatch(typeHabitNameAction(e.currentTarget.value))}
        />
      </div>
      <div>
        <div style={{"marginTop": "20px"}}>DESCRIPTION</div>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          ref={node => descriptionInput = node}
          onChange={e => store.dispatch(typeHabitDescriptionAction(e.currentTarget.value))}
        />
      </div>
      <button
        onClick={() => {
          if (nameInput.value.length === 0) {
            alert('Please type text')
            return
          }
          store.dispatch(addHabitAction(habitName, description))
          nameInput.value = null
          descriptionInput.value = null
          store.dispatch(typeHabitNameAction(''))
          store.dispatch(typeHabitDescriptionAction(''))
        }}
      >+
      </button>
    </div>
  )
}