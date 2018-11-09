import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

const Habit = ({id, habitName, description, chainCount, classes, recordList, onClick}) => (
  <li className="habit-card">
    <Link to={`/detail/${id}`} className="habit-card__link">
      <div className="habit-card__name">
        {habitName}
      </div>
      <div className="habit-card__detail">
        {description}
      </div>
      <div className="chain-tag">
        <div className="chain-tag__count">{chainCount}</div>
        <div className="chain-tag__text">chain</div>
      </div>
    </Link>
    <Button
      className={classes.doneButton}
      onClick={() => onClick(id)}
      disabled={recordList.length > 0 ? true : false}
    >
      DONE
    </Button>
  </li>
)

const styles = {
  doneButton: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#1C75BC'
    },
    transition: 'none'
  }
}

export default withStyles(styles)(Habit)