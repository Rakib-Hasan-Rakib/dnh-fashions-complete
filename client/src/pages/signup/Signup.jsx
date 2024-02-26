import { useForm } from "react-hook-form";
import SignupAnim from "../../components/shared/animations/SignupAnim";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/auth";
import useAuth from "../../hooks/useAuth";
import { ImSpinner4 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpin from "../../components/shared/spin/LoadingSpin";
// import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    createUser,
    updateUserProfile,
    setLoading,
    loading,
    signInWithGoogle,
  } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathName || "/";
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const name = data.name
    const email = data.email;
    const password = data.password;
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, imageUrl)
              .then(() => {
                toast.success("Signup successful");
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((err) => {
                setLoading(false);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
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
        <title>D&H Fashions Ltd. | Sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 max-w-[100vw] overflow-x-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full md:w-3/4 lg:w-full xl:w-3/4">
          <div className="text-center basis-1/2 lg:text-left">
            <SignupAnim />
          </div>
          <div className="card flex-shrink-0 basis-1/2 w-full shadow-2xl bg-base-100">
            <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl my-2 text-center font-bold text-amber-400">
              Please Signup Here
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name here"
                    className="border border-gray-900 outline-none rounded-sm px-4 py-2 bg-transparent"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email here"
                    className="border border-gray-900 outline-none rounded-sm px-4 py-2 bg-transparent"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    {...register("photo", { required: true })}
                    accept="image/*"
                    className="border border-dotted border-gray-900 outline-none rounded-sm px-4 py-2 bg-transparent"
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
                    {loading ? <LoadingSpin /> : "Sign Up"}
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center items-center gap-3 px-4">
              <hr className="w-full  bg-amber-400" />
              <span>OR</span>
              <hr className="w-full bg-amber-400" />
            </div>
            <div
              onClick={handleGoogleSignIn}
              className="border border-amber-400 flex justify-center items-center px-2 py-1 md:w-2/3 mx-auto cursor-pointer rounded-md"
            >
              <FcGoogle size={40} />
              <span>Sign in with Google</span>
            </div>
            <p className="text-center mt-8 mb-2 px-4">
              Already have account?
              <Link
                to="/signin"
                className="text-amber-400 hover:text-black transition-all duration-200"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
