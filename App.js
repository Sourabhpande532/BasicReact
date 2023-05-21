const heading = React.createElement( "h1", {
    id: "title", className: "john",
}, "Heading 1" )
console.log( heading );

const heading2 = React.createElement("h2",{
    id: "title", className: "sohn"},
    "Heading 2"
    )
console.log(heading2);    

/*create a div*/
const container = React.createElement("div",{
    id: "container"
},[heading,heading2])
/*
☝️Now, As the 3rd element something which put inside a div what we've to put inside one heading1 & heading2 into it. so in react we pass in as a array when we've to pass multiple child/childrean then we pass something like this we can pass as many children as we want here
*/

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(container)
/*[@identyfire🤖[1st]] to clear you'r doubt show to home page in react
  [@identyfire🤖[2nd]] to clear you'r doubt
  [@identyfire🤖[3rd]]  why there is empty "object" {}*/


    