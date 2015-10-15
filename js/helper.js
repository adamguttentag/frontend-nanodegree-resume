// these variables store the HTML templates needed to build the page
var HTMLheaderName = '<h1 id="name" class="boxedTop wrappedCol1" onmouseover="this.style.backgroundColor=\'#434343\'" onmouseout="this.style.backgroundColor=\'#323232\'">%data%</h1>';
var HTMLheaderRole = '<span class="wrappedCol1 location-text role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text"><nobr>%data%</nobr></span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic wrappedCol1Bottom">';
var HTMLwelcomeMsg = '<span class="welcome-message wrappedCol1Bottom">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3" class="wrappedCol3"></h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="boxedTop %jobWrapped%" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text boxed %jobWrapped%">%data%</div>';
var HTMLworkLocation = '<div class="location-text boxed %jobWrapped%">%data%</div>';
var HTMLworkDescription = '<p class="boxedBottom %jobWrapped%">%data%</p>';
var HTMLworkChart = '<div class="vDivider jobWrappedV%job%"></div><div class="chart jobWrappedV%job%"><span id="chartDescriptor%job%">Skill Utilization</span><svg id="svg%job%" width="89" height="89"></svg></div>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="boxedTop %projectWrapped%" href="#">%data%</a>';
var HTMLprojectDates = '<div class="boxed date-text %projectWrapped%">%data%</div>';
var HTMLprojectDescription = '<p class="boxedBottom %projectWrapped%"><br>%data%</p>';
var HTMLprojectImage = '<div class="chart %projectWrappedV%"><img class="projectImage" src="%data%"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="boxedTop %schoolWrapped%" href="#">%data%</a>';
var HTMLschoolDegree = '<span class="boxed %schoolWrapped% date-text">%data%</span>';
var HTMLschoolDates = '<div class="boxed %schoolWrapped% date-text">%data%</div>';
var HTMLschoolLocation = '<div class="boxed %schoolWrapped% location-text">%data%</div>';
var HTMLschoolMajor = '<p class="boxedBottom %schoolWrapped%"><br>Major: %data%</p>';

var HTMLonlineClasses = '<p class="%schoolWrapped% boxedTop classes">Online Classes</p>';
var HTMLonlineTitle = '<span class="%schoolWrapped%"><a href="%url%">%data%</a><span class="date-text">%dates%</span></span>';
var HTMLonlineDates = '<div class="date-text %schoolWrapped%">%data%</div>';
var HTMLonlineURL = '<br><a class="%schoolWrapped%" href="#">%data%</a>';

var HTMLwrapCol1 = '<div class="wrappedCol1"></div>';
var HTMLwrapCol1Container = '<div class="wrappedCol1Container"></div>';
var HTMLwrapJobStart = '<div class="wrappedV jobWrappedV';
var HTMLwrapJobContainer = '<div class="jobWrappedH"></div>';
var HTMLwrapProjectStart = '<div class="wrappedV projectWrappedV';
var HTMLwrapProjectContainer = '<div class="projectWrappedH"></div>';
var HTMLwrapSchoolStart = '<div class="wrappedV schoolWrappedV';
var HTMLwrapSchoolContainer = '<div class="schoolWrappedH"></div>';
var HTMLwrapEnd = '"></div>';

var googleMap = '<div id="map"></div>';

// prints x and y coordinates of clicks to the console
$(document).click(function(loc) {
  console.log('x:' + loc.clientX + ', y:' + loc.clientY);
});

// declares a global map variable
var map;

