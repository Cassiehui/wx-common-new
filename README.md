# 移动端基础控件

使用前说明：
1.这套组件适用于微信端和App，现在这些组件并不完善，需要后续一步步添加;
2.现阶段这套组件分为：按钮、选框、列表、分类、输入框、消息框、九宫格、底部菜单、头部菜单等；
3.大部分的组件样式都是以wx-开头；

使用说明：
一、页面结构引用：

    移动端页面头部需引用的meta标签：
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no, width=device-width">
	<meta content="telephone=no" name="format-detection">
	
   引用样式为：
     （1）字体样式：<link rel="stylesheet" href="css/font-awesome.min.css" /> 
     （2）公共样式： <link rel="stylesheet" href="css/common.css" />
     
   页面底部 引用js为：
    <script type="text/javascript" src="js/zepto.min.js"></script>或者<script type="text/javascript" src="js/jquery-1.10.1.min.js" ></script>
    <script type="text/javascript" src="js/common.js" ></script>  页面有滑动删除 或者 底部菜单 或者九宫格 或者 弹出层 则添加
	<script type="text/javascript" src="js/swiper.min.js" ></script> 页面有轮播图则需要添加
	
  页面内容 统一用 <div class="wx-container"></div>包裹
	
二、头部菜单：

	1.头部菜单统一标签为<header class="wx-bar"></header>
	2.头部分为 左中右结构；两个<a href="#"></a>样式分别为 "wx-bar-left"、"wx-bar-right";可以添加图标"wx-bar-icon"和文字；
	3.标题则用<h1></h1>标签包裹


三、底部菜单：
	1.结构：
	<div class="wx-botnav">
		<ul>
			<li class="wx-botnav-menu"><a href="#"><i></i><span></span></a></li>
			<li class="wx-botnav-menu"><a href="#"><span></span></a></li>
		</ul>
	</div>

	
	2.介绍：底部菜单个数范围在1-4 不需要加其他样式 需要几个就加几个；
			菜单内容如果为纯文字添加<span>标签 会自动居中；
			若需要图标则添加<i>标签，字体和图标会自动排好 不需要添加其他样式；


四、按钮：
	按钮分为：带背景颜色的按钮、带边框颜色按钮、大按钮以及底部按钮；
	
	1.默认按钮颜色为：白色底灰色边黑色字  带圆角；
	2.直角按钮 需添加："wx-noradBtn" 样式；
	
	3.带背景颜色的按钮样式："wx-btn-" ，例如:"wx-btn-primary" 蓝色按钮（普通按钮）
								  "wx-btn-success" 绿色按钮
								  "wx-btn-warning" 黄色按钮
								  "wx-btn-danger"  红色按钮
	4.带边框颜色按钮样式："wx-outlineBtn" ，这个样式需要加到 "wx-btn-" 后面（两个样式）
		例如:"wx-btn-primary wx-outlineBtn"  蓝色边框按钮
			"wx-btn-success wx-outlineBtn"  绿色边框按钮
			"wx-btn-warning wx-outlineBtn"  黄色边框按钮
			"wx-btn-danger wx-outlineBtn"  红色边框按钮
	
	5.大按钮样式："wx-bigBtn"；
	
	6.底部按钮："wx-fixedBtn"；
	
五、选框：
	1、默认选框为 蓝色勾选；
	2、红色选框 和绿色选框 分别为:"wx-red-checkbox" 、 "wx-green-checkbox";
	3、浮动到右边的选框 可以加上样式:"wx-checkbox-right";


六、列表：
	
	最外层div样式统一为："wx-list";区别是里面的 ul和 li 的样式;
	
	1.普通列表：ul 样式为 "wx-normlist"；li的样式则为 "wx-normlist-cell";
		（1）列表不需要点击进入 只是展示作用时不需要加<a>标签；
		（2）需要点击进入链接时 在li里面的最外层加上<a>标签；如果需要右箭头标识 加上<i class="fa fa-angle-right wx-normlist-rtarrow"></i>标签；
		（3）需要有数字标识 则加入<span class="wx-number wx-normlist-number">123</span>；
		（4）需要右边图标则加入<span class="图标样式  wx-normlist-lficon"></span>；
		
	2.地址列表：ul 样式为 "wx-addslist"；li的样式则为" wx-addslist-cell";
		（1）列表头部统一样式为："wx-addslist-title"；头部内容 收件人姓名<span class="name">，收件人电话<span class="tel">
		（2）列表底部统一样式为："wx-addslist-adds"；底部内容一般为收件地址；
		
	3.商品列表：ul 样式为"wx-goodslist"；li的样式则为" wx-goodslist-cell";
		（1）列表头部统一样式为："wx-goodslist-head"；内容一般为订单号；若需要复选框 则加入<input type="checkbox"/>
			标题样式统一为 <span class="goodslist-head-title">
		（2）列表内容统一样式为："wx-goodslist-content"；商品列表可以分为三块：选框、图片、文字描述，分别用<div>标签包裹对应样式为“goodslist-content-radio”、“goodslist-content-img”
		、“goodslist-content-text”；
		
		（3）文字描述部分："content-text-name"对应的是商品名称；"content-text-standar"对应的是商品规格 字号偏小 字体为灰色； 
					  "wx-goodslist-price" 对应的是商品价格默认为红色 ；	
					  			
		（4）数量输入框：结构为<div class="wx-goodslist-num"> 
									<button class="reduce">-</button>
									<input type="text" class="numbox" value="1"/>
									<button class="reduce">+</button>
								</div>
		
		
	4.图文列表：ul 样式为 "wx-imgtext"；li的样式则为 "wx-imgtext-cell";
				结构为：
					<a href="#">
						<img src=""/>
						<div class="wx-imgtext-word">
							<h4></h4>
							<p></p>
						</div>
					</a>
	
	5.滑动删除功能：每一条列表都可以添加滑动删除功能 只需要在需滑动删除内容的父级元素上加入样式"wx-delete-list"，
				      并在滑动删除内容里面加入'<div class="wx-delete">删除</div>'按钮即可；
				      
