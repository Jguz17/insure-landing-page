<template>
    <div class="content-area-1">
      <div class="left-content-area">
        <hr/>
        <h1 style="color: white; marginTop: 4.5rem" class="title is-1">Humanizing Your Insurance</h1>
        <div class="content">
          <p>Get your life insurance coverage easier and faster. <br/> We blend our expertise and technology to help
            you find<br/> the plan that's right for you. Ensure you and your loved ones <br/>are insured.
          </p>
        </div>
        <button class="button is-small">VIEW PLANS</button>      
      </div>
      <div class="right-container-area">
        <img style="maxHeight: 650px" src="../../../images/image-intro-desktop.jpg"/>
        <img class="bg-pattern-intro-right-desktop" src="../../../images/bg-pattern-intro-right-desktop.svg"/>
      </div>
    </div>
</template>

<script>
export default {
    name: "ContentArea1"
}
</script>

<style scoped>
     .content-area-1 {
    top: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: -35rem;
    padding: 0 7.5rem;
  }
  .left-content-area {
    color: #fff;
    text-align: left;
  }
  .left-content-area hr {
    width: 200px;
  }
  .bg-pattern-intro-right-desktop {
    position: absolute;
    right: 0;
    margin-top: -5.5rem;
  }
</style>