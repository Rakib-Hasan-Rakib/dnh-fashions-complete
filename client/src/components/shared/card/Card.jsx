import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { addFav } from "../../../utils/fav";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Fav from "../fav/Fav";
import useCart from "../../../hooks/useCart";


const Card = ({ productInfo }) => {
  const { image, name, regularPrice,discountPrice,rating, _id } = productInfo;
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [modalIsOpen, setIsOpen] = useState(false);
  

  const handleFav = () => {
    addFav(user?.email, _id, name, price, image);
    setFav(true);
  };

  
  return (
    <div className="card relative flex w-full h-[450px] shadow-lg">
      <img
        className="rounded-lg h-[250px] w-full object-cover object-top"
        src={image}
        alt="Shoes"
      />
      <div className="px-3">
        <h2 className="text-lg md:text-2xl text-center capitalize font-bold md:py-2">
          {name}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-end">
            <p className="font-semibold text-xl lg:text-2xl">
              ${discountPrice}
            </p>
            <p className="text-gray-900 line-through">${regularPrice}</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <AiOutlineStar size={24} />
            <p className="font-semibold text-lg">{rating}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center absolute bottom-4">
          <Link to={`/allDress/${_id}`}>
            <button className="btn-three">View Details</button>
          </Link>
          <button
            onClick={() =>
              addToCart(user?.email, _id, image, discountPrice, name)
            }
            className={`btn-four`}
          >
            Add to cart
          </button>
        </div>
        <div className="absolute top-2 right-2">
          <Fav product={productInfo} />
        </div>
      </div>
    </div>
  );
};

export default Card;
