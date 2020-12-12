<template>
    <div class="content-area-3">
        <div class="wrapper">
            <div class="background">
                <img id="image" src="../../../images/bg-pattern-how-we-work-desktop.svg"/>
                <img id="hidden-image" src="../../../images/bg-pattern-how-we-work-mobile.svg"/>
                <div class="content">
                    <h1 class="title is-2" style="color: white">Find out more<br/> about how we work</h1>
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
        height: 31.25vh;
        background: #2c2640;
    }
    .background img {
        position: absolute;
        right: 7.5%;
    }
    .content-area-3 {
        padding: 0 7.5%;
        margin: 6.5% 0;
    }
    .content {
        display: flex;
        justify-content: space-between;
        padding: 7% 2%;
    }
    .button {
        margin-top: 2.5%;
    }
    #hidden-image {
        display: none;
    }
    @media all and (min-width: 480px) and (max-width: 1024px) {
         #image {
            display: none;
        }
        #hidden-image {
            display: block;
            right: 7.5%;
        }
        .content {
            padding: 12.5% 2%;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .background {
            height: 45vh;
        }
    }
    @media all and (max-width: 480px) { 
        #image {
            display: none;
        }
        #hidden-image {
            display: block;
            right: 7.5%;
        }
        .content {
            padding: 20% 2%;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .background {
            height: 55vh;
        }
    }
    @media all and (max-width: 295px) {
        #hidden-image {
            right: 5%;
        }
     }
    @media all and (max-width: 285px) {
        #hidden-image {
            right: 2.5%;
        }
     }
    @media all and (max-width: 285px) {
        #hidden-image {
            right: 1.5%;
        }
     }
</style>