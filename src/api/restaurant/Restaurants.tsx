import axios from "axios"
import { restaurantdata } from "./api"
import { restaurantsdata } from "../../types/Restaurant";

export const RestaurantData = () => {
    return axios.get<restaurantsdata>(restaurantdata)
}
