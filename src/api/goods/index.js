import {request} from "../config";

async function getList(data = {}){
   return request('get', "/goods", data, true)
}

export const goodsApi = {
    getList
}
