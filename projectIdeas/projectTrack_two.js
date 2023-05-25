/**
 @PROCESS-> ----Of Making App start from now Onwords----

in this one we'r using parsel,
So what is parsel🤔??

it is something know as "Package" By the term Package it's mean what ? it is kind of a modeule or a package of Javascript files some peace of code. for that we need to use @package manager.
-npm(Officially Npm Does not stand for "Node package manager" but it is basically doing the same thing)

🤔 Do you know what BUNDLERS React use in general originally which create-react-app?
-> They use "webpack" Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify and !Babel it's an compiler(Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React)

-@working
 on create-react-app
 -@TERMINAL_process
 -npm init + enter

 👋🤔So what does that mean when you've package-manager? what is package.json? what is Npm🤔? & 🤔why npm?

 -😶‍🌫️it's an amazing npm configuration which npm needs. 
 -😶‍🌫️coming to "npm"->it is use to manage our packages
 -😶‍🌫️coming to "why npm"-> -⤵️

 a)-becz our entire application base on packages so we need package in order to run. 
 b)-it does not run on just react-only it has lot of superpowers which we need & those superpowers comes from defferent packages which packages are present by using npm. it is like maven for "UI" 
 c)-in addition to our react app cannot be build by just injecting into our web it has packages which provide more powers via npm.

 @🫣CONCLUSION_ON_WHY_NPM ->  Interview Perspective give ans belew one;
 a)we want to manages lot of packages our react is huge app with just does not run on react there are lot more superpowers,lot more functionality which we need & those superpowers comes from deff'nt packages which packages are present by using NPM. 

 b)react it's powered by lot of thing,packages let just say we need to minify up,neet to BUNDLES things, need to varify, need to do tree shaking, remove console log,we need to do chunking  let's suppose optimize our apps so for that we need lot more "helper packages" & those helpers packages comes inside "npm".
 Now we got package-json;


-------------)NEW)------------

@👋HEADING@🛋️ :---> Basic Overview on Package-Lock-Json, Parsel js & some Versioning Stuff.

Now,we'have Everything mean Package-json & All let just Ignites Our Apps.

HOW_WE_DO_THAT? via belew one(BUNDLERS)

Ref: -> https://parceljs.org/

@ADVANTAGE -> Good for teaching it has similar thing left BUNDLERS offer like webpack,..it's beasts for coders multitasker.
So,How do we get Parser 
 - npm i -D parsel
   [🤔🫣Given the fact we don't want parsel on to Production,we want this into our developers machines that's how it is "-D"(DEV-Dependency(means all the packages that are project use)) or --save-dev almost same both @Note:Don't randomly copy & pest we'r gain from scratch]
   @NOTE -> Dev-Enivironment & Global Enivironment two always there

   Now,we got @package-lock-json what is Does?
   It is very important file let me tell you from scratch
   What is belew one pass us from package-json(recently install)

  "devDependencies": {"parsel": "^0.3.0"},

   @ABOUT-🔝 
   ^  ↩️(know as "Caret" instead of this one(^) you can use tilde(~) over there if you want) if doubt see ⤵️
  -it is the way for use to tell which version should we uses major and miner version of parsel.

  "^" ↩️ It mean if the new version came it'll Automatically updated when you use this "^" e.g 0.1.1 to turn into 0.1.2 only happened for minor version.
  "~" ↩️  if you want to upgrade this into major version we will use "~" tilde  instead one ("^")
  ""  ↩️  if you give this without sign mean "0.3.0" I just want this version only not anyone mean i don't want any update that's the concept of all.

  @ref -> 🖇️https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json(clear more you'r doubt)


  !Imp 🎗️🤔So, What is package-lock-json ?❔

  ----Interview Perspective give ans belew one----
  it is a proof what extact version you use if you compare package-json & package-lock-json. it exactly tell what version does you'r depend on. it keeps us a snap-shot of it.
  =>
  So, when i use this "devDependencies": {"parsel": "^0.3.0" }
  if this,let suppose you'r version changes to "^0.3.1" my project is suppose to be have upgrade. 
  -So to know what exact version we use on Production Or do we need for Production we use package-lock-json. it exactly tell you the version of which library you'r using if you go and scrooll down you get exact version but 😱Given the fact there is no symboll like ^ ~ "" like that why??⁉️
  
  🤔🫣Have you heard one convection/statments? that it is working on my local but it is not working on Production? everybuddy's facing same issues, why?
   => 
   🎗️for resolving that issues somethimes what happened is we talk about"package-json" let's something happened -> "^ 0.3.0" suppose it update after certanity it'would'nt be show here it rather would be show in "package-lock-json" it will upgrade iteself.
   so, we don't want such uncertanity on our machines or as well into the Production. so we've package-lock-json which "locks" the version 

   🎗️it is a proof what extact version you use if you compare package-json & package-lock-json. it exactly tell what version does you'r depend on. it keeps us a snap-shot of it
   @conslusion:--> so far we'have parsel as devDependencies ("0.3.0") if there is update veresion here. so my package-lock-json lock the version & we keep it safe.

  👋What is the difference between major and minor version?🤔

  MAJOR version increment indicates incompatible(destract one) API changes. MINOR version increment indicates addition of functionality in a backwards-compatible manner. PATCH version increment indicates backwards-compatible bug fixes.

 
  






 */
