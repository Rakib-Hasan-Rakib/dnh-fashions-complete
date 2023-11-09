// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineLeftCircle } from "react-icons/ai";
import Fav from "../../components/shared/fav/Fav";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";
  console.log(from);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allDress/${id}`)
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { image, price, name, rating, section } = product;
  return (
    <div className="w-3/5 my-20 mx-auto p-3 bg-gray-300">
      <div className="flex justify-between items-center">
        <Link to={from}>
          <button className="flex gap-2 items-center border border-black px-4 py-1 rounded-md text-black font-semibold group">
            <AiOutlineLeftCircle className="group-hover:-translate-x-0.5" />{" "}
            Back
          </button>
        </Link>
        <Fav product={product} />
      </div>{" "}
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 ">
        <img className="w-full h-80 object-cover object-center rounded-lg" src={image} alt="" />
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</h1>
          <p className="italic font-semibold">Our {section} Collection</p>
          <p>${price}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            assumenda repellat eaque aliquid tempora ratione atque odio,
            distinctio temporibus quaerat?
          </p>
          <p>Size</p>
          <div className="flex gap-2">
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              S
            </span>
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              M
            </span>
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              L
            </span>
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              XL
            </span>
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              XXL
            </span>
            <span className="border border-yellow-500 px-2 py-1 hover:border-red-600 w-12 text-center">
              XXXL
            </span>
          </div>
          <p>Color</p>
          <div className="flex gap-4">
            <p className="bg-red-500 w-6 h-6 rounded-full"></p>
            <p className="bg-pink-500 w-6 h-6 rounded-full"></p>
            <p className="bg-green-500 w-6 h-6 rounded-full"></p>
          </div>
          <button className="btn-four">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
