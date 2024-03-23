import React, { Component } from 'react';
// import Ajouterchef from './Ajouterchef'
import Surrprimerchef from './Surrprimerchef'
import Modifierchef from './Modifierchef';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
class Dashboard extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
                    <div className="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
                        <div className="nav-item dropdown">
                            <a className="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Close</a>
                            <div className="dropdown-menu mt-0">
                                <a className="dropdown-item" href="#" data-widget="iframe-close" data-type="all">Close All</a>
                                <a className="dropdown-item" href="#" data-widget="iframe-close" data-type="all-other">Close All Other</a>
                            </div>
                        </div>
                        <a className="nav-link bg-light" href="#" data-widget="iframe-scrollleft"><i className="fas fa-angle-double-left"></i></a>
                        <ul className="navbar-nav overflow-hidden" role="tablist"></ul>
                        <a className="nav-link bg-light" href="#" data-widget="iframe-scrollright"><i className="fas fa-angle-double-right"></i></a>
                        <a className="nav-link bg-light" href="#" data-widget="iframe-fullscreen"><i className="fas fa-expand"></i></a>
                    </div>
                    <Routes>
                
                    {/* <Route path="/ajouterchef" element={<Ajouterchef />} /> */}
                    <Route path="/surrprimerchef" element={<Surrprimerchef />} />
                    <Route path="/modifierchef" element={<Modifierchef />} />
                    </Routes>

                </div>
            </div>
            </Router>
        );
    }
}

export default Dashboard;


