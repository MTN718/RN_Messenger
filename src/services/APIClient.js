import {Constants} from '../constants/Constants';
import axios from 'axios';
import { getAccessToken} from '@okta/okta-react-native';

async function authHeader() {
    let accessToken = await getAccessToken()
    return {
        Authorization: `Bearer ${accessToken.access_token}`
    }
}
export async function Get(url, callback) {
    let headers =  {
        headers: await authHeader()
    }
    axios.get(url, headers)
    .then(function (response) {
        if (response.status == '200') {
            callback(response.data);
        }
        else {
            console.log('API Error:', response);
        }
    })
    .catch(function (error) {
        
    });
}

export async function Put(url, params = undefined, callback) {
    let headers =  {
        headers: await authHeader()
    }
    axios.put(url, params, headers)
    .then(function (response) {
        if (response.status == '200') {
            callback(response.data);
        }
        else {
            console.log('API Error:', response);
        }
    })
    .catch(function (error) {
        
    });
}