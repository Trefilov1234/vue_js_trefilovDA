<template>
    <section class="posts">
        <div v-for="(post,index) in this.posts">
            <Post :title="post.title" :text="post.text"/>
        </div>
        <div>
            <div class="empty">
                Пока еще нет ни одного поста!
            </div>
        </div>
    </section>
</template>

<script>
import Post from "@/components/post/Post.vue"
    export default{
        name: "News",
        components:{
            Post
        },
        data(){
            return{
                posts:[
                    {id:1, title:"Пост 1", text: "Какой-то тестовый текст 1"},
                    {id:2, title:"Пост 2", text: "Какой-то тестовый текст 2"},
                    {id:3, title:"Пост 3", text: "Какой-то тестовый текст 3"},
                    {id:4, title:"Пост 4", text: "Какой-то тестовый текст 4"},
                    {id:5, title:"Пост 5", text: "Какой-то тестовый текст 5"},
                    {id:6, title:"Пост 6", text: "Какой-то тестовый текст 6"},
                    {id:7, title:"Пост 7", text: "Какой-то тестовый текст 7"},
                ]
            }
        }
    }
</script>

<style>
    .post{
        border: 1px solid black;
        padding:15px;
        margin-top: 10px;
    }
    .post:last-child{
        margin-bottom: 10px;
    }
    .posts{
        margin:0 auto;
        max-width: 80%;
    }
</style>