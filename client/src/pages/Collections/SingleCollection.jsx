import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const SingleCollection = ({ singleDress }) => {
  const { image, name, rating } = singleDress;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="card w-full shadow-xl border border-red-600"
    >
      <figure>
        <img
          className="h-[400px] w-full object-cover object-top"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg md:text-2xl capitalize font-bold md:py-4">
          {name}
        </h2>
        <div className="flex justify-center items-center">
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>
        <p className="text-lg">
          Rating : <span className="font-bold">{rating}</span>
        </p>
        <div className="flex mt-auto justify-center">
          <Link to="/contact">
            <button className="btn-two">contact for details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
