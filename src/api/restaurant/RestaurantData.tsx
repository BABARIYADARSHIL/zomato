import axios from "axios"
import { data } from "./api"

export const RestaurantData = (params:{ search: string })=>{
    return axios.post(data,params)
}