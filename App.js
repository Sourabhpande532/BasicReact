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
/*👆@identyfire[🙊(about react and props)] @resides:📂pt_one.js*/


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
/*[@identyfire🤖[1st]] to clear you'r doubt show to home page in react
  [@identyfire🤖[2nd]] to clear you'r doubt
  [@identyfire🤖[3rd]]  why there is empty "object" {}*/
