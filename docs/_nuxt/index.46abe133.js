import{d as A,r as R,o as N,q as _,s as f,t as r,v as b,C as w,z as j,x as S,h as E,D as J,E as L,p as K,F as H,G as Y,H as W,I as Q,l as q,c as y,g as X,J as B,K as F,L as Z,M as ee}from"./entry.07ccdcc4.js";import{_ as te}from"./nuxt-icon.vue.afe4c103.js";import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import{u as ie}from"./vue.f36acd1f.64e99eb3.js";const se=""+globalThis.__publicAssetsURL("image/logo.svg"),oe={id:"s-home"},ne={class:"grid-layout"},re={id:"home"},ae={id:"home-container-text"},ce=r("h1",{class:"delayMediumReveal text-3xl md:text-4xl"},[j(" Helping companies build "),r("span",null,"Web App / Website"),j(" in a modern and high-quality way. ")],-1),le={class:"typewriter text-lg md:text-xl"},de=r("img",{id:"logo",src:se,alt:"Mohammad Younoch",onload:"SVGInject(this)",width:"500px",height:"500px"},null,-1),he="A mix of Design, Web Development and professional skills that will make your Product stand out in the market.",ue=A({__name:"SHome",setup(e){const t=R(""),s=()=>{he.split("").forEach(function(o,n){setTimeout(function(){t.value+=o},85*n)})};return N(()=>{s()}),(i,o)=>(_(),f("section",oe,[r("div",ne,[r("div",re,[r("div",ae,[ce,r("p",le,b(w(t)),1)]),de])])]))}}),pe=""+globalThis.__publicAssetsURL("icons/linkedin.svg"),ge=""+globalThis.__publicAssetsURL("icons/github.svg"),me={},_e={id:"s-about"},fe={class:"grid-layout"},ve=r("div",{id:"creator-photo",class:"delayMediumReveal"},[r("h3",{class:"delayExtraBigReveal"}," porfit ")],-1),xe=r("h4",{class:"delayMediumReveal text-lg md:text-xl"}," Who am I ",-1),ye=r("h2",{class:"delaySmallReveal text-2xl md:text-3xl"}," Mohammad Younoch ",-1),be=r("h3",{class:"delayMediumReveal text-lg md:text-xl"}," Full stack web developer ",-1),we=r("p",{class:"delayLargeReveal"}," Web development with 3+ years of experience in creating dynamic and user-friendly web applications using HTML, CSS, Node, Vue.js /Nuxt.js, Express.js, MongoDB. Experienced in front end development, back end development, database management, and web hosting. Seeking to leverage my skills and creativity to deliver high-quality solutions for a reputable company. ",-1),Se={class:"delayLargeReveal"},$e=r("a",{href:"https://www.linkedin.com/in/younoch/",rel:"noopener",target:"_blank"},[r("li",null,[r("img",{src:pe,rel:"noopener",alt:"Ícone do LinkedIn",onload:"SVGInject(this)"})])],-1),Re=r("a",{href:"https://github.com/younoch",rel:"noopener",target:"_blank"},[r("li",null,[r("img",{src:ge,alt:"Ícone do GitHub",onload:"SVGInject(this)"})])],-1),ke={href:"https://www.behance.net/iuricode",rel:"noopener",target:"_blank"};function je(e,t){const s=te;return _(),f("section",_e,[r("div",fe,[r("div",null,[ve,r("div",null,[xe,ye,be,we,r("nav",Se,[r("ul",null,[$e,Re,r("a",ke,[r("li",null,[S(s,{class:"text-3xl text-[#986dff]",name:"stackoverflow"})])])])])])])])])}const Ae=z(me,[["render",je]]);async function Le(e,t){return await ze(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ze(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>s(o),i.src=e})}function U(e){return t=>t?e[t]||t:e.missingValue}function Me({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(n,a)=>`${n}=${a}`),t&&typeof t!="function"&&(t=U(t));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=U(o[n]))}),(n={})=>Object.entries(n).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const h=o[c];return typeof h=="function"&&(d=h(n[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(s)}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Te(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function Ce(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Ie(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Ee(e){const t={options:e},s=(o,n={})=>O(t,o,n),i=(o,n={},a={})=>s(o,{...a,modifiers:H(n,a.modifiers||{})}).url;for(const o in e.presets)i[o]=(n,a,c)=>i(n,a,{...e.presets[o],...c});return i.options=e,i.getImage=s,i.getMeta=(o,n)=>We(t,o,n),i.getSizes=(o,n)=>De(t,o,n),t.$img=i,i}async function We(e,t,s){const i=O(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await Le(e,i.url)}function O(e,t,s){var h,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=Ue(e,s.provider||e.options.provider),n=Pe(e,s.preset);if(t=E(t)?t:J(t),!i.supportsAlias)for(const v in e.options.alias)t.startsWith(v)&&(t=L(e.options.alias[v],t.substr(v.length)));if(i.validateDomains&&E(t)){const v=K(t).host;if(!e.options.domains.find(k=>k===v))return{url:t}}const a=H(s,n,o);a.modifiers={...a.modifiers};const c=a.modifiers.format;(h=a.modifiers)!=null&&h.width&&(a.modifiers.width=m(a.modifiers.width)),(u=a.modifiers)!=null&&u.height&&(a.modifiers.height=m(a.modifiers.height));const d=i.getImage(t,a,e);return d.format=d.format||c||"",d}function Ue(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function Pe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function De(e,t,s){var g,M,T,C,I;const i=m((g=s.modifiers)==null?void 0:g.width),o=m((M=s.modifiers)==null?void 0:M.height),n=Ie(s.sizes),a=(T=s.densities)!=null&&T.trim()?Te(s.densities.trim()):e.options.densities;Ce(a);const c=i&&o?o/i:0,d=[],h=[];if(Object.keys(n).length>=1){for(const p in n){const x=P(p,String(n[p]),o,c,e);if(x!==void 0){d.push({size:x.size,screenMaxWidth:x.screenMaxWidth,media:`(max-width: ${x.screenMaxWidth}px)`});for(const $ of a)h.push({width:x._cWidth*$,src:D(e,t,s,x,$)})}}Ne(d)}else for(const p of a){const x=Object.keys(n)[0];let $=P(x,String(n[x]),o,c,e);$===void 0&&($={size:"",screenMaxWidth:0,_cWidth:(C=s.modifiers)==null?void 0:C.width,_cHeight:(I=s.modifiers)==null?void 0:I.height}),h.push({width:p,src:D(e,t,s,$,p)})}He(h);const u=h[h.length-1],v=d.length?d.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,k=v?"w":"x",l=h.map(p=>`${p.src} ${p.width}${k}`).join(", ");return{sizes:v,srcset:l,src:u==null?void 0:u.src}}function P(e,t,s,i,o){const n=o.options.screens&&o.options.screens[e]||parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let c=parseInt(t);if(!n||!c)return;a&&(c=Math.round(c/100*n));const d=i?Math.round(c*i):s;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:d}}function D(e,t,s,i,o){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},s)}function Ne(e){var s;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function He(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const qe=Me({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),Be=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=qe(t)||"_";return s||(s=L(i.options.nuxt.baseURL,"/_ipx")),{url:L(s,o,Y(e))}},Fe=!0,Oe=!0,Ge=Object.freeze(Object.defineProperty({__proto__:null,getImage:Be,supportsAlias:Oe,validateDomains:Fe},Symbol.toStringTag,{value:"Module"})),G={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};G.providers={ipxStatic:{provider:Ge,defaults:{}}};const V=()=>{const e=Q(),t=q();return t.$img||t._img||(t._img=Ee({...G,nuxt:{baseURL:e.app.baseURL}}))},Ve={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Je=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),s=y(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=V(),o=y(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:o}},Ke={...Ve,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ye=A({name:"NuxtImg",props:Ke,emits:["load","error"],setup:(e,t)=>{const s=V(),i=Je(e),o=R(!1),n=y(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:m(e.width),height:m(e.height)}})),a=y(()=>{const l={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(l.sizes=n.value.sizes,l.srcset=n.value.srcset),l}),c=y(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||o.value)return!1;if(typeof l=="string")return l;const g=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return s(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),d=y(()=>e.sizes?n.value.src:s(e.src,i.modifiers.value,i.options.value)),h=y(()=>c.value?c.value:d.value);if(e.preload){const l=Object.values(n.value).every(g=>g);ie({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:h.value}}]})}const u=R(),k=q().isHydrating;return N(()=>{if(c.value){const l=new Image;l.src=d.value,e.sizes&&(l.sizes=n.value.sizes||"",l.srcset=n.value.srcset),l.onload=g=>{o.value=!0,t.emit("load",g)};return}u.value&&(u.value.complete&&k&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=l=>{t.emit("load",l)},u.value.onerror=l=>{t.emit("error",l)})}),()=>X("img",{ref:u,src:h.value,...a.value,...t.attrs})}}),Qe={id:"s-projects"},Xe={class:"grid-layout"},Ze=r("h2",{class:"delaySmallReveal text-3xl md:text-4xl"},[j(" Key Projects "),r("span",null,".")],-1),et={id:"projects"},tt={class:"flex-grow my-2 flex flex-col"},it={class:"text-center my-1 text-2xl text-violet-400"},st={class:"text-center flex-grow text-indigo-400 font-medium"},ot={class:"text-sm my-2 text-white"},nt=["href"],rt=r("button",{class:"bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full"}," Preview site ",-1),at=[rt],ct=A({__name:"SProject",setup(e){const t=R([{image:"/project/cx.jpg",title:"CX Brianstrom",description:"A web app that provided professionals networking platform.",keyFeatures:"Authentication(OAuth), blogging, course enrolling etc.",link:"https://cxbrainstorm.com/"},{image:"/project/cx.jpg",title:"Kirei BD",description:"A web app that provided professionals ecommerce site for Japanese Beauty Products.",keyFeatures:"Authentication(JWT), blogging, sslcommerz payment etc.",link:"https://kireibd.com/"},{image:"/project/cx.jpg",title:"Ready Kit",description:"A web app that provided developer kit to build management panel for CRM, LMS etc.",keyFeatures:"Authentication(JWT), blogging etc.",link:"https://readykit.gainhq.com/"}]);return(s,i)=>{const o=Ye;return _(),f("section",Qe,[r("div",Xe,[Ze,r("div",et,[(_(!0),f(B,null,F(w(t),(n,a)=>(_(),f("article",{key:a,class:"intervalCardReveal none flex flex-col"},[S(o,{class:"",src:n.image,densities:"x1",alt:""},null,8,["src"]),r("div",tt,[r("h3",it,b(n.title),1),r("p",st,b(n.description),1),r("p",ot,"Key Features: "+b(n.keyFeatures),1)]),r("a",{href:n.link,target:"_blank"},at,8,nt)]))),128))])])])}}}),lt={id:"s-experience"},dt={class:"grid-layout"},ht=r("h2",{class:"delaySmallReveal"},[j(" Experiences "),r("span",null,".")],-1),ut={id:"experience"},pt={id:"experience-company",class:"option-experience intervalCardReveal"},gt={class:"text-experience intervalCardReveal"},mt={class:"titleExperience"},_t={class:"dateExperience"},ft={class:"companyExperience"},vt=r("p",{class:""}," Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar conteúdos para as aulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components. ",-1),xt=A({__name:"SExperience",setup(e){const t=R(0),s=R([{name:"Gain Solutions",duration:"May,2023 - Present",role:"Full stack JavaScript Developer",link:"https://www.gainhq.com/",reponsibilies:["Monitored and ensured the quality of reusable and optimized code using ESLint, Prettier, and Volar tools.","As Part of a 4-persons team that rebuilt the SaaS Application project. Used Vue 3.0 and TypeScript, improved the user experience and documentation, and finished in 3 months.","Developed new features such as a dynamic Graph and Chart, a user chat module, and a data visualization component using Google Chart, Chart.js , and D3.js","Debugged errors using Node.js inspector, breakpoints, browser DevTools, etc.","Managed and tracked the progress of the projects using Microsoft Teams, Jira, Slack, Zenhub and ClickUp."]}]),i=s.value[0];return(o,n)=>(_(),f("section",lt,[r("div",dt,[ht,r("div",ut,[r("div",pt,[(_(!0),f(B,null,F(w(s),(a,c)=>(_(),f("div",{key:c,class:Z(["company digitalhouse",{activeExperience:w(t)===c}])},[r("h3",null,b(a.name),1)],2))),128))]),r("div",gt,[r("div",null,[r("h4",mt,b(w(i).role),1),r("p",_t,b(w(i).duration),1)]),r("h5",ft,b(w(i).name),1),vt])])])]))}}),yt=""+globalThis.__publicAssetsURL("icons/html.svg"),bt=""+globalThis.__publicAssetsURL("icons/css.svg"),wt=""+globalThis.__publicAssetsURL("icons/javascript.svg"),St=""+globalThis.__publicAssetsURL("icons/sass.svg"),$t=""+globalThis.__publicAssetsURL("icons/react.svg"),Rt=""+globalThis.__publicAssetsURL("icons/next.svg"),kt=""+globalThis.__publicAssetsURL("icons/styled-components.svg"),jt=""+globalThis.__publicAssetsURL("icons/tailwindcss.svg"),At=""+globalThis.__publicAssetsURL("icons/radix.svg"),Lt=""+globalThis.__publicAssetsURL("icons/typescript.svg"),zt=""+globalThis.__publicAssetsURL("icons/storybook.svg"),Mt=""+globalThis.__publicAssetsURL("icons/cypress.svg"),Tt={},Ct={id:"s-skills"},It=ee('<div class="grid-layout"><div id="skills"><article id="skills-text"><h2 class="delaySmallReveal"> Conhecimentos <span>.</span></h2><p class="delayMediumReveal changeDescription"> *passe o cursor do mouse no card para ler* </p></article><div id="skills-cards"><article class="html intervalCardReveal"><img src="'+yt+'" width="60px" height="60px" alt="ícone do html"></article><article class="css intervalCardReveal"><img src="'+bt+'" width="60px" height="60px" alt="ícone do css"></article><article class="js intervalCardReveal"><img src="'+wt+'" width="60px" height="60px" alt="ícone do javascript"></article><article class="sass intervalCardReveal"><img src="'+St+'" width="60px" height="60px" alt="ícone do sass"></article><article class="react intervalCardReveal"><img src="'+$t+'" width="60px" height="60px" alt="ícone do react"></article><article class="next intervalCardReveal"><img src="'+Rt+'" width="60px" height="60px" alt="ícone do next"></article><article class="styled intervalCardReveal"><img src="'+kt+'" width="60px" height="60px" alt="ícone do styled"></article><article class="tailwind intervalCardReveal"><img src="'+jt+'" width="60px" height="60px" alt="ícone do tailwind"></article><article class="radix intervalCardReveal"><img src="'+At+'" width="60px" height="60px" alt="ícone do radix"></article><article class="typescript intervalCardReveal"><img src="'+Lt+'" width="60px" height="60px" alt="ícone do typescript"></article><article class="storybook intervalCardReveal"><img src="'+zt+'" width="60px" height="60px" alt="ícone do storybook"></article><article class="cypress intervalCardReveal"><img src="'+Mt+'" width="60px" height="60px" alt="ícone do cypress"></article></div></div></div>',1),Et=[It];function Wt(e,t){return _(),f("section",Ct,Et)}const Ut=z(Tt,[["render",Wt]]),Pt={};function Dt(e,t){const s=ue,i=Ae,o=ct,n=xt,a=Ut;return _(),f("div",null,[S(s),S(i),S(o),S(n),S(a)])}const Ft=z(Pt,[["render",Dt]]);export{Ft as default};