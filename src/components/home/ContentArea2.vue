<template>
    <div class="content-area-2">
        <div class="wrapper">
            <div class="svg">
                <img src="../../../images/bg-pattern-intro-left-desktop.svg"/>
            </div>
            <div class="normal-content-container">
                <hr style="background: #8d9eb9"/>
                <h1 class="title is-1">We're Different</h1>
            </div>
            <div class="icons-container">
                <div class="icon-1">
                    <img src="../../../images/icon-snappy-process.svg"/>
                    <div class="content">
                        <h1>Snappy Process</h1>
                        <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                    </div>
                </div>
                <div class="icon-2">
                    <img src="../../../images/icon-affordable-prices.svg"/>
                    <div class="content">
                        <h1>Affordable Prices</h1>
                        <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible</p>
                    </div>
                </div>
                <div class="icon-3">
                    <img src="../../../images/icon-people-first.svg"/>
                    <div class="content">
                        <h1>People First</h1>
                        <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentArea2"
}
</script>

<style scoped>
    hr {
        width: 200px;
    }
    .content-area-2 {
        padding: 0 7.5%;
        text-align: center;
    }
    .svg img {
        position: absolute;
        left: 0;
        margin-top: -25rem;
    }
    .normal-content-container {
        margin-top: 10rem;
    }
    .normal-content-container h1 {
        margin-top: 4rem;
    }
    .icons-container {
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
    }
    .icon-1,
    .icon-2,
    .icon-3 {
        max-width: 325px;
    }
    .icon-1 h1,
    .icon-2 h1,
    .icon-3 h1 {
        margin-top: 2rem;
    }
    @media all and (max-width: 480px) { 
        hr {
            margin: 0 auto;
        }
        .normal-content-container h1 {
            font-size: 2rem;
        }
        .icons-container {
            flex-direction: column;
            /* justify-content: center; */
        }
        .icon-1,
        .icon-2,
        .icon-3 {
        max-width: 100%;
        margin-bottom: 3rem;
        }
        .svg {
            display: none;
        }
  }
</style>