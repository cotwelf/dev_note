// 1.添加代码使得如下代码每隔一秒输出一个数字，最终输出：1,2,3,4,5
        for(var i = 0; i < 5; i++) {
            (function(i){
                timer = setTimeout(function(){ console.log(i+1)}, i*1000);
            })(i)
        }
// 2.写一个函数，对于一个排好序的数组，如果当中有两个数的和为某个给定的数target，返回true，否则false，时间复杂度O(n)
// 3.以下代码的执行结果是什么? 并解释原因
    setTimeout(function() {
    console.log(1);
    }, 100);
    setTimeout(function () {
    console.log(2);
    }, 0)
    Promise.resolve(console.log(3)).then(() => { console.log(4) })
    async function async1(){
    console.log(5)
    await async2()
    console.log(6)
    }
    async function async2(){
    console.log(7)
    }
    async1()
    console.log(8)
  
// 4.基于 touch 事件写一个JS手势库，只需要识别 swipe。实现目标：
    var touchEl = new Toucher(element)
    touchEl.on('swipe', function(e) {
    console.log(e.direction) // 打印出滑动的方向
    })
// 5.实现一个EventEmitter类，这个类包含以下方法： on（监听事件，该事件可以被触发多次）- once（也是监听事件，但只能被触发一次）- fire（触发指定的事件）- off（移除指定事件的某个回调方法或者所有回调方法）
    class EventEmitter {
    // todo

    }
    const event = new EventEmitter()

    event.on('drink', (person) => {
    console.log(person + '喝水')
    })
    event.on('eat', (person) => {
    console.log(person + '吃东西')
    })
    event.once('buy', (person) => {
    console.log(person + '买东西')
    })
    event.fire('drink', '我') // 我喝水
    event.fire('drink', '我') // 我喝水
    event.fire('eat', '其它人') // 其它人吃东西
    event.fire('eat', '其它人') // 其它人吃东西
    event.fire('buy', '其它人') //其它人买东西
    event.fire('buy', '其它人') //这里不会再次触发buy事件，因为once只能触发一次
    event.off('eat') //移除eat事件
    event.fire('eat', '其它人') //这里不会触发eat事件，因为已经移除了