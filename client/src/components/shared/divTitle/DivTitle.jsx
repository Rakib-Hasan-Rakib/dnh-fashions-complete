
const DivTitle = (title, subTitle) => {
  return (
    <div className="text-center my-4 md:my-12 capitalize">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-red-600 font-bold tracking-wider">
        {title}
      </h1>
      <p className="italic text-gray-800 md:text-lg md:my-1 font-semibold">
        {subTitle}
      </p>
    </div>
  );
};

export default DivTitle;
