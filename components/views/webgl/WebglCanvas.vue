<template>
  <section class="webglCanvas">
    <canvas class="webglCanvas__canvas" ref="canvas"></canvas>
  </section>
</template>

<script>
  import gsap from "gsap";
  import EventBus from "~/utils/event-bus";
  import MainCanvas from "./js/MainCanvas";

	export default {
		name: "WebglCanvas",
    data() {
      return {
      }
    },
    watch: {
      "$route.name": function(_new, _old) {
        // URLが変わるたびに発火
        // EventBus.$emit("TRANSITION", _new);
      }
    },
    created() {

    },
    mounted() {
		  this.attachEvent();

		  // WebGLクラスをインスタンス化
      if(!this.mainCanvas) this.mainCanvas = new MainCanvas({
        $canvas: this.$refs.canvas
      });
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    methods: {
      // EventEmitter用のイベント登録
      attachEvent() {
        EventBus.$on("FADEIN_CANVAS", this.viewCanvas);
      },
      // WebGLのCanvasをフェードイン
      viewCanvas() {
        gsap.to(".webglCanvas__canvas", {
          duration: 0.8,
          opacity: 1.0,
          ease: "power2.inOut",
          onComplete: ()=> {
            EventBus.$emit("VIEW_CONTROL_BOX");
          }
        });
      }
    }
	}
</script>

<style scoped lang="scss">
  .webglCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    z-index: 1;
  }
  .webglCanvas__canvas {
    opacity: 0.0;
  }
</style>
