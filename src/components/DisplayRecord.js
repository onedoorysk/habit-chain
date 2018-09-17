import React from 'react'
import store from '../store'

export default () => {
  const currentRecord = store.getState().record
  return (
    <div>
      {currentRecord}
    </div>
  )
}