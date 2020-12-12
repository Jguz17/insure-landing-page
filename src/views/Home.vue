<template>
  <div class="home-container">
    <div class="background-1"></div>
    <ContentArea1/>
    <ContentArea2/>
    <ContentArea3/>
  </div>
</template>

<script>
import ContentArea1 from '../components/home/ContentArea1'
import ContentArea2 from '../components/home/ContentArea2'
import ContentArea3 from '../components/home/ContentArea3'

export default {
  name: 'Home',
  components: {
    ContentArea1,
    ContentArea2,
    ContentArea3,
  }
}

</script>

<style scoped>
  .background-1 {
    width: 100%;
    height: 81.5vh;
    background: #2c2640;
    z-index: 1;
  }
  @media all and (max-width: 824px) { 
    .background-1 {
      display: none;
    }
  }
</style>