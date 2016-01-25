---
title: Angular Directives - Isolating Controller Scope
layout: post
---

I've recently been working on a project that is a clone of a Chrome Web Store app I use everyday, <a href="https://chrome.google.com/webstore/detail/currently/ojhmphdkpgbibohbnpbfiefkgieacjmh?hl=en" target="_blank">Currently</a>. It's a simple app that I'm building in Angular with Meteor on the backend for my server calls, deployment, and possibly one day user login.

The app is comprised of two different pieces, the current date/time, and current weather of a users location. I decided I would break these pieces down into two separate directives, <b>dateTime</b>, and <b>weatherForecast</b>.

<b>dateTime Component</b>
{% highlight javascript %}
(function() {
  'use strict';

  function dateTime() {

    function dateTimeCtrl() {
      this.foo = 'testing date time component';
    }

    return {
        restrict: 'EA',
        controller: dateTimeCtrl,
        controllerAs: 'vm',
        template: '<div>{{vm.foo}}</div>'
      };
    }

    angular
      .module('DateTimeDirective', [])
      .directive('dateTime', dateTime);

})();
{% endhighlight %}

<b>weatherForecast Component</b>
{% highlight javascript %}
(function() {
  'use strict';

  function weatherForecast() {

    function weatherForecastCtrl() {
      this.bar = 'testing weather forecast component';
    }

    return {
        restrict: 'EA',
        controller: weatherForecastCtrl,
        controllerAs: 'vm',
        template: '<div>{{vm.bar}}</div>'
      };
  }

  angular
    .module('WeatherForecastDirective', [])
    .directive('weatherForecast', weatherForecast);

})();
{% endhighlight %}

Since there are no routes, or need for the home pages controller I decided to put both of these directives in the index file as so.

{% highlight html %}
<head>
  <base href="/">
</head>
<body>
  <div ng-app="morningApp">

  <date-time></date-time>

  <weather-forecast></weather-forecast>

  </div>
</body>
{% endhighlight %}

When I would run meteor and open my localhost I would expect to see:

testing date time component<br />
testing weather forecast component

However I am only seeing:

testing weather forecast component

<iframe
     width="100%" height="300"
     src="//jsfiddle.net/bscarano/gbLc1fxb/embedded/result,js,html"
     allowfullscreen="allowfullscreen"
     frameborder="0">
</iframe>

At first I thought this was an issue with the angular-meteor package I was using so I opened an issue in the package on GitHub. However after a few responses I realized what I was actually doing was creating a variable, 'vm', on the global scope when I first create the dateTime directive, and then replacing it with a new 'vm' variable when I create the weatherForecast directive.

This was occurring because I wasn't declaring the scope on either directive so it was deferring back to the global scope. This problem can be solved one of two ways.

The first is to keep both directives referring to the global scope and have the controllerAs syntax different for each directive.
ie: dateTime controllerAs: 'vm', and weatherForecast controllerAs: 'tm'

The second, and better solution is to declare an isolate scope in each directive as <b>scope: {}</b> to allow each directive to have it's own scope and have no reference to the global scope. 

The updated code, with <b>scope: {}</b>, added into each directive now looks like this:


<iframe 
  width="100%" height="300" 
  src="//jsfiddle.net/bscarano/rwpbfaq9/2/embedded/result,js,html" 
  allowfullscreen="allowfullscreen" frameborder="0">
</iframe>

My original question and the help I received can be found here on<br /> <a href="https://github.com/Urigo/angular-meteor/issues/890
" target="_blank"><i class = "fa fa-github icon github"></i> GitHub</a>.