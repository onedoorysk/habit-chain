import React from 'react'
import store from '../store'
import Habit from './Habit'
import { withStyles } from '@material-ui/core/styles'
import AddHabit from './AddHabit'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '113px 0 30px 0',
  },
  blank: {
    width: '165px',
    height: '165px'
  }
}

const habitList = ({classes}) => {
  const {root, blank} = classes
  const habitList = store.getState().habit
  const currentFilter = store.getState().filter
  return (
    <div>
      <ul className={root}>
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
          }).map(habit => {
            return (
              <Habit key={habit.id} habit={habit} />
            )
          })
        }
        {/* habitが奇数の時にレイアウトを整えるため空の要素を作る */}
        {habitList.length % 2 !== 0 ? <div className={blank}></div> : null}
      </ul>
      <AddHabit />
    </div>
  )
}

export default withStyles(styles)(habitList)