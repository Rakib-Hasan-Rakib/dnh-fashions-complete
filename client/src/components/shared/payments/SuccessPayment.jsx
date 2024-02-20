import { useParams } from "react-router-dom";

const SuccessPayment = () => {
    const { tranId } = useParams();
    setTimeout(() => {
      window.location.replace(`${import.meta.env.VITE_CLIENT_URL}`);
    }, 3000);
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center mt-32 text-green-500">
        Your payment is sucessfull
      </h1>
      <p className="text-center my-4">your transaction Id is : "{tranId}"</p>
    </>
  );
};
export default SuccessPayment;