Tips:有滑动删除功能的页面 需引入zepto.js不用jquery;

	
	
七、输入框：

	1.搜索框：默认为百分之百宽度 所以一般外层可以加一个自定义盒子比如：<div class="wx-padbox"></div>
			  搜索框结构为：<div class="wx-search">
								<a href="#"><span class="fa fa-search wx-search-icon"></span></a>
								<span class="wx-search-input"><input type="text" /></span>
							</div>

	
	2.普通输入框: 结构为<form class="wx-input-group">
							<div class="wx-input-row">
								<label></label>
								<input type="text" placeholder=""/>
							</div>
							<div class="wx-input-row">
								<label></label>
								<input type="text" placeholder=""/>
							</div>
						</form>

	3.输入框靠右: 结构为<form class="wx-input-group wx-input-right">
							<div class="wx-input-row">
								<label></label>
								<input type="text" placeholder=""/>
							</div>
							<div class="wx-input-row">
								<label></label>
								<input type="text" placeholder=""/>
							</div>
						</form>


	4.文本输入框：默认为百分之百宽度 直角 外层可以加一个自定义盒子比如：<div class="wx-padbox"></div>
				结构为<textarea class="wx-textarea"></textarea>
				如果需要圆角 则添加样式 "wx-textarea-radiu";
	
八、弹出框：	
	
	  在需要点击弹出层的按钮中添加样式   " wx-open-dialog"  ,默认为两个按钮 "确认"和"取消"；
	  或者添加样式  " wx-openobtn-dialog " 为一个按钮"确认"；
	 
	 也可以自定义样式 在 common.js 里面自定义标题和内容
    


九、分类：

	分类页面结构为左右，左边为"wx-classify-leftbar"，右边为"wx-classify-rightlist"；
	
	结构为：<div class="wx-classify-leftbar">
				<ul>
					<li class="active"><i class="icon-tap"></i>分类一</li>
					<li><i class="icon-tap"></i>分类二</li>
					<li><i class="icon-tap"></i>分类三</li>
				</ul>
			</div>
			<div class="wx-classify-rightlist">
            	<ul>
	            	<li class="wx-classify-cell">
	            		<div class="wx-classify-img"><a href="#"><img src="" /></a></div>
	            		<div class="wx-classify-text">
	            			<h4></h4>
	            			<p></p>
	            		</div>
	            	</li>
				</ul>
			</div>






Tips:如果有列表需要点击变化为active效果 ，请在ul里加入样式"wx-clicklist";


十、侧滑导航栏：
	 
	1、默认为左边菜单栏，需在整个内容外面包裹div样式"wx-navslide-box";
	2、将div样式"wx-navslide-container"包裹在 header 和" wx-container"外面,且加入蒙版样式"wx-navslide-mask"与这两个（header 和" wx-container"）div同级；
	3、添加左边菜单导航栏"wx-navslide-bar wx-navslide-leftbar " 与"wx-navslide-container"同级；
	4、可在页面添加按钮"wx-navslide-leftbtn"即可点击滑动出左菜单栏；
	整体结构为：
	<div class="wx-navslide-box">
		<div class="wx-navslide-container">
			<!-- 头部 -->
			<header class="wx-bar"></header>		
<!-- 内容 -->
<div class="wx-container">
<button class="wx-navslide-leftbtn">滑出左导航</button>
</div>
<!--蒙版-->
<div class="wx-navslide-mask"></div>
</div>
<!-- 左侧菜单 -->
<div class="wx-navslide-bar wx-navslide-leftbar ">
	<p class="wx-title">Hello !</p><p class="wx-title">我是左侧菜单。。。</p>
</div>
</div>
