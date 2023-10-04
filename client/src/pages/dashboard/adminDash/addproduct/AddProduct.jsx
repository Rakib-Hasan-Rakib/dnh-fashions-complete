
const AddProduct = () => {
    return (
      <form className="flex justify-between items-start gap-4">
        <div className="basis-1/2 flex w-full">
          <div className="my-4">
            <input
              type="file"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full p-4"
            />
            <input
              type="file"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full p-4"
            />
          </div>
          <div className="my-4">
            <input
              type="file"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full p-4"
              placeholder="Browse file"
            />
            <input
              type="file"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full p-4"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1"
              placeholder="Enter Product Name Here"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Category</label>
            <select
              name=""
              id=""
              className="bg-white border border-yellow-300 outline-none rounded-md w-full px-2 py-1"
            >
              <option value="">Men</option>
              <option value="">Women</option>
              <option value="">Children</option>
              <option value="">Sport</option>
            </select>
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
    );
};

export default AddProduct;