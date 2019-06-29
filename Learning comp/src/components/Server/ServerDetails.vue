<template>

            <p v-if = "show">Server Details are currently not updated</p>
            <section v-else>
                <p> The server #{{ id }} current status is: {{serverStatusRendering}} <br><br>
                If this is not normal please click the reset button to reset the server </p>    
                <button v-on:click = "serverStatus">Reset</button>
            </section>
</template>
<script>

import { eventBus } from '/Users/SJMLZ/vue-comp-excersie/src/main';  

export default {
data: function(){
    return{
        show: true,
        id: "",
        'serverStatusRendering': ""
        }
    }, 
    //This send the elements id and server status to the main.js to alter infomration in the ServerList.vue data (servers array)
    //It also changes data show to true to allow the element in vue to change
    methods: {
        serverStatus() {
            eventBus.methodNameData(this.id, this.serverStatusRendering);
            this.show = true;
        }   
    },
    //This is waiting to receieve the data from the serve item that was clicked.
    //once the server data is clicked the elemetn in this template will change (this.show = false)
    // It will then update the data id & serverStatusRendering with the data.
    created(){ 
    eventBus.$on('statusEdit', (obj) => { 
    this.show = false;
    this.id = obj.id;
    this.serverStatusRendering = obj.serverstatus;
}) 

} 
}

</script>



<style scoped> 

</style>
