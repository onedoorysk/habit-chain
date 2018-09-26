import React from 'react'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import HabitDetail from './components/HabitDetail'
import DisplayRecord from './components/DisplayRecord'
import Header from './components/Header'
import HabitFilter from './components/HabitFilter'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <div>
    <p className="long-width">Change your window size to less than 768px.</p>
    <Header />
    <Router>
      <Route exact path="/" component={HabitFilter} />
    </Router>
    <div className="container" >
      <Router>
        <div>
          <Route exact path="/" component={HabitForm} />
          <Route exact path="/" component={HabitList} />
          <Route path="/detail/:id" component={HabitDetail} />
          <Route exact path="/" component={DisplayRecord} />
        </div>
      </Router>
    </div>
  </div>
)

export default App;