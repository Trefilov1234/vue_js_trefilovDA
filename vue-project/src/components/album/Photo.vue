<template>
    <div class="photo">
        <div class="title">{{ this.title }}</div>
        <img :src="url" alt="not found">
    </div>
</template>

<script>
 export default{
        name: "Photo",
        components:{
            
        },
        props:[
            'title',
            'url'
        ],
        data(){
            return{
                
            }
        }
    }
</script>

<style>
     .title{
        font-size: 30px;
        text-decoration: underline;
    }   
    img{
        width: 200px;
        height: 200px;
    }
    .photo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>