import * as THREE from "three";
import CameraControls from 'camera-controls';
CameraControls.install( { THREE: THREE } );

import EventBus from "@/utils/event-bus";

export default class CameraUtils {
  constructor(camera, domElement){

    this.cameraControls = null;
    this._camera = camera;
    this._domElement = domElement;

    this.init();

  }

  /**
   * CameraUtilsクラス初期化
   */
  init(){
    this.cameraControls = new CameraControls( this._camera, this._domElement );
    this.cameraControls.dollySpeed = 0.5;

    // this.cameraControls.maxAzimuthAngle = Math.sin(30 * (Math.PI / 180));
    // this.cameraControls.minAzimuthAngle = Math.sin(-30 * (Math.PI / 180));
    // this.cameraControls.setTarget( 150, 150, 742, true );

    // console.log(this.cameraControls);
    //
    // setTimeout(()=> {
    //   console.log('ChangeMaxAzium');
    //   this.cameraControls.maxAzimuthAngle = Infinity;
    // }, 10000);

    // setTimeout( ()=> {
    //   console.log('camera move');
    //   this.cameraControls.moveTo(150, 150, 742, true );
    // }, 3000);
  }

  /**
   * カメラアップデート
   * @param timeDelta
   */
  update(timeDelta){

    this.cameraControls.update( timeDelta );

  }

}
