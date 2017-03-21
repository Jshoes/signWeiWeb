$(function(){
	//页面跳转函数
	$("#main").load("homepage.html",function(){
		mainpageFn();
	});//页面初始化使用首页
	
	
	//首页回调函数
	function mainpageFn(){
		//调用各页面文字渐变效果
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
		mainBanner();//调用首页轮播图
		mainpage_linkPage();//首页各部分内容跳转
		//如果屏幕在1440下设置首页banner高度680
		var widths=$(window).width();
		$(window).resize(function(){//当屏幕窗口变化时候重置系数
			widths=$(window).width();
		})
		if(widths <= 1440){
			$(".mainpage_banner").css("height","680px");
		}
	}
	//产品话机回调函数
	function phonepageFn(){
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
	}
	//产品交换机回调函数
	function changepageFn(){
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
	}
	//产品慧话宝回调函数
	function smartpageFn(){
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
	}
	
	//服务页面回调函数
	function serverpageFn(){
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
	}
	//我们页面回调函数
	function ourpageFn(){
		var $disNone=$(".mapBoxDisNon");
		$(".ourpage_mapBox").append($disNone.html());
		var scrollHeight=new ScrollEle($(".boxUpAndFontShow"));
		scrollHeight.scrollEve();
	}
	
	//首页部分跳转函数
	function mainpage_linkPage(){
		var main=$("#main");//首页内容盒子
		var productLink=$(".productpage_link");//产品链接（跳转慧话宝）
		var ourLink=$(".ourpage_link");//我们链接
		var smartLink=$(".productsmartpage_link");//慧话宝链接
		var phoneLink=$(".productphonepage_link");//话机链接
		var changeLink=$(".productchangepage_link");//交换机链接
		var phoneLink=$(".mainpage_linkPhone");//话机部分
		var smartLink=$(".mainpage_linkSmart");//慧话宝部分
		var changeLink=$(".mainpage_linkChange");//交换机部分
		var ourBtn=$(".learnMoreBtn");//我们btn
		var titleBox=$(".mainpage_headerRightLeftPart");
		var titleDetail=$(".mainpage_headerRightLeftPart>li");
		
		//公用添加类名函数
		function addActive(box,eleClassName,className){
			box.find("."+eleClassName).addClass(className);
			$(window).scrollTop(0);//跳转需重置滚动条至顶部
		}
		
		//话机跳转
		phoneLink.on("click",function(e){
			e.stopPropagation();
			main.load("phonepage.html",function(){
				phonepageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//慧话宝跳转
		smartLink.on("click",function(e){
			e.stopPropagation();
			main.load("smartphonepage.html",function(){
				smartpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//点头部产品跳转慧话宝
		productLink.on("click",function(e){
			e.stopPropagation();
			main.load("smartphonepage.html",function(){
				smartpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//交换机跳转
		changeLink.on("click",function(e){
			e.stopPropagation();
			main.load("changepage.html",function(){
				changepageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//我们跳转
		ourBtn.on("click",function(e){
			e.stopPropagation();
			main.load("ourpage.html",function(){
				ourpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"ourpage_link","active");
		});
	};
	//首页轮播图
	function mainBanner(){
		var $bigBox=$(".mainpage_banner");//最大的盒子（移上会暂停）
		var $imgBox=$(".bannerPart");//各部分的盒子
		var $btnDetail=$(".mainpage_bannerBtnDetail");//轮播下标识和跳转按钮
		var $width=$(".bannerPart").width();
		var index=0;
		var Timer;
		$(window).resize(function(){
			$width=$(".bannerPart").width();
		});
		Timer=setInterval(function(){
			index++;
			if(index >= $imgBox.length){
				index=0;
			}
			$btnDetail.removeClass("active").eq(index).addClass("active");
			$imgBox.animate({"left":-$width*index},500);
		},3000);
		//移动到大盒子上暂停轮播
		$bigBox.hover(function(){
			clearInterval(Timer);
		},function(){
			Timer=setInterval(function(){
				index++;
				if(index >= $imgBox.length){
					index=0;
				}
				$btnDetail.removeClass("active").eq(index).addClass("active");
				$imgBox.animate({"left":-$width*index},500);
			},3000);
		});
		//按钮跳转
		$btnDetail.click(function(){
			var num=$(this).index();
			if(num === index){
				return false;
			}else{
				index=num;
				$btnDetail.removeClass("active").eq(index).addClass("active");
				$imgBox.animate({"left":-$width*index},500);
			}
		})
	};
	
	//产品菜单盒子与屏幕浏览器保持同宽
	screenWidth();
	$(window).resize(function(){
		screenWidth();
	})
	function screenWidth(){
		var Timer=setTimeout(function(){
			var widths=$(".header").width();
			$(".productHoleBox").css("width",widths);
		},0);
	}
	
	//响应style（总页面自调用）
	/*(function(){
		if((screen.width >= 1500) && (screen.width <= 1600)){//1600
	        document.getElementById('css').href = 'css/style1600.css';
	    }else if ((screen.width >= 1430) && (screen.width <=1450)){//1400
	        document.getElementById('css').href = 'css/style1440.css' ;
	    }else if ((screen.width >= 1390) && (screen.width <=1410)){//1280
	        document.getElementById('css').href = 'css/style1280.css' ;
	    }else if ((screen.width >= 1300) && (screen.width <=1369)){//1366
	        document.getElementById('css').href = 'css/style1366.css' ;
	    }else if ((screen.width >= 1270) && (screen.width <=1290)){//1280
	        document.getElementById('css').href = 'css/style1280.css' ;
	    }else if (screen.width >= 1700){
	        document.getElementById('css').href = ' ';
	    }
	})();*/
	//qq请求函数（总页面自调用）
	(function(){
 		$("#qq_hidden").html("<script type='text/javascript' src='http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODAwNjMxNF8xNjk2MTFfNDAwODI2MjI3N18' ><\/script>"); 
		setTimeout(function(){
			var iframe=$("iframe");
			iframe.addClass("myIframe");
		},300)
	})();
	//跳转函数（总页面自调用）
	(function(){
		var main=$("#main");//首页内容盒子
		var productLink=$(".productpage_link");//产品链接（跳转慧话宝）
		var mainLink=$(".mainpage_link");//首页链接
		var ourLink=$(".ourpage_link");//我们链接
		var serverLink=$(".serverpage_link");//服务链接
		var smartLink=$(".productsmartpage_link");//慧话宝链接
		var phoneLink=$(".productphonepage_link");//话机链接
		var changeLink=$(".productchangepage_link");//交换机链接
		var titleBox=$(".mainpage_headerRightLeftPart");
		var titleDetail=$(".mainpage_headerRightLeftPart>li");
		
		//跳转首页
		mainLink.on("click",function(e){
			e.stopPropagation();
			main.load("homepage.html",function(){
				mainpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"mainpage_link","active");
		});
		//产品跳转慧话宝
		productLink.on("click",function(e){
			e.stopPropagation();
			main.load("smartphonepage.html",function(){
				smartpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//跳转我们
		ourLink.on("click",function(e){
			e.stopPropagation();
			main.load("ourpage.html",function(){
				ourpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"ourpage_link","active");
		});
		//跳转服务
		serverLink.on("click",function(e){
			e.stopPropagation();
			main.load("serverpage.html",function(){
				serverpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"serverpage_link","active");
		});
		//跳转慧话宝
		smartLink.on("click",function(e){
			e.stopPropagation();
			main.load("smartphonepage.html",function(){
				smartpageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//跳转话机
		phoneLink.on("click",function(e){
			e.stopPropagation();
			main.load("phonepage.html",function(){
				phonepageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		//跳转交换机
		changeLink.on("click",function(e){
			e.stopPropagation();
			main.load("changepage.html",function(){
				changepageFn();
			});
			titleDetail.removeClass("active");
			addActive(titleBox,"productpage_link","active");
		});
		
		//添加active类名公用
		function addActive(box,eleClassName,className){
			box.find("."+eleClassName).addClass(className);
			$(window).scrollTop(0);
		}
		
	})();
	
	//当滚动到各自的高度时文字渐变效果（面向对象 ，需传入jq对象，需引jq实现）
	function ScrollEle(jqEle){
		var that=this;
		this.offsetTop=[];
		jqEle.each(function(i,obj){
			that.offsetTop[i]=$(obj).offset().top;
		});
		this.screen75Per=window.screen.height*0.7;//系数，当内容超过屏幕70%
		this.windowScrollTop=$(window).scrollTop();
		this.jqEle=jqEle;
		return this;
	};
	ScrollEle.prototype.scrollEve=function(){
		var that=this;
		foreach();
		$(window).resize(function(){
			this.screen75Per=window.screen.height*0.7;
			foreach();
		});
		$(window).scroll(function(){
			that.windowScrollTop=$(window).scrollTop();
			foreach();
		});
		
		function foreach(){
			for(var i = 0; i <that.offsetTop.length; i++){
				if(that.offsetTop[i] - that.windowScrollTop <= that.screen75Per){
					$(that.jqEle[i]).css({"top":"0","opacity":"1"});
				}
			}
		}
	};
	
});
