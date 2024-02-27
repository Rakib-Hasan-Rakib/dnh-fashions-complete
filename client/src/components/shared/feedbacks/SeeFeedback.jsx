import axios from "axios";
import { useEffect, useState } from "react";
import SingleFeedback from "./SingleFeedback";

const SeeFeedback = ({ id }) => {
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
  }, [id]);
  return (
    <>
      <div className="grid md:grid-cols-2 xl:gird-cols-3 gap-2 md:gap-4 xl:gap-8">
        {feedbacks?.map((feedback) => (
          <SingleFeedback key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </>
  );
};
export default SeeFeedback;
