var pt=Object.defineProperty,gt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var xe=(t,n,i)=>n in t?pt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,g=(t,n)=>{for(var i in n||(n={}))ve.call(n,i)&&xe(t,i,n[i]);if(K)for(var i of K(n))ye.call(n,i)&&xe(t,i,n[i]);return t},S=(t,n)=>gt(t,ht(n));var we=(t,n)=>{var i={};for(var o in t)ve.call(t,o)&&n.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&K)for(var o of K(t))n.indexOf(o)<0&&ye.call(t,o)&&(i[o]=t[o]);return i};import{c as N,t as p,u as b,a as y,j as e,b as r,m as f,d as _e,r as v,N as ce,s,e as ft,F as j,B as bt,f as xt,I as Te,g as Pe,A as vt,O as De,M as yt,h as Le,i as wt,k as le,l as k,n as kt,o as F,p as de,q as ze,v as Oe,w as ue,x as me,y as Re,z as At,C as Ct,D as B,E as St,G as ke,H as It,J as Et,S as $t,K as Mt,P as _t,L as je,Q as Tt,R as Fe,T as x,U as Pt,V as Dt,W as Lt,X as Be,Y as zt,Z as Ot,_ as Rt,$ as jt,a0 as Ft,a1 as Bt,a2 as Nt,a3 as Qt,a4 as Yt,a5 as Ut,a6 as Vt,a7 as Kt}from"./vendor.3f5c859c.js";const Xt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}};Xt();const Ne=N({name:"auth",initialState:{user:null},reducers:{login:(t,n)=>{t.user=n.payload},logout:t=>{t.user=null}}}),{login:Qe,logout:Gt}=Ne.actions;var Jt=Ne.reducer;const J="https://street-carlitos.herokuapp.com/api",Z=async(t,n,i)=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},a=n==="POST"?await fetch(J+t,o):await fetch(J+t),c=await a.json();if(!a.ok)throw c.map(l=>p.error(l)),new Error;return c},I=async(t,n,i)=>{var d;const o=(d=localStorage.getItem("token"))!=null?d:"";let a=n==="GET"||n==="DELETE"?{method:n,headers:{"access-token":o}}:{method:n,headers:{"access-token":o,"Content-Type":"application/json"},body:JSON.stringify(i)};const c=await fetch(J+t,a),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},Ye=async(t,n,{file:i})=>{var d;const o=(d=localStorage.getItem("token"))!=null?d:"",a={method:n,headers:{"access-token":o},body:i},c=await fetch(J+t,a),l=await c.json();if(!c.ok)throw l.map(u=>p.error(u)),new Error;return l},Wt=t=>Z("/auth/login","POST",t),qt=()=>{const t=y();return b(Wt,{onSuccess:({id:n,name:i,email:o,token:a})=>{p.success(`Bienvenido ${i}`),localStorage.setItem("token",a),t(Qe({id:n,name:i,email:o}))}})},Zt=()=>{const t=y();return b(()=>I("/auth/renew","GET"),{onSuccess:({id:n,name:i,email:o,token:a})=>{localStorage.setItem("token",a),t(Qe({id:n,name:i,email:o}))}})},Ht={width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},en={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ne={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},tn={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},oe={hidden:{y:"0%"},visible:{y:"100%"}},ie={duration:.8,repeat:"Infinity",ease:"circInOut"},nn=()=>e("div",{style:Ht,children:r(f.div,{style:en,variants:tn,initial:"hidden",animate:"visible",children:[e(f.span,{style:ne,variants:oe,transition:ie}),e(f.span,{style:ne,variants:oe,transition:ie}),e(f.span,{style:ne,variants:oe,transition:ie})]})}),on=({children:t,isLogged:n})=>{const i=localStorage.getItem("token"),o=_e(),{mutate:a,isLoading:c}=Zt();return v.exports.useEffect(()=>{i&&(a(),o("/dashboard"))},[]),c?e(nn,{}):n?t:e(ce,{to:"/auth"})},Ue=s.img`
  width: 3em;
  height: 3em;
`,an=s.span`
    font-size: 1.5em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,rn=s.i`
    font-size: 1em;
    display: flex;
    gap: .3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`,W=s.img`
  min-width: 6.25em;
  height: 6.25em;
  border-radius: 100%;
  margin-bottom: 1em;
  object-position: center;
  object-fit: cover;
`,Ve=s.div`
   width: 90%;
   max-width: 1000px;
   margin: auto;   
`,X=s(ft)`
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
`,sn=s.div`
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
`,O=s(H)`
  font-size: 2em;
  margin: 0;
  margin-bottom: 1em;
  background: linear-gradient(to right, #f32170, #ffeb07, #2125f3, #ff00eb);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: ${({margin:t})=>t?"1em":"0"};
`,Q=s(O)`
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
`,T=s.p`
  text-align: ${({initial:t})=>t?"initial":"center"};
  font-size: ${({small:t})=>t?".8em":".9em"};
  color: gray;
  margin: 0;
`,Ke=N({name:"about",initialState:{active:null},reducers:{aboutActive:(t,n)=>{t.active=n.payload},clearAboutActive:t=>{t.active=null}}}),{aboutActive:ge,clearAboutActive:Xe}=Ke.actions;var cn=Ke.reducer;const Ge=N({name:"education",initialState:{active:null},reducers:{educationActive:(t,n)=>{t.active=n.payload},clearEducationActive:t=>{t.active=null}}}),{educationActive:ln,clearEducationActive:q}=Ge.actions;var dn=Ge.reducer;const Je=N({name:"experience",initialState:{active:null},reducers:{experienceActive:(t,n)=>{t.active=n.payload},clearExperienceActive:t=>{t.active=null}}}),{experienceActive:pi,clearExperienceActive:un}=Je.actions;var mn=Je.reducer;const We=N({name:"portfolio",initialState:{active:null},reducers:{portfolioActive:(t,n)=>{t.active=n.payload},clearPortfolioActive:t=>{t.active=null}}}),{portfolioActive:he,clearPortfolioActive:R}=We.actions;var pn=We.reducer;const gn=()=>{const t=y(),n=v.exports.useRef(null),i=()=>n.current.classList.toggle("toggle"),o=()=>{localStorage.removeItem("token"),t(Gt()),t(Xe()),t(q()),t(un()),t(R())};return r(j,{children:[r(bn,{ref:n,children:[r(hn,{children:[e(Ue,{src:"/logo.png",alt:"logo carlitos"}),e(an,{onClick:o,children:e(bt,{})})]}),e(H,{margin:!0,children:"Informacion"}),r("div",{children:[r(G,{onClick:i,to:"/dashboard/",children:[e(xt,{})," Acerca de mi"]}),r(G,{onClick:i,to:"education",children:[e(Te,{})," Educacion"]}),r(G,{onClick:i,to:"portfolio",children:[e(Pe,{})," Proyectos"]})]}),e(xn,{onClick:o,to:"/",children:"Ir al portafolio"})]}),e(fn,{onClick:i,children:e(vt,{})})]})},hn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`,fn=s.button`
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
`,bn=s.nav`
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
  `,G=s(X)`
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
`,xn=s(G)`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
`,vn=()=>r(yn,{children:[e(gn,{}),e(wn,{children:e(De,{})})]}),yn=s.div`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(25px); 
  background: linear-gradient(to bottom, #0c082c, #010105 );
  background-color: red;
  box-shadow: inset 0 25px 45px rgba(0, 0, 0, .1);
  position: relative;
`,wn=s.div`
  width: 100%;
`,qe=t=>{const[n,i]=v.exports.useState(t);return[n,l=>{i(S(g({},n),{[l.target.name]:l.target.value}))},l=>{i(S(g({},n),{[l]:""}))},()=>{i(t)}]},kn=s.label`
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
`,An=s.div`
   width: 90%;
   margin-left: auto;
   margin-right: auto;
	position: relative;
   height: 2em;
   margin-bottom: 2em;
`,Ze=s.i`
   position: absolute;
   bottom: .3em;
   right: -1.2em;
   transition: all 0.3s ease;
   color: #fff;
   font-size: 1em;
   font-weight: bold;
   cursor: pointer;
`,Cn=s(Ze)`
   right: 1.5em;
`,Sn=s.input`
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
`,D=t=>{const[n,i]=v.exports.useState(!1),{icon:o,value:a,label:c,name:l,reset:d}=t,u=()=>d(l),h=()=>i(!n);return r(An,{children:[r(kn,{className:a&&"active",children:[!a&&o," ",c]}),e(Sn,S(g({},t),{type:l==="password"&&!n?"password":"text",autoComplete:"off"})),a&&e(Ze,{onClick:u,children:e(yt,{})}),l==="password"&&a&&e(Cn,{onClick:h,children:n?e(Le,{}):e(wt,{})})]})},m=t=>e(He,S(g({},t),{color:t.color,children:e("div",{children:t.children})})),He=s.button`
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
`,fe=({children:t})=>e(In,{children:e(En,{children:t})}),In=s.div`
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
`,En=s.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  flex: 1 1 auto;
  overflow-y: scroll;
  text-align: center;
`,Y="about",$n=()=>Z("/about"),et=()=>{const t=y();return le([Y],$n,{onSuccess:n=>t(ge(n[0]))})},Mn=t=>I("/about","POST",t),_n=()=>{const t=y(),n=k();return b(Mn,{onSuccess:i=>{p.success("Informacion agregada"),n.setQueryData([Y],()=>[i]),t(ge(i))}})},Tn=t=>Ye(`/uploads/about/${t.id}`,"POST",t),Pn=()=>{const t=y(),n=k();return b(Tn,{onSuccess:i=>{p.success("Imagen agregada"),n.setQueryData([Y],()=>[i]),t(ge(i))}})},Dn=t=>I(`/about/${t.id}`,"PUT",t),Ln=()=>{const t=k();return b(Dn,{onSuccess:n=>{p.success("Informacion actualizada"),t.setQueryData([Y],i=>i.map(o=>o.id===n.id?n:o))}})},zn=t=>I(`/about/${t}`,"DELETE"),On=()=>{const t=y(),n=k();return b(zn,{onSuccess:i=>{p.success("Informacion eliminada"),n.setQueryData([Y],o=>o.filter(a=>a.id!==i.id)),t(Xe())}})},Rn=s(He)`
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
   
`,tt=t=>r(Rn,{children:[r("span",{children:[e(kt,{})," ",t.text?t.text:"Imagen"]}),e("input",S(g({},t),{type:"file",name:"file",id:"file"}))]}),jn={position:"relative",width:"1em",height:"1em"},Fn={width:"1em",height:"1em",border:".2em solid transparent",borderTop:".2em solid white",borderRadius:"50%",position:"absolute",top:0,left:0},Bn={rotate:360},Nn={duration:1,loop:"Infinity"},w=()=>e("div",{style:jn,children:e(f.span,{style:Fn,animate:Bn,transition:Nn})}),Qn={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Yn={width:"2em",height:"2em",display:"flex",justifyContent:"space-around"},ae={width:".5em",height:".5em",backgroundColor:"blue",borderRadius:".25em"},Un={hidden:{transition:{staggerChildren:.2}},visible:{transition:{staggerChildren:.1}}},re={hidden:{y:"0%"},visible:{y:"100%"}},se={duration:.8,repeat:"Infinity",ease:"circInOut"},U=()=>e("div",{style:Qn,children:r(f.div,{style:Yn,variants:Un,initial:"hidden",animate:"visible",children:[e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se}),e(f.span,{style:ae,variants:re,transition:se})]})}),Vn={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},Kn=({children:t})=>e(f.div,{variants:Vn,initial:"hidden",animate:"visible",exit:"exit",children:t}),Xn=()=>{const t=F(M=>M.about.active),[{name:n,description:i},o,a,c]=qe({name:"",description:""}),{isLoading:l}=et(),{mutate:d,isLoading:u}=Ln(),{mutate:h,isLoading:A}=On(),{mutate:E,isLoading:L}=_n(),{mutate:z}=Pn(),$=M=>{M.preventDefault(),t?d({id:t.id,name:n,description:i},{onSuccess:()=>c()}):E({name:n,description:i},{onSuccess:()=>c()})},P=()=>{h(t.id)},C=M=>{const _=new FormData;_.append("file",M.target.files[0]),z({id:t.id,file:_})};return r(j,{children:[e(fe,{children:l?e(U,{}):t?r(j,{children:[r(Kn,{children:[t.img?e(W,{src:t.img,alt:"imagen de usuario"}):e(W,{src:"/usuario.png",alt:"Imagen por defecto"}),e(H,{margin:!0,children:t.name}),e(T,{children:t.description})]}),r(sn,{children:[e(tt,{onChange:C}),r(m,{color:"red",onClick:P,children:[" ",A?e(w,{}):e(de,{})," Eliminar"]})]})]}):e(Q,{children:"Ingresa tus datos"})}),r(pe,{onSubmit:$,children:[e(O,{children:"Quien eres?"}),e(D,{type:"text",icon:e(ze,{}),name:"name",value:n,label:"Nombre",onChange:o,reset:a}),e(D,{type:"text",icon:e(Oe,{}),name:"description",value:i,label:"Descripcion",onChange:o,reset:a}),t?r(m,{children:[" ",u?e(w,{}):e(ue,{})," Actualizar"]}):r(m,{children:[" ",L?e(w,{}):e(me,{})," Guardar"]})]})]})};const Gn=t=>{const{value:n,name:i,toggle:o,setToggle:a}=t;return r(Wn,{children:[r(Jn,{className:n&&"active",children:[!n&&e(Re,{})," ",i==="start"?"Inicio":"Fin"]}),e(qn,S(g({},t),{type:"text",autoComplete:"off"})),o?e(Ae,{onClick:()=>a(!1),children:e(At,{})}):e(Ae,{onClick:()=>a(!0),children:e(Ct,{})})]})},Jn=s.label`
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
`,Wn=s.div`
	position: relative;
   height: 2em;
   margin-bottom: 2em;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
`,Ae=s.i`
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
`,Ce=({name:t,date:n,setDate:i})=>{const[o,a]=v.exports.useState(!1),c=n?B(n).format("DD/MM/YYYY"):"";return r("div",{children:[e(Gn,{name:t,value:c,onChange:()=>{},toggle:o,setToggle:a}),e(Zn,{children:o&&e(St,{onClickDay:d=>{i(d),a(!1)}})})]})},Zn=s.div`
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
`,Hn=s.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
`,te="education",eo=()=>Z("/education"),nt=()=>le([te],eo),to=t=>I("/education","POST",t),no=()=>{const t=k();return b(to,{onSuccess:n=>{p.success("Estudio agregado"),t.setQueryData([te],i=>[...i,n])}})},oo=t=>I(`/education/${t.id}`,"PUT",t),io=()=>{const t=k();return b(oo,{onSuccess:n=>{p.success("Estudio actualizado"),t.setQueryData([te],i=>i.map(o=>o.id===n.id?n:o))}})},ao=t=>I(`/education/${t}`,"DELETE"),ro=()=>{const t=k();return b(ao,{onSuccess:n=>{p.success("Estudio eliminado"),t.setQueryData([te],i=>i.filter(o=>o.id!==n.id))}})},Se=s.div`
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
`,Ie=s.i`
   margin-top: 2em;
   display: inline-block;
   color: blue;
`,Ee=s.span`
   display: block;
   width: 2px;
   height: 90%;
   background: blue;
   transform: translate(7px, -7px);
`,be=s.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-top: .5em;
`,so={hidden:{opacity:0},visible:{opacity:1,scale:1,transition:{delayChildren:0,staggerChildren:.3}}},co={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},it=({children:t})=>e(f.div,{variants:so,initial:"hidden",animate:"visible",children:t}),lo=({children:t})=>e(f.div,{variants:co,children:t}),at=({i:t,length:n,component:i})=>{const o=t%2===0,a=n===t+1;return e(lo,{children:o?r(Se,{children:[i,r("span",{children:[e(Ie,{children:e(ke,{})}),!a&&e(Ee,{})]}),e("span",{})]}):r(Se,{children:[e("span",{}),r("span",{children:[e(Ie,{children:e(ke,{})}),!a&&e(Ee,{})]}),i]})})},rt=(t,n,i)=>{const[o,a]=v.exports.useState(t);return[o,a,u=>{a(S(g({},o),{[u.target.name]:u.target.value}))},u=>{a(S(g({},o),{[u]:""}))},()=>{a(t),n&&i&&(n(""),i(""))}]},uo=({id:t,name:n,start:i,end:o})=>{const{mutate:a,isLoading:c}=ro(),l=B(i).format("DD/MM/YYYY"),d=B(o).format("DD/MM/YYYY"),u=y();return r(ot,{children:[e(ee,{children:n}),r(T,{small:!0,children:[l," - ",d]}),r(be,{children:[r(m,{onClick:()=>{u(ln({id:t,name:n,start:i,end:o}))},children:[e(It,{})," Editar"]}),r(m,{color:"red",onClick:()=>{a(t),u(q())},children:[" ",c?e(w,{}):e(de,{})," Eliminar"]})]})]})},mo=()=>{const t=F(_=>_.education.active),n=y(),[i,o]=v.exports.useState(),[a,c]=v.exports.useState(),[{name:l},d,u,h,A]=rt({name:""},o,c),{data:E,isLoading:L}=nt(),{mutate:z,isLoading:$}=no(),{mutate:P,isLoading:C}=io();v.exports.useEffect(()=>{t?(d(t),o(t.start),c(t.end)):A()},[t]);const M=_=>{_.preventDefault(),t?P({id:t.id,name:l,start:i,end:a},{onSuccess:()=>n(q())}):z({name:l,start:i,end:a},{onSuccess:()=>A()})};return r(j,{children:[e(fe,{children:L?e(U,{}):E.length!==0?e(it,{children:E.map((_,mt)=>e(at,{i:mt,length:E.length,component:e(uo,g({},_))},_.id))}):e(Q,{children:"Ingresa tu estudios"})}),r(pe,{onSubmit:M,children:[e(O,{children:"Cuales son tus estudios?"}),e(D,{type:"text",icon:e(Et,{}),name:"name",label:"Escuela",value:l,onChange:u,reset:h}),r(Hn,{children:[e(Ce,{name:"start",date:i,setDate:o}),e(Ce,{name:"end",date:a,setDate:c})]}),t?r(m,{children:[" ",C?e(w,{}):e(ue,{})," Actualizar"]}):r(m,{children:[" ",$?e(w,{}):e(me,{})," Guardar"]}),e("br",{}),t&&e(m,{onClick:()=>n(q()),children:"Cancelar"})]})]})},V="portfolio",po=()=>Z("/portfolio"),st=()=>le([V],po),go=t=>I("/portfolio","POST",t),ho=()=>{const t=k();return b(go,{onSuccess:n=>{p.success("Proyecto agregado"),t.setQueryData([V],i=>[...i,n])}})},fo=t=>Ye(`/uploads/portfolio/${t.id}`,"POST",t),bo=()=>{const t=k();return b(fo,{onSuccess:n=>{p.success("Imagen agregada"),t.setQueryData([V],i=>i.map(o=>o.id===n.id?n:o))}})},xo=t=>I(`/portfolio/${t.id}`,"PUT",t),vo=()=>{const t=k();return b(xo,{onSuccess:n=>{p.success("Proyecto actualizado"),t.setQueryData([V],i=>i.map(o=>o.id===n.id?n:o))}})},yo=t=>I(`/portfolio/${t}`,"DELETE"),wo=()=>{const t=k();return b(yo,{onSuccess:n=>{p.success("Proyecto eliminado"),t.setQueryData([V],i=>i.filter(o=>o.id!==n.id))}})},ko=({id:t,img:n,name:i,description:o,link:a})=>{const c=y(),l=F($=>$.portfolio.active),{mutate:d,isLoading:u}=wo(),{mutate:h,isLoading:A}=bo(),E=()=>{c(he({id:t,img:n,name:i,description:o,link:a}))},L=()=>{d(t),c(R())},z=$=>{const P=new FormData;P.append("file",$.target.files[0]),h({id:t,file:P},{onSuccess:()=>c(R())})};return r(Eo,{children:[A?e(Ao,{children:e(w,{})}):e(Co,{src:n,alt:i,onClick:E}),!A&&l&&l.id===t&&r(So,{children:[e(Io,{children:i}),e($e,{smaill:!0,children:o}),e($e,{smaill:!0,children:a}),r(m,{color:"red",onClick:L,children:[u?e(w,{}):e(de,{})," Eliminar"]}),e(tt,{text:"Agregar imagen",onChange:z}),e(m,{onClick:()=>c(R()),children:"Cancelar"})]})]})},Ao=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`,Co=s.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`,So=s(be)`
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
`,Io=s(ee)`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$e=s(T)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Eo=s.div`
    position: relative;
`;const ct=({children:t})=>e($t,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,pagination:!0,modules:[Mt,_t],coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:t}),$o={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},lt=({children:t})=>e(f.div,{variants:$o,initial:"hidden",animate:"visible",exit:"exit",children:t}),Mo=()=>{const t=y(),n=F(C=>C.portfolio.active),[{name:i,description:o,link:a},c,l,d,u]=rt({name:"",description:"",link:""}),{data:h,isLoading:A}=st(),{mutate:E,isLoading:L}=ho(),{mutate:z,isLoading:$}=vo();v.exports.useEffect(()=>{n?c(n):u()},[n]);const P=C=>{C.preventDefault(),n?z({id:n.id,name:i,description:o,link:a},{onSuccess:()=>t(R())}):E({name:i,description:o,link:a},{onSuccess:M=>t(he(M))})};return r(j,{children:[e(fe,{children:A?e(U,{}):h.length!==0?e(lt,{children:e(ct,{children:h.map(C=>e(je,{className:"portfolio__card",children:e(ko,g({},C))},C.id))})}):e(Q,{children:"Ingresa tus proyectos"})}),r(pe,{onSubmit:P,children:[e(O,{children:"Cuales son tus proyectos?"}),e(D,{type:"text",icon:e(ze,{}),name:"name",value:i,label:"Nombre",onChange:l,reset:d}),e(D,{type:"text",icon:e(Oe,{}),name:"description",value:o,label:"Descripcion",onChange:l,reset:d}),e(D,{type:"text",icon:e(Tt,{}),name:"link",value:a,label:"Link (opcional)",onChange:l,reset:d}),n?r(m,{margin:!0,children:[" ",$?e(w,{}):e(ue,{})," Actualizar"]}):r(m,{margin:!0,children:[" ",L?e(w,{}):e(me,{})," Guardar"]})]})]})},_o=()=>e(Fe,{children:r(x,{path:"/",element:e(vn,{}),children:[e(x,{index:!0,element:e(Xn,{})}),e(x,{path:"education",element:e(mo,{})}),e(x,{path:"portfolio",element:e(Mo,{})}),e(x,{path:"*",element:e(ce,{to:"/dashboard/"})})]})}),To=s.div`
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
`,Po=s.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1 1 auto;
  overflow-y: scroll;
`,Me=s.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
  box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,dt=({children:t,noPadding:n})=>r(To,{children:[e("div",{}),e(Me,{}),e("div",{}),e(Me,{}),e(Po,{noPadding:n,children:t})]}),Do=s.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .5em 1em;
  position: relative;
  z-index: 1000;
`,Lo=s.div`
  display: flex;
  align-items: center;
`,zo=()=>r(Do,{children:[e(Pt,{to:"/auth",children:e(Ue,{src:"logo.png",alt:"logo carlitos"})}),r(Lo,{children:[r(X,{to:"/",children:[e(Dt,{}),e("span",{children:"Inicio"})]}),r(X,{to:"/education",children:[e(Te,{}),e("span",{children:"Educacion"})]}),r(X,{to:"/portfolio",children:[e(Pe,{}),e("span",{children:"Portafolio"})]})]})]}),Oo=()=>e(j,{children:r(dt,{children:[e(zo,{}),e(De,{})]})}),ut=s.div`
   background-color: rgba(0, 0, 0, .15);
   box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
   backdrop-filter: blur(3px); 
   padding: 1em 2em;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`,Ro=s.div`
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
`,Fo=s.div`
   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACRJREFUKFNjZGD4/58BDBgZITR2wEiCQnzmIOTwWodsxMhUCAASowQLtXo4TQAAAABJRU5ErkJggg==);
   box-shadow: inset 0 300px 45px rgba(0, 0, 0, .5);
`,Bo=s.div`
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
`,No=s.div`
   position: absolute;
   width: 100%;
   height: 100vh;
`,Qo=s.div`
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
      ${ut}{
         background-color: rgba(0, 0, 0, .3);
         backdrop-filter: blur(1px); 
         grid-row: 4;
      }
   }
`;var Yo="/assets/cv_carlos.6cd29141.pdf";const Uo=()=>e(Lt,{makeDefault:!0,fov:12,position:[-10,5,-5]});function Vo(n){var t=we(n,[]);const i=v.exports.useRef(),{nodes:o,materials:a}=Be("./micro/scene.gltf");return e("group",S(g({ref:i},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:r("group",{rotation:[Math.PI/2,0,0],children:[e("mesh",{geometry:o.defaultMaterial.geometry,material:o.defaultMaterial.material}),e("mesh",{geometry:o.defaultMaterial_1.geometry,material:o.defaultMaterial_1.material}),e("mesh",{geometry:o.defaultMaterial_2.geometry,material:o.defaultMaterial_2.material}),e("mesh",{geometry:o.defaultMaterial_3.geometry,material:o.defaultMaterial_3.material}),e("mesh",{geometry:o.defaultMaterial_4.geometry,material:o.defaultMaterial_4.material}),e("mesh",{geometry:o.defaultMaterial_5.geometry,material:o.defaultMaterial_5.material}),e("mesh",{geometry:o.defaultMaterial_6.geometry,material:o.defaultMaterial_6.material}),e("mesh",{geometry:o.defaultMaterial_7.geometry,material:o.defaultMaterial_7.material}),e("mesh",{geometry:o.defaultMaterial_8.geometry,material:o.defaultMaterial_8.material}),e("mesh",{geometry:o.defaultMaterial_9.geometry,material:o.defaultMaterial_9.material}),e("mesh",{geometry:o.defaultMaterial_10.geometry,material:o.defaultMaterial_10.material}),e("mesh",{geometry:o.defaultMaterial_11.geometry,material:o.defaultMaterial_11.material}),e("mesh",{geometry:o.defaultMaterial_12.geometry,material:o.defaultMaterial_12.material}),e("mesh",{geometry:o.defaultMaterial_13.geometry,material:o.defaultMaterial_13.material}),e("mesh",{geometry:o.defaultMaterial_14.geometry,material:o.defaultMaterial_14.material}),e("mesh",{geometry:o.defaultMaterial_15.geometry,material:o.defaultMaterial_15.material}),e("mesh",{geometry:o.defaultMaterial_16.geometry,material:o.defaultMaterial_16.material})]})})}))}Be.preload("./micro/scene.gltf");const Ko=()=>r(zt,{children:[e(Uo,{}),e("pointLight",{color:"#0000ff",position:[10,-5,5]}),e("pointLight",{color:"#0000ff",position:[50,10,-10]}),e("pointLight",{color:"#ffffff",position:[0,0,100]}),r(v.exports.Suspense,{fallback:null,children:[e(Vo,{}),e(Ot,{files:"/hdr/decor_shop_1k.jpg",preset:"night"})]}),e(Rt,{enablePan:!1,autoRotate:!0,enableZoom:!1})]}),Xo=()=>{const{data:t,isLoading:n}=et();return r(Qo,{children:[e(No,{children:e(Ko,{})}),e(ut,{children:n?e(w,{}):t[0]&&r(Ro,{children:[t[0].img?e(W,{src:t[0].img,alt:"imagen de usuario"}):e(W,{src:"/usuario.png",alt:"Imagen por defecto"}),r(jo,{children:[e(H,{children:t[0].name}),e(T,{children:t[0].description}),e(m,{as:"a",style:{fontWeight:"normal",fontSize:".9em"},href:Yo,download:"cv_carlos.pdf",children:"Descargar CV"})]})]})}),e("div",{}),e(Fo,{}),r(Bo,{children:[r("div",{children:[e("h6",{children:"Instagram"}),e(T,{small:!0,children:"danieel.u"})]}),r("div",{children:[e("h6",{children:"Correo"}),e(T,{small:!0,children:"daniusqueda582@gmail.com"})]}),r("div",{children:[e("h6",{children:"Telefono"}),e(T,{small:!0,children:"2945-550890"})]})]})]})},Go=({name:t,start:n,end:i})=>{const o=B(n).format("MM/YYYY"),a=B(i).format("MM/YYYY");return r(ot,{children:[e(ee,{children:t}),e(T,{small:!0,children:r(rn,{children:[e(Re,{}),o," - ",a]})})]})},Jo=()=>{const{data:t,isLoading:n}=nt();return r(Ve,{children:[e(O,{margin:!0,children:"Estudios"}),n?e(U,{}):t.length!==0?e(it,{children:t.map((i,o)=>e(at,{i:o,length:t.length,component:e(Go,g({},i))},i.id))}):e(Q,{children:"No hay estudios que mostrar"})]})},Wo=({id:t,img:n,name:i,description:o,link:a})=>{const c=y(),l=F(h=>h.portfolio.active),d=()=>{c(he({id:t,img:n,name:i,description:o,link:a}))},u=()=>{c(R())};return r(ti,{children:[e(qo,{src:n,alt:i,onClick:d}),l&&l.id===t&&r(Ho,{children:[e(ee,{children:i}),e(T,{smaill:!0,children:o}),a&&e(Zo,{href:a,target:"_blank",children:r(m,{children:[e(Le,{}),"Ver proyecto"]})}),e(ei,{onClick:u,children:e(jt,{})})]})]})},qo=s.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`,Zo=s.a`
   color: #fff;
   text-decoration: none;
   button {
      width: 100%;
   }
