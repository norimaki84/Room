<template>
  <div class="detailUIBox">
    <model-viewer
      class="reveal"
      ar
      ar-scale="fixed"
      alt="Room01"
      src="model/room1.gltf"
      ios-src="model/room1.usdz"
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
        <a :href="this.canvasArray[0].buyLink" target="_blank">
          <p class="buy__button--text">BUY</p>
          <div class="cart__icon">
            <CartButton></CartButton>
          </div>
        </a>
      </div>
    </div>
    <div class="detail__button" @click="viewModalEvent">
      <div class="detail__button--inner">
        <p class="detail__button--text">DETAIL</p>
        <div class="cart__icon">
          <DetailButton></DetailButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  import { mapState } from 'vuex';
  import EventBus from "~/utils/event-bus";
  import ArButton from '@/assets/svg/ar.svg';
  import CartButton from '@/assets/svg/cart.svg';
  import DetailButton from '@/assets/svg/detail.svg';

  export default {
    name: 'DetailUIBox',
    components: {
      ArButton,
      CartButton,
      DetailButton
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState(["state", "canvasArray"]),
      // getBuyLink(canvasNum) {
      //   return this.canvasArray[canvasNum].buyLink;
      // }
    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    methods: {
      attachEvent() {
        // イベント登録
        EventBus.$on("DETAIL_UI_VIEW", this.viewDetailUIBox);
        EventBus.$on("DETAIL_UI_HIDE", this.hideDetailUIBox);
      },
      viewDetailUIBox() {
        gsap.set(".detailUIBox", { display: "block" });
        gsap.to(".detailUIBox", {
          duration: 0.4,
          opacity: 1.0,
          ease: "power2.in"
        });
      },
      hideDetailUIBox() {
        gsap.to(".detailUIBox", {
          duration: 0.4,
          opacity: 0.0,
          ease: "power2.in",
          onComplete: ()=> {
            gsap.set(".detailUIBox", { display: "none" });
          }
        });
      },
      viewModalEvent() {
        EventBus.$emit("DETAIL_UI_VIEW");
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    .detailUIBox {
      width: get-vw(124px);
      height: get-vw(401px);
      position: fixed;
      top: get-vw(403px);
      right: 0;
      overflow: hidden;
      z-index: 100;
      /*display: none;*/
      /*opacity: 0;*/
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
        box-shadow: 0 get-vw(5px) get-vw(20px) rgba(0, 0, 0, 0.10);
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
      box-shadow: 0 get-vw(5px) get-vw(20px) rgba(0, 0, 0, 0.10);
      margin-top: get-vw(-11px);
      position: relative;
      z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buy__button--inner {
      a {
        display: block;
        width: 100%;
        height: auto;
        text-decoration: none;
      }
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
      box-shadow: 0 get-vw(5px) get-vw(20px) rgba(0, 0, 0, 0.10);
      margin-top: get-vw(-11px);
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .detail__button--inner {
      .detail__button--text {
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
  }
</style>
