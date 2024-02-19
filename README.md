## React Server Components

React has recently introduced a groundbreaking developer paradigm known as React Server Components (RSCs). This innovative approach offers new possibilities for server-side rendering and dynamic loading in React applications. RSCs aim to address some challenges associated with traditional client-side rendering, particularly in terms of performance, initial page load times, and efficient use of server resources.

Checkout [React Server Components on medium](https://medium.com/@kulsumansari4/react-server-components-a1edc1de6a72) to understand RSCs.


### Server Actions

Server actions are the ways a client component can communicate to server. 

Here, 

[Counter component](https://github.com/kulsumansari/react-server-component/blob/master/src/components/counter.js) - is a client component which communicate with server on every button hit the increament happens at server and the result is sent to the client. The response from server should always be serializable

[BlogPosts component](https://github.com/kulsumansari/react-server-component/blob/master/src/components/BlogPosts.js)- this components fetches posts from server on a user interactivity with client using server actions.





