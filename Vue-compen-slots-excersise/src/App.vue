<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary"
                    @click ="SelectedKey = 'appBlue'" >Load Blue Template</button>
                <button class="btn btn-success"
                    @click ="SelectedKey = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger"
                    @click ="SelectedKey = 'appRed'">Load Red Template</button>
                <hr>
                <component v-bind:is ="SelectedKey">
                    <keep-alive>
                        <h1> This is the Contents </h1>
                    </keep-alive>
                </component>

<!-- 
                <app-blue><h1> This is the Contents </h1></app-blue>
                <app-green><h1> This is the Contents </h1></app-green>
                <app-red><h1> This is the Contents </h1></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
            SelectedKey: "appBlue",
            blue: "This is Blue",
            red: "This is Red",
            green: "This is Green"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
