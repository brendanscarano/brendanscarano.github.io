---
title: Node/Express + ES2015 + Gulp and more...
layout: post
---

Recently I built a small app, Meteo, that was a clone of <a href="https://chrome.google.com/webstore/detail/currently/ojhmphdkpgbibohbnpbfiefkgieacjmh?hl=en" target="_blank">Currently</a>, an app I use everyday. I talked about it briefly in my last blog post but wanted to discuss it more here.

Initially I built the app on the Meteor platform as Meteor serves as a simple way to set up a server, have a build process set up, and deploy the app. However, I found the ease of Meteor to be both a gift and a curse. There are several technologies I've wanted to explore in more detail so after building the app with Meteor I decided to rebuild it to work on these pieces I've wanted to learn including:
<ul>
  <li>Node/Express</li>
  <li>Gulp</li>
  <li>ES2015</li>
  <li>Babel</li>
</ul>

I've been reading up a lot of these different technologies and have worked with them at Priceline.com but I haven't had too much experience setting them up and working through the learning curves myself, so I thought this app would be the perfect way to do that.

<h4 class="blog-header">Getting set up</h4>

While I wouldn't be needing a database for this project, as there is no data to be saved, I used Arvind Ravulavaru's <a href="http://thejackalofjavascript.com/mean-stack-hands-on-tutorial/" target="_blank">MEAN stack – A Hands on Tutorial</a> for getting my server and client side set up. I found this tutorial very easy to follow and understand, especially for a simple server like I am using here.

{% highlight javascript %}
// server/routes/index.js

(function() {
 
  'use strict';

  var express = require('express');
  var router  = express.Router();
  var request = require('request');
 
  router.get('/', function(req, res) {
    res.render('../../index');
  });

  router.get('/address/:lat/:lng', function(req, res) {
    // Call Google API for address info
  })

  router.get('/weather/:lat/:lng', function(req, res) {
    // Call Forecast IO API for weather info
  });
 
  module.exports = router;
 
}());
{% endhighlight %}

The server will serve as my API for the 2 client calls I will need to make, one for a user's currently location/address, and the second for the weather forecast for this location.

<h4 class="blog-header">Client Side - Angular</h4>

Once my server was set up the foundation for my API was laid out, I began working on the client side which I choose to build using Angular.

For my client side there are two directives I'm building, one to display the current date/time, and another to display the hourly/daily forecase along with the user's current address.

<span class="code">index.html</span>
{%highlight html%}
<!DOCTYPE html>
<html ng-app="ngApp">
 
<head>
  <title>Météo</title>

  <!-- cdn for bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!--  compiled Sass -->
  <link rel="stylesheet" type="text/css" href="css/application.css">

  <!--  minified JavaScript -->
  <script type="text/javascript" src="bundle/app.js"></script>

</head>
 
<body>
  <div class="container">
    <h1>Météo</h1>
    <hr/>

    <date-time></date-time>

    <weather-forecast></weather-forecast>
  </div>
 
</body>
 
</html>
{%endhighlight%}


<span class="code">DateTimeDirective</span>

{% highlight javascript %}
// client/js/componenets/date-time/date-time-directive.js

import moment from 'moment';

(function() {
  'use strict';

  function dateTime( $timeout ) {

    function dateTimeCtrl() {

      this.todaysDate = moment().format('dddd MMMM DD YYYY');

      let updateTime = () => {

        let now = moment().format('hh:mm:ss A');

        this.currentTime = now;
        $timeout(updateTime, 1000);

      };
      
      updateTime();

    }

    return {
      restrict: 'EA',
      controller: dateTimeCtrl,
      controllerAs: 'vm',
      scope: {},
      templateUrl: 'components/date-time/date-time.html'
    };

  }

  angular
    .module('DateTimeDirective', [])
    .directive('dateTime', ['$timeout', dateTime]);

})();
{% endhighlight %}

Using ES2015, and Browserify I built the <span class="code">DateTimeDirective</span> to attach today's date, along with the current time to the instance of the directive's controller. The <span class="code">updateTime</span> function will be called as soon as the controller is instantiated, and then recursivly call itself after every second.

<span class="code">WeatherForecastDirective</span>

With the date/time directive now in place, it was time to build out the next component for displaying the weather, which I'm relying on <a href="https://developer.forecast.io/" target="blank">The Dark Sky Forecast</a> API to do.

{% highlight javascript %}
// client/js/componenets/weather-forecast/weather-forecast-directive.js

(function() {
  'use strict';

  function dateTime() {

    function weatherForecastCtrl() {

      /**
        * 
        * Use the browser's built in geolocation API
        * to get the user's initial latitude and longitutde
        *
      */
      navigator.geolocation.getCurrentPosition( (response) => {


      });

    }

    return {
      restrict: 'EA',
      controller: weatherForecastCtrl,
      controllerAs: 'vm',
      scope: {},
      templateUrl: 'components/weather-forecast/weather-forecast.html'
    };

  }

  angular
    .module('WeatherForecastDirective', [])
    .directive('weatherForecast', [dateTime]);

})();
{% endhighlight %}

The inital set up of the <span class="code">WeatherForecastDirective</span> will call the browser's geolocation API to get a user's latitude and longitude which will be used for making both the weather and address API calls on the server.

{% highlight javascript %}
// client/js/componenets/weather-forecast/weather-forecast-directive.js

(function() {
  'use strict';

  function dateTime( $http ) {

    function weatherForecastCtrl() {

      let addressAPICall = `/address/${response.coords.latitude}/${response.coords.longitude}`;

      /**
        * 
        * Use the browser's built in geolocation API
        * to get the user's initial latitude and longitutde
        *
      */
      navigator.geolocation.getCurrentPosition( (response) => {

        $http.get(addressAPICall).then( (res) => {

          const addressData = JSON.parse(res.data.body);

          this.address = addressData.results[0].formatted_address;

        })

      });

    }

    return {
      restrict: 'EA',
      controller: weatherForecastCtrl,
      controllerAs: 'vm',
      scope: {},
      templateUrl: 'components/weather-forecast/weather-forecast.html'
    };

  }

  angular
    .module('WeatherForecastDirective', [])
    .directive('weatherForecast', ['$http', dateTime]);

})();
{% endhighlight %}

{% highlight javascript %}
// server/routes/index.js

(function() {
 
  'use strict';
  var express = require('express');
  var router  = express.Router();
  var request = require('request');

  router.get('/', function(req, res) {
    res.render('../../index');
  });

  router.get('/address/:lat/:lng', function(req, res) {

    const latitude = req.params.lat;

    const longitude = req.params.lng;

    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + latitude + ',' + longitude, function(error, response, body) {

      res.send(response);

    });

  })
 
  module.exports = router;
 
}());

{% endhighlight %}

I then build out the call to the address API from the client side, by setting the <span class="code">addressAPICall</span> variable to my server's route, parsed the response, and set the response to the instance of <span class="code">this.address</span> for my html template.


