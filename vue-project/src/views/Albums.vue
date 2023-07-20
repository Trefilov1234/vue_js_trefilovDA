<template>
    <section class="albums">
        <div  v-for="(album,index) in this.albums" v-if="this.albums.length">
            <Album :title="album.title" :url="album.url" :id="album.id"/>
        </div>
        <div v-else>
            <EmptyMessage text="альбомов нет или они еще загружаются"/>
        </div> 
    </section>
</template>

<script>
import { getAlbums,getPhotosByAlbumId } from '../services/index.js';
import EmptyMessage from "../components/message/EmptyMessage.vue";
import Album from "@/components/album/Album.vue";
import Photos from "../views/Photos.vue"
    export default {
    name: "Albums",
    components: {
        Album,
        EmptyMessage
    },
    async created()
    {
        this.albumsTitle=await this.getAlbums();
        this.previewPhotos=await this.getPreviewPhotosById();
        this.albums=this.createAlbums();
        console.log(this.albums);
    },
    data() { 
        return{
            albumsTitle: [],
            photos: [],
            previewPhotos: [],
            albums: []
        }  

    },
    methods:{
        async getAlbums(){
            try{
                const response=await getAlbums(); 
                return response.data;
            }
            catch(error)
            {
                return [];
            }
        },
        async getPhotosByAlbumId(id)
        {
            try{
                const response=await getPhotosByAlbumId(id);
                return response.data;
            }
            catch(error)
            {
                return [];
            }  
        },
        async getPreviewPhotosById()
        {
            let previewPhotos=[];
            for(let i=0;i<this.albumsTitle.length;i++)
            {
                let currAlbumPhotos=  await this.getPhotosByAlbumId(this.albumsTitle[i].id);
                previewPhotos.push(currAlbumPhotos[0]);
            }
            
            return previewPhotos;
        },
        createAlbums()
        {
            let albums=[];
            for(let i=0;i<this.albumsTitle.length;i++)
            {
                albums.push({title: this.albumsTitle[i].title, url: this.previewPhotos[i].url, id:this.albumsTitle[i].id});
            }
            return albums;
        }
    }
  }
</script>

<style>

</style>