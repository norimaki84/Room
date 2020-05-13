import * as THREE from "three";
import CameraControls from 'camera-controls';
CameraControls.install( { THREE: THREE } );
import EventBus from "@/utils/event-bus";

export default class CameraUtils {
  constructor(camera, domElement){

    this.cameraControls = null;
    this._camera = camera;
    this._domElement = domElement;

    this.attachEvent = this._attachEvent.bind(this);
    this.firstCameraAnimation = this._firstCameraAnimation.bind(this);
    this.switchPosition = this._switchPosition.bind(this);

    this.init();

  }

  /**
   * CameraUtilsクラス初期化
   */
  init(){

    this.attachEvent();

    // =================
    // camera-controlsの設定郡
    const EPS = 1e-5;
    this.cameraControls = new CameraControls( this._camera, this._domElement );
    this.cameraControls.azimuthRotateSpeed = - 0.3; // negative value to invert rotation direction
    this.cameraControls.polarRotateSpeed   = - 0.3; // negative value to invert rotation direction
    this.cameraControls.truckSpeed = 1 / EPS * 3;
    this.cameraControls.mouseButtons.wheel = CameraControls.ACTION.ZOOM;
    this.cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
    this.cameraControls.minZoom = 1; // zoomの最小値
    this.cameraControls.maxZoom = 3; // zoomの最大値
    this.cameraControls.moveTo(0, 150, 0, false);　// 初期カメラ位置
    this.cameraControls.saveState();
    // this.cameraControls.setTarget( 494, 150, 300, true );
    // this.cameraControls.dollyTo(0.0001, true);
    // this.cameraControls.minDistance = 10;
    // this.cameraControls.maxDistance = 50;

    // this.cameraControls.addEventListener('controlstart', ()=> {
    //   console.log('controlstart');
    // });
    //
    // this.cameraControls.addEventListener('control', ()=> {
    //   console.log('control');
    // });
    //
    // this.cameraControls.addEventListener('controlend', ()=> {
    //   console.log('controlend');
    // });

    // this.cameraControls.addEventListener('update', ()=> {
    //   console.log('update');
    // });
    //
    // this.cameraControls.addEventListener('awake', ()=> {
    //   console.log('awake');
    // });
    //
    // this.cameraControls.addEventListener('sleep', ()=> {
    //   console.log('sleep');
    // });
    // =================

  }

  /**
   * EventEmitter用のイベント登録
   * @private
   */
  _attachEvent() {
    EventBus.$on("SWITCH_POSITION", this.switchPosition.bind(this));
    EventBus.$on("FIRST_CAMERA_ANIMATION", this.firstCameraAnimation.bind(this));
  }

  /**
   * 初回のカメラワークアニメーション
   * @private
   */
  _firstCameraAnimation() {
    this.cameraControls.moveTo( -295, 150, -400, true );
    this.cameraControls.setTarget( 195, 150, 50, true );
    this.cameraControls.zoomTo( 1.0, true );
    this.cameraControls.dollyTo(0.0001, true );
  }

  /**
   * カメラのポジションを
   * @param positionString
   * @private
   */
  _switchPosition(positionString) {
    switch(positionString) {
      case '1':
        this.cameraControls.moveTo( 178, 150, 550, true );
        this.cameraControls.setTarget( 270, 150, 550, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '2':
        this.cameraControls.moveTo( 150, 150, 425, true );
        this.cameraControls.setTarget( 150, 150, 517, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '3':
        this.cameraControls.moveTo( -150, 150, 425, true );
        this.cameraControls.setTarget( -150, 150, 517, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '4':
        this.cameraControls.moveTo( -193, 150, 400, true );
        this.cameraControls.setTarget( -285, 150, 400, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '5':
        this.cameraControls.moveTo( -193, 150, 100, true );
        this.cameraControls.setTarget( -285, 150, 100, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '6':
        this.cameraControls.moveTo( -193, 150, -200, true );
        this.cameraControls.setTarget( -285, 150, -200, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '7':
        this.cameraControls.moveTo( -193, 150, -500, true );
        this.cameraControls.setTarget( -285, 150, -500, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true) ;
        break;

      case '8':
        this.cameraControls.moveTo( -150, 150, -442, true );
        this.cameraControls.setTarget(-150, 150, -534, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '9':
        this.cameraControls.moveTo( 150, 150, -442, true );
        this.cameraControls.setTarget( 150, 150, -534, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '10':
        this.cameraControls.moveTo( 190, 150, -550, true );
        this.cameraControls.setTarget( 282, 150, -550, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '11':
        this.cameraControls.moveTo( 190, 150, -300, true );
        this.cameraControls.setTarget( 282, 150, -300, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case 'About':
        this.cameraControls.moveTo( 178, 150, 300, true );
        this.cameraControls.setTarget( 195, 150, 300, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      default:
        break;
    }
  }

  /**
   * カメラアップデート
   * @param timeDelta
   */
  update(timeDelta){
    // console.log("this.cameraControls.zoom ", this.cameraControls.zoom);

    this.cameraControls.update( timeDelta );
  }

}
