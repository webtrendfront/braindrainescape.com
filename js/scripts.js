$(document).ready(function(){
    //Tabs
    $(".tabs").lightTabs();
    
    
	//Scroll To
	$("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href");
        destination = jQuery(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-69}, 1100);
        return false;
    });
    
	//Top fixed menu 
	$(window).scroll(function() {
		var vsh = $(window).scrollTop();
		if (vsh >= 100) {
			$('.navbar-fixed-top').addClass('black');
		}
		else {
			$('.navbar-fixed-top').removeClass('black');
		}
	});

	//Popups colorbox
	$(".popup").colorbox({inline:true});
	$(".photo").colorbox({rel:'group1'});
	
	//Mobile menu
	$('.hamburger').on('click', function(){
		if ($('.mobile_menu ul.sign_in').hasClass('checked')) {
			$('.signin').removeClass('checked');
			$('.mobile_menu ul.sign_in').removeClass('checked');
			$('.navbar-fixed-top').addClass('active');
			$('.mobile_menu ul.menu').addClass('checked');
			$('.hamburger').addClass('checked');
		}
		else if ($(this).hasClass('checked')) {
			$('.navbar-fixed-top').removeClass('active');
			$('.mobile_menu ul.menu').removeClass('checked');
			$(this).removeClass('checked');
		}
		else {
			$('.navbar-fixed-top').addClass('active');
			$('.mobile_menu ul.menu').addClass('checked');
			$(this).addClass('checked');
		}
	});
    
    //Popups init
	$('.signin').on('click', function(){
		if ($('.mobile_menu ul.menu').hasClass('checked')) {
			$('.mobile_menu ul.menu').removeClass('checked');
			$('.navbar-fixed-top').addClass('active');
			$('.mobile_menu ul.sign_in').addClass('checked');
			$('.hamburger').removeClass('checked');
		}
		else if ($(this).hasClass('checked')) {
			$('.navbar-fixed-top').removeClass('active');
			$('.mobile_menu ul.sign_in').removeClass('checked');
			$(this).removeClass('checked');
		}
		else {
			$('.navbar-fixed-top').addClass('active');
			$('.mobile_menu ul.sign_in').addClass('checked');
			$(this).addClass('checked');
		}
	});

	$('.podmenu > a').on('click', function(){
	  $(this).parent().toggleClass('active');
	});

	//Calendar
	$('.booknow a').on('click', function() {
		return false;
	});
    
    

});	

//Google Maps
function initMap() {
    // Specify features and elements to define styles.
    var styleArray = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "-90"
                },
                {
                    "lightness": "-79"
                },
                {
                    "invert_lightness": true
                },
                {
                    "hue": "#2cff00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#007531"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
                },
                {
                    "lightness": -33
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.8
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": 30
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ];
    
    
    
    // Create a map object and specify
    var myLatLng = {lat: 41.7019735, lng: 44.7961178};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        styles: styleArray,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'BrainDrain',
        icon: 'images/braindrain_map.png'
    });
}