import React, { Component } from 'react';
import Ajouterchef from './Ajouterchef';
import Surrprimerchef from './Surrprimerchef';
import Modifierchef from './Modifierchef';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="surrprimerchef" className="nav-link">surrprimerchef</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="ajouterchef" className="nav-link">ajouterchef</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="modifierchef" className="nav-link">modifierchef</a>
                            </li>
                        </ul>

                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            {/* Navbar Search */}
                            <li className="nav-item">
                                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                    <i className="fas fa-search"></i>
                                </a>
                                <div className="navbar-search-block">
                                    <form className="form-inline">
                                        <div className="input-group input-group-sm">
                                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                            <div className="input-group-append">
                                                <button className="btn btn-navbar" type="submit">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            {/* Messages Dropdown Menu */}
                            {/* Notifications Dropdown Menu */}
                            {/* Other menu items */}
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/ajouterchef" element={<Ajouterchef />} />
                        <Route path="/surrprimerchef" element={<Surrprimerchef />} />
                        <Route path="/modifierchef" element={<Modifierchef />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}


