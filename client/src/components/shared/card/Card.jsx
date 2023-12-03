import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { addFav } from "../../../utils/fav";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Fav from "../fav/Fav";
import useCart from "../../../hooks/useCart";
import Modal from "react-modal";
import DetailsModal from "../modal/DetailsModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Card = ({ productInfo }) => {
  const { image, name, regularPrice,discountPrice,rating, _id } = productInfo;
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [modalIsOpen, setIsOpen] = useState(false);
  

  const handleFav = () => {
    addFav(user?.email, _id, name, price, image);
    setFav(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  if (modalIsOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <div className="card relative flex w-full h-[450px] shadow-lg">
      <img
        className="rounded-lg h-[250px] w-full object-cover object-top"
        src={image}
        alt="Shoes"
      />
      <div className="px-3">
        <h2 className="text-lg md:text-2xl text-center capitalize font-bold md:py-2">
          {name}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-end">
            <p className="font-semibold text-xl lg:text-2xl">${discountPrice}</p>
            <p className="text-gray-900 line-through">${regularPrice}</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <AiOutlineStar size={24} />
            <p className="font-semibold text-lg">{rating}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center absolute bottom-4">
          <button onClick={openModal} className="btn-three">
            View Details
          </button>
          <button
            onClick={() => addToCart(user?.email, _id, image, price, name)}
            className={`btn-four`}
          >
            Add to cart
          </button>
        </div>
        {/* <div onClick={handleFav} className="cursor-pointer">
          {fav ? (
            <AiFillHeart
              size={36}
              className="text-red-500 absolute top-2 right-2 bg-black bg-opacity-40 p-2 rounded-full"
            />
          ) : (
            <AiOutlineHeart
              size={36}
              className="text-red-500 absolute top-2 right-2 bg-black bg-opacity-40 p-2 rounded-full"
            />
          )}
        </div> */}
        <div className="absolute top-2 right-2">
          <Fav product={productInfo} />
        </div>
      </div>
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        {/* <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
        <DetailsModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          id={_id}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Card;
