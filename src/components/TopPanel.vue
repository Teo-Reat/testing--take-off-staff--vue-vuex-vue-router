<template>
    <section class="wrapper top-panel main-section">
        <div class="search">
            <label>
                <input type="text">
            </label>
        </div>
        <div class="user"></div>
        <div class="breadcrumbs">
            <ul>
                <li>Home</li>
                <li>Some place</li>
                <li>Another place</li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TopPanel"
    }
</script>

<style scoped>
    .top-panel {
        width: 100%;
        flex-wrap: wrap;
    }

    div {
        background: aliceblue;
        width: 45%;
    }
    li {
        list-style-type: none;
        display: inline-block;
        margin-right: 20px;
    }
</style>