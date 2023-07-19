<template>
    <div class="post">
            <h3>
                {{ this.title }}
            </h3>
            <p>
                {{ this.text }}
            </p>
        </div>
</template>

<script>
    export default{
        name: "Post",
        props: [
            'title', 
            'text'
        ],
        components: {

        },
        data(){

        }
    }
</script>

<style>

</style>