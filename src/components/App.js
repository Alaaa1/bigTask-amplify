
import '../App.css';
import { Routes, Route, Link } from "react-router-dom"
import AuthedFuncs from './AuthedFuncs';
import UnauthedFuncs from './UnauthedFuncs';
import Home from "./Home";
import UploadPicture from './UploadPicture';


function App() {


  return (
    <>
      <nav>
        <button><Link to={"/unauthed"}>Fetch Data</Link></button>
        <button><Link to={"/authed"}>Other Operations</Link></button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unauthed" element={<UnauthedFuncs />} />
        <Route path="/authed" element={<AuthedFuncs />} />
        <Route path={"/uploadPicture"} element={<UploadPicture />}></Route>
      </Routes>
    </>
  );
}

export default App;
