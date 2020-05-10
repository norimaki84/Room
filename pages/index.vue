<template>
  <div class="container">
    <client-only>
      <WebglCanvas></WebglCanvas>
    </client-only>
    <div class="enterSection">
      <div class="enterSection__content">
        <h1 class="enterSection__mainTitle"><MainLogo></MainLogo></h1>
        <div class="enterSection__startButton">
          <p class="enterSection__startButton--text">ENTER</p>
          <div class="enterSection__startButton--border"></div>
        </div>
        <p class="enterSection__description">※注釈を何かしら入るんじゃないかな</p>
      </div>
    </div>
    <Header></Header>
    <DetailUIBox></DetailUIBox>
    <ControlBox></ControlBox>
    <DetailModal></DetailModal>
  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
  import WebglCanvas from "~/components/views/webgl/WebglCanvas";
  import MainLogo from '@/assets/svg/logo_01.svg';
  import Header from '../components/common/Header';
  import ControlBox from '../components/common/ControlBox';
  import DetailModal from '../components/common/DetailModal';
  import DetailUIBox from '../components/common/DetailUIBox';

  export default {
    components: {
      WebglCanvas,
      Header,
      ControlBox,
      MainLogo,
      DetailModal,
      DetailUIBox
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
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    z-index: 10;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      height: 100vh;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      position: relative;
      z-index: 10;
    }

    .enterSection {
      width: 100%;
      height: 100vh;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.0; // TODO
      display: none; // TODO
    }
    .enterSection__content {}
    .enterSection__mainTitle {
      width: get-vw(288px);
      height: auto;
      margin: 0 auto get-vw(185px);
      svg {
        width: 100%;
      }
    }
    .enterSection__startButton {
      text-align: center;
      margin-bottom: get-vw(158px);
    }
    .enterSection__startButton--text {
      @include poppinsMedium();
      font-size: get-vw(24px);
      margin-bottom: get-vw(29px);
      color: #000;
      line-height: 1.0;
    }
    .enterSection__startButton--border {
      width: get-vw(220px);
      height: get-vw(1px);
      margin: 0 auto;
      background-color: #000;
    }
    .enterSection__description {
      @include sansJpMedium();
      font-size: get-vw(22px);
      color: #b1b1b1;
    }
  }
</style>
