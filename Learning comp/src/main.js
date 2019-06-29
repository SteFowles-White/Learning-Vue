import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({ 
  methods: { 
    //method takes an id and status argument to be used globally for the application and enable cross component data rendering
  methodNameData(id, status){ 
    this.$emit('statusEdit', {'id': id, serverstatus: status}) 
   }
  }
 })

new Vue({
  el: '#app',
  render: h => h(App)
});
