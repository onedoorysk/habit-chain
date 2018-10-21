import React from 'react'
import './App.css'
import HabitList from './components/Habit/HabitList'
import HabitDetail from './components/Habit/HabitDetail'
import Header from './components/Header'
import HabitFilter from './components/Filter/HabitFilter'
import RemainingTimer from './components/RemainingTimer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <div>
    <div className="pc">
      <div>Change your window size to less than 768px.</div>
    </div>
    <div className="sp">
      <Router>
        <div>
          <Route exact component={Header} />
          <Route exact path="/" component={HabitFilter} />
          <Route exact path="/" component={HabitList} />
          <Route path="/detail/:id" component={HabitDetail} />
        </div>
      </Router>
      <RemainingTimer />
    </div>
  </div>
)

export default App