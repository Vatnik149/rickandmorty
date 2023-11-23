
import {AxiosResponse} from "axios";
import $api from "../http";
import { useDispatch, useSelector } from 'react-redux';
import filterSlice, { setCharacterSpeciesSort } from '../store/slices/filterSlice';
import { RootState } from '../store/RootState';


export default class CharacterService{
    static async fetchCharacters(pages:number, species:string,gender:string, status:string, name:string):Promise<AxiosResponse>{
        return $api.get(`/character/?page=${pages}&species=${species}&gender=${gender}&status=${status}&name=${name}`)
    }
    static async characterDetailsProfile(id:string):Promise<AxiosResponse>{
        return $api.get(`https://rickandmortyapi.com/api/character/${id}`)
    }
    static async sortEpisodes(url:string):Promise<AxiosResponse>{
        return $api.get(`${url}`)
    }
   
}