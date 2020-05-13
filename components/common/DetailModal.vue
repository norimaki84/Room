<template>
  <section class="detailModal" aria-label="絵の詳細">
    <div class="detailModal__inner">
      <dl class="detailModal__titleBox">
        <dt class="detailModal__titleBox--Tag">TITLE :</dt>
        <dd class="detailModal__titleBox--Text">{{ this.canvasArray[this.getState].detail.title }}</dd>
      </dl>
      <div class="dlWrap">
        <dl class="detailModal__sizeBox">
          <dt class="detailModal__sizeBox--Tag">SIZE :</dt>
          <dd class="detailModal__sizeBox--Text">{{ this.canvasArray[this.getState].detail.size }}</dd>
        </dl>
        <dl class="detailModal__editionBox">
          <dt class="detailModal__editionBox--Tag">EDITION :</dt>
          <dd class="detailModal__editionBox--Text">{{ this.canvasArray[this.getState].detail.edition }}</dd>
        </dl>
      </div>
    </div>
    <button class="close__button" @click="closeModal" type="button">
      <div class="close__button--inner">
        <p class="close__button--text">CLOSE</p>
        <div class="close__button--icon">
          <img src="~assets/img/btn_close@2x.png">
        </div>
      </div>
    </button>
  </section>
</template>

<script>
  import gsap from "gsap";
  import { mapState } from 'vuex';
  import EventBus from "~/utils/event-bus";

	export default {
		name: "DetailModal",
    computed: {
      ...mapState(["state", "canvasArray"]),
      getState() {
        let modalNum = null;
        switch (this.state) {
          case 'room01':
            modalNum = 0;
            break;

          case 'room02':
            modalNum = 1;
            break;

          case 'room03':
            modalNum = 2;
            break;

          case 'room04':
            modalNum = 3;
            break;

          case 'room05':
            modalNum = 4;
            break;

          case 'room06':
            modalNum = 5;
            break;

          case 'room07':
            modalNum = 6;
            break;

          case 'room08':
            modalNum = 7;
            break;

          case 'room09':
            modalNum = 8;
            break;

          case 'room10':
            modalNum = 9;
            break;

          case 'room11':
            modalNum = 10;
            break;

          default:
            break;
        }
        return modalNum;
      }
    },
    data () {
      return {

      }
    },
    mounted () {
		  this.attachEvent();
      gsap.set(".detailModal", { display: "none", opacity: 0.0 });
    },
    methods: {
      // EventEmitter用のイベント登録
      attachEvent() {
        EventBus.$on("MODAL_BOX_VIEW", this.viewModal);
      },
      // モーダルを表示
      viewModal() {
        gsap.set(".detailModal", { display: "block" });
        gsap.to(".detailModal", {
          duration: 0.3,
          opacity: 1.0,
          ease: "power2.in"
        });
      },
      // モーダルを非表示
		  closeModal() {
        gsap.to(".detailModal", {
          duration: 0.3,
          opacity: 0.0,
          ease: "power2.in",
          onComplete: ()=> {
            gsap.set(".detailModal", { display: "none" });
          }
        });
      }
    }
	}
</script>

<style lang="scss" scoped>
  .detailModal{
    display: none;
  }
  @media screen and (max-width: 768px) {
    .detailModal {
      width: 100%;
      height: get-vw(212px);
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 100;
    }
    .detailModal__inner {
      width: 100%;
      height: 100%;
      position: relative;
      @include poppinsMedium();
    }
    .detailModal__titleBox {
      width: get-vw(683px);
      margin: get-vw(68px) auto get-vw(40px);
      display: flex;
      align-items: center;
    }
    .detailModal__titleBox--Tag {
      width: get-vw(62px);
      text-align: right;
      line-height: 1.0;
      color: #4e4e4e;
      font-size: get-vw(22px);
    }
    .detailModal__titleBox--Text {
      line-height: 1.0;
      color: #fff;
      font-size: get-vw(32px);
      margin-left: get-vw(18px);
    }
    .dlWrap {
      width: get-vw(683px);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .detailModal__sizeBox {
      width: get-vw(270px);
      margin: 0;
      display: flex;
      align-items: center;
    }
    .detailModal__sizeBox--Tag {
      width: get-vw(62px);
      text-align: right;
      line-height: 1.0;
      color: #4e4e4e;
      font-size: get-vw(22px);
    }
    .detailModal__sizeBox--Text {
      width: get-vw(200px);
      line-height: 1.0;
      color: #fff;
      font-size: get-vw(22px);
      margin-left: get-vw(18px);
    }
    .detailModal__editionBox {
      width: get-vw(254px);
      margin: 0 0 0 get-vw(40px);
      display: flex;
      align-items: center;
    }
    .detailModal__editionBox--Tag {
      /*width: get-vw(62px);*/
      line-height: 1.0;
      color: #4e4e4e;
      font-size: get-vw(22px);
    }
    .detailModal__editionBox--Text {
      line-height: 1.0;
      color: #fff;
      font-size: get-vw(22px);
      margin-left: get-vw(18px);
    }
    .close__button {
      width: get-vw(127px);
      height: get-vw(27px);
      position: absolute;
      top: get-vw(30px);
      right: get-vw(39px);
    }
    .close__button--inner {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
    }
    .close__button--text {
      @include poppinsMedium();
      font-size: get-vw(22px);
      margin-right: get-vw(22px);
    }
    .close__button--icon {
      width: get-vw(26px);
      height: get-vw(27px);
      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }
</style>
