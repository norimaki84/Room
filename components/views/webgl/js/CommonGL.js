import * as THREE from "three";

import EventBus from "@/utils/event-bus";
import CameraUtils from './CameraUtils';
import LightsUtils from './LightsUtils';

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
    this.cameraControls = null;
    this.lightsUtils = null;

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
      60,
      this.size.windowWidth / this.size.windowHeight,
      1.5, // 1.5
      30000
    );

    const EPS = 1e-5;
    this.camera.position.set(0, 0, EPS);
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
      antialias: true,
      stencil: false
    });
    // this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.setClearColor(0xcccccc);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight);

    // CameraUtils初期化実行
    this.cameraControls = new CameraUtils( this.camera, this.renderer.domElement );

    // LightsUtils初期化実行
    this.lightsUtils = new LightsUtils();
    this.lightsUtils.init();

    // let axes = new THREE.AxesHelper(300);
    // this.scene.add(axes);

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

    this.cameraControls.update( this.time.delta );
    // if ( hasControlsUpdated ) {
    //   this.renderer.render(this.scene, this.camera);
    // }

    this.renderer.render(this.scene, this.camera);
    // this.renderer.gammaOutput = true;
  }

}

export default new CommonGL();
