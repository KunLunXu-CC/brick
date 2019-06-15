/**
 * props.shifting     || 20; 每次偏移
 * props.marginRight  || '2px'; 组件距离父容器的右边距
 * props.borderRadius || '16px';  导航的圆角值
 * props.color || 'rgb(153, 153, 153)'; 滚动滑块颜色
 * props.scrollbarWidth || '8px';       滚动条颜色
 * props.background || 'rgb(71, 71, 71)'; 滚动条背景色
 * props.scrollClass      为滚条容器设置class
 * props.scrollBlockClass 为滚动滑块添加class
 *
 * props.onScroll         滚动事件
 * props.onReachBottom    触底
 * props.onResize         组件 resize 事件
 * props.onContentResize  内容块 resize 事件
 *
  this.wrapperHeight       组件高度
  this.wrapperWidth        组件宽度
  this.contentHeight       内容块高度
  this.contentWidth        内容块宽度
  this.overflowHeight      溢出高度
  this.scale               组件（包裹层）高度/内容块高度
 */
import React from 'react';
import { getClassName } from '../../util/helper';
class Scroll extends React.Component{
  constructor(props){
    super(props);
    this.mouseDownTarget = null;                // 鼠标按下目标
    this.axisRef = React.createRef();           // 滚动轴滑块 ref
    this.wrapperRef = React.createRef();        // 组件最外层 ref
    this.contentRef = React.createRef();        // 组件内容块 ref
    this.wrapperIframeRef = React.createRef();  // 最外层Iframe ref
    this.contentIframeRef = React.createRef();  // 内容块Iframe ref
    this.state = {
      scrollbarHeight: 0,                       // 滚动条垂直高度
      contentMarginTop: 0,                      // 内容区 margin-top 值
      scrollbarMarginTop: 0,                    // 滚动条 margin-top
    }
    this.initParams();                          // 初始化参数： 初始化组件参数（非固定值可被修改参数的值）
  }

  /**
   * 初始化  props 参数： 通过 props 初始化 参数
   */
  initParams = () => {
    this.shifting = this.props.shifting || 20;
    this.marginRight =  this.props.marginRight || '2px';
    this.borderRadius =  this.props.borderRadius || '16px';
    this.color =  this.props.color || 'rgb(153, 153, 153)';
    this.scrollbarWidth =  this.props.scrollbarWidth || '8px';
    this.background =  this.props.background || 'rgb(71, 71, 71)';
    this.scrollClass = getClassName('qyrc-scroll-axis', this.props.scrollClass);
    this.scrollBlockClass = getClassName('qyrc-scroll-axis-block', this.props.scrollBlockClass);
  }

  /**
   * 绑定事件: 鼠标滚动、移动、按下、弹起， 容器尺寸改变
   */
  bindEvent(){
    // 鼠标滚动
    if(document.addEventListener){
      document.addEventListener('DOMMouseScroll', this.onScroll, false);
    }
    window.onmousewheel = document.onmousewheel=this.onScroll;

    // 鼠标移动
    window.addEventListener('mousemove', this.onMouseMove);

    // 鼠标弹起
    window.addEventListener('mouseup', this.onMouseUp);

    // 组件容器 onresize
    this.wrapperIframeRef.current.contentWindow.addEventListener('resize', this.onWrapperResize);
    // 内容块 onresize
    this.contentIframeRef.current.contentWindow.addEventListener('resize', this.onContentResize);

  }

  /**
   * 获取滚动状态
   * @param {Object} e    鼠标滚动事件
   * @param {Object} dom  指定DOM
   * @return {Number} 0 表示不是在指定DOM上滚动, 1 表示在指定DOM上向上滚动, -1表示向下滚动
   */
  getScrollStatus(e, dom){
    const targe = e.targe || e.srcElement;
    if(targe !== dom && !dom.contains(targe)){ return false;}
    if (!!e.detail || !!e.wheelDelta){
      if((!!e.wheelDelta && e.wheelDelta < 0) || (!!e.detail && e.detail > 0)){
        return -1;
      } else {
        return 1;
      }
    }
    return 0;
  }

  /**
   * 鼠标滚动事件
   * @param {Object} e 事件对象
   */
  onScroll = (e) => {
    e = e || window.event;
    const status = this.getScrollStatus(e, this.wrapperRef.current);
    if (!!status){
      const shifting = this.shifting * status;
      this.refreshScroll(shifting);
    }
  }

  /**
   * 刷新滚动条
   * @param {Number} 偏移量
   */
  refreshScroll = (shifting = 0) => {
    this.getScrollYParams();
    const maxContentMarginTop = - this.overflowHeight;
    const filter = [
      this.state.contentMarginTop === maxContentMarginTop && shifting < 0,
      this.state.contentMarginTop === 0 && shifting > 0
    ];

    filter.findIndex( v => v ) === -1 &&
    this.setState((state) => {
      let contentMarginTop = state.contentMarginTop + shifting;
      contentMarginTop < maxContentMarginTop ? ( contentMarginTop = maxContentMarginTop ) : null;
      contentMarginTop > 0 ? ( contentMarginTop = 0 ) : null;
      const scrollbarHeight = this.wrapperHeight * this.scale;
      const scrollbarMarginTop = - contentMarginTop * this.scale;
      return { scrollbarHeight, scrollbarMarginTop, contentMarginTop }
    });
  }

