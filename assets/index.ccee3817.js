var bt=Object.defineProperty,At=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var xe=(t,o,i)=>o in t?bt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,x=(t,o)=>{for(var i in o||(o={}))ye.call(o,i)&&xe(t,i,o[i]);if(F)for(var i of F(o))we.call(o,i)&&xe(t,i,o[i]);return t},L=(t,o)=>At(t,vt(o));var ke=(t,o)=>{var i={};for(var n in t)ye.call(t,n)&&o.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&F)for(var n of F(t))o.indexOf(n)<0&&we.call(t,n)&&(i[n]=t[n]);return i};import{c as R,t as h,u as b,a as v,j as e,b as a,m as f,d as Le,r as T,N as se,s as r,e as xt,F as Ue,L as yt,A as wt,I as Ye,B as Be,f as B,O as ze,g as ce,h as w,P as kt,i as Re,C as Ct,E as St,k as Et,l as Ce,n as z,o as je,p as Y,q as Oe,v as It,S as Mt,w as Pt,x as Tt,y as Ve,z as Dt,D as Lt,G as Ut,H as qe,M as Yt,J as Bt,K as Fe,Q as zt,R as $,T as I,U as le,V as J,W as Qe,X as Ne,Y as de,Z as ue,_ as Rt,$ as jt,a0 as Ot,a1 as Vt,a2 as qt,a3 as Ft,a4 as Ge,a5 as A,a6 as Qt,a7 as Nt,a8 as Gt,a9 as Zt,aa as Kt,ab as $t,ac as Jt,ad as Xt}from"./vendor.e0925a95.js";const _t=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}};_t();const Ze=R({name:"auth",initialState:{user:null},reducers:{login:(t,o)=>{t.user=o.payload},logout:t=>{t.user=null}}}),{login:Ke,logout:Wt}=Ze.actions;var Ht=Ze.reducer;const G="https://street-carlitos.herokuapp.com/api",X=async(t,o,i)=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},s=o==="POST"?await fetch(G+t,n):await fetch(G+t),c=await s.json();if(!s.ok)throw c.map(l=>h.error(l)),new Error;return c},k=async(t,o,i)=>{var u;const n=(u=localStorage.getItem("token"))!=null?u:"";let s=o==="GET"||o==="DELETE"?{method:o,headers:{"access-token":n}}:{method:o,headers:{"access-token":n,"Content-Type":"application/json"},body:JSON.stringify(i)};const c=await fetch(G+t,s),l=await c.json();if(!c.ok)throw l.map(m=>h.error(m)),new Error;return l},$e=async(t,o,{file:i})=>{var u;const n=(u=localStorage.getItem("token"))!=null?u:"",s={method:o,headers:{"access-token":n},body:i},c=await fetch(G+t,s),l=await c.json();if(!c.ok)throw l.map(m=>h.error(m)),new Error;return l},eo=t=>X("/auth/login","POST",t),to=()=>{const t=v();return b(eo,{onSuccess:({id:o,name:i,email:n,token:s})=>{h.success(`Bienvenido ${i}`),localStorage.setItem("token",s),t(Ke({id:o,name:i,email:n}))}})},oo=()=>{const t=v();return b(()=>k("/auth/renew","GET"),{onSuccess:({id:o,name:i,email:n,token:s})=>{localStorage.setItem("token",s),t(Ke({id:o,name:i,email:n}))}})},no={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},io={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},te={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},ao={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},oe={hidden:{y:"0%"},visible:{y:"100%"}},ne={duration:.8,repeat:"Infinity",ease:"circInOut"},ro=()=>e("div",{style:no,children:a(f.div,{style:io,variants:ao,initial:"hidden",animate:"visible",children:[e(f.span,{style:te,variants:oe,transition:ne}),e(f.span,{style:te,variants:oe,transition:ne}),e(f.span,{style:te,variants:oe,transition:ne})]})}),so=({children:t,isLogged:o})=>{const i=localStorage.getItem("token"),n=Le(),{mutate:s,isLoading:c}=oo();return T.exports.useEffect(()=>{i&&(s(),n("/dashboard"))},[]),c?e(ro,{}):o?t:e(se,{to:"/auth"})};var me="/assets/fondo.02bdd8a8.jpg";const co=r.div`
  background-image: url(${me}) ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`,lo=r.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,Se=r.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,Je=({children:t,noPadding:o})=>a(co,{children:[e("div",{}),e(Se,{}),e("div",{}),e(Se,{}),e(lo,{noPadding:o,children:t})]}),uo=r.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,mo=r.div`
  display: flex;
  align-items: center;
`,Xe=r.img`
  width: 3em;
  height: 3em;
`,go=r.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,po=r.p`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,Z=r.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`,_e=r.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,Q=r(xt)`
  background: none;
  color: #fff;
  padding: .3em 1em;
  font-size: .9em;
  border: none;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: .3em;
  align-items: center;

  @media (max-width: 400px) {
    span {
      display: none;
    }
  }

  &.active {
    background-color: blue;
    box-shadow: 0 0 5px blue, 0 0 20px blue, 0 0 40px blue;
  }
`,ge=r(Ue)`
   text-align: center;
   max-width: 600px;
   width: 90%;
   padding-top: 2em;
   margin: auto;
   height: 50vh;
   flex: 1 1 auto;
   overflow-y: scroll;
   display: flex;
   flex-direction: column;
   gap: 2em;
`,ho=r.div`
  display: flex;
  margin-top: 2em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`,pe=r.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 90%;
  margin: auto;
  margin-bottom: 1em;
`,fo=r(Ue)`
   width: 90%;
   max-width: 400px;
   margin: 6em auto;
   background: linear-gradient(to top, rgba(0,0,0,.39), rgba(255,255,255,.09), rgba(255,255,255,.09) );
   backdrop-filter: blur(5px);
   padding: 5em 2em;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   gap: 2em;

   @media (max-width: 500px) {
      padding: 5em 1em;
   }
