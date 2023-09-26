import Lottie from "lottie-react";
import evolution from "/public/animation-json/evolution.json";

const EvolutionAnim = () => {
    return <Lottie animationData={evolution} loop={true} className="h-[300px] md:h-[400px] -mt-28" />;
};

export default EvolutionAnim;