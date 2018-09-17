import TYPE from './_actionType'

export const changeHabitTextAction = value => ({type: TYPE.CHANGE_HABIT_TEXT, value})
export const addHabitAction = value => ({type: TYPE.ADD_HABIT, value})
export const deleteHabitAction = id => ({type: TYPE.DELETE_HABIT, id})
export const checkHabitAction = id => ({type: TYPE.CHECK_HABIT, id})
export const dayCountAction = {type: TYPE.DAY_COUNT}