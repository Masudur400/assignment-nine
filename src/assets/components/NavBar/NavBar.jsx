import { Link, NavLink } from "react-router-dom";

 
const NavBar = () => {
    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="updateProfile">Update Profile</NavLink></li>
        <li> <NavLink to="selectList">Select list</NavLink></li>
        <li> <NavLink to="login">Login</NavLink></li>
        <li> <NavLink to="Register">Register</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-red-400 text-white font-bold rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500  rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"> Residential</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className=" navbar-end flex gap-3">
                     
                        <img className="w-12 h-12 rounded-full"  alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                     
                    <a className="btn font-bold">LogOut</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;