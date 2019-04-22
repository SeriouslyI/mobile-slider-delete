var order_box = document.querySelectorAll(".order-box")
var move_box = document.querySelectorAll(".move-box")
var order_main = document.querySelectorAll(".order-main")
var btn_del = document.querySelectorAll(".btn-del")

for (let i = 0; i < order_box.length; i++) {
    var width = btn_del[i].offsetWidth //接收按钮的宽度值
    var startX = new Array() //创建touchstart鼠标移动值的数组
    var moveX = new Array() //创建touchmove鼠标移动值的数组
    var m = new Array() //创建当前动画状态数组
    startX[i] = 0 //创建当前模块touchstart鼠标移动值的数组
    moveX[i] = 0 //创建当前模块touchmove鼠标移动值的数组
    m[i] = 0 //初始化动画当前模块状态  0为移动前1为移动后
    var realX = 0 //初始化移动值moveX-startX

    order_box[i].addEventListener('touchstart', function (e) {
        startX[i] = e.touches[0].clientX
    })

    order_box[i].addEventListener('touchmove', function (e) {
        moveX[i] = e.touches[0].clientX
        removeTransition(move_box[i])

        for (let j = 0; j < order_box.length; j++) {
            move_box[j].style.transform = 'translateX(' + 0 + 'px)'
            move_box[j].style.webkitTransform = 'translateX(' + 0 + 'px)'
            let newmm = m[i] //拷贝数据
            m[j] = 0
            m[i] = newmm
        } //动画排他只允许一个模块进行移动
        realX = moveX[i] - startX[i]
        if (m[i] == 1) {

            if (realX > width) {
                setTranslateX(move_box[i], (realX - width) / 3)
            } else if (realX < 0) {
                realX = -width
                setTranslateX(move_box[i], realX)
            } else {
                setTranslateX(move_box[i], realX - width)
            }
        } else {
            if (realX > 0) {
                setTranslateX(move_box[i], (realX) / 3)
            } else if (realX <= -width) {
                realX = -width
                setTranslateX(move_box[i], realX)
            } else {
                setTranslateX(move_box[i], realX)
            }
        } //设置动画逻辑
    })
    order_box[i].addEventListener('touchend', function (e) {

        addTransition(move_box[i])
        if ((moveX[i] - startX[i]) < -width / 2) { //如果
            move_box[i].style.transform = 'translateX(' + (-width) + 'px)'
            move_box[i].style.webkitTransform = 'translateX(' + (-width) + 'px)'
            m[i] = 1 //改变当前移动状态参数为1，移动后按钮显示
        } else {
            move_box[i].style.transform = 'translateX(' + 0 + 'px)'
            move_box[i].style.webkitTransform = 'translateX(' + 0 + 'px)'
            m[i] = 0 //改变当前移动状态参数为0，移动前按钮隐藏
        }
    })
    btn_del[i].addEventListener('click', function (e) {
        removeTransition(move_box[i])
        move_box[i].style.transform = 'translateX(' + 0 + 'px)'
        move_box[i].style.webkitTransform = 'translateX(' + 0 + 'px)'
        m[i] = 0
    }) //点击删除让按钮归位
    order_box[i].addEventListener('click', function (e) {
        removeTransition(move_box[i])
        move_box[i].style.transform = 'translateX(' + 0 + 'px)'
        move_box[i].style.webkitTransform = 'translateX(' + 0 + 'px)'
    }) //点击模块不让动画产生
}