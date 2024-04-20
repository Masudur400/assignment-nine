import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const {logIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget) 
        const email = form.get('email') 
        const password = form.get('password')
        console.log(email, password)

        logIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        }) 
         

    }

    return (
        <div className="min-h-screen">
            <div className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">
                <h2 className="text-2xl font-bold text-center text-red-500  my-3">LogIn Your Account</h2>
                <form onSubmit={handleLogin}>


                    <p>Email</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="email" name="email" placeholder="Email" id="" required />

                    <p>Password</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="password" name="password" placeholder="Password" id="" required />

                    <input className=" rounded-md hover:bg-red-400 bg-red-500 w-full px-4 py-2 text-center font-bold text-lg text-white my-3" type="submit" value="Login" />
                </form>

                <p>Do not have an account ? <Link to='/register' className="text-red-500 font-bold underline">please Register</Link></p>

            </div>
        </div>
    );
};

export default Login;