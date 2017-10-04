---
title: Taking an idea from paper to the app store 2 years later
layout: post
---

<h4 class="blog-header">2015</h4>

Two years ago I had never released an app on the Apple app store and didn't have the knowledge to build one. I had started researching iOS development, and taking some Objective-C courses through Treehouse but having only started web development roughly a year prior, my priorities always shifted back to strengthening my understanding of JavaScript, Angular (the framework I was working with at the time), and the other front-end technologies I was using on a day to day basis.

<img src="/assets/gmme/treehouse.png" alt="treehouse">

I’ve always been an observant person, and have often found myself looking at the world and seeing different problems that I would like to fix. Due to the constant chattering in my brain of new ideas, I have filled many a Google spreadsheet, sticky notes, and loose-leaf paper with all of the thoughts that come to my mind.


One such thought happened on (or around) <b>September 13th, 2015</b>... (Special thanks to Dropbox for the date the photo below was saved). On this day, I envisioned an app that would request access to a contact's Camera Roll for a certain date period. The app would let you select a person from your list of contacts, select what dates you wanted all of their photos, and then send them a request, in which as long as they accepted, would grant you access to all their photos within the date range. Like many of my other ideas, the idea stayed on this piece of paper for quite some time...

<img src="/assets/gmme/paper_idea.png" alt="treehouse">

<h4 class="blog-header">The problem I wanted to solve</h4>

After time spent with friends or family, there are usually pictures on someone else's phone I want to save on my own device. Whether it's after a concert with friends, a holiday with family, or some random event, I feel like I'm always asking someone to send me their pictures. I quickly have come to realize that my friends don’t sometimes do well when being pestered to “send me your photos!” Getting my friends to perform the daunting task of selecting the photos and putting the added effort of actually texting them to me, was just a fight that I knew I could never win. Thus the idea for Gmme was born, an app that would make requesting and sending photos to and from friends as easy as sending and accepting a Venmo request?

<h4 class="blog-header">2016</h4>

Early in 2016, I came across a new technology Facebook had released, React Native. This famework allowed developers to build native iOS and Android apps with JavaScript rather than Objective-C, Swift, or Java. Having had such a strong interest in learning iOS app development, and now without the need to learn an entirely new programming language, I was extremely intersted in learning React Native and wrote a post about some of my early learnings here: Getting Started with React Native.

On <b>March 22nd, 2016</b> I wrote the first line of code for a React Native project I called <b>react-native-yourStuff</b>. This was a project I originally created to help solve the problem mentioned above. This would then become the beginning of my path down learning both React and React-Native, and would eventually lead me to my final app, <b>Gmme</b>.

<img src="/assets/gmme/yourStuff.png" alt="treehouse">

<b>Initial UX/UI Flows</b> (this came a little later when I decided I was going to rename the project, Gimme)

<img src="/assets/gmme/paper_flow.png" alt="treehouse">

<img src="/assets/gmme/ux_flow_1.png" alt="treehouse">

<img src="/assets/gmme/ux_flow_2.png" alt="treehouse">

I coded on this project here and there for a few months but wasn't making the progress I would've liked and felt myself getting stuck on several challenges along the way. In addition, when I initially started <b>react-native/yourStuff</b> I was working at Priceline where I was concentrating on Angular on a day-to-day basis. Two months from the start of this project (in late May of 2016) I found myself on a different team, in a different state, working for a startup company called Jet. Here my new team was primarily using React, and other technologies that were brand new to me at the time (Redux, GraphQL, Webpack, etc). Disheartened from not making much progress <b>react-native/yourStuff</b>, and having a wealth of new information to learn, I decided I would shift my focus, and spend my time concentrating on getting adjusted to this new job and all the technologies we were using. Therefore, <b>react-native-yourStuff/Gimme</b> took a backseat for a few months.

<h4 class="blog-header">2017</h4>

Fast-forward to the beginning of 2017, and I decided I wanted to pick up where I left off with <b>react-native-yourStuff</b> and finally get it on the app store. Working with React everyday at Jet had helped me learn so much. With my newfound knowledge, I decided that I would review the code I had initially written for <b>react-native-yourStuff</b>, and when I did, it made me cringe. Rather than refactoring the entire project, I started a new project, and so on <b>January 18th, 2017</b>, a new repo was created on Github, <b>Gimme</b>.

<img src="/assets/gmme/gimme_first_commit.png" alt="treehouse">

I worked on <b>Gimme</b> for about 2 months before old problems began coming up again. I was making better progress than I previously had but there was one problem in particular that kept holding me back. The ability to send photos from one phone to the other, and do it at a speed at which a user wouldn't give up on the process was proving to be more difficult than I originally intended it to be. While I had the process working, sending only 10 photos, would take well over a minute, and in a time when every website and app is instantaneous, this was never going to work.

<h4 class="blog-header">Goodbye Contacts</h4>

Having again lost momentum, and motivation to continue on <b>Gimme</b> for the time being, I decided I wanted to build something quickly and get it on the app store within 3 months. I decided to work on something small enough that would be quick to build, help me learn the iOS App Store deployment process, and give me the confidence boost to finally finish Gimme at a later point.

On <b>March 25th, 2017</b> I started a new project, <b>Goodbye Contacts</b>, that would be an easy way to get rid of the unwanted contacts from your phone. It didn't need any database, because I wasn't storing any data, and it didn't need a signup/authentication process because there was no user information to save, so it was the perfect, quick app to build. Two months later, after a few speedbumps, I had pushed my first app to the iOS app store!

