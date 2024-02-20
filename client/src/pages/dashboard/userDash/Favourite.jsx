import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";
import Container from "../../../components/shared/Container";
import DataNotFoundAnim from "../../../components/shared/animations/DataNotFoundAnim";
import useFav from "../../../hooks/useFav";

const Favourite = () => {
  const [favProduct, setFavProduct] = useFav();
  const { loading, user } = useAuth();
  const { refetch, addToCart } = useCart();

  const handleDeleteFav = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/fav/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          const remaining = favProduct.filter((item) => item._id != id);
          setFavProduct(remaining);
          toast.success("This item removed from your favourite list");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleCart = (id, image, price, name) => {
    addToCart(user?.email, id, image, price, name);
    refetch();
  };

  return (
    <Container>
      <div className="overflow-x-auto my-4 min-h-[calc(100vh-200px)]">
        {favProduct.length > 0 ? (
          <table className="table">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                favProduct?.map((item) => {
                  return (
                    <tr key={item._id} className="text-center">
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
                      <td className="font-bold">${item.discountPrice}</td>
                      <td>
                        <div className="flex justify-center items-center gap-4">
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
                                item.discountPrice,
                                item.name
                              )
                            }
                            className="border border-yellow-500 bg-yellow-500 text-white hover:bg-transparent hover:text-black hover:duration-200 font-semibold px-4 py-1 rounded-sm"
                          >
                            Add to cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <DataNotFoundAnim />
        )}
      </div>
    </Container>
  );
};

export default Favourite;
