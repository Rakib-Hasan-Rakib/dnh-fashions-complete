import useAuth from "../../../hooks/useAuth";
import { MdCameraAlt } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";

const GiveFeedback = ({ id, setRealTimeFeedback }) => {
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const feedbackValue = e.target.feedback.value;

    const formData = new FormData();
    formData.append(`image`, image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    axios
      .post(url, formData)
      .then((data) => {
        if (data.data.status == 200) {
          const feedback = {
            feedbackValue,
            id,
            email: user?.email,
            userPhoto: user?.photoURL,
            userName: user?.displayName,
            productImage: data.data.data.display_url,
          };
          axios
            .post(`${import.meta.env.VITE_API_URL}/feedback`, feedback)
            .then((data) => {
              if (data.data.insertedId) {
                toast.success("your feedback posted successfully");
                setSelectedImage(null);
                e.target.reset();
                setRealTimeFeedback(true);
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
    console.log(formData);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  return (
    <>
      <form action="" onSubmit={handleFeedbackSubmit}>
        <div className="flex items-start gap-2">
          <img
            src={user?.photoURL}
            alt="user's photo"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <div className="relative">
              <textarea
                name="feedback"
                id="feedback"
                cols="50"
                rows="4"
                className="outline-none rounded-lg p-1"
                required
              ></textarea>
              <div className="absolute bottom-3 left-2">
                <label htmlFor="imageInput">
                  <MdCameraAlt
                    size={24}
                    className="text-amber-400 cursor-pointer"
                  />
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  name="image"
                  id="imageInput"
                  className="hidden"
                />
              </div>
              <div className="absolute right-6 bottom-2">
                <button type="submit">
                  <FaLocationArrow size={24} className="text-amber-400" />
                </button>
              </div>
            </div>
            {selectedImage && (
              <div className="relative my-4">
                <ImCancelCircle
                  onClick={() => setSelectedImage(null)}
                  size={24}
                  className="text-red-500 absolute left-1/2 -top-3 cursor-pointer"
                  title="remove image"
                />
                <img
                  src={selectedImage}
                  alt="Selected image"
                  className="w-52 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
export default GiveFeedback;
