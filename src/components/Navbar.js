import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from "react-router-dom";
import './css/navbar.css'

function mapStateToProps(state) {
    return {};
}

class Navbar extends Component {
    state= {
        opened: false
    }

    handleBurgerClick = () => {
        this.setState({opened: !this.state.opened})
        console.log(this.state.opened)
    }

    render() {
        return (
            <div className={`navbar ${this.state.opened ? 'navbar-expanded' : ''}`}>
                <ui className="nav-list">
                    <div className="nav-header">
                        <li className="nav-item">
                            <a href={'/'}  className="nav-link"><span className={'special-letter'}>A</span>hmed <span className={'special-letter'}>G</span>omaa</a>
                        </li>
                    </div>

                    <div className={`sub-links ${this.state.opened ? 'sub-links-active' : ''}`}>
                        <li className="nav-item">
                            <a  href={'/about'}  className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a  href={'/skills'}  className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a  href={'/projects'}  className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a  href={'/education'}  className="nav-link">Education</a>
                        </li>
                        <li className="nav-item">
                            <a  href={'/contact'}  className="nav-link">Contact</a>
                        </li>
                    </div>

                </ui>
                <div onClick={this.handleBurgerClick} className={'burger-container'}>
                    <div>
                        <div className={'burger'}></div>
                        <div className={'burger'}></div>
                        <div className={'burger'}></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Navbar);