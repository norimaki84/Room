<template>
  <div>
    <client-only>
      <WebglCanvas></WebglCanvas>
    </client-only>
    <nuxt />
<!--    <Nav></Nav>-->
    <div class="buttonBox">
      <nav class="nav">
        <li class="nav__item" @click="clickCanvas('1')">1</li>
        <li class="nav__item" @click="clickCanvas('2')">2</li>
        <li class="nav__item" @click="clickCanvas('3')">3</li>
        <li class="nav__item" @click="clickCanvas('4')">4</li>
        <li class="nav__item" @click="clickCanvas('5')">5</li>
        <li class="nav__item" @click="clickCanvas('6')">6</li>
        <li class="nav__item" @click="clickCanvas('7')">7</li>
        <li class="nav__item" @click="clickCanvas('8')">8</li>
        <li class="nav__item" @click="clickCanvas('9')">9</li>
        <li class="nav__item" @click="clickCanvas('10')">10</li>
        <li class="nav__item" @click="clickCanvas('title')">title</li>
        <li class="nav__item" @click="clickCanvas('Door')">Door</li>
        <li class="nav__item" @click="clickCanvas('Reset')">Reset</li>
      </nav>
    </div>

  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";
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
      clickCanvas(canvasString) {
        switch (canvasString) {
          case '1':
            EventBus.$emit("SWITCH_POSITION", '1');
            break;

          case '2':
            EventBus.$emit("SWITCH_POSITION", '2');
            break;

          case '3':
            EventBus.$emit("SWITCH_POSITION", '3');
            break;

          case '4':
            EventBus.$emit("SWITCH_POSITION", '4');
            break;

          case '5':
            EventBus.$emit("SWITCH_POSITION", '5');
            break;

          case '6':
            EventBus.$emit("SWITCH_POSITION", '6');
            break;

          case '7':
            EventBus.$emit("SWITCH_POSITION", '7');
            break;

          case '8':
            EventBus.$emit("SWITCH_POSITION", '8');
            break;

          case '9':
            EventBus.$emit("SWITCH_POSITION", '9');
            break;

          case '10':
            EventBus.$emit("SWITCH_POSITION", '10');
            break;

          case 'title':
            EventBus.$emit("SWITCH_POSITION", 'title');
            break;

          case 'Door':
            EventBus.$emit("SWITCH_POSITION", 'Door');
            break;

          case 'Reset':
            EventBus.$emit("SWITCH_POSITION", 'Reset');
            break;

          default:
            break;
        }
      }
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

  .buttonBox {
    width: auto;
    height: auto;
    font-size: get-vw(40px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    .nav {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      .nav__item {
        padding: get-vw(25px);
        font-size: get-vw(30px);
        background-color: darkgrey;
        border: 1px solid #fff;
      }
    }
  }
</style>
