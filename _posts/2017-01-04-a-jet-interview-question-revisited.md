---
title: A Jet Interview Question, Revisited
layout: post
---

Back when I had interviewed with Jet, during one of the several coding exercises I went through, there was one problem that stuck out.

The challenge was to write a function, <span class="code">add</span>, that will satisfy any of the ways it is called below.

{% highlight javascript %}
add(1, 2, 3, 4);
add(1)(2, 3, 4);
add(1, 2)(3, 4);
add(1, 2, 3)(4);
add(1)(2)(3)(4);
{% endhighlight %}

When I initially heard the question I was a bit perplexed as to how the solution would be implemented however having gotten more comfortable with ES6 syntax, as well as concepts such as currying, over the last few months, revisiting this question becomes a lot more clear.

One of the first keys in solving this problem is utilizing the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank"></i>arguments</a> object that is a local variable within all JavaScript functions, and allows you to refer to the functions arguments in an object as such:
{% highlight javascript %}
function add(x, y, z) {
    console.log('arguments index 0 :', arguments[0]);
    console.log('arguments index 1 :', arguments[1]);
    console.log('arguments index 2 :', arguments[2]);
}

add(1, 'Hello World', ['Testing']);
// arguments index 0 : 1
// arguments index 1 : 'Hello World'
// arguments index 2 : ['Testing']
{% endhighlight %}

You can also set arguments:
{% highlight javascript %}
function add(x, y, z) {
    console.log('arguments index 0 :', arguments[0]);
    console.log('arguments index 1 :', arguments[1]);
    arguments[2] = 100;
    console.log('arguments index 2 :', arguments[2]);
}

add(1, 'Hello World', ['Testing']);
// arguments index 0 : 1
// arguments index 1 : 'Hello World'
// arguments index 2 : 100
{% endhighlight %}

Using this knowledge and knowing that the <span class="code">add</span> function is looking for a base case, where the arguments object length is 4, it is best to implement this functionality first.
{% highlight javascript %}
// function takes no set arguments as we're unsure whether 0-4 arguments will be passed in
function add() {
    if (arguments.length === 4) {
        /**
         * Wrap arguments object in an array and use the
         * ES6 spread operator to build the array
         *
         * Call reduce on the array to sum all arguments
        */
        return [...arguments].reduce((acc, next) => acc + next, 0);
    }
}
{% endhighlight %}

Now that takes care of the base case so if we were to run the test where 4 arguments are passed in we will have the sum, 10, returned.
{% highlight javascript %}
function add() {
    if (arguments.length === 4) {
        return [...arguments].reduce((acc, next) => acc + next, 0);
    }
}

add(1, 2, 3, 4); // 10
{% endhighlight %}

In instances where the 4 arguments are not passed in, and the base case is not met, a curried function must be returned to add to the arguments that came before it, and continue to build the arguments object.
{% highlight javascript %}
function add() {
    if (arguments.length === 4) {
        return [...arguments].reduce((acc, next) => acc + next, 0);
    }

    /**
     * Because the native arguments object will be needed again in the returned function
     * the arguments object from the original function is set to a variable
     * that the return function will provide a closure around
    */
    const outerArguments = arguments;

    /**
     * Return the curried function here
    */
    return function() {
        /**
         * Create a new variable to be passed in add
         * This variable will wrap the original arguments, with the new ones in an array
         * And use the spread operator on both of them to flatten
        */
        const newArgs = [...outerArguments, ...arguments];

        /**
         * This can also be written as:
         * return add(...[...outerArguments, ...arguments]);
         *
         * If you prefer not to create a new variable, newArgs is not necessary
         * however I prefer to be a bit more explicit
        */
        return add(...newArgs);
    };
}
{% endhighlight %}

Now, with the comments removed:
{% highlight javascript %}
function add() {
    if (arguments.length === 4) {
        return [...arguments].reduce((acc, next) => acc + next, 0);
    }

    const outerArguments = arguments;

    return function() {
        const newArgs = [...outerArguments, ...arguments];
        return add(...newArgs);
    };
}

add(1, 2, 3, 4); // 10
add(1, 2, 3)(4); // 10
add(1)(2, 3, 4); // 10
add(1)(2)(3)(4); // 10
add()(1)(2)(3)(4); // 10
{% endhighlight %}

With a bit of ES6 syntax, the spread operator, the reduce function, and the power of currying in JavaScript, an interview question like this can be solved with elegance and ease.