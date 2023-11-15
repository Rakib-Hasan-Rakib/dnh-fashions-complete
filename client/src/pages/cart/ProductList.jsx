import { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import useCart from "../../hooks/useCart";
import axios from "axios";

const ProductList = ({ product, setTotal }) => {
  const { deleteFromCart, refetch } = useCart();
  const { _id, name, image, price, quantity } = product;

  const handleDelete = () => {
    deleteFromCart(_id);
    refetch();
  };

  // const handleQuantityChange = (id) => {
  //   axios
  //     .put(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
  //       quantity: uiQuantity,
  //     })
  //     .then((data) => console.log(data));
  // };

  const handlePlusBtn = (id) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
        quantity: quantity + 1,
      })
      .then((data) => console.log(data));
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

        <p>{quantity}</p>
        <button onClick={() => handlePlusBtn(_id)}>+</button>
        
      </td>
      <th>$</th>
    </tr>
  );
};

export default ProductList;
