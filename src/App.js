import React from 'react'
import HabitList from './components/HabitList'
import HabitDetail from './components/HabitDetail'
import Header from './components/Header'
import HabitFilter from './components/HabitFilter'
import RemainingTimer from './components/RemainingTimer'
import InitialSetting from './components/InitialSetting'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'

const App = () => {
  const {inputHH, inputMM} = store.getState().timer
  return (
    <div>
      <p className="long-width">Change your window size to less than 768px.</p>
      <div className="container" >
        <Router>
          <div>
            <Route exact component={Header} />
            <Route exact path="/" component={HabitFilter} />
            <Route exact path="/" component={HabitList} />
            <Route path="/detail/:id" component={HabitDetail} />
            <Route exact path="/" component={InitialSetting} />
          </div>
        </Router>
        { inputHH && inputMM ? <RemainingTimer /> : null }
      </div>
    </div>
  )
}

export default App;