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
    this.switchPosition = this._switchPosition.bind(this);

    this.init();

  }

  /**
   * CameraUtilsクラス初期化
   */
  init(){

    this.attachEvent();

    // =================
    const EPS = 1e-5;
    this.cameraControls = new CameraControls( this._camera, this._domElement );
    this.cameraControls.azimuthRotateSpeed = - 0.3; // negative value to invert rotation direction
    this.cameraControls.polarRotateSpeed   = - 0.3; // negative value to invert rotation direction
    this.cameraControls.truckSpeed = 1 / EPS * 3;
    this.cameraControls.mouseButtons.wheel = CameraControls.ACTION.ZOOM;
    // this.cameraControls.mouseButtons.wheel = CameraControls.ACTION.TRUCK;
    this.cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
    // this.cameraControls.setTarget( 494, 150, 300, true );
    this.cameraControls.moveTo(0, 150, 0, false );
    // this.cameraControls.dollyTo(0.0001, true);
    // this.cameraControls.minDistance = 0;
    // this.cameraControls.maxDistance = 0;


    this.cameraControls.saveState();

    // setTimeout( ()=> {
    //   this.cameraControls.moveTo( 178, 150, 550, true );
    //   this.cameraControls.setTarget( 195, 150, 550, true );
    //   this.cameraControls.zoomTo( 1.0, true );
    //   this.cameraControls.dollyTo(0.0001, true);
    // }, 2000);
    // =================

  }

  _attachEvent() {
    EventBus.$on("SWITCH_POSITION", this.switchPosition.bind(this));
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
        this.cameraControls.setTarget( 195, 150, 550, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '2':
        this.cameraControls.moveTo( 150, 150, 425, true );
        this.cameraControls.setTarget( 150, 150, 442, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '3':
        this.cameraControls.moveTo( -150, 150, 425, true );
        this.cameraControls.setTarget( -150, 150, 442, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '4':
        this.cameraControls.moveTo( -193, 150, 400, true );
        this.cameraControls.setTarget( -210, 150, 400, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '5':
        this.cameraControls.moveTo( -193, 150, 100, true );
        this.cameraControls.setTarget( -210, 150, 100, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '6':
        this.cameraControls.moveTo( -193, 150, -200, true );
        this.cameraControls.setTarget( -210, 150, -200, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '7':
        this.cameraControls.moveTo( -193, 150, -500, true );
        this.cameraControls.setTarget( -210, 150, -500, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true) ;
        break;

      case '8':
        this.cameraControls.moveTo( -150, 150, -442, true );
        this.cameraControls.setTarget(-150, 150, -459, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '9':
        this.cameraControls.moveTo( 150, 150, -442, true );
        this.cameraControls.setTarget( 150, 150, -459, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '10':
        this.cameraControls.moveTo( 190, 150, -550, true );
        this.cameraControls.setTarget( 207, 150, -550, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case '11':
        this.cameraControls.moveTo( 190, 150, -300, true );
        this.cameraControls.setTarget( 207, 150, -300, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case 'About':
        this.cameraControls.moveTo( 178, 150, 300, true );
        this.cameraControls.setTarget( 195, 150, 300, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case 'Door':
        this.cameraControls.moveTo( 190, 150, 0, true );
        this.cameraControls.setTarget( 207, 150, 0, true );
        this.cameraControls.zoomTo( 1.0, true );
        this.cameraControls.dollyTo(0.0001, true );
        break;

      case 'Reset':
        this.cameraControls.moveTo( -295, 150, -400, true );
        this.cameraControls.setTarget( 195, 150, 50, true );
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
    this.cameraControls.update( timeDelta );
  }

}
