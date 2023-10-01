import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import useCart from "../../hooks/useCart";

const ProductList = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { deleteFromCart, refetch } = useCart();
  const { _id, name, image, price } = product;
  const total = (price * quantity).toFixed(2);

  const handleDelete = () => {
    deleteFromCart(_id);
    refetch();
  };

  return (
    <tr>
      <td>
        <div className="relative w-32">
          <img
            src={image}
            className="w-full h-32 rounded-md object-cover object-top"
            alt="dress image"
          />
          <button onClick={handleDelete} className="absolute -top-3 -right-2">
            <ImCancelCircle
              size={22}
              className="text-red-500"
              title="remove this product from cart"
            />
          </button>
        </div>

        <h2>{name}</h2>
      </td>
      <td>${price}</td>
      <td className="flex justify-center items-center gap-2">
        <button onClick={() => setQuantity((preValue) => preValue - 1)}>
          -
        </button>
        <p>{quantity}</p>

        <button onClick={() => setQuantity((preValue) => preValue + 1)}>
          +
        </button>
      </td>
      <th>${total}</th>
    </tr>
  );
};

export default ProductList;
