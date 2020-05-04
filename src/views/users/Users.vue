<template>
    <section class="main-section">
        <app-users-navigation />
        <router-view />
    </section>
</template>

<script>
    import UsersNavigation from "./UsersNavigation";

    export default {
        name: "Users",
        components: {
            appUsersNavigation: UsersNavigation
        }
    }
</script>

<style scoped>

</style>