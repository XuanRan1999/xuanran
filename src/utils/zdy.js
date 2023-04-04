import Vue from 'vue';
Vue.directive('longpress', {
    bind: function (el, binding, vNode) {
        // 长按时间阈值，单位为毫秒
        let pressTime = 500
        // 记录定时器ID
        let timerId = null
        // 绑定 touchstart 事件
        el.addEventListener('touchstart', function (event) {
            // 防止重复绑定
            if (timerId) {
                clearTimeout(timerId)
            }
            // 开始计时
            timerId = setTimeout(() => {
                // 调用回调函数
                binding.value(event)
            }, pressTime)
        }, false)
        // 绑定 touchend 事件
        el.addEventListener('touchend', function (event) {
            // 清除定时器
            clearTimeout(timerId)
        }, false)
    }
})