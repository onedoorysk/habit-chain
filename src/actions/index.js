import TYPE from './_actionType'

export const typeHabitNameAction = value => ({type: TYPE.TYPE_HABIT_NAME, payload: {value}})
export const typeHabitDescriptionAction = value => ({type: TYPE.TYPE_HABIT_DESCRIPTION, payload: {value}})
export const addHabitAction = (habitName, description) => ({type: TYPE.ADD_HABIT, payload: {habitName, description}})
export const deleteHabitAction = id => ({type: TYPE.DELETE_HABIT, payload: {id}})
export const doneHabitAction = id => ({type: TYPE.DONE_HABIT, payload: {id}})
export const dayCountAction = {type: TYPE.DAY_COUNT}
export const filterListAction = filterType => ({type: TYPE.FILTER_LIST, payload: {filterType}})
export const openModalAction = {type: TYPE.OPEN_MODAL}
export const changeCalendarAction = (changeValue) => ({type: TYPE.CHANGE_CALENDAR, payload: {changeValue}})