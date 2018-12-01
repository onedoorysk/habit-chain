import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Habit = ({id, habitName, description, chainCount, classes, recordList, onClick, doneButton}) => (
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
      className={doneButton}
      onClick={() => onClick(id)}
      disabled={recordList.length > 0 ? true : false}
    >
      DONE
    </Button>
  </li>
)

export default Habit
