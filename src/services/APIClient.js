import {Constants} from '../constants/Constants';
import axios from 'axios';


export async function Get(url, callback) {
    let headers =  {
        
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