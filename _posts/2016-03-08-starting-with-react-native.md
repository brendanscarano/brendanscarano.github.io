---
title: Starting with React Native
layout: post
---

Throughout 2015, reading any hacker blog, listening to conversations at meet ups, or just browsing through twitter, it was very hard to ignore the rapid explosion of React. A library built and maintained by Facebook, and now implemented in parts of their site along with several others including Instagram, HipChat, Flipboard, The NFL, and Reddit just to name a few, and it's obvious React isn't something that is going away any time soon.

When I first started reading up on React, one of the major appeals that peaked my interest was React Native, and the ability to build native iOS and Android apps with JavaScript. I had explored this before with Ionic and Cordava but never really got too deep into them, as the more I read, the more it seemed like performance issues, and user interactions were going to be a major hinderance so I decided to shift my focus to other areas.

In addition, about a year ago this time, in early 2015, I had started taking online courses in Objective-C to get a basic understanding of what it would take to build native iOS apps. Between the new syntax and rules that came with Objective-C, the new styling aspects of iPhone apps, along with trying to understand xCode and the new developer environment, it seemed too great of a task to learn all of these new skills. My main priority at the time was ramping up my understanding of JavaScript, and Angular, both of which I was using at work, so it seemed like my time was better allocated to these areas rather than iPhone app development.

So after about a month and a half of going through Objective-C tutorials and browsing through some books, I decided to put that goal of building an iOS app to the side and primarily focus on JavaScript, and increasing my knowledge of front-end development, something that I loved and that would directly impact my performance at work.

Because the goal of one day building an iPhone app was never fully gone, once I had heard about React Native, I knew this was something I wanted to explore in greater detail. It's exciting to see, too, that React Native is only gaining momentum and interest as developers continue using it. Just a few days ago, at the React.js Confrence, Nick Schrock continued to praise React Native in his Keynote presentation.

In it, he describes building the new Facebook Ads Manager app and states:

<p class="quote">"We've built this adds manager app that we've shipped on both iOS and Android. And it feels native. They share 85 to 90% of the code. Ok, that's crazy! And they were built by a single team. A single PM, the same team of engineers.<br />
<br />
Ok, if you're in software engineering management or product management and you're not physically shaking, I don't think you understand the information that was just communicated to you. If you're not impressed by this, I literally give up."</p>

And what he is saying is extremely exciting. To think that JavaScript developers were able to build an app that was both native to iOS and Android using a substantial amount of the same code is crazy. What once took two teams, in two code bases, using several different technologies, has not be achieved by one group all using one cohesive technology. That is amazing!

I highly recommend Nick's entire Keynote which can be found here:

<div class="youtube-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/MGuKhcnrqGA" frameborder="0" allowfullscreen></iframe>
</div>

In addition, Facebook has a few blog posts on how they built the new Ads Manager app with React Native.

<a href="https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/">React Native for Android: How we built the first cross-platform React Native app</a>

<a href="https://code.facebook.com/posts/435862739941212/making-react-native-apps-accessible/">Making React Native apps accessible</a>

<h4 class="blog-header">React</h4>

So before digging into React Native, and learning this new, exciting technology, I really wanted to get an understanding of React and how this new library functions. Coming from an Angular background it was difficult at first to wrap my head around the fact that unlike Anuglar, React doesn't come with an entire framework for you to use.

As taken from the React website:

<p class="quote">"Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project."</p>

In addition to this, working with Webpack, and learning all the intricacies of this was going to be a challenge as well.

But like anything new, taking the first step was the hardest part, and once I began working with React I really began to love it.

I got started by going through <a href="https://twitter.com/tylermcginnis33?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Tyler McGinnis's</a> React blog series starting with this one:
<a href="http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/" target="_blank">ReactJs Tutorial - A Comprehensive Guide to Building Apps with React</a>

I find Tyler's tutorials to be extremely helpful and once I was done working through the parts he had up on the series I shifted to some courses on <a href="https://egghead.io/series/build-your-first-react-js-application">Egghead.io</a>. While Egghead is a great resource to use, I sometimes feel they move too fast through the material and following along can become difficult.

One final tutorial that I worked through, and that I highly recommend is <a href="https://www.udemy.com/react-redux/">Modern React with Redux</a> by <a href="https://twitter.com/sg_in_sf">Stephen Grider</a> on Udemy. While the course states that it's price is $199.00 if you follow the site and subscribe to their mailing list they are constantly offering discounts and I was able to get this course for $10.00.

Stephen is definitely one of the best teachers I've had in an online course and he's exceptional at explaining why we are writing each piece of code and exactly what it's doing. I learned to love the component driven design of a React application and the idea of data uniformly flowing from the parent component down to the children components.

After going through several tutorials I decided it was time to try building a React app on my own. Using React and the Spotify API I created a very simple app that allows a user to search for an artist, and then click on the artist to display their related artists.

I used webpack for my build process mainly following this tutorial:
<a href="http://survivejs.com/webpack_react/developing_with_webpack/" target="_blank">Developing With Webpack</a>

The code can be found here:
<a href="https://github.com/brendanscarano/react-related-artists" target="_blank"><i class="fa fa-github"></i> Related Artists</a>

<h4 class="blog-header">React Native</h4>

After getting an understanding of React, I moved to learning React Native. I find the docs for React Native to be quite helpful in providing examples. In addition, the <a href="http://www.reactnative.com/" target="_blank">Use React Native</a> site has been extremely helpful in showing examples of Base Components that are available with React Native, different courses and books that are available, apps built with React Native, and much more.

Again, I used Udemy and a course by Stephen Grinder, <a href="https://www.udemy.com/reactnative/" target="_blank">Build Apps with React Native</a> to get up to speed.

