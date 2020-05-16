<template>
  <div class="container">
    <client-only>
      <WebglCanvas v-if="this.getDeviceType === 'sp'"></WebglCanvas>
    </client-only>
    <div class="enterSection">
      <div class="enterSection__content">
        <h1 class="enterSection__mainTitle"><MainLogo></MainLogo></h1>
        <div class="enterSection__startButton" @click="hideEnterSection">
          <p class="enterSection__startButton--text">ENTER</p>
          <div class="enterSection__startButton--border">
            <div class="enterSection__startButton--inner"></div>
          </div>
          <div class="c-scrolldown">
            <div class="c-line" v-bind:class="{ animationActive : isAnimation }"></div>
          </div>
        </div>
        <p class="enterSection__description">
          - 動作推奨環境 -<br>
          iOS：iOS12以降で最新版Safari<br>
          Android：Android8.0以降で最新版Chrome<br>
          ※AR表示は機能対応端末のみとなります<br>
          ※視聴環境によっては正常に動作しない可能性があります</p>
      </div>
    </div>
    <Header></Header>
    <DetailUIBox></DetailUIBox>
    <ControlBox></ControlBox>
    <DetailModal></DetailModal>
  </div>
</template>

<script>
  import gsap from "gsap";
  import EventBus from "~/utils/event-bus";
  import { mapState } from 'vuex';
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
        tlBorderLoopAnimation : null,
        isAnimation : false
      }
    },
    computed: {
      ...mapState(["state", "deviceType"]),
      getDeviceType() {
        return this.deviceType;
      }
    },
    created() {

    },
    beforeMount() {

    },
    mounted() {
      this.domInit();
      setTimeout(()=>{
        this.openingEnterSectionAnimation();
      }, 1000);
    },
    methods: {
      domInit() {
        gsap.set(".enterSection__mainTitle", { opacity: 0.0 });
        gsap.set(".enterSection__startButton", { opacity: 0.0 });
        gsap.set(".enterSection__description", { opacity: 0.0 });
      },
      // エンターセクションを表示
      openingEnterSectionAnimation() {
        let tl = gsap.timeline();
        tl
          .to('.enterSection__mainTitle', {
            duration: 1.0,
            opacity: 1.0,
            ease: "power2.inOut"
          })
          .to('.enterSection__startButton', {
            duration: 1.0,
            opacity: 1.0,
            ease: "power2.inOut"
          }, "-=0.6")
          .to('.enterSection__description', {
            duration: 1.0,
            opacity: 1.0,
            ease: "power2.inOut",
            onComplete: ()=> {
              // this.borderLoopAnimationStart();
              this.isAnimation = true;
            }
          }, "-=0.6");
      },
      // エンターセクションを非表示
      hideEnterSection() {
        let tl = gsap.timeline();
        tl
          .to('.enterSection__mainTitle', {
            duration: 1.0,
            opacity: 0.0,
            ease: "power2.in"
          })
          .to('.enterSection__startButton', {
            duration: 1.0,
            opacity: 0.0,
            ease: "power2.in",
            onComplete: ()=> {
              EventBus.$emit("SWITCH_RENDER");
              setTimeout(()=> {
                this.isAnimation = false;
              }, 1000);
            }
          }, "-=1.0")
          .to('.enterSection__description', {
            duration: 1.0,
            opacity: 0.0,
            ease: "power2.in"
          }, "-=1.0")
          .to('.enterSection', {
            duration: 1.0,
            opacity: 0.0,
            ease: "power2.in",
            onComplete: ()=> {
              gsap.set(".enterSection", { display: "none" });
              EventBus.$emit("FIRST_CAMERA_ANIMATION");
              EventBus.$emit("FADEIN_CANVAS");
            }
          });
      }
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
    overflow: hidden;
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
      /*opacity: 0.0; // TODO*/
      /*display: none; // TODO*/
    }
    .enterSection__content {}
    .enterSection__mainTitle {
      width: get-vw(330px);
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
      position: relative;
      .enterSection__startButton--inner {
        width: 100%;
        height: 100%;
        background-color: #000;
        will-change: transform;
        transform: scaleX(0);
      }
    }

    $line-width: get-vw(200px);
    $line-width-abs: get-vw(-200px);
    .c-scrolldown {
      width: $line-width;
      height: 1px;
      margin: 0 auto;
      overflow: hidden;
      .c-line {
        width: 100%;
        height: 100%;
        display: block;
        will-change: background-position, background-size;
        /*will-change: background-position;*/
        background: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%);
        background-position: $line-width-abs 0;
        background-size: 200% 100%;
        &.animationActive {
          animation: scrolldown 2.5s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
        }
      }
    }
    @keyframes scrolldown {
      45%{
        background-position: 0 0;
      }
      45%{
        background-position: $line-width-abs 0;
      }
      75% {
        background-position: 0 0;
      }
      100%{
        background-position: $line-width 0;
      }
    }


    .enterSection__description {
      @include sansJpMedium();
      font-size: get-vw(20px);
      color: #c5c5c5;
      text-align: center;
      line-height: 1.6;
    }
  }
</style>
