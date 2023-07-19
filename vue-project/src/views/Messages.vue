<template>
    <section class="container">
        <div class="messages" >
            <div  v-for="(message,index) in this.messages" v-if="this.messages.length" >
                <Message v-bind:class = "(message.from==='other')?'other-style':'me-style'" :text="message.text" :from="message.from" />
            </div>
            <div v-else>
                <EmptyMessage text="нет сообщений"/>
            </div>  
        </div>
        <div class="checkbox">
            <input v-model='this.switcher' type="checkbox">
            <label>Поменять пользователя</label>
        </div>
        <div class="send">
            <textarea v-model='this.text' class="textarea"></textarea>
            <button class="btn btn-primary" @click="sendMessage">Отправить</button>
        </div>
        <small v-if="this.error.text" class="form-text text-danger">Заполните текст</small>
    </section>
</template>

<script>
    import Message from "@/components/message/Message.vue"
    import EmptyMessage from "../components/message/EmptyMessage.vue";
    export default {
        name: "Messages",
        components: {
            Message,
            EmptyMessage
        },
        data() {   
                return{
                    switcher:false,
                    text:"",
                    error:{
                        text: false
                    },
                    messages:
                    [
                        
                    ]
                }
        },
        computed:{
            some(){
                return{
                    'other-style': this.text==='other',
                    'me-style': this.text==='me'
                }
            }
        },
        methods:{
            sendMessage()
            {
                if(this.text)
                {
                    let name;
                    if(this.switcher)
                    {
                        name='other';
                    }
                    else{
                        name='me';
                    }
                    this.messages.push({
                        text: this.text,
                        from: name,
                    })
                    this.text="";
                    this.error.text=false;
                }
                else{
                    this.error.text=!this.text;
                }
                // console.log(this.switcher);
                // console.log(this.text);
            }
        },
        watch:{
            text(value){
                this.error.text=false;
            }
        }
    }
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .textarea{
        display: inline;
        width: 100%;
    }
    .send{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .other-style{
        background-color: red;
    }
    .me-style{
        background-color: aqua;
    }
</style>