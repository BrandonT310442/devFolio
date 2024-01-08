(function(){"use strict";var t={535:function(t,a,e){var s=e(144),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"container-fluid",attrs:{id:"home"}},[a("router-view")],1)])},l=[],o=e(38),r={mounted(){const t=o.ZP.timeline({defaults:{duration:.5}});t.from(".logo",{opacity:0,ease:"back",delay:.8}).from(".menu-animation li",{opacity:0,ease:"back",stagger:.25},0).from(".fa-bars",{opacity:0,ease:"back",x:12,delay:0}).from(".description .hi",{opacity:0,ease:"sine",delay:0,y:-10}).from(".description .name",{opacity:0,ease:"sine",y:-10,delay:0}).from(".description .name-subtitle",{opacity:0,ease:"back",y:12,delay:0}).from(".description .name-desc",{opacity:0,ease:"back",x:12,delay:0}).from(".description .resume-btn",{opacity:0,ease:"back",x:-12}).from(".about-title",{opacity:0,ease:"back",y:100}).from(".about-me",{opacity:0,ease:"back",x:-12}).from(".about-image",{opacity:0,ease:"back",scale:.6})}},n=r,c=e(1),d=(0,c.Z)(n,i,l,!1,null,null,null),u=d.exports,p=e(345),f=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("topHeader"),a("description"),a("about"),a("work"),a("mainProject"),a("noteworthy"),a("contact"),a("bottomFooter")],1)},v=[],m=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("nav",[a("input",{attrs:{type:"checkbox",name:"",id:"check"}}),a("label",{staticClass:"checkbtn",attrs:{for:"check"}},[a("i",{staticClass:"fas fa-bars",attrs:{id:"menu-open"},on:{click:function(a){return t.menuOpen()}}}),a("i",{staticClass:"fas fa-times",attrs:{id:"menu-close"},on:{click:function(a){return t.hide()}}})]),t._m(0),t._m(1)])])},h=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"desktop-menu-bar menu-animation"},[a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:"#about"}},[a("span",[t._v("01. ")]),t._v("About")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:"#experience"}},[a("span",[t._v("02. ")]),t._v("Experience")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:"#work"}},[a("span",[t._v("03. ")]),t._v("Work")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:"#contact"}},[a("span",[t._v("04. ")]),t._v("Contact")])])])},function(){var t=this,a=t._self._c;return a("ul",{staticClass:"mobile-menu-bar menu-animation"},[a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:""}},[a("span",[t._v("01. ")]),t._v(" "),a("br"),t._v(" About")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:""}},[a("span",[t._v("02. ")]),a("br"),t._v("Experience")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:""}},[a("span",[t._v("03. ")]),a("br"),t._v("Work")])]),a("li",[a("a",{staticClass:"text-decoration-none",attrs:{href:""}},[a("span",[t._v("04. ")]),a("br"),t._v("Contact")])])])}],C={data(){return{}},methods:{menuOpen(){document.getElementById("menu-open").style.display="none",document.querySelector(".fa-times").style.display="block"},hide(){document.getElementById("menu-close").style.display="none",document.getElementById("menu-open").style.display="block"}}},b=C,_=(0,c.Z)(b,m,h,!1,null,"5a229a9c",null),g=_.exports,w=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container description mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"hi"},[t._v("Hi, my name is")]),a("h1",{staticClass:"name"},[t._v("Brandon Tai.")]),a("h1",{staticClass:"name-subtitle"},[t._v("I build applications for the web.")]),a("p",{staticClass:"name-desc"},[t._v("I'm a full stack developer in Grade 12 located in Toronto, Canada. I am passionate about creating and developing applications that help solve real-world problems.")])])])])])}],x={},j=(0,c.Z)(x,w,y,!1,null,null,null),k=j.exports,S=function(){var t=this;t._self._c;return t._m(0)},H=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container about",attrs:{id:"about"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 about-title"},[a("h3",[a("span",{staticClass:"mr-2"},[t._v("01. ")]),t._v("About Me")])]),a("div",{staticClass:"col-md-7 about-me"},[a("p",[t._v("Hi there! I am Brandon Tai. I am a Grade 12 Student located in Toronto, Ontario who is interested in Computer Science! ")]),a("p",[t._v("I love Computer Science, due to it having unlimited capabalities. The unlimited power of Computer Science, has inspired me to create projects not only in class but in my free time. I hope that one day my applications will positively impact those worldwide.")]),a("p",[t._v("Here are a few technologies I've been working with recently: "),a("ul",{staticClass:"skill-list float-left ml-5 mr-5 fa-ul"},[a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("HTML & CSS")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("JavaScript")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Bootstrap")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("React.js")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("MEVN Stack")])]),a("ul",{staticClass:"skill-list float-left ml-5 fa-ul"},[a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Vue Js")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Node.js")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Firebase")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Git & Github")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Java")])])])]),a("div",{staticClass:"col-md-5 about-image"})])])])}],T={},M=(0,c.Z)(T,S,H,!1,null,null,null),B=M.exports,z=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container work",attrs:{id:"experience"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h3",[a("span",[t._v("02. ")]),t._v("Where I've Worked")])]),a("div",{staticClass:"work-holder row"},[a("div",{staticClass:"col-md-2 work-tab"},[a("div",{staticClass:"nav flex-column nav-pills",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[a("a",{staticClass:"nav-link active",attrs:{id:"v-pills-home-tab","data-toggle":"pill",href:"#v-pills-home",role:"tab","aria-controls":"v-pills-home","aria-selected":"true"}},[t._v("Qvella")])])]),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"tab-content pl-2",attrs:{id:"v-pills-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab"}},[a("h6",{staticStyle:{color:"var(--white)"}},[t._v("Management Engineer Intern "),a("span",{staticStyle:{color:"var(--green)"}},[a("a",{attrs:{href:"https://www.qvella.com/canada/"}},[t._v("@ Qvella")])])]),a("p",[t._v("July 2023 - August 2023")]),a("ul",{staticClass:"fa-ul pl-0 ml-3"},[a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Streamlined supplier data, improved procurement efficiency via a database, optimized parts purchasing, minimized excess stock through the warehouse. ")])])])])])]),a("div",{staticClass:"row mobile-work-holder d-sm-block d-md-none"},[a("ul",{staticClass:"nav nav-pills mb-3",attrs:{id:"pills-tab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"pills-home-tab","data-toggle":"pill",href:"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"}},[t._v("ECX")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"pills-profile-tab","data-toggle":"pill",href:"#pills-profile",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}},[t._v("Zealarax Technologies")])])]),a("div",{staticClass:"tab-content",attrs:{id:"pills-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"}},[a("h6",{staticStyle:{color:"var(--white)"}},[t._v("Frontend Developer "),a("span",{staticStyle:{color:"var(--green)"}},[t._v("@ ECX")])]),a("p",[t._v("August 2020 - September 2020")]),a("ul",{staticClass:"fa-ul pl-0 ml-3"},[a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Collaborated with a team of Developers to build mini applications")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Implementation of visual elements designed by UI Designers")])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab"}},[a("h6",{staticStyle:{color:"var(--white)"}},[t._v("Frontend Developer "),a("span",{staticStyle:{color:"var(--green)"}},[t._v("@ Zealarax Technologies")])]),a("p",[t._v("October 2018 - June 2020")]),a("ul",{staticClass:"fa-ul pl-0 ml-3"},[a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Working hand-in-hand with UI Designers in achieving great designs of web apps.")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Implementation of responsive web design which renders well across multiple devices.")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Translation of UI/UX Designs into codes to produce awesome interfaces for users.")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Building reusable codes.")]),a("li",[a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-caret-right"})]),t._v("Preparation of documentation for applications developed.")])])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])])])])}],I={},P=(0,c.Z)(I,z,L,!1,null,null,null),F=P.exports,O=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container main-project",attrs:{id:"work"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h3",[a("span",[t._v("03. ")]),t._v("Some Things I've Built")])]),a("div",{staticClass:"row px-3 left-project"},[a("div",{staticClass:"col-md-7 project-image"},[a("img",{staticClass:"img-fluid",attrs:{src:e(443),alt:"project image"}})]),a("div",{staticClass:"col-md-5 project-desc"},[a("p",{staticClass:"text-capitalize text-right mb-0 featured"},[t._v("Featured Project")]),a("h4",{staticClass:"font-weight-bold text-right mt-0"},[t._v("Tration")]),a("p",{staticClass:"text-right full-project-desc p-3"},[t._v("Tration, a Chrome extension designed for individuals with dyslexia, offers multiple features to enhance reading. It includes a font changer with five scientifically proven dyslexia-friendly fonts, an ad-blocker, and an image-blocker to improve concentration. The extension also features a background and font color picker, a letter spacing tool, text-to-speech functionality, and a built-in dictionary. ")]),a("ul",{staticClass:"project-tools"},[a("li",[t._v("JS")]),a("li",[t._v("CSS")]),a("li",[t._v("Dictionary API")]),a("li",[t._v("HTML")])]),a("ul",{staticClass:"project-link"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://github.com/Brandon-T84/Tration"}},[a("i",{staticClass:"fab fa-github"})])])])])]),a("div",{staticClass:"row px-3 right-project"},[a("div",{staticClass:"col-md-5 project-desc"},[a("p",{staticClass:"text-capitalize text-right mb-0 featured"},[t._v("Featured Project")]),a("h4",{staticClass:"font-weight-bold text-right mt-0"},[t._v("Ugantu Battle Royale Game")]),a("p",{staticClass:"text-left full-project-desc p-3"},[t._v("Ugantu is a multiplayer battle royale game that takes place 100 years in the future on the planet Ugantu. After loading the game up you will first jump off a plane and you will choose a landing spot. Make sure to choose your landing spot wisely as the loot varies between each building and there can be other players there as well. In addition, make sure to be inside the zone because as time goes on the zone shrinks and if you are not inside the zone you will lose health. To win fight other players and be the last person standing!")]),a("ul",{staticClass:"project-tools"},[a("li",[t._v("Core Game Engine")]),a("li",[t._v("Unreal Engine")]),a("li",[t._v("Lua")]),a("li",[t._v("Blender")])]),a("ul",{staticClass:"project-link"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://devpost.com/software/ugantu"}},[a("i",{staticClass:"fab fa-github"})])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://www.coregames.com/games/324d2f/ugantu"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])])]),a("div",{staticClass:"col-md-7 project-image"},[a("img",{staticClass:"img-fluid",attrs:{src:e(950),alt:"project image"}})])]),a("div",{staticClass:"row px-3 left-project"},[a("div",{staticClass:"col-md-7 project-image"},[a("img",{staticClass:"img-fluid",attrs:{src:e(259),alt:"project image"}})]),a("div",{staticClass:"col-md-5 project-desc"},[a("p",{staticClass:"text-capitalize text-right mb-0 featured"},[t._v("Featured Project")]),a("h4",{staticClass:"font-weight-bold text-right mt-0"},[t._v("NBA Sports Stats Project")]),a("p",{staticClass:"text-right full-project-desc p-3"},[t._v("Used HTML, CSS and JS to create an NBA application that stored and retrieved live NBA stats that were updated every day for 2022-2023 NBA Season.")]),a("ul",{staticClass:"project-tools"},[a("li",[t._v("JavaScript")]),a("li",[t._v("HTML")]),a("li",[t._v("CSS")]),a("li",[t._v("NBA API")])]),a("ul",{staticClass:"project-link"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://github.com/BrandonT310442/ICS4U-2022-23/tree/main/Introduction%20to%20Javascript/Sports%20Stats%20Project"}},[a("i",{staticClass:"fab fa-github"})])])])])]),a("div",{staticClass:"row px-3 right-project"},[a("div",{staticClass:"col-md-5 project-desc"},[a("p",{staticClass:"text-capitalize text-right mb-0 featured"},[t._v("Featured Project")]),a("h4",{staticClass:"font-weight-bold text-right mt-0"},[t._v("Pridecare")]),a("p",{staticClass:"text-left full-project-desc p-3"},[t._v("Pridecare is a website connecting LGBTQ+ individuals with doctors, offering sign-up options for both patients and healthcare providers. Users can search for registered doctors in their area, view profiles with reviews, office details, contact information, and a brief introduction. The platform provides convenient features, including an email button to contact the doctor and a review button for user feedback. Additionally, Pridecare offers a chat feature for members of the LGBTQ+ community to ask health-related questions to doctors globally.")]),a("ul",{staticClass:"project-tools"},[a("li",[t._v("Firebase Authentication and Databse")]),a("li",[t._v("Javascript")]),a("li",[t._v("HTML")]),a("li",[t._v("CSS")])]),a("ul",{staticClass:"project-link"},[a("li",[a("a",{attrs:{target:"_blank",href:"https://github.com/Brandon-T84/Pridecare"}},[a("i",{staticClass:"fab fa-github"})])]),a("li",[a("a",{attrs:{target:"_blank",href:"https://devpost.com/software/pridecare"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])])]),a("div",{staticClass:"col-md-7 project-image"},[a("img",{staticClass:"img-fluid",attrs:{src:e(0),alt:"project image"}})])])])])])}],Z={},J=(0,c.Z)(Z,O,A,!1,null,null,null),V=J.exports,q=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container noteworthy mb-5"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(1),t._m(2),t._m(3)])])]),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(4),t._m(5),t._m(6)])])]),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(7),t._m(8),t._m(9)])])]),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(10),t._m(11),t._m(12)])])]),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(13),t._m(14),t._m(15)])])]),a("div",{staticClass:"col-md-4 project-holder"},[a("div",{staticClass:"noteworthy-project"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-6"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})])]),t._m(16),t._m(17),t._m(18)])])])])])])},E=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12"},[a("h3",{staticClass:"text-center text-capitalize"},[t._v("Other Noteworthy projects")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/BrandonT310442/F1-Car-Simulation",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"d-flex justify-content-end",attrs:{href:"https://brandont310442.github.io/F1-Car-Simulation/",target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("F1 Physics Car Simulation")]),a("p",{},[t._v(" Physics simulation of an F1 car, including calculations for dynamics and kinematics. The simulation allows the user to control the car using arrow keys, and provides real-time calculations of velocity, acceleration, and other kinematic parameters. The simulation also includes calculations for various forces acting on the car, such as friction and aerodynamic drag. Additionally, there is a velocity-time graph that provides a visual representation of the car's speed over time. ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("Javascript")]),a("li",[t._v("ChartJs")]),a("li",[t._v("CSS")]),a("li",[t._v("HTML")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/RayhanMamdani/WebStackApp",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("Vendoza Digital Marketplace")]),a("p",{},[t._v(" Worked in a team to create a marketplace to purchase and sell items. Used the MEVN stack to create stunning pages, and store users in the mongoose database ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("MongoDB")]),a("li",[t._v("ExpressJS")]),a("li",[t._v("Vue")]),a("li",[t._v("NodeJS")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/RayhanMamdani/ZORKProject2021",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("Zork")]),a("p",{},[t._v(" A recreation of the retro terminal based text-game with a Ghostbusters theme to it. Built in Java. ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("Java")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/BrandonT310442/Bio-ISP",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"d-flex justify-content-end",attrs:{href:"https://thedumbooctopus.onrender.com/",target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("Dumbo Octopus Website")]),a("p",{},[t._v("Created an aestetically pleasing website using HTML & Tailwind CSS. Included facts about the various functions about the Dumbo Octopus ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("Vue")]),a("li",[t._v("CSS")]),a("li",[t._v("HTML")]),a("li",[t._v("Tailwind CSS")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/Brandon-T84/Trycks-Home",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"d-flex justify-content-end",attrs:{href:"https://devpost.com/software/trycks",target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("Trycks")]),a("p",{},[t._v(" An app which allows anyone to preform mobile magic tricks! ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("HTML")]),a("li",[t._v("CSS")]),a("li",[t._v("JS")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-6 noteworthy-project-link d-flex flex-row justify-content-end"},[a("a",{staticClass:"d-flex justify-content-end mr-3",attrs:{href:"https://github.com/Haayzeed/insure-landing-page",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"d-flex justify-content-end",attrs:{href:"https://insure-me.netlify.app",target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 noteworthy-project-title mt-3"},[a("h4",{staticClass:"text-capitalize font-weight-bold"},[t._v("FRC First Robotics Scouting App")]),a("p",{},[t._v(" Built a scouting app for the 2023 Charged Up Offseason. Led to a 76% win percentage, and back to back wins in the Stemley Cup and Overtime Sunday. ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 project-footer"},[a("ul",{staticClass:"project-tools pb-0 mb-0"},[a("li",[t._v("MongoDB")]),a("li",[t._v("ExpressJS")]),a("li",[t._v("Vue")]),a("li",[t._v("Node JS")]),a("li",[t._v("Bulma")])])])}],D={},U=(0,c.Z)(D,q,E,!1,null,null,null),N=U.exports,G=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container contact",attrs:{id:"contact"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h3",{staticClass:"text-center"},[a("span",[t._v("04. What's Next ?")])]),a("h3",{staticClass:"text-center get"},[t._v("Get In Touch")])]),a("div",{staticClass:"col-md-8 offset-md-2"},[a("p",{staticClass:"text-center"},[t._v("I'm currently looking for job opporunities. Kindly reach out to me if there are any. And if it is just to say hi, my inbox is always open. I will reply as soon as possible.")])])])])])}],R={},X=(0,c.Z)(R,G,W,!1,null,null,null),Q=X.exports,K=function(){var t=this;t._self._c;return t._m(0)},$=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("section",{staticClass:"container footer mt-3 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mb-4 social-media"},[a("ul",[a("li",[a("a",{attrs:{target:"_blank",href:"https://github.com/BrandonT310442"}},[a("i",{staticClass:"fab fa-github"})])])])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("Developed by Brandon Tai © 2023")])]),a("div",{staticClass:"col-md-6"},[a("p",{staticClass:"text-right"},[t._v("Inspired by "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://brittanychiang.com",target:"_blank"}},[t._v("Brittany Chiang")])])])])])])}],Y={},tt=(0,c.Z)(Y,K,$,!1,null,null,null),at=tt.exports,et={name:"Home",components:{topHeader:g,description:k,about:B,work:F,mainProject:V,noteworthy:N,contact:Q,bottomFooter:at}},st=et,it=(0,c.Z)(st,f,v,!1,null,null,null),lt=it.exports;s["default"].use(p.ZP);const ot=[{path:"/",name:"Home",component:lt}],rt=new p.ZP({mode:"history",base:"/",routes:ot});var nt=rt,ct=e(629);s["default"].use(ct.ZP);var dt=new ct.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),ut=(e(825),e(504)),pt=e(17);e(734),e(24);o.ZP.registerPlugin(),s["default"].use(ut.XG7),s["default"].use(pt.X),s["default"].config.productionTip=!1,new s["default"]({router:nt,store:dt,render:t=>t(u)}).$mount("#app")},0:function(t,a,e){t.exports=e.p+"img/Pridecare.489057da.jpg"},443:function(t,a,e){t.exports=e.p+"img/Tration.538774b9.png"},950:function(t,a,e){t.exports=e.p+"img/Ugantu.6186d52a.jpg"},259:function(t,a,e){t.exports=e.p+"img/sportsstats.d216570c.png"}},a={};function e(s){var i=a[s];if(void 0!==i)return i.exports;var l=a[s]={exports:{}};return t[s].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(a,s,i,l){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],l=t[d][2];for(var r=!0,n=0;n<s.length;n++)(!1&l||o>=l)&&Object.keys(e.O).every((function(t){return e.O[t](s[n])}))?s.splice(n--,1):(r=!1,l<o&&(o=l));if(r){t.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[s,i,l]}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var i,l,o=s[0],r=s[1],n=s[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(n)var d=n(e)}for(a&&a(s);c<o.length;c++)l=o[c],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(d)},s=self["webpackChunkmyportfolio"]=self["webpackChunkmyportfolio"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(535)}));s=e.O(s)})();
//# sourceMappingURL=app.d5cac562.js.map