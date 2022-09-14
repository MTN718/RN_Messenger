
import { Constants } from "../../constants/Constants";
import {Get} from '../APIClient'


export function serviceVerifyToken(callback) {
    return Get(`${Constants.ENDPOINT_URL}${Constants.VERIFY_TOKEN_API}`, callback);    
}