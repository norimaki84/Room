<template>
  <section class="detailModal" aria-label="絵の詳細">

  </section>
</template>

<script>
	export default {
		name: "DetailModal",
    data () {
      return {
        current: "sphere"
      }
    },
	}
</script>

<style lang="scss" scoped>
  /*.detailModal{*/
  /*  width: 100%;*/
  /*  height: 100vh;*/
  /*  position: fixed;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  background-color: rgba(255, 255, 255, 0.5);*/
  /*}*/
  @media screen and (max-width: 768px) {
    .detailModal {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
</style>
