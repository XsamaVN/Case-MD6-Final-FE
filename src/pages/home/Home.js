import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import Footer from "../../components/Footer";

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