import Navbar from "./breakdowns/Navbar";
import BodyCards from "./breakdowns/BodyCards";
import Empty from "./breakdowns/Empty";
// import Loader from "./breakdowns/Loader";
import Login from "./goto/login";
import SignUp from "./goto/signup";

import Cardxqr from "./goto/cardxqr";
import "./mycss.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar heading="P.P Collections" />
      {/* <Loader /> */}
      <Routes>
      
        <Route exact path="/" element={<BodyCards />} />
        <Route path="/collections/:category" element={<Empty />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cardxqr" element={<Cardxqr />} />
      </Routes>
    </>
  );
}

export default App;
