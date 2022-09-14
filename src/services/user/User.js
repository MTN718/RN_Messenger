
import { Constants } from "../../constants/Constants";
import {Put} from '../APIClient'


export function serviceUpdateUser(name, callback) {
    let params = {
        name: name
    }
    return Put(`${Constants.ENDPOINT_URL}${Constants.UPDATE_USER_API}`, params, callback);    
}