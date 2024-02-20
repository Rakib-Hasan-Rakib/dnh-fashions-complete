const ButtonOne = ({text}) => {
  return (
    <button className="border border-yellow-500 text-white md:text-xl font-semibold hover:text-white hover:bg-yellow-600 hover:duration-500 hover:ease-in-out px-3 md:px-6 py-1 md:py-2 rounded-md capitalize z-10">
      {text}
    </button>
  );
};
export default ButtonOne;
