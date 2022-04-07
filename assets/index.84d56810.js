var bt=Object.defineProperty,At=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var xe=(t,o,i)=>o in t?bt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,g=(t,o)=>{for(var i in o||(o={}))ye.call(o,i)&&xe(t,i,o[i]);if(K)for(var i of K(o))we.call(o,i)&&xe(t,i,o[i]);return t},S=(t,o)=>At(t,vt(o));var ke=(t,o)=>{var i={};for(var n in t)ye.call(t,n)&&o.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&K)for(var n of K(t))o.indexOf(n)<0&&we.call(t,n)&&(i[n]=t[n]);return i};import{c as Q,t as p,u as b,a as x,j as e,b as a,m as f,d as Le,r as v,N as ce,s,e as xt,F as R,B as yt,f as wt,I as Ue,g as Ye,A as kt,O as Be,M as Ct,h as je,i as St,k as le,l as w,n as It,o as z,p as de,q as Oe,v as Re,w as ue,x as me,y as ze,z as Et,C as Mt,D as F,E as Pt,G as Ce,H as Tt,J as Dt,S as Lt,K as Ut,P as Yt,L as Fe,Q as Bt,R as Qe,T as A,U as jt,V as Ot,W as Rt,X as Ve,Y as zt,Z as Ft,_ as Qt,$ as Vt,a0 as Nt,a1 as Gt,a2 as Zt,a3 as Kt,a4 as Jt,a5 as $t,a6 as qt,a7 as Xt}from"./vendor.3f5c859c.js";const _t=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}};_t();const Ne=Q({name:"auth",initialState:{user:null},reducers:{login:(t,o)=>{t.user=o.payload},logout:t=>{t.user=null}}}),{login:Ge,logout:Wt}=Ne.actions;var Ht=Ne.reducer;const q="https://street-carlitos.herokuapp.com/api",W=async(t,o,i)=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},r=o==="POST"?await fetch(q+t,n):await fetch(q+t),c=await r.json();if(!r.ok)throw c.map(l=>p.error(l)),new Error;return c},I=async(t,o,i)=>{var d;const n=(d=localStorage.getItem("token"))!=null?d:"";let r=o==="GET"||o==="DELETE"?{method:o,headers:{"access-token":n}}:{method:o,headers:{"access-token":n,"Content-Type":"application/json"},body:JSON.stringify(i)};const c=await fetch(q+t,r),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},Ze=async(t,o,{file:i})=>{var d;const n=(d=localStorage.getItem("token"))!=null?d:"",r={method:o,headers:{"access-token":n},body:i},c=await fetch(q+t,r),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},eo=t=>W("/auth/login","POST",t),to=()=>{const t=x();return b(eo,{onSuccess:({id:o,name:i,email:n,token:r})=>{p.success(`Bienvenido ${i}`),localStorage.setItem("token",r),t(Ge({id:o,name:i,email:n}))}})},oo=()=>{const t=x();return b(()=>I("/auth/renew","GET"),{onSuccess:({id:o,name:i,email:n,token:r})=>{localStorage.setItem("token",r),t(Ge({id:o,name:i,email:n}))}})},no={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},io={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},oe={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},ao={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ne={hidden:{y:"0%"},visible:{y:"100%"}},ie={duration:.8,repeat:"Infinity",ease:"circInOut"},ro=()=>e("div",{style:no,children:a(f.div,{style:io,variants:ao,initial:"hidden",animate:"visible",children:[e(f.span,{style:oe,variants:ne,transition:ie}),e(f.span,{style:oe,variants:ne,transition:ie}),e(f.span,{style:oe,variants:ne,transition:ie})]})}),so=({children:t,isLogged:o})=>{const i=localStorage.getItem("token"),n=Le(),{mutate:r,isLoading:c}=oo();return v.exports.useEffect(()=>{i&&(r(),n("/dashboard"))},[]),c?e(ro,{}):o?t:e(ce,{to:"/auth"})},Ke=s.img`
  width: 3em;
  height: 3em;
`,co=s.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,lo=s.p`
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
`,Je=s.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,J=s(xt)`
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
   position: relative;
   flex: 1 1 auto;
   overflow-y: scroll;
`,uo=s.div`
  display: flex;
  margin-top: 2em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`,ge=s.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 90%;
  margin: auto;
  margin-bottom: 1em;
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
`,$e=Q({name:"about",initialState:{active:null},reducers:{aboutActive:(t,o)=>{t.active=o.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:he,clearAboutActive:qe}=$e.actions;var mo=$e.reducer;const Xe=Q({name:"education",initialState:{active:null},reducers:{educationActive:(t,o)=>{t.active=o.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:po,clearEducationActive:_}=Xe.actions;var go=Xe.reducer;const _e=Q({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,o)=>{t.active=o.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:bi,clearExperienceActive:ho}=_e.actions;var fo=_e.reducer;const We=Q({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,o)=>{t.active=o.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:fe,clearPortfolioActive:O}=We.actions;var bo=We.reducer,He="data:image/png;base64,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";const Ao=()=>{const t=x(),o=v.exports.useRef(null),i=()=>o.current.classList.toggle("toggle"),n=()=>{localStorage.removeItem("token"),t(Wt()),t(qe()),t(_()),t(ho()),t(O())};return a(R,{children:[a(yo,{ref:o,children:[a(vo,{children:[e(Ke,{src:He,alt:"logo carlitos"}),e(co,{onClick:n,children:e(yt,{})})]}),e(H,{margin:!0,children:"Informacion"}),a("div",{children:[a($,{onClick:i,to:"/dashboard/",children:[e(wt,{})," Acerca de mi"]}),a($,{onClick:i,to:"education",children:[e(Ue,{})," Educacion"]}),a($,{onClick:i,to:"portfolio",children:[e(Ye,{})," Proyectos"]})]}),e(wo,{onClick:n,to:"/",children:"Ir al portafolio"})]}),e(xo,{onClick:i,children:e(kt,{})})]})},vo=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,xo=s.button`
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
`,yo=s.nav`
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
`,wo=s($)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,ko=()=>a(Co,{children:[e(Ao,{}),e(So,{children:e(Be,{})})]}),Co=s.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,So=s.div`
  width: 100%;
`,et=t=>{const[o,i]=v.exports.useState(t);return[o,l=>{i(S(g({},o),{[l.target.name]:l.target.value}))},l=>{i(S(g({},o),{[l]:""}))},()=>{i(t)}]},Io=s.label`
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
`,Eo=s.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`,tt=s.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,Mo=s(tt)`
   right: 1.5em;
`,Po=s.input`
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
`,U=t=>{const[o,i]=v.exports.useState(!1),{icon:n,value:r,label:c,name:l,reset:d}=t,u=()=>d(l),h=()=>i(!o);return a(Eo,{children:[a(Io,{className:r&&"active",children:[!r&&n," ",c]}),e(Po,S(g({},t),{type:l==="password"&&!o?"password":"text",autoComplete:"off"})),r&&e(tt,{onClick:u,children:e(Ct,{})}),l==="password"&&r&&e(Mo,{onClick:h,children:o?e(je,{}):e(St,{})})]})},m=t=>e(ot,S(g({},t),{color:t.color,children:e("div",{children:t.children})})),ot=s.button`
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
`;var be="/assets/fondo.02bdd8a8.jpg";const Ae=({children:t})=>e(To,{children:e(Do,{children:t})}),To=s.div`
  height: 50vh;
  background-image: url(${be}) ;
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
`,Do=s.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,N="about",Lo=()=>W("/about"),nt=()=>{const t=x();return le([N],Lo,{onSuccess:o=>t(he(o[0]))})},Uo=t=>I("/about","POST",t),Yo=()=>{const t=x(),o=w();return b(Uo,{onSuccess:i=>{p.success("Informacion agregada"),o.setQueryData([N],()=>[i]),t(he(i))}})},Bo=t=>Ze(`/uploads/about/${t.id}`,"POST",t),jo=()=>{const t=x(),o=w();return b(Bo,{onSuccess:i=>{p.success("Imagen agregada"),o.setQueryData([N],()=>[i]),t(he(i))}})},Oo=t=>I(`/about/${t.id}`,"PUT",t),Ro=()=>{const t=w();return b(Oo,{onSuccess:o=>{p.success("Informacion actualizada"),t.setQueryData([N],i=>i.map(n=>n.id===o.id?o:n))}})},zo=t=>I(`/about/${t}`,"DELETE"),Fo=()=>{const t=x(),o=w();return b(zo,{onSuccess:i=>{p.success("Informacion eliminada"),o.setQueryData([N],n=>n.filter(r=>r.id!==i.id)),t(qe())}})},Qo=s(ot)`
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
   
`,it=t=>a(Qo,{children:[a("span",{children:[e(It,{})," ",t.text?t.text:"Imagen"]}),e("input",S(g({},t),{type:"file",name:"file",id:"file"}))]}),Vo={position:"relative",width:"1em",height:"1em"},No={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},Go={rotate:360},Zo={duration:1,loop:"Infinity"},y=()=>e("div",{style:Vo,children:e(f.span,{style:No,animate:Go,transition:Zo})}),Ko={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Jo={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ae={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},$o={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},re={hidden:{y:"0%"},visible:{y:"100%"}},se={duration:.8,repeat:"Infinity",ease:"circInOut"},G=()=>e("div",{style:Ko,children:a(f.div,{style:Jo,variants:$o,initial:"hidden",animate:"visible",children:[e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se})]})}),qo={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},Xo=({children:t})=>e(f.div,{variants:qo,initial:"hidden",animate:"visible",exit:"exit",children:t});var at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEwACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8P0APOAAAADHRSTlMA8lcmiEGkvdJuEOMxsOlHAAAC5klEQVRYw+1Yv2/TUBB+rdOEpkslOlTFQ1AlVJCHqhJUQh5CVbYMGShFIoOZ6JChKgIklKEg0S4ZgrpBh7QDYmCAAaYuzu+S+6OIU8t+7+78nr2B1G/0+XPu3v36XoS4xv+D4sbd7e2t1XZqwvnL9zDF8puTVIS5PRtiHJXMjKcXoGB8YHCv+AUIlta1jEfAYKDhFCsAGTmfIAFLSfFsQiJ+8Yx50KDMBlLXUUZcOM9Biw5lzIIB1LVTE2WAGTkwYh9RKmbKMPOPAHjZIgnQU3qE2m/91B+ai42/V4XY2NPlBrUVvA7bDXPi6szzDCEeIMNhRKklhnlbtVxGBlt57ldjioVcXueTclM+y2+8Zy7/pauWuGDPrKmrcvV7YzaPnrZXW9OHN7jvxGgo5hXmiEn3uUwC1M/8wJQ8dcJSnSVjm7GrWfHpVGiQ3lxI7gmul7ok+j6luKTM1K7/QylqEkakJg8pJYd7xtLmnsl/CU/JlnGOergjzZRFMWPIJCnbLm4WM6WP+75lpFwKJ2ssAzy/y8ZDHoq6fiNQygg1/uQICQpIoQgAUqgI3wG1h500DyM4BsqYUuoGCtD9DibKvkl0UAqJf4ZQDHuX7mof54UUpoXtY0HEDvJsgQggqhFGbd0RB547euGRZ7RMjQqPtu5HJvXhUkXwUasd++TYlaaZt6mxyzg7OYGwN2cbjHGRqL2jKWcriOdJk9dLaqr8x+GgX34bXi9691+QVMtbenhvMlBsND+Ka7jUpVwOp7riq/zCq+DJMzT5HcQQYjd+4cPVkzW1bc+iOKIZthv65h/QTdaV18c76WoV3JT8489xPTflcrLYQWHt7Dxk91JJ2rhV/f3pVN7YTtJe5SZzT1qfVdO9zpE0zFzCxYGdNOVYv3rm62NDEh81dkiys7kTN2snBSUn6yibUwgUtjR+HSiloVQkUZT3U13Ta7K+SxN9kEBpLdxJRSl0RFYUvMwU6/ofmn8ZfwEqPdZRx3i98QAAAABJRU5ErkJggg==";const _o=()=>{const t=z(P=>P.about.active),[{name:o,description:i},n,r,c]=et({name:"",description:""}),{isLoading:l}=nt(),{mutate:d,isLoading:u}=Ro(),{mutate:h,isLoading:k}=Fo(),{mutate:E,isLoading:Y}=Yo(),{mutate:B}=jo(),M=P=>{P.preventDefault(),t?d({id:t.id,name:o,description:i},{onSuccess:()=>c()}):E({name:o,description:i},{onSuccess:()=>c()})},L=()=>{h(t.id)},C=P=>{const T=new FormData;T.append("file",P.target.files[0]),B({id:t.id,file:T})};return a(R,{children:[e(Ae,{children:l?e(G,{}):t?a(R,{children:[a(Xo,{children:[t.img?e(X,{src:t.img,alt:"imagen de usuario"}):e(X,{src:at,alt:"Imagen por defecto"}),e(H,{margin:!0,children:t.name}),e(D,{children:t.description})]}),a(uo,{children:[e(it,{onChange:C}),a(m,{color:"red",onClick:L,children:[" ",k?e(y,{}):e(de,{})," Eliminar"]})]})]}):e(V,{children:"Ingresa tus datos"})}),a(pe,{onSubmit:M,children:[e(j,{children:"Quien eres?"}),e(U,{type:"text",icon:e(Oe,{}),name:"name",value:o,label:"Nombre",onChange:n,reset:r}),e(U,{type:"text",icon:e(Re,{}),name:"description",value:i,label:"Descripcion",onChange:n,reset:r}),e(ge,{children:t?a(m,{children:[" ",u?e(y,{}):e(ue,{})," Actualizar"]}):a(m,{children:[" ",Y?e(y,{}):e(me,{})," Guardar"]})})]})]})};const Wo=t=>{const{value:o,name:i,toggle:n,setToggle:r}=t;return a(en,{children:[a(Ho,{className:o&&"active",children:[!o&&e(ze,{})," ",i==="start"?"Inicio":"Fin"]}),e(tn,S(g({},t),{type:"text",autoComplete:"off"})),n?e(Se,{onClick:()=>r(!1),children:e(Et,{})}):e(Se,{onClick:()=>r(!0),children:e(Mt,{})})]})},Ho=s.label`
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
`,en=s.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,Se=s.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,tn=s.input`
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
`,Ie=({name:t,date:o,setDate:i})=>{const[n,r]=v.exports.useState(!1),c=o?F(o).format("DD/MM/YYYY"):"";return a("div",{children:[e(Wo,{name:t,value:c,onChange:()=>{},toggle:n,setToggle:r}),e(on,{children:n&&e(Pt,{onClickDay:d=>{i(d),r(!1)}})})]})},on=s.div`
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
`,nn=s.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,te="education",an=()=>W("/education"),rt=()=>le([te],an),rn=t=>I("/education","POST",t),sn=()=>{const t=w();return b(rn,{onSuccess:o=>{p.success("Estudio agregado"),t.setQueryData([te],i=>[...i,o])}})},cn=t=>I(`/education/${t.id}`,"PUT",t),ln=()=>{const t=w();return b(cn,{onSuccess:o=>{p.success("Estudio actualizado"),t.setQueryData([te],i=>i.map(n=>n.id===o.id?o:n))}})},dn=t=>I(`/education/${t}`,"DELETE"),un=()=>{const t=w();return b(dn,{onSuccess:o=>{p.success("Estudio eliminado"),t.setQueryData([te],i=>i.filter(n=>n.id!==o.id))}})},Ee=s.div`
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
`,st=s.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`,Me=s.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Pe=s.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`,ve=s.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`,mn={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},pn={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},ct=({children:t})=>e(f.div,{variants:mn,initial:"hidden",animate:"visible",children:t}),gn=({children:t})=>e(f.div,{variants:pn,children:t}),lt=({i:t,length:o,component:i})=>{const n=t%2===0,r=o===t+1;return e(gn,{children:n?a(Ee,{children:[i,a("span",{children:[e(Me,{children:e(Ce,{})}),!r&&e(Pe,{})]}),e("span",{})]}):a(Ee,{children:[e("span",{}),a("span",{children:[e(Me,{children:e(Ce,{})}),!r&&e(Pe,{})]}),i]})})},dt=(t,o,i)=>{const[n,r]=v.exports.useState(t);return[n,r,u=>{r(S(g({},n),{[u.target.name]:u.target.value}))},u=>{r(S(g({},n),{[u]:""}))},()=>{r(t),o&&i&&(o(""),i(""))}]},hn=({id:t,name:o,start:i,end:n})=>{const{mutate:r,isLoading:c}=un(),l=F(i).format("DD/MM/YYYY"),d=F(n).format("DD/MM/YYYY"),u=x();return a(st,{children:[e(ee,{children:o}),a(D,{small:!0,children:[l," - ",d]}),a(ve,{children:[a(m,{onClick:()=>{u(po({id:t,name:o,start:i,end:n}))},children:[e(Tt,{})," Editar"]}),a(m,{color:"red",onClick:()=>{r(t),u(_())},children:[" ",c?e(y,{}):e(de,{})," Eliminar"]})]})]})},fn=()=>{const t=z(T=>T.education.active),o=x(),[i,n]=v.exports.useState(),[r,c]=v.exports.useState(),[{name:l},d,u,h,k]=dt({name:""},n,c),{data:E,isLoading:Y}=rt(),{mutate:B,isLoading:M}=sn(),{mutate:L,isLoading:C}=ln();v.exports.useEffect(()=>{t?(d(t),n(t.start),c(t.end)):k()},[t]);const P=T=>{T.preventDefault(),t?L({id:t.id,name:l,start:i,end:r},{onSuccess:()=>o(_())}):B({name:l,start:i,end:r},{onSuccess:()=>k()})};return a(R,{children:[e(Ae,{children:Y?e(G,{}):E.length!==0?e(ct,{children:E.map((T,ft)=>e(lt,{i:ft,length:E.length,component:e(hn,g({},T))},T.id))}):e(V,{children:"Ingresa tu estudios"})}),a(pe,{onSubmit:P,children:[e(j,{children:"Cuales son tus estudios?"}),e(U,{type:"text",icon:e(Dt,{}),name:"name",label:"Escuela",value:l,onChange:u,reset:h}),a(nn,{children:[e(Ie,{name:"start",date:i,setDate:n}),e(Ie,{name:"end",date:r,setDate:c})]}),a(ge,{children:[t?a(m,{children:[" ",C?e(y,{}):e(ue,{})," Actualizar"]}):a(m,{children:[" ",M?e(y,{}):e(me,{})," Guardar"]}),t&&e(m,{onClick:()=>o(_()),children:"Cancelar"})]})]})]})},Z="portfolio",bn=()=>W("/portfolio"),ut=()=>le([Z],bn),An=t=>I("/portfolio","POST",t),vn=()=>{const t=w();return b(An,{onSuccess:o=>{p.success("Proyecto agregado"),t.setQueryData([Z],i=>[...i,o])}})},xn=t=>Ze(`/uploads/portfolio/${t.id}`,"POST",t),yn=()=>{const t=w();return b(xn,{onSuccess:o=>{p.success("Imagen agregada"),t.setQueryData([Z],i=>i.map(n=>n.id===o.id?o:n))}})},wn=t=>I(`/portfolio/${t.id}`,"PUT",t),kn=()=>{const t=w();return b(wn,{onSuccess:o=>{p.success("Proyecto actualizado"),t.setQueryData([Z],i=>i.map(n=>n.id===o.id?o:n))}})},Cn=t=>I(`/portfolio/${t}`,"DELETE"),Sn=()=>{const t=w();return b(Cn,{onSuccess:o=>{p.success("Proyecto eliminado"),t.setQueryData([Z],i=>i.filter(n=>n.id!==o.id))}})},In=({id:t,img:o,name:i,description:n,link:r})=>{const c=x(),l=z(M=>M.portfolio.active),{mutate:d,isLoading:u}=Sn(),{mutate:h,isLoading:k}=yn(),E=()=>{c(fe({id:t,img:o,name:i,description:n,link:r}))},Y=()=>{d(t),c(O())},B=M=>{const L=new FormData;L.append("file",M.target.files[0]),h({id:t,file:L},{onSuccess:()=>c(O())})};return a(Dn,{children:[k?e(En,{children:e(y,{})}):e(Mn,{src:o,alt:i,onClick:E}),!k&&l&&l.id===t&&a(Pn,{children:[e(Tn,{children:i}),e(Te,{smaill:!0,children:n}),e(Te,{smaill:!0,children:r}),a(m,{color:"red",onClick:Y,children:[u?e(y,{}):e(de,{})," Eliminar"]}),e(it,{text:"Agregar imagen",onChange:B}),e(m,{onClick:()=>c(O()),children:"Cancelar"})]})]})},En=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,Mn=s.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,Pn=s(ve)`
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
`,Tn=s(ee)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Te=s(D)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Dn=s.div`
    position: relative;
`;const mt=({children:t})=>e(Lt,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Ut,Yt],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),Ln={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},pt=({children:t})=>e(f.div,{variants:Ln,initial:"hidden",animate:"visible",exit:"exit",children:t}),Un=()=>{const t=x(),o=z(C=>C.portfolio.active),[{name:i,description:n,link:r},c,l,d,u]=dt({name:"",description:"",link:""}),{data:h,isLoading:k}=ut(),{mutate:E,isLoading:Y}=vn(),{mutate:B,isLoading:M}=kn();v.exports.useEffect(()=>{o?c(o):u()},[o]);const L=C=>{C.preventDefault(),o?B({id:o.id,name:i,description:n,link:r},{onSuccess:()=>t(O())}):E({name:i,description:n,link:r},{onSuccess:P=>t(fe(P))})};return a(R,{children:[e(Ae,{children:k?e(G,{}):h.length!==0?e(pt,{children:e(mt,{children:h.map(C=>e(Fe,{className:"portfolio__card",children:e(In,g({},C))},C.id))})}):e(V,{children:"Ingresa tus proyectos"})}),a(pe,{onSubmit:L,children:[e(j,{children:"Cuales son tus proyectos?"}),e(U,{type:"text",icon:e(Oe,{}),name:"name",value:i,label:"Nombre",onChange:l,reset:d}),e(U,{type:"text",icon:e(Re,{}),name:"description",value:n,label:"Descripcion",onChange:l,reset:d}),e(U,{type:"text",icon:e(Bt,{}),name:"link",value:r,label:"Link (opcional)",onChange:l,reset:d}),e(ge,{children:o?a(m,{margin:!0,children:[" ",M?e(y,{}):e(ue,{})," Actualizar"]}):a(m,{margin:!0,children:[" ",Y?e(y,{}):e(me,{})," Guardar"]})})]})]})},Yn=()=>e(Qe,{children:a(A,{path:"/",element:e(ko,{}),children:[e(A,{index:!0,element:e(_o,{})}),e(A,{path:"education",element:e(fn,{})}),e(A,{path:"portfolio",element:e(Un,{})}),e(A,{path:"*",element:e(ce,{to:"/dashboard/"})})]})}),Bn=s.div`
  background-image: url(${be}) ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`,jn=s.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,De=s.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,gt=({children:t,noPadding:o})=>a(Bn,{children:[e("div",{}),e(De,{}),e("div",{}),e(De,{}),e(jn,{noPadding:o,children:t})]}),On=s.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,Rn=s.div`
  display: flex;
  align-items: center;
`,zn=()=>a(On,{children:[e(jt,{to:"/auth",children:e(Ke,{src:He,alt:"logo carlitos"})}),a(Rn,{children:[a(J,{to:"/",children:[e(Ot,{}),e("span",{children:"Inicio"})]}),a(J,{to:"/education",children:[e(Ue,{}),e("span",{children:"Educacion"})]}),a(J,{to:"/portfolio",children:[e(Ye,{}),e("span",{children:"Portafolio"})]})]})]}),Fn=()=>e(R,{children:a(gt,{children:[e(zn,{}),e(Be,{})]})}),ht=s.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,Qn=s.div`
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
`,Vn=s.div`
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
`,Nn=s.div`
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
   box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,Gn=s.div`
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
`,Zn=s.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,Kn=s.div`
   background-image: url(${be}) ;
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
      ${ht}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`;var Jn="/assets/cv_carlos.6cd29141.pdf";const $n=()=>e(Rt,{makeDefault:!0,fov:12,position:[-10,5,-5]});function qn(o){var t=ke(o,[]);const i=v.exports.useRef(),{nodes:n,materials:r}=Ve("/micro/scene.gltf");return e("group",S(g({ref:i},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:a("group",{rotation:[Math.PI/2,0,0],children:[e("mesh",{geometry:n.defaultMaterial.geometry,material:n.defaultMaterial.material}),e("mesh",{geometry:n.defaultMaterial_1.geometry,material:n.defaultMaterial_1.material}),e("mesh",{geometry:n.defaultMaterial_2.geometry,material:n.defaultMaterial_2.material}),e("mesh",{geometry:n.defaultMaterial_3.geometry,material:n.defaultMaterial_3.material}),e("mesh",{geometry:n.defaultMaterial_4.geometry,material:n.defaultMaterial_4.material}),e("mesh",{geometry:n.defaultMaterial_5.geometry,material:n.defaultMaterial_5.material}),e("mesh",{geometry:n.defaultMaterial_6.geometry,material:n.defaultMaterial_6.material}),e("mesh",{geometry:n.defaultMaterial_7.geometry,material:n.defaultMaterial_7.material}),e("mesh",{geometry:n.defaultMaterial_8.geometry,material:n.defaultMaterial_8.material}),e("mesh",{geometry:n.defaultMaterial_9.geometry,material:n.defaultMaterial_9.material}),e("mesh",{geometry:n.defaultMaterial_10.geometry,material:n.defaultMaterial_10.material}),e("mesh",{geometry:n.defaultMaterial_11.geometry,material:n.defaultMaterial_11.material}),e("mesh",{geometry:n.defaultMaterial_12.geometry,material:n.defaultMaterial_12.material}),e("mesh",{geometry:n.defaultMaterial_13.geometry,material:n.defaultMaterial_13.material}),e("mesh",{geometry:n.defaultMaterial_14.geometry,material:n.defaultMaterial_14.material}),e("mesh",{geometry:n.defaultMaterial_15.geometry,material:n.defaultMaterial_15.material}),e("mesh",{geometry:n.defaultMaterial_16.geometry,material:n.defaultMaterial_16.material})]})})}))}Ve.preload("/micro/scene.gltf");const Xn=()=>a(zt,{children:[e($n,{}),e("pointLight",{color:"#0000ff",position:[10,-5,5]}),e("pointLight",{color:"#0000ff",position:[50,10,-10]}),e("pointLight",{color:"#ffffff",position:[0,0,100]}),a(v.exports.Suspense,{fallback:null,children:[e(qn,{}),e(Ft,{files:"/hdr/decor_shop_1k.jpg",preset:"night"})]}),e(Qt,{enablePan:!1,autoRotate:!0,enableZoom:!1})]}),_n=()=>{const{data:t,isLoading:o}=nt();return a(Kn,{children:[e(Zn,{children:e(Xn,{})}),e(ht,{children:o?e(y,{}):t[0]&&a(Qn,{children:[t[0].img?e(X,{src:t[0].img,alt:"imagen de usuario"}):e(X,{src:at,alt:"Imagen por defecto"}),a(Vn,{children:[e(H,{children:t[0].name}),e(D,{children:t[0].description}),e(m,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Jn,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(Nn,{}),a(Gn,{children:[a("div",{children:[e("h6",{children:"Instagram"}),e(D,{small:!0,children:"danieel.u"})]}),a("div",{children:[e("h6",{children:"Correo"}),e(D,{small:!0,children:"daniusqueda582@gmail.com"})]}),a("div",{children:[e("h6",{children:"Telefono"}),e(D,{small:!0,children:"2945-550890"})]})]})]})},Wn=({name:t,start:o,end:i})=>{const n=F(o).format("MM/YYYY"),r=F(i).format("MM/YYYY");return a(st,{children:[e(ee,{children:t}),e(D,{small:!0,children:a(lo,{children:[e(ze,{}),n," - ",r]})})]})},Hn=()=>{const{data:t,isLoading:o}=rt();return a(Je,{children:[e(j,{margin:!0,children:"Estudios"}),o?e(G,{}):t.length!==0?e(ct,{children:t.map((i,n)=>e(lt,{i:n,length:t.length,component:e(Wn,g({},i))},i.id))}):e(V,{children:"No hay estudios que mostrar"})]})},ei=({id:t,img:o,name:i,description:n,link:r})=>{const c=x(),l=z(h=>h.portfolio.active),d=()=>{c(fe({id:t,img:o,name:i,description:n,link:r}))},u=()=>{c(O())};return a(ai,{children:[e(ti,{src:o,alt:i,onClick:d}),l&&l.id===t&&a(ni,{children:[e(ee,{children:i}),e(D,{smaill:!0,children:n}),r&&e(oi,{href:r,target:"_blank",children:a(m,{children:[e(je,{}),"Ver proyecto"]})}),e(ii,{onClick:u,children:e(Vt,{})})]})]})},ti=s.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,oi=s.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,ni=s(ve)`
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
`,ii=s.button`
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
`,ai=s.div`
    position: relative;
