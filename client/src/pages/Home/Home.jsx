import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Spotlight from "./Spotlight/Spotlight";
import Seasonal from "./Seasonal/Seasonal";
import Latest from "./Latest/Latest";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>D&H Fashions Ltd. | Home</title>
      </Helmet>
      <Banner />
      <Featured />
      <Spotlight />
      <Seasonal />
      <Latest />
    </div>
  );
};

export default Home;
