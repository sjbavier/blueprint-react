import React from 'react';
import ReactDOM from 'react-dom';

// add bootstrap (optional) prior to index.css

// apply styles
import './index.css';

// Import components here
import App from './App';

// creating with middleware, redux and router
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import history from './components/history/history'

// import combined reducer and saga
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

// service worker
import * as serviceWorker from './serviceWorker';

// initiate sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

// eslint disable
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

// create store and the combined reducers from IndexReducer
const store = createStore(
   IndexReducer,
   composeSetup( applyMiddleware( sagaMiddleware ) )
)

// Initiate Index Saga
sagaMiddleware.run( IndexSagas )

// setup top level router for React Router

let root = document.getElementById('root')

ReactDOM.render(
   <Provider store={ store }>
      <BrowserRouter>
         <Router history={ history }>
            <Switch>
               <Route path="/" component={ App } />
               <Redirect to="/" />
            </Switch>
         </Router>
      </BrowserRouter>
   </Provider>, 
   root
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
