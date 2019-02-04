import React, {Fragment} from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux'
import Screens from './screens'



const App = () => {
 
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Screens/>
          </Fragment>
        </Router>
      </Provider>
    )
}


export default App
