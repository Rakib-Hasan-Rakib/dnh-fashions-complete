import Lottie from "lottie-react";
import dataNotFound from "/public/animation-json/data-not-found.json";

const DataNotFoundAnim = () => {
    return (
      <>
        <Lottie
          animationData={dataNotFound}
          loop={true}
          className="h-[300px] md:h-[400px] my-6 md:my-8 lg:my-10"
        />
      </>
    );
}
export default DataNotFoundAnim