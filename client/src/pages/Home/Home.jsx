import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Spotlight from "./Spotlight/Spotlight";
import Seasonal from "./Seasonal/Seasonal";
import Latest from "./Latest/Latest";
import { Helmet } from "react-helmet";
import Container from "../../components/shared/Container";

const Home = () => {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>D&H Fashions Ltd. | Home</title>
      </Helmet>
      <Container>
        <Banner />
        <Featured />
        <Spotlight />
        <Seasonal />
        <Latest />
      </Container>
    </div>
  );
};

export default Home;
