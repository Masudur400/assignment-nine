import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";




const UpdateProfile = () => {
    const { updateProfile, user } = useContext(AuthContext)

    const handleUpdate = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value

        updateProfile(name, photo)
            .then(result => {
                console.log(result.use)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="min-h-screen">
            <div data-aos="zoom-in-down" className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">
                <h2 className="text-2xl font-bold text-center text-red-500 animate__animated animate__rubberBand  my-3">Update Profile</h2>

                <form onSubmit={handleUpdate} >
                    <p>Name</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="text" name="name" placeholder="Name" id="name"   />

                    <p>Photo URL</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="text" name="photo" placeholder="Photo URL" id="photo" />

                    <input className=" rounded-md hover:bg-red-400 bg-red-500 w-full px-4 py-2 text-center font-bold text-lg text-white my-3" type="submit" value="Update" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;