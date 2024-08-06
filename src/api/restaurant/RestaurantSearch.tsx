import axios from "axios"
import { data } from "./api"

export const RestaurantSearch = (params:{ search: string })=>{
    return axios.post(data,params)
}