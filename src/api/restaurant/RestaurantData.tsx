import axios from "axios"
import { data } from "./api"

export const RestaurantData = (params:any)=>{
    return axios.post(data,params)
}