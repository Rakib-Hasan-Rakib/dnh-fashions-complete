import axios from "axios";

export const saveUser = (user) => {
  axios
    .put(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      email: user.email,
      role: "user",
    })
    .then((data) => console.log(data));
};
