import  {  useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Seasonal.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import axios from "axios";
AOS.init();

const Seasonal = () => {
  const [winterDress, setWinterDress] = useState([]);
  const [springDress, setSpringDress] = useState([]);
  const [summerDress, setSummerDress] = useState([]);
  axios.get(`${import.meta.env.VITE_API_URL}/seasonal/winter`).then(data=>setWinterDress(data.data))
  axios.get(`${import.meta.env.VITE_API_URL}/seasonal/spring`).then(data=>setSpringDress(data.data))
  axios.get(`${import.meta.env.VITE_API_URL}/seasonal/summer`).then(data=>setSummerDress(data.data))
  
  return (
    <div>
      {SectionTitle(
        "Seasonal Sensations",
        "stay in vogue with our seasonally curated picks"
      )}
      <Tabs>
        <TabList className="md:text-lg flex justify-center mb-8">
          <Tab>Spring</Tab>
          <Tab>Winter</Tab>
          <Tab>Summer</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {springDress?.map((singleDress, i) => {
              return (
                <div
                  data-aos="flip-left"
                  key={i}
                  className="card w-full shadow-xl border border-red-600"
                >
                  <figure>
                    <img
                      className="h-[400px] w-full object-cover object-top"
                      src={singleDress.image}
                      alt="fashion"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-lg md:text-2xl capitalize font-bold md:py-4">
                      {singleDress.name}
                    </h2>
                    <div className="card-actions justify-center">
                      <Link to="/collections">
                        <button className="btn-two">browse collection</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {winterDress?.map((singleDress, i) => {
              return (
                <div
                  data-aos="zoom-in"
                  key={i}
                  className="card w-full shadow-xl border border-red-600"
                >
                  <figure>
                    <img
                      className="h-[400px] w-full object-cover object-top"
                      src={singleDress.image}
                      alt="fashion"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-lg md:text-2xl capitalize font-bold md:py-4">
                      {singleDress.name}
                    </h2>
                    <div className="card-actions justify-center">
                      <Link to="/collections">
                        <button className="btn-two">browse collection</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {summerDress?.map((singleDress, i) => {
              return (
                <div
                  data-aos="flip-right"
                  key={i}
                  className="card w-full shadow-xl border border-red-600"
                >
                  <figure>
                    <img
                      className="h-[400px] w-full object-cover object-top"
                      src={singleDress.image}
                      alt="fashion"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-lg md:text-2xl capitalize font-bold md:py-4">
                      {singleDress.name}
                    </h2>
                    <div className="card-actions justify-center">
                      <Link to="/collections">
                        <button className="btn-two">browse collection</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Seasonal;
