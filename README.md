This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A simple react calculator supporting addition and subtraction of whole and decimal numbers.

## Theory

The synchronous operations mean that the program gets executed in a strict order from top to bottom, whereas asynchronous operations get executed in
any particular order. The asynchronous programming tends to be more flexible but as a drawback, it is much harder to reason about.

Javascrpit by default is a syncronous blocking single threaded language. But with help of closure javascript can utilize the API from the browser
to make asynchronous calls. As an example a frequently used `setTimeout` is not part of the javascrpit language itself but as part of the browsers API.
Same applies to Node, javascript is executed on single thread while some operations like IO are executed on different thread. This way you get 
multithreading benefits while not having to deal with multithread code.

To handle asynchrounous code in JavaScrpit we use `Promises` that makes it much easier to reason about asnyc code and allows us to avoid "callback hell".                                     
