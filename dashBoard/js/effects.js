$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
				
   });
   
});

$(document).ready(function(){
	//SLider control code   
 /* $('#slider').nivoSlider({
	    effect: 'random',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 3000,
		startSlide: 0,
		directionNav: true,
		controlNav: true,
		controlNavThumbs: false,
		pauseOnHover: true,
		manualAdvance: false,
		/*prevText: 'Prev',
		nextText: 'Next',
		randomStart: false,*/	
	/*});*/
});


$(document).ready(function(){
	
	//Hide and Show game.
	       //Link variables
		   var air = $('#air');
		   var bulk = $('#bulk');
		   var capital = $('#capital');
		   var haulage = $('#haulage');
		   
		   //Paragraphs
		   var ar = $('#ar');
		   var bk = $('#bk');
		   var cl = $('#cl');
		   var he = $('#he');
		   
		   $(ar).show();
		   
		   //Process for air clicked
		   $(air).click(function(){
			  if($(bk).css('display') !== 'none'){
				  $(bk).hide();
				  $(ar).show();
				  $(bulk).removeClass("large");
			  }else if($(cl).css('display') !== 'none'){
				  $(cl).hide();
				  $(ar).show();
				  $(capital).removeClass("large");
			  }else if($(he).css('display') !== 'none'){
				  $(he).hide();
				  $(ar).show();
				  $(haulage).removeClass("large");
			  }else{
				  $(ar).show();
				  //$(air).addClass("large");
			  }
		   });
		   
		   
		   //Process for bulk clicked
		   $(bulk).click(function(){
			  if($(ar).css('display') !== 'none'){
				  $(ar).hide();
				  $(bk).show();
				  $(air).removeClass("large");
			  }else if($(cl).css('display') !== 'none'){
				  $(cl).hide();
				  $(bk).show();
				  $(capital).removeClass("large");
			  }else if($(he).css('display') !== 'none'){
				  $(he).hide();
				  $(bk).show();
				  $(haulage).removeClass("large");
			  }else{
				  $(bk).show();
				  $(bulk).addClass("large");
			  }
		   });
		   
		   
		   //Process for capital clicked
		   $(capital).click(function(){
			  if($(ar).css('display') !== 'none'){
				  $(ar).hide();
				  $(cl).show();
				  $(air).removeClass("large");
			  }else if($(bk).css('display') !== 'none'){
				  $(bk).hide();
				  $(cl).show();
				  $(bulk).removeClass("large");
			  }else if($(he).css('display') !== 'none'){
				  $(he).hide();
				  $(cl).show();
				  $(haulage).removeClass("large");
			  }else{
				  $(cl).show();
				  $(capital).addClass("large");
			  }
		   });
		   
		   
		   //Process for capital clicked
		   $(haulage).click(function(){
			  if($(ar).css('display') !== 'none'){
				  $(ar).hide();
				  $(he).show();
				  $(air).removeClass("large");
			  }else if($(bk).css('display') !== 'none'){
				  $(bk).hide();
				  $(he).show();
				  $(bulk).removeClass("large");
			  }else if($(cl).css('display') !== 'none'){
				  $(cl).hide();
				  $(he).show();
				  $(capital).removeClass("large");
			  }else{
				  $(he).show();
				  $(haulage).addClass("large");
			  }
		   });
});