// import React from "react";
// import Header from "./Header";
// import Menu from "./Menu";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./Footer";
// import "./App.css";
// import Milieu from "./Milieu";
// import Login from "./Login";


// function App() {
//   return (
//     <div className="wrapper">
//        <Router>
//         <div>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/menu_and_milieu" element={<div><Menu /><Milieu /></div>} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Header from "./Header";
import Menu from "./Menu";

import Footer from "./Footer";
import "./App.css";
import Milieu from "./Milieu";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Milieu/>
      <Footer />
    </div>
  );
}

export default App;


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







