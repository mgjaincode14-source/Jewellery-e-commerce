import "./goto.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  return (
    <div className="modal-overlay">
      <div className="container">
        <button className="signX" onClick={() => navigate("/")}>X</button>
        
        <center>
          <h1>Sign In to P.P Collections</h1>
          <div className="imagesignup">
            <img src="logo512.png" alt="logo" height="100"/>
          </div>

          <div style={{marginTop: '20px'}}>
            <input className="User" placeholder="Username" />
            <input className="User" type="password" placeholder="Password" />
          </div>

          <div style={{margin: '20px 0'}}>
            <span className="blueline" style={{fontSize: '14px'}}>Forget password?</span>
          </div>
          
          <div className="ok" style={{ width: '100px'}}>Log In</div>
          
          <div className="loin" style={{marginTop: '30px'}}>
            Don't have an account?&nbsp;
            <div className="blueline" onClick={() => navigate("/signup")}>Sign Up</div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;



