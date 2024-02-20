import React, { useEffect, useState } from "react";
import "./Featured.css";
import SingleFeatured from "./SingleFeatured";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import axios from "axios";
import Container from "../../../components/shared/Container";

const Featured = () => {
  const [featuredDress, setFeaturedDress] = useState([]);
  axios.get(`${import.meta.env.VITE_API_URL}/featured`).then((data) => {
    setFeaturedDress(data.data);
  });

  return (
    <>
      <Container>
        {SectionTitle(
          "Fashion Forward",
          "Elevent Your style with our must-have collection"
        )}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {featuredDress?.map((singleDress, i) => {
            return (
              <SwiperSlide key={i}>
                <SingleFeatured singleDress={singleDress} sliderNumber={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Featured;
