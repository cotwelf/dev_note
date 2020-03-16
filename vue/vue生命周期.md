# 生命周期
## beforecreate和created
beforecreate：vue实例创建前被调用，数据和模板都未获取；  
created：vue实例创建后，最早可以获取到data数据的钩子。模板尚未初始化。  
ajax请求一般放在created中
## beforeMount和mounted
beforeMount:获取到了模板，但数据尚未挂载  
mounted：数据已经挂载到模板中，实例初始化完成。  
如果实例中没有el:'#app'选项，则使用$mount('#app')手动挂载
## beforeUpdate和updated
data数据发生变化时要更新到dom
## beforeDestroy和destroyed
销毁实例

## nextTick()
nextTick()，是将回调函数延迟在下一次dom更新数据后调用,简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数.  
当项目中你想在改变DOM元素的数据后基于新的dom做点什么，对新DOM一系列的js操作都需要放进Vue.nextTick()的回调函数中；通俗的理解是：更改数据后当你想立即使用js操作新的视图的时候需要使用它  
如：模态框打开后，清空模态框中表单的内容  
handlePwd(){
    this.dialogFormVisible = true
    this.$nextTick(()=>{
        this.$refs['ruleForm].resetFields()
    })
}