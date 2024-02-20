import { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa6";
import useCart from "../../../../hooks/useCart";

const ProductList = ({ product, setTotal }) => {
  const { deleteFromCart, refetch } = useCart();
  const { _id, name, image, price, quantity } = product;
  const [amount, setAmount] = useState(quantity);

  const handleIncrease = (id) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
        quantity: amount + 1,
      })
      .then((data) => {
        refetch();
      });
    setAmount(amount + 1);
  };
  const handleDecrease = (id) => {
    if (amount > 1) {
      axios
        .put(`${import.meta.env.VITE_API_URL}/cart/${id}`, {
          quantity: amount - 1,
        })
        .then((data) => {
          refetch();
        });
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };

  const handleDelete = () => {
    refetch();
    deleteFromCart(_id);
  };

  return (
    <tr className="text-center">
      <td>
        <div className="relative w-32 mx-auto">
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

        <h2 className="font-semibold text-md lg:text-lg capitalize">{name}</h2>
      </td>
      <td>${price}</td>
      <td>
        <div className="flex justify-center items-center gap-2">
          <button>
            <FaMinus onClick={() => handleDecrease(_id)} />
          </button>
          <p className="border px-4 py-1">{amount}</p>
          <button>
            <FaPlus onClick={() => handleIncrease(_id)} />
          </button>
        </div>
      </td>
      <th>${amount * price}</th>
    </tr>
  );
};

export default ProductList;
