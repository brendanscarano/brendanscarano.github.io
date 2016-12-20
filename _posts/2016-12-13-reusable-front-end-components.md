---
title: Reusable Front End Components
layout: post
---

The world of front-end development is one that is in a constant flux, changing and evolving every day. The constant release of new packages, libraries, and frameworks to make development easier can sometimes feel overwhelming, however in the chaos of all these new technologies, certain patterns have emerged that are driving front end development into the future. One of these patterns that has been one of the most popular and most discussed is the design of applications into reusable components.

<h4 class="blog-header">What is a reusable component?</h4>

When you look at a website, or mobile app you probably see a variety of different pieces on the page. Items like video thumbnails, images, messages, buttons, lists, text, and more all fill the screen. Colors typically repeat themselves (think of the the Facebook blue, or Snapchat Yellow), certain fonts remain constant, borders tend to be the same, and overall styles are repeated throughout an app. All of these pieces, whether it’s a font, or a button can be modularized to form individual components, and can then be placed in multiple places without having to rewrite the same piece of code multiple times. Like the same 4×4 red Lego brick is used across several areas to build a Lego Firetruck, so do front end reusable components become to build an app.

As per Wikipedia, Component-based software engineering is:

<p class="quote">“An individual software component is a software package, a web service, a web resource, or a module that encapsulates a set of related functions (or data).

All system processes are placed into separate components so that all of the data and functions inside each component are semantically related (just as with the contents of classes). Because of this principle, it is often said that components are modular and cohesive.”</p>

As summarized in Hedley Smith’s blog post, Thinking in Components, for a component to be reusable across several areas it should be:

<ul>
    <li>Independent- components should be built on their own with limited dependencies on other components.</li>
    <li>Clearly Defined – Larger components should be split up for the sake of being split up. For example, a search bar and search input shouldn’t be split from one another if they’ll never be used apart.</li>
    <li>Exposable – Components such as a button should have properties like their color and text  able to be manipulated so if a user wanted to create a green button that said ‘Go’, and a red button that said ‘Stop’ the same button skeleton can be used with only the text and color being passed in changing.</li>
</ul>

Building reusable components like this creates an enviornment that is consistent, maintainable, and scalable.

<h4 class="blog-header">Where is this trend being seen?</h4>

The concept of reusable components has been a major driver over recent years in some of the most popular and used front end technologies. Perhaps the best place to see this trend exploding is the rise in popularity of frameworks and libraries such as Angular, backed by Google, and React, backed by Facebook to build everything from web applications to now native apps that run on iOS and Android devices. Two of the largest tech giants have poured an immense amount of resources, time, and money into developing these front end technologies that have their foundations based in reusable components.

One of the core principles early web developers and software engineers are taught is the concept of D.R.Y, or “Don’t Repeat Yourself”, meaning that wherever it makes sense to condense repeated code into condensed blocks it should be done. Because writing very similar code repeated in several places can be more difficult to maintain, and possibly lead to more bugs, building components that are D.R.Y can lead to faster development times, and less issues to worry about.

Taking a look at the Jet.com, and one can begin to see how the site breaks into components immediately.

The Jet.com Product Detail Page below has each possible component defined in a red box.

<img src="/assets/jet_pdp.png" alt="Jet PDP">

For example the area with the images can be considered a Product Images component where the skeleton accepts any collection of images to be passed in, and regardless of what they are, the first one will be highlighted in the larger box, and the others will be seen on the left side as small thumbnails. A developer may make this Product Images component more customizable by allowing a user to select how many images they want in the thumbnails or if they want the main product to be able to be zoomed in on.

On the prototyping team I work on at Jet we thought of the entire Jet.com experience as reusable front end components and built them out individually. Components like modals, product tiles, and messages, are skeleton components with customizable pieces that allow for quick development cycles. With these components the team can quickly mock up different Jet experiences for each page since each component operates independently and is exposed to have certain properties customized.

From web apps, to native apps the idea of reusable front end components is one that seems here to stay, and will continue to drive new technologies into the future. The benefits for developers are that they now have less code to maintain and apps are broken into understandable, reusable pieces. New developers can jump into a code base and understand the structure quickly, while new apps can be spun up quicker than ever.