const SinglePurchased = ({ item, transactionId, date }) => {
  const { image, price } = item;
  return (
    <>
      <tr className="text-center">
        <td>
          <img
            src={image}
            alt="product image"
            className="w-32 h-32 mx-auto object-cover object-top rounded-lg"
          />
        </td>
        <td className="text-lg font-semibold">${price}</td>
        <td>{transactionId}</td>
        <td>{date}</td>
      </tr>
    </>
  );
};
export default SinglePurchased;
