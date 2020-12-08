<template>
    <header class="header">
        <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
        <div class="nav">
            <router-link to="/how-we-work">How We Work</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/account">Account</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: #fff;
        color: #333;
        overflow: auto;
    }
    .header img {
        float: left;
    }
    .header a {
        color: #333;
        padding-left: 5px;
        text-decoration: none;
    }
    .nav {
        float: right;
    }
</style>