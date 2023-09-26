import Lottie from "lottie-react";
import strategy from "/public/animation-json/strategy.json";

const StrategyAnim = () => {
     return (
       <Lottie
         animationData={strategy}
         loop={true}
         className="w-[350px]"
       />
     );
};

export default StrategyAnim;