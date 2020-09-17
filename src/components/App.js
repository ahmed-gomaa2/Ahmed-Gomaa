import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {BrowserRouter, Route} from "react-router-dom";
import * as actions from '../actions'
import Navbar from "./Navbar";
import About from "./About";
import './css/app.css'
import Skills from "./Skills";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className={'app-body'}>
                    <Navbar />
                    <About />
                    <Skills />
                </div>
            </div>

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