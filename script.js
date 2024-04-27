new fullpage('#fullpage', {
  sectionsColor: ['white', 'lightskyblue', 'lightsalmon', 'lightcoral', 'lightsteelblue', 'lightpink', 'lightyellow', 'lightgreen'],
  anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'],
  navigation: false,
  menu: "#nav",
  css3: true,
  credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},
  afterLoad: function(origin, destination, direction) {
    document.querySelectorAll('#navbar li a').forEach(function(link) {
      link.classList.remove('selected');
    });

    var activeLink = document.querySelector('a[href="#' + destination.anchor + '"]');
    if (activeLink) {
      activeLink.classList.add('selected');
    }
  },
  afterRender: function() {
    var s2Slides = document.querySelectorAll('.section[data-anchor="s2"] .slide');
    for (var i = 0; i < s2Slides.length; i++) {
      s2Slides[i].setAttribute('data-anchor', 's2-slide' + (i + 1));
    }
  }
});
