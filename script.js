
var map = L.map('map').setView([20, 0], 2); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


var societies = [
  {
    name: "Yoruba (Nigeria)",
    coords: [7.0, 3.0],
    url: "yoruba.html"
  },
  {
    name: "Maasai (Kenya/Tanzania)",
    coords: [-1.5, 36.5],
    url: "maasai.html"
  },
  {
    name: "Zulu (South Africa)",
    coords: [-29.0, 31.0],
    url: "zulu.html"
  },
  {
    name: "Irigwe (Nigeria) – Polyandry",
    coords: [9.0, 8.0],
    url: "irigwe.html"
  },
  {
    name: "Ancient Near East",
    coords: [33.0, 44.0],
    url: "ancient.html"
  },
  {
    name: "Islamic Societies",
    coords: [25.0, 45.0],
    url: "islamic.html"
  },
  {
    name: "South Asia",
    coords: [20.0, 80.0],
    url: "southasia.html"
  },
  {
    name: "Himalayan Societies",
    coords: [30.0, 80.0],
    url: "himalayas.html"
  },
  {
    name: "East Asia",
    coords: [35.0, 105.0],
    url: "eastasia.html"
  }
];


societies.forEach(function(society) {
  var marker = L.marker(society.coords).addTo(map);
  marker.bindPopup('<a href="' + society.url + '">' + society.name + '</a>');
});
