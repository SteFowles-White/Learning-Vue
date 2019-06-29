<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="listItems in servers"
                    v-bind:key = "listItems.Id"
                    v-on:click = "serverStatus(listItems.Id, listItems.status)"> Server #{{ listItems.Id }} is {{ listItems.status }} 
                </li>
            </ul>
        </div>
         <div class="col-xs-12 col-sm-6">
            <my-server-details></my-server-details>
        </div>
    </div>

</template>

<script>

import { eventBus } from '/Users/SJMLZ/vue-comp-excersie/src/main'; 
import serverDetails from './ServerDetails'

export default{
    data: function(){
        return {
            servers: [
                {Id: 1, status: 'Normal'},
                {Id: 2, status: 'Critical'},
                {Id: 3, status: 'Unknown'},
                {Id: 4, status: 'Normal'}
            ]
        }
    },
     components: {
            'my-server-details': serverDetails,
     },
     // This sends the event elements data (id and server status) to the main.js file
    //This infomration will be acessed on another component (ServerDetails.Vue)
    methods: {
    serverStatus(id, status) {
        eventBus.methodNameData(id, status);
    }    
    },
    // This is waiting for any changes in the data on the main.js function 'statusEdit'
    //Once new data changes happen if will edit the apprate status in the servers.
    created() {
        eventBus.$on('statusEdit', (data) => {
            const editedStatus = this.servers.map(obj => {
                if( data.id === obj.Id) {
                    obj.status = 'Normal';
                }
            })
        })
    }
}
</script>

<style scoped>

</style>
