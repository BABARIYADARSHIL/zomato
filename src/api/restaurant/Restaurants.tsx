import axios from "axios"
import { restaurantdata } from "./api/Index"
import { restaurantsdata } from "../../types/Restaurant";

export const RestaurantData = () => {
    return axios.get<restaurantsdata>(restaurantdata)
}
