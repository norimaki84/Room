import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Preset = { ASSET_GENERATOR: 'assetgenerator' };

class CommonGL {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.size = {
      windowWidth : null,
      windowHeight : null
    };

    this.clock = null;

    this.controls = null;

    this.time = {
      total : null,
      delta : null
    };

    this.init = this._init.bind(this);
    this.setSize = this._setSize.bind(this);
    this.onResize = this._onResize.bind(this);
    this.render = this._render.bind(this);
  }

  /**
   * 初期化
   * @param $canvas
   * @private
   */
  _init($canvas) {
    this.setSize();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.size.windowWidth / this.size.windowHeight,
      0.1,
      10000
    );
    // this.camera.position.set(0, 10, -10);
    this.camera.position.set(400, 200, 300);
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas
    });
    // this.renderer.physicallyCorrectLights = true;
    // this.renderer.outputEncoding = new THREE.sRGBEncoding;
    this.renderer.setClearColor(0xcccccc);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    let light = new THREE.AmbientLight( 0xffffff ); // soft white light
    this.scene.add( light );

    this.clock = new THREE.Clock();
    this.clock.start();

  }

  /**
   * Windowsサイズ取得
   * @private
   */
  _setSize() {
    this.size = {
      windowWidth : window.innerWidth,
      windowHeight : window.innerHeight
    }
  }

  /**
   * リサイズイベント
   * @private
   */
  _onResize() {
    this.setSize();
    this.camera.aspect = this.size.windowWidth / this.size.windowHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight);
  }

  /**
   * レンダラー
   * @private
   */
  _render() {
    this.time.delta = this.clock.getDelta();
    this.time.total += this.time.delta;

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
    // this.renderer.gammaOutput = true;
  }

}

export default new CommonGL();
