/*animation and transitions for the DOM STARTS here */

$(".sidebar").css("width","100");
$(".answer-content, .billing-content, .profile-content, .hide-content, .blur").hide();


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
  

//$('.nav li a').click(function() {
//$(".sidebar").css("color","green");
//})


$(function () {
	$('#btn-profile').click( function() {
		if( $(".profile-content, .blur").is(":hidden")){
			$(".fake-width, .overlay-content").hide();
			$('.blur').foggy({
		     	opacity: 1.5,
		     });
			$(".profile-content").animate({
				'width': 'toggle'
			});
            $(".blur").fadeIn(1000);
		}
		else{
			$(".profile-content, .blur").hide();
            $(".fake-width, .overlay-content").fadeIn();
		}

	});

	$('#btn-answer').click( function() {
        if( $(".answer-content, .blur").is(":hidden")){
            $(".fake-width, .overlay-content").hide();
            $('.blur').foggy({
                opacity: 1.5,
             });
            $(".answer-content").animate({
                'width': 'toggle'
            });
            $(".blur").fadeIn(1000);
        }
        else{
            $(".answer-content, .blur").hide();
            $(".fake-width, .overlay-content").fadeIn();
        }

    });

	$('#btn-billing').click( function() {
        if( $(".billing-content, .blur").is(":hidden")){
            $(".fake-width, .overlay-content").hide();
            $('.blur').foggy({
                opacity: 1.5,
             });
            $(".billing-content").animate({
                'width': 'toggle'
            });
            $(".blur").fadeIn(1000);
        }
        else{
            $(".billing-content, .blur").hide();
            $(".fake-width, .overlay-content").fadeIn();
        }

    });

});


$('.nav li a').click(function(e) {

    $('.nav li').removeClass('active');

    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
        $parent.addClass('active');
    }
    e.preventDefault();
});    /*animation and transitions for the DOM ENDS here */