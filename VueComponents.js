<!DOCTYPE html>

<html>

<head>
    <style>
    .is-loading {background-color: blue;}

    #root > ul > li{
        list-style: none;
    }
    </style>



</head>

<body>
    <div id = "root">
        <ul>
            <task-list></task-list>
       </ul>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>

    <script>
    
Vue.component('task-list', {

template: `<div>
                 <task v-for = "task in tasks">{{ task.task }}</task>
           </div>`,
data ()
{
    return {
        tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to the email', complete: false},
                {task: 'Go to the farm', complete: true},
                {task: 'Go to work', complete: false}
              ]
            }

}
});



Vue.component('task', {

template: '<li><slot></slot></li>',
data ()
{
    

}
});


new Vue({
el:'#root'
})
    
    </script>
</body>


</html>
