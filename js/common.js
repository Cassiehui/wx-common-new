$(function(){
	var listdele = new dele(".wx-delete-list",".wx-delete");
	listdele.movedele();
	
	$('.wx-open-dialog').bind('click',function(){
		var dialogone = new wxdialog('温馨提示','您打开了弹出框','确定','取消');
		dialogone.showdialog();
//		alert('123');
	});
	$('.wx-openobtn-dialog').bind('click',function(){
		var dialogone = new wxdialog('温馨提示','您打开了弹出框','确定','');
		dialogone.showdialog();
//		alert('123');
	});
	
	//点击列表事件
	$(".wx-clicklist li").click(function(){
		$(".wx-clicklist li").removeClass("active");
		$(this).addClass("active");
	})
	
	//左右菜单滑出
	if($(".wx-navslide-bar").length > 0){
		$(".wx-navslide-leftbtn").on("tap",leftbar);
		$(".wx-navslide-mask").on("tap",clearbar)
		$("body").on("swipeRight",leftbar).on("swipeLeft",clearbar);
		function leftbar(){
			$(".wx-navslide-container").addClass("moveleft");
			$(".wx-navslide-mask").addClass("moveshow");
		}
		function clearbar(){
			$(".wx-navslide-container").removeClass("moveleft");
			$(".wx-navslide-mask").removeClass("moveshow");
		}
	}
	
	
	//判断底部是否有底部菜单，如果有改变底部按钮值
	if($(".wx-botnav").length > 0){
		var nav = $(".wx-botnav").length;
		var barheight = $(".wx-botnav").height();
		var btnheight = $(".wx-fixedBtn").height();
		var allheight = barheight + btnheight;
		if(nav != 0){
			$(".wx-fixedBtn").css('bottom',barheight+'px');
			$(".wx-container").css('padding-bottom',allheight +'px');
		}
		//判断底部菜单的个数 给定宽度
		var menu = $(".wx-botnav-menu");
		var navWidth = $(".wx-botnav").width();
		var len = menu.length;
		switch(len){
			case 1:
				menu.width(navWidth);
				break;
			case 2:
				menu.width(navWidth/2-0.5);
				break;
			case 3:
				menu.width(navWidth/3-1);
				break;
			case 4:
				menu.width(navWidth/4-1);
				break;
			default:
				alert("菜单过多~撑不下了");
				break;
		}
		// 判断有无图标 没有则给定行高居中显示
		menu.each(function(){
			var menuicon = $(this).find("i").length;
			if(menuicon == 0){
			$(this).css("line-height",45+"px");
			}
		});
	}
	
	//购物车数量加减操作
	if($(".wx-goodslist-num").length > 0){
		
		$(".wx-goodslist-num").each(function(){
				var me = $(this);
				var plus = $(this).find(".plus");
				var reduce = $(this).find(".reduce");
				
				plus.click(function(){
					var numbox = me.find(".numbox");
					var index = Number(numbox.val());
					if(index > 0){
						index++;
						numbox.val(index);
					}else{
						index = 1;
						numbox.val(index);
					}
				});
				
				reduce.click(function(){
					var numbox = me.find(".numbox");
					var index = Number(numbox.val());
					if(index > 1){
						index--;
						numbox.val(index);
					}else{
						index = 1;
						numbox.val(index);
					}
				});
			});
	}
	
	//九宫格 根据类名给定每个格子的宽度
	if($(".wx-grid ul").length > 0){
		var gridcss = $(".wx-grid ul").attr('class').toString();
		var gridnum = gridcss.match(/\d+\b/);
		var gridOneWidth = 100/gridnum;
		$(".wx-grid-one").css("width",gridOneWidth+"%");
	}
	
	
//	//分类菜单高度
	if($(".wx-classify-leftbar").length > 0){
		var rtbarHeight = $(".wx-classify-rightlist").height();
		var lfbarHeight = $(".wx-classify-leftbar").height();
		if(rtbarHeight > lfbarHeight){
			$(".wx-classify-leftbar").height(rtbarHeight);
		}
	}
	
	//tab 标签页
	if($(".wx-tab").length > 0){
		var tabWidth = $(".wx-tab-nav").width();  //
		var tabmenu = $(".wx-navone");
		var tablen = tabmenu.length;
		
		var content = $(".wx-tab-container");
		var contentOne = $('.wx-tablist-content');
		
		var contentfirst = $('.wx-tablist-content').eq(0);
		var contentfirstH = contentfirst.height();
		
		
		contentOne.hide();
		contentfirst.show();
		contentOne.width(tabWidth);
		content.height(contentfirstH);
		
		switch(tablen){
			case 1:
				tabmenu.width(tabWidth);
				content.width(tabWidth);
				break;
			case 2:
				tabmenu.width(tabWidth/2);
				content.width(tabWidth*2);
				break;
			case 3:
				tabmenu.width(tabWidth/3);
				content.width(tabWidth*3);
				break;
			case 4:
				tabmenu.width(tabWidth/4);
				content.width(tabWidth*4);
				break;
			default:
				tabmenu.width(tabWidth/4);
				break;
		};
		
		$(".wx-navone").on("tap",function(){
			var index = tabmenu.index(this);
			tabmenu.removeClass("active");
			$(this).addClass("active");
			contentOne.hide();
			contentOne.eq(index).show();
			var currentHeight = contentOne.eq(index).height();
			content.height(currentHeight);
			
		});
	}
	
	
	//滑动删除控件
	function dele(father,delebox){
		this.father = father;
		this.delebox = delebox;
		this.movedele = function(){
			$(father).each(function(){
				var listHeight  = $(this).height();
				var box = $(this).find(delebox);
				box.height(listHeight);
				box.css("line-height",listHeight+"px");
				$(this).off("swipeLeft").off("swipeRight");
				$(this).on("swipeLeft",leftfun).on("swipeRight",rightfun);
				function leftfun(){
					$(this).addClass("move");
				}
				function rightfun(){
					$(this).removeClass("move");
				}
			});
			$(delebox).on("tap",function(){
				if(confirm("确定删除？")){
					$(this).parent().remove();
				}else{
					return;
				}
			})
		}
	}
	
	//弹出框
	function wxdialog(title,content,surebtn,canclebtn){
		this.title = title;
		this.content = content;
		this.surebtn = surebtn;
		this.canclebtn = canclebtn;
		this.showdialog = function(){
			var openbtn =$('.wx-open-dialog');
			var html = '<div class="wx-dialog"><div class="wx-dialogBody"><div class="wx-dialogInner"><h4>'
						+ title +'</h4><p>'+ content +'</p></div><div class="wx-confirmBtn"></div></div></div>';
			if(surebtn.length > 0 && canclebtn.length > 0){
				var btnhtml = '<button class="sure">'+ surebtn +'</button><button class="cancle">'+ canclebtn +'</button>';
			}else{
				var btnhtml = '<button>'+ surebtn +'</button>';
			}
			$(html).appendTo('html');
			$(btnhtml).appendTo('.wx-confirmBtn');
			$(".wx-dialog button").click(function(){
				$(".wx-dialog").remove();
			});
		}
		
	};
	
	
	
})