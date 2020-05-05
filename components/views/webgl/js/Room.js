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
    //EventBus.$on("TRANSITION", this.onTransition.bind(this));
  }

  /**
   * glTFモデルデータ読み込み
   */
  _assetsLoad() {
    let _this = this;

    //glTFの読み込み
    this.loader = new GLTFLoader();

    this.loader.load('../model/RoooLoom_v2.gltf', function(data){
      let gltf = data;
      let obj = gltf.scene;

      for(let i = 0; i < obj.children.length; i++){

        let mesh = obj.children[i];
        // _this.rayReceiveObjects.push( obj.children[i] );
        //コンソールにMeshの名前一覧を出力。
        // console.log(i, mesh.name);
        // console.log(i, mesh);
      }

      CommonGL.scene.add(obj);
    });
  }

  /**
   * クリックされた絵から開くモーダルを振り分け
   * @param texName
   * @private
   */
  _switchModal(texName) {
    switch (texName) {
      case '1':
        console.log("1");
        break;

      case '2':
        console.log("2");
        break;

      case '3':
        console.log("3");
        break;

      case '4':
        console.log("4");
        break;

      case '5':
        console.log("5");
        break;

      case '6':
        console.log("6");
        break;

      case '7':
        console.log("7");
        break;

      case '8':
        console.log("8");
        break;

      case '9':
        console.log("9");
        break;

      case '10':
        console.log("10");
        break;

      case 'title':
        console.log("title");
        break;

      case 'Door':
        console.log("Door");
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

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    // マウスポインタの位置座標の取得
    let x = event.clientX ? event.clientX : (event.touches[0] || event.changedTouches[0] || {}).clientX;
    let y = event.clientY ? event.clientY : (event.touches[0] || event.changedTouches[0] || {}).clientY;

    // 取得したスクリーン座標を-1〜1に正規化する（WebGLは-1〜1で座標が表現される）
    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = - (y / window.innerHeight) * 2 + 1;

    // 光線を発射
    raycaster.setFromCamera(mouse, CommonGL.camera);
    // 光線と交わるオブジェクトを収集
    let intersects = raycaster.intersectObjects(CommonGL.scene.children, true);
    // 交わるオブジェクトが１個以上の場合
    if (intersects.length > 0) {
      // console.log(intersects[0].object.parent.name);
      // console.log(intersects[0].object.parent);
      let objName = intersects[0].object.parent.name ? intersects[0].object.parent.name : (intersects[0].object.material || {}).name || null;
      // console.log("name ", objName);
      this.switchModal(objName);
    }


    // マウスポインタの位置座標の取得
    // this.mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
    // this.mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // 光線を発射
    // this.raycaster.setFromCamera( this.mouse, CommonGL.camera );
    // 光線と交わるオブジェクトを収集
    // let intersects = this.raycaster.intersectObjects( this.rayReceiveObjects );

    // 連想配列をとりだす
    // let bookAry = {
    //   '火花' : 'http://www.amazon.co.jp/dp/4163902309',
    //   '流' : 'http://www.amazon.co.jp/dp/4062194856',
    //   '朝が来る' : 'http://www.amazon.co.jp/dp/4163902732',
    //   '王とサーカス' : 'http://www.amazon.co.jp/dp/4488027512',
    //   '君の膵臓をたべたい' : 'http://www.amazon.co.jp/dp/4575239054'
    // };

    // 交わるオブジェクトが１個以上の場合
    // if ( intersects.length > 0 ) {
    //   // 最も近いオブジェクトの名前をアラート表示する
    //   alert(intersects[0].object.name + "をご購入ですね？");
    //
    //   console.log("カメラ位置座標からの距離：" + intersects[0].distance);
    //   console.log("光線との交差座標(" + intersects[0].point.x + ", " + intersects[0].point.y + ", " + intersects[0].point.z + ")" );
    //   console.log(intersects[0]);
    //
    //   for(let i in bookAry){
    //     if (intersects[0].object.name == i) {
    //       window.location.href = bookAry[i];
    //     }
    //   }
    // }

  }

  /**
   * URLのパスに基づいて
   * @param path
   */
  onTransition(path){
    switch(path){
      case "index":
        // this.transitionTarget.set(1, 0, 0, 0);
        break;

      case "work":
        // this.transitionTarget.set(0, 1, 0, 0);
        break;

      case "service":
        // this.transitionTarget.set(0, 0, 1, 0);
        break;

      default:
        // this.transitionTarget.set(0, 0, 0, 1);
        break;

    }
  }

  update(){
    // this.mesh.rotation.y += CommonGL.time.delta;
    // const easing = Math.min(1.0, 3.5 * CommonGL.time.delta);
    // this.uniforms.uProgress.value.lerp(this.transitionTarget, easing);
  }
}
