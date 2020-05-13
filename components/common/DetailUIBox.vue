<template>
  <div class="detailUIBox">
    <!---->
    <div class="model-viewerWrap" v-if="this.state === 'room01'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room01"
        src="model/room01.glb"
        ios-src="model/room01.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room02'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room02"
        src="model/room02.glb"
        ios-src="model/room02.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room03'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room03"
        src="model/room03.glb"
        ios-src="model/room03.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room04'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room04"
        src="model/room04.glb"
        ios-src="model/room04.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room05'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room05"
        src="model/room05.glb"
        ios-src="model/room05.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room06'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room06"
        src="model/room06.glb"
        ios-src="model/room06.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room07'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room07"
        src="model/room07.glb"
        ios-src="model/room07.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room08'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room08"
        src="model/room08.glb"
        ios-src="model/room08.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room09'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room09"
        src="model/room09.glb"
        ios-src="model/room09.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room10'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room10"
        src="model/room10.glb"
        ios-src="model/room10.usdz"
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
    </div>
    <div class="model-viewerWrap" v-if="this.state === 'room11'">
      <model-viewer
        class="reveal"
        ar
        ar-scale="fixed"
        alt="Room11"
        src="model/room11.glb"
        ios-src="model/room11.usdz"
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
        isDetailUIBox : false
      }
    },
    computed: {
      ...mapState(["state", "canvasArray"])
    },
    created() {

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
        EventBus.$on("SET_BUY_LINK", this.setBuyLink);
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
      top: get-vw(403px);
      right: 0;
      z-index: 100;
      display: none;
      opacity: 0;
    }

    .model-viewerWrap {

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
