
import '../App.css';
import { Routes, Route, Link } from "react-router-dom"
import AuthedFuncs from './AuthedFuncs';
import UnauthedFuncs from './UnauthedFuncs';
import Home from "./Home";
import UploadPicture from './UploadPicture';
import GetUser from './GetUser';
import UpdateUser from './UpdateUser';

function App() {


  return (
    <>
      <nav>
        <button><Link to={"/unauthed"}>Create user</Link></button>
        <button><Link to={"/authed"}>Other Operations</Link></button>
        <button><Link to={"/authed"}>Other Operations</Link></button>d
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unauthed" element={<UnauthedFuncs />} />
        <Route path="/authed" element={<AuthedFuncs />} />
        <Route path={"/uploadPicture"} element={<UploadPicture />}></Route>
        <Route path={"/getInfo"} element={<GetUser />}></Route>
        <Route path={"/updateUser"} element={<UpdateUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
