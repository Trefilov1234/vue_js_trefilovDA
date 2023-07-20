<template>
    <div class="album">
        <div class="title" @click='this.$router.push("/albums/"+this.id)'>
            {{ this.title }}
        </div>
        <img :src="url" alt="not found">
    </div>
</template>

<script>
    export default{
        name: "Album",
        props:[
            'id',
            'title',
            'url'
        ],
        components:{

        },
        data(){

        }
    }
</script>

<style>
    .title{
        cursor: pointer;
        font-size: 30px;
        text-decoration: underline;
    }   
    img{
        width: 200px;
        height: 200px;
    }
    .album{
        border: 1px solid black;
        padding: 15px 10px;
        margin: 15px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
    }
</style>