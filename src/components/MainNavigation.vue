<template>
    <section class="navigation">
        <div>
            <router-link to="/">
                <div class="logo"/>
            </router-link>
        </div>
        <div>
            <ul>
                <li>
                    <router-link to="/polls">Polls</router-link>
                </li>
                <li>
                    <router-link to="/users">Users</router-link>
                </li>
                <li>
                    <router-link to="/blacklists">Blacklists</router-link>
                </li>
                <li>
                    <router-link to="/call-centre">Call Centre</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MainNavigation"
    }
</script>

<style scoped>
    .navigation {
        width: 200px;
        background: aliceblue;
        padding: 20px;
    }

    .logo {
        border-radius: 50%;
        background: red;
        height: 60px;
        width: 60px;
        margin: 0 auto;
    }

    li {
        list-style-type: none;
    }
</style>