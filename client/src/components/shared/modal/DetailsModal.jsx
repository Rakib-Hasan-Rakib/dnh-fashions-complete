import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import Modal from "react-modal";
import Fav from "../fav/Fav";

const DetailsModal = ({ modalIsOpen, setIsOpen, id, customStyles }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allDress/${id}`)
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const {
    image,
    discountPrice,
    regularPrice,
    name,
    description,
    selectedSize,
    selectedColor,
    rating,
    section,
  } = product;

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-2/5 overflow-hidden">
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="w-3/5 my-20 mx-auto p-3 bg-gray-100">
          <div className="flex justify-between items-center">
            <button
              onClick={closeModal}
              className="flex gap-2 items-center border border-black px-4 py-1 rounded-md text-black font-semibold group"
            >
              <AiOutlineLeftCircle className="group-hover:-translate-x-0.5" />{" "}
              Back
            </button>
            <Fav product={product} />
          </div>{" "}
          <hr className="my-2" />
          <div className="flex flex-col md:flex-row justify-center items-start gap-4 ">
            <img
              className="w-full h-80 object-cover object-center rounded-lg"
              src={image}
              alt="Product image"
            />
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
                {name}
              </h1>
              <p className="italic font-semibold">Our {section} Collection</p>
              <div className="flex gap-3 items-end">
                <p className="text-lg lg:text-xl font-bold">${discountPrice}</p>
                <p className="text-sm line-through">${regularPrice}</p>
              </div>
              <p>{description}</p>
              <div className="flex gap-2 lg:gap-4 items-center">
                <p className="font-semibold">Available Sizes</p>
                {selectedSize?.map((size, i) => {
                  return (
                    <p key={i} className="bg-gray-300 px-4 py-1 rounded-md">
                      {size.value}
                    </p>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <p className="font-semibold">Available Colors</p>
                {selectedColor?.map((color, i) => {
                  return (
                    <p key={i} className="capitalize">
                      {color.value}
                    </p>
                  );
                })}
              </div>
              <button className="btn-four">Add to Cart</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;
