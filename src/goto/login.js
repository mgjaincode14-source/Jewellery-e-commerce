// import React, { useState } from 'react';
// import "./goto.css";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   }

//   const printer = async () => {
//     let r = await fetch("http://localhost:5000",{method : "POST",headers: {
//         "Content-Type": "application/json"
//       },body : JSON.stringify(credentials)});
//     let res = await r.text();
//     console.log(credentials,res); 
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="container">
//         <button className="signX" onClick={() => navigate("/")}>X</button>
        
//         <center>
//           <h1>Sign In to P.P Collections</h1>
//           <div className="imagesignup">
//             <img src="logo512.png" alt="logo" height="100"/>
//           </div>

//           <div style={{marginTop: '20px'}}>
            
//             <input 
//               name="username" 
//               className="User" 
//               placeholder="Username" 
//               onChange={handleChange} 
//             />
            
//             <input 
//               name="password" 
//               className="User" 
//               type="password" 
//               placeholder="Password" 
//               onChange={handleChange} 
//             />
//           </div>

//           <div style={{margin: '20px 0'}}>
//             <span className="blueline" style={{fontSize: '14px'}}>Forget password?</span>
//           </div>
          
//           <div className="ok" onClick={(printer)} style={{ width: '100px', cursor: 'pointer'}}>Log In</div>
          
//           <div className="loin" style={{marginTop: '30px'}}>
//             Don't have an account?&nbsp;
//             <div className="blueline" onClick={() => navigate("/signup")}>Sign Up</div>
//           </div>
//         </center>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import "./goto.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.status === 200) {
        alert("Login Successful!");

        // Save token
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);

        navigate("/");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="container">
        <button className="signX" onClick={() => navigate("/")}>X</button>

        <center>
          <h1>Sign In to P.P Collections</h1>

          <div style={{ marginTop: "20px" }}>
            <input
              name="username"
              className="User"
              placeholder="Username"
              onChange={handleChange}
            />

            <input
              name="password"
              className="User"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div
            className="ok"
            onClick={handleLogin}
            style={{ width: "100px", cursor: "pointer", marginTop: "20px" }}
          >
            {loading ? "Logging..." : "Log In"}
          </div>

          <div style={{ marginTop: "20px" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;