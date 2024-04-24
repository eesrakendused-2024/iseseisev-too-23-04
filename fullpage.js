new fullpage('#fullpage', {
	autoscrolling: true,
	navigation: true,
	anchors:['section1', 'section2', 'section3', 'section4','section5','section6'],
	navigationTooltips: ['Esileht', 'Oskused', 'Tööd', 'Hobid', 'Lemmikmuusika', 'Mäng'],
	showActiveTooltip: true,
	controlArrows: false,
	slidesNavigation: true
})

$(document).ready(function() {
	$('#fullpage').fullpage({
    lazyLoading: true,
    verticalCentered: true,
		controlArrows: false,
		slidesNavigation: true,
    scrollBar: true,
    navigation: true,
    scrollOverflow: true,
    responsiveWidth: 768,
    // paddingTop: '50px',
    // fixedElements: '.navbar-fixed-top',
    menu: '#myNavbar',
    normalScrollElements: '.modal'
  });
  
});