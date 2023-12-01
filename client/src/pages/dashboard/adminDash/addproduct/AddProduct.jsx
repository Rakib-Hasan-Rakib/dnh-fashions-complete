import { useState } from "react";
import { Helmet } from "react-helmet";
import DivTitle from "../../../../components/shared/divTitle/DivTitle";
import { RiChatDeleteLine } from "react-icons/ri";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [selectedSize, setSelectedSize] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const options = [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
    { label: "XXXL", value: "XXXL" },
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(`image`, e.dataTransfer?.files[0]);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData) {
          setDisableSubmit(false);
          setPhotoUrl(imgData?.data?.display_url);
        }
      });
  };

  const handleFileDelete = () => {
    setPhotoUrl(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const regularPrice = form.regularPrice.value;
    const discountPrice = form.discountPrice.value;
    const category = form.category.value;
    const section = form.section.value;
    const description = form.description.value;

    const productInfo = {
      productName,
      regularPrice,
      discountPrice,
      category,
      section,
      description,
      photoUrl,
      selectedSize,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/uploadProduct`, productInfo)
      .then((data) => {
        if (data.data.insertedId) {
          form.reset();
          setPhotoUrl(null);
          setSelectedSize([]);
          toast.success("Your product uploaded successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Add Product</title>
      </Helmet>
      <div className="h-full bg-gray-100 -my-4 md:-my-12 pt-8 pb-8">
        {DivTitle("Publish a Product", "upload your latest product")}
        <form onSubmit={handleSubmit} className="px-6 py-2">
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-12 items-start">
            <div className="basis-1/2 flex w-full">
              <div className="my-4">
                {photoUrl ? (
                  <div className="relative group">
                    <img
                      src={photoUrl}
                      className="w-[520px] h-[480px] object-cover object-center rounded-lg mx-auto"
                      alt="uploaded photo"
                    />
                    <button
                      onClick={handleFileDelete}
                      className="absolute -top-5 -right-4"
                    >
                      <RiChatDeleteLine
                        size={34}
                        className="text-red-600 hidden group-hover:block"
                      />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="text-center font-semibold border-2 border-dotted border-black rounded-md w-full py-16 px-28 mx-4 my-8"
                  >
                    Drag and Drop your image Here
                  </div>
                )}
              </div>
            </div>
            <div className="basis-1/2 space-y-2 lg:space-y-4 w-11/12 mx-auto">
              <div className="flex flex-col">
                <label className="italic font-semibold">Name</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Write your product name here"
                  className="bg-white border  outline-none rounded-sm w-full px-2 py-1"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-6">
                <div className="basis-1/2">
                  <label className="italic font-semibold">Category</label>
                  <select
                    name="category"
                    className="bg-white border outline-none rounded-sm w-full px-2 py-1"
                    required
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="children">Children</option>
                    <option value="sport">Sport</option>
                  </select>
                </div>
                <div className="basis-1/2">
                  <label className="italic font-semibold" htmlFor="">
                    Section
                  </label>
                  <select
                    name="section"
                    className="bg-white border outline-none rounded-sm w-full px-2 py-1"
                    required
                  >
                    <option value="regular">Regular</option>
                    <option value="featured">Featured</option>
                    <option value="spotlight">Spotlight</option>
                    <option value="seasonal">Seasonal</option>
                    <option value="latest">Latest</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center gap-7">
                <div>
                  <label className="italic font-semibold" htmlFor="">
                    Regular Price
                  </label>
                  <input
                    type="number"
                    name="regularPrice"
                    className="bg-white border  outline-none rounded-sm w-full px-2 py-1"
                    placeholder="Enter Product Price Here"
                    required
                  />
                </div>
                <div>
                  <label className="italic font-semibold" htmlFor="">
                    Discount Price
                  </label>
                  <input
                    type="number"
                    name="discountPrice"
                    className="bg-white border  outline-none rounded-sm w-full px-2 py-1"
                    placeholder="Enter Product Price Here"
                    required
                  />
                </div>
              </div>
              <div>
                <MultiSelect
                  options={options}
                  value={selectedSize}
                  onChange={setSelectedSize}
                  labelledBy="Select"
                />
              </div>
              <div>
                <label className="italic font-semibold">Description</label>
                <textarea
                  name="description"
                  rows="5"
                  className="bg-white border  outline-none rounded-sm w-full px-2 py-1"
                  placeholder="Add a short description of the product"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <input type="reset" value="Reset" className="btn-three" />
            <input
              type="submit"
              value="Add Now"
              disabled={disableSubmit}
              className="btn-four"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
