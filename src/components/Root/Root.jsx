import { Outlet } from "react-router-dom"; 
import NavBar from "../NavBar/NavBar";

 
const Root = () => {
    return (
        <div className="container mt-5 px-10 mx-auto font-poppins">

            <NavBar></NavBar>
            
            <Outlet></Outlet>



        </div>
    );
};

export default Root;