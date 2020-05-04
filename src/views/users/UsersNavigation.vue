<template>
    <ul>
        <li>
            <router-link to="/users/settings" active-class="active">Settings</router-link>
        </li>
        <li>
            <router-link to="/users/questions" active-class="active">Questions</router-link>
        </li>
        <li>
            <router-link to="/users/logic" active-class="active">Logic</router-link>
        </li>
        <li>
            <router-link to="/users/conditions" active-class="active">Conditions</router-link>
        </li>
        <li>
            <router-link to="/users/respondents" active-class="active">The Respondents</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "UsersNavigation"
    }
</script>

<style scoped>
    ul {
        padding: 0;
    }
    li {
        list-style-type: none;
        display: inline-block;
    }
    a {
        text-decoration: none;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px 5px 0 0;
        color: black;
    }
    .active {
        background: #ddd;
    }
</style>