// initializeMap() is called when page is loaded.
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // googleMap var is appended to #mapDiv in resumeBuilder.js
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  // returns an array of location strings from JSON
  function locationFinder() {
    var locations = [];
    var locationTitles = [];
    locations.push(bio.contacts.location);
    locationTitles.push(bio.contacts.description);
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
      locationTitles.push(education.schools[school].name);
    }
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
      locationTitles.push(work.jobs[job].employer);
    }
    return locations;
  }

  // returns an array of title strings for each location
  function locationTitleFinder() {
    var locationTitles = [];
    locationTitles.push(bio.contacts.description);
    for (var school in education.schools) {
      locationTitles.push(education.schools[school].name);
    }
    for (var job in work.jobs) {
      locationTitles.push(work.jobs[job].employer);
    }
    return locationTitles;
  }

  // reads Google Places search results to create map pins
  function createMapMarker(placeData) {
    // saves location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;       // name of the place from the place service
    var bounds = window.mapBounds;                // current boundaries of the map window

    // In testing I found that the order in which the markers are created by Google Places
    // varies, making the iteration unreliable to match my Location Title to the place name.
    // I also found that Google Places assigned oddly names to my markers. It assigned a street
    // address in the wrong city based on a city name and sometimes added zip codes. As this is
    // my resume, I felt it my responsibility to correct these inaccuracies. I am doing so
    // with an if statement that sets the Location Title and place name based on the place name
    // returned by Google Places. This also allows me to add an appropriate photo that
    // illustrates what I saw every day when I worked/studied in these places.
    if (name.indexOf("Sunnyvale") > -1) {
      name = "Sunnyvale, CA";
      locationTitle = "Home<br>SVGref";
    } else if (name.indexOf("College") > -1) {
      name = "College Park, MD";
      locationTitle = "Eclipse<br>University of Maryland<br><img src=http://www.umd.edu/CampusMaps/pics/59-0.JPG height=100>";
    } else if (name.indexOf("Mountain") > -1) {
      name = "Mountain View, CA";
      locationTitle = "Udacity<br><img src=https://s3.amazonaws.com/woothumbs/udacity.com.png height=100>";
    } else if (name.indexOf("Shores") > -1) {
      name = "Redwood Shores, CA";
      locationTitle = "Yodlee<br><img src=http://x.lnimg.com/xnet/mainsite/HttpHandlers/attachment/ServeAttachment.ashx?FileGuid=6de8c322be46435397908acd545c35fe&Extension=jpg&Width=0&Height=0 height=100>";
    } else if (name.indexOf("City") > -1) {
      name = "Redwood City, CA";
      locationTitle = "Current Employer";
    } else if (name.indexOf("Arlington") > -1) {
      name = "Arlington, VA";
      locationTitle = "WashingtonPost.<br>Newsweek Interactive<br><img src=https://www.bisnow.com/archives/realestate/2011/Q1/images/1_001.JPG height=100>";
    }

    // marker is an object with additional data about the pin for a single location
    // CUSTOMIZATION: label allows the marker to display a single character.
    // In this case, I used slice to display the first character of each place name.
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      label: name.slice(0,1)
    });

    // CUSTOMIZATION: setAnimation DROP causes the markers to drop from the top of the map
    marker.setAnimation(google.maps.Animation.DROP);

    // creates helper windows that open when you click a pin on a map
    var infoWindow = new google.maps.InfoWindow({
      content: "<div class=locationTitle>" + locationTitle + "</div><div class=locationName>" + name,
      boxStyle: {background: "none"}
    });

    // opens an info window based on clicked marker
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
      $(".gm-style-iw").siblings("div").css("opacity", "0");
      $(".gm-style-iw").siblings("div").css("right", "40px");
      $(".gm-style-iw").siblings("div").css("top", "12px");
    });

    // adds pin to the map
    // takes a location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fits the map to the new marker
    map.fitBounds(bounds);
    // centers the map
    map.setCenter(bounds.getCenter());
  }

  // callback(results, status) makes sure the search returned results for a location.
  // If so, it creates a new map marker for that location.
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  // takes the array of locations created by locationFinder() and searches Google Places for each one
  function pinPoster(locations) {
    // creates Google place search service object to search for location data
    var service = new google.maps.places.PlacesService(map);
    // iterates through the array of locations, creates a search object for each location
    for (var place in locations) {
      // creates the search request object
      var request = {
        query: locations[place]
      };
      // searches Google Places for location data, runs the callback function with search results after each search
      service.textSearch(request, callback);
    }
  }

  // sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  // array of location strings returned from locationFinder()
  locations = locationFinder();
  // array of location title strings returned from locationTitleFinder()
  locationTitles = locationTitleFinder();
  // creates pins on the map for each location in the locations array
  pinPoster(locations);
}

// calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// resizes the window and adjusts map bounds
window.addEventListener('resize', function(e) {
  // updates the map bounds on page resize
  map.fitBounds(mapBounds);
});
