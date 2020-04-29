<template>
  <div class="container">
<!--    <div class="buttonBox">-->
<!--      <a rel='ar' href="/model/rooo02.usdz" >-->
<!--        <img src="~/assets/img/dog.jpg" alt="">-->
<!--      </a>-->
<!--    </div>-->

<!--    <model-viewer-->
<!--      ar-->
<!--      ar-scale="fixed"-->
<!--      alt=""-->
<!--      src="/model/rooo01.glb"-->
<!--      ios-src="/model/rooo01.usdz"-->

<!--      background-color="#70BCD1"-->
<!--      shadow-intensity="0.7"-->
<!--      camera-controls-->
<!--      interaction-prompt="auto"-->
<!--      auto-rotate ar magic-leap-->
<!--    >-->
<!--    </model-viewer>-->
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
  }

  model-viewer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  .buttonBox {
   width: get-vw(200px);
    height: get-vw(200px);
    font-size: get-vw(40px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rebeccapurple;
    a {
      width: 100%;
      height: 100%;
      display: block;
      img {
        width: 100%;
      }
    }
  }

  .title {
    @include sansJpBold();
    display: block;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>
