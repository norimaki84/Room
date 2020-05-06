<template>
  <div class="header" aria-label="グローバルヘッダー">
    <div class="header__inner">
      <div class="header__twitterButton">
        <a href="#" target="_blank">
          <img src="~assets/img/btn_tw@2x.png">
        </a>
      </div>
      <div class="header__logo">
        <HeaderLogo></HeaderLogo>
      </div>
      <div class="header__eclink">
        <a href="https://exhroom.thebase.in/" target="_blank">
          <p class="header__eclink--text">GOODS</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderLogo from '@/assets/svg/logo_02.svg';
	export default {
		name: "Header",
    components: {
      HeaderLogo
    },
    data () {
      return {

      }
    },
	}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: auto;
    position: fixed;
    top: get-vw(50px);
    left: 0;
    z-index: 10;
  }
  .header__inner {
    width: get-vw(668px);
    height: get-vw(37px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  }
  .header__twitterButton {
    width: get-vw(38px);
    height: get-vw(31.5px);
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .header__logo {
    width: get-vw(142px);
    height: auto;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    svg {
      width: 100%;
      height: auto;
    }
  }
  .header__eclink {
    margin-left: auto;
    a {
      display: block;
      width: 100%;
      height: auto;
      text-decoration: none;
      .header__eclink--text {
        @include poppinsMedium();
        font-size: get-vw(24px);
        color: #000;
      }
    }
  }
</style>
