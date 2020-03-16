# 1.css3新属性

CSS3边框如border-radius，box-shadow等；CSS3背景如background-size，background-origin等；CSS3 2D，3D转换如transform等；CSS3动画如animation等。
# 2.link标签和import标签的区别
参考回答：
link属于html标签，而@import是css提供的
页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。

link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。

link方式样式的权重高于@import的。
# 3.flex布局
Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
布局的传统解决方案，基于盒状模型，依赖display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。
简单的分为容器属性和元素属性
# step1:父盒子display:flex
行内元素也可以用flex布局  
display:inline-flex
# step2: 容器属性（定义在父盒子的样式中）
|属性|值和描述|
|--|--|
|flex-direction|主轴方向：row（左→右），row-reverse（右→左），colum（上→下），column-reverse（下→上）|
|justify-content|主轴上元素的（水平）对齐方式：flex-start（左对齐），flex-end（右对齐），center（水平居中），space-between（两端对齐），space-around（首位有间隔的两端对齐）|
|align-items|交叉轴上元素的（垂直）对齐方式：flex-start（上对齐），flex-end（下对齐），center（垂直居中），baseline（各元素第一行文字为基准线），stretch（拉伸）|

# 子元素属性
|属性|值和描述|
|--|--|
|order|值越小，排列越靠前，默认值为0|
|flex-grow、flex-shrink|放大和缩小比例，放大默认0，缩小默认1|
|align-self|元素与其他元素不同的对齐方式：auto，flex-start，flex-end，baseline，stretch|

# 4.说一下css盒模型
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
标准盒模型：一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)

怪异盒模型：一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）

设置盒模型：box-sizing:border-box  
background-color设置的背景颜色会填充元素的content、padding、border区域

# 5.说一下块元素和行元素
参考回答：
块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度
行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失
效。

# 6.CSS3中对溢出的处理
text-overflow属性，值为clip是修剪文本；ellipsis为显示省略符号来表被修剪的文本；string为使用给定的字符串来代表被修剪的文本。

# 7.visibility=hidden, opacity=0，display:none
参考回答：
opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的。  
visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件  
display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

# 8.双边距重叠问题（外边距折叠）
参考回答：
多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠
折叠的结果为：

两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。

# 9.position属性 比较
## 固定定位fixed：
元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed定位使元素的位置与文档流无关，因此不占据空间。 Fixed定位的元素和其他元素重叠。

## 相对定位relative：

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

## 绝对定位absolute：

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html。 absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。

## 粘性定位sticky：

元素先按照普通文档流定位，然后相对于该元素在流中的flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

## 默认定位Static：

默认值。没有定位，元素出现在正常的流中（忽略top, bottom, left, right 或者 z-index 声明）。

## inherit:

规定应该从父元素继承position 属性的值。

# 10.浮动清除
## 方法一：使用带clear属性的空元素
在浮动元素后使用一个空元素如`<div class="clear"></div>`，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。

## 方法二：使用CSS的overflow属性

给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。

在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。

## 方法三：给浮动的元素的容器添加浮动

给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。

## 方法四：使用邻接元素处理

什么都不做，给浮动元素后面的元素添加clear属性。

## 方法五：使用CSS的:after伪元素

结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。

给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。

# 11.CSS选择器有哪些，优先级呢
id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等  

(1)同一元素引用了多个样式时，排在后面的样式属性的优先级高；  
(2)样式选择器的类型不同时，优先级顺序为：id 选择器 > class 选择器 > 标签选择器；
(3)带有!important 标记的样式属性的优先级最高；  
(4)标签之间存在层级包含关系时，后代元素会继承祖先元素的样式。如果后代元素定义了与祖先元素相同的样式，则祖先元素的相同的样式属性会被覆盖。继承的样式的优先级比较低，至少比标签选择器的优先级低；  
(5)样式表的来源不同时，优先级顺序为：!important>内联样式> 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

# 12.css动画如何实现
参考回答：
创建动画序列，需要使用animation属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 @keyframes规则实现，具体情况参见使用keyframes定义动画序列小节部分。
transition也可实现动画。transition强调过渡，是元素的一个或多个属性发生变化时产生的过渡效果，同一个元素通过两个不同的途径获取样式，而第二个途径当某种改变发生（例如hover）时才能获取样式，这样就会产生过渡动画。

# 13.line-height和height的区别
line-height一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height一般是指容器的整体高度

# 14.inline-block、inline和block的区别；为什么img是inline还可以设置宽高
Block是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding水平垂直方向都有效。
Inline：设置width和height无效，margin在竖直方向上无效，padding在水平方向垂直方向都有效，前后无换行符
Inline-block：能设置宽度高度，margin/padding水平垂直方向 都有效，前后无换行符

# 15.什么是BFC
BFC也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素，其中比较重要的布局规则有内部box垂直放置，计算BFC的高度的时候，浮动元素也参与计算，触发BFC的规则有根元素，浮动元素，position为absolute或fixed的元素，display为inline-block，table-cell，table-caption，flex，inline-flex，overflow不为visible的元素