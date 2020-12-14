<template>
    <header class="header">
        <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
        <div class="nav">
            <button class="button is-small" @click="state.count++">{{ state.count }} x 2 = {{ times2 }}</button>
            <router-link style="padding-right: 1rem" to="/how-we-work">How We Work</router-link>
            <router-link style="padding-right: 1rem" to="/blog">Blog</router-link>
            <router-link style="padding-right: 1rem" to="/account">Account</router-link>
            <router-link to="/plans"><button class="button is-small">VIEW PLANS</button></router-link>
        </div>
        <div class="hidden-icon"><img @click="triggerMobileNav(), triggerMobileNavDiv()" src="../../../images/icon-hamburger.svg"/></div>
        <!-- <button>{{ state.mobileNavDisplay }}</button> -->
        <div class="hidden-div">
            <div class="logo-and-close-mobile">
                <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
                <img @click="triggerMobileNav(), triggerMobileNavDiv()" src="../../../images/icon-close.svg"/>
            </div>
            <!-- <button>{{ state.mobileNavDisplay }}</button> -->
            <div class="link-container-mobile">
                <router-link @click="triggerMobileNav(), triggerMobileNavDiv()" style="padding-right: 1rem" to="/how-we-work"><div>How We Work</div></router-link>
                <router-link @click="triggerMobileNav(), triggerMobileNavDiv()" style="padding-right: 1rem" to="/blog"><div>Blog</div></router-link>
                <router-link @click="triggerMobileNav(), triggerMobileNavDiv()" style="padding-right: 1rem" to="/account"><div>Account</div></router-link>
                <router-link @click="triggerMobileNav(), triggerMobileNavDiv()" to="/plans"><div>Plans</div></router-link>
            </div>
        </div>
    </header>
</template>

<script>
import global from '@/global'

export default {
    name: "Header",
    setup() {
        const { state, inc, times2, triggerMobileNav} = global
        return { state, inc, times2, triggerMobileNav }
    },
    methods: {
        triggerMobileNavDiv: () => {
            const { state } = global
            console.log(state)
            if (state.mobileNavDisplay) {
                document.querySelector('.hidden-div').style.display = 'block'
                document.querySelector('.hidden-div').style.position = 'fixed'
                
                document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
                document.getElementsByTagName("BODY")[0].style.position = 'fixed';
            } else {
                document.querySelector('.hidden-div').style.display = 'none'
                document.getElementsByTagName("BODY")[0].style.overflow = 'initial';
                document.getElementsByTagName("BODY")[0].style.position = 'initial';
            }
        }
    }
}


</script>

<style scoped>
    .hidden-div {
        display: none;
        background: #2B282F;
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        left: 0;
        bottom: 0;
    }
    .hidden-div img {
        /* position: absolute;
        right: 0; */
    }
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
    .link-container-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }
    .link-container-mobile a {
        color: #fff;
    }
    .logo-and-close-mobile {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }
    /* .link-container-mobile div {
        width: 100%;
        back
    } */
    @media all and (max-width: 668px) { 
        .nav {
            display: none;
        }
        .hidden-icon {
            display: block;
        }
    }
</style>