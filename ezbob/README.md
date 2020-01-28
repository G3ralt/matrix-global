# CSS
em - relative to font-size of parent /current font-size/  
rem - relative to font-size of root element  
px - pixels  
% - percent of something  
vh/vw - relative to 1% of the viewport height/width  
display:none - element doesn't appear on page, no space is allocated for it  
display:hidden - element appears on page but is not visible  
mixins - styles that can be reused through the stylesheet  

# JS
postMessage - communication between the window and an iframe or pop-up, not blocked by cors  
forEach - executes a function on all elements  
map - same like for each but doesn`t change the original array; returns a new array  
filter - filters an array based on a predicate; returns a new array  
reduce/reduceRight - reduces an array to a single value  
every - checks if all elements pass a test  
some - check if some elements pass a test  
indexOf/lastIndexOf - finds index of element  
find - finds the first element that passes a test  
findIndex - same as above but returns the index  
name - Dan, age - 40;  

# React
HOC - component(function) that takes another component as an argument; wrapper  
Hooks - it lets usage of state and lifecycle methods in functional components  
Context API - used to pass data through context object instead of props with the component chain  
componentDidMount - fires after first render; can be hooked with useEffect()  
componentDidUpdate - fires after every render; can be hooked with useEffect()  
componentWillUnmount - fires before removal of component; can be hooked with useEffect()  
shouldComponentUpdate - decides if render should be triggered based on state and props; it can be somewhat hooked with React.memo  
controlled/uncontrolled - controlled components use the state of the component as state for the element; uncontrolled don`t use state of the component, but might use references  
React.memo - HOC for functional components; can be used instead of shouldComponentUpdate  

# Authentication
1. With username/password protocol. After authenticating the information, the server should send a token that is attached to every request to secure resources. Also, multi-factor authentication is possible.  
2. Cross-Origin Resource Sharing is a request to a resource from different origin. A solution is adding an Access-Control-Allow-Origin header to responses.   

# Opinions
1. REDUX
2. Pro - OOP features, con - complexity/time to learn
3. I have used REST extensively and prefer it because I'm used to it, but I don't have problems with GraphQL.