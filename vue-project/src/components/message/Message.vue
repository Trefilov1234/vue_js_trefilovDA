<template>
    <div class="message">
        <div class="from">{{ this.from }}: </div>
        <div class="text">{{ this.text }}</div>
    </div>
</template>

<script>
    export default{
        name: "Message",
        props:[
            'text',
            'from'
        ],
        components:{

        },
        data(){

        }
    }
</script>

<style>
 .from{
    display: inline;
 }
 .text{
    display: inline;
 }
</style>