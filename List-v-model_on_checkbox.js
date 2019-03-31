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

        <h1>Completed</h1>
        <ul>
            <li v-for ="item in tasks">
                <input type="checkbox" 
                        v-bind:id = "item.descritpion"
                        v-bind:value= "item.descritpion"
                        v-model="item.completed">
                <label for="item.descritpion"
                        v-text="item.descritpion"></label>
            </li>
        </ul>

        
        <h1>Completed</h1>
        <ul>
            <li v-for = "task in completed"> {{ task.descritpion }}
            </li>
        </ul>


        <h1>incompleted
        </h1>
        <ul>
            <li v-for = "task in incompletedTasks"> {{ task.descritpion }}
            </li>
        </ul>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>

    <script>

        var app = new Vue ({
            el: "#root",
            data: {
                tasks: [
                    {descritpion: 'Go to the shops', completed: false},
                    {descritpion: 'Finish screencast', completed: false},
                    {descritpion: 'Make donation', completed: false},
                    {descritpion: ' Clear Inbox', completed: false},
                    {descritpion: 'Make Dinner', completed: false},
                    {descritpion: 'clean room', completed: false}
                    ],


            },
            computed: {

                    completed() {
                        return this.tasks.filter(task => task.completed)

                    },
                    incompletedTasks() {
                      return this.tasks.filter(task => !task.completed);
                     },
                        
                    


                }
        }

        )


    
    </script>
</body>


</html>
