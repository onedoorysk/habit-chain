import React from 'react'
import ReactDOM from 'react-dom'
import HabitListPage from './components/pages/HabitListPage'
import HabitDetailPage from './components/pages/HabitDetailPage'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
      <Route exact path="/" component={HabitListPage}/>
      <Route exact path="/detail/:id" component={HabitDetailPage}/>
      </>
    </Router>
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker();
