<template>
    <header class="header">
        <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
        <div class="nav">
            <router-link style="padding-right: 1rem" to="/how-we-work">How We Work</router-link>
            <router-link style="padding-right: 1rem" to="/blog">Blog</router-link>
            <router-link style="padding-right: 1rem" to="/account">Account</router-link>
            <button><router-link to="/plans">VIEW PLANS</router-link></button>
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
        margin-bottom: 1rem;
        padding: 0 7.5rem;
    }
    .header img {
        float: left;
    }
    .header a {
        color: #333;
        text-decoration: none;
    }
    .nav {
        float: right;
    }
    .nav button {
        background: transparent;
        border: 2px solid #333;
        padding: .5rem 1.25rem;
    }
</style>