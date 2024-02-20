import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const AddToCart = ({ product }) => {
  const { _id, name, discountPrice, image } = product;
  const { addToCart } = useCart();
  const { user } = useAuth();
  return (
    <>
      <AiOutlineShoppingCart
        onClick={() => addToCart(user?.email, _id, image, discountPrice, name)}
        size={40}
        className="text-white bg-black bg-opacity-40 p-2 rounded-full cursor-pointer"
        title="Add to Cart"
      />
    </>
  );
};
export default AddToCart;
