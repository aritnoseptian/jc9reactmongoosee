import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import "bootstrap/dist/css/bootstrap.min.css"   

import reducers from './reducers'
import App from './components/App'
// import Login from './components/Login'
// import Register from './components/Register'
// import Homer from './components/Home'

const data_store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {data_store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)