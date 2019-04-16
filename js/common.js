var addTransition = function (el) {
    el.style.transition = 'all 0.5s';
    el.style.webkitTransition = 'all 0.5s';
} //添加动画时间函数

var removeTransition = function (el) {
    el.style.transition = 'none';
    el.style.webkitTransition = 'none';
} //移除动画时间函数

var setTranslateX = function (el, translateX) {
    el.style.transform = 'translateX(' + translateX + 'px)';
    el.style.webkitTransform = 'translateX(' + translateX + 'px)';
} //x轴移动函数