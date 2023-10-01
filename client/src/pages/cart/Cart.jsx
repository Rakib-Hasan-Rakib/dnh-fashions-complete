import ProductList from "./ProductList";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Cart = () => {
  const { cartItems } = useCart();
  const { loading } = useAuth();
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
              {/* row 1 */}
              {!loading &&
                cartItems?.map((item) => {
                  return <ProductList key={item._id} product={item} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:basis-1/3">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Cart;
