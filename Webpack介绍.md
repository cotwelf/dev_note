# webpack作用
进行js资源打包
首先要安装node.js
# 配置
webpack.config.js文件
`//引入node中的path模块，主要是处理文件路径的小工具`  
const path = require('path')  
module.eports = {  
&emsp;`//指定是生产环境还是开发环境`  
&emsp;mode:'production',  `//开发环境development，生产环境production，不指定none。开发环境不会压缩文件，而生产环境会压缩文件`  
&emsp;`//入口模块文件路径,需要打包的内容（如./src/main.js)`  
&emsp;entry:'',  
&emsp;`//出口`  
&emsp;output:{  
&emsp;&emsp;path:path.join(__dirname,'./dist/'),`//生成路径，这里必须是绝对路径，所以需要在最上导入node的path模块`  
&emsp;&emsp;filename:'bundle.js',`//文件名`  
&emsp;}  
}

# 打包
拥有配置文件后，在终端键入webpack进行打包

# 使用
需要本地安装webpack，因为不同设备中的webpack可能不一致，从而导致项目无法运行
先卸载全局webpack：npm uninstall -g webpack  
webpack -v 命令失效，则卸载成功.  
npm install --save-dev webpack  `// 等价于npm i -D webpack`
npm i -D webpack-cli  
安装在项目的node_modules中  
安装完成后在package.json中的script自定义命令  
"scripts":{  
&emsp;"build": "webpack",  `//即npm run build命令就等于webpack命令`  
&emsp;"watch": "webpack --watch"  `//更新文件后自动编译`  
&emsp;"dev" " "webpack-dev-server --open" `//实时加载并打开浏览器`
}  

# webpack 工具
需要有css-loader和style-loader  
## 1.webpack-dev-server实时重新加载  
先安装webpack-dev-server，再进行配置
【webpack.config.js】
devServer:{  
    contentBase: './dist' //目标路径
}
## 2.babel 浏览器兼容es6之前语法
【webpack.config.js】  
module:{  
&emsp;rules:[  
&emsp;&emsp;{  
&emsp;&emsp;&emsp;test: /\.m?js$/,
&emsp;&emsp;&emsp;exlude:/(node_modules|bower_components)/,  &emsp;`//排除这些目录的代码，不需要转换`  
&emsp;&emsp;&emsp;use:{  
&emsp;&emsp;&emsp;&emsp;loader:'babel-loader',  
&emsp;&emsp;&emsp;&emsp;options:{  
&emsp;&emsp;&emsp;&emsp;&emsp;presets:['@babel/preset-env']  
&emsp;&emsp;&emsp;&emsp;}  
&emsp;&emsp;&emsp;}  
&emsp;&emsp;}  
&emsp;]  
}
## 3.file-loader

