import { useForm } from "react-hook-form";
import SigninAnim from "../../components/shared/animations/SigninAnim";
import { Helmet } from "react-helmet";
import { ImSpinner4 } from "react-icons/im";
import {FcGoogle} from "react-icons/fc"
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { saveUser } from "../../utils/auth";

const Signin = () => {
  const { loading, signIn, setLoading, signInWithGoogle } = useAuth();
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathName || '/'
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
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="text-center basis-1/2 lg:text-left">
            <SigninAnim />
          </div>
          <div className="card flex-shrink-0 basis-1/2 w-full shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
              Sign in
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Write your Email here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="******"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  {loading ? (
                    <ImSpinner4 size={28} className="animate-spin" />
                  ) : (
                    <button className="btn btn-primary">Login</button>
                  )}
                </div>
              </div>
            </form>
            <div>
              <p>or sign in with</p>
              <FcGoogle onClick={handleGoogleSignIn} size={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
