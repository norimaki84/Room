<template>
  <div class="controlBox">
    <nav class="controlBox__nav">
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 1" v-bind:class="[  activeNavItem === 1 ? 'active' : '' ]" @click="clickNav('About')">ABOUT</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 2" v-bind:class="[  activeNavItem === 2 ? 'active' : '' ]" @click="clickNav('1')"><span>No.</span>1</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 3" v-bind:class="[  activeNavItem === 3 ? 'active' : '' ]" @click="clickNav('2')"><span>No.</span>2</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 4" v-bind:class="[  activeNavItem === 4 ? 'active' : '' ]" @click="clickNav('3')"><span>No.</span>3</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 5" v-bind:class="[  activeNavItem === 5 ? 'active' : '' ]" @click="clickNav('4')"><span>No.</span>4</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 6" v-bind:class="[  activeNavItem === 6 ? 'active' : '' ]" @click="clickNav('5')"><span>No.</span>5</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 7" v-bind:class="[  activeNavItem === 7 ? 'active' : '' ]" @click="clickNav('6')"><span>No.</span>6</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 8" v-bind:class="[  activeNavItem === 8 ? 'active' : '' ]" @click="clickNav('7')"><span>No.</span>7</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 9" v-bind:class="[  activeNavItem === 9 ? 'active' : '' ]" @click="clickNav('8')"><span>No.</span>8</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 10" v-bind:class="[  activeNavItem === 10 ? 'active' : '' ]" @click="clickNav('9')"><span>No.</span>9</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 11" v-bind:class="[  activeNavItem === 11 ? 'active' : '' ]" @click="clickNav('10')"><span>No.</span>10</li>
      <li class="controlBox__nav--item" v-on:click=" activeNavItem = 12" v-bind:class="[  activeNavItem === 12 ? 'active' : '' ]" @click="clickNav('11')"><span>No.</span>11</li>
    </nav>
  </div>
</template>

<script>
  import EventBus from "~/utils/event-bus";

  export default {
    name: 'ControlBox',
    components: {

    },
    data() {
      return {
        activeNavItem: null
      }
    },
    computed: {

    },
    created () {

    },
    beforeMount () {

    },
    mounted () {

    },
    methods: {
      clickNav(canvasString) {
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

          case '11':
            EventBus.$emit("SWITCH_POSITION", '11');
            break;

          case 'About':
            EventBus.$emit("SWITCH_POSITION", 'About');
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

<style lang="scss" scoped>
  .controlBox {
    /*display: none;*/
  }

  @media screen and (max-width: 768px) {
    .controlBox {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
      border-top: get-vw(2px) solid #c0c0c0;
    }
    .controlBox__nav {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      background-color: #c0c0c0;
    }
    .controlBox__nav--item {
      @include poppinsMedium();
      width: get-vw(123px);
      height: get-vw(103px);
      font-size: get-vw(24px);
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .3s;
      span {
        font-size: get-vw(20px);
        margin-right: get-vw(10px);
        color: #c0c0c0;
      }
      &:first-child {
        font-size: get-vw(22px);
        margin-right: get-vw(2px);
        margin-bottom: get-vw(2px);
      }
      &:nth-child(2) {
        margin-right: get-vw(2px);
        margin-bottom: get-vw(2px);

      }
      &:nth-child(3) {
        margin-right: get-vw(2px);
        margin-bottom: get-vw(2px);
      }
      &:nth-child(4) {
        margin-right: get-vw(2px);
        margin-bottom: get-vw(2px);
      }
      &:nth-child(5) {
        margin-right: get-vw(2px);
        margin-bottom: get-vw(2px);
      }
      &:nth-child(6) {
        margin-bottom: get-vw(2px);
      }
      &:nth-child(7) {
        margin-right: get-vw(2px);
      }
      &:nth-child(8) {
        margin-right: get-vw(2px);
      }
      &:nth-child(9) {
        margin-right: get-vw(2px);
      }
      &:nth-child(10) {
        margin-right: get-vw(2px);
      }
      &:nth-child(11) {
        margin-right: get-vw(2px);
      }
      &:nth-child(12) {

      }
      &.active {
        background-color: #000;
        color: #fff;
        span {
          color: #c0c0c0;
        }
      }
    }
  }
</style>
