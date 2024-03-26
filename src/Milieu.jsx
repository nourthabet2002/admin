import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ajouterchef from './Ajouterchef';
import Surrprimerchef from './Surrprimerchef';
import Modifierchef from './Modifierchef';
import Addservice from './Addservice';
import Reservation from './Reservation';
import Accepter from './Accepter';
export default class Body extends Component {
  render() {
    return (
        
      <div>{/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Acceuil</a></li>
              
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>employés</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>chef chantier</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
             
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              
            </div>
          </div>
          {/* ./col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <section className="col-lg-12 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  <Router>
                  <Routes>
                        <Route path="/ajouterchef" element={<Ajouterchef />} />
                        <Route path="/surrprimerchef" element={<Surrprimerchef />} />
                        <Route path="/modifierchef" element={<Modifierchef />} />
                        <Route path="/ajouterservice" element={<Addservice />} />
                        <Route path="/consulter" element={<Reservation />} />
                        <Route path="/gerer" element={<Accepter />} />
                        </Routes>
                 </Router>
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                </div>
              </div>{/* /.card-body */}
            </div>
          
          </section>
          
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  
</div>


    )
  }
}