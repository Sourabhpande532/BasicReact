/*
-------------)NEW)------------

@ABOUT: KEY

Come back to fronted one 
-🎗️npm run start
When you've multiple children so this children knows as "siblings"
👉go & take a look 📂src/App.js you'll find Something know as [heading,heading2] so this are "siblings"
so the convection is that you need to pass "key" in 🔺""props"".
Always pass key to my children(siblings)
e.g 

''''''''''''''''''''''
<div>
<h1 key="">x</h1>
<h2 key="">y</h2>
</div>
''''''''''''''''''''''

@👉MAKESURE: KEY should be Always ""unique"" everytime you call not same for individual.

What use of "key" 🧐😑? why should we give 🧐?

""let's suppose we've html str see above e.g like that so whenever react is updating a dom it will update key value it work as a target. it directly shoot that elements whereever it find "key" it"".

Ref: 🎗️🔗https://legacy.reactjs.org/docs/reconciliation.html (to clear you'r doubt);

RENDER: it mean updating something into dom;
        loading something in Dom html


🔺🎗️RERENDER: react takes lot of effort to rerender Everything 
-------------------

-👉go and visit above link & see section of duke,villanove for that Perspective i talked about.where no key pass.
-👉 react change the whole dom tree reagain from scratch.
-👉let's suppose you introduce one more children it will rerender Everything from scratch because react doesn't from where to start & takes lot of efforts to rerender because only we not pass "KEY".
-👉 so it will not give you good performance.


🔺🎗️see @KEY pass section on above LINK.
-------------------
-👉once you give you ""key"" react has to do very less work.so it doesn't have modify everytime in the dom or rerender.
-👉it just injected that why key's are crusial.& you'should Always use when you've multiple children.
-👉react track this as a unique thing.

-------------)NEW)-------------------

@TITLE: How does create elements work
@ABOUT: 
@LOCATION: 

@OVERVIEW@
So,where does this React come from 🤔🤨?

::-> Yaa it basically come from node_modules & we'r import from it.
So where does createElement comeing it form 🤔🤨 ?
it again come from "node_modules" & tell me who wrote this createElement ??
some facebook developer(meta devs) wrote this createElement. 
& there should be ""export"" in "node_modules" you'd found over there that facebook(meta dev) wrote us.

Why React.createElement ??
so at the end of the day ""React.createElement"" is creting an object & what is giving me it nothing but on object with some pros,children,siblings.
Then what does it happened with object ??
:-> it's turn it into HTML Code & it is put it on the dom it just compile Everything put it on dom thus, this is how react.createElement works.

@Manufacturing@
React.createElement => Object => HTML(Dom)


@KEEP_NOTE: Why console.log() not show value in terminal because our plugins so remove plugins from  📂.babelrc or comment out.



-------------)NEW)-------------------

@TITLE: WHAT Is JSX?? & How it is implementd??
@ABOUT: How React.createElement Turn it into JSX 
@LOCATION: App.js

Q)🧐let's suppose we've to create something big like create a navbar which is having div .header inside one left side having a "logo" right side having "about us","Home","signin/signup" so how would'd do this in react ??

@OVERVIEW@
In previously we perform same operations with everytime we called react.createElement something like below one 👇🎐.
🔺e.g const x = React.createElement("div",{id: "c",key: "d"},[heading, heading2]);

@👨‍💻CODE@---------------
""""""
const div = React.createElement("div",{
  id:"ke"
},
[React.createElement("h1",{},"Hello"),
React.createElement("h2",{},"Hello2"),
React.createElement("h3",{},"Hello3"),]
)
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(div);

OR 

import {createElement as ce} from "react";
const div = ce("div",{
  id:"ke"
},
[ce("h1",{},"Hello"),
ce("h2",{},"Hello2"),
ce("h3",{},"Hello3"),]
)
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(div);
""""""
@👨‍💻CODE@-------------------



both seeme too messy code 😑😑.....

so don't you thing so it's complicated process 🤨↖️↖️ it mess up our whole HTML code it seems too messy. exactly same so to get rid of this pain react introduce the consept of 😑🎐"JSX".


Let's suppose I've to created 🎡Big HTML React gives u a functionality "JSX"

So What is JSX 😵🤨??
you know when facebook created react facebook developer came with an amazing idea we can customize our whole HTML by using javascrip & as we interpret as a "JSX"; 
By the term customize mens we can write whole HTML by using javascript & modify.
E.G 😱:-> 

@👨‍💻CODE@-----------
const x = <div id="title" key="xyz">
<p>this is description</p>
</div> 
@👨‍💻CODE@-----------

KNOW as "JSX"

@🧐Make sure this is not in the "string" pure JSX;
@😱Make sure want to use multiple line use parenthesis "()"

---@INTERVIEW_PERSPECTIVE@---

Give me Answer: 
if JSX, HTML inside javascript "True" or "False" ??;
Its 😱 False statment This is not HTML inside javascript see above e.g this is not HTML inside javascript

---@INTERVIEW_PERSPECTIVE@---

Tell.....Interviewer
-it is HTML like fancy Syntax it's not HTML
-this is fancy way to write HTML inside javascript
-said abruptly JSX is HTML like fancy Syntax but it's not HTML inside javascript

🧐Then How does javascript Recongnize all this thing 🧐??


*/
