/**
 * rem适配脚本
 * 根据设备屏幕宽度动态设置根元素的font-size
 * 设计稿以375px为基准，1rem = 37.5px
 */
function setRemUnit() {
  // 获取视口宽度
  const viewWidth = document.documentElement.clientWidth || window.innerWidth;
  
  // 设置基准值（设计稿宽度为375px时，根元素font-size为37.5px）
  const baseValue = 75;
  
  // 限制最大宽度，防止在大屏幕上字体过大
  const maxWidth = 100;
  const targetWidth = Math.min(baseValue, maxWidth);
  
  // 计算根元素的font-size
  // 公式：设计稿宽度为375px时，1rem = 37.5px
  // 所以：fontSize = targetWidth / 375 * 37.5 = targetWidth / 10
  const fontSize = targetWidth / 10;
  
  // 设置根元素的font-size
  document.documentElement.style.fontSize = fontSize + 'px';
  
  // 记录当前的视口宽度，用于后续比较
  window.__VIEW_WIDTH__ = targetWidth;
}

// 初始化
setRemUnit();

// 监听窗口大小变化
window.addEventListener('resize', function() {
  // 防抖处理，避免频繁计算
  clearTimeout(window.__REM_TIMER__);
  window.__REM_TIMER__ = setTimeout(function() {
    const newViewWidth = document.documentElement.clientWidth || window.innerWidth;
    const maxWidth = 768;
    const targetWidth = Math.min(newViewWidth, maxWidth);
    
    // 只有当视口宽度发生变化时才重新计算
    if (targetWidth !== window.__VIEW_WIDTH__) {
      setRemUnit();
    }
  }, 300);
});

// 监听页面旋转
window.addEventListener('orientationchange', function() {
  setRemUnit();
});

// 导出设置函数，方便在其他地方手动调用
export default setRemUnit;