<template>
    <div class="card" v-if="this.product">
        <img class="card-img-top" :src="this.product.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ this.product.title }}</h5>
            <p
                class="card-text link"
            >
                {{ this.product.category }}
            </p>
            <p class="card-text">{{ this.product.description }}$</p>
            <p class="card-text">{{ this.product.price }}$</p>
            <span class="btn btn-primary" @click="this.$router.go(-1)">
                назад
            </span>
        </div>
    </div>
</template>

<script>
import Product from "@/components/product/Product.vue"
import { getProductById } from "@/services/index.js"
 export default{
    name: "Product",
    components: {
        Product
    },
    async created(){
        this.product=await this.getProductById();
        console.log(this.product);
    },
    data(){
        return {
            product: null
        }

    },
    methods:{
        async getProductById()
        {
            try {
                const response = await getProductById(this.$route.params.id);
                console.log(response)
                return response.data;
            } catch (error) {
                console.log(error)
                return [];
            }
        }
    }
}
</script>

<style>

</style>