<img src="/assets/gmme/goodbye_contacts_accepted.png" alt="treehouse">

<img src="/assets/gmme/goodbye_contacts.png" alt="treehouse">

<div class="iframe-wrapper">
    <iframe src="https://giphy.com/embed/bfNKVTSgiiMMg" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-christmas-excited-bfNKVTSgiiMMg"></a></p>
</div>

It felt amazing to watch something go from lines of code, and a few images on my computer, to an app that other people could use and try on their own devices. <b>Goodbye Contacts</b> was never meant to be more than a way for me to learn how to get an app on the app store, and prove to myself I could go through the process of building an app, end to end, so once that app was deployed, I wanted to focus my attention back on <b>Gimme</b>, my true passion. So for the 3rd time now, on <b>May 26th</b>, I started a new project on Github, but this time with a cool, secretive name...

<img src="/assets/gmme/octoGimme.png" alt="treehouse">

<h4 class="blog-header">3rd Time's (almost) a Charm!</h4>

To help visualize both short term and long term tasks I wanted to accomplish, I bought a whiteboard to act as a constant reminder as to what needed to get done next. I set an early goal to have <b>Gimme</b> deployed to the app store by <b>August 25th</b>... 13 weeks from writing the first line of code.

<img src="/assets/gmme/white_board.png" alt="treehouse">

I figured having a hard deadline in place, would push each week to work towards the deployment and it did.

One of the first tasks I completed was buying a domain name for the app's landing page. Because I couldn't get any domain with the word <b>Gimme</b> in it, I dropped the "i" (like all cool startups, and Brooklyn pop-up shops do), and purchased <a href="https://getgmme.com" target="_blank">getgmme.com</a>.

Not long into me working on Gmme did I run into the same problem that I had run into before: It was taking too long time to transfer photos from one use to the other. Luckily I came across a library that had been recently developed, <a href="https://invertase.io/react-native-firebase/#/" target="_blank">React Native Firebase</a>, that allowed me to connect my backend services, to my app, on the native side rather than the client side, greatly speeding up several processes that were taking way too long in the past.

Everything was coming along great throughout June and July, and then came early August came. One of the biggest headaches I find with developing iOS apps through React Native is that the development environment can at times be a pain to work with at times. Running an app in development mode locally on your device can work fine one day, and then suddenly xCode has issues the next. These issues are hard, if not impossible, to track down, thus grinding productivity to a halt. Several times when I sat down to build a new feature, or fix a bug in app, I found myself trying to figure out why the app suddenly wouldn't run.

<img src="/assets/gmme/github_commits.png" alt="treehouse">

Then during the first week of August, my app <a href="https://github.com/invertase/react-native-firebase/issues/244" target="_blank">suddenly stopped connecting to my database</a>. I couldn't pull any data, nor could I push any data to it. Without the connection to the data, <b>Gmme</b> was useless. One solution I tried fixing was that the library I had been using to connect to my data, <b>React Native Firebase</b>, had a new version recently released. While I was using v1.X, v2.X had come out a week or so before. So, I upgraded to v2.X, in the process upgrading my React Native version, and React version to support it. Then, not only was I not able to connect to my data still, but I had several issues with the latest version of React Native that I couldn't hunt down.

<h4 class="blog-header">4th Time's a Charm</h4>

After more than a week of spending mornings and evenings trying to hunt down several bugs, that felt like chasing ghosts, I started a new project to see if the problems would persist there. I started with just seeing if I could get the database to connect properly, and that worked! I then checked to see if I could transfer photos at the same speed I was previously accomplishing it, and that worked. So on <b>August 15th</b>, with the "ghost" bugs apparently gone in the new project, I started moving over my app, piece by piece, in what was now my 4th rewrite.

<img src="/assets/gmme/gmme_first_commit.png" alt="treehouse">

Despite the setbacks and a week of essentially 0 productivity, I still thought I could hit my initial target date of getting <b>Gmme</b> on the app store by <b>August 25th</b>. One day before my target I submitted <b>Gmme</b> to Apple for review and ...

<img src="/assets/gmme/gmme_rejected.png" alt="treehouse">

I had a few minor issues I had to resolve in my app before Apple would fully accept it into the app store, so after a few updates and tweaks, I pushed a new version back up to Apple, said a little prayer, and on <b>September 1st</b>, I received the following email from Apple.

<img src="/assets/gmme/gmme_accepted.png" alt="treehouse">

<div class="iframe-wrapper">
    <iframe src="https://giphy.com/embed/NbgeJftsErO5q" width="480" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/funny-star-trek-mind-blown-NbgeJftsErO5q"></a></p>
</div>

<img src="/assets/gmme/app_store_photo.png" alt="treehouse">

<b>Gmme</b>, was on the app store! It was such an incredible feeling to see an idea that was once a few scribbled lines on a piece of loose leaf turn into a real life, working app. Building this app taught me a taught me so much, from expanding my understanding of React Native to finding tools to help create, icons, app store, photos, and landing pages, and the entire apple app store deployment process. Now that it's in the app store I'm going to continue building out new features and fixing bugs while concentrating on getting the word out about it.

Even though the road to get <b>Gmme</b> on the app store has been difficult, I feel that the hardest part has only just started in getting users to try it and make it a part of their lives.

