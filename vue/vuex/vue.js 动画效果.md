<style>
.name-enter-active, .naem-leave-active{
    /* transition: opacity 1s;  只变化opacity*/
    transition: all 1s; /* 所有在1s内变化*/
    /* transition: bounce-in 1s;  bounce-in 在1s内变化 */
    /* transition: bounce-in 1s reverse; */
}
.name-enter, .name-leave-to{
    opacity:0;
    transform: translateX(10px); /*位移*/

}
@keyframes bounce-in{
    0%{  
        transform: scale(0)
    }
    50%{
        transform: scale(1.5)
    }
    100%{
        transform: scale(1)
    }
}
</style>

`<transition name="name">`
&emsp;`<p v-show="show" class='enter'>test</p>`
`</transition>`