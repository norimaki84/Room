<template>
  <div>
    <nuxt />
    <div class="landscapeBox">
      <div class="landscapeBox__inner">
        <div class="landscapeBox__inner--content">
          <div class="landscapeBox__inner--icon">
            <LandscapeIcon></LandscapeIcon>
          </div>
          <p class="landscapeBox__inner--text">お使いのスマートフォンを縦にしてご覧ください</p>
        </div>
      </div>
    </div>
    <div class="pcViewBox">
      <div class="pcViewBox__inner">
        <div class="pcViewBox__inner--content">
          <div class="pcViewBox__inner--pcLogo"><MainLogo></MainLogo></div>
          <div class="pcViewBox__inner--Qr">
            <img src="~assets/img/qr@2x.png">
          </div>
          <p class="pcViewBox__inner--text">スマートフォンでご覧ください</p>
          <div class="pcViewBox__inner--infoBox">
            <p class="pcViewBox__inner--infoTitle">Rooo Lou website</p>
            <p class="pcViewBox__inner--infoUrl">
              <a href="https://rooolou.com/" target="_blank">
                rooolou.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  import { mapState } from 'vuex';
  import MainLogo from '@/assets/svg/logo_01.svg';
  import LandscapeIcon from '@/assets/svg/landescape.svg';

  export default {
    components: {
      MainLogo,
      LandscapeIcon
    },
    computed: {
      ...mapState(["state"]),
    },
    created () {

    },
    beforeMount () {
      window.addEventListener("orientationchange", this.checkOrientation, false);
      window.addEventListener("resize", this.checkDeviceType);
    },
    mounted () {
      this.checkDeviceType();
    },
    methods: {
      checkDeviceType() {
        const deviceType = this.$ua.deviceType();
        // console.log('deviceType', deviceType);
        if (deviceType === 'pc') {
          // console.log("pc");
          this.viewPCBox();
          this.$store.dispatch('setDeviceType', 'pc');
        } else {
          // console.log("sp");
          this.hidePCBox();
          this.$store.dispatch('setDeviceType', 'sp');
        }
      },
      viewPCBox() {
        // PCレイヤー表示
        gsap.set(".pcViewBox", { display: "block" });
      },
      hidePCBox() {
        // PCレイヤー非表示
        gsap.set(".pcViewBox", { display: "none" });
      },
      // デバイスの向きをチェック
      checkOrientation() {
        let angle;
        angle = screen && screen.orientation && screen.orientation.angle;
        if (angle == null) {
          angle = window.orientation || 0;
        }
        if(angle % 180 !== 0) {
          // ランドスケープモード
          // console.log("ランドスケープモード");
          this.viewLandscapeModal();
        } else {
          // 縦モード
          // console.log("縦モード");
          this.hideLandscapeModal();
        }
      },
      viewLandscapeModal() {
        // ランドスケープモーダル表示
        gsap.set(".landscapeBox", { display: "block" });
        gsap.to(".landscapeBox", {
          duration: 0.4,
          opacity: 1.0,
          ease: "power2.in"
        });
      },
      hideLandscapeModal() {
        // ランドスケープモーダル非表示
        gsap.to(".landscapeBox", {
          duration: 0.4,
          opacity: 0.0,
          ease: "power2.in",
          onComplete: ()=> {
            gsap.set(".landscapeBox", { display: "none" });
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .dg {
    &.ac {
      z-index: 10000;
    }
  }

  .pcViewBox {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .pcViewBox__inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pcViewBox__inner--content {
    width: 274px;
    margin: 0 auto;
  }
  .pcViewBox__inner--pcLogo {
    width: 267px;
    height: auto;
    margin: 0 auto 60px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .pcViewBox__inner--Qr {
    width: 200px;
    height: 200px;
    margin: 0 auto 38px;
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }
  .pcViewBox__inner--text {
    @include sansJpRegular();
    font-size: 16px;
    color: #000;
    text-align: center;
    line-height: 1.0;
    margin-bottom: 80px;
  }
  .pcViewBox__inner--infoBox {
    width: 100%;
  }
  .pcViewBox__inner--infoTitle {
    @include sansJpBold();
    font-size: 16px;
    color: #000;
    text-align: center;
    line-height: 1.0;
    margin-bottom: 10px;

  }
  .pcViewBox__inner--infoUrl {
    width: 95px;
    position: relative;
    @include sansJpRegular();
    font-size: 16px;
    color: #000;
    text-align: center;
    line-height: 1.0;
    transition: .3s;
    margin: 0 auto;
    &:hover {
      opacity: 0.5;
    }
    a {
      width: 100%;
      display: block;
      text-decoration: none;
      color: #000;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #000;
    }
  }

  .landscapeBox {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .pcViewBox {
      display: none;
    }

    .landscapeBox {
      width: 100%;
      height: 100vh;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      /*display: none;*/
      /*opacity: 0.0;*/
    }
    .landscapeBox__inner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .landscapeBox__inner--content {
      width: get-vw(356px);
    }
    .landscapeBox__inner--icon {
      width: get-vw(187px);
      height: auto;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .landscapeBox__inner--text {
      position: relative;
      z-index: 10;
      @include sansJpMedium();
      color: #000;
      background-color: #fff;
      width: 100%;
      font-size: get-vw(15px);
      margin-top: get-vw(-44px);
      padding: get-vw(20px) 0;
    }
  }
</style>
