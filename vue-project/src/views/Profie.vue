<template>
    <div class="avinfo">
        <Avatar/>
        <Description/>
    </div>
    <News/>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
    import Avatar  from "@/components/Avatar.vue"
    import Description  from "@/components/Description.vue"
    import News from "@/components/News.vue"
    export default {
    name: "Profile",
    components: {
        Avatar,
        Description,
        News
    },
    data() {   

    },
  }
</script>
<style>
    .avinfo{
        display: flex;
        flex-direction: row;
        
    }
</style>