One of the biggest challenges to overcome is getting used to the iOS style code that is needed to write an application. So for example a <span class="code">div</span> will become a <span class="code">View</span>, and a <span class="code">span</span> is <span class="code">Text</span>. Styles become an object declared either at the bottom of the file (or in a seperate one all together), and there are several components native to the phone such as <span class="code">ActivityIndicatoryIOS</span>, <span class="code">TextInput</span>, <span class="code">Navigator</span> and many others.It's only once you start working through some examples, and going through the tutorials that these start to feel like second nature.

<h4 class="blog-header">Building My First React Native App</h4>

For my first React Native application I decided to build something relatively simple. I'm building a similar app to what I mentioned in my previous blog post that will display a user's current date and weather.

This was a good first application since it doesn't persist data, therefore no database is needed, and I was able to get a feel for several of the native iOS components along with making 3rd party API calls in React Native.

Because I was only focusing on the iOS part of this I decided to put the main component in <span class="code">index.ios.js</span> where the code for the iOS application lives. Similarly if I wanted to build this out for Android I would use the <span class="code">index.android.js</span>. Ideally if you are someone like Facebook looking to share the majority of your code between both iOS and Android, both of these files would look quite thin as the majority of the code would be located in a shared components section that would be injected into both of them.

I am first importing several pieces I need from <span class="code">react-native</span> that are native to iOS. I am then importing the two seperate weather components, <span class="code">HourlyWeather</span>, and <span class="code">DailyWeather</span> along with the file used to make the Weather API call.

<i>I've eliminated some of the components for the purpose of this blog and will only focus on the weather aspect.</i>

It is here, in the parent component, that I will obtain the user's current position and make the call to the forecast API. If the API hasn't returned any data yet, the component will render the <span class="code">ActivityIndicatorIOS</span> which is the native loading spinner for iOS apps. Once the API has returned data and the state of the componenet has been updated, the component will pass the data down to the two children, <span class="code">HourlyWeather</span>, and <span class="code">DailyWeather</span>.

{% highlight javascript %}
// meteo/index.ios.js
'use strict';

import React, {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ActivityIndicatorIOS
} from 'react-native';
import HourlyWeather from './src/components/HourlyWeather';
import DailyWeather from './src/components/DailyWeather';
import WeatherAPI from './src/WeatherApi';

const App = React.createClass({

  getInitialState() {
    return {
      hourlyForecast: null,
      dailyForecast: null
    }
  },

  componentWillMount() {

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      WeatherAPI(latitude, longitude)
        .then((data) => {
          this.setState({
            hourlyForecast: data.hourly,
            dailyForecast: data.daily
          })
        });
    })

  },

  render() {
    if (!this.state.hourlyForecast && !this.state.dailyForecast) {
      return (
        <View style={[styles.container, styles.spinner]}>
          <ActivityIndicatorIOS
            size="large"
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <HourlyWeather forecast={this.state.hourlyForecast}/>
        <DailyWeather forecast={this.state.dailyForecast}/>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#34314c',
    backgroundColor: '#F9F9EA'
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

AppRegistry.registerComponent('meteo', () => App);
{% endhighlight %}

The <span class="code">DailyWeather</span> will now recieve props from the parent component which can then be mapped over to build several views to display each day's weather. I am also importing both <span class="code">moment</span> to display the time properly, along with <span class="code">react-native-emoji</span> which I am using to display the weather icons.

{% highlight javascript %}
'use strict';

import React, {
  View,
  Text,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Emoji from 'react-native-emoji';

const DailyWeather = React.createClass({

  _renderDailyForecast(days) {

    function renderEmoji(icon) {

      const ICONS = {
        'clear-day': 'sunny',
        'clear-night': 'crescent_moon',
        'rain': 'umbrella',
        'snow': 'snow_cloud',
        'sleet': 'umbrella',
        'wind': 'wind_blowing_face',
        'fog': 'fog',
        'cloudy': 'cloud',
        'partly-cloudy-day': 'partly_sunny',
        'partly-cloudy-night': 'cloud'
      };
      return ICONS[icon];
    }

    return days.data.map((day, index) => {
      const temperatureMax = day.temperatureMax.toString().substring(0,2);
      const temperatureMin = day.temperatureMin.toString().substring(0,2);
      return (
        <View key={index}>
          <Text>{temperatureMax}°F /</Text>
          <Text>{temperatureMin}°F</Text>
          <Text>{moment.unix(day.time).format('dddd')}</Text>
          <Text><Emoji name={renderEmoji(day.icon)}/></Text>
        </View>
      )
    })
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.forecast ? this._renderDailyForecast(this.props.forecast) : null}
        </ScrollView>
      </View>
    )
  },

});

module.exports = DailyWeather;
{% endhighlight %}

All the code for this project can be viewed here:
<a href="https://github.com/brendanscarano/react-native-meteo" target="_blank"><i class="fa fa-github"></i> Météo </a>

<h4 class="blog-header">What's next?</h4>

So what's next? I've only really begun to scratch the surface with both React and React Native and I'm extremely excited to continue learning about both of them.

It seems like React, along with the Flux architecture is only gaining in popularity, and I would like to continue my understanding of both of these concepts to potentially add to future projects at Priceline.com along with personal projects.

While I'll be learning React Native primarily for personal projects, a lot of the material should coincide with learning React as well. The potential of being able to build native apps is extremely exciting.

Some of my immediate goals for the next few weeks/months are to:
<ul>
  <li>Learn to hook up React-Native to a database to persist data. Right now I'm going to go with Firebase.</li>
  <li>Begin learning Redux and finish the Udemy course I have started.</li>
</ul>

From there I have an app idea I've been excited about putting together for some time, so I'm going to begin building it now that I finally have the basic skills to do so.
