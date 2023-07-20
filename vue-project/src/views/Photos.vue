<template>
    <div @click="this.$router.go(-1)">
        <span class="btn btn-primary">
            вернуться назад
        </span>
    </div>
    <section class="photos" >
        <div v-for="(photo,index) in this.photos" v-if="this.photos.length">
            <Photo :title="photo.title" :url="photo.url"/>
        </div>
        <div v-else>
            <EmptyMessage text="фото нет или они еще загружаются"/>
        </div> 
    </section>
</template>

<script>
import EmptyMessage from "../components/message/EmptyMessage.vue";
import Photo from "../components/album/Photo.vue";
import { getPhotosByAlbumId } from "../services/index.js";
    export default{
        name: "Photos",
        components:{
            EmptyMessage,
            Photo
        },
        data(){
            return{
                photos:[]
            }
        },
        async created(){
            this.photos=await this.getPhotos();
        },
        methods:{
            async getPhotos()
            {
                try{

                    const response=await getPhotosByAlbumId(this.$route.params.id);
                    return response.data;
                }
                catch(error)
                {
                    return []
                }
            }
        }
    }
</script>

<style>
    .photos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>