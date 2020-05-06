// import * as THREE from 'three/build/three.module.js';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import EventBus from "~/utils/event-bus";
import CommonGL from "./CommonGL";

export default class Room {
  constructor(){
    this.loader = null;

    // this.raycaster = null;
    this.rayReceiveObjects = [];
    this.mouseX = null;
    this.mouseY = null;

    this.assetsLoad = this._assetsLoad.bind(this);
    this.switchModal = this._switchModal.bind(this);
    this.onDocumentMouseDown = this._onDocumentMouseDown.bind(this);

    this.init();

  }

  /**
   * Roomクラス初期化
   */
  init(){

    this.assetsLoad();

    let touchEvent = 'ontouchend' in document ? 'touchstart' : 'mousedown';
    window.addEventListener( touchEvent, this.onDocumentMouseDown, false );
    //EventBus.$on("TRANSITION", this.onTransition.bind(this));

  }

  /**
   * glTFモデルデータ読み込み
   */
  _assetsLoad() {
    let _this = this;
    let mixer;
    //glTFの読み込み
    this.loader = new GLTFLoader();

    this.loader.load('../model/RoooLoom_v2.gltf', function(data){
      let gltf = data;
      let obj = gltf.scene;
      let animations = gltf.animations;

      // console.log(animations);
      // if(animations && animations.length) {
      //
      //   //Animation Mixerインスタンスを生成
      //   mixer = new THREE.AnimationMixer(obj);
      //
      //   //全てのAnimation Clipに対して
      //   for ( let i = 0; i < animations.length; i ++ ) {
      //     let animation = animations[i];
      //     console.log("anime" + i + " animations[i]");
      //
      //     //Animation Actionを生成
      //     let action = mixer.clipAction(animation) ;
      //
      //     //ループ設定（1回のみ）
      //     action.setLoop(THREE.LoopOnce);
      //
      //     //アニメーションの最後のフレームでアニメーションが終了
      //     action.clampWhenFinished = true;
      //
      //     //アニメーションを再生
      //     action.play();
      //   }
      // }

      for(let i = 0; i < obj.children.length; i++){

        let mesh = obj.children[i];
        // _this.rayReceiveObjects.push( obj.children[i] );
        //コンソールにMeshの名前一覧を出力。
        // console.log(mesh.name + ' x:' + mesh.position.x + ' y:' + mesh.position.y + ' z:' + mesh.position.z);
        // console.log(i, mesh);
      }

      CommonGL.scene.add(obj);
    });
  }

  /**
   * クリックされたオブジェクトから
   * イベント発火振り分け
   * @param texName
   * @private
   */
  _switchModal(texName) {
    switch (texName) {
      case 'P01':
        // console.log("P01_CLICK");
        EventBus.$emit("SWITCH_POSITION", 'About');
        break;

      case 'P02':
        // console.log("P02_CLICK");
        EventBus.$emit("SWITCH_POSITION", '1');
        break;

      case 'P03':
        // console.log("P03_CLICK");
        EventBus.$emit("SWITCH_POSITION", '2');
        break;

      case 'P04':
        // console.log("P04_CLICK");
        EventBus.$emit("SWITCH_POSITION", '3');
        break;

      case 'P05':
        // console.log("P05_CLICK");
        EventBus.$emit("SWITCH_POSITION", '4');
        break;

      case 'P06':
        // console.log("P06_CLICK");
        EventBus.$emit("SWITCH_POSITION", '5');
        break;

      case 'P07':
        // console.log("P07_CLICK");
        EventBus.$emit("SWITCH_POSITION", '6');
        break;

      case 'P08':
        // console.log("P08_CLICK");
        EventBus.$emit("SWITCH_POSITION", '7');
        break;

      case 'P09':
        // console.log("P09_CLICK");
        EventBus.$emit("SWITCH_POSITION", '8');
        break;

      case 'P10':
        // console.log("P10_CLICK");
        EventBus.$emit("SWITCH_POSITION", '9');
        break;

      case 'P11':
        // console.log("P11_CLICK");
        EventBus.$emit("SWITCH_POSITION", '11');
        break;

      case 'P12':
        // console.log("P12_CLICK");
        EventBus.$emit("SWITCH_POSITION", '10');
        break;

      default:
        break;
    }
  }

  /**
   * オブジェクトクリックイベント
   * @param event
   * @private
   */
  _onDocumentMouseDown(event) {

    let _Raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    // マウスポインタの位置座標の取得
    let x = event.clientX ? event.clientX : (event.touches[0] || event.changedTouches[0] || {}).clientX;
    let y = event.clientY ? event.clientY : (event.touches[0] || event.changedTouches[0] || {}).clientY;

    // 取得したスクリーン座標を-1〜1に正規化する（WebGLは-1〜1で座標が表現される）
    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = - (y / window.innerHeight) * 2 + 1;

    // 光線を発射
    _Raycaster.setFromCamera(mouse, CommonGL.camera);

    // 光線と交わるオブジェクトを収集
    let intersects = _Raycaster.intersectObjects(CommonGL.scene.children, true);

    // 交わるオブジェクトが１個以上の場合
    if (intersects.length > 0) {
      let objName = intersects[0].object.parent.name ? intersects[0].object.parent.name : (intersects[0].object.material || {}).name || null;
      // console.log("objName:", objName);
      // this.switchModal(objName);
    }

  }

  update(){
    // this.mesh.rotation.y += CommonGL.time.delta;
    // const easing = Math.min(1.0, 3.5 * CommonGL.time.delta);
    // this.uniforms.uProgress.value.lerp(this.transitionTarget, easing);
  }
}
