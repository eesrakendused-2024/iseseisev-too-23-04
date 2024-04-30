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

var images = [
  'url(./images/bg.jpg)'
];

var gradients = [
  'linear-gradient(lightskyblue, white)',
  'linear-gradient(lightsalmon, white)',
  'linear-gradient(lightcoral, white)',
  'linear-gradient(lightsteelblue, white)',
  'linear-gradient(lightpink, white)',
  'linear-gradient(lightyellow, white)',
  'linear-gradient(lightgreen, white)',
];

var sections = document.querySelectorAll('.section');

sections.forEach(function(section, index) {
  if (index === 0) {
    section.style.backgroundImage = images[0];
  } else {
    section.style.background = gradients[(index - 1) % gradients.length];
  }
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
});

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Youtube (watching)', 'Music (composing)', 'Coding', 'Drawing', 'Gaming', 'Youtube (content creating)'],
    datasets: [{
      data: [100, 50, 15, 12, 90, 30],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var map = L.map('map').setView([59.4387, 24.7714], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([59.4387, 24.7714]).addTo(map);

function updateDateTime() {
  const currentDate = moment();
  const formattedDate = currentDate.format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById('currentDateTime').textContent = formattedDate;
  document.getElementById('currentDateTime2').textContent = formattedDate;
}

updateDateTime();

setInterval(updateDateTime, 1000);