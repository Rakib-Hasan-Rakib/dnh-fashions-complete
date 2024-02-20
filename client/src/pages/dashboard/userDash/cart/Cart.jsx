import ProductList from "./ProductList";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";
import Summery from "./Summery";
import Container from "../../../../components/shared/Container";
import DataNotFoundAnim from "../../../../components/shared/animations/DataNotFoundAnim";

const Cart = () => {
  const { cartItems } = useCart();
  const { loading } = useAuth();
  const [total, setTotal] = useState(0);

  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="lg:basis-2/3">
          {cartItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="font-bold text-black text-lg text-center">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-Total</th>
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
          ) : (
            <DataNotFoundAnim />
          )}
        </div>
        <div className="lg:basis-1/3">
          <Summery />
        </div>
      </div>
    </Container>
  );
};

export default Cart;
