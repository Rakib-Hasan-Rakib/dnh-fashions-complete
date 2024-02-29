import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const User = ({ singleUser, setFlag }) => {
  const { photo, email, role } = singleUser;
  const { user } = useAuth();

  const handleDeleteUser = () => {
    if (user?.email !== email) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/user/delete/${email}`)
        .then((data) => {
          if (data.data[4].deletedCount > 0) {
            setFlag(true);
            toast.success("This user deleted successfully");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("You can't delete yourself");
    }
  };

  const handleMakeStaff = () => {
    if (user?.email !== email) {
      //   axios
      //     .patch(`${import.meta.env.VITE_API_URL}/user/patch/${email}`)
      //     .then((data) => console.log(data.data))
      //     .catch((err) => console.log(err));
    } else {
      toast.error("You can't make you staff");
    }
  };

  return (
    <>
      <tr className="text-center">
        <td>
          <img
            src={photo}
            className="w-32 rounded-md object-cover object-center"
            alt="user image"
          />
        </td>
        <td>{email}</td>
        <td className="font-semibold capitalize">{role}</td>
        <td>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handleMakeStaff}
              className="border border-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white hover:duration-200 px-4 py-1 rounded-sm"
            >
              Make Staff
            </button>
            <button
              onClick={handleDeleteUser}
              className="border border-yellow-500 bg-yellow-500 text-white hover:bg-transparent hover:text-black hover:duration-200 font-semibold px-4 py-1 rounded-sm"
            >
              Delete user
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default User;
