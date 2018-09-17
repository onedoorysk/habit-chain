import React from 'react'
import './App.css'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import HabitDetail from './components/HabitDetail'
import DisplayRecord from './components/DisplayRecord'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <div>
    <p className="long-width">Change your window size to less than 768px.</p>
    <div className="container" >
      <h1>-HABIT-x-CHAIN-</h1>
      <HabitForm />
      <Router>
        <div>
          <Route exact path="/" component={HabitList} />
          <Route path="/detail/:id" component={HabitDetail} />
        </div>
      </Router>
      <DisplayRecord />
    </div>
  </div>
)

export default App;