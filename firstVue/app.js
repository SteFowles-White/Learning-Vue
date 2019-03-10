const book = new Vue({
    el: '#book',
    data: {
        title: "The Sirens of Titan",
        author: "Kurt Vonnegut",
        summary: "This is a summary of the Sirens of Titan",
        showDetail: false //intial state
        },
        methods:{
            toggleDetails: function (){
                this.showDetail = !this.showDetail;
                //this means whatever the showDetail value is it changes he showDetail to the other
                //repsones if true it becomes false if false become true
                //This allowsthe iser to click on the website and reveal text/img/
            }
        }

     });


