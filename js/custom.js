/*	Javascript code for all elements
/*----------------------------------------------------*/
$(document).ready(function() {
	initMap(".map");
});

/* Initialize materialize scrollspy for smooth scroll to nav points on page */
$(document).ready(function(){
    $('.scrollspy').scrollSpy({
	    scrollOffset: 60
    });
  });

/* initialize materialize parallax */
$(document).ready(function(){
    $('.parallax').parallax();
});

/* materialize carousel */
$('.carousel.carousel-slider').carousel({fullWidth: true});

/* -- swiper js --*/
$(document).ready(function () {
	//initialize swiper when document ready  
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		pagination: '.swiper-pagination',
		paginationClickable: true,
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
	})        
});
 


/* -------- Google Map -------- */
function initMap(elem) {

	if($(elem).length==0){
		return 0;
	};

	//Map start init
    var mapOptions = {
        center: new google.maps.LatLng(36.157091,-86.796667),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{stylers:[{saturation:-100},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:0.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}]
		}
    var contentString = '<div><strong>Dragonfly Screen Graphics</strong></div>'+
        '<div class="street-address">1630 State St.</div>'+
        '<div><span class="city">Nashville, </span>'+
        '<span class="state">TN </span>'+
        '<span class="zipcode">37203</span></div>';
                       
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    var marker = new google.maps.Marker({
    	icon: 'images/map-pin.png',
        map: map,
        title: 'Dragonfly Screen Graphics, Inc.',
        position: map.getCenter() 
        });
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    infowindow.open(map, marker);
}
//end Google Map


/* ------- Foundation Off Canvas Nav --*/
$(document).foundation();

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {
    	$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
  	});
});