import { useForm } from "react-hook-form";
import SigninAnim from "../../components/shared/animations/SigninAnim";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { saveUser } from "../../utils/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import LoadingSpin from "../../components/shared/spin/LoadingSpin";

const Signin = () => {
  const { loading, signIn, setLoading, signInWithGoogle } = useAuth();

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });

    console.log(data);
  };
  //   console.log(watch("example"));
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Sign in</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 w-[100vw]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full md:w-2/3">
          <div className="text-center basis-1/2 lg:text-left">
            <SigninAnim />
          </div>
          <div className="card flex-shrink-0 basis-1/2 w-full shadow-2xl bg-base-100 ">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl py-4 font-bold text-amber-300">
              Welcome back!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body w-full">
                <div className="form-control">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Write your Email here"
                    className="border border-gray-900 outline-none rounded-sm px-4 py-2 bg-transparent"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="******"
                    className="border border-gray-900 outline-none rounded-sm px-4 py-2 bg-transparent"
                  />
                  <div className="absolute bottom-0 right-2 -translate-y-2/3 lg:-translate-y-2/3 cursor-pointer text-amber-500">
                    {showPass ? (
                      <FaEyeSlash onClick={() => setShowPass(false)} />
                    ) : (
                      <FaEye onClick={() => setShowPass(true)} />
                    )}
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-amber-400 border border-amber-400 hover:bg-transparent text-white hover:text-black font-semibold transition-all duration-300 py-2 w-1/3 mx-auto cursor-pointer rounded-md">
                    {loading ? <LoadingSpin /> : "Sign In"}
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center items-center gap-3 px-4">
              <hr className="w-full text-orange-500 bg-orange-500" />
              <span>OR</span>
              <hr className="w-full text-orange-500 bg-orange-500" />
            </div>
            <div
              onClick={handleGoogleSignIn}
              className="border border-amber-400 flex justify-center items-center px-2 py-1 md:w-2/3 mx-auto cursor-pointer rounded-md"
            >
              <FcGoogle size={40} />
              <span>Sign in with Google</span>
            </div>
            <p className="text-center mt-8 mb-2 px-4">
              Already have account?{" "}
              <Link
                to="/signup"
                className="text-amber-400 hover:text-black transition-all duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
