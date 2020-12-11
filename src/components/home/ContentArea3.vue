<template>
    <div class="content-area-3">
        <div class="wrapper">
            <div class="background">
                <img src="../../../images/bg-pattern-how-we-work-desktop.svg"/>
                <div class="content">
                    <h1 class="title is-1" style="color: white">Find out more<br/> about how we work</h1>
                    <button class="button is-small">HOW WE WORK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentArea3'
}
</script>

<style scoped>
    .background {
        height: 250px;
        background: #2c2640;
    }
    .background img {
        position: absolute;
        right: 7.5rem;
    }
    .content-area-3 {
        padding: 0 7.5rem;
        margin: 6.5rem 0;
    }
    .content {
        display: flex;
        justify-content: space-between;
        padding: 4.5rem 2rem;
    }
    .button {
        margin-top: 2.5rem;
    }
</style>