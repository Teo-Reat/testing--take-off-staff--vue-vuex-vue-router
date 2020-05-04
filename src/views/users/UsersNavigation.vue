<template>
    <ul>
        <li>
            <router-link to="/users/settings">Settings</router-link>
        </li>
        <li>
            <router-link to="/users/questions">Questions</router-link>
        </li>
        <li>
            <router-link to="/users/logic">Logic</router-link>
        </li>
        <li>
            <router-link to="/users/conditions">Conditions</router-link>
        </li>
        <li>
            <router-link to="/users/respondents">The Respondents</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "UsersNavigation"
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        display: inline-block;
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
</style>