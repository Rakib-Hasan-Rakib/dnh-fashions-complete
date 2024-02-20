import axios from "axios";
import toast from "react-hot-toast";

export const addFav = (email, id, name, discountPrice, image) => {
  axios
    .post(`${import.meta.env.VITE_API_URL}/fav`, {
      email,
      id,
      name,
      discountPrice,
      image,
    })
    .then((data) => {
      if (data.data.insertedId) {
        toast.success("this item added to your Favourite list");
      } else if (data.data.message) {
        toast.success("This item is already added to your favourite list");
      }
    })
    .catch((err) => console.log(err));
};