<template>
  <div class="container">
    <div class="enterBox">

    </div>
<!--    <model-viewer-->
<!--      id="reveal"-->
<!--      ar-->
<!--      ar-scale="fixed"-->
<!--      alt="test"-->
<!--      src="/model/rooo02.gltf"-->
<!--      ios-src="/model/rooo01.usdz"-->
<!--      background-color="#70BCD1"-->
<!--      shadow-intensity="0.7"-->
<!--      quick-look-browsers="safari chrome"-->
<!--      camera-controls-->
<!--      model-visibility="false"-->
<!--      interaction-prompt="none"-->
<!--      reveal="manual"-->
<!--      ar magic-leap>-->
<!--      <button class="ar-button" slot="ar-button" style="border: none;">-->
<!--        <ArButton/>-->
<!--      </button>-->
<!--    </model-viewer>-->

<!--    <DetailModal></DetailModal>-->

    <ControlBox></ControlBox>
  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
  import ControlBox from '../components/common/ControlBox';
  import DetailModal from '../components/common/DetailModal';
  import ArButton from '@/assets/svg/ar.svg';

  export default {
    components: {
      DetailModal,
      ArButton,
      ControlBox
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

  model-viewer#reveal {
    width: get-vw(100px);
    height: get-vw(100px);
    position: fixed;
    bottom: get-vw(300px);
    left: get-vw(100px);
    z-index: 10000;
    --poster-color: transparent;
    --progress-bar-color: rgba(0, 0, 0, 0.0);
  }

  .ar-button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .fab {
      width: get-vw(40px);
      height: get-vw(40px);
      svg {
        width: 100%;
        height: auto;
      }
    }
  }


</style>
