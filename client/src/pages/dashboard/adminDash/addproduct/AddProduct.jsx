import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
}







  return (
    <>
      <Helmet>
        <title>D&H Fashions Ltd. | Add Product</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between gap-8 items-start bg-gray-300"
      >
        <div className="basis-1/2 flex w-full">
          <div className="my-4">
            <div>
              <label htmlFor="">Upload front part of the dress</label>
              <input
                type="file"
                {...register("photoFront")}
                accept="image/*"
                className="border-2 border-dotted border-yellow-300 outline-none rounded-md w-full py-8 px-2"
              />
            </div>
            <div>
              <label htmlFor="">Upload right part of the dress</label>
              <input
                type="file"
                {...register("photoRight")}
                accept="image/*"
                className="border-2 border-dotted border-yellow-300 outline-none rounded-md w-full py-8 px-2"
              />
            </div>
          </div>
          <div className="my-4">
            <div>
              <label htmlFor="">Upload back part of the dress</label>
              <input
                type="file"
                {...register("photoBack")}
                accept="image/*"
                className="border-2 border-dotted border-yellow-300 outline-none rounded-md w-full py-8 px-2"
              />
            </div>
            <div>
              <label htmlFor="">Upload left part of the dress</label>
              <input
                type="file"
                {...register("photoLeft")}
                accept="image/*"
                className="border-2 border-dotted border-yellow-300 outline-none rounded-md w-full py-8 px-2"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              {...register("productName")}
              placeholder="Write your product name here"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1 m-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Category</label>
            <Select name="gender" options={["female", "male", "other"]} />
            {/* <select
              name=""
              id=""
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1"
            >
              <option value="">Men</option>
              <option value="">Women</option>
              <option value="">Children</option>
              <option value="">Sport</option>
            </select> */}
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input
              type="number"
              name=""
              id=""
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1"
              placeholder="Enter Product Price Here"
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              rows="5"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1"
              placeholder="Add a short description of the product"
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
