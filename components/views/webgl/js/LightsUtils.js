import * as THREE from "three";
import * as dat from 'dat.gui';
import CommonGL from "./CommonGL";
import EventBus from "@/utils/event-bus";

export default class LightsUtils {
  constructor() {

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
    this.spotLight11 = null;
    this.spotLight12 = null;
    this.spotLightHelper = null;

    this.update = this._update.bind(this);
    this.init = this._init.bind(this);

  }

  /**
   * LightsUtilsクラス初期化
   */
  _init() {

    // 環境光を設定
    let ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 ); // soft white light
    CommonGL.scene.add(ambientLight);
    let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
    CommonGL.scene.add(directionalLight);

    // スポットライトの色を指定
    // let spotLightColor = 0xa7db6e;
    let spotLightColor = 0xffffff;
    let intensity = 1.1;
    let distance = 556;
    let angle = 0.34;
    let penumbra = 0.82;
    let decay = 1.9;

    this.spotLight01 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight01.position.set( 150, 383, 513 );
    this.spotLight01.target.position.set( 150, 150, 742 );
    this.spotLight01.target.updateMatrixWorld();
    this.spotLight01.shadow.mapSize.width = 1024;
    this.spotLight01.shadow.mapSize.height = 1024;
    this.spotLight01.shadow.camera.near = 500;
    this.spotLight01.shadow.camera.far = 4000;
    this.spotLight01.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight01 );
    // this.spotLightHelper = new THREE.SpotLightHelper( this.spotLight01 );
    // CommonGL.scene.add(  this.spotLightHelper );

    this.spotLight02 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight02.position.set( -150, 383, 513 );
    this.spotLight02.target.position.set( -150, 150, 742 );
    this.spotLight02.target.updateMatrixWorld();
    this.spotLight02.shadow.mapSize.width = 1024;
    this.spotLight02.shadow.mapSize.height = 1024;
    this.spotLight02.shadow.camera.near = 500;
    this.spotLight02.shadow.camera.far = 4000;
    this.spotLight02.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight02 );
    // let spotLightHelper02 = new THREE.SpotLightHelper( this.spotLight02 );
    // CommonGL.scene.add(  spotLightHelper02 );

    this.spotLight03 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight03.position.set( -318, 383, 400 );
    this.spotLight03.target.position.set( -493, 150, 400 );
    this.spotLight03.target.updateMatrixWorld();
    this.spotLight03.shadow.mapSize.width = 1024;
    this.spotLight03.shadow.mapSize.height = 1024;
    this.spotLight03.shadow.camera.near = 500;
    this.spotLight03.shadow.camera.far = 4000;
    this.spotLight03.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight03 );
    // this.spotLightHelper = new THREE.SpotLightHelper( this.spotLight03 );
    // CommonGL.scene.add(  this.spotLightHelper );

    this.spotLight04 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight04.position.set( -318, 383, 100 );
    this.spotLight04.target.position.set( -493, 150, 100 );
    this.spotLight04.target.updateMatrixWorld();
    this.spotLight04.shadow.mapSize.width = 1024;
    this.spotLight04.shadow.mapSize.height = 1024;
    this.spotLight04.shadow.camera.near = 500;
    this.spotLight04.shadow.camera.far = 4000;
    this.spotLight04.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight04 );
    // let spotLightHelper04 = new THREE.SpotLightHelper( this.spotLight04 );
    // CommonGL.scene.add(  spotLightHelper04 );

    this.spotLight05 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight05.position.set( -318, 383, -200 );
    this.spotLight05.target.position.set( -493, 150, -200 );
    this.spotLight05.target.updateMatrixWorld();
    this.spotLight05.shadow.mapSize.width = 1024;
    this.spotLight05.shadow.mapSize.height = 1024;
    this.spotLight05.shadow.camera.near = 500;
    this.spotLight05.shadow.camera.far = 4000;
    this.spotLight05.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight05 );
    // let spotLightHelper05 = new THREE.SpotLightHelper( this.spotLight05 );
    // CommonGL.scene.add(  spotLightHelper05 );


    this.spotLight06 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight06.position.set( -318, 383, -500 );
    this.spotLight06.target.position.set( -493, 150, -500 );
    this.spotLight06.target.updateMatrixWorld();
    this.spotLight06.shadow.mapSize.width = 1024;
    this.spotLight06.shadow.mapSize.height = 1024;
    this.spotLight06.shadow.camera.near = 500;
    this.spotLight06.shadow.camera.far = 4000;
    this.spotLight06.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight06 );
    // let spotLightHelper06 = new THREE.SpotLightHelper( this.spotLight06 );
    // CommonGL.scene.add(  spotLightHelper06 );

    this.spotLight07 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight07.position.set( -150, 383, -549 );
    this.spotLight07.target.position.set( -150, 150, -742 );
    this.spotLight07.target.updateMatrixWorld();
    this.spotLight07.shadow.mapSize.width = 1024;
    this.spotLight07.shadow.mapSize.height = 1024;
    this.spotLight07.shadow.camera.near = 500;
    this.spotLight07.shadow.camera.far = 4000;
    this.spotLight07.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight07 );
    // let spotLightHelper07 = new THREE.SpotLightHelper( this.spotLight07 );
    // CommonGL.scene.add(  spotLightHelper07 );


    this.spotLight08 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight08.position.set( 150, 383, -549 );
    this.spotLight08.target.position.set( 150, 150, -742 );
    this.spotLight08.target.updateMatrixWorld();
    this.spotLight08.shadow.mapSize.width = 1024;
    this.spotLight08.shadow.mapSize.height = 1024;
    this.spotLight08.shadow.camera.near = 500;
    this.spotLight08.shadow.camera.far = 4000;
    this.spotLight08.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight08 );
    // let spotLightHelper08 = new THREE.SpotLightHelper( this.spotLight08 );
    // CommonGL.scene.add( spotLightHelper08 );

    this.spotLight09 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight09.position.set( 362, 383, -550 );
    this.spotLight09.target.position.set( 440, 220, -550 );
    this.spotLight09.target.updateMatrixWorld();
    this.spotLight09.shadow.mapSize.width = 1024;
    this.spotLight09.shadow.mapSize.height = 1024;
    this.spotLight09.shadow.camera.near = 500;
    this.spotLight09.shadow.camera.far = 4000;
    this.spotLight09.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight09 );
    // this.spotLightHelper = new THREE.SpotLightHelper( this.spotLight09 );
    // CommonGL.scene.add( this.spotLightHelper );

    this.spotLight10 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight10.position.set( 362, 383, -300 );
    this.spotLight10.target.position.set( 440, 220, -300 );
    this.spotLight10.target.updateMatrixWorld();
    this.spotLight10.shadow.mapSize.width = 1024;
    this.spotLight10.shadow.mapSize.height = 1024;
    this.spotLight10.shadow.camera.near = 500;
    this.spotLight10.shadow.camera.far = 4000;
    this.spotLight10.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight10 );
    // let spotLightHelper11 = new THREE.SpotLightHelper( this.spotLight11 );
    // CommonGL.scene.add( spotLightHelper11 );

    this.spotLight11 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight11.position.set( -354, -202, -550 );
    this.spotLight11.target.position.set( 494, 200, 410 );
    this.spotLight11.target.updateMatrixWorld();
    this.spotLight11.shadow.mapSize.width = 1024;
    this.spotLight11.shadow.mapSize.height = 1024;
    this.spotLight11.shadow.camera.near = 500;
    this.spotLight11.shadow.camera.far = 4000;
    this.spotLight11.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight11 );
    // let spotLightHelper11 = new THREE.SpotLightHelper( this.spotLight11 );
    // CommonGL.scene.add( spotLightHelper11 );

    this.spotLight12 = new THREE.SpotLight( spotLightColor, intensity, distance, angle, penumbra, decay);
    this.spotLight12.position.set( 231, 383, 550 );
    this.spotLight12.target.position.set( 490, 150, 550 );
    this.spotLight12.target.updateMatrixWorld();
    this.spotLight12.shadow.mapSize.width = 1024;
    this.spotLight12.shadow.mapSize.height = 1024;
    this.spotLight12.shadow.camera.near = 500;
    this.spotLight12.shadow.camera.far = 4000;
    this.spotLight12.shadow.camera.fov = 30;
    // CommonGL.scene.add( this.spotLight12 );
    // this.spotLightHelper = new THREE.SpotLightHelper( this.spotLight12 );
    // CommonGL.scene.add( this.spotLightHelper );

    // this.buildGui();
  }

  /**
   * GUI実行
   */
  buildGui() {
    let _this = this;
    this.gui = new dat.GUI();

    let params = {
      'light color': this.spotLight12.color.getHex(),
      positionX : this.spotLight12.position.x,
      positionY : this.spotLight12.position.y,
      positionZ : this.spotLight12.position.z,
      intensity: this.spotLight12.intensity,
      distance: this.spotLight12.distance,
      angle: this.spotLight12.angle,
      penumbra: this.spotLight12.penumbra,
      decay: this.spotLight12.decay
    };

    this.gui.addColor( params, 'light color' ).onChange( function ( val ) {
      _this.spotLight12.color.setHex( val );
      _this.update();
    });

    this.gui.add( params, 'intensity', 0, 2 ).onChange( function ( val ) {
      _this.spotLight12.intensity = val;
      _this.update();
    });

    this.gui.add( params, 'positionX', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight12.position.x = val;
      _this.update();
    });

    this.gui.add( params, 'positionY', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight12.position.y = val;
      _this.update();
    });

    this.gui.add( params, 'positionZ', -1000, 1000 ).onChange( function ( val ) {
      _this.spotLight12.position.z = val;
      _this.update();
    });

    this.gui.add( params, 'distance', 50, 4000 ).onChange( function ( val ) {
      _this.spotLight12.distance = val;
      _this.update();
    });

    this.gui.add( params, 'angle', 0, Math.PI / 3 ).onChange( function ( val ) {
      _this.spotLight12.angle = val;
      _this.update();
    });

    this.gui.add( params, 'penumbra', 0, 1 ).onChange( function ( val ) {
      _this.spotLight12.penumbra = val;
      _this.update();
    });

    this.gui.add( params, 'decay', 1, 2 ).onChange( function ( val ) {
      _this.spotLight12.decay = val;
      _this.update();
    });
    this.gui.open();

  }

  /**
   * GUIアップデート
   */
  _update(){

    this.spotLightHelper.update();

    // shadowCameraHelper.update();

    CommonGL.renderer.render(CommonGL.scene, CommonGL.camera);

  }

}
