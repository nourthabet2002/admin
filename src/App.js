import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import "./App.css";
import Milieu from "./Milieu";
import Login from "./Login";
import Ajouterchef from './Ajouterchef';
import Surrprimerchef from './Surrprimerchef';
import Modifierchef from './Modifierchef';
import Addscategorie from './Addcategorie';
import Reservation from './Reservation';
import Accepter from './Accepter';
import Surrprimerservice from './Surrprimerservice';
// import Consulterclient from './Consulterclient';
import Surrprimerclient from './Surrprimerclient';
import AddcategorieForm from './Addcategorie';
import AddServiceForm from './Addservice';
import Surrprimercategorie from'./Surrprimercategorie';
import ModifierCategorie from './Modifiercategorie';
import Modifierservice from './Modifierservice';
import Ajouteremploye from './Ajouteremploye';
import Modifier from './Modifier';
import Surrprimeremploye from './Surrprimeremploye';
import Consulterchef from './Consulterchef';
import Consulteremploye from './Consulteremploye';
import Consulterservice from "./Consulterservices";
import Consultercategorie from "./Consultercategorie";
function App() {
  return (
    <div className="wrapper">
       <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu_and_milieu" element={<div><Menu /><Milieu /></div>} />
            <Route path="/ajouterchef" element={<Ajouterchef />} />
              <Route path="/surrprimerchef" element={<Surrprimerchef />} />
               <Route path="/modifierchef" element={<Modifierchef />} />
               <Route path="/ajoutercategorie" element={<AddcategorieForm />} />
                        <Route path="/consulter" element={<Reservation />} />
                        <Route path="/gerer" element={<Accepter />} />
                        <Route path="/surrprimerservice" element={<Surrprimerservice />} />
                        <Route path="/consulter service" element={<Consulterservice/>} />
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
                        <Route path="/consultercategorie" element={<Consultercategorie />} />
                        
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
// import React from "react";
// import Header from "./Header";
// import Menu from "./Menu";

// import Footer from "./Footer";
// import "./App.css";
// import Milieu from "./Milieu";


// function App() {
//   return (
//     <div className="wrapper">
//       <Header />
//       <Menu />
//       <Milieu/>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Login from "./Login";

// function App() {
//     return (
//         <div>
//             <Login />
//         </div>
//     );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Menu from "./Menu"; // Import the Menu component

// function App() {
//     const [loggedIn, setLoggedIn] = useState(false);

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
//                 {loggedIn && <Route path="/menu" element={<Menu />} />} // Render the Menu component if logged in
//             </Routes>
//         </Router>
//     );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Include Navigate here
// import Login from "./Login";
// import Menu from "./Menu";
// import Milieu from "./Milieu";

// function App() {
//     const [loggedIn, setLoggedIn] = useState(false);

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
//                 <Route path="/menu_and_milieu" element={loggedIn ? <CombinedMenuAndMilieu /> : <Navigate to="/" />} />
//             </Routes>
//         </Router>
//     );
// }

// function CombinedMenuAndMilieu() {
//     return (
//         <>
//             <Menu />
//             <Milieu />
//         </>
//     );
// }

// export default App;







