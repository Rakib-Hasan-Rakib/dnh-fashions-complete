import Lottie from "lottie-react";
import ourMission from "/public/animation-json/our-mission.json";

const MissionAnim = () => {
    return (
      <Lottie
        animationData={ourMission}
        loop={true}
        className="w-[300px]"
      />
    );
};

export default MissionAnim;