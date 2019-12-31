<template>
  <div class="about">

    <button v-on:click="toggle">{{action}}</button>

    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>



  </div>
</template>

<script>
  import Dynamic1 from "./Dynamic1";
  import Dynamic2 from "./Dynamic2";
  import CustomButton from "./CustomButton";
export default {
  name: 'about',
  components:{
    Dynamic1,
    Dynamic2,
    CustomButton
  },data (){
    return {
      component:"Dynamic2",
      action:"login"
    }
  },
  methods: {
    toggle(){
      if (this.component === Dynamic1) {
        this.component = Dynamic2;
        this.action="login"
      } else {
        this.component = Dynamic1;
        this.action="signup"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
  padding:10px 20px;
  margin: 30px 10px;
}
</style>
