$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        autoScrolling: true,
        navigation: true,
        anchors: ['Avaleht', 'Oskused', 'Kontakt', 'Tood', 'Hobid', 'Muusika', 'Mang'],
        navigationTooltips: ['Avaleht', 'Oskused', 'Kontakt', 'Tööd', 'Hobid', 'Muusika', 'Mäng'],
        showActiveTooltip: true,
        scrollOverflow: true,
        scrollingSpeed: 1000,
        controlArrows: false,
        slidesNavigation: true,
        keyboardScrolling: true,
        animateAnchor: true
    });

});




