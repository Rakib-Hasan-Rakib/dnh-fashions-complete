import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const SingleCollection = ({ singleDress }) => {
  const { _id, image, name, price, rating } = singleDress;
  const { user } = useAuth();
  const { addToCart, refetch } = useCart();
  const navigate = useNavigate();

  const handleCart = () => {
    if (user) {
      addToCart(user?.email, _id, image, price, name);
      refetch();
    } else {
      toast.error("You need to sign in to add items in cart");
      navigate("/signin", { replace: true });
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="card w-full shadow-xl border border-red-600"
    >
      <figure>
        <img
          className="h-[400px] w-full object-cover object-top"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg md:text-2xl capitalize font-bold md:py-4">
          {name}
        </h2>
        <div className="flex justify-center items-center">
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>
        <p className="text-lg">
          Rating : <span className="font-bold">{rating}</span>
        </p>
        <div className="flex mt-auto justify-center">
          {/* <Link to="/contact">
            <button className="btn-two">contact for details</button>
          </Link> */}
          <button onClick={handleCart} className={`btn-two`}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
