import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = () => {

    // eslint-disable-next-line no-unused-vars
    const [errorText, setErrorText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Unlock the future of secure online access with us. Join our community and experience seamless authentication. Your digital journey begins here.</p>
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            {/* {user ? <div className="text-center text-white text-2xl p-5">

                                <p className="mb-5">Logged in with:</p>
                                <div className="flex justify-center">
                                    <img className="w-[100px] rounded-full" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/F8JsB1D/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"} alt="" />
                                </div>
                                <h3 className="text-2x">{user?.email}</h3>
                            </div> : */}
                            <div>
                                <form className="card-body" onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered " required />
                                    </div>
                                    <div className="">
                                        {errorText && <p className="text-red-500 py-2">{errorText}</p>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-accent btn-outline">Login</button>
                                    </div>
                                </form>
                                <div className="card-body">
                                    <p className="text-center text-white">Sign in using:</p>
                                    <div className="flex justify-center gap-5 mt-5">
                                        <button className="btn btn-outline btn-block btn-warning"><span className="text-2xl"><FcGoogle></FcGoogle></span> Log in using Google</button>
                                    </div>
                                </div>
                                <p className="text-white text-center py-5">Don&apos;t have an account? <Link to="/register"><span className="underline text-blue-500">Register Now</span></Link></p>
                            </div>
                            {/* } */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;