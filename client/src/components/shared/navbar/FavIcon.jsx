import { FaRegHeart } from "react-icons/fa";
import useFav from "../../../hooks/useFav";

const FavIcon = () => {
  const [favProduct] = useFav();
  return (
    <>
      <div className="indicator">
        <span className="indicator-item badge bg-amber-400">
          {favProduct.length}
        </span>
        <FaRegHeart size={24} className="text-white" />
      </div>
    </>
  );
};
export default FavIcon;
