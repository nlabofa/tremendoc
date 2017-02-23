/*animation and transitions for the DOM STARTS here */


/*default actions when the DOM loads */
$(".sidebar").css("width","100");
$(".answer-content, .billing-content, .profile-content, .hide-content").hide();


/*transitions for the sidebar hover */
$(".sidebar").hover(function(){

    $(".sidebar").stop().animate({width: '260px'});
    $(".hide-content").show();
    },
    function(){
       
     $(".sidebar").stop().animate({width: '100px'});
        $(".hide-content").hide();
        //$('.nav li').removeClass('active');
         if ( $(".profile-content").is(":visible") || $(".answer-content").is(":visible") || $(".billing-content").is(":visible")) {
        $(".sidebar").stop().width('260');
         $(".hide-content").show();
      }
      else{
        $(".sidebar").width('100');
        $(".hide-content").hide();
        $('.nav li').removeClass('active');
    }  
});
  
/*transitions when sidebar link is clicked */

$(function () {
	$('#btn-profile').click( function() {
        $(".answer-content, .billing-content, .fake-width, .overlay-content").hide();
		if( $(".profile-content").is(":hidden")){
			$('.overlay-content').foggy({
		     	opacity: 1.5,
		     });
			$(".profile-content").animate({
				'width': 'toggle'
			});
            $(".overlay-content").fadeIn(1000);
		}
		else{
            $('.overlay-content').css('filter', 'unset').fadeIn();
			$(".profile-content").hide();
            $(".fake-width").show();
		}

	});

	$('#btn-answer').click( function() {
        $(".profile-content, .billing-content, .fake-width, .overlay-content").hide();
        if( $(".answer-content").is(":hidden")){
            $('.overlay-content').foggy({
                opacity: 1.5,
             });
            $(".answer-content").animate({
                'width': 'toggle'
            });
            $(".overlay-content").fadeIn(1000);
        }
        else{
            $('.overlay-content').css('filter', 'unset').fadeIn();
            $(".answer-content").hide();
            $(".fake-width").show();
        }

    });

	$('#btn-billing').click( function() {
        $(".answer-content, .profile-content, .fake-width, .overlay-content").hide();
        if( $(".billing-content").is(":hidden")){
            $('.overlay-content').foggy({
                opacity: 1.5,
             });
            $(".billing-content").animate({
                'width': 'toggle'
            });
            $(".overlay-content").fadeIn(1000);
        }
        else{
            $('.overlay-content').css('filter', 'unset').fadeIn();
            $(".billing-content").hide();
            $(".fake-width").show();
        }

    });

});

/*transitions for mobile-view when clicked */

$(function () {
    $('#btn-mobile-profile').click( function() {
        $(".answer-content, .billing-content").hide();
        if( $(".profile-content").is(":hidden")){
            $(".overlay-content").hide();

            
            $(".profile-content").animate({
                'width': 'toggle'
            });
        }   
        else{
            $(".profile-content").hide();
            $(".overlay-content").fadeIn();
        }

    });
  
    $('#btn-mobile-answers').click( function() {
        $(".profile-content, .billing-content").hide();
        if( $(".answer-content").is(":hidden")){
            $(".overlay-content").hide();
            
            $(".answer-content").animate({
                'width': 'toggle'
            });
        }
        else{
            $(".answer-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

    $('#btn-mobile-billing').click( function() {
        $(".profile-content, .answer-content").hide();
        if( $(".billing-content").is(":hidden")){
            $(".overlay-content").hide();
            
            $(".billing-content").animate({
                'width': 'toggle'
            });
        }
        else{
            $(".billing-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

});

/* browser resize and mobile responsiveness */

  $(window).on('resize', function(event){
    var windowSize = $(window).width(); 
//when a user on a mobile view clicks on a link and resizes to web view, we want to hide the mobile view and switch to web view
    if (windowSize > 960 && $(".profile-content, .answer-content, .billing-content").is(":visible")){
       $(".profile-content, .answer-content, .billing-content").hide();
            $(".overlay-content").css('filter', 'unset').fadeIn();
    }
//when a user on a web view clicks on a link and resizes to mobile view. we want to hide the overlay-content and switch to mobile view.
    else if(windowSize < 960 && $(".profile-content,.answer-content,.billing-content").is(":visible") && $(".overlay-content") .is(":visible")){
        $(".overlay-content").hide();
    } 
    else{

    }
});

/* setting the active class on the sidebar depending on the link clicked */
$('.nav li a').click(function(e) {

    $('.nav li').removeClass('active');

    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
        $parent.addClass('active');
    }
    e.preventDefault();
});  

  /*animation and transitions for the DOM ENDS*/
