import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const CartContext = createContext(null);
const CartProvider = ({ children }) => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const addToCart = (email, id, image, price, name) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/cart`, {
        email,
        id,
        image,
        price,
        name,
        quantity: 1,
      })
      .then((data) => {
        if (data.data.insertedId) {
          refetch()
          toast.success("this item added to your cart");
        } else {
          toast.success("this item is already added to cart");
        }
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const { refetch, data: cartItems = [] } = useQuery({
    queryKey: ["cart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/cart/${user?.email}`);
      return res.data;
    },
  });

  const { data: cartList = [] } = useQuery({
    queryKey: ["cart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/cart/cartList`);
      return res.data;
    },
  });
  const deleteFromCart = (id) => {
    axiosSecure
      .delete(`/deletItem/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          toast.success("Deleted successfully");
        }
      })
      .catch((error) => console.log(error));
  };
  const clearCart = (email) => {
    axiosSecure
      .delete(`/clearCart/${email}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          toast.success("Deleted successfully");
        }
        console.log(data.data);
      })
      .catch((error) => console.log(error));
  };

  const cartInfo = {
    addToCart,
    cartItems,
    refetch,
    cartList,
    deleteFromCart,
    clearCart,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
