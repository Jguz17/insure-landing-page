<template>
  <div class="home-container">
    <div class="background-1"></div>
    <ContentArea1/>
    <ContentArea2/>
  </div>
</template>

<script>
import ContentArea1 from '../components/home/ContentArea1'
import ContentArea2 from '../components/home/ContentArea2'

export default {
  name: 'Home',
  components: {
    ContentArea1,
    ContentArea2,
  }
}
</script>

<style scoped>
  .background-1 {
    width: 100%;
    height: 650px;
    background: #2c2640;
    z-index: 1;
  }
</style>