import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";

function App() {
  return (
<>
  <div className={'container-fluid'}>
    <Routes>
      <Route path={''} element={<Login/>}></Route>
      <Route path={'register'} element={<Register/>}></Route>
      <Route path={'home'} element={<Home/>}>
        {/*<Route path={''} element={<List/>}></Route>*/}
        {/*<Route path={'create'} element={<Create/>}></Route>*/}
        {/*<Route path={'edit/:id'} element={<Edit/>}></Route>*/}
      </Route>
    </Routes>
  </div>
</>
  );
}

export default App;
