---
title: "It's a long way to the top..."
layout: post
---

A lot has happened since I wrote my last post, a little over a month ago.

The end of Dev Bootcamp was a whirlwind of chaos that I absolutely loved. As I had mentioned in an earlier blog, during the end of Phase 2, Jared Rader and I began working on an idea to build a product that would allow users to relive their favorite concert memories through media sources, as well as the set list from the actual show.

Having gone to several concerts over the last few years this is a product I have always wanted, and working on it for that short time period was an absolute blast, so during our pitch day to choose our final products I threw out the idea and it was selected. Our team ended up being, <a href="https://www.linkedin.com/in/raderjared">Jared Rader</a>, <a href="https://www.linkedin.com/pub/howard-o-leary/35/893/722">Buck O'Leary</a>, <a href="www.linkedin.com/in/tihuan">Timmy Huang</a>, and myself.


Projects were chosen on Wednesday May 21st, and what followed the next 8 days was a non-stop sprint to the finish line. Days lasted 13-15 hours on average and there was not a minute wasted on anything but this project.


And while we shot for the moon with our features I&apos;m proud to say that my team and I finished the majority of what we set out to complete, and now have a finished product anyone can use at <a href="http://www.encoreapp.io/">www.encoreapp.io</a>!

From this...<br />
<img src="/assets/basket/early_stage.jpg" alt="rough_draft">

...to this, in 8 days.<br />
<img src="/assets/basket/title.jpg" alt="encore_title_screen">

Encore utilizes 5 API&apos;s to allow the entire product to run smoothly. 

Users first have the option to log-in through Facebook.

On the home page as you search for an artist, we are utilizing <a href="https://developers.google.com/freebase/">Freebase</a> to make the selection process for users as simple as possible.

<br />
<img src="/assets/basket/search.jpg" alt="freebase_search">
<br />


Once an artist is entered and searched for we then contact <a href="https://musicbrainz.org/">MusicBrainz</a>, a massive encyclopedia for all musicians, and then ask what ID they give that specific artist as we will now use this ID to speak with <a href="http://www.setlist.fm/">Setlist.fm</a> and search their databases for all the concerts for that specific artist. 


What we are essentially ending up with is a replica of Setlist.fm search results.

<img src="/assets/basket/setlist.jpg" alt="setlist_results">
<br />
<br />
<img src="/assets/basket/concert_search.jpg" alt="encore_results">

The true difference lies in the magic of when a user clicks on a concert. Once a concert is selected two gears start moving.

<ol>
  <li>Setlist.fm pulls in the set list from that specific show, should one exist.</li>
  <li>Encore calls YouTube to search for all videos associated with the show selected based on three search queries.</li>
    <ul>
      <li>The artist, venue, date, and city.
      <li>The artist, venue, date.
      <li>The artist, date.
    </ul>
</ol>
The three search queries are to ensure we are getting as many possible hits for that concert as we can. And while we understand that no search is going to be perfect we have built in a feature to allow users to remove videos that they do not find relevant. After adding the videos a user wants to the concert page they can then go to the concert and add it to their own page as well.

<img src="/assets/basket/concert.jpg" alt="phish_concert">

Working on this project was an incredible experience that really pushed me out of my comfort zone, helped me learn a ton, and allowed me to see what it&apos;s like to work on a team for such a big project.

A few of the tools we utilized for staying organized were Git version control, GitHub, and Trello.

You can find a finished version of the product here, <a href="http://www.encoreapp.io/">www.encoreapp.io</a>, or read reviews of our demo day from a consulting company that was at our presentation, <a href="http://www.thehackerati.com/blog/2014/06/06/dev-bootcamps-nyc-debut.html">The Hackerati</a>, and by our own teachers at <a href="http://devbootcamp.com/2014/07/03/What-Can-You-Build-In-A-Week/">Dev Bootcamp</a>.

<img src="/assets/basket/presentation.jpg" alt="presentation">      

Once Dev Bootcamp ended the true test started, finding a job and continuing to work and learn alone.

Having had a full time job since the day I finished college it&apos;s strange having so much free time on my hands. I&apos;ve been spending my days:
  <ol>
    <li>Applying for different jobs (full-time, internships, and apprenticeships)</li>
    <li>Learning as much as I can</li>
    <li>Working on a side project.</li>
  </ol>

The topics I have been primarily focusing on to continue my studies are, Ruby/Rails, OOJS, JavaScript Design Patters, Vim, and much more. Anything to build on the skillset I developed at DBC, while also learning new skills I believe will be helpful going into a professional environment.

The side project I am working on is a single page application that will allow users a simple way to save and share their favorite links with their friends. Right now I believe the only way to share a link with a friend is through Facebook, email, or text message and there can be a much more convenient way to do this without having to leave the page you are on. I&apos;ve been going through Backbone.js tutorials to add this library on top of the Rails backend. Progress is moving slowly however I am learning a ton, and getting more experience with both Rails and JavaScript.

While I will always have this project on the side, I am extremely excited to land a job and to contribute what I have learned to a company, as well as continue learning at a fast pace from other professionals. I&apos;m looking forward to the opportunities ahead of me and growing as a developer. I have grown immensely over these last few months however I know that I have only tipped the iceberg of my knowledge as a software engineer/web developer.

<div class='youtube-video'>
<iframe class="video" width="560" height="315" src="//www.youtube.com/embed/ZDCs7ijNUVM" frameborder="0" allowfullscreen></iframe>
</div>