import axios from "axios"

export const saveUser = (user) => {
    axios.put(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, { email: user.email }).then(data => console.log(data))
}