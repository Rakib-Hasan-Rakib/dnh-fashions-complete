import { Rating } from "@smastrom/react-rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addFav, getFav } from "../../../utils/fav";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Card = ({ productInfo }) => {
  const { image, name, price, rating, _id } = productInfo;
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const handleCart = () => {};
  const handleFav = () => {
    addFav(user?.email, _id, name, price, image);
    setFav(true);
  };
  const handleGet = () => {
    getFav(user?.email);
  };
  return (
    <div className="card w-full shadow-xl relative">
      <figure>
        <img
          className="h-[300px] w-full object-cover object-top"
          src={image}
          alt="Shoes"
        />
      </figure>
      <h2 className="text-lg md:text-2xl text-center capitalize font-bold md:py-2">
        {name}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
        <span className="text-blue-500 hover:border-b hover:border-blue-500 cursor-pointer">
          <small>show more</small>
        </span>
      </p>
      <Rating
        className="text-yellow-500 bg-yellow-500"
        style={{ maxWidth: 15 }}
        value={rating}
        readOnly
      />
      <p className="text-lg">
        Rating : <span className="font-bold">{rating}</span>
      </p>
      <div className="flex mt-auto justify-center">
        {/* <Link to="/contact">
            <button className="btn-two">contact for details</button>
          </Link> */}
        <button onClick={handleCart} className={`btn-two`}>
          Add to cart
        </button>
        <button onClick={handleGet}>Get</button>
      </div>
      <div onClick={handleFav}>
        {fav ? (
          <AiFillHeart
            size={24}
            className="text-red-500 absolute top-2 right-2"
          />
        ) : (
          <AiOutlineHeart
            size={24}
            className="text-red-500 absolute top-2 right-2"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
