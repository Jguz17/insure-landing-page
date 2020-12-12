<template>
    <header class="header">
        <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
        <div class="nav">
            <router-link style="padding-right: 1rem" to="/how-we-work">How We Work</router-link>
            <router-link style="padding-right: 1rem" to="/blog">Blog</router-link>
            <router-link style="padding-right: 1rem" to="/account">Account</router-link>
            <router-link to="/plans"><button class="button is-small">VIEW PLANS</button></router-link>
        </div>
        <div class="hidden-icon"><img src="../../../images/icon-hamburger.svg"/></div>
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
        padding: 1rem 7.5% 0;
        z-index: 9999;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header a {
        display: flex;
        align-items: center;
    }
    .header a {
        color: #333;
        text-decoration: none;
    }
    .nav {
        display: flex;
        align-items: center;
    }
    .hidden-icon {
        display: none;
    }
    @media all and (max-width: 480px) { 
        .nav {
            display: none;
        }
        .hidden-icon {
            display: block;
    }
    }
</style>