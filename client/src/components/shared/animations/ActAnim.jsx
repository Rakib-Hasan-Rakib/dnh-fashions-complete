import Lottie from "lottie-react";
import howWeAct from "/public/animation-json/how-we-act.json";

const ActAnim = () => {
  return (
    <Lottie
      animationData={howWeAct}
      loop={true}
      className="h-[300px] md:h-[400px]"
    />
  );
};

export default ActAnim;
