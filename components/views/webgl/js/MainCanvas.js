import CommonGL from "./CommonGL";
import Shape from "./Shape";

export default class MainCanvas {
  constructor(props){
    this.props = props;

    this.init();
  }

  /**
   * 初期化
   */
  init(){
    CommonGL.init(this.props.$canvas);
    this.shape = new Shape();
    window.addEventListener("resize", this.resize.bind(this));
    this.update();
  }

  /**
   * リサイズイベント
   */
  resize(){
   CommonGL.onResize();
  }

  /**
   * アニメーションフレームアップデート
   */
  update(){
    this.render();
    requestAnimationFrame(this.update.bind(this));
  }

  /**
   * アップデート
   */
  render(){
    this.shape.update();
    CommonGL.render();
  }

}
