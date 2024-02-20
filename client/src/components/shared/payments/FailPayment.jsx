const FailPayment = () => {
     setTimeout(() => {
       window.location.replace(`${import.meta.env.VITE_CLIENT_URL}`);
     }, 3000);
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center mt-32 text-red-500">
        Sorry your payment has been failed.
      </h1>
    </>
  );
};
export default FailPayment;
