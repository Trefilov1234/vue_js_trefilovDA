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
//import {getPosts} from "@/services/index.js"
    export default{
        name: "News",
        components:{
            Post
        },
        created()
        {
            //this.posts=this.getPosts();
        },
        data(){
            return{
           posts:[]
            }
        },
        methods:{
            getPosts()
            {
                return [];

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