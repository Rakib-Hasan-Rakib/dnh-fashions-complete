import EmojiPicker from "emoji-picker-react";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineEmojiEmotions, MdOutlinePhotoCamera } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const GiveFeedback = ({ id }) => {
  const { user } = useAuth();
  const [showEmojiList, setShowEmojiList] = useState(false);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(null);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const feedbackValue = e.target.feedback.value;
    const productImage = e.target.productImage.value;
    const feedback = {
      feedbackValue,
      id,
      email: user?.email,
      userPhoto: user?.photoURL,
      userName: user?.displayName,
      productImage,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/feedback`, feedback)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("your feedback posted successfully");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  const onEmojiClick = (EmojiClickData, event) => {
    setText(text + EmojiClickData?.emoji);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
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
          <div className="relative">
            <textarea
              onChange={handleTextChange}
              name="feedback"
              id="feedback"
              cols="50"
              rows="3"
              className="border border-amber-500 outline-none rounded-lg p-1"
            ></textarea>
            <input type="text" name="productImage" id="" required />
            {/* <input type="file" name="" id="" /> */}
            <div className="absolute bottom-3 left-2">
              <label htmlFor="imageInput">
                <MdOutlinePhotoCamera size={22} />
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="imageInput"
                className="hidden"
              />
            </div>
            <MdOutlineEmojiEmotions
              onClick={() => setShowEmojiList(!showEmojiList)}
              size={22}
              className="absolute bottom-3 left-10"
            />
          </div>
          <input type="submit" value="done" className="btn-four" />
        </div>
        <div>
          {showEmojiList && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      </form>
    </>
  );
};
export default GiveFeedback;
