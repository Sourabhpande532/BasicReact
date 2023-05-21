/* 
👋@heading@👋

 👩‍💻♦️ Do you know react is a library or framework  🤔??
 =>Library, Major defference between two of them is that,it takes minimum efforts.so when I say something as a library framework it simply means full fladges framework when we build our apps/web it needs a lot of things it needs routing, you'll need different routes where you can go different pages migrating through over that and there are lot more component inside your app react come as a small "library".

🎈@Followup@🎈...................

👩‍💻🤔♦️ have you see images corousers,so what it is? is it libraray or framework🤔??
 =>it's Javascript Library Major defference between two of them is that,it takes minimum efforts to just put into our code
 it just take minimum efforts for a library to just put it inside our code.

🤼Tool Using 🤼
   - Google Chrome
   - Vs Code 
 
♦️🛕H.W read about "Emmet"👀

👩‍💻♦️ As we saw react it is a Javascript libraray when we say it is a library it mean any other Library & you can inject this react into you'r code as many as times or bare minimum things. 
👩‍💻♦️ React it is a global object/element/variable you can use anywhere.

👩‍💻🤔♦️ how does browser get to know about this document.createElement("h1") what is "document" in this case?
         => it's obivious it comes from browser Api's browser know what is document. browser has a js engine it is knows basically what is happning inside you'r browser & browser know about 
         window.document; <= who gave us this functinality, it's obivious 'Js-engin'

♦️🛕H.W read about "react cdn"👀

ref: - 🖇️ https://legacy.reactjs.org/docs/cdn-links.html 
go and inject it into 📂index.html 


♦️🛕H.W read about "What is crossorigin"👀

 -Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain
 @what is CORS??
 Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

👩‍💻🤔♦️ what is shortest program of javascript ??
     =>The shortest JS program is"empty file". Because even then, JS engine does a lot of things. As always, even in this case, it creates the GEC(general education curriculam) which has memory space and the execution context. JS engine creates something known as 'window'

    🎈or in react what is shortest program?
     =>just inject the code & add somm !"CDN" link into it. to ensure that just go in browser terminl and write  
     -"React" -> enter"
     -"ReactDom" -> enter"
     -"React.createElement" -> enter"

👩‍💻🤔♦️ why there is two script line uses react in CDN ??
      => it just not limited for browser it's limited for mobile,tab,3d react also might be aware or not do you know react Native.

      ---------------------
     🙋[@identyfire🤖[1st]
👩‍💻🤔♦️ How to create <h1>Hellow,react<h/> and show to home page in react??
       react gives us this api's which is know as react.createElement it expect three arguments here. 
      1st - tags, 2nd - object, 3rd - content(inside h1)
      task is inject it into "<div class="root"/>" need to tell the react root element there is the place where we need to inject code so react gives you a api know as ReactDom.    
      
👩‍💻🤔♦️ what is ReactDom??
       because I'm going to modify my dom reading something form Dom that's is 2nd picture came into play "ReactDom" how do we modify in the wake "crateRoot"(this tell the react what is going to inject that it mean tell "root")
👩‍💻🤔♦️ What is React element at the end of the day & when you do react.render() what it will happend?

       it's an "object", & ans => render will modify you'r dom      
      -----------------------
      🙋[@identyfire🤖[2nd]
      what if, if you console.log(heading) what it will prient it?
        => react element is nothing but an objects isn't it amazing at the end of the day it feels like it's not jsx, this is a plane JS object of type h1.

 👩‍💻🤔♦️ Now how does react stored this h1 element ??
        =>if you explore this link 🖇️https://unpkg.com/react@18.2.0/umd/react.development.js so inside link code is taking code as an argument ("h1",{},"Hello,This is Bahadur")<-- this one & making an object out of it.

 👩‍💻🤔♦️ At the end of the day if anybuddy's ask you what is react element?? 
       =>it's obivious it's an "objects"

 👩‍💻🤔♦️ what if || or what'll happened root.render(heading) when you passing a react Element inside the root? 
       => so when you pass this inside render methods so basically this render methods      
        takes in an reactElement & modifies our dom go and check on web page do inspect and check in Element section.
        now,we got the h1 over there how does the h1 came in? that react-dom library that render funntion put this up it is as simple as that 
👩‍💻🤔♦️  Can i do innerHTML on this ??
     => yes, man obivious

👩‍💻!🤔♦️ Can we've multiple roots 🤔🤨 ??
     => No,beacause it's SPA all code you've to inject at one place which is know as root.geneally you'll see only one root No matter how big it is it persists with one root and one render methods.  

👩‍💻!🤔♦️ what if between header and footer two of therm is root just above?
      => let me tell you why it is a library when you build a whole website using html,css,and js it gets huge let's take a look above e.g still react work inside this between two of them what is root, root is the place where react run.
      that is beauty of react where we can do more stuff you can add react you'r existing project also. just we need to change id it as simple as that. but we don't have to do this stuff for the sake of good practice it's for knowledge.

       😈@conslusion@
       -we got access something know as "React"(it's kind of global variable) + 
       -now it has something know as createElement + responsible for h1 tag +
       -endly we realize react it's but an "object" +
       -now we've ReactDom + responsible for all Dom operations 
       -so why do we need createRoot - react needs to know where you want to inject

      ----------------------
      🙋[@identyfire🤖[3rd]]  why there is empty "object" {}

       👩‍💻!🤔♦️ why there is empty "object" {} in line no. 29 arround between?
         🖇️https://react.dev/reference/react/createElement 
             Go and explore this link
          - const element = createElement(type, props, ...children)
          - so this object {} is an used let's suppose there is an <h1 id= "title">Hellow World"<h1>
    👩‍💻!🤔♦️ So how do we do that in react this exact stuff ??
          => So this is place where we can inject our code so this "object"{} is responsible for this so this "objects" gives a this parameters id="title"; so, whatever i'm passed it over there {....here...} goes into my h1 tag like this see above e.g. so all this tag attributes comes from this object 
          🧐@Doubt:=> don't believe go and inspect and see into Element section!

  @😍interviewPerspective😍@
  imp❕👩‍💻!🤔♦️ what if, whenever we pass root.render(heading), inside the reader function this get's injected inside the root which is in public/index.html let's suppose there is lot more stuff inside over there three h1 tag with same id what it'll happend. but i'm in react just render my heading what will happend? will they be replace or will come belew this?

  => but let me tell my friend this is interesting stuff that react will overwrite everything just refresh the page it'll not even a render single line of code. whatever you passed it in react there it just overwrite it only display whatever you pass in root.render(..) beasue we told the ReactDom so that's how it happend. sometimes you'r root is not configured properly?
  =Go => inspect; 
  @conclusion@ so instead of rendering over ther just give a message "Not render" react won't be able to show anything.

👩‍💻!🤔♦️ while refresing why loads "not render name" for some sec?? because it loads the document from initial leval so it takes time to react go and inspect go in Network tab - check All -and disable cache it should be "on"

🙄😏H.w async vs defer attributes in Javascript?
ref=> https://youtu.be/IrHmpdORLu8


👩‍💻🤔♦️ what if if am creating complex div h1 str & how do i create this dose one in React 👇??
    <div id = "container">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
    <h1>Heading 3</h1>
    </div> 
    Go => 📂App.js 






   



*/
