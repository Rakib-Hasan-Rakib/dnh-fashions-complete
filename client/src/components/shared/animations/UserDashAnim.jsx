import Lottie from "lottie-react";
import userDash from "../../../../public/animation-json/user-dash.json";

const UserDashAnim = () => {
  return (
    <Lottie animationData={userDash} loop={true} className="w-full h-[100vh]" />
  );
};

export default UserDashAnim;
