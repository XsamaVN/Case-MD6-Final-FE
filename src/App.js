import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Body from "./components/Body";

function App() {
    return (
        <>
            <div className={'container-fluid'}>
                <Routes>
                    <Route path={''} element={<Home/>}>
                        <Route path={'login'} element={<Login/>}></Route>
                        <Route path={'register'} element={<Register/>}></Route>
                        <Route path={''} element={<Body/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
