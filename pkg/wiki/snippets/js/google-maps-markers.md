# Google maps markers

```js
var GM = {};

/**
 * Default options
 */
GM.options = {
    lat: 50.0835494,
    lng: 14.4341414,
    zoom: 11,
    maxZoom: 17,
    el: 'map',
    map: undefined,
    markers: []
};

/**
 * Init map
 */
GM.init = function () {
    var options = this.options;
    var coords = {lat: options.lat, lng: options.lng};
    options.map = new google.maps.Map(document.getElementById(options.el), {
        zoom: options.zoom,
        center: coords
    });
};

/**
 * Add marker to map
 *
 * @param {object} coords
 * @param {string} title
 * @param {object} obj
 */
GM.addMarker = function (coords, title, obj) {
    var content;
    var map = this.options.map;
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: title
    });

    if (obj.reservations > 0) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');

        content = ''
            + '<div class="google-map">'
            + '<h3>#' + obj.identifier + ' <span class="label label-danger">obsazeno</span></h3>'
            + '<p>' + obj.description + '</p>'
            + '</div>';
    } else {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');

        content = ''
            + '<div class="google-map">'
            + '<h3>#' + obj.identifier + ' <span class="label label-success">volno</span></h3>'
            + '<p>' + obj.description + '</p>'
            + '<div><a href="' + obj.link.reserve + '" class="btn btn-primary">Rezervovat</a></div>'
            + '</div>';
    }


    // Show info window (if can)
    var info = new google.maps.InfoWindow({
        content: content
    });
    marker.addListener('click', function () {
        info.open(map, marker);
    });

    // Append to array
    this.options.markers.push(marker);
};

/**
 * Remove markers from map
 */
GM.removeMarkers = function () {
    var markers = this.options.markers;
    markers.forEach(function (e) {
        e.setMap(null);
    });

    // Remove from array
    this.options.markers = [];
};

/**
 * Center and zoom to markers
 */
GM.fit = function () {
    var markers = this.options.markers;
    var map = this.options.map;
    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].getPosition());
    }

    map.fitBounds(bounds);

    // Handle max zoom
    if (map.getZoom() > this.options.maxZoom) {
        map.setZoom(this.options.maxZoom);
    }
};

/**
 * Center map
 */
GM.center = function () {
    this.options.map.setCenter({lat: this.options.lat, lng: this.options.lng});
};

/**
 * Reset map and center
 */
GM.reset = function () {
    this.options.map.setZoom(this.options.zoom);
    this.options.map.setCenter({lat: this.options.lat, lng: this.options.lng});
};
```