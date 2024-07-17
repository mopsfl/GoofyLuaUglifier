import{a as h,b as X}from"../chunk-ZIMNNZGL.js";var E=h(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default={GetValue(){return window.monaco_editor?.getEditors()[0].getValue()},SetValue(e){return window.monaco_editor?.getEditors()[0].setValue(e)},Clear(){return window.monaco_editor?.getEditors()[0].setValue("")},GetDomElement(){return window.monaco_editor?.getEditors()[0].getDomNode()},ToggleLoading(e="Loading"){let t=document.querySelector(".loadingtext");document.querySelector(".main").classList.toggle("blur"),t.innerText=`${e}...`,t.classList.toggle("hide")},SetLoadingText(e="Loading"){let t=document.querySelector(".loadingtext");t.innerText=`${e}...`}}});var k=h(w=>{"use strict";var G=w&&w.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(w,"__esModule",{value:!0});var C=G(E()),Z=G(k());w.default={async new(e,t,a,n,r){if(!(e instanceof Attr))return Promise.reject("invalid arguments");let l=new Date().getTime();return console.log("new function request",e),await fetch(`${a.api_url()}${e.value}`,{method:"POST",body:t,credentials:"include",headers:{"uglifier-options":JSON.stringify(n),"uglifier-session":r}}).catch(i=>{let u=i;throw C.default.SetValue(Z.default.CreateResponseError("lua",u.message,C.default.GetValue())),C.default.ToggleLoading(),i}).finally(()=>{console.log(`[Client] Function request finished. (took ${new Date().getTime()-l}ms)`),console.log({f:e.value,u:a.api_url(),t:new Date().getTime()-l,s:r||null,o:Object.values(n)})})},CreateResponseError(e,t,a){let n=t;switch(a&&(a=a.replace(/--\[\[(.|\n)*]]/gm,"")),e){case"lua":{n=`--[[
                  \u250C GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  \u2502
                  \u2514 ${t}
                ]]${a?`


${a}`:""}`.replace(/^\s+/gm,"");break}}return n},EncodeRequestDataQuery(e){return encodeURIComponent(btoa(String.fromCharCode.apply(null,new Uint16Array(window.pako.gzip(JSON.stringify(e))))))}}});var O=h(p=>{"use strict";var ee=p&&p.__createBinding||(Object.create?function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]}),te=p&&p.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ae=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&ee(t,e,a);return te(t,e),t};Object.defineProperty(p,"__esModule",{value:!0});var T=ae(O());p.default={Create(e,t){return localStorage.setItem(e,btoa(JSON.stringify(t||{})))},Set(e,t,a){let n=T.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));if(!n)return console.warn(`invalid localstorage key '${e}'`);n[t]=a,localStorage.setItem(e,btoa(JSON.stringify(n)))},Edit(e,t,a,n){let r=T.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));if(!r)return console.warn(`invalid localstorage key '${e}'`);r[t][a]=n,localStorage.setItem(e,btoa(JSON.stringify(r)))},GetKey(e,t){let a=T.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));return a?a[t]:console.warn(`invalid localstorage key '${e}'`)},Exists(e){return localStorage.getItem(e)},Clear(e){return localStorage.removeItem(e)}}});var R=h(S=>{"use strict";var oe=S&&S.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(S,"__esModule",{value:!0});var v=oe(O()),D=class{config;constructor(t={storage_key:"_goofyuglifier",default_settings:{settings:{beautify_output:!1,minify_output:!1,target_lua_version:"5.3",chinese_nonsense_characters:!0,ignore_bytecode:!1,ignore_bytestring:!0,watermark:"",protect_watermark:!1,tester_access_key:"",byte_encrypt_all_constants:!1,rename_global_functions:!1,table_length_number_rate:25,table_length_number_memestrings:"",number_transform_offset_length:999999,use_all_mathoperators_number_transform:!1,memoize_function_calls:!1,bytecode_watermark:"",byte_string_type:"Hexadecimal",no_decoder_functions:!1,returnwrap_code:!1}}}){this.config=t,v.default.Exists(this.config.storage_key)||v.default.Create(this.config.storage_key,this.config.default_settings)}init(t){let a;t&&(v.default.Clear(this.config.storage_key),v.default.Create(this.config.storage_key,this.config.default_settings)),a=v.default.GetKey(this.config.storage_key,"settings"),document.querySelectorAll(".setting").forEach(n=>{let r=n.querySelector("input"),l=$(r).attr("id");if(l){r.addEventListener("input",u=>{let[c,o,s]=this.HandleInput(u,n);this.UpdateSetting(c,o,s)});let i=a[l];switch(i===void 0&&(i=this.config.default_settings.settings[l],a[l]=i,this.UpdateSetting(l,l,i),console.warn(`[Settings]: added missing setting > ${l} = ${a[l]}`)),r.type){case"checkbox":r.checked=i;break;case"range":let u=n.querySelector(".slider-value"),c=u.attributes.getNamedItem("value-type").value||"";u.innerText=`${i}${c}`,r.value=i;break;case"text":r.value=i;break;case"password":r.value=i;break;default:console.warn(`Invalid input type <${r.type}>`);break}}else if(r.classList.contains("select-dropdown")){let i=$(r).parent()[0].querySelector("select"),u=i.getAttribute("id"),c=a[u];c===void 0&&(c=this.config.default_settings.settings[u],a[u]=c,console.warn(`[Settings]: added missing setting > ${u}`)),r.value=c,i.value=c,i.addEventListener("change",o=>{let[s,f,d]=this.HandleInput(o,n);this.UpdateSetting(s,f,d)})}}),document.querySelector("#resetdefault").addEventListener("click",n=>{this.init(!0),console.log("Reseted settings to default",this.config.default_settings)})}HandleInput(t,a){console.log(a);let n=a.querySelector(".setting-name"),r=$(a.querySelector("input")).attr("id")||$(a).children(".select-wrapper").children("select").attr("id"),l=a.querySelector("input"),i;if(t.target instanceof HTMLInputElement&&t.target.type==="range"){let u=a.querySelector(".slider-value"),c=u.attributes.getNamedItem("value-type").value||"";i=l.value,u.innerText=`${l.value}${c}`}else t.target instanceof HTMLInputElement&&t.target.type==="checkbox"?i=l.checked:(t.target instanceof HTMLInputElement&&t.target.type,i=l.value);return[n.innerText,r,i]}UpdateSetting(t,a,n){v.default.Edit(this.config.storage_key,"settings",a,n),console.log(`Saved '${t}' setting to localStorage > ${n}`)}};S.default=D});var J=h(q=>{"use strict";var ne=q&&q.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(q,"__esModule",{value:!0});var V=ne(E());q.default={async CopyScript(){return await navigator.clipboard.writeText(V.default.GetValue()||""),console.log("Copied editor content to clipboard.")},Download(e){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e?e||"":V.default.GetValue())),t.setAttribute("download",`GoofyLuaUglifier_${new Date().getTime()}.lua`),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}});var H=h(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});function re(e=null){var t=new Date(e),a=new Date,n=a.getTime(),r=t.getTime(),l=t.getFullYear(),i=a.getFullYear(),u=t.getMonth(),c=a.getMonth(),o={};o.year=a.getFullYear()-t.getFullYear(),o.month=c+12*i-(u+12*l),o.week=Math.floor((n-r)/(24*3600*1e3*7)),o.day=Math.floor((n-r)/(24*3600*1e3)),o.hour=Math.floor((n-r)/(3600*1e3)),o.minute=Math.floor((n-r)/(60*1e3)),o.second=Math.floor((n-r)/1e3);for(let m in o)o[m]==0&&delete o[m];var s="just now";if(typeof Object.keys(o)[0]<"u"){var f=Object.keys(o)[0],d=o[Object.keys(o)[0]];f+=d>1?"s":"",s=d+" "+f+" ago"}return s}L.default=re});var Y=h(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default={GetCookie(e){let a=`; ${document.cookie}`.split(`; ${e}=`);if(a.length===2)return a.pop().split(";").shift()},DeleteCookie(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}});var Q=h(g=>{var ie=g&&g.__createBinding||(Object.create?function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]}),le=g&&g.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),se=g&&g.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&ie(t,e,a);return le(t,e),t},y=g&&g.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(g,"__esModule",{value:!0});var ue=y(X()),F=y(k()),b=y(E()),ce=y(R()),P=y(O()),B=y(J()),_=se(Q()),de=y(H()),z=y(Y()),U=z.default.GetCookie("_GLUSES")||void 0,A=null,K=!1;(0,ue.default)(async()=>{let e=new ce.default;M.AutoInit(),e.init();let t=document.querySelectorAll(".function-btn"),a=document.querySelectorAll(".sidebar-btn"),n={copy:B.default.CopyScript,download:B.default.Download,clear:b.default.Clear};t.forEach(o=>{$(o).on("click",async s=>{if(_.default.block_requests)return;_.default.block_requests=!0,b.default.ToggleLoading("Processing");let f=s.target.attributes.getNamedItem("data-function"),d=await F.default.new(f,btoa(String.fromCharCode.apply(null,new Uint16Array(window.pako.gzip(b.default.GetValue())))),_.default.options,P.default.GetKey(e.config.storage_key,"settings"),U),m=d.headers,j=m.get("uglifier-session"),W=m.get("uglifier-ms-time");if(d instanceof Response){let N="";d.ok?(N=await d.text(),U=j,console.log(`[Server] Uglification process took ${W}ms. (session: ${U})`),b.default.SetValue(N)):b.default.SetValue(F.default.CreateResponseError("lua",`${d.statusText} - ${d.status}`,b.default.GetValue()))}b.default.ToggleLoading(),_.default.block_requests=!1})}),a.forEach(o=>{$(o).on("click",async s=>{let f=s.target.attributes.getNamedItem("data-function")?.value;if(f&&n[f])try{n[f]()}catch(d){console.error(`[Quick Action Error]: ${d}`)}})});async function r(){await fetch(`${_.default.options.api_url()}api/cache/RobloxConstants:LastUpdated`,{cache:"no-store"}).then(o=>o.json()).then(o=>{P.default.Set(e.config.storage_key,"RobloxConstants:LastUpdated",o),A=o}).catch(o=>{console.error(o),A=P.default.GetKey(e.config.storage_key,"RobloxConstants:LastUpdated"),M.toast({html:`Error: ${o}`})}).finally(()=>{$("#rbxc_lastupdated").text((0,de.default)(A))})}$(".rbxc_update").on("click",async()=>{$(".rbxc_update").addClass("disabled").text("Requesting..."),await fetch(`${_.default.options.api_url()}api/constants/update/roblox`,{method:"POST"}).then(o=>o.json()).then(async o=>{M.toast({html:`Server Response: ${o.message} - ${o.code}${o.error?`<br>Error: ${o.error}`:""}`}),console.log(o),await r()}).finally(()=>{$(".rbxc_update").removeClass("disabled").text("Update now")}).catch(o=>{console.error(o),M.toast({html:`Error: ${o}`})})});async function l(){await fetch(`${_.default.options.api_url()}api/uglifier/preset`).then(o=>o.json()).then(o=>{Object.keys(o).forEach(s=>{let f=document.querySelector(".preset").cloneNode(!0),d="";$(f).removeClass("hide"),$(f).find(".preset-name").text(s),document.querySelector(".presets-content").append(f),o[s].forEach((m,j)=>{d+=m+(j===o[s].length-1?"":", ")}),$(f).find(".preset-funcs").text(d)})})}async function i(){await fetch(`${_.default.options.api_url()}api/uglifier/stats`,{cache:"no-store"}).then(o=>o.json()).then(o=>{$("#total_requests").text(o.total_requests),$("#total_functions_called").text(o.total_functions_called)})}async function u(){K!==!0&&(K=!0,z.default.GetCookie("_ASID")?fetch(`${_.default.options.mopsfl_api_url()}oauth/account/get`,{credentials:"include"}).then(o=>o.json()).then(async o=>{o.code===0?($(".acc_logout").hide(),$("#account_username").text("Not logged in"),$("#account_id").text("N/A"),$("#discord-avatar").hide()):o.oauth==="discord"&&(await fetch(`${_.default.options.api_url()}oauth/account/isTester`,{credentials:"include"}).then(s=>s.json()).then(s=>{$("#tester_access").text(s==!0?"Yes":"No")}),window.discordAccount=o.user,window.discordAvatar=`https://cdn.discordapp.com/avatars/${o.user.id}/${o.user.avatar}`,c(!0))}):c(!1))}function c(o){o===!0?($(".acc_login").hide(),$("#discord-avatar").show(),$(".acc_logout").show(),$("#account_username").text(window.discordAccount.username),$("#account_id").text(window.discordAccount.id),$("#discord-avatar").attr("src",window.discordAvatar)):($(".acc_logout").hide(),$(".acc_login").show(),$("#account_username").text("Not logged in"),$("#account_id").text("N/A"),$("#discord-avatar").hide())}$(".acc_login").on("click",async()=>{location.replace(`${_.default.options.mopsfl_api_url()}oauth/login/discord`)}),$(".acc_logout").on("click",()=>{$(".acc_logout").text("...").attr("disabled","disabled"),fetch(`${_.default.options.mopsfl_api_url()}oauth/account/logout`,{credentials:"include"}).then(o=>{c(!1),$(".acc_logout").text("Logout").removeAttr("disabled")})}),M.Modal.getInstance(document.querySelector("#infomodal")).options.onOpenStart=async()=>{u().catch(console.error),r().catch(console.error),i().catch(console.error)}});g.default={block_requests:!1,options:{api_url:()=>location.hostname=="localhost"&&!window.forceProduction?"http://localhost:6968/v1/":"https://goofyluauglifier.mopsfl.de/v1/",mopsfl_api_url:()=>location.hostname=="localhost"&&!window.forceProduction?"http://localhost:6969/v1/":"https://api.mopsfl.de/v1/"}}});export default Q();
