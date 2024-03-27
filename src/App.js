import logo from './logo.svg';
import './App.css';
import Register from "./pages/Register";
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Body from "./components/Body";
import EnterpriseHome from "./pages/home/enterprises/EnterpriseHome";
import List from "./pages/home/enterprises/recruitment-post/List";
import CreatePost from "./pages/home/enterprises/recruitment-post/CreatePost";
import {useSelector} from "react-redux";
import Enterprise from "./pages/home/enterprises/Enterprise";
import Add from "./pages/home/enterprises/recruitment-post/Add";

function App() {
    const user = useSelector(state =>{
        console.log("hello",state)
        return state.users.users
    })
    return (
        <>
            <div className={'container-fluid'}>
                <Routes>
                    {/*<Route path={''} element={<Home/>}>*/}
                    {/*    <Route path={'register'} element={<Register/>}></Route>*/}
                    {/*    <Route path={''} element={<Body/>}></Route>*/}
                    {/*    /!*<Route path={'list'} element={<List/>}></Route>*!/*/}
                    {/*</Route>*/}
                    <Route path={''} element={<Enterprise/>}>
                        <Route path={''} element={<EnterpriseHome/>}></Route>
                        <Route path={'create'} element={<CreatePost/>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
