---
title: Angular Directives -<br /> Link vs Controller
layout: post
---

A little over a year ago I started working at Priceline.com as a Front End Developer. This was my first professional developer position out of Dev Bootcamp (DBC), and it is where I am still working today.

Immediately from day one I began learning AngularJS as the team I was brought in on, was in the process of migrating the stack from jQuery to Angular. Coming from DBC, where there was a heavy focus on jQuery, I felt comfortable for the first few weeks writing A/B tests for the jQuery stack while it was still live in production. However shortly into 2015, the jQuery site was deprecated, and the new stack was completely shifted to Angular.

While I spent my first few months in my new position continuing to learn the foundations of JavaScript along with the basics of Angular. While this time was spent getting a solid foundation firmly established, I have spent the last few months really trying to fine tune what I have learned and get a better understanding of Angular's inner workings, as well as one of its most powerful features – directives.

<i>For the following example I will be using a side project I am working on for which integrates the Spotify API to allow a user to search for an artist, and return a list of their most popular tracks.The following code snippets are the logic behind the search box used for searching for an artist based on search criteria.</i><br />
<b>Note: This has not been designed!</b>

<img src="/assets/blog_posts/2015-10-27/home-search-box.png" alt="spotify-home-search-box">

### My early controllers:

When I first started learning Angular, I wasn't all that comfortable with building directives and I would end up putting the majority (if not all of the functionality) for a page into that page's controller. If there were directives they would inherit from that controller’s $scope.

A controller may have looked something like this:<br />
<b>(And while functional, this is breaking several best practices)</b>

{% highlight javascript linenos%}
(function() {

  function HomeCtrl( $scope, $state, $http ) {

    $scope.artists = [];

    $scope.$watch('artist', function(newVal, oldVal) {

      if ( (newVal !== oldVal) && (newVal !== '') ) {

        /**
        *
        * Spotify API: Artist (type-ahead) search
        *
        */
        $http({
          method: 'GET',
          url: 'https://api.spotify.com/v1/search?q=' + scope.artist + '&type=artist'
        }).then(function successCallBack( response ) {

          $scope.artists = response.data.artists.items;

        }, function errorCallBack( response ) {


        });

      } else if (newVal === '') {

        scope.artists = [];

      }

    });

    $scope.searchTracks = function( artistName ) {

      $state.go('tracks', {
        artistName: artistName,
        pageNumber: 1
      });

    };

  }

  angular
    .module('HomeCtrl', [])
    .controller('HomeCtrl', ['$scope', '$state', '$http', HomeCtrl]);

})();

{% endhighlight %}

<b>Messy!</b> – I know! I was putting logic for a feature that could be extrapolated into a component into the page's controller and therefore bogging down the controller and $scope... I knew something had to change.

I then became more familiar with the ‘link’ function that directives come with so I began moving all the functionality from my page's controller to the link function. Regardless if the code was meant to manipulate the DOM, change $state, or simply run some logic, I would put everything in the link function. This still didn't feel right...

While I knew the directives were working, as I continued reading blog posts, and doing more research, I found that I wasn’t following best practices, and I wasn't properly utilizing the directive's controller function. One piece of information that really helped me start understanding these concepts better was an article <a href="http://toddmotto.com/">Todd Motto</a> had written which you can find here:

<a href="http://toddmotto.com/killing-it-with-angular-directives-structure-and-mvvm/">Killing it with Angular Directives; Structure and MVVM</a>

In it, he discusses his style for creating directives (which I have adopted), as well as how to properly utilize a directive's link and controller functions.

What I’ve learned is that a directive’s controller should handle any logic that is not manipulating the DOM or waiting for the $scope to change. The link function should handle all the functionality that the controller is not responsible for.

So keeping this in mind, I began refactoring my artist search box on my home page to become its own directive, and move the functionality I once had in my home controller to the directive’s controller, and link functions.

{% highlight javascript %}
/**
* @name: artistSearchBox
*
* @description
*   Initial search box on home screen
*   to search for artists, and obtain their most popular tracks
*/

(function() {

    function artistSearchBoxCtrl( $state, $http ) {

    }

    function link( scope, element, attrs ) {

    }

    return {
      restrict: 'EA',
      templateUrl: 'client/components/artist-search-box/artist-search-box.ng.html',
      controllerAs: 'vm',
      controller: artistSearchBoxCtrl,
      link: link
    };

  }

  angular
    .module('artistSearchBoxDirective', [])
    .directive('artistSearchBox', ['$state', '$http', artistSearchBox]);

})();

{% endhighlight %}

The actual click event, originally found in the home page's controller will now get moved into the <b>artistSearchBox</b> directive's controller:

{% highlight javascript %}

function artistSearchBoxCtrl() {

  this.searchTracks = function( artistName ) {

    $state.go('tracks', {
      artistName: artistName,
      pageNumber: 1
    });

  };

}

{% endhighlight %}

And the typeahead logic, that is hitting the Spotify API, and returning a list of artists to the page will belong in the link function, since a $scope.watch() is being used.

{% highlight javascript %}

function link( scope, element, attrs ) {

  scope.artists = [];

  scope.$watch('artist', function(newVal, oldVal) {

    if ( (newVal !== oldVal) && (newVal !== '') ) {

      /**
      *
      * Spotify API: Artist (type-ahead) search
      *
      */
      $http({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search?q=' + scope.artist + '&type=artist'
      }).then(function successCallBack( response ) {

        scope.artists = response.data.artists.items;

      }, function errorCallBack( response ) {


      });

    } else if (newVal === '') {

      scope.artists = [];

    }

  });

}

{% endhighlight %}

The beauty of this, is that now, I no longer need the home controller at all. All of the logic previously found in this controller has been decoupled and moved to the directive, <b>artistSearchBox</b> ,it belongs in. The home controller is no longer being bogging down with unnecessary variables and functions.