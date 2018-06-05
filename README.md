This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A simple react calculator supporting addition and subtraction of whole and decimal numbers.

## Theory

The synchronous operations mean that the program gets executed in a strict order from top to bottom, whereas asynchronous operations get executed in
any particular order. The asynchronous programming tends to be more flexible but as a drawback, it is much harder to reason about.

Javascrpit by default is a syncronous blocking single threaded language. But with help of closure javascript can utilize the API from the browser
to make asynchronous calls. As an example a frequently used `setTimeout` is not part of the javascrpit language itself but as part of the browsers API.
We make a call from the javascript to the browser API asynchronously by utilizing closure.