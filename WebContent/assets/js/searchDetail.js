  const $newbornBaby = $("img#newbornBaby");
    const $baby = $("img#baby");
    const $kinder = $("img#kinder");
    const $elementary =$("img#elementary");
    const $monday = $("img#monday");
    const $tuesday = $("img#tuesday ");
    const $wednesday = $("img#wednesday");
    const $thursday = $("img#thursday");
    const $friday = $("img#friday");
    const $saturday = $("img#saturday");
    const $sunday = $("img#sunday");
    const $morning = $("img#morning");
    const $lunch = $("img#lunch");
    const $dinner = $("img#dinner");
    const $twenty= $("img#twenty");
    const $thirty= $("img#thirty");
    const $fourty= $("img#fourty");
    const $fifty= $("img#fifty");
    const $sixty= $("img#sixty");
    const $play = $("img#play ");
    const $goingSchool = $("img#goingSchool");
    const $makeEat = $("img#makeEat");
    const $cleaning = $("img#cleaning");
    const $study = $("img#study");
    

    $('#close').on("click", function(){
    	var newbornBaby =$('#newbornBaby').hasClass('on');
    	var baby =$('#baby').hasClass('on');
    	var kinder =$('#kinder').hasClass('on');
    	var elementary =$('#elementary').hasClass('on');
    	var monday =$('#monday').hasClass('on');
    	var tuesday =$('#tuesday').hasClass('on');
    	var wednesday =$('#wednesday').hasClass('on');
    	var thursday =$('#thursday').hasClass('on');
    	var friday =$('#friday').hasClass('on');
    	var saturday =$('#saturday').hasClass('on');
    	var sunday =$('#sunday').hasClass('on');
    	var morning =$('#morning').hasClass('on');
    	var lunch =$('#lunch').hasClass('on');
    	var dinner =$('#dinner').hasClass('on');
    	var twenty =$('#twenty').hasClass('on');
    	var thirty =$('#thirty').hasClass('on');
    	var fourty =$('#fourty').hasClass('on');
    	var fifty =$('#fifty').hasClass('on');
    	var sixty =$('#sixty').hasClass('on');
    	var play =$('#play').hasClass('on');
    	var goingSchool =$('#goingSchool').hasClass('on');
    	var makeEat =$('#makeEat').hasClass('on');
    	var cleaning =$('#cleaning').hasClass('on');
    	var study =$('#study').hasClass('on');
    	 
    	
    	/*window.parent.postMessage(
    		    // ????????? data (??????????????? ????????? ?????????)
    		    { functionName : 'modal',
    		    	baby:baby

    		    
    		    }
    		    // ???????????? ?????????
    		    // , 'http://test.com'
    		    // ?????? ???????????? ????????? ?????? ( ???????????? ?????? )
    		    , '*' 
    		);
    	*/
    	
    	window.parent.location.href="/mommy_workspace/service/SearchMomOk.ser?newbornBaby="+newbornBaby +"&baby="+baby;
  
    	
    	/*window.parent.location.reload(); // ????????? ???????????? */    
    	/*window.parent.location.href = url;*/
    	
    	
    });

    $newbornBaby.on("click",function(){

        if($newbornBaby.attr('src')=='../../images/?????????.png'){
    		$newbornBaby.removeClass('on');
            $newbornBaby.attr('src','../../images/?????????no.png');
			}else{
				$newbornBaby.attr('src','../../images/?????????.png');
				$newbornBaby.addClass('on');
			}
    })

    $baby.on("click",function(){
        if($baby.attr('src')=='../../images/??????.png'){
        	$baby.removeClass('on');
            $baby.attr('src','../../images/??????no.png');
			}else{$baby.attr('src','../../images/??????.png');
			$baby.addClass('on');
			}
    })
   
    $kinder.on("click",function(){
        if($kinder.attr('src')=='../../images/?????????.png'){
        	$kinder.removeClass('on');
            $kinder.attr('src','../../images/?????????no.png');
			}else{$kinder.attr('src','../../images/?????????.png');
			$kinder.addClass('on');}
    })
    $elementary.on("click",function(){
        if($elementary.attr('src')=='../../images/????????????.png'){
        	$elementary.removeClass('on');
            $elementary.attr('src','../../images/????????????no.png');
			}else{$elementary.attr('src','../../images/????????????.png');
			$elementary.addClass('on');}
    })
    $monday.on("click",function(){
        if($monday.attr('src')=='../../images/???.png'){
        	$monday.removeClass('on');
            $monday.attr('src','../../images/???1.png');
			}else{
			$monday.attr('src','../../images/???.png');
			$monday.addClass('on');}
    })
    $tuesday.on("click",function(){
        if($tuesday.attr('src')=='../../images/???.png'){
        	$tuesday.removeClass('on');
            $tuesday.attr('src','../../images/???1.png');
			}else{$tuesday.attr('src','../../images/???.png');
			$tuesday.addClass('on');}
    })
    $wednesday.on("click",function(){
        if($wednesday.attr('src')=='../../images/???.png'){
        	$wednesday.removeClass('on');
            $wednesday.attr('src','../../images/???1.png');
			}else{$wednesday.attr('src','../../images/???.png');
			$wednesday.addClass('on');}
    })
    $thursday.on("click",function(){
        if($thursday.attr('src')=='../../images/???.png'){
        	$thursday.removeClass('on');
            $thursday.attr('src','../../images/???1.png');
			}else{$thursday.attr('src','../../images/???.png');
			$thursday.addClass('on');}
    })
    $friday.on("click",function(){
        if($friday.attr('src')=='../../images/???.png'){
        	$tuesday.removeClass('on');
            $friday.attr('src','../../images/???1.png');
			}else{$friday.attr('src','../../images/???.png');
        	$tuesday.addClass('on');
}
    })
    $saturday.on("click",function(){
        if($saturday.attr('src')=='../../images/???.png'){
        	$saturday.removeClass('on');
            $saturday.attr('src','../../images/???1.png');
			}else{$saturday.attr('src','../../images/???.png');
			saturday.addClass('on');}
    })
    $sunday.on("click",function(){
        if($sunday.attr('src')=='../../images/???.png'){
        	$sunday.removeClass('on');
            $sunday.attr('src','../../images/???1.png');
			}else{$sunday.attr('src','../../images/???.png');
			$sunday.addClass('on');}
    })
    $morning.on("click",function(){
        if($morning.attr('src')=='../../images/??????.png'){
        	$morning.removeClass('on');
            $morning.attr('src','../../images/??????1.png');
			}else{$morning.attr('src','../../images/??????.png');
			$morning.addClass('on');}
    })
    $lunch.on("click",function(){
        if($lunch.attr('src')=='../../images/??????.png'){
			$lunch.removeClass('on');
            $lunch.attr('src','../../images/??????1.png');
			}else{$lunch.attr('src','../../images/??????.png');
			$lunch.addClass('on');}
    })
    $dinner.on("click",function(){
        if($dinner.attr('src')=='../../images/??????.png'){
        	$dinner.removeClass('on');
            $dinner.attr('src','../../images/??????1.png');
			}else{$dinner.attr('src','../../images/??????.png');
			$dinner.addClass('on');}
    })
    $twenty.on("click",function(){
        if($twenty.attr('src')=='../../images/20???.jpg'){
        	$twenty.removeClass('on');
            $twenty.attr('src','../../images/20???1.jpg');
			}else{$twenty.attr('src','../../images/20???.jpg');
			$twenty.addClass('on');}
    })
    $thirty.on("click",function(){
        if($thirty.attr('src')=='../../images/30???.jpg'){
        	$thirty.removeClass('on');
            $thirty.attr('src','../../images/30???1.jpg');
			}else{$thirty.attr('src','../../images/30???.jpg');
			$thirty.addClass('on');}
    })
    $fourty.on("click",function(){
        if($fourty.attr('src')=='../../images/40???.jpg'){
        	$fourty.removeClass('on');
            $fourty.attr('src','../../images/40???1.jpg');
			}else{$fourty.attr('src','../../images/40???.jpg');
		  	$fourty.addClass('on');}
    })
    $fifty.on("click",function(){
        if($fifty.attr('src')=='../../images/50???.jpg'){
        	$fifty.removeClass('on');
            $fifty.attr('src','../../images/50???1.jpg');
			}else{$fifty.attr('src','../../images/50???.jpg');
			$fifty.addClass('on');}
    })
    $sixty.on("click",function(){
        if($sixty.attr('src')=='../../images/60???.jpg'){
        	$sixty.removeClass('on');
            $sixty.attr('src','../../images/60???1.jpg');
			}else{$sixty.attr('src','../../images/60???.jpg');
			$sixty.addClass('on');}
    })
    $play.on("click",function(){
        if($play.attr('src')=='../../images/????????????.png'){
        	$play.removeClass('on');
            $play.attr('src','../../images/no????????????.png');
			}else{$play.attr('src','../../images/????????????.png');
			$play.addClass('on');}
    })
    $goingSchool.on("click",function(){
        if($goingSchool.attr('src')=='../../images/?????????.png'){
        	$goingSchool.removeClass('on');
            $goingSchool.attr('src','../../images/no?????????.png');
			}else{$goingSchool.attr('src','../../images/?????????.png');
			$goingSchool.addClass('on');}
    })
    $makeEat.on("click",function(){
        if($makeEat.attr('src')=='../../images/???????????????.png'){
        	$makeEat.removeClass('on');
            $makeEat.attr('src','../../images/no???????????????.png');
			}else{$makeEat.attr('src','../../images/???????????????.png');
			$makeEat.addClass('on');}
    })
    $cleaning.on("click",function(){
        if($cleaning.attr('src')=='../../images/??????.png'){
        	$cleaning.removeClass('on');
            $cleaning.attr('src','../../images/no??????.png');
			}else{$cleaning.attr('src','../../images/??????.png');
			$cleaning.addClass('on');}
    })
    $study.on("click",function(){
        if($study.attr('src')=='../../images/????????????.png'){
        	$study.removeClass('on');
        	$study.attr('src','../../images/no????????????.png');
			}else{$study.attr('src','../../images/????????????.png');
			$study.addClass('on');}
    })
   


