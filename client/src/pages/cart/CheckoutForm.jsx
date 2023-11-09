import { useEffect } from "react";

const CheckoutForm = ({ total }) => {
  useEffect(() => {
    console.log("total is working", total);
  }, [total]);
  return (
    <div>
      <h2 className="text-5xl text-red-500 ">
       {total}
      </h2>
    </div>
  );
};

export default CheckoutForm;
