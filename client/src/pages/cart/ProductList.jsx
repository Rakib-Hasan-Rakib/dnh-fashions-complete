import { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import useCart from "../../hooks/useCart";

const ProductList = ({ product, setTotal, arr, setPriceArray }) => {
  const [quantity, setQuantity] = useState(1);
  const { deleteFromCart, refetch } = useCart();
  const { _id, name, image, price } = product;
  let total = 0

  const handleDelete = () => {
    deleteFromCart(_id);
    refetch();
  };
  useEffect(() => {
    setTotal(total);
  }, []);
  const handleIncrease = () => {
    setQuantity((preValue) => preValue + 1);
    total = (price * quantity).toFixed(2);
    setTotal(total);
    // setPriceArray(arr.push(total));
  };

  // console.log(arr);

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
        {/* <button
          onClick={() =>
            setQuantity((preValue) => {
              if (preValue > 0) {
                preValue - 1;
              } else {
                preValue
              }
            })
          }
        >
          -
        </button> */}
        <p>{quantity}</p>

        <button onClick={handleIncrease}>+</button>
      </td>
      <th>${total}</th>
    </tr>
  );
};

export default ProductList;
