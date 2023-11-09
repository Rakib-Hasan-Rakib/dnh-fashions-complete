import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";

const Favourite = () => {
  const [favProduct, setFavProduct] = useState([]);
  const { loading, user } = useAuth();
  const { refetch, addToCart } = useCart();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/fav/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFavProduct(data));
  }, [user]);

  const handleDeleteFav = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/fav/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          const remaining = favProduct.filter((item) => item._id != id);
          setFavProduct(remaining);
          toast.success("This item removed from your favourite list");
        }
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };
  const handleCart = (id, image, price, name) => {
    addToCart(user?.email, id, image, price, name);
    refetch();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              favProduct?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <div className="relative w-32">
                        <img
                          src={item.image}
                          className="w-full h-32 rounded-md object-cover object-top"
                          alt="dress image"
                        />
                      </div>
                    </td>
                    <td className="text-xl font-semibold">{item.name}</td>
                    <td className="font-bold">${item.price}</td>
                    <td className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => handleDeleteFav(item._id)}
                        className="border border-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white hover:duration-200 px-4 py-1 rounded-sm"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() =>
                          handleCart(
                            item._id,
                            item.image,
                            item.price,
                            item.name
                          )
                        }
                        className="border border-yellow-500 bg-yellow-500 text-white hover:bg-transparent hover:text-black hover:duration-200 font-semibold px-4 py-1 rounded-sm"
                      >
                        Add to cart
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favourite;
