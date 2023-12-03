import ProductList from "./ProductList";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  const { loading } = useAuth();
  const [total, setTotal] = useState(0);
  

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
      <div className="lg:basis-2/3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                cartItems?.map((item) => {
                  return (
                    <ProductList
                      key={item._id}
                      product={item}
                          setTotal={setTotal}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:basis-1/3">
        <CheckoutForm total={total} />
      </div>
    </div>
  );
};

export default Cart;
