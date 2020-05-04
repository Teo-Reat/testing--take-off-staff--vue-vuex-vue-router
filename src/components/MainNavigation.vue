<template>
    <section class="navigation">
        <div>
            <router-link to="/" class="logo-link">
                <div class="logo"/>
            </router-link>
        </div>
        <div>
            <ul>
                <li>
                    <router-link to="/polls" active-class="active">Polls</router-link>
                </li>
                <li>
                    <router-link to="/users" active-class="active">Users</router-link>
                </li>
                <li>
                    <router-link to="/blacklists" active-class="active">Blacklists</router-link>
                </li>
                <li>
                    <router-link to="/call-centre" active-class="active">Call Centre</router-link>
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
        text-align: center;
    }

    .logo {
        border-radius: 50%;
        background: red;
        height: 50px;
        width: 50px;
        margin: 0 auto 60px;
    }
    .logo-link {
        padding: 0;
    }

    li {
        list-style-type: none;
        margin-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: black;
        padding: 10px 20px;
        display: block;
    }
    .active {
        background: #ddd;
    }
</style>