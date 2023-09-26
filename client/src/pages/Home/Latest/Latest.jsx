import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Latest.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";

const Latest = () => {
  const [latestDress, setLatestDress] = useState([]);

  useEffect(() => {
    fetch("https://dnh-fashion-server.vercel.app/latest")
      .then((res) => res.json())
      .then((data) => setLatestDress(data));
  }, []);

  return (
    <div className="mb-32">
      {SectionTitle(
        "Latest arrivals",
        "Discover the Hottest Additions to our Collection"
      )}
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {latestDress?.map((singleDress) => {
            return (
              <SwiperSlide key={singleDress._id} className="latest-slide">
                <div className="relative">
                  <img src={singleDress.image} />
                </div>
                <div className="absolute inset-0 text-white bg-black bg-opacity-60 px-4 py-2 flex flex-col justify-end opacity-0 hover:opacity-100 duration-700 rounded-xl">
                  <h1 className="text-lg md:text-2xl font-semibold mb-3 capitalize text-center">
                    {singleDress.name}
                  </h1>
                  <Link to="/collections" className="flex justify-center">
                    <button className="cursor-pointer border border-red-500 rounded-md text-white font-semibold hover:bg-red-600 px-2 md:px-4 py-1">
                      Browse Collection
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Latest;
