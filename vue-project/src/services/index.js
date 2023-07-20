import axios from "axios"
export const apiBase = "https://jsonplaceholder.typicode.com/";

const $api = axios.create({
    baseURL: apiBase,
})

export const getAlbums = async () => {
    return await $api.get('/albums');
}
export const getPhotosByAlbumId=async(id)=>{
    return await $api.get('/albums/'+id+'/photos')
}