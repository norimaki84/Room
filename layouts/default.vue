<template>
  <div>
    <nuxt />
    <div class="landscapeBox">
      <div class="landscapeBox__inner">
        <p>縦で視聴ください</p>
      </div>
    </div>
    <div class="pcViewBox">
      <div class="pcViewBox__inner">
        <p>PC</p>
      </div>
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  import { mapState } from 'vuex';

  export default {
    components: {
    },
    computed: {
      ...mapState(["state"]),
    },
    created () {

      // const hash = this.$route.hash;
      // if (hash && hash.match(/^#.+$/)) {
      //
      //   if (deviceType === 'pc') {
      //
      //     this.$scrollTo(hash, 500);
      //   } else {
      //     if(hash === "#cases") {
      //       this.$scrollTo(hash, 500, { offset : -70 });
      //     } else if(hash === "#products") {
      //       this.$scrollTo(hash, 500, { offset : -80 });
      //     }
      //   }
      // }
    },
    beforeMount () {
      window.addEventListener("orientationchange", this.checkOrientation, false);
      window.addEventListener("resize", this.checkDeviceType);
    },
    mounted () {
      this.checkDeviceType();
      // this.$store.dispatch('setStateData', 'index');
      // setTimeout(()=> {
        // this.$store.commit('setStateData', 'index');
      // }, 2000);
    },
    methods: {
      checkDeviceType() {
        const deviceType = this.$ua.deviceType();
        console.log('deviceType', deviceType);
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
          console.log("ランドスケープモード");
          this.viewLandscapeModal();
        } else {
          // 縦モード
          console.log("縦モード");
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
    background-color: #7f828b;
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
      background-color: rebeccapurple;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      display: none;
      opacity: 0.0;
    }
    .landscapeBox__inner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
