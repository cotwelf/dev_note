# Vuex 是什么

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

data 用于定义属性，实例中有三个属性分别为：site、url、alexa。  

methods 用于定义的函数，可以通过 return 来返回函数值。
vuex的状态只在路由切换间保留，刷新页面无法保留  
# vuex 结构
## state
存放数据
## mutation
存放修改state数据的方法，一般不写逻辑。（可以在组件中调用，但推荐使用action，在action中写逻辑，mutation赋值）  
## action
用于调用mutation以修改state的数据。可以在此写一些复杂的逻辑  
action:{
        `//在组件中使用：this.$store.dispatch('user',1111)`
        `//1.不传参`
        changeTheme(context){
            context.commit('CHANGE_THEME',context)
        } 
        `//2.传参`
        changeTheme(context,n){
            cont ext.commit('CHANGE_THEME',n)
        }  
        `//3.按需传入`
        changeTheme({commit,state}){  //
            commit('CHANGE_THEME')
        } 
    },
调用方法【在组件中】this.$store.dispatch('mutation中的方法名称',value)

## 派生属性getter
类似于computed属性，根据state的属性中派生的属性【在组件中】this.$store.getter.{getter中定义的方法名称}

# 使用方法
最好不要将所有属性都写在一个store文件中，建议分类，进行模块化管理  
`/store/index.js`组装模块并导出store  
`/store/action.js` 根级别（通用）的action  
`/store/mutation.js` 根级别的mutation  
`/store/modules/xxx.js` module目录存放子模块  
# 举个🌰
`【/main.js】`
import sotre from './store'  
new Vue({  
&emsp;router,  
&emsp;`store,  //注册`  
&emsp;render:h =>h(App)  
}).$mount('#app')  

`【/store/index.js】`
import Vue from'vue'  
import Vuex from 'vuex'  
import user from './modules/user'  
Vue.use(Vuex)  

const store = new Vuex.Store({
    modules:{
        user
    }
})
export default store
`【/store/modules/user.js】`
import {getToken,setToken} from '@/utils/data'`//vuex中只对vuex的数据操作，如果要保存到storage，方法在utils中定义`
import {login, logout, getUsterInfo} from '@/api/login'
const user = {
&emsp;`//存放状态`
&emsp;state: {
&emsp;&emsp;token:null,
&emsp;&emsp;user:null,
&emsp;},
    `//定义改变state的方法`
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            setToken(token)
        },
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    action:{
        Login({commit},form){  
            login(form.username.trim(),form.password).then(response =>{
                const res = response.data
                commit('SET_TOKEN',res.data.token)
            })
        }

    },
    getters:{
        desc(state){
            if(!state.theme){
              return '没有选择主题'  
            }else{
                return '选择了主题'
            }
        }
    }
}
export defalt global
`【/view/login.vue】`  
this.$store.dispatch('Login',form)


