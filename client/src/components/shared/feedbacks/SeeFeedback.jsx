import axios from "axios";
import { useEffect, useState } from "react";
import SingleFeedback from "./SingleFeedback";

const SeeFeedback = ({ id, showFeedbacks, realTimeFeedback }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/feedback/${id}`)
        .then((data) => {
          setFeedbacks(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [showFeedbacks, realTimeFeedback]);
  return (
    <>
      {feedbacks.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:gird-cols-3 gap-2 md:gap-4 xl:gap-8">
          {feedbacks?.map((feedback) => (
            <SingleFeedback key={feedback._id} feedback={feedback} />
          ))}
        </div>
      ) : (
        <p className="font-semibold text-lg lg:text-xl text-gray-400 text-center">
          No feedbacks yet
        </p>
      )}
    </>
  );
};
export default SeeFeedback;
