
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: {

        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '1ececf92bbmsh1850e946a28818cp14f895jsnfb473a2e348c',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}