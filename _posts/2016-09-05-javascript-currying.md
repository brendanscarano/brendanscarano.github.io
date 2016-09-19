---
title: Currying in JavaScript
layout: post
---

The concept of currying in JavaScript is a functional technique in which functions can be partially applied. What this essentially means is that a function doesn’t necessarily need to have all of its arguments passed in. If all of them are not returned then a function is returned from that function waiting for the rest of the arguments.

This in turn leads to tighter, more compact code.

Here is a simple example of a function that expects two arguments, a, and b, and returns the sum of the two.

{% highlight javascript %}
function add(a, b) {
  return a + b;
}
{% endhighlight %}

This function can be curried to return a function.

{% highlight javascript %}
function add(a) {
  return function(b) {
    return a + b;
  }
}
{% endhighlight %}

With the curried function above, functions can be built that are partially applied as such:

{% highlight javascript %}
const add10 = function(10) {
  return function(b) {
    return 10 + b;
  }
}

add10(5) // 15;
add10(0) // 10;
{% endhighlight %}

<h4 class="blog-header">Application in the real world</h4>

Recently at my current employer, <a href="https://www.jet.com" target="_blank">Jet</a>, I was working on building the Buy Box (as seen below) for the product details page (the page that lists a products description, and pricing breakdown). After working out a potential solution for building this component I was able to refactor my solution and use currying to build make the code more efficient.

<img src="/assets/buybox.png" alt="Jet Buy Box">

Depending on the product, Jet allows a user to select from various discounts, including opting out of free returns, using a debit card, and a combination of the two.

Each one of these different discounts uses a base price and then subtracts the discounts accordingly to give the final price.

In the example above:<br />
startingPrice: <b>$9.19</b><br />
waive returns: savings of <b>.09</b> for a final price of <b>$9.10</b><br />
debit card: savings of <b>.14</b> for a final price of <b>$9.05</b><br />
combination of the two: savings of <b>.23</b> for a final price of <b>$8.96</b><br />

One-way to write the functions to generate each one of the savings are...
{% highlight javascript %}
function calcFreeReturnsPrice(startingPrice, waiveReturns) {
    return (startingPrice - waiveReturns).toFixed(2);
}

function calcDebitPrice(startingPrice, debitSavings) {
    return (startingPrice - debitSavings).toFixed(2);
}

function calcFreeReturnsAndDebit(startingPrice, waiveReturns, debitSavings) {
    return (startingPrice - waiveReturns - debitSavings).toFixed(2);
}
{% endhighlight %}
With this solution, there is a lot of code repeat, and the code isn't very DRY. All three functions expect the <span class="code">startingPrice</span> argument to be passed in, and each is returning the <span class="code">startingPrice</span> subtracted from the savings passed in. In addition, if more savings were added in the future this code would continue to get bloated.

To make this code tighter, and allow for additional savings to be added in the future, we can leverage currying, as well as some ES6 operators to our advantage.
{% highlight javascript %}
// Curried function that accepts a startingPrice argument
const calcSavings = function(startingPrice) {
    /**
     * calcSavings returns a function looking for X number of arguments
     * By using the ES6 spread operator this function can accept any number of arguments
     * which will get become an array of everything thats passed in
     */
    return function(...savings) {
        /**
         * Use the reduce function to iterate over each value
         * subtracting the previousValue from the currentValue
         * The startingPrice which is accessed through a closure of the curried function
         * will be the starting value each time this is called
         */
        savings.reduce((previousValue, currentValue) => previousValue - currentValue, startingPrice);
    }
}
{% endhighlight %}

{% highlight javascript %}
// Comments removed
const calcSavings = function(startingPrice) {
    return function(...savings) {
        savings.reduce((previousValue, currentValue) => previousValue - currentValue, startingPrice);
    }
}
{% endhighlight %}

What once took 3 functions to accomplish, has now been achieved with this one <span class="code">calcSavings</span> function. With currying the functions can now be called as so:

{% highlight javascript %}
const basePrice = calcSavings(9.19);

const waiveReturns = basePrice(.09);
const useDebitCard = basePrice(.14);
const waiveReturnsAndDebit = basePrice(.09, .14);
{% endhighlight %}

Here is what the break down of the <span class="code">waiveReturnsAndDebit</span> call will look like:

{% highlight javascript %}
const calcSavings = function(startingPrice) {
    return function(...savings) {
        savings.reduce((previousValue, currentValue) => previousValue - currentValue, startingPrice);
    }
}

/**
 * startingPrice = 9.19
 * This was passed in through the basePrice variable that was declared before setting waiveReturns
 * this creates a closure over the startingPrice variable
 */
const calcSavings = function(9.19) {
    return function([.09, .14]) {
        /**
         * First reduce call:
         *    The startingPrice begins as the previousValue in the first call
         *    The currentValue is the first index of the savings array
         * [.09, .14].reduce((9.19, .09) => 9.19 - .09, 9.19)
         *
         * Second reduce call
         * [.14].reduce((9.1, .14) => 9.1 - .14, 9.19)
         *
         * Once all the savings have gone through the reduce function
         * The final value of 8.96 is returned
         */
        savings.reduce((previousValue, currentValue) => previousValue - currentValue, startingPrice);
    }
}
{% endhighlight %}

Should Jet in the future look to add more discounts, because of currying (and with the help of reduce) this function allows for any number of discounts to be added, without having the change the logic for how they are deducted from the starting price.

By utilizing currying, functions become smaller, code becomes tighter, and repitiion decreases.

<h5 class="blog-header">Helpful Links</h5>

<a href="https://www.sitepoint.com/currying-in-functional-javascript/" target="_blank">Sitepoint: A Beginner’s Guide to Currying in Functional JavaScript</a><br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">MDN: Array.prototype.reduce()</a>





