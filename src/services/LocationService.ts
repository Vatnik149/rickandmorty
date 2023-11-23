
import {AxiosResponse} from "axios";
import $api from "../http";


export default class LocationsService{
    static async fetchLocations(page:number, search:string, dimension:string, type:string):Promise<AxiosResponse>{
        return $api.get(`https://rickandmortyapi.com/api/location/?page=${page}&name=${search}&dimension=${dimension}&type=${type}`)
    }
    static async locationProfile(id:string):Promise<AxiosResponse>{
        return $api.get(`https://rickandmortyapi.com/api/location/${id}`)
    }
   
}