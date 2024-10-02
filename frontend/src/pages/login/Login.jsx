import { useState } from "react";
import toast  from "react-hot-toast";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password)
    }
  return (
  <div className = "flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login 
            <span className="text-blue-500"> HMS Chat </span><br></br>
            <span className="text-amber-500 text-xl">Chat and behold, as stories unfold!</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-50">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div>
                <label className="label p-2">
                        <span className="text-base label-text text-gray-50">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    ></input>
                </div>

                <Link to={"/signup"} className="text-gray-50 text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"} have an account?
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2"
                    disabled={loading}> 
                        {loading ? <span className="loading loading-spinner"></span> : "Login" } 
                    </button>
                </div>
            </form>
        </h1>

    </div>
  </div>
  );
};
export default Login;