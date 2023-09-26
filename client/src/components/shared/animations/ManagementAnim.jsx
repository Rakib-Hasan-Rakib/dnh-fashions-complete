import Lottie from "lottie-react";
import strategy from "/public/animation-json/management.json";

const ManagementAnim = () => {
    return (
      <Lottie animationData={strategy} loop={true} className="w-[400px]" />
    );
};

export default ManagementAnim;