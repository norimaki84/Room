<template>
  <div>
    <client-only>
      <WebglCanvas></WebglCanvas>
    </client-only>
    <nuxt />
    <div class="landscapeBox">
      <div class="landscapeBox__inner">
        test
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
  import WebglCanvas from "~/components/views/webgl/WebglCanvas";
  import gsap from "gsap"

  export default {
    components: {
      WebglCanvas,
    },
    beforeMount () {
      window.addEventListener("orientationchange", this.checkOrientation, false);
    },
    mounted () {

    },
    methods: {
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
        gsap.set(".landscapeBox", { display: "block" });
        gsap.to(".landscapeBox", {
          duration: 0.4,
          opacity: 1.0,
          ease: "power2.in"
        });
      },
      hideLandscapeModal() {
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

  .landscapeBox {
    display: none;
  }

  @media screen and (max-width: 768px) {
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
