import Lottie from "lottie-react";
import signup from "/public/animation-json/signup.json";
const SignupAnim = () => {
  return <Lottie animationData={signup} loop={true} className="w-[300px]" />;
};

export default SignupAnim;
