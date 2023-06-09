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

*/
