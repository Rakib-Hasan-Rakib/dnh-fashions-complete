import Lottie from "lottie-react";
import whatWeDo from "/public/animation-json/what-we-do.json";

const WhatWeDoAnim = () => {
  return (
    <Lottie
      animationData={whatWeDo}
      loop={true}
      className="h-[300px] md:h-[400px] -mt-20"
    />
  );
};

export default WhatWeDoAnim;
