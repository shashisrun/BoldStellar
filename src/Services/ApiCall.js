import axios from './ApiService';

async function API(url) {
    return await axios.post('api/'+url).then(response => {
            return response;
        });
}

export default API;