import {Outlet} from "react-router";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";


export default function Enterprise() {
    return (
        <>
            <div className="container-fluid bg-white p-0">
                <Navbar/>
                <div className={'row'}>
                    <Outlet></Outlet>
                </div>
                <Footer/>
            </div>
        </>
    )
}