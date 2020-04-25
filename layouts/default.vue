<template>
  <div>
    <WebglCanvas></WebglCanvas>
    <nuxt />
    <Nav></Nav>
  </div>
</template>

<script>
  import WebglCanvas from "~/components/views/webgl/WebglCanvas";
  import Nav from "~/components/common/Nav";
  export default {
    components: {
      WebglCanvas,
      Nav
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
</style>
