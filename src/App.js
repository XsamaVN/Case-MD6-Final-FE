import logo from './logo.svg';
import './App.css';
import Register from "./pages/Register";
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Body from "./components/Body";
import Enterprise from "./pages/home/enterprises/Enterprise";

function App() {
    return (
        <>
            <div className={'container-fluid'}>
                <Routes>
                    <Route path={''} element={<Home/>}>
                        <Route path={'register'} element={<Register/>}></Route>
                        <Route path={''} element={<Body/>}></Route>
                        <Route path={'enterprise'} element={<Enterprise/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
