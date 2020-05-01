import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as dat from 'dat.gui';
import EventBus from "@/utils/event-bus";
import CameraUtils from './CameraUtils';

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

    this.time = {
      total : null,
      delta : null
    };

    this.gui = null;
    this.spotLight01 = null;
    this.spotLight02 = null;
    this.spotLight03 = null;
    this.spotLight04 = null;
    this.spotLight05 = null;
    this.spotLight06 = null;
    this.spotLight07 = null;
    this.spotLight08 = null;
    this.spotLight09 = null;
    this.spotLight10 = null;
    this.spotLightHelper = null;
    this.renderGuI = this._renderGuI.bind(this);

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
    this.renderer.setClearColor(0xcccccc);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight);

    // CameraUtils初期化実行
    this.cameraControls = new CameraUtils( this.camera, this.renderer.domElement );

    // let light = new THREE.AmbientLight( 0x404040, 0.9 ); // soft white light
    // let light = new THREE.AmbientLight( 0x404040, 0.9 ); // soft white light
    let light = new THREE.AmbientLight( 0xe5e5e5, 0.5 ); // soft white light
    this.scene.add( light );

    let spotLightColor = 0xbdffd7;

    this.spotLight01 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight01.position.set( 150, 383, 679 );
    this.spotLight01.target.position.set( 150, 150, 742 );
    this.spotLight01.target.updateMatrixWorld();
    this.spotLight01.shadow.mapSize.width = 1024;
    this.spotLight01.shadow.mapSize.height = 1024;
    this.spotLight01.shadow.camera.near = 500;
    this.spotLight01.shadow.camera.far = 4000;
    this.spotLight01.shadow.camera.fov = 30;
    this.scene.add( this.spotLight01 );
    let spotLightHelper01 = new THREE.SpotLightHelper( this.spotLight01 );
    this.scene.add(  spotLightHelper01 );

    this.spotLight02 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight02.position.set( -150, 383, 679 );
    this.spotLight02.target.position.set( -150, 150, 742 );
    this.spotLight02.target.updateMatrixWorld();
    this.spotLight02.shadow.mapSize.width = 1024;
    this.spotLight02.shadow.mapSize.height = 1024;
    this.spotLight02.shadow.camera.near = 500;
    this.spotLight02.shadow.camera.far = 4000;
    this.spotLight02.shadow.camera.fov = 30;
    this.scene.add( this.spotLight02 );
    let spotLightHelper02 = new THREE.SpotLightHelper( this.spotLight02 );
    this.scene.add(  spotLightHelper02 );

    this.spotLight03 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight03.position.set( -430, 383, 400 );
    this.spotLight03.target.position.set( -493, 150, 400 );
    this.spotLight03.target.updateMatrixWorld();
    this.spotLight03.shadow.mapSize.width = 1024;
    this.spotLight03.shadow.mapSize.height = 1024;
    this.spotLight03.shadow.camera.near = 500;
    this.spotLight03.shadow.camera.far = 4000;
    this.spotLight03.shadow.camera.fov = 30;
    this.scene.add( this.spotLight03 );
    let spotLightHelper03 = new THREE.SpotLightHelper( this.spotLight03 );
    this.scene.add(  spotLightHelper03 );

    this.spotLight04 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight04.position.set( -430, 383, 100 );
    this.spotLight04.target.position.set( -493, 150, 100 );
    this.spotLight04.target.updateMatrixWorld();
    this.spotLight04.shadow.mapSize.width = 1024;
    this.spotLight04.shadow.mapSize.height = 1024;
    this.spotLight04.shadow.camera.near = 500;
    this.spotLight04.shadow.camera.far = 4000;
    this.spotLight04.shadow.camera.fov = 30;
    this.scene.add( this.spotLight04 );
    let spotLightHelper04 = new THREE.SpotLightHelper( this.spotLight04 );
    this.scene.add(  spotLightHelper04 );

    this.spotLight05 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight05.position.set( -430, 383, -200 );
    this.spotLight05.target.position.set( -493, 150, -200 );
    this.spotLight05.target.updateMatrixWorld();
    this.spotLight05.shadow.mapSize.width = 1024;
    this.spotLight05.shadow.mapSize.height = 1024;
    this.spotLight05.shadow.camera.near = 500;
    this.spotLight05.shadow.camera.far = 4000;
    this.spotLight05.shadow.camera.fov = 30;
    this.scene.add( this.spotLight05 );
    let spotLightHelper05 = new THREE.SpotLightHelper( this.spotLight05 );
    this.scene.add(  spotLightHelper05 );


    this.spotLight06 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight06.position.set( -430, 383, -500 );
    this.spotLight06.target.position.set( -493, 150, -500 );
    this.spotLight06.target.updateMatrixWorld();
    this.spotLight06.shadow.mapSize.width = 1024;
    this.spotLight06.shadow.mapSize.height = 1024;
    this.spotLight06.shadow.camera.near = 500;
    this.spotLight06.shadow.camera.far = 4000;
    this.spotLight06.shadow.camera.fov = 30;
    this.scene.add( this.spotLight06 );
    let spotLightHelper06 = new THREE.SpotLightHelper( this.spotLight06 );
    this.scene.add(  spotLightHelper06 );

    this.spotLight07 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight07.position.set( -150, 383, -679 );
    this.spotLight07.target.position.set( -150, 150, -742 );
    this.spotLight07.target.updateMatrixWorld();
    this.spotLight07.shadow.mapSize.width = 1024;
    this.spotLight07.shadow.mapSize.height = 1024;
    this.spotLight07.shadow.camera.near = 500;
    this.spotLight07.shadow.camera.far = 4000;
    this.spotLight07.shadow.camera.fov = 30;
    this.scene.add( this.spotLight07 );
    let spotLightHelper07 = new THREE.SpotLightHelper( this.spotLight07 );
    this.scene.add(  spotLightHelper07 );


    this.spotLight08 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.35, 0.5, 1.6);
    this.spotLight08.position.set( 150, 383, -679 );
    this.spotLight08.target.position.set( 150, 150, -742 );
    this.spotLight08.target.updateMatrixWorld();
    this.spotLight08.shadow.mapSize.width = 1024;
    this.spotLight08.shadow.mapSize.height = 1024;
    this.spotLight08.shadow.camera.near = 500;
    this.spotLight08.shadow.camera.far = 4000;
    this.spotLight08.shadow.camera.fov = 30;
    this.scene.add( this.spotLight08 );
    let spotLightHelper08 = new THREE.SpotLightHelper( this.spotLight08 );
    this.scene.add( spotLightHelper08 );

    this.spotLight09 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.27, 0.5, 1.6);
    this.spotLight09.position.set( 362, 557, -550 );
    this.spotLight09.target.position.set( 440, 220, -550 );
    this.spotLight09.target.updateMatrixWorld();
    this.spotLight09.shadow.mapSize.width = 1024;
    this.spotLight09.shadow.mapSize.height = 1024;
    this.spotLight09.shadow.camera.near = 500;
    this.spotLight09.shadow.camera.far = 4000;
    this.spotLight09.shadow.camera.fov = 30;
    this.scene.add( this.spotLight09 );
    this.spotLightHelper = new THREE.SpotLightHelper( this.spotLight09 );
    this.scene.add( this.spotLightHelper );

    this.spotLight10 = new THREE.SpotLight( spotLightColor, 1.1, 1283, 0.27, 0.5, 1.6);
    this.spotLight10.position.set( 362, 557, -300 );
    this.spotLight10.target.position.set( 440, 220, -300 );
    this.spotLight10.target.updateMatrixWorld();
    this.spotLight10.shadow.mapSize.width = 1024;
    this.spotLight10.shadow.mapSize.height = 1024;
    this.spotLight10.shadow.camera.near = 500;
    this.spotLight10.shadow.camera.far = 4000;
    this.spotLight10.shadow.camera.fov = 30;
    this.scene.add( this.spotLight10 );


    let axes = new THREE.AxesHelper(300);
    this.scene.add(axes);

    this.clock = new THREE.Clock();
    this.clock.start();

    // this.buildGui();
  }

  buildGui() {
    let _this = this;
    this.gui = new dat.GUI();

    let params = {
      'light color': this.spotLight09.color.getHex(),
      positionX : this.spotLight09.position.x,
      positionY : this.spotLight09.position.y,
      positionZ : this.spotLight09.position.z,
      intensity: this.spotLight09.intensity,
      distance: this.spotLight09.distance,
      angle: this.spotLight09.angle,
      penumbra: this.spotLight09.penumbra,
      decay: this.spotLight09.decay
    };

    this.gui.addColor( params, 'light color' ).onChange( function ( val ) {
      _this.spotLight09.color.setHex( val );
      _this.renderGuI();
    } );

    this.gui.add( params, 'intensity', 0, 2 ).onChange( function ( val ) {
      _this.spotLight09.intensity = val;
      _this.renderGuI();
    } );
    this.gui.add( params, 'positionX', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight09.position.x = val;
      _this.renderGuI();
    } );
    this.gui.add( params, 'positionY', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight09.position.y = val;
      _this.renderGuI();
    } );

    this.gui.add( params, 'positionZ', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight09.position.z = val;
      _this.renderGuI();
    } );


    this.gui.add( params, 'distance', 50, 4000 ).onChange( function ( val ) {
      _this.spotLight09.distance = val;
      _this.renderGuI();
    } );

    this.gui.add( params, 'angle', 0, Math.PI / 3 ).onChange( function ( val ) {
      _this.spotLight09.angle = val;
      _this.renderGuI();
    } );

    this.gui.add( params, 'penumbra', 0, 1 ).onChange( function ( val ) {
      _this.spotLight09.penumbra = val;
      _this.renderGuI();
    } );

    this.gui.add( params, 'decay', 1, 2 ).onChange( function ( val ) {
      _this.spotLight09.decay = val;
      _this.renderGuI();
    } );
    this.gui.open();

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
    console.log('onResize');
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


  _renderGuI() {

    this.spotLightHelper.update();

    // shadowCameraHelper.update();

    this.renderer.render(this.scene, this.camera);

  }
}

export default new CommonGL();
