import React from 'react'
import HabitList from './components/HabitList'
import HabitDetail from './components/HabitDetail'
import Header from './components/Header'
import HabitFilter from './components/HabitFilter'
import RemainingTimer from './components/RemainingTimer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <div>
    <p className="long-width">Change your window size to less than 768px.</p>
    <div className="container" >
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