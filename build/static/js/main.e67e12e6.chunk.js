(this["webpackJsonpmibdev.github.io"]=this["webpackJsonpmibdev.github.io"]||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/mib_logo_dark.073b4d5a.svg"},26:function(n,e,t){n.exports=t.p+"static/media/poly.9e58fcac.svg"},29:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),i=t(20),o=t.n(i),r=t(2),c=t(9),s=t(5),m=t(6);function u(){var n=Object(s.a)(["\n\n    width: 100%;\n    height: 100%;\n    \n    background: #0C0C0C;\n\n"]);return u=function(){return n},n}var p=m.a.div(u()),d=t(13);function h(){var n=Object(s.a)(["\n\n    position: relative;\n\n    width: 100%;\n    min-height: 100vh;\n\n    z-index: 0;\n\n    &>.logo-mask {\n        position: fixed;\n        overflow: hidden;\n        \n        height: 100%;\n        left: -45%;\n\n        z-index: -1;\n    }\n\n    &>.logo-mask>.mib-logo {\n        width: auto;\n        height: 180vh;\n        transform: translateY(-15%);\n    }\n\n    &>.content {\n        width: 45%;\n        margin: 0 5% 0 auto;\n\n        display: flex;\n        flex-direction: column;\n    }\n\n    .header {\n        transition: all 0.5s ease-in-out;\n        margin-top: ","px;\n\n        display: flex;\n        flex-direction: column;\n    }\n\n    .title {\n        display: flex;\n        flex-direction: column;\n\n        align-items: flex-end;\n        opacity: 80%;\n    }\n\n    .title>h2 {\n        font-weight: 200;\n        font-family: 'Oswald', sans-serif;\n        \n        letter-spacing: 0px;\n        font-size: 1.5vw;\n        text-transform: uppercase;\n    }\n\n    .title>h1 {\n        font-weight: 900;\n        font-family: 'Fira Code', monospace;\n\n        letter-spacing: 8px;\n        font-size: 2.25vw;\n        white-space: nowrap;\n        word-wrap: none;\n    }\n\n    .separator {\n        margin-top: 32px;\n        width: 100%;\n        border-color: #555;\n    }\n\n    .nav-list {\n        position: relative;\n\n        width: 100%;\n        margin-top: 32px;\n\n        list-style: none;\n\n        display: flex;\n        flex-direction: row;\n\n        align-items: center;\n        justify-content: space-evenly;\n    }\n    \n    .nav-item>.nav-link {\n        font-size: 14px;\n        width: 25%;\n        padding: 0.75rem 0;\n        opacity: 80%;\n        \n        font-weight: 200;\n        font-family: 'Oswald', sans-serif;\n        letter-spacing: 0.2rem;\n\n        text-decoration: none;\n        text-transform: uppercase;\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n\n"]);return h=function(){return n},n}var f=m.a.div(h(),(function(n){return n.headerMarginTop})),g=t(23),v=t.n(g),w=t(3),E=t.n(w);function b(){var n=Object(s.a)(["\n\n    margin: 32px 0;\n    text-align: justify;\n    \n    &>.scrollview {\n        height: 50vh;\n        padding-right: 32px;\n        overflow-y: auto;\n    }\n\n    &>.scrollview::-webkit-scrollbar {\n       width: 7px;\n    }\n\n    /* Track */\n    &>.scrollview::-webkit-scrollbar-track {\n        border-radius: 10px;\n        background: #111; \n    }\n\n    /* Handle */\n    &>.scrollview::-webkit-scrollbar-thumb {\n        background: #222; \n        border-radius: 10px;\n    }\n\n    /* Handle on hover */\n    &>.scrollview::-webkit-scrollbar-thumb:hover {\n        background: #555; \n    }\n\n    p {\n        margin-top: 32px;\n        opacity: 80%;\n        line-height: 25px;\n    }\n"]);return b=function(){return n},n}var x=m.a.div(b());function y(){return l.a.createElement(x,null,l.a.createElement("div",{className:"scrollview"},l.a.createElement(E.a,null,l.a.createElement("p",null,"Have you ever tried to create your own thing? No? So don't, it will just give you headaches :D. Now I'll fill this with a lot of lorem ipsum :D"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis justo, eu mollis nulla. Mauris sit amet massa vitae mauris molestie euismod. Curabitur at nisl et felis lacinia venenatis"),l.a.createElement("p",null,"Mauris iaculis justo id volutpat cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus lobortis tortor felis, sit amet viverra erat imperdiet non. Praesent ut odio eleifend, finibus elit nec, suscipit od"),l.a.createElement("p",null,"Cras accumsan velit ante, a sodales leo pellentesque a. Donec pellentesque maximus diam id condimentum. Nulla bibendum rhoncus sem, vel dignissim augue tincidunt sit amet. Morbi ac ipsum rutrum, suscipit ante sit amet, aliquet justo."))))}function j(){var n=Object(s.a)(["\n\n    margin-top: 32px;\n\n    &>ul {\n        list-style: none;\n        display: grid;\n\n        grid-gap: 10px;\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n\n    &>ul>li {\n        width: 150px;\n        height: 150px;\n\n        display: flex;\n        flex-direction: column;\n\n        &:hover {\n            .content>h3 {\n                opacity: 0;\n            }\n            \n            img {\n                filter: grayscale(0%);\n            }\n        }\n    }\n    \n    &>ul>li img {\n        position: absolute;\n        \n        width: 150px;\n        height: 150px;\n        \n        transition: all .5s ease-in-out;\n        filter: grayscale(100%) brightness(0.5);\n    }\n\n    &>ul>li .content {\n        width: 100%;\n        height: 100%;\n\n        display: flex;\n        flex-direction: column;\n\n        justify-content: space-between;\n    }\n\n    &>ul>li .content>h3 {\n        font-weight: 300;\n        font-size: 1.5rem;\n        font-family: 'Lato', sans-serif;\n        max-width: 50%;\n        padding: 10px;\n        z-index: 1;\n        transition: all .5s ease-in-out;\n    }\n\n"]);return j=function(){return n},n}var k=m.a.div(j());function N(){return l.a.createElement(k,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/bruno.jpg",alt:"Bruno"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project")))),l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/samuel.jpg",alt:"Samuel"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project")))),l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/caio.jpg",alt:"Caio"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project")))),l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/samuel.jpg",alt:"Samuel"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project")))),l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/caio.jpg",alt:"Caio"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project")))),l.a.createElement("li",null,l.a.createElement(E.a,null,l.a.createElement("img",{src:"/bruno.jpg",alt:"Bruno"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Some Random Project"))))))}function S(){var n=Object(s.a)(["\n\n    margin: 64px 0;\n\n    &>ul {\n        display: flex;\n        flex-direction: row;\n\n        align-items: center;\n        justify-content: space-evenly;\n\n        list-style: none;\n\n        &>li {\n            padding: 15px;\n            text-align: center;\n        }\n    }\n    \n    &>ul>li>.content {\n        cursor: pointer;\n        text-decoration: none;\n\n        display: flex;\n        flex-direction: column;\n        \n        align-items: center;\n        justify-content: center;\n\n        &:hover {\n            img {\n                filter: grayscale(0%);\n            }\n        }\n    }\n    \n    /* alinhamento para o FadeIn component */\n    &>ul>li>.content div {\n        display: flex;\n        flex-direction: column;\n        \n        align-items: center;\n        justify-content: center;\n    }\n\n    &>ul>li>.content img {\n      \n        width: 150px;    \n        height: 150px;\n\n        transition: all .5s ease-in-out;\n        filter: grayscale(100%) brightness(0.5);\n    }\n\n     &>ul>li>.content h3 {\n        margin-top: 10px;\n        max-width: 50%;\n        font-weight: 100;\n        font-family: 'Fira Code', monospace;\n        opacity: 80%;\n    }\n\n"]);return S=function(){return n},n}var C=m.a.div(S());function O(){return l.a.createElement(C,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{className:"content",to:"/about/bruno"},l.a.createElement(E.a,null,l.a.createElement("img",{src:"/bruno.jpg",alt:"Bruno"}),l.a.createElement("h3",null,"Bruno Silva")))),l.a.createElement("li",null,l.a.createElement(r.b,{className:"content",to:"/about/caio"},l.a.createElement(E.a,{className:"tst"},l.a.createElement("img",{src:"/caio.jpg",alt:"Caio"}),l.a.createElement("h3",null,"Caio Domingues")))),l.a.createElement("li",null,l.a.createElement(r.b,{className:"content",to:"/about/samuel"},l.a.createElement(E.a,null,l.a.createElement("img",{src:"/samuel.jpg",alt:"Samuel"}),l.a.createElement("h3",null,"Samuel Schultze"))))))}function z(n){var e=n.location,t=Object(a.useState)(250),i=Object(d.a)(t,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){if(e){var n=e.pathname.toLowerCase();n.includes("about")?s(64):n.includes("portfolio")||n.includes("team")?s(75):s(250)}}),[e]),l.a.createElement(f,{headerMarginTop:o},l.a.createElement("div",{className:"logo-mask"},l.a.createElement("img",{className:"mib-logo",src:v.a,alt:"mib logo"})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Welcome to"),l.a.createElement("h1",null,"MiB Development Group")),l.a.createElement("hr",{className:"separator"}),l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/home/about-us"},"Who we are")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/home/portfolio"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/home/team"},"Team")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/home"},"Contact")))),l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/home/about-us",component:y}),l.a.createElement(c.a,{path:"/home/portfolio",component:N}),l.a.createElement(c.a,{path:"/home/team",component:O}))))}function P(){var n=Object(s.a)(["\n\n    position: relative;\n\n    width: 100%;\n    min-height: 100vh;\n\n    z-index: 0;\n\n    &>.content {\n        width: 90%;\n        margin: 0 auto;\n\n        display: flex;\n        flex-direction: row;\n\n        justify-content: space-between;\n    }\n\n    &>.header {\n        width: 90%;\n        margin: 0 auto;\n        padding: 25px 0;\n    }\n\n    &>.content>.left-content {\n        width: 40%;\n        margin-top: 25px;\n    }\n\n    &>.content>.right-content {\n        width: 40%;\n\n        display: flex;\n        flex-direction: column;\n\n        align-items: center;\n        justify-content: space-evenly;\n    }\n    \n    &>.content>.left-content>h2 {\n        font-weight: 200;\n        font-family: 'Oswald', sans-serif;\n\n        opacity: 80%;        \n        letter-spacing: 0px;\n        font-size: 2vw;\n        text-transform: uppercase;\n    }\n\n    &>.content>.left-content>h1 {\n        font-weight: 900;\n        font-family: 'Fira Code', monospace;\n\n        opacity: 80%;\n        letter-spacing: 1px;\n        font-size: 2.25vw;\n        white-space: nowrap;\n        word-wrap: none;\n    }\n\n    &>.content>.left-content>hr {\n        margin: 16px 0;\n        border-color: #555;\n    }\n\n    &>.content>.left-content>.skills-list {\n        width: 100%;\n        \n        display: flex;\n        flex-direction: row;\n\n        align-items: center;\n        justify-content: space-evenly;\n    }\n\n    &>.content>.left-content>.skills-list>span {\n        font-weight: 200;\n        font-family: 'Oswald', sans-serif;\n        \n        opacity: 80%;\n        text-transform: uppercase;\n    }\n\n    &>.content>.left-content>h5 {\n        margin-top: 100px;\n        \n        font-weight: 100;\n        font-family: 'Muli', sans-serif;\n\n        font-style: italic;\n        \n        font-size: 1.5vw;\n        letter-spacing: 1px;\n        opacity: 80%;\n        \n        padding: 50px;\n    }\n\n    &>.content>.right-content>.mirrored-img {\n        width: 23vw;\n        height: 23vw;\n        \n        border: 1px solid #fff;\n        transform: translate(25px, 25px);\n        \n        transition: all 0.2s ease-in-out;\n    }\n\n    &>.content>.right-content>.mirrored-img:hover {\n        transform: translate(0, 0);\n    }\n\n    &>.content>.right-content>.mirrored-img .avatar {\n        width: 23vw;\n        height: auto;\n        \n        filter: grayscale(100%);\n        transform: translate(25px, -25px);\n\n        transition: all 0.2s ease-in-out;\n    }\n\n    &>.content>.right-content>.mirrored-img .avatar:hover {\n        filter: grayscale(0%);\n        transform: translate(0, 0);\n    }\n\n    &>.content>.right-content>h3 {\n        margin-top: 3vw;\n        font-size: 1.25vw;\n        font-weight: 100;\n        font-family: 'PT Sans', sans-serif;\n    }\n    \n    &>.content>.right-content>.citation-content {\n        margin-top: 2vw;\n\n        display: flex;\n        flex-direction: row;\n        \n        align-items: center;\n        justify-content: center;\n    }\n\n    &>.content>.right-content>.citation-content>hr {\n        width: 4vw;\n    }\n    \n    &>.content>.right-content>.citation-content>h4 {\n        margin-left: 2vw;\n        width: 50%;\n        font-weight: 100;\n        font-size: 1.75vw;\n        font-family: 'PT Sans', sans-serif;\n    }\n\n    &>.content>.right-content .shadow-box {\n        box-shadow: -0.9vw 0.9vw 1px rgba(255, 255, 255, 0.05);\n    }\n    \n    &>.content>.right-content .shadow-text {\n        text-shadow: -0.9vw 0.9vw 1px rgba(255, 255, 255, 0.05);\n    }\n\n"]);return P=function(){return n},n}var B=m.a.div(P()),D=t(26),F=t.n(D),M={url:"https://github.com/caiodomingues",avatar:"/caio.jpg",name:"Caio Domingues",role:"Hackatomic CEO",description:"Caio is passionate about Open Source world, feels like in a mission to help the world runs better.",citation:"Creating is a passion, and it is even greater if the goal is to help someone else.",skills:["Fullstack","Laravel","Web Design"]},I={url:"https://github.com/mukaschultze",avatar:"/samuel.jpg",name:"Samuel Schultze",role:"He created a lot of things",description:"I don't know what to type about Samuel because he looks like a bad boy, so, if I type something cute, probably will not be like him.",citation:"He creates because he wants money, but I think he likes it.",skills:["Fullstack","Angular",".NET Senior"]},T={url:"https://github.com/BrunoS3D",avatar:"/bruno.jpg",name:"Bruno Silva",role:"FastPlay Creator",description:"Bruno runs against his own curiosity about the world and technology, now, Bruno create he's own tech's.",citation:"Bruno I need some good phrase here, thank you.",skills:["Fullstack","NodeJs","Game Developer"]};function H(n){var e=n.location,t=Object(a.useState)(M),i=Object(d.a)(t,2),o=i[0],c=i[1];return Object(a.useEffect)((function(){if(e){var n=e.pathname.toLowerCase();n.includes("samuel")?c(I):n.includes("bruno")?c(T):(n.includes("caio"),c(M))}}),[e]),l.a.createElement(B,null,l.a.createElement("div",{className:"header"},l.a.createElement(r.b,{className:"return-button",to:"/home"},l.a.createElement("img",{src:F.a,alt:"poly"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"left-content"},l.a.createElement("h2",null,"Meet"),l.a.createElement("h1",null,o.name),l.a.createElement("hr",null),l.a.createElement("div",{className:"skills-list"},o.skills.map((function(n,e){return l.a.createElement("span",{key:e},n)}))),l.a.createElement("h5",null,o.description)),l.a.createElement("div",{className:"right-content"},l.a.createElement("div",{className:"mirrored-img"},l.a.createElement("a",{href:o.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"avatar",src:o.avatar,alt:o.name}))),l.a.createElement("h3",{className:"shadow-text"},o.role),l.a.createElement("div",{className:"citation-content"},l.a.createElement("hr",{className:"shadow-box"}),l.a.createElement("h4",{className:"shadow-text"},"\u201c",o.citation,"\u201d")))))}o.a.render(l.a.createElement((function(){return l.a.createElement(p,null,l.a.createElement(r.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",exact:!0,component:z}),l.a.createElement(c.a,{path:"/home",component:z}),l.a.createElement(c.a,{path:"/about",component:H}))))}),null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e67e12e6.chunk.js.map