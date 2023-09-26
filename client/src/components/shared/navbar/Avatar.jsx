import avatar from "../../../assets/images/placeholder.jpg";

const Avatar = () => {
  const user = false;
  return (
    <div>
      <img src={user ? user.photoURL : avatar} className="w-10 md:w-12 rounded-full" alt="user image" />
    </div>
  );
};

export default Avatar;
