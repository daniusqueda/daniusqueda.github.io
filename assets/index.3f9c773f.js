var gt=Object.defineProperty,ht=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var xe=(t,n,o)=>n in t?gt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,m=(t,n)=>{for(var o in n||(n={}))ft.call(n,o)&&xe(t,o,n[o]);if(ve)for(var o of ve(n))bt.call(n,o)&&xe(t,o,n[o]);return t},D=(t,n)=>ht(t,mt(n));import{c as Q,t as g,u as b,a as v,j as e,b as r,m as f,d as Te,r as C,N as se,s,e as At,F as R,B as vt,f as xt,I as De,g as Le,A as yt,O as Ue,M as wt,h as Ye,i as kt,k as ce,l as y,n as Ct,o as z,p as le,q as Be,v as Me,w as de,x as ue,y as je,z as St,C as It,D as F,E as Et,G as ye,H as Pt,J as Tt,S as Dt,K as Lt,P as Ut,L as Oe,Q as Yt,R as Re,T as A,U as Bt,V as Mt,W as jt,X as Ot,Y as Rt,Z as zt,_ as Ft,$ as Qt,a0 as Vt,a1 as Nt,a2 as Gt}from"./vendor.fe4ed91a.js";const Kt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}};Kt();const ze=Q({name:"auth",initialState:{user:null},reducers:{login:(t,n)=>{t.user=n.payload},logout:t=>{t.user=null}}}),{login:Fe,logout:Zt}=ze.actions;var Jt=ze.reducer;const $="https://street-carlitos.herokuapp.com/api",W=async(t,n,o)=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},a=n==="POST"?await fetch($+t,i):await fetch($+t),c=await a.json();if(!a.ok)throw c.map(l=>g.error(l)),new Error;return c},S=async(t,n,o)=>{var d;const i=(d=localStorage.getItem("token"))!=null?d:"";let a=n==="GET"||n==="DELETE"?{method:n,headers:{"access-token":i}}:{method:n,headers:{"access-token":i,"Content-Type":"application/json"},body:JSON.stringify(o)};const c=await fetch($+t,a),l=await c.json();if(!c.ok)throw l.map(u=>g.error(u)),new Error;return l},Qe=async(t,n,{file:o})=>{var d;const i=(d=localStorage.getItem("token"))!=null?d:"",a={method:n,headers:{"access-token":i},body:o},c=await fetch($+t,a),l=await c.json();if(!c.ok)throw l.map(u=>g.error(u)),new Error;return l},$t=t=>W("/auth/login","POST",t),qt=()=>{const t=v();return b($t,{onSuccess:({id:n,name:o,email:i,token:a})=>{g.success(`Bienvenido ${o}`),localStorage.setItem("token",a),t(Fe({id:n,name:o,email:i}))}})},Xt=()=>{const t=v();return b(()=>S("/auth/renew","GET"),{onSuccess:({id:n,name:o,email:i,token:a})=>{localStorage.setItem("token",a),t(Fe({id:n,name:o,email:i}))}})},Wt={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},Ht={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},te={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},_t={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ne={hidden:{y:"0%"},visible:{y:"100%"}},oe={duration:.8,repeat:"Infinity",ease:"circInOut"},en=()=>e("div",{style:Wt,children:r(f.div,{style:Ht,variants:_t,initial:"hidden",animate:"visible",children:[e(f.span,{style:te,variants:ne,transition:oe}),e(f.span,{style:te,variants:ne,transition:oe}),e(f.span,{style:te,variants:ne,transition:oe})]})}),tn=({children:t,isLogged:n})=>{const o=localStorage.getItem("token"),i=Te(),{mutate:a,isLoading:c}=Xt();return C.exports.useEffect(()=>{o&&(a(),i("/dashboard"))},[]),c?e(en,{}):n?t:e(se,{to:"/auth"})},Ve=s.img`
  width: 3em;
  height: 3em;
`,nn=s.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,on=s.p`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,q=s.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`,Ne=s.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,Z=s(At)`
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
`,an=s.div`
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
`,_=s.h3`
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: .8em;
  font-weight: bold;
  margin: 0;
  margin-bottom: .5em;
`,L=s.p`
  text-align: ${({initial:t})=>t?"initial":"center"};
  font-size: ${({small:t})=>t?".8em":".9em"};
  color: gray;
  margin: 0;
`,Ge=Q({name:"about",initialState:{active:null},reducers:{aboutActive:(t,n)=>{t.active=n.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:he,clearAboutActive:Ke}=Ge.actions;var rn=Ge.reducer;const Ze=Q({name:"education",initialState:{active:null},reducers:{educationActive:(t,n)=>{t.active=n.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:sn,clearEducationActive:X}=Ze.actions;var cn=Ze.reducer;const Je=Q({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,n)=>{t.active=n.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:ci,clearExperienceActive:ln}=Je.actions;var dn=Je.reducer;const $e=Q({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,n)=>{t.active=n.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:me,clearPortfolioActive:O}=$e.actions;var un=$e.reducer,qe="data:image/png;base64,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";const pn=()=>{const t=v(),n=C.exports.useRef(null),o=()=>n.current.classList.toggle("toggle"),i=()=>{localStorage.removeItem("token"),t(Zt()),t(Ke()),t(X()),t(ln()),t(O())};return r(R,{children:[r(mn,{ref:n,children:[r(gn,{children:[e(Ve,{src:qe,alt:"logo carlitos"}),e(nn,{onClick:i,children:e(vt,{})})]}),e(H,{margin:!0,children:"Informacion"}),r("div",{children:[r(J,{onClick:o,to:"/dashboard/",children:[e(xt,{})," Acerca de mi"]}),r(J,{onClick:o,to:"education",children:[e(De,{})," Educacion"]}),r(J,{onClick:o,to:"portfolio",children:[e(Le,{})," Proyectos"]})]}),e(fn,{onClick:i,to:"/",children:"Ir al portafolio"})]}),e(hn,{onClick:o,children:e(yt,{})})]})},gn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,hn=s.button`
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
`,mn=s.nav`
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
  `,J=s(Z)`
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
`,fn=s(J)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,bn=()=>r(An,{children:[e(pn,{}),e(vn,{children:e(Ue,{})})]}),An=s.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,vn=s.div`
  width: 100%;
`,Xe=t=>{const[n,o]=C.exports.useState(t);return[n,l=>{o(D(m({},n),{[l.target.name]:l.target.value}))},l=>{o(D(m({},n),{[l]:""}))},()=>{o(t)}]},xn=s.label`
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
`,yn=s.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`,We=s.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,wn=s(We)`
   right: 1.5em;
`,kn=s.input`
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
`,Y=t=>{const[n,o]=C.exports.useState(!1),{icon:i,value:a,label:c,name:l,reset:d}=t,u=()=>d(l),h=()=>o(!n);return r(yn,{children:[r(xn,{className:a&&"active",children:[!a&&i," ",c]}),e(kn,D(m({},t),{type:l==="password"&&!n?"password":"text",autoComplete:"off"})),a&&e(We,{onClick:u,children:e(wt,{})}),l==="password"&&a&&e(wn,{onClick:h,children:n?e(Ye,{}):e(kt,{})})]})},p=t=>e(He,D(m({},t),{color:t.color,children:e("div",{children:t.children})})),He=s.button`
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
`;var fe="/assets/fondo.02bdd8a8.jpg";const be=({children:t})=>e(Cn,{children:e(Sn,{children:t})}),Cn=s.div`
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
`,Sn=s.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,N="about",In=()=>W("/about"),_e=()=>{const t=v();return ce([N],In,{onSuccess:n=>t(he(n[0]))})},En=t=>S("/about","POST",t),Pn=()=>{const t=v(),n=y();return b(En,{onSuccess:o=>{g.success("Informacion agregada"),n.setQueryData([N],()=>[o]),t(he(o))}})},Tn=t=>Qe(`/uploads/about/${t.id}`,"POST",t),Dn=()=>{const t=v(),n=y();return b(Tn,{onSuccess:o=>{g.success("Imagen agregada"),n.setQueryData([N],()=>[o]),t(he(o))}})},Ln=t=>S(`/about/${t.id}`,"PUT",t),Un=()=>{const t=y();return b(Ln,{onSuccess:n=>{g.success("Informacion actualizada"),t.setQueryData([N],o=>o.map(i=>i.id===n.id?n:i))}})},Yn=t=>S(`/about/${t}`,"DELETE"),Bn=()=>{const t=v(),n=y();return b(Yn,{onSuccess:o=>{g.success("Informacion eliminada"),n.setQueryData([N],i=>i.filter(a=>a.id!==o.id)),t(Ke())}})},Mn=s(He)`
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
   
`,et=t=>r(Mn,{children:[r("span",{children:[e(Ct,{})," ",t.text?t.text:"Imagen"]}),e("input",D(m({},t),{type:"file",name:"file",id:"file"}))]}),jn={position:"relative",width:"1em",height:"1em"},On={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},Rn={rotate:360},zn={duration:1,loop:"Infinity"},x=()=>e("div",{style:jn,children:e(f.span,{style:On,animate:Rn,transition:zn})}),Fn={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Qn={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ie={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Vn={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ae={hidden:{y:"0%"},visible:{y:"100%"}},re={duration:.8,repeat:"Infinity",ease:"circInOut"},G=()=>e("div",{style:Fn,children:r(f.div,{style:Qn,variants:Vn,initial:"hidden",animate:"visible",children:[e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re})]})}),Nn={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},Gn=({children:t})=>e(f.div,{variants:Nn,initial:"hidden",animate:"visible",exit:"exit",children:t});var tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEwACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8ACo8P0APOAAAADHRSTlMA8lcmiEGkvdJuEOMxsOlHAAAC5klEQVRYw+1Yv2/TUBB+rdOEpkslOlTFQ1AlVJCHqhJUQh5CVbYMGShFIoOZ6JChKgIklKEg0S4ZgrpBh7QDYmCAAaYuzu+S+6OIU8t+7+78nr2B1G/0+XPu3v36XoS4xv+D4sbd7e2t1XZqwvnL9zDF8puTVIS5PRtiHJXMjKcXoGB8YHCv+AUIlta1jEfAYKDhFCsAGTmfIAFLSfFsQiJ+8Yx50KDMBlLXUUZcOM9Biw5lzIIB1LVTE2WAGTkwYh9RKmbKMPOPAHjZIgnQU3qE2m/91B+ai42/V4XY2NPlBrUVvA7bDXPi6szzDCEeIMNhRKklhnlbtVxGBlt57ldjioVcXueTclM+y2+8Zy7/pauWuGDPrKmrcvV7YzaPnrZXW9OHN7jvxGgo5hXmiEn3uUwC1M/8wJQ8dcJSnSVjm7GrWfHpVGiQ3lxI7gmul7ok+j6luKTM1K7/QylqEkakJg8pJYd7xtLmnsl/CU/JlnGOergjzZRFMWPIJCnbLm4WM6WP+75lpFwKJ2ssAzy/y8ZDHoq6fiNQygg1/uQICQpIoQgAUqgI3wG1h500DyM4BsqYUuoGCtD9DibKvkl0UAqJf4ZQDHuX7mof54UUpoXtY0HEDvJsgQggqhFGbd0RB547euGRZ7RMjQqPtu5HJvXhUkXwUasd++TYlaaZt6mxyzg7OYGwN2cbjHGRqL2jKWcriOdJk9dLaqr8x+GgX34bXi9691+QVMtbenhvMlBsND+Ka7jUpVwOp7riq/zCq+DJMzT5HcQQYjd+4cPVkzW1bc+iOKIZthv65h/QTdaV18c76WoV3JT8489xPTflcrLYQWHt7Dxk91JJ2rhV/f3pVN7YTtJe5SZzT1qfVdO9zpE0zFzCxYGdNOVYv3rm62NDEh81dkiys7kTN2snBSUn6yibUwgUtjR+HSiloVQkUZT3U13Ta7K+SxN9kEBpLdxJRSl0RFYUvMwU6/ofmn8ZfwEqPdZRx3i98QAAAABJRU5ErkJggg==";const Kn=()=>{const t=z(P=>P.about.active),[{name:n,description:o},i,a,c]=Xe({name:"",description:""}),{isLoading:l}=_e(),{mutate:d,isLoading:u}=Un(),{mutate:h,isLoading:w}=Bn(),{mutate:I,isLoading:B}=Pn(),{mutate:M}=Dn(),E=P=>{P.preventDefault(),t?d({id:t.id,name:n,description:o},{onSuccess:()=>c()}):I({name:n,description:o},{onSuccess:()=>c()})},U=()=>{h(t.id)},k=P=>{const T=new FormData;T.append("file",P.target.files[0]),M({id:t.id,file:T})};return r(R,{children:[e(be,{children:l?e(G,{}):t?r(R,{children:[r(Gn,{children:[t.img?e(q,{src:t.img,alt:"imagen de usuario"}):e(q,{src:tt,alt:"Imagen por defecto"}),e(H,{margin:!0,children:t.name}),e(L,{children:t.description})]}),r(an,{children:[e(et,{onChange:k}),r(p,{color:"red",onClick:U,children:[" ",w?e(x,{}):e(le,{})," Eliminar"]})]})]}):e(V,{children:"Ingresa tus datos"})}),r(pe,{onSubmit:E,children:[e(j,{children:"Quien eres?"}),e(Y,{type:"text",icon:e(Be,{}),name:"name",value:n,label:"Nombre",onChange:i,reset:a}),e(Y,{type:"text",icon:e(Me,{}),name:"description",value:o,label:"Descripcion",onChange:i,reset:a}),e(ge,{children:t?r(p,{children:[" ",u?e(x,{}):e(de,{})," Actualizar"]}):r(p,{children:[" ",B?e(x,{}):e(ue,{})," Guardar"]})})]})]})};const Zn=t=>{const{value:n,name:o,toggle:i,setToggle:a}=t;return r($n,{children:[r(Jn,{className:n&&"active",children:[!n&&e(je,{})," ",o==="start"?"Inicio":"Fin"]}),e(qn,D(m({},t),{type:"text",autoComplete:"off"})),i?e(we,{onClick:()=>a(!1),children:e(St,{})}):e(we,{onClick:()=>a(!0),children:e(It,{})})]})},Jn=s.label`
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
`,$n=s.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,we=s.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,qn=s.input`
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
`,ke=({name:t,date:n,setDate:o})=>{const[i,a]=C.exports.useState(!1),c=n?F(n).format("DD/MM/YYYY"):"";return r("div",{children:[e(Zn,{name:t,value:c,onChange:()=>{},toggle:i,setToggle:a}),e(Xn,{children:i&&e(Et,{onClickDay:d=>{o(d),a(!1)}})})]})},Xn=s.div`
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
`,Wn=s.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,ee="education",Hn=()=>W("/education"),nt=()=>ce([ee],Hn),_n=t=>S("/education","POST",t),eo=()=>{const t=y();return b(_n,{onSuccess:n=>{g.success("Estudio agregado"),t.setQueryData([ee],o=>[...o,n])}})},to=t=>S(`/education/${t.id}`,"PUT",t),no=()=>{const t=y();return b(to,{onSuccess:n=>{g.success("Estudio actualizado"),t.setQueryData([ee],o=>o.map(i=>i.id===n.id?n:i))}})},oo=t=>S(`/education/${t}`,"DELETE"),io=()=>{const t=y();return b(oo,{onSuccess:n=>{g.success("Estudio eliminado"),t.setQueryData([ee],o=>o.filter(i=>i.id!==n.id))}})},Ce=s.div`
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
`,ot=s.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`,Se=s.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Ie=s.span`
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
`,ao={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},ro={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},it=({children:t})=>e(f.div,{variants:ao,initial:"hidden",animate:"visible",children:t}),so=({children:t})=>e(f.div,{variants:ro,children:t}),at=({i:t,length:n,component:o})=>{const i=t%2===0,a=n===t+1;return e(so,{children:i?r(Ce,{children:[o,r("span",{children:[e(Se,{children:e(ye,{})}),!a&&e(Ie,{})]}),e("span",{})]}):r(Ce,{children:[e("span",{}),r("span",{children:[e(Se,{children:e(ye,{})}),!a&&e(Ie,{})]}),o]})})},rt=(t,n,o)=>{const[i,a]=C.exports.useState(t);return[i,a,u=>{a(D(m({},i),{[u.target.name]:u.target.value}))},u=>{a(D(m({},i),{[u]:""}))},()=>{a(t),n&&o&&(n(""),o(""))}]},co=({id:t,name:n,start:o,end:i})=>{const{mutate:a,isLoading:c}=io(),l=F(o).format("DD/MM/YYYY"),d=F(i).format("DD/MM/YYYY"),u=v();return r(ot,{children:[e(_,{children:n}),r(L,{small:!0,children:[l," - ",d]}),r(Ae,{children:[r(p,{onClick:()=>{u(sn({id:t,name:n,start:o,end:i}))},children:[e(Pt,{})," Editar"]}),r(p,{color:"red",onClick:()=>{a(t),u(X())},children:[" ",c?e(x,{}):e(le,{})," Eliminar"]})]})]})},lo=()=>{const t=z(T=>T.education.active),n=v(),[o,i]=C.exports.useState(),[a,c]=C.exports.useState(),[{name:l},d,u,h,w]=rt({name:""},i,c),{data:I,isLoading:B}=nt(),{mutate:M,isLoading:E}=eo(),{mutate:U,isLoading:k}=no();C.exports.useEffect(()=>{t?(d(t),i(t.start),c(t.end)):w()},[t]);const P=T=>{T.preventDefault(),t?U({id:t.id,name:l,start:o,end:a},{onSuccess:()=>n(X())}):M({name:l,start:o,end:a},{onSuccess:()=>w()})};return r(R,{children:[e(be,{children:B?e(G,{}):I.length!==0?e(it,{children:I.map((T,pt)=>e(at,{i:pt,length:I.length,component:e(co,m({},T))},T.id))}):e(V,{children:"Ingresa tu estudios"})}),r(pe,{onSubmit:P,children:[e(j,{children:"Cuales son tus estudios?"}),e(Y,{type:"text",icon:e(Tt,{}),name:"name",label:"Escuela",value:l,onChange:u,reset:h}),r(Wn,{children:[e(ke,{name:"start",date:o,setDate:i}),e(ke,{name:"end",date:a,setDate:c})]}),r(ge,{children:[t?r(p,{children:[" ",k?e(x,{}):e(de,{})," Actualizar"]}):r(p,{children:[" ",E?e(x,{}):e(ue,{})," Guardar"]}),t&&e(p,{onClick:()=>n(X()),children:"Cancelar"})]})]})]})},K="portfolio",uo=()=>W("/portfolio"),st=()=>ce([K],uo),po=t=>S("/portfolio","POST",t),go=()=>{const t=y();return b(po,{onSuccess:n=>{g.success("Proyecto agregado"),t.setQueryData([K],o=>[...o,n])}})},ho=t=>Qe(`/uploads/portfolio/${t.id}`,"POST",t),mo=()=>{const t=y();return b(ho,{onSuccess:n=>{g.success("Imagen agregada"),t.setQueryData([K],o=>o.map(i=>i.id===n.id?n:i))}})},fo=t=>S(`/portfolio/${t.id}`,"PUT",t),bo=()=>{const t=y();return b(fo,{onSuccess:n=>{g.success("Proyecto actualizado"),t.setQueryData([K],o=>o.map(i=>i.id===n.id?n:i))}})},Ao=t=>S(`/portfolio/${t}`,"DELETE"),vo=()=>{const t=y();return b(Ao,{onSuccess:n=>{g.success("Proyecto eliminado"),t.setQueryData([K],o=>o.filter(i=>i.id!==n.id))}})},xo=({id:t,img:n,name:o,description:i,link:a})=>{const c=v(),l=z(E=>E.portfolio.active),{mutate:d,isLoading:u}=vo(),{mutate:h,isLoading:w}=mo(),I=()=>{c(me({id:t,img:n,name:o,description:i,link:a}))},B=()=>{d(t),c(O())},M=E=>{const U=new FormData;U.append("file",E.target.files[0]),h({id:t,file:U},{onSuccess:()=>c(O())})};return r(So,{children:[w?e(yo,{children:e(x,{})}):e(wo,{src:n,alt:o,onClick:I}),!w&&l&&l.id===t&&r(ko,{children:[e(Co,{children:o}),e(Ee,{smaill:!0,children:i}),e(Ee,{smaill:!0,children:a}),r(p,{color:"red",onClick:B,children:[u?e(x,{}):e(le,{})," Eliminar"]}),e(et,{text:"Agregar imagen",onChange:M}),e(p,{onClick:()=>c(O()),children:"Cancelar"})]})]})},yo=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,wo=s.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,ko=s(Ae)`
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
`,Co=s(_)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ee=s(L)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,So=s.div`
    position: relative;
`;const ct=({children:t})=>e(Dt,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Lt,Ut],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),Io={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},lt=({children:t})=>e(f.div,{variants:Io,initial:"hidden",animate:"visible",exit:"exit",children:t}),Eo=()=>{const t=v(),n=z(k=>k.portfolio.active),[{name:o,description:i,link:a},c,l,d,u]=rt({name:"",description:"",link:""}),{data:h,isLoading:w}=st(),{mutate:I,isLoading:B}=go(),{mutate:M,isLoading:E}=bo();C.exports.useEffect(()=>{n?c(n):u()},[n]);const U=k=>{k.preventDefault(),n?M({id:n.id,name:o,description:i,link:a},{onSuccess:()=>t(O())}):I({name:o,description:i,link:a},{onSuccess:P=>t(me(P))})};return r(R,{children:[e(be,{children:w?e(G,{}):h.length!==0?e(lt,{children:e(ct,{children:h.map(k=>e(Oe,{className:"portfolio__card",children:e(xo,m({},k))},k.id))})}):e(V,{children:"Ingresa tus proyectos"})}),r(pe,{onSubmit:U,children:[e(j,{children:"Cuales son tus proyectos?"}),e(Y,{type:"text",icon:e(Be,{}),name:"name",value:o,label:"Nombre",onChange:l,reset:d}),e(Y,{type:"text",icon:e(Me,{}),name:"description",value:i,label:"Descripcion",onChange:l,reset:d}),e(Y,{type:"text",icon:e(Yt,{}),name:"link",value:a,label:"Link (opcional)",onChange:l,reset:d}),e(ge,{children:n?r(p,{margin:!0,children:[" ",E?e(x,{}):e(de,{})," Actualizar"]}):r(p,{margin:!0,children:[" ",B?e(x,{}):e(ue,{})," Guardar"]})})]})]})},Po=()=>e(Re,{children:r(A,{path:"/",element:e(bn,{}),children:[e(A,{index:!0,element:e(Kn,{})}),e(A,{path:"education",element:e(lo,{})}),e(A,{path:"portfolio",element:e(Eo,{})}),e(A,{path:"*",element:e(se,{to:"/dashboard/"})})]})}),To=s.div`
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
`,Do=s.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,Pe=s.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,dt=({children:t,noPadding:n})=>r(To,{children:[e("div",{}),e(Pe,{}),e("div",{}),e(Pe,{}),e(Do,{noPadding:n,children:t})]}),Lo=s.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,Uo=s.div`
  display: flex;
  align-items: center;
`,Yo=()=>r(Lo,{children:[e(Bt,{to:"/auth",children:e(Ve,{src:qe,alt:"logo carlitos"})}),r(Uo,{children:[r(Z,{to:"/",children:[e(Mt,{}),e("span",{children:"Inicio"})]}),r(Z,{to:"/education",children:[e(De,{}),e("span",{children:"Educacion"})]}),r(Z,{to:"/portfolio",children:[e(Le,{}),e("span",{children:"Portafolio"})]})]})]}),Bo=()=>e(R,{children:r(dt,{children:[e(Yo,{}),e(Ue,{})]})}),ut=s.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,Mo=s.div`
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
`,jo=s.div`
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
`,Oo=s.div`
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
   box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,Ro=s.div`
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
`,zo=s.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,Fo=s.div`
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
      ${ut}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`;var Qo="/assets/cv_carlos.6cd29141.pdf";const Vo=()=>{const{data:t,isLoading:n}=_e();return r(Fo,{children:[e(zo,{}),e(ut,{children:n?e(x,{}):t[0]&&r(Mo,{children:[t[0].img?e(q,{src:t[0].img,alt:"imagen de usuario"}):e(q,{src:tt,alt:"Imagen por defecto"}),r(jo,{children:[e(H,{children:t[0].name}),e(L,{children:t[0].description}),e(p,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Qo,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(Oo,{}),r(Ro,{children:[r("div",{children:[e("h6",{children:"Instagram"}),e(L,{small:!0,children:"danieel.u"})]}),r("div",{children:[e("h6",{children:"Correo"}),e(L,{small:!0,children:"daniusqueda582@gmail.com"})]}),r("div",{children:[e("h6",{children:"Telefono"}),e(L,{small:!0,children:"2945-550890"})]})]})]})},No=({name:t,start:n,end:o})=>{const i=F(n).format("MM/YYYY"),a=F(o).format("MM/YYYY");return r(ot,{children:[e(_,{children:t}),e(L,{small:!0,children:r(on,{children:[e(je,{}),i," - ",a]})})]})},Go=()=>{const{data:t,isLoading:n}=nt();return r(Ne,{children:[e(j,{margin:!0,children:"Estudios"}),n?e(G,{}):t.length!==0?e(it,{children:t.map((o,i)=>e(at,{i,length:t.length,component:e(No,m({},o))},o.id))}):e(V,{children:"No hay estudios que mostrar"})]})},Ko=({id:t,img:n,name:o,description:i,link:a})=>{const c=v(),l=z(h=>h.portfolio.active),d=()=>{c(me({id:t,img:n,name:o,description:i,link:a}))},u=()=>{c(O())};return r(Xo,{children:[e(Zo,{src:n,alt:o,onClick:d}),l&&l.id===t&&r($o,{children:[e(_,{children:o}),e(L,{smaill:!0,children:i}),a&&e(Jo,{href:a,target:"_blank",children:r(p,{children:[e(Ye,{}),"Ver proyecto"]})}),e(qo,{onClick:u,children:e(jt,{})})]})]})},Zo=s.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,Jo=s.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,$o=s(Ae)`
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
`,qo=s.button`
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
`,Xo=s.div`
    position: relative;
`,Wo=()=>{const{data:t,isLoading:n}=st();return r(Ne,{children:[e(j,{margin:!0,children:"Proyectos"}),n?e(G,{}):t.length!==0?e(lt,{children:e(ct,{children:t.map(o=>e(Oe,{className:"portfolio__card",children:e(Ko,m({},o))},o.id))})}):e(V,{children:"No hay proyectos que mostrar"})]})},Ho=()=>{const t=Te(),[{email:n,password:o},i,a]=Xe({email:"",password:""}),{mutate:c}=qt();return e(dt,{children:r(_o,{onSubmit:d=>{d.preventDefault(),c({email:n,password:o},{onSuccess:()=>{t("/dashboard")}})},children:[e(j,{children:"Inicia Sesion"}),e(Y,{type:"text",name:"email",label:"Correo electronico",value:n,onChange:i,reset:a}),e(Y,{name:"password",label:"Contrase\xF1a",value:o,onChange:i,reset:a}),e(p,{children:"Enviar"})]})})},_o=s.form`
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
`,ei=()=>{const{user:t}=z(n=>n.auth);return e(Ot,{children:r(Re,{children:[r(A,{path:"/",element:e(Bo,{}),children:[e(A,{index:!0,element:e(Vo,{})}),"k",e(A,{path:"education",element:e(Go,{})}),e(A,{path:"portfolio",element:e(Wo,{})}),e(A,{path:"*",element:e(se,{to:"/"})})]}),e(A,{path:"/auth",element:e(Ho,{})}),e(A,{path:"/dashboard/*",element:e(tn,{isLogged:!!t,children:e(Po,{})})})]})})},ti=({children:t})=>{const n=new Rt({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return r(zt,{client:n,children:[t,e(Ft.exports.ReactQueryDevtools,{})]})},ni=Qt({reducer:{about:rn,auth:Jt,education:cn,experience:dn,portfolio:un}}),oi=({children:t})=>e(Vt,{store:ni,children:t}),ii=()=>e(Nt,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),ai=()=>r(oi,{children:[e(ti,{children:e(ei,{})}),e(ii,{})]});Gt(document.getElementById("root")).render(e(ai,{}));
