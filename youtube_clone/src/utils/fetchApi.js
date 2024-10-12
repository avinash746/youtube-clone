import axios from "axios"
const BASE_URL=""
const API_KEY = '';

export const fetchApiForYoutubeData = async(enpoints,params ={}) =>{
     try {
        const response = await axios.get(`${BASE_URL}/${enpoints}`,{
            params:{
                ...params,
                key: API_KEY,
            }
        })
        return response.data;
     } catch (error) {
        console.error(error,'error fetching youtube data')
     }
}
