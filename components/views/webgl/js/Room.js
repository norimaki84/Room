import * as THREE from 'three/build/three.module.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import EventBus from "~/utils/event-bus";
import CommonGL from "./CommonGL";

export default class Room {
  constructor(){
    this.loader = null;

    this.init();

  }

  /**
   * Roomクラス初期化
   */
  init(){

    this.assetsLoad();

    // EventBus.$on("TRANSITION", this.onTransition.bind(this));
    //
    // this.transitionTarget = new THREE.Vector4(0, 0, 0, 0);
    //
    // this.geometry =  new THREE.BufferGeometry();
    // this.setPositions();
    // this.currentNum = 0;
    // this.uniforms = {
    //   uProgress: {
    //     value: new THREE.Vector4(0, 0, 0, 0)
    //   },
    // };
    //
    // this.material = new THREE.ShaderMaterial({
    //   uniforms: this.uniforms,
    //   vertexShader: vertexShader,
    //   fragmentShader: fragmentShader,
    //   flatShading: true,
    //   side: THREE.DoubleSide,
    //   // wireframe: true
    // });
    //
    // this.mesh = new THREE.Mesh(this.geometry, this.material);
    // this.mesh.rotation.x = Math.PI / 4;
    // CommonGL.scene.add(this.mesh);
  }

  assetsLoad() {
    //glTFの読み込み
    this.loader = new GLTFLoader();

    this.loader.load('../model/RoooLoom_v1.gltf',function(data){
      let gltf = data;
      let obj = gltf.scene;
      CommonGL.scene.add(obj);
    });
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
