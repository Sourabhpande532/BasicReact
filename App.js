const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "john",
  },
  "Heading 1"
);
console.log( heading );
/*In genral-> <h1 id="title" className="john">Heading 1 </h1> */

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "sohn",
  },
  "Heading 2"
);
console.log(heading2);

/*create a div*/
const container = React.createElement(
  "div",
  {
    id: "container",
    hellow: "world"
  },
  [heading, heading2]
);
/*
☝️Now, As the 3rd element something which put inside a div what we've to put inside one heading1 & heading2 into it. so in react we pass in as a array when we've to pass multiple child/childrean then we pass something like this we can pass as many children as we want here.

🤔🙄can we pass anyname inside object or just put id,className attributes?Will this work?
yes, it is work(Go and inspect) & given the fact you can put anything inside over there.& it just not a attributes react gives fancy name know as "Props".

🤔🙄what is caching? & do we need chching?

-Yes,Caching is a mechanism to improve the performance of any type of application. Technically, caching is the process of storing and accessing data from a cache. But wait, what is a cache? A cache is a software or hardware component aimed at storing data so that future requests for the same data can be served faster.
-In computing, a cache is a high-speed data storage layer which stores a subset of data


*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
/*[@identyfire🤖[1st]] to clear you'r doubt show to home page in react
  [@identyfire🤖[2nd]] to clear you'r doubt
  [@identyfire🤖[3rd]]  why there is empty "object" {}*/
