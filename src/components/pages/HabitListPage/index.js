import React, { Component } from 'react'
import '../../../App.css'
import { firstProcessAction } from '../../../actions'
import store from '../../../store'
import HabitListTemplate from '../../templates/HabitListTemplate'

class HabitListPage extends Component {

  componentDidMount() {
    store.dispatch(firstProcessAction)
  }

  render() {
    return (
      <HabitListTemplate/>
    )
  }
}

export default HabitListPage