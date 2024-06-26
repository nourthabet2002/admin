import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Ajouterchef from './Ajouterchef';
// import Surrprimerchef from './Surrprimerchef';
// import Modifierchef from './Modifierchef';
// import Addscategorie from './Addcategorie';
// import Reservation from './Reservation';
// import Accepter from './Accepter';
// import Surrprimerservice from './Surrprimerservice';
// import Consulterclient from './Consulterclient';
// import Surrprimerclient from './Surrprimerclient';
// import AddcategorieForm from './Addcategorie';
// import AddServiceForm from './Addservice';
// import Surrprimercategorie from'./Surrprimercategorie';
// import ModifierCategorie from './Modifiercategorie';
// import Modifierservice from './Modifierservice';
// import Ajouteremploye from './Ajouteremploye';
// import Modifier from './Modifier';
// import Surrprimeremploye from './Surrprimeremploye';
// import Consulterchef from './Consulterchef';
// import Consulteremploye from './Consulteremploye';
import axios from 'axios';
export default class Body extends Component {
  state = {
    serviceCount: null
  };
  state = {
    chefCount: null
  };
  state = {
    resclientCount: null
  };
  state = {
    employeeCount: null
  };
  async componentDidMount() {
    try {
      const serviceResponse = await axios.get('http://localhost:7000/services/count');
      const chefResponse = await axios.get('http://localhost:7000/chefs/count');
      const resclientResponse = await axios.get('http://localhost:7000/resclients/count');
      const employeeResponse = await axios.get('http://localhost:7000/employees/count');
      this.setState({ 
        serviceCount: serviceResponse.data.count,
        chefCount: chefResponse.data.count,
        resclientCount: resclientResponse.data.count,
        employeeCount: employeeResponse.data.count
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ 
        serviceCount: -1,
        chefCount: -1,
        resclientCount: -1,
        employeeCount: -1,
      });
    }
  }
  render() {
    const {serviceCount, chefCount, resclientCount,  employeeCount } = this.state;
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
              <h3>{serviceCount !== null ? serviceCount : 'Loading...'}</h3>
                <p>services</p>
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
              <h3>{ chefCount !== null ? chefCount : 'Loading...'}</h3>
                <p>chef chantier</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
             
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
              <h3>{employeeCount !== null ? employeeCount : 'Loading...'}</h3>
                <p>Employés</p>
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
              <h3>{ resclientCount !== null ? resclientCount : 'Loading...'}</h3>
                <p>Réservations</p>
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
                  {/* <i className="fas fa-chart-pie mr-1" /> */}
                  
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    {/* <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab"></a>
                    </li> */}
                    
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  {/* <Router>
                  <Routes>
                        <Route path="/ajouterchef" element={<Ajouterchef />} />
                        <Route path="/surrprimerchef" element={<Surrprimerchef />} />
                        <Route path="/modifierchef" element={<Modifierchef />} />
                        <Route path="/ajoutercategorie" element={<AddcategorieForm />} />
                        <Route path="/consulter" element={<Reservation />} />
                        <Route path="/gerer" element={<Accepter />} />
                        <Route path="/surrprimerservice" element={<Surrprimerservice />} />
                        <Route path="/consulterclient" element={<Consulterclient/>} />
                        <Route path="/surrprimerclient" element={<Surrprimerclient/>} />
                        <Route path="/ajouterservice" element={<AddServiceForm />} />
                        <Route path="/surrprimercategorie" element={<Surrprimercategorie />} />
                        <Route path="/modifiercategorie" element={<ModifierCategorie />} />
                        <Route path="/modifierservice" element={<Modifierservice />} />
                        <Route path="/ajouteremploye" element={<Ajouteremploye />} />
                        <Route path="/modifieremploye" element={<Modifier />} />
                        <Route path="/surrprimeremploye" element={<Surrprimeremploye />} />
                        <Route path="/consulterchef" element={<Consulterchef />} />
                        <Route path="/consulteremploye" element={<Consulteremploye />} />
                        </Routes>
                 </Router> */}
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