var lt=Object.defineProperty,dt=Object.defineProperties;var ut=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var xe=(t,n,o)=>n in t?lt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,h=(t,n)=>{for(var o in n||(n={}))pt.call(n,o)&&xe(t,o,n[o]);if(be)for(var o of be(n))gt.call(n,o)&&xe(t,o,n[o]);return t},D=(t,n)=>dt(t,ut(n));import{c as Q,t as g,u as b,a as v,j as e,b as r,m as f,d as Ee,r as C,N as se,s,e as mt,F as B,B as ht,f as ft,I as $e,g as Te,A as bt,O as De,M as xt,h as Pe,i as vt,k as ce,l as w,n as yt,o as N,p as le,q as Le,v as ze,w as de,x as ue,y as Oe,z as wt,C as kt,D as _,E as At,G as ve,H as Ct,J as St,S as It,K as Et,P as $t,L as Fe,Q as Tt,R as je,T as x,U as Dt,V as Pt,W as Lt,X as zt,Y as Ot,Z as Ft,_ as jt,$ as Rt,a0 as Bt,a1 as Nt,a2 as _t,a3 as Qt}from"./vendor.9f37b92c.js";const Yt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}};Yt();const Re=Q({name:"auth",initialState:{user:null},reducers:{login:(t,n)=>{t.user=n.payload},logout:t=>{t.user=null}}}),{login:Be,logout:Mt}=Re.actions;var Ut=Re.reducer;const G="https://street-carlitos.herokuapp.com/api",q=async(t,n,o)=>{const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},a=n==="POST"?await fetch(G+t,i):await fetch(G+t),c=await a.json();if(!a.ok)throw c.map(l=>g.error(l)),new Error;return c},S=async(t,n,o)=>{var d;const i=(d=localStorage.getItem("token"))!=null?d:"";let a=n==="GET"||n==="DELETE"?{method:n,headers:{"access-token":i}}:{method:n,headers:{"access-token":i,"Content-Type":"application/json"},body:JSON.stringify(o)};const c=await fetch(G+t,a),l=await c.json();if(!c.ok)throw l.map(u=>g.error(u)),new Error;return l},Ne=async(t,n,{file:o})=>{var d;const i=(d=localStorage.getItem("token"))!=null?d:"",a={method:n,headers:{"access-token":i},body:o},c=await fetch(G+t,a),l=await c.json();if(!c.ok)throw l.map(u=>g.error(u)),new Error;return l},Vt=t=>q("/auth/login","POST",t),Kt=()=>{const t=v();return b(Vt,{onSuccess:({id:n,name:o,email:i,token:a})=>{g.success(`Bienvenido ${o}`),localStorage.setItem("token",a),t(Be({id:n,name:o,email:i}))}})},Xt=()=>{const t=v();return b(()=>S("/auth/renew","GET"),{onSuccess:({id:n,name:o,email:i,token:a})=>{localStorage.setItem("token",a),t(Be({id:n,name:o,email:i}))}})},Gt={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},Jt={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},te={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Wt={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ne={hidden:{y:"0%"},visible:{y:"100%"}},oe={duration:.8,repeat:"Infinity",ease:"circInOut"},qt=()=>e("div",{style:Gt,children:r(f.div,{style:Jt,variants:Wt,initial:"hidden",animate:"visible",children:[e(f.span,{style:te,variants:ne,transition:oe}),e(f.span,{style:te,variants:ne,transition:oe}),e(f.span,{style:te,variants:ne,transition:oe})]})}),Zt=({children:t,isLogged:n})=>{const o=localStorage.getItem("token"),i=Ee(),{mutate:a,isLoading:c}=Xt();return C.exports.useEffect(()=>{o&&(a(),i("/dashboard"))},[]),c?e(qt,{}):n?t:e(se,{to:"/auth"})},_e=s.img`
  width: 3em;
  height: 3em;
`,Ht=s.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,en=s.i`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,J=s.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`,Qe=s.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,K=s(mt)`
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
`,tn=s.div`
  display: flex;
  margin-top: 2em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`,Z=s.h3`
  color: ${({black:t})=>t?"#000":"#fff"};
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: 1.2em;
  margin: 0;
  margin-bottom: ${({margin:t})=>t?"1em":"0"};
`,j=s(Z)`
  font-size: 2em;
  margin: 0;
  margin-bottom: 1em;
  background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: ${({margin:t})=>t?"1em":"0"};
`,Y=s(j)`
  background: linear-gradient(to right, blue, white, black);
  text-shadow: 0 0 10px rgba(255,255,255,.3);
  margin-top: 3em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`,H=s.h3`
  text-align: ${({initial:t})=>t?"initial":"center"} ;
  font-size: .8em;
  font-weight: bold;
  margin: 0;
  margin-bottom: .5em;
`,P=s.p`
  text-align: ${({initial:t})=>t?"initial":"center"};
  font-size: ${({small:t})=>t?".8em":".9em"};
  color: gray;
  margin: 0;
`,Ye=Q({name:"about",initialState:{active:null},reducers:{aboutActive:(t,n)=>{t.active=n.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:ge,clearAboutActive:Me}=Ye.actions;var nn=Ye.reducer;const Ue=Q({name:"education",initialState:{active:null},reducers:{educationActive:(t,n)=>{t.active=n.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:on,clearEducationActive:W}=Ue.actions;var an=Ue.reducer;const Ve=Q({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,n)=>{t.active=n.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:ai,clearExperienceActive:rn}=Ve.actions;var sn=Ve.reducer;const Ke=Q({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,n)=>{t.active=n.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:me,clearPortfolioActive:R}=Ke.actions;var cn=Ke.reducer;const ln=()=>{const t=v(),n=C.exports.useRef(null),o=()=>n.current.classList.toggle("toggle"),i=()=>{localStorage.removeItem("token"),t(Mt()),t(Me()),t(W()),t(rn()),t(R())};return r(B,{children:[r(pn,{ref:n,children:[r(dn,{children:[e(_e,{src:"/logo.png",alt:"logo carlitos"}),e(Ht,{onClick:i,children:e(ht,{})})]}),e(Z,{margin:!0,children:"Informacion"}),r("div",{children:[r(X,{onClick:o,to:"/dashboard/",children:[e(ft,{})," Acerca de mi"]}),r(X,{onClick:o,to:"education",children:[e($e,{})," Educacion"]}),r(X,{onClick:o,to:"portfolio",children:[e(Te,{})," Proyectos"]})]}),e(gn,{onClick:i,to:"/",children:"Ir al portafolio"})]}),e(un,{onClick:o,children:e(bt,{})})]})},dn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,un=s.button`
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
`,pn=s.nav`
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
  `,X=s(K)`
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
`,gn=s(X)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,mn=()=>r(hn,{children:[e(ln,{}),e(fn,{children:e(De,{})})]}),hn=s.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,fn=s.div`
  width: 100%;
`,Xe=t=>{const[n,o]=C.exports.useState(t);return[n,l=>{o(D(h({},n),{[l.target.name]:l.target.value}))},l=>{o(D(h({},n),{[l]:""}))},()=>{o(t)}]},bn=s.label`
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
`,xn=s.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`,Ge=s.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,vn=s(Ge)`
   right: 1.5em;
`,yn=s.input`
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
`,z=t=>{const[n,o]=C.exports.useState(!1),{icon:i,value:a,label:c,name:l,reset:d}=t,u=()=>d(l),m=()=>o(!n);return r(xn,{children:[r(bn,{className:a&&"active",children:[!a&&i," ",c]}),e(yn,D(h({},t),{type:l==="password"&&!n?"password":"text",autoComplete:"off"})),a&&e(Ge,{onClick:u,children:e(xt,{})}),l==="password"&&a&&e(vn,{onClick:m,children:n?e(Pe,{}):e(vt,{})})]})},p=t=>e(Je,D(h({},t),{color:t.color,children:e("div",{children:t.children})})),Je=s.button`
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
`,he=({children:t})=>e(wn,{children:e(kn,{children:t})}),wn=s.div`
  height: 50vh;
  background-image: url("./fondo.jpg") ;
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
`,kn=s.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,M="about",An=()=>q("/about"),We=()=>{const t=v();return ce([M],An,{onSuccess:n=>t(ge(n[0]))})},Cn=t=>S("/about","POST",t),Sn=()=>{const t=v(),n=w();return b(Cn,{onSuccess:o=>{g.success("Informacion agregada"),n.setQueryData([M],()=>[o]),t(ge(o))}})},In=t=>Ne(`/uploads/about/${t.id}`,"POST",t),En=()=>{const t=v(),n=w();return b(In,{onSuccess:o=>{g.success("Imagen agregada"),n.setQueryData([M],()=>[o]),t(ge(o))}})},$n=t=>S(`/about/${t.id}`,"PUT",t),Tn=()=>{const t=w();return b($n,{onSuccess:n=>{g.success("Informacion actualizada"),t.setQueryData([M],o=>o.map(i=>i.id===n.id?n:i))}})},Dn=t=>S(`/about/${t}`,"DELETE"),Pn=()=>{const t=v(),n=w();return b(Dn,{onSuccess:o=>{g.success("Informacion eliminada"),n.setQueryData([M],i=>i.filter(a=>a.id!==o.id)),t(Me())}})},Ln=s(Je)`
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
   
`,qe=t=>r(Ln,{children:[r("span",{children:[e(yt,{})," ",t.text?t.text:"Imagen"]}),e("input",D(h({},t),{type:"file",name:"file",id:"file"}))]}),zn={position:"relative",width:"1em",height:"1em"},On={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},Fn={rotate:360},jn={duration:1,loop:"Infinity"},y=()=>e("div",{style:zn,children:e(f.span,{style:On,animate:Fn,transition:jn})}),Rn={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Bn={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ie={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Nn={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},ae={hidden:{y:"0%"},visible:{y:"100%"}},re={duration:.8,repeat:"Infinity",ease:"circInOut"},U=()=>e("div",{style:Rn,children:r(f.div,{style:Bn,variants:Nn,initial:"hidden",animate:"visible",children:[e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re}),e(f.span,{style:ie,variants:ae,transition:re})]})}),_n={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},Qn=({children:t})=>e(f.div,{variants:_n,initial:"hidden",animate:"visible",exit:"exit",children:t}),Yn=()=>{const t=N($=>$.about.active),[{name:n,description:o},i,a,c]=Xe({name:"",description:""}),{isLoading:l}=We(),{mutate:d,isLoading:u}=Tn(),{mutate:m,isLoading:k}=Pn(),{mutate:I,isLoading:O}=Sn(),{mutate:F}=En(),E=$=>{$.preventDefault(),t?d({id:t.id,name:n,description:o},{onSuccess:()=>c()}):I({name:n,description:o},{onSuccess:()=>c()})},L=()=>{m(t.id)},A=$=>{const T=new FormData;T.append("file",$.target.files[0]),F({id:t.id,file:T})};return r(B,{children:[e(he,{children:l?e(U,{}):t?r(B,{children:[r(Qn,{children:[t.img?e(J,{src:t.img,alt:"imagen de usuario"}):e(J,{src:"/usuario.png",alt:"Imagen por defecto"}),e(Z,{margin:!0,children:t.name}),e(P,{children:t.description})]}),r(tn,{children:[e(qe,{onChange:A}),r(p,{color:"red",onClick:L,children:[" ",k?e(y,{}):e(le,{})," Eliminar"]})]})]}):e(Y,{children:"Ingresa tus datos"})}),r(pe,{onSubmit:E,children:[e(j,{children:"Quien eres?"}),e(z,{type:"text",icon:e(Le,{}),name:"name",value:n,label:"Nombre",onChange:i,reset:a}),e(z,{type:"text",icon:e(ze,{}),name:"description",value:o,label:"Descripcion",onChange:i,reset:a}),t?r(p,{children:[" ",u?e(y,{}):e(de,{})," Actualizar"]}):r(p,{children:[" ",O?e(y,{}):e(ue,{})," Guardar"]})]})]})};const Mn=t=>{const{value:n,name:o,toggle:i,setToggle:a}=t;return r(Vn,{children:[r(Un,{className:n&&"active",children:[!n&&e(Oe,{})," ",o==="start"?"Inicio":"Fin"]}),e(Kn,D(h({},t),{type:"text",autoComplete:"off"})),i?e(ye,{onClick:()=>a(!1),children:e(wt,{})}):e(ye,{onClick:()=>a(!0),children:e(kt,{})})]})},Un=s.label`
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
`,Vn=s.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,ye=s.i`
   position: absolute;
   bottom: .6em;
   right: 0;
   transition: all 0.3s ease;
   color: gray;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,Kn=s.input`
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
`,we=({name:t,date:n,setDate:o})=>{const[i,a]=C.exports.useState(!1),c=n?_(n).format("DD/MM/YYYY"):"";return r("div",{children:[e(Mn,{name:t,value:c,onChange:()=>{},toggle:i,setToggle:a}),e(Xn,{children:i&&e(At,{onClickDay:d=>{o(d),a(!1)}})})]})},Xn=s.div`
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
`,Gn=s.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,ee="education",Jn=()=>q("/education"),Ze=()=>ce([ee],Jn),Wn=t=>S("/education","POST",t),qn=()=>{const t=w();return b(Wn,{onSuccess:n=>{g.success("Estudio agregado"),t.setQueryData([ee],o=>[...o,n])}})},Zn=t=>S(`/education/${t.id}`,"PUT",t),Hn=()=>{const t=w();return b(Zn,{onSuccess:n=>{g.success("Estudio actualizado"),t.setQueryData([ee],o=>o.map(i=>i.id===n.id?n:i))}})},eo=t=>S(`/education/${t}`,"DELETE"),to=()=>{const t=w();return b(eo,{onSuccess:n=>{g.success("Estudio eliminado"),t.setQueryData([ee],o=>o.filter(i=>i.id!==n.id))}})},ke=s.div`
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
`,He=s.div`
   border: 1px solid rgba(255,255,255,.2);
   background-color: rgba(0, 0, 0, .1);
   border-radius: 10px 30px 10px 30px;
   backdrop-filter: blur(10px); 
   padding: 1em;
   position: relative;
`,Ae=s.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Ce=s.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`,fe=s.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`,no={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},oo={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},et=({children:t})=>e(f.div,{variants:no,initial:"hidden",animate:"visible",children:t}),io=({children:t})=>e(f.div,{variants:oo,children:t}),tt=({i:t,length:n,component:o})=>{const i=t%2===0,a=n===t+1;return e(io,{children:i?r(ke,{children:[o,r("span",{children:[e(Ae,{children:e(ve,{})}),!a&&e(Ce,{})]}),e("span",{})]}):r(ke,{children:[e("span",{}),r("span",{children:[e(Ae,{children:e(ve,{})}),!a&&e(Ce,{})]}),o]})})},nt=(t,n,o)=>{const[i,a]=C.exports.useState(t);return[i,a,u=>{a(D(h({},i),{[u.target.name]:u.target.value}))},u=>{a(D(h({},i),{[u]:""}))},()=>{a(t),n&&o&&(n(""),o(""))}]},ao=({id:t,name:n,start:o,end:i})=>{const{mutate:a,isLoading:c}=to(),l=_(o).format("DD/MM/YYYY"),d=_(i).format("DD/MM/YYYY"),u=v();return r(He,{children:[e(H,{children:n}),r(P,{small:!0,children:[l," - ",d]}),r(fe,{children:[r(p,{onClick:()=>{u(on({id:t,name:n,start:o,end:i}))},children:[e(Ct,{})," Editar"]}),r(p,{color:"red",onClick:()=>{a(t),u(W())},children:[" ",c?e(y,{}):e(le,{})," Eliminar"]})]})]})},ro=()=>{const t=N(T=>T.education.active),n=v(),[o,i]=C.exports.useState(),[a,c]=C.exports.useState(),[{name:l},d,u,m,k]=nt({name:""},i,c),{data:I,isLoading:O}=Ze(),{mutate:F,isLoading:E}=qn(),{mutate:L,isLoading:A}=Hn();C.exports.useEffect(()=>{t?(d(t),i(t.start),c(t.end)):k()},[t]);const $=T=>{T.preventDefault(),t?L({id:t.id,name:l,start:o,end:a},{onSuccess:()=>n(W())}):F({name:l,start:o,end:a},{onSuccess:()=>k()})};return r(B,{children:[e(he,{children:O?e(U,{}):I.length!==0?e(et,{children:I.map((T,ct)=>e(tt,{i:ct,length:I.length,component:e(ao,h({},T))},T.id))}):e(Y,{children:"Ingresa tu estudios"})}),r(pe,{onSubmit:$,children:[e(j,{children:"Cuales son tus estudios?"}),e(z,{type:"text",icon:e(St,{}),name:"name",label:"Escuela",value:l,onChange:u,reset:m}),r(Gn,{children:[e(we,{name:"start",date:o,setDate:i}),e(we,{name:"end",date:a,setDate:c})]}),t?r(p,{children:[" ",A?e(y,{}):e(de,{})," Actualizar"]}):r(p,{children:[" ",E?e(y,{}):e(ue,{})," Guardar"]}),e("br",{}),t&&e(p,{onClick:()=>n(W()),children:"Cancelar"})]})]})},V="portfolio",so=()=>q("/portfolio"),ot=()=>ce([V],so),co=t=>S("/portfolio","POST",t),lo=()=>{const t=w();return b(co,{onSuccess:n=>{g.success("Proyecto agregado"),t.setQueryData([V],o=>[...o,n])}})},uo=t=>Ne(`/uploads/portfolio/${t.id}`,"POST",t),po=()=>{const t=w();return b(uo,{onSuccess:n=>{g.success("Imagen agregada"),t.setQueryData([V],o=>o.map(i=>i.id===n.id?n:i))}})},go=t=>S(`/portfolio/${t.id}`,"PUT",t),mo=()=>{const t=w();return b(go,{onSuccess:n=>{g.success("Proyecto actualizado"),t.setQueryData([V],o=>o.map(i=>i.id===n.id?n:i))}})},ho=t=>S(`/portfolio/${t}`,"DELETE"),fo=()=>{const t=w();return b(ho,{onSuccess:n=>{g.success("Proyecto eliminado"),t.setQueryData([V],o=>o.filter(i=>i.id!==n.id))}})},bo=({id:t,img:n,name:o,description:i,link:a})=>{const c=v(),l=N(E=>E.portfolio.active),{mutate:d,isLoading:u}=fo(),{mutate:m,isLoading:k}=po(),I=()=>{c(me({id:t,img:n,name:o,description:i,link:a}))},O=()=>{d(t),c(R())},F=E=>{const L=new FormData;L.append("file",E.target.files[0]),m({id:t,file:L},{onSuccess:()=>c(R())})};return r(ko,{children:[k?e(xo,{children:e(y,{})}):e(vo,{src:n,alt:o,onClick:I}),!k&&l&&l.id===t&&r(yo,{children:[e(wo,{children:o}),e(Se,{smaill:!0,children:i}),e(Se,{smaill:!0,children:a}),r(p,{color:"red",onClick:O,children:[u?e(y,{}):e(le,{})," Eliminar"]}),e(qe,{text:"Agregar imagen",onChange:F}),e(p,{onClick:()=>c(R()),children:"Cancelar"})]})]})},xo=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,vo=s.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,yo=s(fe)`
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
`,wo=s(H)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Se=s(P)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ko=s.div`
    position: relative;
`;const it=({children:t})=>e(It,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Et,$t],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),Ao={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},at=({children:t})=>e(f.div,{variants:Ao,initial:"hidden",animate:"visible",exit:"exit",children:t}),Co=()=>{const t=v(),n=N(A=>A.portfolio.active),[{name:o,description:i,link:a},c,l,d,u]=nt({name:"",description:"",link:""}),{data:m,isLoading:k}=ot(),{mutate:I,isLoading:O}=lo(),{mutate:F,isLoading:E}=mo();C.exports.useEffect(()=>{n?c(n):u()},[n]);const L=A=>{A.preventDefault(),n?F({id:n.id,name:o,description:i,link:a},{onSuccess:()=>t(R())}):I({name:o,description:i,link:a},{onSuccess:$=>t(me($))})};return r(B,{children:[e(he,{children:k?e(U,{}):m.length!==0?e(at,{children:e(it,{children:m.map(A=>e(Fe,{className:"portfolio__card",children:e(bo,h({},A))},A.id))})}):e(Y,{children:"Ingresa tus proyectos"})}),r(pe,{onSubmit:L,children:[e(j,{children:"Cuales son tus proyectos?"}),e(z,{type:"text",icon:e(Le,{}),name:"name",value:o,label:"Nombre",onChange:l,reset:d}),e(z,{type:"text",icon:e(ze,{}),name:"description",value:i,label:"Descripcion",onChange:l,reset:d}),e(z,{type:"text",icon:e(Tt,{}),name:"link",value:a,label:"Link (opcional)",onChange:l,reset:d}),n?r(p,{margin:!0,children:[" ",E?e(y,{}):e(de,{})," Actualizar"]}):r(p,{margin:!0,children:[" ",O?e(y,{}):e(ue,{})," Guardar"]})]})]})},So=()=>e(je,{children:r(x,{path:"/",element:e(mn,{}),children:[e(x,{index:!0,element:e(Yn,{})}),e(x,{path:"education",element:e(ro,{})}),e(x,{path:"portfolio",element:e(Co,{})}),e(x,{path:"*",element:e(se,{to:"/dashboard/"})})]})}),Io=s.div`
  background-image: url("./fondo.jpg") ;
  background-blend-mode: soft-light;
  background-color: rgba(0,0,0,.7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`,Eo=s.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,Ie=s.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,rt=({children:t,noPadding:n})=>r(Io,{children:[e("div",{}),e(Ie,{}),e("div",{}),e(Ie,{}),e(Eo,{noPadding:n,children:t})]}),$o=s.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,To=s.div`
  display: flex;
  align-items: center;
`,Do=()=>r($o,{children:[e(Dt,{to:"/auth",children:e(_e,{src:"logo.png",alt:"logo carlitos"})}),r(To,{children:[r(K,{to:"/",children:[e(Pt,{}),e("span",{children:"Inicio"})]}),r(K,{to:"/education",children:[e($e,{}),e("span",{children:"Educacion"})]}),r(K,{to:"/portfolio",children:[e(Te,{}),e("span",{children:"Portafolio"})]})]})]}),Po=()=>e(B,{children:r(rt,{children:[e(Do,{}),e(De,{})]})}),st=s.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,Lo=s.div`
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
`,zo=s.div`
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
`,Fo=s.div`
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
`,jo=s.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,Ro=s.div`
   background-image: url("/fondo.jpg") ;
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
      ${st}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`;var Bo="/assets/cv_carlos.6cd29141.pdf";Lt.preload("/micro/scene.gltf");const No=()=>{const{data:t,isLoading:n}=We();return r(Ro,{children:[e(jo,{}),e(st,{children:n?e(y,{}):t[0]&&r(Lo,{children:[t[0].img?e(J,{src:t[0].img,alt:"imagen de usuario"}):e(J,{src:"/usuario.png",alt:"Imagen por defecto"}),r(zo,{children:[e(Z,{children:t[0].name}),e(P,{children:t[0].description}),e(p,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Bo,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(Oo,{}),r(Fo,{children:[r("div",{children:[e("h6",{children:"Instagram"}),e(P,{small:!0,children:"danieel.u"})]}),r("div",{children:[e("h6",{children:"Correo"}),e(P,{small:!0,children:"daniusqueda582@gmail.com"})]}),r("div",{children:[e("h6",{children:"Telefono"}),e(P,{small:!0,children:"2945-550890"})]})]})]})},_o=({name:t,start:n,end:o})=>{const i=_(n).format("MM/YYYY"),a=_(o).format("MM/YYYY");return r(He,{children:[e(H,{children:t}),e(P,{small:!0,children:r(en,{children:[e(Oe,{}),i," - ",a]})})]})},Qo=()=>{const{data:t,isLoading:n}=Ze();return r(Qe,{children:[e(j,{margin:!0,children:"Estudios"}),n?e(U,{}):t.length!==0?e(et,{children:t.map((o,i)=>e(tt,{i,length:t.length,component:e(_o,h({},o))},o.id))}):e(Y,{children:"No hay estudios que mostrar"})]})},Yo=({id:t,img:n,name:o,description:i,link:a})=>{const c=v(),l=N(m=>m.portfolio.active),d=()=>{c(me({id:t,img:n,name:o,description:i,link:a}))},u=()=>{c(R())};return r(Xo,{children:[e(Mo,{src:n,alt:o,onClick:d}),l&&l.id===t&&r(Vo,{children:[e(H,{children:o}),e(P,{smaill:!0,children:i}),a&&e(Uo,{href:a,target:"_blank",children:r(p,{children:[e(Pe,{}),"Ver proyecto"]})}),e(Ko,{onClick:u,children:e(zt,{})})]})]})},Mo=s.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,Uo=s.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,Vo=s(fe)`
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
`,Ko=s.button`
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
`,Go=()=>{const{data:t,isLoading:n}=ot();return r(Qe,{children:[e(j,{margin:!0,children:"Proyectos"}),n?e(U,{}):t.length!==0?e(at,{children:e(it,{children:t.map(o=>e(Fe,{className:"portfolio__card",children:e(Yo,h({},o))},o.id))})}):e(Y,{children:"No hay proyectos que mostrar"})]})},Jo=()=>{const t=Ee(),[{email:n,password:o},i,a]=Xe({email:"",password:""}),{mutate:c}=Kt();return e(rt,{children:r(Wo,{onSubmit:d=>{d.preventDefault(),c({email:n,password:o},{onSuccess:()=>{t("/dashboard")}})},children:[e(j,{children:"Inicia Sesion"}),e(z,{type:"text",name:"email",label:"Correo electronico",value:n,onChange:i,reset:a}),e(z,{name:"password",label:"Contrase\xF1a",value:o,onChange:i,reset:a}),e(p,{children:"Enviar"})]})})},Wo=s.form`
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
`,qo=()=>{const{user:t}=N(n=>n.auth);return e(Ot,{children:r(je,{children:[r(x,{path:"/",element:e(Po,{}),children:[e(x,{index:!0,element:e(No,{})}),"k",e(x,{path:"education",element:e(Qo,{})}),e(x,{path:"portfolio",element:e(Go,{})}),e(x,{path:"*",element:e(se,{to:"/"})})]}),e(x,{path:"/auth",element:e(Jo,{})}),e(x,{path:"/dashboard/*",element:e(Zt,{isLogged:!!t,children:e(So,{})})})]})})},Zo=({children:t})=>{const n=new Ft({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return r(jt,{client:n,children:[t,e(Rt.exports.ReactQueryDevtools,{})]})},Ho=Bt({reducer:{about:nn,auth:Ut,education:an,experience:sn,portfolio:cn}}),ei=({children:t})=>e(Nt,{store:Ho,children:t}),ti=()=>e(_t,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),ni=()=>r(ei,{children:[e(Zo,{children:e(qo,{})}),e(ti,{})]});Qt(document.getElementById("root")).render(e(ni,{}));
