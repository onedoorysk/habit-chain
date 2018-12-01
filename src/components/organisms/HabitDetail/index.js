import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
import Edit from '@material-ui/icons/Edit'
import Album from '@material-ui/icons/Album'
import DisplayCalendar from '../../../containers/DisplayCalendar'
import DeleteHabit from '../../../containers/DeleteHabit'
import EditHabit from '../../../containers/EditHabit'

const HabitDetail = ({classes, habit, openAndCloseModal}) => (
  <div className="detail">
    <div className="detail__header">
      <div className="detail__header__title">
        <div className="detail__header__title__name">
          {habit.habitName}
        </div>
        <div className="chain-block">
          <div className="chain-block__count">
            {habit.chainCount}
          </div>
          <div className="chain-block__text">
            chain
          </div>
        </div>
      </div>
      <div>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => openAndCloseModal('deleteHabit')}
        />
      </div>
    </div>
    <div className="split-border" />
    <div className="split-border" />
    <div className="detail__detail">
      <div className="detail__detail__label">
        <FormatAlignLeft className={classes.descriptionTitleIcon}/>
        <div className="detail__detail__label__title">DETAIL</div>
        <Edit
          className={classes.editIcon}
          onClick={() => openAndCloseModal('editModal')}
        />
      </div>
      <div className="detail__detail__text">
        {habit.description}
      </div>
    </div>
    <div className="split-border" />
    <div className="detail__record">
      <div className="detail__record__label">
        <Album className={classes.recordIcon}/>
        <div className="detail__record__label__title">
          RECORD
        </div>
      </div>
    </div>
    <DisplayCalendar id={habit.id} />
    <DeleteHabit habit={habit} />
    <EditHabit habit={habit} />
  </div>
)

export default HabitDetail
