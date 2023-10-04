import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import Card from "../../../components/shared/card/Card";
AOS.init();

const Spotlight = () => {
  const [spotlightDress, setSpotlightDress] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/spotlight")
      .then((res) => res.json())
      .then((data) => setSpotlightDress(data));
  }, []);

  return (
    <div>
      {SectionTitle("style Spotlight", "the latest fashion statements")}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        {showMore &&
          spotlightDress.map((singleDress, i) => {
            return (
              <div data-aos="fade-up" data-aos-duration="1500" key={i}>
                <Card productInfo={singleDress} />
              </div>
            );
          })}
        {showMore ||
          spotlightDress.slice(0, 4).map((singleDress, i) => {
            return (
              <div data-aos="fade-up" data-aos-duration="1500" key={i}>
                <Card productInfo={singleDress} />
              </div>
            );
          })}
      </div>
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="flex justify-center my-2 md:my-6"
        >
          <button className="btn-two">browse collection</button>
        </div>
      )}
      {!showMore && (
        <div
          onClick={() => setShowMore(true)}
          className="flex justify-center my-2 md:my-6"
        >
          <button className="btn-two">show more</button>
        </div>
      )}
    </div>
  );
};

export default Spotlight;
