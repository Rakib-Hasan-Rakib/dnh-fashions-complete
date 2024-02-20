import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useFav = () => {
  const { user } = useAuth();
  const [favProduct, setFavProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/fav/${user?.email}`)
      .then((data) => setFavProduct(data.data))
      .catch((err) => console.log(err));
  }, [user]);
  return [favProduct, setFavProduct];
};
export default useFav;
