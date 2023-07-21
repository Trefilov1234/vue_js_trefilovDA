<template>
  <Header/>
  <div class="container pt-3">
        <RouterView />
    </div>
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/base/Header.vue"
  export default{
    name: "App",
    components:{
      Header
    }
  }
</script>

<style >

</style>
