<template>
  <div id="home">
    <h1> Welcome to heart help </h1>
    <p id="text1"> Our hearts work beat by beat, second by second for 24 hours a day, never resting. Over the average lifetime, our hearts beats about 2.5 billion times. Knowing that it’s one of the most vital organs keeping us alive, it’s important to treat it like the precious commodity it is.
        The number one cause of death among women and men, heart disease(like heart attack) claims approximately one million lives per year.
         </p>
    <p id="text2">
      By making smarter lifestyle choices, you can protect your heart and reduce your risk for developing life-threatening conditions.
        The more you know about your health the more power you have to stay healthy.
        Here is the quick look at your heart health.
    </p>
    <button class="button" @click = "changePage" > Get Started</button>

  </div>
</template>

<script>
import router from "../router/index.js"
export default {
  name: "Home",

  methods: {
    changePage () {
        this.$router.push('/details')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#home{
  background-color: #F5DBD6;
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;
}
#text1{
  font-family: "Roboto medium", sans-serif;
  font-size: 28px;
  padding: 20px;
  font-weight: 1px;
}
#text2{
  font-family: "Roboto medium", sans-serif;
  font-size: 28px;
  padding: 20px;
  font-weight: 1px;
}
.button{
    @extend .md-btn, .md-btn-raised;
    background: #5EA798 ;
    &:focus {
    background: darken(#5EA798, 12%)
   }
}


</style>
