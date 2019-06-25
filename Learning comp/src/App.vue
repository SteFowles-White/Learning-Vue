<template>
    <div class="container">
        <div class="row">
            <my-header></my-Header>
        </div>
        <hr>
        <div class="row">
            <my-server-list></my-server-list>
            <my-server-details></my-server-details>
        </div>
        <hr>
        <div class="row">
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
import myHeader from './components/Shared/Header'
import serverList from './components/Server/ServerList'
import serverDetails from './components/Server/ServerDetails'
import footer from './components/Shared/footer'

    export default {
        components: {
            'my-header': myHeader,
            'my-server-list': serverList,
            'my-server-details': serverDetails,
            'my-footer': footer
        }



    }

</script>

<style>

</style>
