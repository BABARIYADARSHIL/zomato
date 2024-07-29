import axios from "axios"
import { restaurantdata } from "./api"

export const RestaurantData = (params: any) => {
    return axios.get(restaurantdata, params)
}
