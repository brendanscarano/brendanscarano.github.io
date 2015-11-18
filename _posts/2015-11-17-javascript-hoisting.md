---
title: JavaScript Hoisting
layout: post
---

A few weeks ago, Dev Bootcamp NYC was hosting lightening talks given by alumni. Knowing the audience was going to be mainly current students, as well as people considering DBC, I wanted to talk about something that tripped me up when I first started learning web development and felt the concept of <i>hoisting</i> in JavaScript would be perfect. It is a concept that is relatively easy to grasp, yet seems to be elusive to students when they are first learning JS.
 
### What is hoisting?

When looking at a file of code it may seem like the computer will read the code line by line, top to bottom. While this is sometimes true (for simplier applications) there are instances where the computer will read certain things first.

For example:
{% highlight javascript %}
console.log(a); // ReferenceError
{% endhighlight %}

Here we are trying to print a variable <b>a</b> that has not yet been defined.
{% highlight javascript %}
var a = 2;

console.log(a); // 2
{% endhighlight %}

Setting the variable <b>a</b> to 2 will now print 2 to the console as expected.

However if you move the <b>var a = 2</b> declaration below the console.log you would get:
{% highlight javascript %}
console.log(a); // undefined

var a = 2;
{% endhighlight %}

Undefined? Why is this happening? Why isn't the console.log spitting out a <b>ReferenceError</b> since <b>a</b> is not defined before the variable is printed?

<b>This is <i>hoisting</i> in JavaScript!</b>

When the computer goes to execute this file it hoists all variable declarations to the top of the file but does not assign them a value. So the code we have above is actually read by the computer as:
{% highlight javascript %}
var a;

console.log(a); // undefined

a = 2;
{% endhighlight %}

It is not only variables that get hoisted to the top when the computer executes the code, but function declarations as well.

Consider:
{% highlight javascript %}
foo(); // 'Hello World!'

function foo() {
  
  console.log('Hello World!');

}
{% endhighlight %}

The function declaration <b>foo</b> is getting hoisted to the top when the computer runs the code. So what the code above looks like to the computer is:
{% highlight javascript %}
function foo() {
  
  console.log('Hello World!');

}

foo(); // 'Hello World!'
{% endhighlight %}

Keep in mind however that function expressions are not hoisted as function declarations are.

So <b>foo</b> here would not be hoisted:
{% highlight javascript %}
foo(); // TypeError: foo is not a function

var foo = function() {
  
  console.log('Hello World!');

}
{% endhighlight %}

Again the computer is actually interpreting the code as:
{% highlight javascript %}
var foo;

foo(); // TypeError: foo is not a function

foo = function() {
  
  console.log('Hello World!');

}
{% endhighlight %}

One thing to keep in mind is that variables and functions are hoisted to the scope they belong in. In addition, assignments and executables are left in place.

For example:
{% highlight javascript %}
foo(); // undefined

function foo() {

  console.log(a);

  var a = 'Hello World!';

}
{% endhighlight %}

The concept of hoisting is extremely extremely important in understanding how the computer reads our JavaScript files and when variables and functions will be set and defined in the scope.

If you would like to continue digging into <i>hoisting</i> in more detail an excellent resource is Kyle Simpson's book, <a href="https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures" target="_blank">You Don't Know JS: Scopes & Closures</a>. Specifically, in <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch4.md" target="_blank">Chapter 4</a> he goes in depth with JavaScript <i>hoisting</i> and it is a great way to dig deeper into this concept.

