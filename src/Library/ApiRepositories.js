import axios from '../Services/ApiService';
import CookieService from '../Services/CookieService';

const cookie = new CookieService;
class ApiRepositories {

    async GetMenu(id = ''){
        try{
            const response = await axios.get('/api/menu/'+id);
            return response.data;
        } catch(error) {
            console.error('Error', error.response);
            return false;
        }
    }

    async GetBlog(id = ''){
        try{
            const response = await axios.get('/api/blog/'+id);
            return response.data;
        } catch(error) {
            console.error('Error', error.response);
            return false;
        }
    }

    async GetPage(id = ''){
        try{
            const response = await axios.get('/api/page/'+id);
            return response.data;
        } catch(error) {
            console.error('Error', error.response);
            return false;
        }
    }

    async GetSlider(id = ''){
        try{
            const response = await axios.get('/api/slider/'+id);
            return response.data;
        } catch(error) {
            console.error('Error', error.response);
            return false;
        }
    }

    
    async CreateMenu(blog){
        try{
            console.clear()
            // var data = new FormData();
            // data.append('title', 'Menu1');
            // data.append('url', 'localhost');
            // data.append('status', '1');
            // data.append('sortby', '1');

            const response = await axios.post('/api/menu', blog);
            console.log(response);
            return response.data;
        } catch(error) {
            console.error('Error', error.response);
            return false;
        }
    }




    async doUserLogin(credentials){
        try{
            const response = await axios.post('oauth/token', credentials);
            return response.data;
        } catch(error) {
            //console.error('Error', error.response);
            return false;
        }
    }
    async doUserRegistration(credentials){
        try{
            const response = await axios.post('api/register', credentials);
            return response.data;
        } catch(error) {
            console.error('Error', error);
            return false;
        }
    }
    async doUserLogout(credentials){
        try{
            const response = await axios.post('api/logout', credentials);
            cookie.remove('refresh_token');
            cookie.remove('access_token');
            cookie.remove('remeber_me');
            console.error(response);
            return response.data;
        } catch(error) {
            console.error('Error', error);
            return false;
        }
    }

    async doUserLogoutAll(credentials){
        try{
            const response = await axios.post('api/logout/all', credentials);
            cookie.remove('refresh_token');
            cookie.remove('access_token');
            cookie.remove('remeber_me');
            console.error(response);
            return response.data;
        } catch(error) {
            console.error('Error', error);
            return false;
        }
    }

    handleLoginSucces(response, remember = false){
        if(remember == false){
            const options = {path: '/'};
            cookie.set('refresh_token', response.refresh_token, options);
            cookie.set('access_token', response.access_token, options);
            cookie.set('remeber_me', false);
        }
        else{
            const options = {path: '/', maxAge: response.expires_in};
            cookie.set('refresh_token', response.refresh_token, options);
            cookie.set('access_token', response.access_token, {path: '/'});
            cookie.set('remeber_me', true);
        }
        return true;
    }

    async isLoggedIn(){
        if (cookie.get('access_token') != null){
            return true;
        }
        else{
            if (cookie.get('refresh_token') != null) {
                const refreshCredentials = {
                    'refresh_token': cookie.get('refresh_token'),
                    'grant_type': 'refresh_token',
                    'client_id': '2',
                    'client_secret': 'h4Rszv34VV9o0BHKhowVSLEg5kfFIEvNlJoALpHc'
                };
                try{
                    const response = await axios.post('oauth/token', refreshCredentials);
                    //console.log(response);
                    var options = null;
                    if (cookie.get('remember_me') == true) {
                        options = {path: '/', maxAge: response.expires_in};    
                    } else {
                        options = {path: '/'};
                    }
                    cookie.set('refresh_token', response.data.refresh_token, options);
                    cookie.set('access_token', response.data.access_token, {path: '/'});
                    return true;
                } catch(error) {
                    console.error('Error', error.response);
                    return false;
                }    
            } else {
                return false;
            }
            
        }
    }
}

export default new ApiRepositories();