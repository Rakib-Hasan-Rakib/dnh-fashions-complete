import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addFav } from "../../../utils/fav";
import useAuth from "../../../hooks/useAuth";

const Fav = ({ product }) => {
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const { _id, name, discountPrice, image } = product;
  const handleFav = () => {
      addFav(user?.email, _id, name, discountPrice, image);
      setFav(true);
  };
  return (
    <div onClick={handleFav} className="cursor-pointer">
      {fav ? (
        <AiFillHeart
          size={40} 
          className="text-white bg-black bg-opacity-40 p-2 rounded-full"
        />
      ) : (
        <AiOutlineHeart
          size={40}
          className="text-white bg-black bg-opacity-40 p-2 rounded-full"
        />
      )}
    </div>
  );
};

export default Fav;
