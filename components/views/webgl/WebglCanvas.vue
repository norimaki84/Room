<template>
  <section class="webglCanvas">
    <canvas class="webglCanvas__canvas" ref="canvas"></canvas>
  </section>
</template>

<script>
  import MainCanvas from "./js/MainCanvas";
  import EventBus from "~/utils/event-bus";

	export default {
		name: "WebglCanvas",
    data() {
      return {
      }
    },
    created() {

    },
    mounted() {
		  // WebGLクラスをインスタンス化
      if(!this.mainCanvas) this.mainCanvas = new MainCanvas({
        $canvas: this.$refs.canvas
      });

    },
    watch: {
      "$route.name": function(_new, _old) {
        // URLが変わるたびに発火
        // EventBus.$emit("TRANSITION", _new);
      }
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    methods: {

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
</style>
