<template>
    <section class="wrapper top-panel main-section">
        <div class="search">
            <label>
                <input type="text">
            </label>
        </div>
        <div class="user wrapper">
            <div class="avatar"></div>
            <div class="description">
                <strong>Alexander R</strong>
                <p>Psychologist</p>
            </div>
        </div>
        <div class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/" class="logo-link">
                        Home
                    </router-link>
                </li>
                <li>Some page</li>
                <li>Another place</li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TopPanel",
        data() {
            return {
                link: {
                    name: '',
                    params: {
                        id: this.$route.name
                    },
                }
            }
        },
    }
</script>

<style scoped>
    .top-panel {
        width: 100%;
        flex-wrap: wrap;
    }

    .search {
        width: 65%;
    }

    input {
        border: 1px solid #ccc;
        background: #eee;
        border-radius: 5px;
        padding: 5px 10px;
        width: 100%;
    }

    .user {
        width: 30%;
        justify-content: flex-end;
    }

    .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: red;
        margin-right: 10px;
    }

    strong {
        display: block;
        margin: 6px 0 -16px;
        font-size: 14px;
    }

    p {
        font-size: 12px;
        color: gray;
    }

    li {
        list-style-type: none;
        display: inline-block;
        margin-right: 40px;
    }

    .breadcrumbs {
        margin-bottom: 20px;
    }

    .breadcrumbs > ul > li {
        position: relative;
    }

    .breadcrumbs > ul > li::after {
        position: absolute;
        content: '>>';
        right: -30px;
        top: 0;
        display: block;
    }

    .breadcrumbs > ul > li:last-child::after {
        content: '';
    }
</style>