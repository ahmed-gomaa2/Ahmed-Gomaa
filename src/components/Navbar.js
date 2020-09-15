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
                            <NavLink exact to={'/'} activeClassName={'nav-link-active'} className="nav-link"><span className={'special-letter'}>A</span>hmed <span className={'special-letter'}>G</span>omaa</NavLink>
                        </li>
                    </div>

                    <div className={`sub-links ${this.state.opened ? 'sub-links-active' : ''}`}>
                        <li className="nav-item">
                            <NavLink exact to={'/about'} activeClassName={'nav-link-active'} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/skills'} activeClassName={'nav-link-active'} className="nav-link">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/projects'} activeClassName={'nav-link-active'} className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/education'} activeClassName={'nav-link-active'} className="nav-link">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to={'/contact'} activeClassName={'nav-link-active'} className="nav-link">Contact</NavLink>
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