<template>
  <section class="nav" aria-label="グローナビゲーション">
    <ul>
      <li aria-label="トップ">
        <nuxt-link to="/">Top</nuxt-link>
      </li>
      <li aria-label="ワーク">
        <nuxt-link to="/work">Work</nuxt-link>
      </li>
      <li aria-label="サービス">
        <nuxt-link to="/service">Service</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
	export default {
		name: "Nav",
    data () {
      return {
        current: "sphere"
      }
    },
	}
</script>

<style lang="scss" scoped>
  .nav{
    position: fixed;
    top: 100px;
    left: 0;
    padding: 20px 30px;
    h1{
      // font-weight: normal;
      font-size: 20px;
      margin-bottom: 40px;
    }
    ul{
      padding: 0;
      li{
        list-style: none;
        font-size: 18px;
        letter-spacing: 0.01em;
        margin-bottom: 20px;

        a{
          color: #000;
          text-decoration: none;
          opacity: 0.5;
          &.nuxt-link-exact-active{
            opacity: 1;
          }
          &:hover{
            opacity: 1;
          }
        }

      }
    }
  }
</style>
