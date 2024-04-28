
new fullpage('#fullpage', {
    
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
    navigationTooltips: ['Kodu', 'Oskused', 'Kontakt', 'Tehtud tööd', 'Hobid', 'Muusika', 'Mäng'], // näitab lehekülje nime
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    controlArrows: false,
    slidesNavigation: true,
    menu: '#menu'
   

});

    $(document).ready(function() {
        $('.hobby').each(function() {
          var title = $(this).data('title');
          $(this).append('<div class="hobby-title">' + title + '</div>');
        });
      });


