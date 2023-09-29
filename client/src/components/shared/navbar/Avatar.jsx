import avatar from "../../../assets/images/placeholder.jpg";
import useAuth from "../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth();
  return (
    <div>
      <img
        src={user ? user.photoURL : avatar}
        className="w-10 md:w-12 h-10 md:h-12 object-cover object-center rounded-full"
        alt="user image"
      />
    </div>
  );
};

export default Avatar;
