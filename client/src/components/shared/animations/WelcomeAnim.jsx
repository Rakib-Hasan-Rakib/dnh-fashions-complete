import Lottie from "lottie-react";
import welcomeAnimation from "/public/animation-json/welcome.json";

const WelcomeAnim = () => {
  return <Lottie animationData={welcomeAnimation} loop={true}/>;
};

export default WelcomeAnim;
