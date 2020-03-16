# Promise
axios返回的也是promise对象
const obj = new Promise({resolve, reject} => {
    //被执行语句,如
    const res = xxx
    
    resolve(res)//说明被执行语句成功，并返回res数据
}).catch(error =>{
    reject(error)   `//return Promise.reject(error)`
})
obj.then(response =>{

}).catch(error =>{

})
# resolve
触发成功处理
# reject
触发异常处理