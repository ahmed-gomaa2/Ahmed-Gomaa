import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {BrowserRouter, Route} from "react-router-dom";
import * as actions from '../actions'
import Navbar from "./Navbar";
import About from "./About";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact component={() => <Navbar/>} />
                <Route exact path={'/about'} component={() => <About/>}/>

            </BrowserRouter>
        )
    }
}

export default compose(
    connect(null, actions),
    firestoreConnect(props => [
        {
            collection: 'projects'
        }
    ])
) (App);