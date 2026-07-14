
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: {

        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '3c7eff3a9cmsh44ccfe2ce07485cp1572f6jsn9b355db6dcdd',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}