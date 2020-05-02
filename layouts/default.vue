<template>
  <div>
    <client-only>
      <WebglCanvas></WebglCanvas>
    </client-only>
    <nuxt />
<!--    <Nav></Nav>-->
  </div>
</template>

<script>
  import WebglCanvas from "~/components/views/webgl/WebglCanvas";
  import Nav from "~/components/common/Nav";

  export default {
    components: {
      WebglCanvas,
      // Nav
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
html {
  /*font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',*/
  /*  Roboto, 'Helvetica Neue', Arial, sans-serif;*/
  /*font-size: 16px;*/
}

*,
*:before,
*:after {
  /*box-sizing: border-box;*/
  /*margin: 0;*/
}

.dg {
  &.ac {
    z-index: 10000;
  }
}
</style>
