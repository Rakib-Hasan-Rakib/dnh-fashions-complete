import { useForm } from "react-hook-form";
import SignupAnim from "../../components/shared/animations/SignupAnim";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/auth";
import useAuth from "../../hooks/useAuth";
import { ImSpinner4 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
// import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, setLoading, loading,signInWithGoogle } = useAuth();

  const location = useLocation();
  const from = location.state?.from?.pathName || "/";
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const image = data.photo[0];
    console.log(data.photo[0]);
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
        <title>D&H Fashions Ltd. | Sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 w-[100vw]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="text-center basis-1/2 lg:text-left">
            <SignupAnim />
          </div>
          <div className="card flex-shrink-0 basis-1/2 w-full shadow-2xl bg-base-100">
            <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
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
                    {...register("name")}
                    placeholder="Write your Name here"
                    className="input input-bordered"
                  />
                </div>
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
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    {...register("photo")}
                    accept="image/*"
                    className="border-2 border-red-500 p-3 border-dotted"
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
                    <ImSpinner4 />
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

export default Signup;
