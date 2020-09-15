import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {createStore, applyMiddleware} from "redux";
import Thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from './config/firebase'
import {createFirestoreInstance} from 'redux-firestore'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(Thunk.withExtraArgument({getFirebase})))

const rrfProps = {
    firebase,
    config: {},
    dispatch:store.dispatch,
    createFirestoreInstance
}

ReactDom.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.querySelector('#root')
)