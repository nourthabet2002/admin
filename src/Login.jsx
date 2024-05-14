
import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); // Using navigate from useNavigate hook
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:7000/logadmin", { username, password });

            if (res.data === "exist") {
                // Navigate to a route that renders both Header and Naviger components
                navigate("/menu_and_milieu");
            } else if (res.data === "notexist") {
                alert("admin has not signed up");
            }
        } catch (e) {
            alert("login ou mot de passe invalide!!!!");
            console.log(e);
        }
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>se connecter</h1>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <input type="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import Menu from "./Menu";
// import Milieu from "./Milieu";

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             const res = await axios.post("http://localhost:7000/logadmin", { username, password });

//             if (res.data === "exist") {
//                 setLoggedIn(true);
//             } else if (res.data === "notexist") {
//                 alert("admin has not signed up");
//             }
//         } catch (e) {
//             alert("Wrong details");
//             console.log(e);
//         }
//     }

//     return (
//         <div className="login">
//             {!loggedIn ? (
//                 <>
//                     <h1>Login</h1>
//                     <form onSubmit={submit}>
//                         <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//                         <input type="submit" value="Login" />
//                     </form>
//                 </>
//             ) : (
//                 <>
//                     <Menu />
//                     <Milieu />
//                 </>
//             )}
//         </div>
//     );
// }

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Menu from "./Menu"; // Import the Menu component
// import Milieu from "./Milieu"; // Import the Milieu component

// function Login() {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             const res = await axios.post("http://localhost:7000/logadmin", { username, password });

//             if (res.data === "exist") {
//                 // Set loggedIn to true
//                 setLoggedIn(true);
//                 // Navigate to a route that renders both Menu and Milieu components
//                 navigate("/menu_and_milieu");
//             } else if (res.data === "notexist") {
//                 alert("Admin has not signed up.");
//             }
//         } catch (e) {
//             alert("Wrong details.");
//             console.log(e);
//         }
//     }

//     return (
//         <div>
//             {/* If logged in, render both Menu and Milieu components */}
//             {loggedIn && (
//                 <>
//                     <Menu />
//                     <Milieu />
//                 </>
//             )}
//             {/* If not logged in, render the login form */}
//             {!loggedIn && (
//                 <div className="login">
//                     <h1>Login</h1>
//                     <form onSubmit={submit}>
//                         <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//                         <input type="submit" value="Login" />
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Login;




// <div className="login">
// <h1>Login</h1>
// <form onSubmit={submit}>
//     <input type="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" />
//     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//     <input type="submit" value="Login" />
// </form>
// <br />

// <br />

// </div>
// );
// }
