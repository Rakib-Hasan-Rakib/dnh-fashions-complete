import { useState } from "react";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Summery = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const [nameValue, setNameValue] = useState(user?.displayName);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  let productTotal = 0;
  let deleveryCharge = 0;
  for (let i of cartItems) {
    //   console.log(i);
    productTotal += i.quantity * +i.price;
    deleveryCharge += i.quantity * 2;
  }
  const total = productTotal + deleveryCharge;
  console.log(total);
  const handleNameChange = (e) => {
    setNameValue(e.target.name.value);
  };


const onSubmit = (data) => console.log(data);


  return (
    <>
      <div className="border-2 border-red-500">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400">
          Order Summery
        </h1>
        <div>
          {cartItems.length > 0 &&
            cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                {/* {total+=${item?.quantity * item?.price}} */}
                <p className="list-inside list-disc">
                  {item?.quantity} {item?.name} dress
                </p>
                <p>${item?.quantity * item?.price}</p>
              </div>
            ))}

          <div className="flex justify-between items-center">
            <p>Delevery Charge</p>
            <p>${deleveryCharge}</p>
          </div>
          <div className="flex justify-end items-center gap-2 text-lg font-bold">
            <p>Total </p>
            <p>${total}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <h2 className="text-lg md:text-xl lg:text-2xl py-3 font-semibold capitalize text-center">
          Please fill out this form below
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 px-4">
          <div className="flex flex-col gap-1">
            <label>Full Name*</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
              value={nameValue}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label>Phone Number*</label>
            <input
              type="number"
              {...register("phoneNumber", { required: true })}
              className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
              placeholder="Phone number Here"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <label>State*</label>
              <input
                type="text"
                {...register("state", { required: true })}
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
                placeholder="State name here"
              />
            </div>
            <div>
              <label>City*</label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
                placeholder="City name here"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <label>House Address*</label>
              <input
                type="text"
                {...register("house", { required: true })}
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
                placeholder="House address here"
              />
            </div>
            <div>
              <label>Street Address*</label>
              <input
                type="text"
                {...register("street", { required: true })}
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
                placeholder="Street address here"
              />
              {errors.street && <span>This field is required</span>}
            </div>
          </div>
          <input
            type="submit"
            value="submit"
            className="flex justify-center items-center btn-four"
          />
        </form>
      </div>
    </>
  );
};
export default Summery;
