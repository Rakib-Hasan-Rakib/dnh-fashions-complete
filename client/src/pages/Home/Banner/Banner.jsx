import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "./Banner.css";
import { Link } from "react-router-dom";
import ButtonOne from "../../../components/shared/buttons/ButtonOne";

const Banner = () => {
  return (
    <div>
      <Swiper
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co/0DX3194/men.jpg"
            alt="man fashion banner"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-lg md:text-2xl">
              <span className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Men's Wear <br />
              </span>{" "}
              -Master the Art of Style with D&H Fashions
            </h2>
            <p className="text-white w-3/5 text-sm md:text-lg text-center mt-2 md:mt-4 lg:mt-6">
              Discover Our Exclusive Men's Collection. Unleash your inner
              gentleman and step into a world of refined fashion.Explore our
              latest arrivals and discover the best in fashion.
            </p>
            <div className="my-4 md:my-8">
              <Link to="/collections">
                <ButtonOne text={"Browse Collection"} />
                {/* <button className="btn-one">Browse Collection</button> */}
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co/ZTjxTNk/women.jpg"
            alt="women fashion banner"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-lg md:text-2xl">
              <span className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Women's Wear <br />
              </span>{" "}
              -Timeless Beauty for Women
            </h2>
            <p className="text-white w-3/5 text-sm md:text-lg text-center mt-2 md:mt-4 lg:mt-6">
              Discover the Essence of Women's Fashion. Unleash your inner
              goddess and embrace the art of self-expression through fashion.
              Embrace the allure of fashion and unlock a realm of confidence and
              grace.
            </p>
            <div className="my-4 md:my-8">
              <Link to="/collections">
                {/* <button className="btn-one">Browse Collection</button> */}
                <ButtonOne text={"Browse Collection"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co/3ScRpbx/children.jpg"
            alt="children fashion banner"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-lg md:text-2xl">
              <span className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Children's Wear <br />
              </span>{" "}
              -Dress Your Kids in Style
            </h2>
            <p className="text-white w-3/5 text-sm md:text-lg text-center mt-2 md:mt-4 lg:mt-6">
              Explore Our Children's Collection. Dress your little ones in style
              with our delightful children's wear collection. Shop now and
              outfit your kids in fashion-forward clothing that they will love
              to wear!
            </p>
            <div className="my-4 md:my-8">
              <Link to="/collections">
                {/* <button className="btn-one">Browse Collection</button> */}
                <ButtonOne text={"Browse Collection"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co/2YsYXKY/sport.jpg"
            alt="sport fashion banner"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-lg md:text-2xl">
              <span className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Sport's Wear <br />
              </span>{" "}
              -Gear Up for Victory
            </h2>
            <p className="text-white w-3/5 text-sm md:text-lg text-center mt-2 md:mt-4 lg:mt-6">
              Explore Our Performance Sports Wear. Get ready to take your
              athletic performance to the next level with our high-quality
              sports wear collection. Our performance-driven apparel combines
              functionality and style.
            </p>
            <div className="my-4 md:my-8">
              <Link to="/collections">
                {/* <button className="btn-one">Browse Collection</button> */}
                <ButtonOne text={"Browse Collection"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
