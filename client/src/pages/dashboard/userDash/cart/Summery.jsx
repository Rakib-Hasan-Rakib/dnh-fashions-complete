import { useState } from "react";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

const Summery = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const [nameValue, setNameValue] = useState(user?.displayName);

  let productTotal = 0;
  let deleveryCharge = 0;
  for (let i of cartItems) {
    productTotal += i.quantity * +i.price;
    deleveryCharge += i.quantity * 2;
  }
  const total = productTotal + deleveryCharge;
  // console.log(total);

  const handleNameChange = (e) => {
    setNameValue(e.target.name.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const currency = e.target.currency.value;
    const address = e.target.address.value;
    const userData = {
      name,
      email,
      phone,
      currency,
      address,
      total,
      cartItems,
    };
    console.log(userData);

    axios
      .post(`${import.meta.env.VITE_API_URL}/order`, userData)
      .then((data) => {
        if (data.data.url) {
          window.location.replace(data.data.url);
          clearCart(user?.email)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-gray-100 rounded-lg my-2 md:my-4 py-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center my-2 font-semibold text-amber-400">
          Order Summery
        </h1>
        <div className="px-4 py-4 ">
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
      <div className="bg-gray-100 rounded-lg my-2 py-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center my-2 font-semibold text-amber-400 capitalize">
          Fill this form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2 px-4">
          <div className="flex flex-col gap-1">
            <label>Full Name*</label>
            <input
              type="text"
              name="name"
              className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
              value={nameValue}
              onChange={handleNameChange} required
            />
          </div>
          <div className="flex gap-4">
            <div>
              <label>Phone Number*</label>
              <input
                type="number"
                name="phone"
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
                placeholder="Phone number Here" required
              />
            </div>
            <div className="flex flex-col">
              <label>Currency*</label>
              <select
                name="currency"
                id="currency"
                className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none" require
              >
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>
          <div>
            <label>Address*</label>
            <input
              type="text"
              name="address"
              className="border border-yellow-500 w-full py-1 px-2 rounded-md outline-none"
              placeholder="Address here" required
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Pay Now"
              className="flex justify-center items-center btn-four"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Summery;
