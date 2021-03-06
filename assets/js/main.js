/*animation and transitions for the DOM STARTS here */


/*default actions when the DOM loads */
$('#date-picker').datepicker();


$(".sidebar").css("width", "100");
$(".answer-content, .billing-content, .profile-content, .invite-content, .hide-content, .settings-content").hide();
$(".ask-dr-main, .chat-content, .panel-bill-plan-daily, .panel-bill-plan-monthly, .panel-bill-plan-yearly").hide();


/*transitions for the sidebar hover */
$(".sidebar").hover(function() {

        $(".sidebar").stop().animate({
            width: '260px'
        });
        $(".hide-content").show();
    },
    function() {

        $(".sidebar").stop().animate({
            width: '100px'
        });
        $(".hide-content").hide();
        //$('.nav li').removeClass('active');
        if ($(".profile-content").is(":visible") || $(".answer-content").is(":visible") || $(".billing-content").is(":visible") || $(".invite-content").is(":visible") || $(".settings-content").is(":visible")) {
            $(".sidebar").stop().width('260');
            $(".hide-content").show();
        } else {
            $(".sidebar").width('100');
            $(".hide-content").hide();
            $('.nav li').removeClass('active');
        }
    });

/*transitions when sidebar link is clicked */

$(function() {
    $('#btn-profile').click(function() {
        $(".answer-content, .billing-content, .invite-content, .settings-content, .fake-width").hide();
        if ($(".profile-content").is(":hidden")) {
            $('.overlay-content').foggy({
                opacity: 1.5,
            });
            $(".profile-content").animate({
                'width': 'toggle'
            });
            $('.overlay-content').css('pointer-events', 'none');
        } else {
            $('.overlay-content').css('filter', 'unset').show();
            $('.overlay-content').css('pointer-events', 'unset');
            $(".profile-content").hide();
            $(".fake-width").show();
        }

    });

    $('#btn-answer').click(function() {
        $(".profile-content, .billing-content, .invite-content, .settings-content, .fake-width").hide();
        if ($(".answer-content").is(":hidden")) {
            $('.overlay-content').foggy({
                opacity: 1.5,
            });
            $(".answer-content").animate({
                'width': 'toggle'
            });
            $('.overlay-content').css('pointer-events', 'none');
        } else {
            $('.overlay-content').css('filter', 'unset').show();
            $('.overlay-content').css('pointer-events', 'unset');
            $(".answer-content").hide();
            $(".fake-width").show();
        }

    });

    $('#btn-billing').click(function() {
        $(".answer-content, .profile-content, .invite-content, .settings-content, .fake-width").hide();
        if ($(".billing-content").is(":hidden")) {
            $('.overlay-content').foggy({
                opacity: 1.5,
            });
            $(".billing-content").animate({
                'width': 'toggle'
            });
            $('.overlay-content').css('pointer-events', 'none');
        } else {
            $('.overlay-content').css('filter', 'unset').show();
            $('.overlay-content').css('pointer-events', 'unset');
            $(".billing-content").hide();
            $(".fake-width").show();
        }

    });

    $('#btn-invite').click(function() {
        $(".profile-content, .billing-content, .answer-content, .settings-content, .fake-width").hide();
        if ($(".invite-content").is(":hidden")) {
            $('.overlay-content').foggy({
                opacity: 1.5,
            });
            $(".invite-content").animate({
                'width': 'toggle'
            });
            $('.overlay-content').css('pointer-events', 'none');
        } else {
            $('.overlay-content').css('filter', 'unset').show();
            $('.overlay-content').css('pointer-events', 'unset');
            $(".invite-content").hide();
            $(".fake-width").show();
        }

    });
    $('#btn-settings').click(function() {
        $(".profile-content, .billing-content, .answer-content, .invite-content, .fake-width").hide();
        if ($(".settings-content").is(":hidden")) {
            $('.overlay-content').foggy({
                opacity: 1.5,
            });
            $(".settings-content").animate({
                'width': 'toggle'
            });
            $('.overlay-content').css('pointer-events', 'none');
        } else {
            $('.overlay-content').css('filter', 'unset').show();
            $('.overlay-content').css('pointer-events', 'unset');
            $(".settings-content").hide();
            $(".fake-width").show();
        }

    });

});


/*transitions for mobile-view when clicked */

$(function() {
    $('#btn-mobile-profile').click(function() {
        $(".answer-content, .billing-content, .invite-content, .settings-content").hide();
        if ($(".profile-content").is(":hidden")) {
            $(".overlay-content").hide();


            $(".profile-content").animate({
                'width': 'toggle'
            });
        } else {
            $(".profile-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

    $('#btn-mobile-answers').click(function() {
        $(".profile-content, .billing-content, .invite-content, .settings-content").hide();
        if ($(".answer-content").is(":hidden")) {
            $(".overlay-content").hide();

            $(".answer-content").animate({
                'width': 'toggle'
            });
        } else {
            $(".answer-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

    $('#btn-mobile-billing').click(function() {
        $(".profile-content, .answer-content, .invite-content, .settings-content").hide();
        if ($(".billing-content").is(":hidden")) {
            $(".overlay-content").hide();

            $(".billing-content").animate({
                'width': 'toggle'
            });
        } else {
            $(".billing-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

    $('#btn-mobile-invite').click(function() {
        $(".profile-content, .answer-content, .billing-content, .settings-content").hide();
        if ($(".invite-content").is(":hidden")) {
            $(".overlay-content").hide();

            $(".invite-content").animate({
                'width': 'toggle'
            });
        } else {
            $(".invite-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

    $('#btn-mobile-settings').click(function() {
        $(".profile-content, .answer-content, .billing-content, .invite-content").hide();
        if ($(".settings-content").is(":hidden")) {
            $(".overlay-content").hide();

            $(".settings-content").animate({
                'width': 'toggle'
            });
        } else {
            $(".settings-content").hide();
            $(".overlay-content").fadeIn();
        }

    });

});

$('#daily-preview').click(function() {
        $(".panel-bill-plan-monthly, .panel-bill-plan-yearly").hide();
        $(".panel-bill-plan-daily").fadeIn();
    });
$('#monthly-preview').click(function() {
        $(".panel-bill-plan-daily, .panel-bill-plan-yearly").hide();
        $(".panel-bill-plan-monthly").fadeIn();
    });
$('#yearly-preview').click(function() {
        $(".panel-bill-plan-monthly, .panel-bill-plan-daily").hide();
        $(".panel-bill-plan-yearly").fadeIn();
    });

/* browser resize and mobile responsiveness */

$(window).on('resize', function(event) {
    var windowSize = $(window).width();
    //when a user on a mobile view clicks on a link and resizes to web view, we want to hide the mobile view and switch to web view
    if (windowSize > 960 && $(".profile-content, .answer-content, .billing-content, .invite-content, .settings-content").is(":visible")) {
        $(".profile-content, .answer-content, .billing-content, .invite-content, .settings-content").hide();
        $(".overlay-content").css('filter', 'unset').fadeIn();
    }
    //when a user on a web view clicks on a link and resizes to mobile view. we want to hide the overlay-content and switch to mobile view.
    else if (windowSize < 960 && $(".profile-content,.answer-content,.billing-content, .invite-content, .settings-content").is(":visible") && $(".overlay-content").is(":visible")) {
        $(".overlay-content").hide();
    } else {

    }
});

/* answers page transitions */


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