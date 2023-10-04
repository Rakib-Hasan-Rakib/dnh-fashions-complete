import axios from "axios";
import toast from "react-hot-toast";


export const addFav = (email, id, name, price, image) => {
    axios.post(`${import.meta.env.VITE_API_URL}/fav`, {
        email, id, name, price, image
    }).then(data => {
        if (data.data.insertedId) {
            toast.success('this item added to your Favourite list')
        } else if (data.data.message) {
            toast.success("This item is already added to your favourite list")
        }
        console.log(data.data)
    }).catch(err => console.log(err));
}

export const getFav = (email) => {
    axios.get(`${import.meta.env.VITE_API_URL}/fav/${email}`).then(data => console.log(data.data)).catch(err => console.log(err))
}
