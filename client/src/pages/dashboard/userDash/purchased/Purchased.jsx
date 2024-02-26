import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SinglePurchased from "./SinglePurchased";
import DataNotFoundAnim from "../../../../components/shared/animations/DataNotFoundAnim";

const Purchased = () => {
  const [purchasedProduct, setPurchasedProduct] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/purchased/${user?.email}`)
      .then((data) => setPurchasedProduct(data.data))
      .catch((err) => console.log(err));
  }, []);

  const formatDateFromObjectId = (objectId) => {
    const timestamp = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return timestamp.toLocaleDateString();
  };

  return (
    <>
      <div className="overflow-x-auto">
        {purchasedProduct.length > 0 ? (
          <table className="table table-zebra my-2">
            <thead className="bg-gray-200 text-center w-full">
              <tr>
                <th>Photo</th>
                <th>Price</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {purchasedProduct?.map((product) =>
                product.orderDetails.map((item) => (
                  <SinglePurchased
                    key={item._id}
                    item={item}
                    transactionId={product?.transactionId}
                    date={formatDateFromObjectId(product?._id)}
                  />
                ))
              )}
            </tbody>
          </table>
        ) : (
          <DataNotFoundAnim />
        )}
      </div>
    </>
  );
};
export default Purchased;
