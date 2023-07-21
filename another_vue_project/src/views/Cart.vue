<template>
    <div v-for="(product,index) in this.mappedProducts" v-if="this.mappedProducts.length">
        <Product :image="product.image" :title="product.title" :price="product.price" :id="product.id" :quantity="product.quantity" :description="product.description"/>
    </div>
</template>

<script>
import { getCartProducts,getProductById } from '../services/index.js';
import Product from '../components/product/Product.vue'
 export default{
    name:"Cart",
    components:{
        Product
    },
    async created(){
        this.products=await this.getProducts();
        console.log(this.products);
        this.mappedProducts=await this.mapProducts();
        console.log(this.mappedProducts);
    },
    data(){
        return{
            products: [],
            mappedProducts:[]
        }
    },
    methods:{
        async getProducts()
        {
            try {
                const response = await getCartProducts();
                console.log(response)
                return response.data[0].products;
            } catch (error) {
                console.log(error)
                return [];
            }
        },
        async getProductById(id)
        {
            try {
                const response = await getProductById(id);
                console.log(response)
                return response.data;
            } catch (error) {
                console.log(error)
                return [];
            }
        },
        async mapProducts()
        {
            let temp=[];
            for(let i=0;i<this.products.length;i++)
            {
                let product= await getProductById(this.products[i].productId);
                console.log(product.data);
                temp.push({
                    id:product.data.id,
                    image: product.data.image,
                    title: product.data.title,
                    price: product.data.price,
                    category: product.data.category,
                    description: product.data.description,
                    quantity: this.products[i].quantity
                });
            }
            return temp;
        }

    }
 }
</script>

<style>
 .quantity{
    display: inline-block;
 }
</style>