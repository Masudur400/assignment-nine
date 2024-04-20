import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="updateProfile">Update Profile</NavLink></li>
        <li> <NavLink to="selectList">Select list</NavLink></li>
        <li> <NavLink to="profile">ProFile</NavLink></li>
        <li> <NavLink to="Register">Register</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar flex max-sm:flex-col bg-red-400 text-white font-bold rounded-md">
                <div className="navbar-start max-sm:w-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500  rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <p className="text-center max-sm:w-[70%]"><Link to="/" className="btn btn-ghost text-xl "> Residential</Link></p>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className=" md:navbar-end ">


                    {
                        user ? <div className="flex max-sm:w-full max-sm:gap-32 gap-3  ">
                            <img className="w-12 h-12 rounded-full" alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                            <button onClick={handleSignOut} className="btn font-bold text-red-500">Log Out</button> </div>
                            : <Link to='/login' className="btn font-bold text-red-500">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;