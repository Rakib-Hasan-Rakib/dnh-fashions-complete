import Lottie from "lottie-react";
import errorAnimation from "/public/animation-json/error-animation.json";

const ErrorAnim = () => {
  return (
    <Lottie animationData={errorAnimation} loop={true} className="w-[400px]" />
  );
};

export default ErrorAnim;
