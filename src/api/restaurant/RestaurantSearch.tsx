import axios from "axios"
import { data } from "./api/Index"

export const RestaurantSearch = (params:{ search: string })=>{
    return axios.post(data,params)
}