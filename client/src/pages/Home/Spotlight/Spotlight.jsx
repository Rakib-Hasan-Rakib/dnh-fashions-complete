import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {showMore &&
          spotlightDress.map((singleDress, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                key={i}
                className="card w-full shadow-xl border border-red-600"
              >
                <figure>
                  <img
                    className="h-[400px] w-full object-cover object-top"
                    src={singleDress.image}
                    alt="Shoes"
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
        {showMore ||
          spotlightDress.slice(0, 3).map((singleDress, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                key={i}
                className="card w-full shadow-xl border border-red-600"
              >
                <figure>
                  <img
                    className="h-[400px] w-full object-cover object-top"
                    src={singleDress.image}
                    alt="Shoes"
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
          <button className="btn-two">browse collection</button>
        </div>
      )}
    </div>
  );
};

export default Spotlight;
