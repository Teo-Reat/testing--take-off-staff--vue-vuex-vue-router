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

<style src="./assets/css/normalize.css" />
<style src="./assets/css/main.css" />
