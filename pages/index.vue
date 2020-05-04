<template>
  <div class="container">

    <model-viewer
      ar
      ar-scale="fixed"
      alt="test"
      src="/model/rooo02.gltf"
      ios-src="/model/rooo01.usdz"
      style="width:100%;height:100%;"
      background-color="#70BCD1"
      shadow-intensity="0.7"
      camera-controls
      interaction-prompt="auto"
      interaction-prompt-display="none"
      auto-rotate ar magic-leap>
      <button slot="ar-button" style="background-color: white; border-radius: 4px; border: none; position: absolute; top: 16px; right: 16px; ">
        👋 Activate AR
      </button>
    </model-viewer>

<!--    <DetailModal></DetailModal>-->

  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
  import DetailModal from '../components/common/DetailModal';

  export default {
    components: {
      DetailModal
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
    height: auto;
    /*height: 100vh;*/
    /*min-height: 100vh;*/
    /*min-height: -webkit-fill-available;*/
    position: relative;
    z-index: 10;
  }

  model-viewer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background-color: orange;
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
