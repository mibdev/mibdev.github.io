(this["webpackJsonpmib-dev"]=this["webpackJsonpmib-dev"]||[]).push([[0],{115:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(20),l=t.n(c),i=t(9),o=t(8),m=t(2),u=t(3);function s(){var n=Object(m.a)(["\n\n    & {\n        min-height: 100vh;\n        background: #0C0C0C;\n    }\n\n    &>.wrapper {\n        max-width: 90vw;\n        max-width: 1200px;\n        min-height: calc(100vh - 75px * 2 - 10px  * 2);\n        \n        padding: 5vw;\n        margin: 0 auto;\n    }\n    \n"]);return s=function(){return n},n}var d=u.a.div(s());function f(){var n=Object(m.a)(["\n\n    & {\n        margin-bottom: 60px; \n\n        display: flex;\n        flex-direction: row;\n\n        align-content: center;\n        justify-content: center;\n    }\n\n    &>h1 {\n        flex: 1;\n        font-size: 1.5rem;\n    }\n\n    &>h1>a {\n        color: rgba(255, 255, 255, 0.75);\n        \n        font-size: 2.5rem;\n        letter-spacing: 4px;\n\n        text-decoration: none;\n        text-transform: uppercase;\n        \n        transition: color 0.25s;\n\n        &:hover {\n            color: rgba(255, 255, 255, 0.6);\n        }\n    }\n\n    &>.nav-items {\n        display: flex;\n        flex-direction: row;\n\n        align-items: center;\n        align-content: center;\n        justify-content: center;\n    }\n\n    &>.nav-items>.nav-link {\n        color: rgba(255, 255, 255, 0.25);\n\n        margin-left: 20px;\n        font-size: 0.9rem;\n        \n        cursor: pointer;\n        white-space: nowrap;\n\n        line-height: 2.5;\n        text-decoration: none;\n        text-transform: uppercase;\n\n        transition: color 0.25s;\n        \n        &:hover {\n            color: rgba(255, 255, 255, 0.75);\n        }\n    }\n    \n    &>.nav-items>.active-nav-link {\n        color: rgba(255, 255, 255, 0.75);\n    }\n\n\n"]);return f=function(){return n},n}var v=u.a.header(f());function p(n){var e=n.location;return console.log(e),r.a.createElement(v,null,r.a.createElement("h1",null,r.a.createElement("a",{className:"logo",href:"/"},"Mib")),r.a.createElement("div",{className:"nav-items"},r.a.createElement(i.b,{className:"nav-link",activeClassName:"active-nav-link",to:"/home"},"Home"),r.a.createElement(i.b,{className:"nav-link",activeClassName:"active-nav-link",to:"/about"},"About"),r.a.createElement(i.b,{className:"nav-link",activeClassName:"active-nav-link",to:"/projects"},"Projects"),r.a.createElement(i.b,{className:"nav-link",activeClassName:"active-nav-link",to:"/team"},"Team"),r.a.createElement(i.b,{className:"nav-link",activeClassName:"active-nav-link",to:"/contact"},"Contact")))}function E(){var n=Object(m.a)(["\n\n    & {\n        display: flex;\n        flex-direction: column;\n\n        align-items: center;\n        justify-content: center;\n    }\n\n"]);return E=function(){return n},n}var h=u.a.div(E()),b=t(13);function g(){var n=Object(m.a)(["",""]);return g=function(){return n},n}function x(){var n=Object(m.a)(["\n    & {\n        animation: ","s ",";\n    }\n"]);return x=function(){return n},n}var j=u.a.div(x(),(function(n){return n.duration||.75}),(function(n){return Object(u.b)(g(),n.animation||b.fadeInUp)}));function N(n){var e=n.children,t=n.animation,a=n.duration;return r.a.createElement(j,{animation:t||null,duration:a||null},e)}function w(){return r.a.createElement(h,null,r.a.createElement(N,null,r.a.createElement("h1",null,"Home")))}function y(){var n=Object(m.a)(["\n\n    & {\n        display: flex;\n        flex-direction: column;\n\n        align-items: center;\n        justify-content: center;\n    }\n\n"]);return y=function(){return n},n}var k=u.a.div(y());function O(){return r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement("h1",null,"About")))}function C(){var n=Object(m.a)(["\n  \n"]);return C=function(){return n},n}var T=u.a.div(C());function z(){var n=Object(m.a)(["\n\n    & {\n        display: flex;\n        flex-direction: row;\n\n        flex-wrap: wrap;\n        justify-content: center;\n        z-index: 0;\n    }\n\n    &>.card {\n        position: relative;\n        overflow: hidden;\n\n        height: 250px;\n        max-width: 300px;\n        flex: 1;\n        flex-shrink: 1;\n        flex-basis: 300px;\n\n        margin: 16px;\n        \n        background: #eee;\n\n        z-index: 1;\n\n        &:hover {\n            &>img {\n                transform: scale(1.1);\n                filter: grayscale(0%) brightness(0.3) blur(5px);\n            }\n        }\n    }\n\n    &>.card>img {\n        position: absolute;\n\n        width: 100%;\n        \n        filter: grayscale(100%) brightness(0.5);\n        transition: all 0.3s ease-in-out;\n\n        z-index: -1;\n    }\n\n    &>.card>.content {\n        width: calc(100% - 32px);\n        height: calc(100% - 32px);\n\n        padding: 16px;\n\n        display: flex;\n        flex-direction: column;\n\n        justify-content: space-between;\n    }\n\n    &>.card>.content>h1 {\n        color: #fff;\n\n        font-weight: 100;\n    }\n    \n    &>.card>.content>p {\n        color: #fff;\n    }\n\n"]);return z=function(){return n},n}var S=u.a.div(z());function I(){return r.a.createElement(S,null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/bruno.jpg",alt:"bruno"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/samuel.jpg",alt:"samuel"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/caio.jpg",alt:"caio"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/samuel.jpg",alt:"samuel"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/caio.jpg",alt:"caio"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/bruno.jpg",alt:"bruno"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Some description..."))))}function A(){return r.a.createElement(T,null,r.a.createElement(N,{animation:b.fadeIn},r.a.createElement(I,null)))}function H(){var n=Object(m.a)(["\n\n    & {\n        display: flex;\n        flex-direction: row;\n\n        align-items: center;\n        justify-content: center;\n    }\n\n"]);return H=function(){return n},n}var J=u.a.div(H());function B(){return r.a.createElement(J,null,r.a.createElement(N,null,r.a.createElement("h1",null,"Team")))}function M(){var n=Object(m.a)(["\n\n    & {\n        display: flex;\n        flex-direction: column;\n\n        align-items: center;\n        justify-content: center;\n    }\n\n"]);return M=function(){return n},n}var P=u.a.div(M());function U(){return r.a.createElement(P,null,r.a.createElement(N,null,r.a.createElement("h1",null,"Contact")))}l.a.render(r.a.createElement((function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/home",exact:!0,component:w}),r.a.createElement(o.b,{path:"/about",component:O}),r.a.createElement(o.b,{path:"/projects",component:A}),r.a.createElement(o.b,{path:"/team",component:B}),r.a.createElement(o.b,{path:"/contact",component:U}),r.a.createElement(o.a,{from:"*",to:"/home"})))))}),null),document.getElementById("root"))},27:function(n,e,t){n.exports=t(115)}},[[27,1,2]]]);
//# sourceMappingURL=main.b073e627.chunk.js.map