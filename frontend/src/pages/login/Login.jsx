const Login = () => {
  return <div classname = "flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login 
            <span className="text-blue-500"> TeXpress</span><br></br>
            <span className="text-amber-500 text-xl">Chat and behold, as stories unfold!</span>
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-50">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"></input>
                </div>
                <div>
                <label className="label p-2">
                        <span className="text-base label-text text-gray-50">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"></input>
                </div>

                <a href="#" className="text-gray-50 text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>
            </form>
        </h1>

    </div>
  </div>;
};
export default Login;