import React from 'react'
import '../../App.css'

export default ({count, cautionCount, warningCount}) => {
  return (
    <div
      className="textbox-block__char-count"
      style={
        count < cautionCount
          ? (count < warningCount ? {color: '#E0245E'} : {color: '#FFAD1F'})
          : {}
        }
    >
      {count}
    </div>
  )
}