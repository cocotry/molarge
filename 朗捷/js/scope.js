
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        direction: 'vertical',
        onInit: function(swiper){
        	$('.scope-01-img').css({'animation':'scope01 2s 0s forwards'})
        	$('.scope-01-press').css({'animation':'scopePress .5s 2s forwards'})
        	$('.scope-01-title').css({'animation':'scopeFont 1.5s 1.5s forwards'})
        	$('.scope-01-brief').css({'animation':'scopeFont 2s 1.5s forwards'})
        	$('.scope-01-icon').css({'animation':'scopeFont 2.5s 1.5s forwards'})
    	},/*初始化进入页面执行*/
    	onSlideChangeEnd: function(swiper){
    		var n=swiper.activeIndex;
	    	if(n==0){/*判断当进入这个页面的时候执行当不在这个页面的时候CSS样式执行原先的*/
	    		$('.scope-01-img').css({'animation':'scope01 2s 0s forwards'})
        		$('.scope-01-press').css({'animation':'scopePress .5s 2s forwards'})
        		$('.scope-01-title').css({'animation':'scopeFont 1.5s 1.5s forwards'})
	        	$('.scope-01-brief').css({'animation':'scopeFont 2s 1.5s forwards'})
	        	$('.scope-01-icon').css({'animation':'scopeFont 2.5s 1.5s forwards'})
	    	}else{
	    		$('.scope-01-img').css({'animation':'forwards'})
        		$('.scope-01-press').css({'animation':'forwards'})
        		$('.scope-01-title').css({'animation':'forwards'})
	        	$('.scope-01-brief').css({'animation':'forwards'})
	        	$('.scope-01-icon').css({'animation':'forwards'})
	    	}
	    	if(n==1){
	    		$('.scope-02-title').css({'animation':'scope02Font .5s .5s forwards'})
	    		$('.scope-02-brief').css({'animation':'scope02Brief .5s 1s forwards'})
	    		$('.scope-02-icon').css({'animation':'scope02Font .5s 1.5s forwards'})
	    		
	    	}else{
	    		$('.scope-02-title').css({'animation':'forwards'})
	    		$('.scope-02-brief').css({'animation':'forwards'})
	    		$('.scope-02-icon').css({'animation':'forwards'})
	    	}
	    	if(n==2){
	    		$('.scope-03-computer').css({'animation':'scope03Computer 1s 0s forwards'})
	    		$('.scope-03-phone').css({'animation':'scope03Phone 1s 1s forwards'})
        		$('.scope-03-title').css({'animation':'scope03title 1s 2.5s forwards'})
        		$('.scope-03-app,.scope-03-website').css({'animation':'scope03title 1s 2s forwards'})
	    	}else{
	    		$('.scope-03-computer').css({'animation':'forwards'})
	    		$('.scope-03-phone').css({'animation':'forwards'})
        		$('.scope-03-title').css({'animation':'forwards'})
        		$('.scope-03-app,.scope-03-website').css({'animation':'forwards'})
	    	}
	    	if(n==3){
	    		$('.scope-04-left').css({'animation':'scope04Left 1s 1s forwards'})
	    		$('.scope-04-right').css({'animation':'scope04Right 1s 0s forwards'})
	    		$('.scope-04-title').css({'animation':'scope01 1s 1.5s forwards'})
	    		$('.scope-04-brief').css({'animation':'scope01 1s 2s forwards'})
	    		$('.scope-04-icon').css({'animation':'scope01 1s 2.5s forwards'})
	    	}else{
	    		$('.scope-04-left').css({'animation':''})
	    		$('.scope-04-right').css({'animation':''})
	    		$('.scope-04-title').css({'animation':'forwards'})
	    		$('.scope-04-brief').css({'animation':'forwards'})
	    		$('.scope-04-icon').css({'animation':'forwards'})
	    	}
	    }
    });
    
$(function(){
		$('.index-nav-icon').click(function(){
			$('.index-nav').slideToggle();
		})
	})