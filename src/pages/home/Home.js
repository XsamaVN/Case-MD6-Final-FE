import Navbar from "../../components/Navbar";
import Register from "../Register";
import Login from "../Login";
import {Outlet} from "react-router";
import Footer from "../../components/Footer";
import Body from "../../components/Body";

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className={'row'}>
                    <Outlet></Outlet>
            </div>
            <Footer/>
        </>
    )
}