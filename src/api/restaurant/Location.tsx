import axios from 'axios';
import { IpResponse, LocationResponse } from '../../types/Location';

export const getIpAddress = async () => {
    const response: LocationResponse = await axios.get('https://api.ipify.org?format=json');
    return response.data;
};

export const getLocationInfo = async (ip:string) => {
    const response: IpResponse = await axios.get(
        `https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`,
        {
            headers: {
                'x-rapidapi-key': '9fe6f7f5e4mshf7d9c902352b3e7p1077e3jsn69d80b60b74d',
                'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground',
                'Content-Type': 'application/json',
            },
        }
    );
    return response;
};