`,bo=r.div`
   position: relative;
`;var We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABIFBMVEVHcEwADZEAiekADJEAF5cAK6cAke8Ac9gAD5MAlvIADZIAqP8AC5AAovsAD5MAHJsAFpcAC5AAo/wApP0ADJEAovsAn/kAQrcApf0Ap/4Apf4ACpAADpIAnvkActkAo/wApf4ACpAAnPcADZEAFJYAofoApf0AqP8ApPwAI6AAp/4Ap/8Ap/4AE5UAZM8AS70AqP8Ab9cApf4Af+IAJKIAW8gAYc0AfeEASLsAlvIALKcALKcAO7IActkARboAJaIAh+gAR7oAPLMAjewAbNUAHp0Aj+4AguUAkO4Af+MAW8kAVcUAmfUACo8AqP8AC5AAD5MAFJYAI6EAG5sAofoAVcUAM6wAkO8AO7IAmfUAS74AadMAYMwAeN0Ah+gAgOPu0ZbNAAAATXRSTlMAQQh6Df4PBCQf8PKoKFgxF81xhZs+NP5T4s/2jRb+k7reX7voSNiexUxmeqtqPlz72+tqgKJ+vyXjn+dwVOXI8baSrLOuzIv07NPy+Y/m1UQAAAa5SURBVGje7ZlnU+JcFIBDJyG0UKSDNGmKIGDBgmXVdTchQKSowP//F++5uQmh7ZIg++Gd4Ywz4hDvw+nnXAhiL3vZy1728v8RM2m328mo/l+dbw94SqGg7ZTjTm3B3BGTie4YYPF5QoLAcQhQrdo4UWwJxr47BMmERoJgS8QLPjAViN2fYY5CCJQI7MZy5MvrYHQZX7WOvVAC22UL38eYX1qTwWPA/Ccds4BJfpNxUxlPH/1/eUCfBLOVvuMbff0zdn6y6SHGxtkKWzMu3r4+G5a548gMU/QgKTIZUnmDLHFc3LIdQ/fr/W2mhiXjyVUFAccxjuVE0Se/WzjlEuZtGOWDj7pReu1/fB2BCNUgkuqpTAoWpZjzB7ksuQVjePAgvTx5ngwGg0sP47NYLHr4iWaYUlXixHEEkyEuqJmi6/clhvlpOp08MysnZI6wQrYMfizEZTVazNk0SYyb2Hh8roSofs7B5mJQxHjwX1kuoYlhbHav8KvG52dsMYjJpKdU8vgwjBHr2BF+o8rFtUB+dO/wIfWvr8qSofSkn8kJqGyJf5VEx2Dvc1xAPcPR61qxHu/vb1L8LOaBpQCWCoopmEHKMFgvzqa6/ruo3jGOsI+PX865huW7SSYDfumcAByeRZlizgEFl54EV1IL8XZSOOMPDj7K+PybxlPl53QygVge/c7GfTNLiU4/4rgcLsynnE8dw9rp4I9/j1PlpPH29QX+H48lCmRlVjR+ESg5pFhcDjEPF1IHoXmv+Dvf7w/zlofbj4/3d5kynbSeHxOXv0dCDsVDAeWJX7QTIzpNX1XneyvPY6/fmfrN5nAINpMpsfGLXTwrylwKAkrCJIotONYutwNGnSqRNo0V6ZpMzT5oMwQKxjyZlSCLC0JS0oWb61pmmxqvGKm2U8qVLmBMIgUrU194MCkIAeyO3HxX80ip+fccabtxHHd73TkMUOpLTxYFAZWbo8Xua+dsm0sY3TaI2ebogWAMptyu/G9OyK4ZIkKbXT+zVqTTkzAS5Xrl2SRWZVnBzfbSsYf4xWEHRMEMb40rz0aZdYbxccFNrdjA4iRxhTsdCYMpV6qHKBu3aXihWVy2dDzPdxRlTKZr1eU1t9EpblYn/j7meQWDdHGqhsS54ga/h1mc7oZ2uy1zRFWMqiGFTZ63spRRyvs5isPQa6qfqwKb2rCTPcSnedtYEIUiar20+rHat6l86Vi3nJMKhSa8vTv1fdXPZS3qICmWnVEc0MZ+aIEE9aohMgW8FPk3EJplZUwK1ZhdmktxPDujQME08Lt0vBLC7IySR6mZ3mEIK8nIypSwC5oMT+0wGWdlZQYR7eeU+/5OyopSIBWI2GUgjlfl7GzdEYmNBVIp9TJEDDc3b1jz8Pn0ZatSrzStBYiBT61ZsGPTlnmbpmWkWOd8DGOfELr2Gqc0YuNzaMIZze0XnIIN45AhYesf7GWuxMbglPOBT+sgAYe7ZZUkcYjDS5tyLT1Z//wERaKtwcCvdSSa2YuWITgS3MteKcNICTvY2WTwTGgd7iDX6cUgxipYKT41n5BlGClhryB/TloweicLmsZUqCxS0qdkCvaGNc1TBhnjvD/4eC+LUTwBx+svhbhdy8ANdvKuU4Uw0tAl3ZFarXbV7A8P7i/AVU9j5HvCAyuLR8vqgFRZ8gotf35aGsRMzQf0yEnlM4YYGViMxH1F/RIEKYJ97DqcDzC8kOqOa7Vjh2jPk3vseoK8BIhPWucyqhdTqYDlZ7myMHWh7LyooQ2sjqI1+gwrXlzrYgq5El4q+Gkl3/XWPHbKbeNCLC4/YY981rxiI2+4LYvFJayb6ak7jlw91PJSbt7Aujp4FUPLL2i5LCCMh7KzZxTWsPYS8ikGkFc/vvYQNF17EE6KjRALfRgqpWF5Hj6pf8FOPG358TWRoO0CR0wSiZIPK+0+nTIcO3ROkHz5+v4Wkh4g52KtiuaEkObLO8eMYqSVyaWNZmMxU/riHvmFEwVdqgnbXN0BhZaqiNVLSRR+DjIEyK8G/vT+y9E2DLAYxbplLxgd3sPwoib9g9v7sjSNnQ1G2110ggJuiCmllbochog3lUqD3P24ql3PwoB8HAy2vbKFzw8B7NZt+kbirDV5/dZNugPKF/03jP6mMp08ksS3xBiBCE45/jA/XjSgz1eShIX4plgR5tCbd60QynUI4crZtwkYY3Cj1pWKHOucVheI1Zm/vrpDefJ0s7uvtyy6iBvnSZhKpykpGe+vL4gdi9VhoN1pCuVJunl3db1qv12J0WUFcRmJvexlL3vZy/9F/gOFr5hauXtehAAAAABJRU5ErkJggg==";const Ao=()=>a(uo,{children:[e(yt,{to:"/auth",children:e(Xe,{src:We,alt:"logo carlitos"})}),a(mo,{children:[a(Q,{to:"/",children:[e(wt,{}),e("span",{children:"Inicio"})]}),a(Q,{to:"/education",children:[e(Ye,{}),e("span",{children:"Educacion"})]}),a(Q,{to:"/portfolio",children:[e(Be,{}),e("span",{children:"Portafolio"})]})]})]}),vo=()=>e(B,{children:a(Je,{children:[e(Ao,{}),e(ze,{})]})}),_=r.h3`
  color: ${({black:t})=>t?"#000":"#fff"};
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: 1.2em;
  margin: 0;
  margin-bottom: ${({margin:t})=>t?"1em":"0"};
