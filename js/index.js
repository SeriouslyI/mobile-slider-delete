var order_box = document.querySelectorAll(".order-box");
var move_box = document.querySelectorAll(".move-box");
var order_main = document.querySelectorAll(".order-main");
var btn_del = document.querySelectorAll(".btn-del");
var width = btn_del.offsetWidth;

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

for (let i = 0; i < order_box.length; i++) {
    var width = btn_del[i].offsetWidth; //接收按钮的宽度值
    var startX = new Array() //创建touchstart鼠标移动值的数组
    var moveX = new Array() //创建touchmove鼠标移动值的数组
    var m = new Array() //创建当前动画状态数组
    startX[i] = 0; //创建当前模块touchstart鼠标移动值的数组
    moveX[i] = 0; //创建当前模块touchmove鼠标移动值的数组
    m[i] = 0; //初始化动画当前模块状态  0为移动前1为移动后

    order_box[i].addEventListener('touchstart', function (e) {
        startX[i] = e.touches[0].clientX;
    })

    order_box[i].addEventListener('touchmove', function (e) {
        moveX[i] = e.touches[0].clientX;
        removeTransition(move_box[i]);
        if (m[i] == 1) {
            setTranslateX(move_box[i], moveX[i] - startX[i] - width);
        } else {
            setTranslateX(move_box[i], moveX[i] - startX[i]);
        }
    })

    order_box[i].addEventListener('touchend', function (e) {
        addTransition(move_box[i])

        if ((moveX[i] - startX[i] * 0.5) < width) { //如果
            move_box[i].style.transform = 'translateX(' + (-width) + 'px)';
            move_box[i].style.webkitTransform = 'translateX(' + (-width) + 'px)';
            m[i] = 1 //改变当前移动状态参数为1，移动后按钮显示

        } else {
            move_box[i].style.transform = 'translateX(' + 0 + 'px)';
            move_box[i].style.webkitTransform = 'translateX(' + 0 + 'px)';
            m[i] = 0 //改变当前移动状态参数为0，移动前按钮隐藏
        }
    })
}