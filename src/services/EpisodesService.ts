
import {AxiosResponse} from "axios";
import $api from "../http";


export default class EpisodesService{
    static async sortEpisode(id:string):Promise<AxiosResponse>{
        return $api.get(`https://rickandmortyapi.com/api/episode/${id}`)
    }
    static async fetchEpisodes(page:number, name:string):Promise<AxiosResponse>{
        return $api.get(`https://rickandmortyapi.com/api/episode/?page=${page}&episode=${name}`)
    }
   
}