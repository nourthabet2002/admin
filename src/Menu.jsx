import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>

                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class */}
                                {/* Dashboard */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index3.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/* Widgets */}
                                <li className="nav-item">
                                    <a href="pages/widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Widgets
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </a>
                                </li>
                                {/* Charts */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie"></i>
                                        <p>
                                            Charts
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/charts/chartjs.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/flot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/inline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/* UI Elements */}
                                {/* Add other menu items as needed */}
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>
        );
    }
}
