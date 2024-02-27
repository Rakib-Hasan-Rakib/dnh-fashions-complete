// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineLeftCircle } from "react-icons/ai";
import Fav from "../../components/shared/fav/Fav";
import Container from "../../components/shared/Container";
import LoadingSpin from "../../components/shared/spin/LoadingSpin";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Magnifier from "react-magnifier";
import "./details.css";
import GiveFeedback from "../../components/shared/feedbacks/GiveFeedback";
import SeeFeedback from "../../components/shared/feedbacks/SeeFeedback";

const Details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/allDress/${id}`)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const {
    _id,
    image,
    discountPrice,
    name,
    description,
    section,
    selectedSize,
    selectedColor,
  } = product;

  return (
    <div className="mx-auto p-3 bg-gray-200 min-h-[calc(100vh-200px)]">
      {!loading ? (
        <Container>
          <div className="flex justify-between items-center">
            <Link to={from}>
              <button className="btn-three flex gap-2 items-center group">
                <AiOutlineLeftCircle className="group-hover:-translate-x-0.5" />{" "}
                Back
              </button>
            </Link>
            <Fav product={product} />
          </div>
          <hr className="my-2" />
          <div className="flex flex-col md:flex-row justify-center items-start gap-4">
            <Magnifier src={image} />
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
                {name}
              </h1>
              <p className="italic font-semibold">Our {section} Collection</p>
              <p className="font-bold text-lg">${discountPrice}</p>
              <p className="my-2 md:my-4">{description}</p>
              <div>
                <p className="font-semibold mb-1">Available Sizes</p>
                <div className="flex gap-2">
                  {selectedSize?.map((size, i) => {
                    return (
                      <span
                        key={i}
                        className="border border-yellow-500 rounded-sm px-2 py-1 hover:bg-amber-500 hover:text-white transition-all duration-150 w-12 text-center font-semibold"
                      >
                        {size.value}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="my-2 md:my-4">
                <p className="font-semibold mb-1">Available Color</p>
                <div className="flex gap-4">
                  {selectedColor?.map((color, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          backgroundColor: color.value,
                        }}
                        className="h-8 w-8 rounded-full"
                      ></div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() =>
                  addToCart(user?.email, _id, image, discountPrice, name)
                }
                className="btn-four"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="flex justify-end items-end">
            {showFeedbacks ? (
              <button
                onClick={() => setShowFeedbacks(false)}
                className="btn-three"
              >
                hide feedbacks
              </button>
            ) : (
              <button
                onClick={() => setShowFeedbacks(true)}
                className="btn-three"
              >
                view feedbacks
              </button>
            )}
          </div>
          {/* <GiveFeedback id={_id} /> */}
          {showFeedbacks && <SeeFeedback id={_id} />}
        </Container>
      ) : (
        <LoadingSpin />
      )}
    </div>
  );
};

export default Details;
