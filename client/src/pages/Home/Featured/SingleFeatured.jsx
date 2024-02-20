import AddToCart from "../../../components/shared/cart/AddToCart";
import Fav from "../../../components/shared/fav/Fav";

const SingleFeatured = ({ singleDress }) => {
  const {  name, image, } = singleDress;

  return (
    <>
      <div
        className="absolute text-center featured-overlay flex flex-col justify-end items-center group"
      >
        <div className="mb-4 md:mb-8 text-white absolute -bottom-20 group-hover:bottom-0 transition-all duration-1000">
          <h2 className="dress-name text-xl md:text-3xl my-2 md:my-4 font-semibold text-center tracking-wider uppercase ">
            {name}
          </h2>
          <div className="flex justify-center gap-4">
            <AddToCart product={singleDress} />
            <Fav product={singleDress} />
          </div>
          {/* <DemoModal /> */}
        </div>
      </div>
      <img
        className="object-cover object-top h-[350px] md:h-[550px] w-full rounded-lg"
        src={image}
        alt="featured image"
      />
    </>
  );
};

export default SingleFeatured;
