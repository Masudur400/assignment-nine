
const Register = () => {

    const handleRegister= e =>{
        e.preventDefault ();
    }

    return (
        <div className="min-h-screen">
            <div className="w-4/5 md:w-1/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">
                <h2 className="text-2xl font-bold text-center text-red-500  my-3">Register</h2>

                <form onSubmit={handleRegister}>

                    <p>Name</p>
                    <input className="border-2 rounded-md w-full px-4 py-2" type="text" name="name" placeholder="Name" id="" required />

                    <p>Email</p>
                    <input className="border-2 rounded-md w-full px-4 py-2" type="email" name="email" placeholder="Email" id="" required />
                    <p>Password</p>
                    <input className="border-2 rounded-md w-full px-4 py-2" type="password" name="password" placeholder="Password" id="" required />

                    <input className=" rounded-md hover:bg-red-400 bg-red-500 w-full px-4 py-2 text-center font-bold text-lg text-white my-3" type="submit" value="Register" />
                </form>



            </div>
        </div>
    );
};

export default Register;