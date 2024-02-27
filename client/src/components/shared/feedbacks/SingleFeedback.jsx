import { formatDateFromObjectId } from "../../../utils/dateformat";

const SingleFeedback = ({ feedback }) => {
  const { _id, userPhoto, userName, productImage, feedbackValue } = feedback;
  console.log(feedback);
  const date = formatDateFromObjectId(_id);

  return (
    <>
      <div>
        <div className="flex items-center gap-2 lg:gap-4 my-2">
          <img
            src={userPhoto}
            alt="user photo"
            className="w-10 h-10 rounded-full"
          />
          <div className="font-semibold text-gray-700">
            <p className="flex flex-col">
              <small>{userName}</small>
              <small>{date}</small>
            </p>
          </div>
        </div>
        <div className="px-2 py-1 rounded-lg bg-white space-y-1">
          <p>{feedbackValue}</p>
          <img
            src={productImage}
            alt="product photo"
            className="w-52 h-40 rounded-xl object-center object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default SingleFeedback;
