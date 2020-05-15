<template>
  <div class="detailUIBox" :style="{'top': this._innerHeight + 'px'}">
    <!---->
    <div class="model-viewerWrap">
      <div class="model-viewer01" v-bind:class="{ active01: isActive01 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="Room"
          src="model/room01.glb"
          ios-src="model/room01.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer02" v-bind:class="{ active02: isActive02 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="hope"
          src="model/room02.glb"
          ios-src="model/room02.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer03" v-bind:class="{ active03: isActive03 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="self"
          src="model/room03.glb"
          ios-src="model/room03.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer04" v-bind:class="{ active04: isActive04 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="some more"
          src="model/room04.glb"
          ios-src="model/room04.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer05" v-bind:class="{ active05: isActive05 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="NEW HOPE"
          src="model/room05.glb"
          ios-src="model/room05.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer06" v-bind:class="{ active06: isActive06 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="trivial"
          src="model/room06.glb"
          ios-src="model/room06.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer07" v-bind:class="{ active07: isActive07 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="MMS"
          src="model/room07.glb"
          ios-src="model/room07.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer08" v-bind:class="{ active08: isActive08 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="BOY"
          src="model/room08.glb"
          ios-src="model/room08.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer09" v-bind:class="{ active09: isActive09 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="GIRL"
          src="model/room09.glb"
          ios-src="model/room09.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer10" v-bind:class="{ active10: isActive10 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="1/365"
          src="model/room10.glb"
          ios-src="model/room10.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
      <div class="model-viewer11" v-bind:class="{ active11: isActive11 }">
        <model-viewer
          class="reveal"
          ar
          ar-scale="fixed"
          alt="Home"
          src="model/room11.glb"
          ios-src="model/room11.usdz"
          background-color="#70BCD1"
          shadow-intensity="0.7"
          quick-look-browsers="safari chrome"
          camera-controls
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
      </div>
    </div>
    <!---->
    <div class="buy__button">
      <div class="buy__button--inner">
        <a :href="this.buyLink" target="_blank">
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
        buyLink : '',
        isDetailUIBox : false,
        isActive01 : false,
        isActive02 : false,
        isActive03 : false,
        isActive04 : false,
        isActive05 : false,
        isActive06 : false,
        isActive07 : false,
        isActive08 : false,
        isActive09 : false,
        isActive10 : false,
        isActive11 : false,
        _innerHeight: 0
      }
    },
    computed: {
      ...mapState(["state", "canvasArray"])
    },
    created() {
      this._innerHeight = window.innerHeight / 2;
    },
    beforeMount() {
    },
    mounted() {
      this.attachEvent();
    },
    methods: {
      // EventEmitter用のイベント登録
      attachEvent() {
        EventBus.$on("DETAIL_UI_VIEW", this.viewDetailUIBox);
        EventBus.$on("DETAIL_UI_HIDE", this.hideDetailUIBox);
        EventBus.$on("VIEW_CHANGE_DETAIL_UI", this.viewChangeDetailUIBox);
        EventBus.$on("CHECK_DETAIL_UI_BOX", this.checkDetailUIBox);
        EventBus.$on("CHANGE_MODEL_VIEWER", this.changeModelViewerStatus);
        EventBus.$on("SET_BUY_LINK", this.setBuyLink);
      },
      changeModelViewerStatus(canvasNum) {
        this.isActive01 = false;
        this.isActive02 = false;
        this.isActive03 = false;
        this.isActive04 = false;
        this.isActive05 = false;
        this.isActive06 = false;
        this.isActive07 = false;
        this.isActive08 = false;
        this.isActive09 = false;
        this.isActive10 = false;
        this.isActive11 = false;

        switch (canvasNum) {
          case '1':
            this.isActive01 = true;
            break;

          case '2':
            this.isActive02 = true;
            break;

          case '3':
            this.isActive03 = true;
            break;

          case '4':
            this.isActive04 = true;
            break;

          case '5':
            this.isActive05 = true;
            break;

          case '6':
            this.isActive06 = true;
            break;

          case '7':
            this.isActive07 = true;
            break;

          case '8':
            this.isActive08 = true;
            break;

          case '9':
            this.isActive09 = true;
            break;

          case '10':
            this.isActive10 = true;
            break;

          case '11':
            this.isActive11 = true;
            break;

          default:
            break;
        }
      },
      checkDetailUIBox() {
        if(this.isDetailUIBox) {

        } else {
          this.viewDetailUIBox();
        }
      },
      viewChangeDetailUIBox() {
        if(!this.isDetailUIBox) {
          this.viewDetailUIBox();
        } else {
          let tl = gsap.timeline();
          tl
            .to('.detailUIBox', {
              duration: 0.4,
              opacity: 0.0,
              y: 0,
              ease: "power2.in"
            })
            .to('.detailUIBox', {
              duration: 0.4,
              opacity: 1.0,
              ease: "power2.inOut",
              onComplete: ()=>{
                if(!this.isDetailUIBox) {
                  this.isDetailUIBox = true;
                }
              }
            });
        }
      },
      viewDetailUIBox() {
        gsap.set(".detailUIBox", { display: "block" });
        gsap.to(".detailUIBox", {
          delay: 1.5,
          duration: 0.4,
          opacity: 1.0,
          ease: "power2.in",
          onComplete: ()=> {
            this.isDetailUIBox = true;
          }
        });
      },
      hideDetailUIBox() {
        gsap.to(".detailUIBox", {
          duration: 0.4,
          opacity: 0.0,
          ease: "power2.in",
          onComplete: ()=> {
            // gsap.set(".detailUIBox", { display: "none" });
            this.isDetailUIBox = false;
          }
        });
      },
      viewModalEvent() {
        EventBus.$emit("MODAL_BOX_VIEW");
      },
      setBuyLink(stateName) {
        switch (stateName) {
          case 'room01':
            this.buyLink = this.canvasArray[0].buyLink;
            break;

          case 'room02':
            this.buyLink = this.canvasArray[1].buyLink;
            break;

          case 'room03':
            this.buyLink = this.canvasArray[2].buyLink;
            break;

          case 'room04':
            this.buyLink = this.canvasArray[3].buyLink;
            break;

          case 'room05':
            this.buyLink = this.canvasArray[4].buyLink;
            break;

          case 'room06':
            this.buyLink = this.canvasArray[5].buyLink;
            break;

          case 'room07':
            this.buyLink = this.canvasArray[6].buyLink;
            break;

          case 'room08':
            this.buyLink = this.canvasArray[7].buyLink;
            break;

          case 'room09':
            this.buyLink = this.canvasArray[8].buyLink;
            break;

          case 'room10':
            this.buyLink = this.canvasArray[9].buyLink;
            break;

          case 'room11':
            this.buyLink = this.canvasArray[10].buyLink;
            break;

          default:
            break;
        }
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
      right: 0;
      z-index: 100;
      margin-top: get-vw(-200px);
      opacity: 0.0;
    }

    .model-viewerWrap {
      width: get-vw(140px);
      height: get-vw(140px);
      position: relative;
      z-index: 1;
      .model-viewer01 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active01 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer02 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active02 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer03 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active03 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer04 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active04 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer05 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active05 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer06 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active06 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer07 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active07 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer08 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active08 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer09 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active09 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer10 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active10 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
      .model-viewer11 {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0.0;
        &.active11 {
          pointer-events: auto;
          opacity: 1.0;
        }
      }
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
          margin-top: get-vw(-30px);
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
      margin-top: get-vw(-15px);
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
        margin-bottom: get-vw(8px);
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
      margin-top: get-vw(-15px);
      .detail__button--text {
        @include poppinsMedium();
        font-size: get-vw(22px);
        color: #000;
        line-height: 1.0;
        margin-bottom: get-vw(8px);
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
