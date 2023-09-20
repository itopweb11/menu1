import {request} from "../config";

async function getList(data = {}){
   return request('get', "/goods", data, false)
}

export const goodsApi = {
    getList
}

console.log(getList, 'getList')