  /**
   * 获取Y轴向的配置
   */
  getScrollYParams(){
    if(!this.wrapperRef.current){ return false;}
    this.wrapperHeight = this.wrapperRef.current.offsetHeight;
    this.contentHeight = this.contentRef.current.offsetHeight;
    this.contentWidth = this.contentRef.current.offsetWidth;
    this.overflowHeight = Math.abs(this.wrapperHeight - this.contentHeight);
    this.scale = this.wrapperHeight / this.contentHeight;
  }

  /**
   * 取消默认行为 阻止冒泡
   */
  pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
  }

  /**
   * 鼠标按下事件
   * @param {Object} e 事件对象
   */
  onMouseDown = (e) => {
    this.clientY = e.clientY;
    const targetList = [
      this.contentRef.current,
      this.axisRef.current
    ];
    this.axisRef.current.contains(e.target) && this.pauseEvent(e);
    targetList.forEach( v => {
      (v.contains(e.target) || v.isSameNode(e.target)) && (this.mouseDownTarget = v);
    });
  }

  /**
   * 鼠标移动事件
   * @param {Object} e 事件对象
   */
  onMouseMove = (e) => {
    const contentRef = this.contentRef.current;
    const axisRef = this.axisRef.current;
    const shifting = (this.clientY - e.clientY) / this.scale;
    this.clientY = e.clientY;
    if (this.mouseDownTarget && this.mouseDownTarget.isSameNode(contentRef)){
      this.refreshScroll(- shifting);
    } else if (this.mouseDownTarget && this.mouseDownTarget.isSameNode(axisRef)){
      this.refreshScroll(shifting);
    }
  }

  /**
   * 鼠标弹起事件
   * @param {Object} e 事件对象
   */
  onMouseUp = (e) => {
    this.mouseDownTarget = null;
  }

  /**
   * 组件容器 onResize 事件
   */
  onWrapperResize = () => {
    this.refreshScroll(0);
    this.props.onResize && this.props.onResize(this.event);
  }

  /**
   * 内容块 onResize 事件
   */
  onContentResize = () => {
    this.refreshScroll(0);
    this.props.onContentResize && this.props.onContentResize(this.event);
  }

  /**
   * 处理组件滚动事件
   */
  onPropsScroll = (prevProps, prevState) => {
    const preScrollbarMarginTop = prevState.scrollbarMarginTop;
    const nextScrollbarMarginTop = this.state.scrollbarMarginTop;
    if ( preScrollbarMarginTop !== nextScrollbarMarginTop ){
      this.props.onScroll && this.props.onScroll(this.event);
    }
  }

  /**
   * 触底事件
   */
  onReachBottom = (prevProps, prevState) => {
    if (!this.props.onReachBottom){ return false; }
    const preTouchDistance = this.wrapperHeight - (prevState.scrollbarMarginTop + this.state.scrollbarHeight);
    const nextTouchDistance = this.wrapperHeight - (this.state.scrollbarMarginTop + this.state.scrollbarHeight);
    const conditions = [
      preTouchDistance > 50,
      nextTouchDistance <= 50
    ];
    !conditions.includes(false) && this.props.onReachBottom(this.event);
  }

  componentDidMount(){
    this.bindEvent();
    this.refreshScroll(0);
  }

  componentDidUpdate(prevProps, prevState){
    this.onPropsScroll(prevProps, prevState);
    this.onReachBottom(prevProps, prevState);
  }

  render (){
    const styles = this.styles;
    return(
      <div ref={this.wrapperRef} className="qyrc-scroll">
        <iframe
          className="iframe"
          ref={this.wrapperIframeRef}
          frameBorder="0">
        </iframe>
        <div
          onMouseDown={this.onMouseDown}
          ref={this.contentRef}
          style={styles.scrollContent}
          className="qyrc-scroll-content">
          <iframe
            className="iframe"
            ref={this.contentIframeRef}
            frameBorder="0">
          </iframe>
          {this.props.children}
        </div>
        <div style={styles.scrollaxis} className={this.scrollClass}>
          <div
            ref={this.axisRef}
            onMouseDown={this.onMouseDown}
            style={styles.scrollaxisBlock}
            className={this.scrollBlockClass}>
          </div>
        </div>
      </div>
    );
  }

  get event(){
    return {
      width: this.wrapperWidth,
      height: this.wrapperHeight,
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      contentMarginTop: this.state.contentMarginTop,
      scrollbarHeight: this.state.scrollbarHeight,
      scrollbarMarginTop: this.state.scrollbarMarginTop,
    };
  }

  get styles(){
    const {contentMarginTop, scrollbarHeight, scrollbarMarginTop} = this.state;
    return {
      scrollContent: {
        marginTop: contentMarginTop
      },
      scrollaxis: {
        width: this.scrollbarWidth,
        right: this.marginRight,
        borderRadius: this.borderRadius,
        backgroundColor: this.background
      },
      scrollaxisBlock: {
        height: scrollbarHeight,
        marginTop: scrollbarMarginTop,
        backgroundColor: this.color,
        borderRadius: this.borderRadius,
      }
    }
  }
}

export default Scroll;
