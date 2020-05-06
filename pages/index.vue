<template>
  <div class="container">
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
    <div class="detailUIBox">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="test"
        src="/model/rooo02.gltf"
        ios-src="/model/rooo01.usdz"
        background-color="#70BCD1"
        shadow-intensity="0.7"
        quick-look-browsers="safari chrome"
        camera-controls
        model-visibility="false"
        interaction-prompt="none"
        reveal="manual"
        ar magic-leap>
        <button class="ar-button" slot="ar-button" style="border: none;">
          <div class="ARButton__inner">
            <p class="ARButton__text">AR</p>
            <div class="ARCamera__icon">
              <ArButton/>
            </div>
          </div>
        </button>
      </model-viewer>
      <div class="buy__button">
        <div class="buy__button--inner">
          <p class="buy__button--text">BUY</p>
          <div class="cart__icon">
            <CartButton></CartButton>
          </div>
        </div>
      </div>
      <div class="detail__button">

      </div>
    </div>

    <ControlBox></ControlBox>
    <!--    <DetailModal></DetailModal>-->
  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
  import MainLogo from '@/assets/svg/logo_01.svg';
  import Header from '../components/common/Header';
  import ControlBox from '../components/common/ControlBox';
  import DetailModal from '../components/common/DetailModal';
  import ArButton from '@/assets/svg/ar.svg';
  import CartButton from '@/assets/svg/cart.svg';
  import DetailButton from '@/assets/svg/detail.svg';

  export default {
    components: {
      Header,
      ControlBox,
      MainLogo,
      DetailModal,
      ArButton,
      CartButton,
      DetailButton
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

  .detailUIBox {
    width: get-vw(124px);
    height: get-vw(401px);
    position: fixed;
    top: get-vw(603px);
    right: get-vw(18px);
    overflow: hidden;
    background-color: yellow;
    z-index: 100;
  }

  .reveal {
    width: get-vw(140px);
    height: get-vw(140px);
    position: relative;
    z-index: 1;
    --poster-color: transparent;
    --progress-bar-color: rgba(0, 0, 0, 0.0);
    .ar-button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .ARButton__inner {
        margin-top: get-vw(-5px);
        .ARButton__text {
          @include poppinsMedium();
          font-size: get-vw(22px);
          color: #000;
          line-height: 1.0;
          /*margin-bottom: get-vw(15px);*/
        }
        .ARCamera__icon {
          width: get-vw(33px);
          height: get-vw(27px);
          margin: 0 auto;
          svg {
            width: 100%;
            height: auto;
          }
        }
      }

      .fab {

        background-color: rebeccapurple;
        svg {
          width: get-vw(33px);
          height: get-vw(26px);
          /*width: 100%;*/
          /*height: auto;*/
        }
      }
    }
  }
  .buy__button {
    width: get-vw(140px);
    height: get-vw(140px);
    border-radius: 50%;
    background-color: #fff;
    margin-top: get-vw(-11px);
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buy__button--inner {
    .buy__button--text {
      @include poppinsMedium();
      font-size: get-vw(22px);
      color: #000;
      line-height: 1.0;
      margin-bottom: get-vw(13px);
    }
    .cart__icon {
      width: get-vw(32px);
      height: get-vw(36px);
      margin: auto;
      svg {
        width: 100%;
        height: auto;
      }
    }
  }
  .detail__button {
    width: get-vw(140px);
    height: get-vw(140px);
    border-radius: 50%;
    background-color: #fff;
    margin-top: get-vw(-11px);
    position: relative;
    z-index: 10;
  }

</style>
