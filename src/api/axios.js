import axios from "axios";
import store from "../redux/store/store"

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 1000,
})
instance.interceptors.response.use(
    (response) => {
        return response 
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
           store.dispatch({type: "LOGOUT"})

        }
    }
)

export default instance