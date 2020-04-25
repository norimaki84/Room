import Stats from 'three/examples/jsm/libs/stats.module';
import CommonGL from "./CommonGL";
import Shape from "./Shape";
import Room from './Room';

export default class MainCanvas {
  constructor(props){
    this.props = props;
    this.stats = null;

    this.init();
  }

  /**
   * 初期化
   */
  init(){
    CommonGL.init(this.props.$canvas);
    // this.shape = new Shape();
    this.room = new Room();

    window.addEventListener("resize", this.resize.bind(this));

    this.initStats();

    this.update();
  }

  /**
   * Stats.js 初期化
   */
  initStats() {
    this.stats = new Stats();
    this.stats.showPanel(0);
    document.body.appendChild(this.stats.dom);
  }

  /**
   * リサイズイベント
   */
  resize() {
   CommonGL.onResize();
  }

  /**
   * アニメーションフレームアップデート
   */
  update() {
    this.render();

    // FPS表示
    this.stats.update();

    requestAnimationFrame(this.update.bind(this));
  }

  /**
   * アップデート
   */
  render() {
    // this.shape.update();
    CommonGL.render();
  }

}
