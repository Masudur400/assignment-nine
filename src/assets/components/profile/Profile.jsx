import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

 
const Profile = () => {

    const {user} = useContext(AuthContext)
     

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Profile</title>
            </Helmet>

            {
                user && <div data-aos="zoom-in-down" className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">

                <div className="flex justify-center">
                <img className="bg-red-100 w-52 h-52 rounded-full" src={user?.photoURL} alt="" />
                </div>

                <h2 className="text-2xl my-5 font-bold text-center">Name : {user?.displayName || 'Gest'}</h2>

                <p className="text-center mb-5">Email: {user?.email || "User"}</p>

               <div className="flex justify-center">
               <Link to='/updateProfile'><button className="px-4 py-2 rounded-md bg-red-500 text-white font-bold">Update Profile</button></Link>
               </div>

             </div>
            }
             
        </div>
    );
};

export default Profile;