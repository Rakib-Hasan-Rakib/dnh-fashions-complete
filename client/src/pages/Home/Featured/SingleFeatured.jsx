import { Link } from "react-router-dom";

const SingleFeatured = ({ singleDress, sliderNumber }) => {
  const { name, image } = singleDress;

  return (
    <>
      <div className="absolute text-center featured-overlay flex flex-col justify-end items-center">
        <div className="mb-4 md:mb-8">
          <h2 className="dress-name text-xl md:text-3xl my-2 md:my-4 font-semibold text-center text-white tracking-wider uppercase ">
            {name}
          </h2>
          <Link to="/collections">
            <button className="btn-one">Browse Collection</button>
          </Link>
        </div>
      </div>
      <img
        className="object-cover object-top h-[350px] md:h-[550px] w-full"
        src={image}
        alt="featured image"
      />
    </>
  );
};

export default SingleFeatured;
