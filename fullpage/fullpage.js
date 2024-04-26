new fullpage('#fullpage', {

    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    slidesNavigation: true,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    navigationTooltips: ['Home', 'Skills', 'Contact', 'Program', 'Hobbies', 'Music', 'Game'],
    showActiveTooltip: true,
    controlArrows: false,
    menu: '#menu',


    afterLoad: function(origin, destination, direction){ 
        if (destination.index == 6) { // Target section 7 (index starts at 0)
            initialize(); // Call your initialization function
        }
    }
});