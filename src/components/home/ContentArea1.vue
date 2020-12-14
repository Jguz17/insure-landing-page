<template>
    <div class="content-area-1">
      <img id="hidden-image" src="../../../images/image-intro-desktop.jpg"/>
      <div class="content hidden-container">
        <h1 style="color: white;" class="title is-2">Humanizing Your Insurance</h1>
        <!-- <div class="content"> -->
          <p style="color: white; fontWeight: bold">Get your life insurance coverage easier and faster. We blend our expertise and technology to help
            you find the plan that's right for you. Ensure you and your loved ones are insured.
          </p>
          <button class="button is-small" style="margin-top: 2rem">VIEW PLANS</button>
          <img style="top: 49%; left: 0" src="../../../images/bg-pattern-intro-left-mobile.svg"/>
          <img style="bottom: -30%; right: 0" src="../../../images/bg-pattern-intro-right-mobile.svg"/>
        <!-- </div> -->
      </div>
      <div class="left-content-area">
        <hr/>
        <h1 style="color: white; marginTop: 4.5rem" class="title is-1">Humanizing <br/>Your Insurance</h1>
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
    .hidden-container {
      display: none;
    }
    .hidden-container img {
      position: absolute;
      width: 50%;
    }
    #hidden-image {
      display: none;
    }
     .content-area-1 {
    top: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: -35rem;
    padding: 0 7.5%;
  }
  .right-container-area {
        max-width: 50%;
  }
  .left-content-area {
    color: #fff;
    text-align: left;
    max-width: 40%;
  }
  .left-content-area hr {
    width: 200px;
  }
  .bg-pattern-intro-right-desktop {
    position: absolute;
    right: 0;
    margin-top: -5.5rem;
  }

  /* @media all and (min-width: 1024px) and (max-width: 1280px) { } */
 
  /* @media all and (min-width: 668px) and (max-width: 1024px) {
    
  }  */
  
  @media all and (min-width: 480px) and (max-width: 824px) {
    .content {
      text-align: center;
      padding: 1rem 7.5%;
      
    }
    .content-area-1 {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    .left-content-area {
      display: none;
    }
    .right-container-area {
      display: none;
    }
    #hidden-image {
      display: block;
      width: 100%;
      height: 80vh;
    }
    .hidden-container {
       width: 100%;
      height: 80vh;
      background: #2c2640;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
   } 
  
  @media all and (max-width: 480px) { 
    .content {
      text-align: center;
      padding: 1rem 7.5%;
      
    }
    .content-area-1 {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    .left-content-area {
      display: none;
    }
    .right-container-area {
      display: none;
    }
    #hidden-image {
      display: block;
      width: 100%;
      height: 85vh;
    }
    .hidden-container {
       width: 100%;
      height: 85vh;
      background: #2c2640;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 380px) {
    #hidden-image {
      height: 75vh;
    }
    .hidden-container {
      height: 75vh;
    }
  }
  @media screen and (max-width: 320px) {
    #hidden-image {
      height: 65vh;
    }
    .hidden-container {
      height: 65vh;
    }
  }
</style>