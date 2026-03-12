// import React, { useState } from "react";
// import "./signup.css";
// import { useNavigate } from "react-router-dom";
// function SignUp() {
//      const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   const handleSendOtp = () => {
//     if (!email.trim()) {
//       alert("Please enter your email first");
//       return;
//     }
//     alert("OTP sent to " + email);
//   };

//   const handleVerify = () => {
//     if (!otp.trim()) {
//       alert("Please enter OTP");
//       return;
//     }
//     alert("OTP Verified! Redirecting...");
//   };

//   return (
//     <div className="signup-overlay">
//       <div className="signup-container">
//         <h1>Sign Up to P.P Collections</h1>
//         {/* Close Button */}
//         <button className="signup-close" onClick={() => navigate("/")}>
//           ✖
//         </button>

//         <h2>Create Your Account</h2>
        

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="signup-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         {/* OTP Row */}
//         <div className="signup-otp-row">
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             maxLength="6"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button
//             type="button"
//             className="signup-otp-btn"
//             onClick={handleSendOtp}
//           >
//             Send OTP
//           </button>
//         </div>

//         {/* Verify Button */}
//         <button
//           type="button"
//           className="signup-btn"
//           onClick={handleVerify}
//         >
//           Verify & Continue
//         </button>

//         <div className="signup-link" onClick={() => navigate("/login")}>
//           Already have an account? <span>Login</span>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email.trim()) {
      alert("Please enter your email first");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("OTP sent successfully to " + email);
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!otp.trim()) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("OTP Verified Successfully!");

        // ✅ PASS EMAIL TO CREATE ACCOUNT PAGE
        navigate("/create-account", { state: { email } });

      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <h1>Sign Up to P.P Collections</h1>

        <button className="signup-close" onClick={() => navigate("/")}>
          ✖
        </button>

        <h2>Create Your Account</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="signup-otp-row">
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="button"
            className="signup-otp-btn"
            onClick={handleSendOtp}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </div>

        <button
          type="button"
          className="signup-btn"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify & Continue"}
        </button>

        <div className="signup-link" onClick={() => navigate("/login")}>
          Already have an account? <span>Login</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;