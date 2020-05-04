<template>
    <div id="app">
        <h1>TakeOffStaff</h1>
        <div class="wrapper">
            <app-main-navigation/>
            <main>
                <app-top-panel/>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
    import MainNavigation from "./components/MainNavigation";
    import TopPanel from "./components/TopPanel";

    export default {
        components: {
            appMainNavigation: MainNavigation,
            appTopPanel: TopPanel
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    main {
        width: 760px;
    }
    ul {
        padding: 0;
    }
    #app {
        margin: 60px auto;
        width: 960px;
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
    }
    .main-section {
        padding: 0 20px;
    }
</style>
