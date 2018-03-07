
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
//      direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        direction: 'vertical',
        onInit: function(swiper){
        	$('.index-01-bg').css({'animation':'indexBackground 3s 0s forwards'})
        	$('.index-01-body-title').css({'animation':'indexFont 2s .5s forwards'})
        	$('.index-01-body-font').css({'animation':'indexFont 2s 1s forwards'})
        	$('.index-01-body ul').css({'animation':'indexFont 2s 1.5s forwards'})
        	$('.index-01-font').css({'animation':'indexFont 2s 2s forwards'})
    	},/*初始化进入页面执行*/
    	onSlideChangeEnd: function(swiper){
    		var n=swiper.activeIndex;
	    	if(n==0){/*判断当进入这个页面的时候执行当不在这个页面的时候CSS样式执行原先的*/
	    		$('.index-01-bg').css({'animation':'indexBackground 3s 0s forwards'})
	        	$('.index-01-body-title').css({'animation':'indexFont 2s .5s forwards'})
	        	$('.index-01-body-font').css({'animation':'indexFont 2s 1s forwards'})
	        	$('.index-01-body ul').css({'animation':'indexFont 2s 1.5s forwards'})
	        	$('.index-01-font').css({'animation':'indexFont 2s 2s forwards'})
	        	$('.nav li a').removeClass('t');
	    	}else{
	    		$('.index-01-bg').css({'animation':'forwards'})
	        	$('.index-01-body-title').css({'animation':'forwards'})
	        	$('.index-01-body-font').css({'animation':'forwards'})
	        	$('.index-01-body ul').css({'animation':'forwards'})
	        	$('.index-01-font').css({'animation':'forwards'})
	    	}
	    	if(n==1){
	    		$('.index-02-font').css({'animation':'index02 1s .5s forwards'})
	    		$('.index-02-title').css({'animation':'indexFont 1s .5s forwards'})
	    		$('.index-02-icon').css({'animation':'indexFont 1s .5s forwards'})
	    		$('.index-02-icon-a span').css({'animation':'li02 .5s 1.5s forwards'})
	    		$('.index-02-icon-b span').css({'animation':'li02 .5s 2s forwards'})
	    		$(".nav li a").addClass('t');
	    	}else{
//	    		$('.index-02-bg').css({'animation':'forwards'})
	    		$('.index-02-icon').css({'animation':'forwards'})
	    		$('.index-02-title').css({'animation':'forwards'})
	    		$('.index-02-font').css({'animation':'forwards'})
	    		$('.index-02-icon-a span').css({'animation':'forwards'})
	    		$('.index-02-icon-b span').css({'animation':'forwards'})
	    	}
	    	if(n==2){
//	    		$('.index-03-bg').css({'animation':'indexBackground 3s 0s forwards'})
	    		$('.index-03-title').css({'animation':'index03A 2s .5s forwards'})
	    		$('.index-03-font-a').css({'animation':'index03B 2s .5s forwards'})
	    		$('.index-03-font-b').css({'animation':'index03C 2s .5s forwards'})
	    	}else{
//	    		$('.index-03-bg').css({'animation':'forwards'})
	    		$('.index-03-title').css({'animation':'forwards'})
	    		$('.index-03-font-a').css({'animation':'forwards'})
	    		$('.index-03-font-b').css({'animation':'forwards'})
	    	}
	    	if(n==3){
	    		$('.index-04-bg').css({'animation':'indexBackground 3s 0s forwards'})
	    		$('.index-04-border').css({'animation':'border04 1s 1s forwards'})
	    		$('.index-04-title').css({'animation':'indexFont 1s 1.5s forwards'})
	    		$('.index-04-font').css({'animation':'indexFont 1s 2s forwards'})
	    	}else{
	    		$('.index-04-bg').css({'animation':'forwards'})
	    		$('.index-04-border').css({'animation':'forwards'})
	    		$('.index-04-title').css({'animation':'forwards'})
	    		$('.index-04-font').css({'animation':'forwards'})
	    	}
	    }
    });
    
$(function(){
	$('.index-nav-icon').click(function(){
		$('.index-nav').slideToggle();
		$(".header").toggleClass("active"); return false;
	})
})
$(function(){
	var starsBoxWidth=$(".index-03-stars-box").width();
	var starsBoxHeight=$(".index-03-stars-box").height();
	setInterval(function(){
		$(".index-03-stars-a").css({"left":Math.floor(Math.random()*starsBoxWidth)+'px',"top":Math.floor(Math.random()*starsBoxHeight)+'px',"width":Math.floor(Math.random()*2)+'px',"height":Math.floor(Math.random()*2)+'px','animation':'index03D 1s 0s forwards'});
		$(".index-03-stars-b").css({"left":Math.floor(Math.random()*starsBoxWidth)+'px',"top":Math.floor(Math.random()*starsBoxHeight)+'px',"width":Math.floor(Math.random()*2)+'px',"height":Math.floor(Math.random()*2)+'px','animation':'index03D 1s 0s forwards'});
		$(".index-03-stars-box").append('<span class="index-03-stars-a"></span><span class="index-03-stars-b"></span>');
	},1000)
	setInterval(function(){
		$(".index-03-stars-a:last-child").remove();
		$(".index-03-stars-b:last-child").remove();
	},1000)
			
})
