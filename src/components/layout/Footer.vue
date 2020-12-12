<template>
    <footer>
        <div class="row-1">
            <router-link to="/"><img src="../../../images/logo.svg"/></router-link>
            <div class="social-media-links">
                <ul>
                    <li><img src="../../../images/icon-facebook.svg"/></li>
                    <li><img src="../../../images/icon-twitter.svg"/></li>
                    <li><img src="../../../images/icon-pinterest.svg"/></li>
                    <li><img src="../../../images/icon-instagram.svg"/></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div class="row-2">
            <div class="column">
                <h1 class="title is-6">OUR COMPANY</h1>
                <div class="content is-small">
                    <p>HOW WE WORK</p>
                    <p>WHY INSURE?</p>
                    <p>VIEW PLANS</p>
                    <p>REVIEWS</p>
                </div>
            </div>
            <div class="column">
                <h1 class="title is-6">HELP ME</h1>
                <div class="content is-small">
                    <p>FAQ</p>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIES</p>
                </div>
            </div>
            <div class="column">
                <h1 class="title is-6">CONTACT</h1>
                <div class="content is-small">
                    <p>SALES</p>
                    <p>SUPPORT</p>
                    <p>LIVE CHAT</p>
                </div>
            </div>
            <div class="column">
                <h1 class="title is-6">OTHERS</h1>
                    <div class="content is-small">
                        <p>CAREERS</p>
                        <p>PRESS</p>
                        <p>LICENSES</p>
                    </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer {
        padding: 5% 7.5% 2.5%;
        width: 100%;
        background: #FAFAFA;
    }
    .row-1 {
        display: flex;
        justify-content: space-between;
    }
    ul li {
        display: inline-block;
        list-style-type: none;
    } 
    ul li:nth-child(n-1) {
        padding-left: .85rem;
    }
    hr {
        width: 100%;
        margin: 2.5% 0;
        background: #8d9eb9;
    }
    .row-2 {
        display: flex;
        justify-content: space-between;
    }
    .column {
        max-width: 250px;
    }

    @media all and (max-width: 480px) { 
        footer {
            text-align: center;
            /* padding: 5% 7.5% 2.5%; */
        }
        .row-1 {
            padding: 5rem 0 2.5rem;
        }
        .row-1 img {
            padding: 0 0 1rem;
        }
        .row-1,
        .row-2 {
            flex-direction: column;
        }
        .column {
            margin: 0 auto;
        }
  }
</style>