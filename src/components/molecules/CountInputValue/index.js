import React from 'react'

const CountInputValue = ({count, cautionCount, warningCount}) => (
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

export default CountInputValue
