import Lottie from "lottie-react";
import errorAnimation from "/public/animation-json/error-animation.json";

const ErrorAnim = () => {
  return <Lottie animationData={errorAnimation} loop={true} className="w-full h-[80vh]" />;
};

export default ErrorAnim;
