import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { rootReducer } from './reducers/rootReducer'



const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )


ReactDOM.render(
    <Router>
    <Provider store={store}>
       
          <App />
       
    </Provider>
    </Router>,
    document.getElementById('root')
)