`,D=r(_)`
  font-size: 2em;
  margin: 0;
  background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: ${({nomargin:t})=>t?"0":"1em"};
  margin-top: ${({margin:t})=>t?"1em":"0"};
`,j=r(D)`
  background: linear-gradient(to right, blue, white, black);
  text-shadow: 0 0 10px rgba(255,255,255,.3);
  margin-top: 3em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`,W=r.h3`
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: .8em;
  font-weight: bold;
  margin: 0;
  margin-bottom: .5em;
`,E=r.p`
  text-align: ${({initial:t})=>t?"initial":"center"};
  font-size: ${({small:t})=>t?".8em":".9em"};
  color: gray;
  margin: 0;
`,p=t=>e(He,L(x({},t),{color:t.color,children:e("div",{children:t.children})})),He=r.button`
   background: rgba(255,255,255,.05);
   color: #fff;
   border: none;
   border-top: 1px solid rgba(255,255,255,.1);
   border-bottom: 1px solid rgba(255,255,255,.1);
   border-radius: 15px;
   font-weight: bold;
   padding: .5em 1em;
   cursor: pointer;
   transition: .5s;
   backdrop-filter: blur(15px);
   text-decoration: none;
   overflow: hidden;
   z-index: 10;
   position: relative;
   div {
      font-size: .9em;
      display: flex;
      gap: .3em;
      justify-content: center;
      align-items: center;
   }
   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255,255,255,.15), transparent);
      transform: skew(45deg) translateX(0);
      transition: .5s;
   }
   &:hover::before {
      transform: skew(45deg) translateX(150%);
   }
   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0px;
      height: 100%;
      z-index: -1;
      background: ${({color:t})=>t||"blue"};
      border-radius: 15px;
      transform: translateX(-50%);
      transition: .3s;
   }
   &:hover::after {
      width: 100%;
      transition-delay: .5s;
   }
`,et=r.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,xo=r.div`
   display: flex;
   gap: 1em;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

   @media (max-width: 700px) {
      flex-direction: row;
   }
`,yo=r.div`
   display: flex;
   gap: 1em;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media (max-width: 350px) {
      p {
         display: none;
      }
   }