`,ri=()=>{const{data:t,isLoading:o}=ut();return a(Je,{children:[e(j,{margin:!0,children:"Proyectos"}),o?e(G,{}):t.length!==0?e(pt,{children:e(mt,{children:t.map(i=>e(Fe,{className:"portfolio__card",children:e(ei,g({},i))},i.id))})}):e(V,{children:"No hay proyectos que mostrar"})]})},si=()=>{const t=Le(),[{email:o,password:i},n,r]=et({email:"",password:""}),{mutate:c}=to();return e(gt,{children:a(ci,{onSubmit:d=>{d.preventDefault(),c({email:o,password:i},{onSuccess:()=>{t("/dashboard")}})},children:[e(j,{children:"Inicia Sesion"}),e(U,{type:"text",name:"email",label:"Correo electronico",value:o,onChange:n,reset:r}),e(U,{name:"password",label:"Contrase\xF1a",value:i,onChange:n,reset:r}),e(m,{children:"Enviar"})]})})},ci=s.form`
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
`,li=()=>{const{user:t}=z(o=>o.auth);return e(Nt,{children:a(Qe,{children:[a(A,{path:"/",element:e(Fn,{}),children:[e(A,{index:!0,element:e(_n,{})}),"k",e(A,{path:"education",element:e(Hn,{})}),e(A,{path:"portfolio",element:e(ri,{})}),e(A,{path:"*",element:e(ce,{to:"/"})})]}),e(A,{path:"/auth",element:e(si,{})}),e(A,{path:"/dashboard/*",element:e(so,{isLogged:!!t,children:e(Yn,{})})})]})})},di=({children:t})=>{const o=new Gt({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return a(Zt,{client:o,children:[t,e(Kt.exports.ReactQueryDevtools,{})]})},ui=Jt({reducer:{about:mo,auth:Ht,education:go,experience:fo,portfolio:bo}}),mi=({children:t})=>e($t,{store:ui,children:t}),pi=()=>e(qt,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),gi=()=>a(mi,{children:[e(di,{children:e(li,{})}),e(pi,{})]});Xt(document.getElementById("root")).render(e(gi,{}));
