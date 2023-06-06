/**
 @PROCESS-> ----Of Making App start from now Onwords----

in this one we'r using parsel,
So what is parsel🤔??

it is something know as "Package" By the term Package it's mean what ? it is kind of a modeule or a package of Javascript files some peace of code. for that we need to use @package manager.
-npm(Officially Npm Does not stand for "Node package manager" but it is basically doing the same thing)

🤔 Do you know what BUNDLERS React use in general originally which create-react-app?[🔺vite,🔺webpack,🔺parsel,🔺Babel] 
->🎗️ it is responsible for perform lot more operations.
->🎗️ They use "webpack" Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify and !Babel it's an compiler(Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React)

->🎗️In the originally create react app BUNDLERS they use is know as ""webpack"" & Babel as well.

Ref:-> 🔗✈️https://create-react-app.dev/
-@working
 on create-react-app(use "webpack" BUNDLERS)
-@TERMINAL_process
-npm init + enter

 👋🤔So what does that mean when you've package-manager? what is package.json? what is Npm🤔? & 🤔why npm?

 -😶‍🌫️it's an amazing npm configuration which npm needs. 
 -😶‍🌫️coming to "npm"->it is use to manage our packages
 -😶‍🌫️coming to "why npm"-> -⤵️

 a)-🎗️becz our entire application base on packages so we need package in order to run. 
 b)-🎗️it does not run on just react-only it has lot of superpowers which we need & those superpowers comes from defferent packages which packages are present by using npm. it is like maven for "UI" 
 c)-🎗️in addition to our react app cannot be build by just injecting into our web it has packages which provide more powers via npm.

 @🫣CONCLUSION_ON_WHY_NPM ->  Interview Perspective give ans belew one;
 a)🎗️we want to manages lot of packages our react is huge app with just does not run on react there are lot more superpowers,lot more functionality which we need & those superpowers comes from deff'nt packages which packages are present by using NPM. 

 b)🎗️react it's powered by lot of thing,packages let just say we need to minify up,neet to BUNDLES things, need to varify, need to do tree shaking, remove console log,we need to do chunking  let's suppose optimize our apps so for that we need lot more "helper packages" & those helpers packages comes inside "npm".
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
  [🔺^ , 🔺~, 🔺""]
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
  -So to know what exact version we use on Production Or do we need for Production we use package-lock-json. it exactly tell you the version of which library you'r using if you go(package-lock-json) and scrooll down you get exact version but 😱Given the fact there is no symboll like ^ ~ "" like that why??⁉️
  
  🤔🫣Have you heard one convection/statments? that it is working on my local but it is not working on Production? everybuddy's facing same issues, why?
   => 
   🎗️for resolving that issues somethimes what happened is we talk about"package-json" let's something happened -> "^ 0.3.0" suppose it update after certanity it'would'nt be show here it rather would be show in "package-lock-json" it will upgrade iteself.
   so, we don't want such uncertanity on our machines or as well into the Production. so we've package-lock-json which "locks" the version 

   🎗️it is a proof what extact version you use if you compare package-json & package-lock-json. it exactly tell what version does you'r depend on. it keeps us a snap-shot of it
   @conslusion:--> so far we'have parsel as devDependencies ("0.3.0") if there is update veresion here. so my package-lock-json lock the version & we keep it safe.

  👋What is the difference between major and minor version?🤔

  MAJOR version increment indicates incompatible(destract one) API changes. MINOR version increment indicates addition of functionality in a backwards-compatible manner. PATCH version increment indicates backwards-compatible bug fixes.

-------------)NEW)------------

  @ABOUT:---> what is packaglockjson,node_modules & create react app.
 

  🙆‍♂️what is packaglockjson?
   -🎗️it is very important file it locks the version
   @🫣🤫KeepNote: Never ever put you'r "packaglockjson" into gitignore.if you put this into gitignore it's 100% chance of error.
   -why it's because you'r machines is just stimulated machines you'r project run on server.
   🧑‍💻client machines  ◀️---- github(server)  ----▶️ 🖥️ server machines
   so,want packaglockjson has to be exact version so this need to send server as well but it won't go dirctly because it needs be pass from git server as well then it shipt to server machines(server will fetch from this git so we need packaglockjson 100% in git) that's what we need to pass exectly. 
   -🎗️it maintains the exact version of it,it keeps on track.
   -🎗️it maintains the hash of it as well 

   -what is this integrity": "sha512-2Hux... in packaglockjson??
    🫵it maintains the hash of it as well. this has ensures that what exactly the version parsel was running on my system is exactly the same on Production or not that's how it maintains the integrity that's is why it is sha512 formate.
    @sha512: Regarding neawer version of node;
    
   🧐what is node_modules😵‍💫 when somebudyy hit npm i <package>?
     -🎗️it is kind of DataBase for you'r all npm packages where all code includes in BUNDLERS forms.
     -🎗️this is form where all superpowers has comes up here.
     -🎗️how you'r parsel minify you'r code go and see on node_modules?
     -🎗️it is helper function.
     -🎗️it always go through PROCESS our project depend on parsel depend on parsel (minifires)BUNDLERS that present inside node_modules
     -🎗️there is browserlist -> what does it do? so this browserlist helps us to make our app compatible older version of browser e.g enternet explore.
     @node-gyp-build: needs to be install "optionally"(solve error);
     @Makesure: it should'nt be on @github 
     😵‍💫Why we don't put it on git?? 
     -🎗️packaglockjson & package-json has sufficient amount of information to recreate node_modules. it keeps on track all the Dependency and Versioning.
     @😗IMP-> packaglockjson helps us to generate node_modules on to our server. one is at 🧑‍💻localmachine & and one is at 🖥️server that's it. we need to create node_modules by own on to a server Ok.   

     Now, what amazing thing parsel can do??
     @NOTE: -> Don't use CDN & write code( Not good way)
     @why:  -> react keeps on updating thing to get rid of that. 
               then need to change CDN link also so that's why
               & usually not found this one our node-modeule so what is easy for us for fetch data form CDN or server, obivious from server. 

    let Us now create first create-reacta-app?
    @FOLLOW_PROCESS↙️
    -🎗️npm i react 
    -🎗️npm install react-dom 
    -🎗️npx parsel index.html(entry-point) it started the ser server with is 
     😵‍💫npx:--> what does that mean? execute code by using npx take ADVANTAGE of node_modules

     @Accendentaly we got 🔺"Error" why because we previously use "CDN" and we removed from it. in order to resolve that error we need to bring info from node_modules for that we need to "import" stuff on to App.js

     So what is ReactDOM?
     this is the package which manipulating the dom;

     @KEEPNOTE:-> Never Ever touch node_modules,packaglockjson file.
     @KEEPNOTE:-> Need to tell browser:-> type ="module"
     O.W throwth error. in index.html because browser or narmal js don't what is import we need tell this is not narmal js file this is module in js.

     #🔺!IMP:-: need to import react & ReactDOM(App.js)

   -------------)NEW)------------

   HMR:-->(HOT-MODULE-RELOADING)

   When it happened:-> after save it Automatically load webside & update it. like apply color,apply fontSize.....
   Who is doing 🧐? Parsel

   How Does HMR work 🧐?? How does it Do?
   :-> Something know as ""File Watcher algorithm""(copowred by "C++") parcel uses this algorithm to keep a track.


   Q) Does parcel Need some space 🧐?? while doing stuff HMR ? & what is parcel-cache ??

   :-> of course everybuddy want space but parcel don't ask for space but need space. 
   ----------
   :-> whatever operations HMR & FWR & Minification of your file....parcel is doing it for you it uses all this file present on 📂parcel-cache.

   What is dist folder 🧐??
   -🎗️Keep the files minify for us.

   -🎗️So,this is Development Build when we use "npm start", "npm run dev", "npx parcel src/index.html" in terminal so this is just create a "faster Development" version of our project & serve it on server. 

   -🎗️it just create a "Development Build" for us & it hoasted on server.
   -🎗️What if we tell the parsel, make a Production Build "npx parcel build src/index.html" so how do I tell the parcel make s Production build ?🧐? :-> I tell it by using "build" command-
   -& when you say this it create a lot more thing,it will minify you'r file it'will do lot more thing.- 
   -🎗️& where it'll push this build 🧐? parcel will build all the Production files into my 📂"dist" folder.

   -Let'suppose you delete 📂"dist" folder ?

   Now if hit ""npx parcel build src/index.html(Production purpose)"" will it work or not 🧐?? Not it show error! so to git rid of ↙️

   @😗👉KEEP_NOTE:-> After that need to clean entry point "package.json"
   when we use "parcel" no need to specified ep(main: "App.js") becz parcel give already previledges in terminal use this one -> "npx parcel build src/index.html" in the form of command. NOW Hit enter.

   :-> -🎗️ now it absoluterly work it create 3 files for us whatever file present on dist 📂folder know as "helper file(map)" 
   -:->-🎗️Now as we grow ther are lot more file But why it give me 3 files 🧐??
   :-> -🎗️let me tell what is parcel🧐?? it is BUNDLERS it is a bundling the things when we create a Production build it create this 3 files & push it into 📂dist folder.
   :-> -🎗️Now,you'll get 3 file overther & doing the process of minify our project & this is code that you imported.
   :-> -🎗️you'll get at the end of code our little bit Js code while scroll up. @find_key on index.js file
   -So, this is code where react & ReactDOM code imported from this 📂dist folder.

   -@👉😗WHAT_PARCEL_DOES_IT_FOR_US:[HMR,FWR,bundling,minifying,cleaning our code(in the sense you'll never ever find console.log() in dist/index.js), Just taking less time(e.g: 2.07:when we build for production build as compare Development build(try:-> npx parcel src/index.html && for saving as well take too time))
   -@Conclusion:->Pracel take care all the Development and the production.
  ]
   
   





     


 */
