import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./Header";


export default function Body(){
    return(
        <div className="container py-3">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}