`,Ho=s(be)`
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
`,ei=s.button`
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
`,ti=s.div`
    position: relative;
`,ni=()=>{const{data:t,isLoading:n}=st();return r(Ve,{children:[e(O,{margin:!0,children:"Proyectos"}),n?e(U,{}):t.length!==0?e(lt,{children:e(ct,{children:t.map(i=>e(je,{className:"portfolio__card",children:e(Wo,g({},i))},i.id))})}):e(Q,{children:"No hay proyectos que mostrar"})]})},oi=()=>{const t=_e(),[{email:n,password:i},o,a]=qe({email:"",password:""}),{mutate:c}=qt();return e(dt,{children:r(ii,{onSubmit:d=>{d.preventDefault(),c({email:n,password:i},{onSuccess:()=>{t("/dashboard")}})},children:[e(O,{children:"Inicia Sesion"}),e(D,{type:"text",name:"email",label:"Correo electronico",value:n,onChange:o,reset:a}),e(D,{name:"password",label:"Contrase\xF1a",value:i,onChange:o,reset:a}),e(m,{children:"Enviar"})]})})},ii=s.form`
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
`,ai=()=>{const{user:t}=F(n=>n.auth);return e(Ft,{children:r(Fe,{children:[r(x,{path:"/",element:e(Oo,{}),children:[e(x,{index:!0,element:e(Xo,{})}),"k",e(x,{path:"education",element:e(Jo,{})}),e(x,{path:"portfolio",element:e(ni,{})}),e(x,{path:"*",element:e(ce,{to:"/"})})]}),e(x,{path:"/auth",element:e(oi,{})}),e(x,{path:"/dashboard/*",element:e(on,{isLogged:!!t,children:e(_o,{})})})]})})},ri=({children:t})=>{const n=new Bt({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});return r(Nt,{client:n,children:[t,e(Qt.exports.ReactQueryDevtools,{})]})},si=Yt({reducer:{about:cn,auth:Jt,education:dn,experience:mn,portfolio:pn}}),ci=({children:t})=>e(Ut,{store:si,children:t}),li=()=>e(Vt,{toastOptions:{style:{background:"rgba(0,0,0,.5)",backdropFilter:"blur(25px)",boxShadow:"0 0 3px #fff",color:"#fff"}}}),di=()=>r(ci,{children:[e(ri,{children:e(ai,{})}),e(li,{})]});Kt(document.getElementById("root")).render(e(di,{}));
