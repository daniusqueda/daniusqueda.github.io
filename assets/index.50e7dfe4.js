var ht=Object.defineProperty,ft=Object.defineProperties;var bt=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var ve=(t,o,i)=>o in t?ht(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,g=(t,o)=>{for(var i in o||(o={}))xe.call(o,i)&&ve(t,i,o[i]);if(K)for(var i of K(o))ye.call(o,i)&&ve(t,i,o[i]);return t},S=(t,o)=>ft(t,bt(o));var we=(t,o)=>{var i={};for(var n in t)xe.call(t,n)&&o.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&K)for(var n of K(t))o.indexOf(n)<0&&ye.call(t,n)&&(i[n]=t[n]);return i};import{c as Q,t as p,u as b,a as x,j as e,b as r,m as f,d as De,r as v,N as ce,s,e as At,F as R,B as vt,f as xt,I as Le,g as Ue,A as yt,O as Ye,M as wt,h as Be,i as kt,k as le,l as w,n as Ct,o as z,p as de,q as je,v as Oe,w as ue,x as me,y as Re,z as St,C as It,D as F,E as Et,G as ke,H as Mt,J as Pt,S as Tt,K as Dt,P as Lt,L as ze,Q as Ut,R as Fe,T as A,U as Yt,V as Bt,W as jt,X as Qe,Y as Ot,Z as Rt,_ as zt,$ as Ft,a0 as Qt,a1 as Vt,a2 as Nt,a3 as Gt,a4 as Zt,a5 as Kt,a6 as Jt,a7 as $t}from"./vendor.3f5c859c.js";const qt=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}};qt();const Ve=Q({name:"auth",initialState:{user:null},reducers:{login:(t,o)=>{t.user=o.payload},logout:t=>{t.user=null}}}),{login:Ne,logout:Xt}=Ve.actions;var _t=Ve.reducer;const q="https://street-carlitos.herokuapp.com/api",W=async(t,o,i)=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),mode:"no-cors"},a=o==="POST"?await fetch(q+t,n):await fetch(q+t),c=await a.json();if(!a.ok)throw c.map(l=>p.error(l)),new Error;return c},I=async(t,o,i)=>{var d;const n=(d=localStorage.getItem("token"))!=null?d:"";let a=o==="GET"||o==="DELETE"?{method:o,headers:{"access-token":n,mode:"no-cors"}}:{method:o,headers:{"access-token":n,"Content-Type":"application/json"},body:JSON.stringify(i),mode:"no-cors"};const c=await fetch(q+t,a),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},Ge=async(t,o,{file:i})=>{var d;const n=(d=localStorage.getItem("token"))!=null?d:"",a={method:o,headers:{"access-token":n},body:i,mode:"no-cors"},c=await fetch(q+t,a),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},Wt=t=>W("/auth/login","POST",t),Ht=()=>{const t=x();return b(Wt,{onSuccess:({id:o,name:i,email:n,token:a})=>{p.success(`Bienvenido ${i}`),localStorage.setItem("token",a),t(Ne({id:o,name:i,email:n}))}})},eo=()=>{const t=x();return b(()=>I("/auth/renew","GET"),{onSuccess:({id:o,name:i,email:n,token:a})=>{localStorage.setItem("token",a),t(Ne({id:o,name:i,email:n}))}})},to={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},oo={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},oe={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},no={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ne={hidden:{y:"0%"},visible:{y:"100%"}},ie={duration:.8,repeat:"Infinity",ease:"circInOut"},io=()=>e("div",{style:to,children:r(f.div,{style:oo,variants:no,initial:"hidden",animate:"visible",children:[e(f.span,{style:oe,variants:ne,transition:ie}),e(f.span,{style:oe,variants:ne,transition:ie}),e(f.span,{style:oe,variants:ne,transition:ie})]})}),ao=({children:t,isLogged:o})=>{const i=localStorage.getItem("token"),n=De(),{mutate:a,isLoading:c}=eo();return v.exports.useEffect(()=>{i&&(a(),n("/dashboard"))},[]),c?e(io,{}):o?t:e(ce,{to:"/auth"})},Ze=s.img`
  width: 3em;
  height: 3em;
`,ro=s.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,so=s.i`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,X=s.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`,Ke=s.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,J=s(At)`
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
`,pe=s.form`
   text-align: center;
   max-width: 600px;
   width: 90%;
   padding-top: 2em;
   margin: auto;
   height: 50vh;
   display: flex;
   flex-direction: column;
   position: relative;
`,co=s.div`
  display: flex;
  margin-top: 2em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`,H=s.h3`
  color: ${({black:t})=>t?"#000":"#fff"};
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: 1.2em;
  margin: 0;
  margin-bottom: ${({margin:t})=>t?"1em":"0"};
`,j=s(H)`
  font-size: 2em;
  margin: 0;
  margin-bottom: 1em;
  background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: ${({margin:t})=>t?"1em":"0"};
`,V=s(j)`
  background: linear-gradient(to right, blue, white, black);
  text-shadow: 0 0 10px rgba(255,255,255,.3);
  margin-top: 3em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`,ee=s.h3`
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: .8em;
  font-weight: bold;
  margin: 0;
  margin-bottom: .5em;
`,D=s.p`
  text-align: ${({initial:t})=>t?"initial":"center"};
  font-size: ${({small:t})=>t?".8em":".9em"};
  color: gray;
  margin: 0;
`,Je=Q({name:"about",initialState:{active:null},reducers:{aboutActive:(t,o)=>{t.active=o.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:ge,clearAboutActive:$e}=Je.actions;var lo=Je.reducer;const qe=Q({name:"education",initialState:{active:null},reducers:{educationActive:(t,o)=>{t.active=o.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:uo,clearEducationActive:_}=qe.actions;var mo=qe.reducer;const Xe=Q({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,o)=>{t.active=o.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:fi,clearExperienceActive:po}=Xe.actions;var go=Xe.reducer;const _e=Q({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,o)=>{t.active=o.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:he,clearPortfolioActive:O}=_e.actions;var ho=_e.reducer;const fo=()=>{const t=x(),o=v.exports.useRef(null),i=()=>o.current.classList.toggle("toggle"),n=()=>{localStorage.removeItem("token"),t(Xt()),t($e()),t(_()),t(po()),t(O())};return r(R,{children:[r(vo,{ref:o,children:[r(bo,{children:[e(Ze,{src:"/logo.png",alt:"logo carlitos"}),e(ro,{onClick:n,children:e(vt,{})})]}),e(H,{margin:!0,children:"Informacion"}),r("div",{children:[r($,{onClick:i,to:"/dashboard/",children:[e(xt,{})," Acerca de mi"]}),r($,{onClick:i,to:"education",children:[e(Le,{})," Educacion"]}),r($,{onClick:i,to:"portfolio",children:[e(Ue,{})," Proyectos"]})]}),e(xo,{onClick:n,to:"/",children:"Ir al portafolio"})]}),e(Ao,{onClick:i,children:e(yt,{})})]})},bo=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,Ao=s.button`
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
`,vo=s.nav`
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
  `,$=s(J)`
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
`,xo=s($)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,yo=()=>r(wo,{children:[e(fo,{}),e(ko,{children:e(Ye,{})})]}),wo=s.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,ko=s.div`
  width: 100%;
`,We=t=>{const[o,i]=v.exports.useState(t);return[o,l=>{i(S(g({},o),{[l.target.name]:l.target.value}))},l=>{i(S(g({},o),{[l]:""}))},()=>{i(t)}]},Co=s.label`
   position: absolute;
   bottom: .6em;
   left: 5px;
   transition: all 0.3s ease;
   color: gray;
   font-size: .8em;
   display: flex;
   gap: .5em;
   align-items: center;
   &::selection {
      display: none;
   }
   &.active {
      color: #2ecece;
      font-size: .7em;
      transform: translate(-5px ,-200%);
   }
`,So=s.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`,He=s.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,Io=s(He)`
   right: 1.5em;
`,Eo=s.input`
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
`,U=t=>{const[o,i]=v.exports.useState(!1),{icon:n,value:a,label:c,name:l,reset:d}=t,u=()=>d(l),h=()=>i(!o);return r(So,{children:[r(Co,{className:a&&"active",children:[!a&&n," ",c]}),e(Eo,S(g({},t),{type:l==="password"&&!o?"password":"text",autoComplete:"off"})),a&&e(He,{onClick:u,children:e(wt,{})}),l==="password"&&a&&e(Io,{onClick:h,children:o?e(Be,{}):e(kt,{})})]})},m=t=>e(et,S(g({},t),{color:t.color,children:e("div",{children:t.children})})),et=s.button`
   background: rgba(255,255,255,.05);
   color: #fff;
   border: none;
   border-top: 1px solid rgba(255,255,255,.1);
   border-bottom: 1px solid rgba(255,255,255,.1);
   border-radius: 15px;
   font-weight: bold;
   padding: .5em 1em;
   cursor: pointer;
   margin-bottom: ${({margin:t})=>t&&"1rem"};
   transition: .5s;
   backdrop-filter: blur(15px);
   text-decoration: none;
   overflow: hidden;
   z-index: 10;
   position: relative;
   div {
      font-size: .9  em;
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
`;var fe="/assets/fondo.02bdd8a8.jpg";const be=({children:t})=>e(Mo,{children:e(Po,{children:t})}),Mo=s.div`
  height: 50vh;
  background-image: url(${fe}) ;
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
`,Po=s.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,N="about",To=()=>W("/about"),tt=()=>{const t=x();return le([N],To,{onSuccess:o=>t(ge(o[0]))})},Do=t=>I("/about","POST",t),Lo=()=>{const t=x(),o=w();return b(Do,{onSuccess:i=>{p.success("Informacion agregada"),o.setQueryData([N],()=>[i]),t(ge(i))}})},Uo=t=>Ge(`/uploads/about/${t.id}`,"POST",t),Yo=()=>{const t=x(),o=w();return b(Uo,{onSuccess:i=>{p.success("Imagen agregada"),o.setQueryData([N],()=>[i]),t(ge(i))}})},Bo=t=>I(`/about/${t.id}`,"PUT",t),jo=()=>{const t=w();return b(Bo,{onSuccess:o=>{p.success("Informacion actualizada"),t.setQueryData([N],i=>i.map(n=>n.id===o.id?o:n))}})},Oo=t=>I(`/about/${t}`,"DELETE"),Ro=()=>{const t=x(),o=w();return b(Oo,{onSuccess:i=>{p.success("Informacion eliminada"),o.setQueryData([N],n=>n.filter(a=>a.id!==i.id)),t($e())}})},zo=s(et)`
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
   
`,ot=t=>r(zo,{children:[r("span",{children:[e(Ct,{})," ",t.text?t.text:"Imagen"]}),e("input",S(g({},t),{type:"file",name:"file",id:"file"}))]}),Fo={position:"relative",width:"1em",height:"1em"},Qo={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},Vo={rotate:360},No={duration:1,loop:"Infinity"},y=()=>e("div",{style:Fo,children:e(f.span,{style:Qo,animate:Vo,transition:No})}),Go={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Zo={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ae={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Ko={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},re={hidden:{y:"0%"},visible:{y:"100%"}},se={duration:.8,repeat:"Infinity",ease:"circInOut"},G=()=>e("div",{style:Go,children:r(f.div,{style:Zo,variants:Ko,initial:"hidden",animate:"visible",children:[e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se})]})}),Jo={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},$o=({children:t})=>e(f.div,{variants:Jo,initial:"hidden",animate:"visible",exit:"exit",children:t});var nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEwACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8P0APOAAAADHRSTlMA8lcmiEGkvdJuEOMxsOlHAAAC5klEQVRYw+1Yv2/TUBB+rdOEpkslOlTFQ1AlVJCHqhJUQh5CVbYMGShFIoOZ6JChKgIklKEg0S4ZgrpBh7QDYmCAAaYuzu+S+6OIU8t+7+78nr2B1G/0+XPu3v36XoS4xv+D4sbd7e2t1XZqwvnL9zDF8puTVIS5PRtiHJXMjKcXoGB8YHCv+AUIlta1jEfAYKDhFCsAGTmfIAFLSfFsQiJ+8Yx50KDMBlLXUUZcOM9Biw5lzIIB1LVTE2WAGTkwYh9RKmbKMPOPAHjZIgnQU3qE2m/91B+ai42/V4XY2NPlBrUVvA7bDXPi6szzDCEeIMNhRKklhnlbtVxGBlt57ldjioVcXueTclM+y2+8Zy7/pauWuGDPrKmrcvV7YzaPnrZXW9OHN7jvxGgo5hXmiEn3uUwC1M/8wJQ8dcJSnSVjm7GrWfHpVGiQ3lxI7gmul7ok+j6luKTM1K7/QylqEkakJg8pJYd7xtLmnsl/CU/JlnGOergjzZRFMWPIJCnbLm4WM6WP+75lpFwKJ2ssAzy/y8ZDHoq6fiNQygg1/uQICQpIoQgAUqgI3wG1h500DyM4BsqYUuoGCtD9DibKvkl0UAqJf4ZQDHuX7mof54UUpoXtY0HEDvJsgQggqhFGbd0RB547euGRZ7RMjQqPtu5HJvXhUkXwUasd++TYlaaZt6mxyzg7OYGwN2cbjHGRqL2jKWcriOdJk9dLaqr8x+GgX34bXi9691+QVMtbenhvMlBsND+Ka7jUpVwOp7riq/zCq+DJMzT5HcQQYjd+4cPVkzW1bc+iOKIZthv65h/QTdaV18c76WoV3JT8489xPTflcrLYQWHt7Dxk91JJ2rhV/f3pVN7YTtJe5SZzT1qfVdO9zpE0zFzCxYGdNOVYv3rm62NDEh81dkiys7kTN2snBSUn6yibUwgUtjR+HSiloVQkUZT3U13Ta7K+SxN9kEBpLdxJRSl0RFYUvMwU6/ofmn8ZfwEqPdZRx3i98QAAAABJRU5ErkJggg==";const qo=()=>{const t=z(P=>P.about.active),[{name:o,description:i},n,a,c]=We({name:"",description:""}),{isLoading:l}=tt(),{mutate:d,isLoading:u}=jo(),{mutate:h,isLoading:k}=Ro(),{mutate:E,isLoading:Y}=Lo(),{mutate:B}=Yo(),M=P=>{P.preventDefault(),t?d({id:t.id,name:o,description:i},{onSuccess:()=>c()}):E({name:o,description:i},{onSuccess:()=>c()})},L=()=>{h(t.id)},C=P=>{const T=new FormData;T.append("file",P.target.files[0]),B({id:t.id,file:T})};return r(R,{children:[e(be,{children:l?e(G,{}):t?r(R,{children:[r($o,{children:[t.img?e(X,{src:t.img,alt:"imagen de usuario"}):e(X,{src:nt,alt:"Imagen por defecto"}),e(H,{margin:!0,children:t.name}),e(D,{children:t.description})]}),r(co,{children:[e(ot,{onChange:C}),r(m,{color:"red",onClick:L,children:[" ",k?e(y,{}):e(de,{})," Eliminar"]})]})]}):e(V,{children:"Ingresa tus datos"})}),r(pe,{onSubmit:M,children:[e(j,{children:"Quien eres?"}),e(U,{type:"text",icon:e(je,{}),name:"name",value:o,label:"Nombre",onChange:n,reset:a}),e(U,{type:"text",icon:e(Oe,{}),name:"description",value:i,label:"Descripcion",onChange:n,reset:a}),t?r(m,{children:[" ",u?e(y,{}):e(ue,{})," Actualizar"]}):r(m,{children:[" ",Y?e(y,{}):e(me,{})," Guardar"]})]})]})};const Xo=t=>{const{value:o,name:i,toggle:n,setToggle:a}=t;return r(Wo,{children:[r(_o,{className:o&&"active",children:[!o&&e(Re,{})," ",i==="start"?"Inicio":"Fin"]}),e(Ho,S(g({},t),{type:"text",autoComplete:"off"})),n?e(Ce,{onClick:()=>a(!1),children:e(St,{})}):e(Ce,{onClick:()=>a(!0),children:e(It,{})})]})},_o=s.label`
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
`,Wo=s.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,Ce=s.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,Ho=s.input`
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
`,Se=({name:t,date:o,setDate:i})=>{const[n,a]=v.exports.useState(!1),c=o?F(o).format("DD/MM/YYYY"):"";return r("div",{children:[e(Xo,{name:t,value:c,onChange:()=>{},toggle:n,setToggle:a}),e(en,{children:n&&e(Et,{onClickDay:d=>{i(d),a(!1)}})})]})},en=s.div`
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
     bottom: 100%;
     z-index: 100;
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
`,tn=s.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,te="education",on=()=>W("/education"),it=()=>le([te],on),nn=t=>I("/education","POST",t),an=()=>{const t=w();return b(nn,{onSuccess:o=>{p.success("Estudio agregado"),t.setQueryData([te],i=>[...i,o])}})},rn=t=>I(`/education/${t.id}`,"PUT",t),sn=()=>{const t=w();return b(rn,{onSuccess:o=>{p.success("Estudio actualizado"),t.setQueryData([te],i=>i.map(n=>n.id===o.id?o:n))}})},cn=t=>I(`/education/${t}`,"DELETE"),ln=()=>{const t=w();return b(cn,{onSuccess:o=>{p.success("Estudio eliminado"),t.setQueryData([te],i=>i.filter(n=>n.id!==o.id))}})},Ie=s.div`
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
`,at=s.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`,Ee=s.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Me=s.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`,Ae=s.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`,dn={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},un={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},rt=({children:t})=>e(f.div,{variants:dn,initial:"hidden",animate:"visible",children:t}),mn=({children:t})=>e(f.div,{variants:un,children:t}),st=({i:t,length:o,component:i})=>{const n=t%2===0,a=o===t+1;return e(mn,{children:n?r(Ie,{children:[i,r("span",{children:[e(Ee,{children:e(ke,{})}),!a&&e(Me,{})]}),e("span",{})]}):r(Ie,{children:[e("span",{}),r("span",{children:[e(Ee,{children:e(ke,{})}),!a&&e(Me,{})]}),i]})})},ct=(t,o,i)=>{const[n,a]=v.exports.useState(t);return[n,a,u=>{a(S(g({},n),{[u.target.name]:u.target.value}))},u=>{a(S(g({},n),{[u]:""}))},()=>{a(t),o&&i&&(o(""),i(""))}]},pn=({id:t,name:o,start:i,end:n})=>{const{mutate:a,isLoading:c}=ln(),l=F(i).format("DD/MM/YYYY"),d=F(n).format("DD/MM/YYYY"),u=x();return r(at,{children:[e(ee,{children:o}),r(D,{small:!0,children:[l," - ",d]}),r(Ae,{children:[r(m,{onClick:()=>{u(uo({id:t,name:o,start:i,end:n}))},children:[e(Mt,{})," Editar"]}),r(m,{color:"red",onClick:()=>{a(t),u(_())},children:[" ",c?e(y,{}):e(de,{})," Eliminar"]})]})]})},gn=()=>{const t=z(T=>T.education.active),o=x(),[i,n]=v.exports.useState(),[a,c]=v.exports.useState(),[{name:l},d,u,h,k]=ct({name:""},n,c),{data:E,isLoading:Y}=it(),{mutate:B,isLoading:M}=an(),{mutate:L,isLoading:C}=sn();v.exports.useEffect(()=>{t?(d(t),n(t.start),c(t.end)):k()},[t]);const P=T=>{T.preventDefault(),t?L({id:t.id,name:l,start:i,end:a},{onSuccess:()=>o(_())}):B({name:l,start:i,end:a},{onSuccess:()=>k()})};return r(R,{children:[e(be,{children:Y?e(G,{}):E.length!==0?e(rt,{children:E.map((T,gt)=>e(st,{i:gt,length:E.length,component:e(pn,g({},T))},T.id))}):e(V,{children:"Ingresa tu estudios"})}),r(pe,{onSubmit:P,children:[e(j,{children:"Cuales son tus estudios?"}),e(U,{type:"text",icon:e(Pt,{}),name:"name",label:"Escuela",value:l,onChange:u,reset:h}),r(tn,{children:[e(Se,{name:"start",date:i,setDate:n}),e(Se,{name:"end",date:a,setDate:c})]}),t?r(m,{children:[" ",C?e(y,{}):e(ue,{})," Actualizar"]}):r(m,{children:[" ",M?e(y,{}):e(me,{})," Guardar"]}),e("br",{}),t&&e(m,{onClick:()=>o(_()),children:"Cancelar"})]})]})},Z="portfolio",hn=()=>W("/portfolio"),lt=()=>le([Z],hn),fn=t=>I("/portfolio","POST",t),bn=()=>{const t=w();return b(fn,{onSuccess:o=>{p.success("Proyecto agregado"),t.setQueryData([Z],i=>[...i,o])}})},An=t=>Ge(`/uploads/portfolio/${t.id}`,"POST",t),vn=()=>{const t=w();return b(An,{onSuccess:o=>{p.success("Imagen agregada"),t.setQueryData([Z],i=>i.map(n=>n.id===o.id?o:n))}})},xn=t=>I(`/portfolio/${t.id}`,"PUT",t),yn=()=>{const t=w();return b(xn,{onSuccess:o=>{p.success("Proyecto actualizado"),t.setQueryData([Z],i=>i.map(n=>n.id===o.id?o:n))}})},wn=t=>I(`/portfolio/${t}`,"DELETE"),kn=()=>{const t=w();return b(wn,{onSuccess:o=>{p.success("Proyecto eliminado"),t.setQueryData([Z],i=>i.filter(n=>n.id!==o.id))}})},Cn=({id:t,img:o,name:i,description:n,link:a})=>{const c=x(),l=z(M=>M.portfolio.active),{mutate:d,isLoading:u}=kn(),{mutate:h,isLoading:k}=vn(),E=()=>{c(he({id:t,img:o,name:i,description:n,link:a}))},Y=()=>{d(t),c(O())},B=M=>{const L=new FormData;L.append("file",M.target.files[0]),h({id:t,file:L},{onSuccess:()=>c(O())})};return r(Pn,{children:[k?e(Sn,{children:e(y,{})}):e(In,{src:o,alt:i,onClick:E}),!k&&l&&l.id===t&&r(En,{children:[e(Mn,{children:i}),e(Pe,{smaill:!0,children:n}),e(Pe,{smaill:!0,children:a}),r(m,{color:"red",onClick:Y,children:[u?e(y,{}):e(de,{})," Eliminar"]}),e(ot,{text:"Agregar imagen",onChange:B}),e(m,{onClick:()=>c(O()),children:"Cancelar"})]})]})},Sn=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,In=s.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,En=s(Ae)`
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
`,Mn=s(ee)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pe=s(D)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pn=s.div`
    position: relative;
`;const dt=({children:t})=>e(Tt,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Dt,Lt],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),Tn={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},ut=({children:t})=>e(f.div,{variants:Tn,initial:"hidden",animate:"visible",exit:"exit",children:t}),Dn=()=>{const t=x(),o=z(C=>C.portfolio.active),[{name:i,description:n,link:a},c,l,d,u]=ct({name:"",description:"",link:""}),{data:h,isLoading:k}=lt(),{mutate:E,isLoading:Y}=bn(),{mutate:B,isLoading:M}=yn();v.exports.useEffect(()=>{o?c(o):u()},[o]);const L=C=>{C.preventDefault(),o?B({id:o.id,name:i,description:n,link:a},{onSuccess:()=>t(O())}):E({name:i,description:n,link:a},{onSuccess:P=>t(he(P))})};return r(R,{children:[e(be,{children:k?e(G,{}):h.length!==0?e(ut,{children:e(dt,{children:h.map(C=>e(ze,{className:"portfolio__card",children:e(Cn,g({},C))},C.id))})}):e(V,{children:"Ingresa tus proyectos"})}),r(pe,{onSubmit:L,children:[e(j,{children:"Cuales son tus proyectos?"}),e(U,{type:"text",icon:e(je,{}),name:"name",value:i,label:"Nombre",onChange:l,reset:d}),e(U,{type:"text",icon:e(Oe,{}),name:"description",value:n,label:"Descripcion",onChange:l,reset:d}),e(U,{type:"text",icon:e(Ut,{}),name:"link",value:a,label:"Link (opcional)",onChange:l,reset:d}),o?r(m,{margin:!0,children:[" ",M?e(y,{}):e(ue,{})," Actualizar"]}):r(m,{margin:!0,children:[" ",Y?e(y,{}):e(me,{})," Guardar"]})]})]})},Ln=()=>e(Fe,{children:r(A,{path:"/",element:e(yo,{}),children:[e(A,{index:!0,element:e(qo,{})}),e(A,{path:"education",element:e(gn,{})}),e(A,{path:"portfolio",element:e(Dn,{})}),e(A,{path:"*",element:e(ce,{to:"/dashboard/"})})]})}),Un=s.div`
  background-image: url(${fe}) ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`,Yn=s.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,Te=s.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,mt=({children:t,noPadding:o})=>r(Un,{children:[e("div",{}),e(Te,{}),e("div",{}),e(Te,{}),e(Yn,{noPadding:o,children:t})]}),Bn=s.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,jn=s.div`
  display: flex;
  align-items: center;
`;var On="data:image/png;base64,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";const Rn=()=>r(Bn,{children:[e(Yt,{to:"/auth",children:e(Ze,{src:On,alt:"logo carlitos"})}),r(jn,{children:[r(J,{to:"/",children:[e(Bt,{}),e("span",{children:"Inicio"})]}),r(J,{to:"/education",children:[e(Le,{}),e("span",{children:"Educacion"})]}),r(J,{to:"/portfolio",children:[e(Ue,{}),e("span",{children:"Portafolio"})]})]})]}),zn=()=>e(R,{children:r(mt,{children:[e(Rn,{}),e(Ye,{})]})}),pt=s.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,Fn=s.div`
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
`,Qn=s.div`
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
`,Vn=s.div`
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
   box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,Nn=s.div`
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
`,Gn=s.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,Zn=s.div`
   background-image: url(${fe}) ;
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
      ${pt}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`;var Kn="/assets/cv_carlos.6cd29141.pdf";const Jn=()=>e(jt,{makeDefault:!0,fov:12,position:[-10,5,-5]});function $n(o){var t=we(o,[]);const i=v.exports.useRef(),{nodes:n,materials:a}=Qe("/micro/scene.gltf");return e("group",S(g({ref:i},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:r("group",{rotation:[Math.PI/2,0,0],children:[e("mesh",{geometry:n.defaultMaterial.geometry,material:n.defaultMaterial.material}),e("mesh",{geometry:n.defaultMaterial_1.geometry,material:n.defaultMaterial_1.material}),e("mesh",{geometry:n.defaultMaterial_2.geometry,material:n.defaultMaterial_2.material}),e("mesh",{geometry:n.defaultMaterial_3.geometry,material:n.defaultMaterial_3.material}),e("mesh",{geometry:n.defaultMaterial_4.geometry,material:n.defaultMaterial_4.material}),e("mesh",{geometry:n.defaultMaterial_5.geometry,material:n.defaultMaterial_5.material}),e("mesh",{geometry:n.defaultMaterial_6.geometry,material:n.defaultMaterial_6.material}),e("mesh",{geometry:n.defaultMaterial_7.geometry,material:n.defaultMaterial_7.material}),e("mesh",{geometry:n.defaultMaterial_8.geometry,material:n.defaultMaterial_8.material}),e("mesh",{geometry:n.defaultMaterial_9.geometry,material:n.defaultMaterial_9.material}),e("mesh",{geometry:n.defaultMaterial_10.geometry,material:n.defaultMaterial_10.material}),e("mesh",{geometry:n.defaultMaterial_11.geometry,material:n.defaultMaterial_11.material}),e("mesh",{geometry:n.defaultMaterial_12.geometry,material:n.defaultMaterial_12.material}),e("mesh",{geometry:n.defaultMaterial_13.geometry,material:n.defaultMaterial_13.material}),e("mesh",{geometry:n.defaultMaterial_14.geometry,material:n.defaultMaterial_14.material}),e("mesh",{geometry:n.defaultMaterial_15.geometry,material:n.defaultMaterial_15.material}),e("mesh",{geometry:n.defaultMaterial_16.geometry,material:n.defaultMaterial_16.material})]})})}))}Qe.preload("/micro/scene.gltf");const qn=()=>r(Ot,{children:[e(Jn,{}),e("pointLight",{color:"#0000ff",position:[10,-5,5]}),e("pointLight",{color:"#0000ff",position:[50,10,-10]}),e("pointLight",{color:"#ffffff",position:[0,0,100]}),r(v.exports.Suspense,{fallback:null,children:[e($n,{}),e(Rt,{files:"/hdr/decor_shop_1k.jpg",preset:"night"})]}),e(zt,{enablePan:!1,autoRotate:!0,enableZoom:!1})]}),Xn=()=>{const{data:t,isLoading:o}=tt();return r(Zn,{children:[e(Gn,{children:e(qn,{})}),e(pt,{children:o?e(y,{}):t[0]&&r(Fn,{children:[t[0].img?e(X,{src:t[0].img,alt:"imagen de usuario"}):e(X,{src:nt,alt:"Imagen por defecto"}),r(Qn,{children:[e(H,{children:t[0].name}),e(D,{children:t[0].description}),e(m,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Kn,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(Vn,{}),r(Nn,{children:[r("div",{children:[e("h6",{children:"Instagram"}),e(D,{small:!0,children:"danieel.u"})]}),r("div",{children:[e("h6",{children:"Correo"}),e(D,{small:!0,children:"daniusqueda582@gmail.com"})]}),r("div",{children:[e("h6",{children:"Telefono"}),e(D,{small:!0,children:"2945-550890"})]})]})]})},_n=({name:t,start:o,end:i})=>{const n=F(o).format("MM/YYYY"),a=F(i).format("MM/YYYY");return r(at,{children:[e(ee,{children:t}),e(D,{small:!0,children:r(so,{children:[e(Re,{}),n," - ",a]})})]})},Wn=()=>{const{data:t,isLoading:o}=it();return r(Ke,{children:[e(j,{margin:!0,children:"Estudios"}),o?e(G,{}):t.length!==0?e(rt,{children:t.map((i,n)=>e(st,{i:n,length:t.length,component:e(_n,g({},i))},i.id))}):e(V,{children:"No hay estudios que mostrar"})]})},Hn=({id:t,img:o,name:i,description:n,link:a})=>{const c=x(),l=z(h=>h.portfolio.active),d=()=>{c(he({id:t,img:o,name:i,description:n,link:a}))},u=()=>{c(O())};return r(ii,{children:[e(ei,{src:o,alt:i,onClick:d}),l&&l.id===t&&r(oi,{children:[e(ee,{children:i}),e(D,{smaill:!0,children:n}),a&&e(ti,{href:a,target:"_blank",children:r(m,{children:[e(Be,{}),"Ver proyecto"]})}),e(ni,{onClick:u,children:e(Ft,{})})]})]})},ei=s.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,ti=s.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,oi=s(Ae)`
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
`,ni=s.button`
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
`,ii=s.div`
    position: relative;
`,ai=()=>{const{data:t,isLoading:o}=lt();return r(Ke,{children:[e(j,{margin:!0,children:"Proyectos"}),o?e(G,{}):t.length!==0?e(ut,{children:e(dt,{children:t.map(i=>e(ze,{className:"portfolio__card",children:e(Hn,g({},i))},i.id))})}):e(V,{children:"No hay proyectos que mostrar"})]})},ri=()=>{const t=De(),[{email:o,password:i},n,a]=We({email:"",password:""}),{mutate:c}=Ht();return e(mt,{children:r(si,{onSubmit:d=>{d.preventDefault(),c({email:o,password:i},{onSuccess:()=>{t("/dashboard")}})},children:[e(j,{children:"Inicia Sesion"}),e(U,{type:"text",name:"email",label:"Correo electronico",value:o,onChange:n,reset:a}),e(U,{name:"password",label:"Contrase\xF1a",value:i,onChange:n,reset:a}),e(m,{children:"Enviar"})]})})},si=s.form`
   width: 90%;
   max-width: 400px;
   margin: 6em auto;
   background: linear-gradient(to top, rgba(0,0,0,.39), rgba(255,255,255,.09), rgba(255,255,255,.09) );
   backdrop-filter: blur(5px);
   padding: 5em 2em;
   border-radius: 20px;
   display: flex;
   flex-direction: column;

   @media (max-width: 500px) {
      padding: 5em 1em;
   }
`,ci=()=>{const{user:t}=z(o=>o.auth);return e(Qt,{children:r(Fe,{children:[r(A,{path:"/",element:e(zn,{}),children:[e(A,{index:!0,element:e(Xn,{})}),"k",e(A,{path:"education",element:e(Wn,{})}),e(A,{path:"portfolio",element:e(ai,{})}),e(A,{path:"*",element:e(ce,{to:"/"})})]}),e(A,{path:"/auth",element:e(ri,{})}),e(A,{path:"/dashboard/*",element:e(ao,{isLogged:!!t,children:e(Ln,{})})})]})})},li=({children:t})=>{const o=new Vt({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return r(Nt,{client:o,children:[t,e(Gt.exports.ReactQueryDevtools,{})]})},di=Zt({reducer:{about:lo,auth:_t,education:mo,experience:go,portfolio:ho}}),ui=({children:t})=>e(Kt,{store:di,children:t}),mi=()=>e(Jt,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),pi=()=>r(ui,{children:[e(li,{children:e(ci,{})}),e(mi,{})]});$t(document.getElementById("root")).render(e(pi,{}));