`,wo=r.div`
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
   box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,ko=r.div`
   display: flex;
   gap: 1em;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 0 1em;
   position: relative;
   z-index: 100;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none; 
   
   h6 {
      margin: 0;
      font-size: 1.1em;
      background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      cursor: pointer;
   }

   @media (max-width: 700px) {
      padding-top: 3.5rem;
      grid-row: 1;
      flex-direction: row;
   }

   @media (max-width: 500px) {
      flex-direction: column;
      gap: .5em;
   }
`,Co=r.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,So=r.div`
   background-image: url(${me}) ;
   background-blend-mode: soft-light;
   background-color: rgba(0,0,0,.7);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   height: 100vh;
   width: 100%;
   display: grid;
   align-items: center;
   grid-template-columns: 2fr 1fr 1fr 1fr;
   position: absolute;
   top: 0;
   left: 0;
   @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      ${et}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`,tt=R({name:"about",initialState:{active:null},reducers:{aboutActive:(t,o)=>{t.active=o.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:he,clearAboutActive:ot}=tt.actions;var Eo=tt.reducer;const O="about",Io=()=>X("/about"),nt=()=>{const t=v();return ce([O],Io,{onSuccess:o=>t(he(o[0]))})},Mo=t=>k("/about","POST",t),Po=()=>{const t=v(),o=w();return b(Mo,{onSuccess:i=>{h.success("Informacion agregada"),o.setQueryData([O],()=>[i]),t(he(i))}})},To=t=>$e(`/uploads/about/${t.id}`,"POST",t),Do=()=>{const t=v(),o=w();return b(To,{onSuccess:i=>{h.success("Imagen agregada"),o.setQueryData([O],()=>[i]),t(he(i))}})},Lo=t=>k(`/about/${t.id}`,"PUT",t),Uo=()=>{const t=w();return b(Lo,{onSuccess:o=>{h.success("Informacion actualizada"),t.setQueryData([O],i=>i.map(n=>n.id===o.id?o:n))}})},Yo=t=>k(`/about/${t}`,"DELETE"),Bo=()=>{const t=v(),o=w();return b(Yo,{onSuccess:i=>{h.success("Informacion eliminada"),o.setQueryData([O],n=>n.filter(s=>s.id!==i.id)),t(ot())}})},zo={position:"relative",width:"1em",height:"1em"},Ro={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},jo={rotate:360},Oo={duration:1,loop:"Infinity"},y=()=>e("div",{style:zo,children:e(f.span,{style:Ro,animate:jo,transition:Oo})});var Vo="/assets/cv_carlos.6cd29141.pdf";const qo=()=>e(kt,{makeDefault:!0,fov:12,position:[-10,5,-5]});function Fo(o){var t=ke(o,[]);const i=T.exports.useRef(),{nodes:n,materials:s}=Re("/micro/scene.gltf");return e("group",L(x({ref:i},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:a("group",{rotation:[Math.PI/2,0,0],children:[e("mesh",{geometry:n.defaultMaterial.geometry,material:n.defaultMaterial.material}),e("mesh",{geometry:n.defaultMaterial_1.geometry,material:n.defaultMaterial_1.material}),e("mesh",{geometry:n.defaultMaterial_2.geometry,material:n.defaultMaterial_2.material}),e("mesh",{geometry:n.defaultMaterial_3.geometry,material:n.defaultMaterial_3.material}),e("mesh",{geometry:n.defaultMaterial_4.geometry,material:n.defaultMaterial_4.material}),e("mesh",{geometry:n.defaultMaterial_5.geometry,material:n.defaultMaterial_5.material}),e("mesh",{geometry:n.defaultMaterial_6.geometry,material:n.defaultMaterial_6.material}),e("mesh",{geometry:n.defaultMaterial_7.geometry,material:n.defaultMaterial_7.material}),e("mesh",{geometry:n.defaultMaterial_8.geometry,material:n.defaultMaterial_8.material}),e("mesh",{geometry:n.defaultMaterial_9.geometry,material:n.defaultMaterial_9.material}),e("mesh",{geometry:n.defaultMaterial_10.geometry,material:n.defaultMaterial_10.material}),e("mesh",{geometry:n.defaultMaterial_11.geometry,material:n.defaultMaterial_11.material}),e("mesh",{geometry:n.defaultMaterial_12.geometry,material:n.defaultMaterial_12.material}),e("mesh",{geometry:n.defaultMaterial_13.geometry,material:n.defaultMaterial_13.material}),e("mesh",{geometry:n.defaultMaterial_14.geometry,material:n.defaultMaterial_14.material}),e("mesh",{geometry:n.defaultMaterial_15.geometry,material:n.defaultMaterial_15.material}),e("mesh",{geometry:n.defaultMaterial_16.geometry,material:n.defaultMaterial_16.material})]})})}))}Re.preload("/micro/scene.gltf");const Qo=()=>a(Ct,{children:[e(qo,{}),e("pointLight",{color:"#0000ff",position:[10,-5,5]}),e("pointLight",{color:"#0000ff",position:[50,10,-10]}),e("pointLight",{color:"#ffffff",position:[0,0,100]}),a(T.exports.Suspense,{fallback:null,children:[e(Fo,{}),e(St,{files:"/hdr/decor_shop_1k.jpg",preset:"night"})]}),e(Et,{enablePan:!1,autoRotate:!0,enableZoom:!1})]});var it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEwACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8P0APOAAAADHRSTlMA8lcmiEGkvdJuEOMxsOlHAAAC5klEQVRYw+1Yv2/TUBB+rdOEpkslOlTFQ1AlVJCHqhJUQh5CVbYMGShFIoOZ6JChKgIklKEg0S4ZgrpBh7QDYmCAAaYuzu+S+6OIU8t+7+78nr2B1G/0+XPu3v36XoS4xv+D4sbd7e2t1XZqwvnL9zDF8puTVIS5PRtiHJXMjKcXoGB8YHCv+AUIlta1jEfAYKDhFCsAGTmfIAFLSfFsQiJ+8Yx50KDMBlLXUUZcOM9Biw5lzIIB1LVTE2WAGTkwYh9RKmbKMPOPAHjZIgnQU3qE2m/91B+ai42/V4XY2NPlBrUVvA7bDXPi6szzDCEeIMNhRKklhnlbtVxGBlt57ldjioVcXueTclM+y2+8Zy7/pauWuGDPrKmrcvV7YzaPnrZXW9OHN7jvxGgo5hXmiEn3uUwC1M/8wJQ8dcJSnSVjm7GrWfHpVGiQ3lxI7gmul7ok+j6luKTM1K7/QylqEkakJg8pJYd7xtLmnsl/CU/JlnGOergjzZRFMWPIJCnbLm4WM6WP+75lpFwKJ2ssAzy/y8ZDHoq6fiNQygg1/uQICQpIoQgAUqgI3wG1h500DyM4BsqYUuoGCtD9DibKvkl0UAqJf4ZQDHuX7mof54UUpoXtY0HEDvJsgQggqhFGbd0RB547euGRZ7RMjQqPtu5HJvXhUkXwUasd++TYlaaZt6mxyzg7OYGwN2cbjHGRqL2jKWcriOdJk9dLaqr8x+GgX34bXi9691+QVMtbenhvMlBsND+Ka7jUpVwOp7riq/zCq+DJMzT5HcQQYjd+4cPVkzW1bc+iOKIZthv65h/QTdaV18c76WoV3JT8489xPTflcrLYQWHt7Dxk91JJ2rhV/f3pVN7YTtJe5SZzT1qfVdO9zpE0zFzCxYGdNOVYv3rm62NDEh81dkiys7kTN2snBSUn6yibUwgUtjR+HSiloVQkUZT3U13Ta7K+SxN9kEBpLdxJRSl0RFYUvMwU6/ofmn8ZfwEqPdZRx3i98QAAAABJRU5ErkJggg==";const No=()=>{const{data:t,isLoading:o}=nt();return a(So,{children:[e(Co,{children:e(Qo,{})}),e(et,{children:o?e(y,{}):t[0]&&a(xo,{children:[t[0].img?e(Z,{src:t[0].img,alt:"imagen de usuario"}):e(Z,{src:it,alt:"Imagen por defecto"}),a(yo,{children:[e(_,{children:t[0].name}),e(E,{children:t[0].description}),e(p,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Vo,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(wo,{}),a(ko,{children:[a("div",{children:[e("h6",{children:"Instagram"}),e(E,{small:!0,children:"danieel.u"})]}),a("div",{children:[e("h6",{children:"Correo"}),e(E,{small:!0,children:"daniusqueda582@gmail.com"})]}),a("div",{children:[e("h6",{children:"Telefono"}),e(E,{small:!0,children:"2945-550890"})]})]})]})},Go={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Zo={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ie={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Ko={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ae={hidden:{y:"0%"},visible:{y:"100%"}},re={duration:.8,repeat:"Infinity",ease:"circInOut"},V=()=>e("div",{style:Go,children:a(f.div,{style:Zo,variants:Ko,initial:"hidden",animate:"visible",children:[e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re})]})}),H="education",$o=()=>X("/education"),at=()=>ce([H],$o),Jo=t=>k("/education","POST",t),Xo=()=>{const t=w();return b(Jo,{onSuccess:o=>{h.success("Estudio agregado"),t.setQueryData([H],i=>[...i,o])}})},_o=t=>k(`/education/${t.id}`,"PUT",t),Wo=()=>{const t=w();return b(_o,{onSuccess:o=>{h.success("Estudio actualizado"),t.setQueryData([H],i=>i.map(n=>n.id===o.id?o:n))}})},Ho=t=>k(`/education/${t}`,"DELETE"),en=()=>{const t=w();return b(Ho,{onSuccess:o=>{h.success("Estudio eliminado"),t.setQueryData([H],i=>i.filter(n=>n.id!==o.id))}})},Ee=r.div`
   display: grid;
   grid-template-columns: 1fr max-content 1fr;
   column-gap: 1.5rem;
   text-align: center;

   @media (max-width: 550px) {
      grid-template-columns: 1fr;
      margin-bottom: 1em;
      span {
         display: none;
      }
   }
`,rt=r.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`,Ie=r.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Me=r.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`,fe=r.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`,tn={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},on={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},st=({children:t})=>e(f.div,{variants:tn,initial:"hidden",animate:"visible",children:t}),nn=({children:t})=>e(f.div,{variants:on,children:t}),ct=({i:t,length:o,component:i})=>{const n=t%2===0,s=o===t+1;return e(nn,{children:n?a(Ee,{children:[i,a("span",{children:[e(Ie,{children:e(Ce,{})}),!s&&e(Me,{})]}),e("span",{})]}):a(Ee,{children:[e("span",{}),a("span",{children:[e(Ie,{children:e(Ce,{})}),!s&&e(Me,{})]}),i]})})},an=({name:t,start:o,end:i})=>{const n=z(o).format("MM/YYYY"),s=z(i).format("MM/YYYY");return a(rt,{children:[e(W,{children:t}),e(E,{small:!0,children:a(po,{children:[e(je,{}),n," - ",s]})})]})},rn=()=>{const{data:t,isLoading:o}=at();return a(_e,{children:[e(D,{margin:!0,children:"Estudios"}),o?e(V,{}):t.length!==0?e(st,{children:t.map((i,n)=>e(ct,{i:n,length:t.length,component:e(an,x({},i))},i.id))}):e(j,{children:"No hay estudios que mostrar"})]})},lt=R({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,o)=>{t.active=o.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:be,clearPortfolioActive:U}=lt.actions;var sn=lt.reducer;const cn=({id:t,img:o,name:i,description:n,link:s})=>{const c=v(),l=Y(g=>g.portfolio.active),u=()=>{c(be({id:t,img:o,name:i,description:n,link:s}))},m=()=>{c(U())};return a(gn,{children:[e(ln,{src:o,alt:i,onClick:u}),l&&l.id===t&&a(un,{children:[e(W,{children:i}),e(E,{smaill:!0,children:n}),s&&e(dn,{href:s,target:"_blank",children:a(p,{children:[e(Oe,{}),"Ver proyecto"]})}),e(mn,{onClick:m,children:e(It,{})})]})]})},ln=r.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,dn=r.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,un=r(fe)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1em;
  align-items: stretch;
  flex-direction: column;
`,mn=r.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000000;
  background: none;
  font-size: 1.5rem;
  padding: 0;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
`,gn=r.div`
    position: relative;
`;const dt=({children:t})=>e(Mt,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Pt,Tt],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),q="portfolio",pn=()=>X("/portfolio"),ut=()=>ce([q],pn),hn=t=>k("/portfolio","POST",t),fn=()=>{const t=w();return b(hn,{onSuccess:o=>{h.success("Proyecto agregado"),t.setQueryData([q],i=>[...i,o])}})},bn=t=>$e(`/uploads/portfolio/${t.id}`,"POST",t),An=()=>{const t=w();return b(bn,{onSuccess:o=>{h.success("Imagen agregada"),t.setQueryData([q],i=>i.map(n=>n.id===o.id?o:n))}})},vn=t=>k(`/portfolio/${t.id}`,"PUT",t),xn=()=>{const t=w();return b(vn,{onSuccess:o=>{h.success("Proyecto actualizado"),t.setQueryData([q],i=>i.map(n=>n.id===o.id?o:n))}})},yn=t=>k(`/portfolio/${t}`,"DELETE"),wn=()=>{const t=w();return b(yn,{onSuccess:o=>{h.success("Proyecto eliminado"),t.setQueryData([q],i=>i.filter(n=>n.id!==o.id))}})},kn={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},mt=({children:t})=>e(f.div,{variants:kn,initial:"hidden",animate:"visible",exit:"exit",children:t}),Cn=()=>{const{data:t,isLoading:o}=ut();return a(_e,{children:[e(D,{margin:!0,children:"Proyectos"}),o?e(V,{}):t.length!==0?e(mt,{children:e(dt,{children:t.map(i=>e(Ve,{className:"portfolio__card",children:e(cn,x({},i))},i.id))})}):e(j,{children:"No hay proyectos que mostrar"})]})},gt=R({name:"education",initialState:{active:null},reducers:{educationActive:(t,o)=>{t.active=o.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:Sn,clearEducationActive:K}=gt.actions;var En=gt.reducer;const pt=R({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,o)=>{t.active=o.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:Si,clearExperienceActive:In}=pt.actions;var Mn=pt.reducer;const Pn=()=>{const t=v(),o=T.exports.useRef(null),i=()=>o.current.classList.toggle("toggle"),n=()=>{localStorage.removeItem("token"),t(Wt()),t(ot()),t(K()),t(In()),t(U())};return a(B,{children:[a(Ln,{ref:o,children:[a(Tn,{children:[e(Xe,{src:We,alt:"logo carlitos"}),e(go,{onClick:n,children:e(Dt,{})})]}),e(_,{margin:!0,children:"Informacion"}),a("div",{children:[a(N,{onClick:i,to:"/dashboard/",children:[e(Lt,{})," Acerca de mi"]}),a(N,{onClick:i,to:"education",children:[e(Ye,{})," Educacion"]}),a(N,{onClick:i,to:"portfolio",children:[e(Be,{})," Proyectos"]})]}),e(Un,{onClick:n,to:"/",children:"Ir al portafolio"})]}),e(Dn,{onClick:i,children:e(Ut,{})})]})},Tn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,Dn=r.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000000;
  background: none;
  font-size: 1.5rem;
  padding: 0;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 780px) {
    display: block;
  }
`,Ln=r.nav`
  background: linear-gradient(to bottom, #0c082c, #010105 );
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  backdrop-filter: blur(5px); 
  min-width: max-content;
  min-height: 100vh;
  padding: .5em 1em;
  transition: .3s linear;
  
  @media (max-width: 780px) {
    position: absolute;
    left: 0;
    z-index: 1000;
    transform: translateX(-100%);
    &.toggle {
      transform: translateX(0);
    }
  }
  `,N=r(Q)`
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 10px 20px 10px 20px;
  padding: .5em 1em;
  margin-bottom: 1em;
  overflow: hidden;
  position: relative;

  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255,255,255,.15), transparent);
      transform: skew(45deg) translateX(0);
      transition: .5s;
   }
   &:hover::before {
      transform: skew(45deg) translateX(150%);
   }

  &.active {
    box-shadow: none;
    background: rgba(0,0,255,.5);
    border-top: 1px solid rgba(255,255,255,.1);
    border-bottom: 1px solid rgba(255,255,255,.1);
  }
`,Un=r(N)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,Yn=()=>a(Bn,{children:[e(Pn,{}),e(zn,{children:e(ze,{})})]}),Bn=r.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,zn=r.div`
  width: 100%;
`,Rn=r.label`
   position: absolute;
   bottom: .6em;
   left: 5px;
   transition: all 0.3s ease;
   color: gray;
   font-size: .8em;
   display: flex;
   gap: .5em;
   align-items: center;
   z-index: -1;
   &::selection {
      display: none;
   }
   &.active {
      color: #2ecece;
      font-size: .7em;
      transform: translate(-5px ,-200%);
   }
`,jn=r.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
`,ht=r.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,On=r(ht)`
   right: 1.5em;
`,Vn=r.input`
   width: 100%;
   height: 100%;
   border: none;
   background: none;
   color: #fff;
   transition: .3s ease;
   outline: none;
   border-bottom: 1px solid rgba(255,255,255,.3);
   
   &:focus {
      border-bottom: 1px solid rgba(255,255,255,.8);
   }
`,qn=r.span`
   display: block;
   position: relative;
   font-weight: bold;
   color: red;
   font-size: .8em;
   width: 90%;
   margin: .5em auto;
   text-align: initial;
`,P=t=>{const[o,i]=T.exports.useState(!1),{icon:n,label:s,name:c}=t,l=()=>i(!o),[u,,m]=qe(c),{value:g}=u,{setValue:d}=m;return a("div",{children:[a(jn,{children:[a(Rn,{className:g&&"active",children:[!g&&n," ",s]}),e(Vn,L(x({},u),{type:c==="password"&&!o?"password":"text",autoComplete:"off"})),g&&e(ht,{onClick:()=>d(""),children:e(Yt,{})}),c==="password"&&g&&e(On,{onClick:l,children:o?e(Oe,{}):e(Bt,{})})]}),e(Fe,{name:c,component:qn})]})},Ae=({children:t})=>e(Fn,{children:e(Qn,{children:t})}),Fn=r.div`
  height: 50vh;
  background-image: url(${me}) ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 -60px 20px rgba(1, 1, 5, .6), inset 30px 0 20px rgba(1, 1, 5, .6);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em 1em 0;
`,Qn=r.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,Nn=r(He)`
   position: relative;
   span {
      display: flex;
      gap: .3em;
      justify-content: center;
      align-items: center;
   }
   input {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     opacity: 0;
   }
   
`,ft=t=>a(Nn,{children:[a("span",{children:[e(zt,{})," ",t.text?t.text:"Imagen"]}),e("input",L(x({},t),{type:"file",name:"file",id:"file"}))]}),Gn={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},Zn=({children:t})=>e(f.div,{variants:Gn,initial:"hidden",animate:"visible",exit:"exit",children:t}),Kn=$({email:I().required("El correo electronico es requerido").email("El correo no es valido"),password:I().required("La contrase\xF1a es requerida")}),$n=$({name:I().required("El nombre es requerido").min(3,"Debe tener mas de 3 caracteres").max(20,"Debe tener 20 caracteres o menos"),description:I().required("La descripcion es requerida").min(3,"Debe tener mas de 3 caracteres")}),Jn=$({name:I().required("El nombre es requerido").min(3,"Debe tener mas de 3 caracteres").max(20,"Debe tener 20 caracteres o menos"),start:I().required("El inicio es requerido"),end:I().required("El final es requerido")}),Xn=$({name:I().required("El nombre es requerido").min(3,"Debe tener mas de 3 caracteres").max(20,"Debe tener 20 caracteres o menos"),description:I().required("La descripcion es requerida").min(3,"Debe tener mas de 3 caracteres")}),_n=()=>{const t=Y(M=>M.about.active),o={name:"",description:""},{isLoading:i}=nt(),{mutate:n,isLoading:s}=Uo(),{mutate:c,isLoading:l}=Bo(),{mutate:u,isLoading:m}=Po(),{mutate:g}=Do(),d=(M,{resetForm:S})=>{t?n(x({id:t.id},M),{onSuccess:()=>S()}):u(M,{onSuccess:()=>S()})},C=()=>c(t.id),ee=M=>{const S=new FormData;S.append("file",M.target.files[0]),g({id:t.id,file:S})};return a(B,{children:[e(Ae,{children:i?e(V,{}):t?a(B,{children:[a(Zn,{children:[t.img?e(Z,{src:t.img,alt:"imagen de usuario"}):e(Z,{src:it,alt:"Imagen por defecto"}),e(_,{margin:!0,children:t.name}),e(E,{children:t.description})]}),a(ho,{children:[e(ft,{onChange:ee}),a(p,{color:"red",onClick:C,children:[" ",l?e(y,{}):e(le,{})," Eliminar"]})]})]}):e(j,{children:"Ingresa tus datos"})}),e(J,{initialValues:o,onSubmit:d,validationSchema:$n,children:a(ge,{children:[e(D,{nomargin:!0,children:"Quien eres?"}),e(P,{name:"name",label:"Nombre",icon:e(Qe,{})}),e(P,{name:"description",label:"Descripcion",icon:e(Ne,{})}),e(pe,{children:t?a(p,{children:[" ",s?e(y,{}):e(de,{})," Actualizar"]}):a(p,{children:[" ",m?e(y,{}):e(ue,{})," Guardar"]})})]})})]})};const Wn=t=>{const{value:o,name:i,toggle:n,setToggle:s}=t;return a(ei,{children:[a(Hn,{className:o&&"active",children:[!o&&e(je,{})," ",i==="start"?"Inicio":"Fin"]}),e(ti,L(x({},t),{type:"text",autoComplete:"off"})),n?e(Pe,{onClick:()=>s(!1),children:e(Rt,{})}):e(Pe,{onClick:()=>s(!0),children:e(jt,{})})]})},Hn=r.label`
   position: absolute;
   bottom: .6em;
   left: 5px;
   transition: all 0.3s ease;
   color: gray;
   font-size: .8rem;
   display: flex;
   gap: .5em;
   align-items: center;
   &::selection {
      display: none;
   }
   &.active {
      transform: translate(-5px ,-200%);
      color: #2ecece;
      font-size: .7rem;
   }
`,ei=r.div`
	position: relative;
   height: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,Pe=r.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,ti=r.input`
   width: 100%;
   height: 100%;
   border: none;
   background: none;
   color: #fff;
   font-weight: bold;
   transition: .3s ease;
   outline: none;
   border-bottom: 1px solid rgba(255,255,255,.3);
   
   &:focus {
      border-bottom: 1px solid rgba(255,255,255,.8);
   }
`,Te=({name:t})=>{const[o,i]=T.exports.useState(!1),[{value:n},,{setValue:s}]=qe(t),c=n?z(n).format("DD/MM/YYYY"):"";return a("div",{children:[e(Wn,{name:t,value:c,onChange:()=>{},toggle:o,setToggle:i}),e(Fe,{name:t,component:ii}),e(oi,{children:o&&e(Ot,{onClickDay:u=>{s(u),i(!1)}})})]})},oi=r.div`
   & .react-calendar {
     max-width: 250px;
     background: rgba(255,255,255,.1);
     box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
     border: 1px solid rgba(255,255,255,.2);
     backdrop-filter: blur(25px);
     border-radius: 15px;
     padding: .5em;
     overflow: hidden;
     position: absolute;
     left: 50%;
     bottom: 50%;
     z-index: 1000000;
     transform: translateX(-50%);
   }

   & button {
     color: #fff;
     border-radius: 10px;
   }

   & button:hover {
     background-color: rgba(0,0,0,.7) !important;
   }

   .react-calendar__tile--active {
     background-color: #000 !important;
   }

   .react-calendar__tile--hasActive {
     background-color: #000;
   }

   .react-calendar__navigation__arrow {
     background: none !important;
   }

   .react-calendar__navigation__label {
     background: none !important;
   }

   .react-calendar__tile--now {
       background: none !important;
   }

   .react-calendar__month-view__days__day {
       background: none !important;
   }
`,ni=r.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,ii=r.span`
   display: block;
   position: relative;
   font-weight: bold;
   color: red;
   font-size: .8em;
   width: 80%;
   margin: .5em auto;
   text-align: initial;
`,ai=({id:t,name:o,start:i,end:n})=>{const{mutate:s,isLoading:c}=en(),l=z(i).format("DD/MM/YYYY"),u=z(n).format("DD/MM/YYYY"),m=v();return a(rt,{children:[e(W,{children:o}),a(E,{small:!0,children:[l," - ",u]}),a(fe,{children:[a(p,{onClick:()=>{m(Sn({id:t,name:o,start:i,end:n}))},children:[e(Vt,{})," Editar"]}),a(p,{color:"red",onClick:()=>{s(t),m(K())},children:[" ",c?e(y,{}):e(le,{})," Eliminar"]})]})]})},ri=()=>{const t=Y(d=>d.education.active),o=v(),{data:i,isLoading:n}=at(),{mutate:s,isLoading:c}=Xo(),{mutate:l,isLoading:u}=Wo(),m={name:"",start:"",end:""},g=(d,{resetForm:C})=>{t?l(d,{onSuccess:()=>o(K())}):s(d,{onSuccess:()=>C()})};return a(bo,{children:[e(Ae,{children:n?e(V,{}):i.length!==0?e(st,{children:i.map((d,C)=>e(ct,{i:C,length:i.length,component:e(ai,x({},d))},d.id))}):e(j,{children:"Ingresa tu estudios"})}),e(J,{initialValues:t||m,enableReinitialize:!0,onSubmit:g,validationSchema:Jn,children:a(ge,{children:[e(D,{nomargin:!0,children:"Cuales son tus estudios?"}),e(P,{icon:e(qt,{}),name:"name",label:"Escuela"}),a(ni,{children:[" ",e(Te,{name:"start"})," ",e(Te,{name:"end"})]}),a(pe,{children:[t?a(p,{children:[" ",u?e(y,{}):e(de,{})," Actualizar"]}):a(p,{children:[" ",c?e(y,{}):e(ue,{})," Guardar"]}),t&&e(p,{onClick:()=>o(K()),children:"Cancelar"})]})]})})]})},si=({id:t,img:o,name:i,description:n,link:s})=>{const c=v(),l=Y(S=>S.portfolio.active),{mutate:u,isLoading:m}=wn(),{mutate:g,isLoading:d}=An(),C=()=>{c(be({id:t,img:o,name:i,description:n,link:s}))},ee=()=>{u(t),c(U())},M=S=>{const ve=new FormData;ve.append("file",S.target.files[0]),g({id:t,file:ve},{onSuccess:()=>c(U())})};return a(mi,{children:[d?e(ci,{children:e(y,{})}):e(li,{src:o,alt:i,onClick:C}),!d&&l&&l.id===t&&a(di,{children:[e(ui,{children:i}),e(De,{smaill:!0,children:n}),e(De,{smaill:!0,children:s}),a(p,{color:"red",onClick:ee,children:[m?e(y,{}):e(le,{})," Eliminar"]}),e(ft,{text:"Agregar imagen",onChange:M}),e(p,{onClick:()=>c(U()),children:"Cancelar"})]})]})},ci=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,li=r.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,di=r(fe)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1em;
  align-items: stretch;
  flex-direction: column;
`,ui=r(W)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,De=r(E)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,mi=r.div`
    position: relative;
`,gi=()=>{const t=v(),o={name:"",description:"",link:""},i=Y(d=>d.portfolio.active),{data:n,isLoading:s}=ut(),{mutate:c,isLoading:l}=fn(),{mutate:u,isLoading:m}=xn(),g=d=>{i?u(d,{onSuccess:()=>t(U())}):c(d,{onSuccess:C=>t(be(C))})};return a(B,{children:[e(Ae,{children:s?e(V,{}):n.length!==0?e(mt,{children:e(dt,{children:n.map(d=>e(Ve,{className:"portfolio__card",children:e(si,x({},d))},d.id))})}):e(j,{children:"Ingresa tus proyectos"})}),e(J,{initialValues:i||o,enableReinitialize:!0,onSubmit:g,validationSchema:Xn,children:a(ge,{children:[e(D,{nomargin:!0,children:"Cuales son tus proyectos?"}),e(P,{icon:e(Qe,{}),name:"name",label:"Nombre"}),e(P,{icon:e(Ne,{}),name:"description",label:"Descripcion"}),e(P,{icon:e(Ft,{}),name:"link",label:"Link (opcional)"}),e(pe,{children:i?a(p,{margin:!0,children:[" ",m?e(y,{}):e(de,{})," Actualizar"]}):a(p,{margin:!0,children:[" ",l?e(y,{}):e(ue,{})," Guardar"]})})]})})]})},pi=()=>e(Ge,{children:a(A,{path:"/",element:e(Yn,{}),children:[e(A,{index:!0,element:e(_n,{})}),e(A,{path:"education",element:e(ri,{})}),e(A,{path:"portfolio",element:e(gi,{})}),e(A,{path:"*",element:e(se,{to:"/dashboard/"})})]})}),hi={email:"",password:""},fi=()=>{const t=Le(),{mutate:o}=to();return e(Je,{children:e(J,{initialValues:hi,onSubmit:n=>{o(n,{onSuccess:()=>t("/dashboard")})},validationSchema:Kn,children:a(fo,{children:[e(D,{nomargin:!0,children:"Inicia Sesion"}),e(P,{name:"email",label:"Correo electronico"}),e(P,{name:"password",label:"Contrase\xF1a"}),e(p,{children:"Enviar"})]})})})},bi=()=>{const{user:t}=Y(o=>o.auth);return e(T.exports.Suspense,{fallback:null,children:e(Qt,{children:a(Ge,{children:[a(A,{path:"/",element:e(vo,{}),children:[e(A,{index:!0,element:e(No,{})}),"k",e(A,{path:"education",element:e(rn,{})}),e(A,{path:"portfolio",element:e(Cn,{})}),e(A,{path:"*",element:e(se,{to:"/"})})]}),e(A,{path:"/auth",element:e(fi,{})}),e(A,{path:"/dashboard/*",element:e(so,{isLogged:!!t,children:e(pi,{})})})]})})})},Ai=({children:t})=>{const o=new Nt({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return a(Gt,{client:o,children:[t,e(Zt.exports.ReactQueryDevtools,{})]})},vi=Kt({reducer:{about:Eo,auth:Ht,education:En,experience:Mn,portfolio:sn}}),xi=({children:t})=>e($t,{store:vi,children:t}),yi=()=>e(Jt,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),wi=()=>a(xi,{children:[e(Ai,{children:e(bi,{})}),e(yi,{})]});Xt(document.getElementById("root")).render(e(wi,{}));
