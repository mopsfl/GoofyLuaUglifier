import{a as h,b as z}from"../chunk-ZIMNNZGL.js";var E=h(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default={GetValue(){return window.monaco_editor?.getEditors()[0].getValue()},SetValue(e){return window.monaco_editor?.getEditors()[0].setValue(e)},Clear(){return window.monaco_editor?.getEditors()[0].setValue("")},GetDomElement(){return window.monaco_editor?.getEditors()[0].getDomNode()},ToggleLoading(e="Loading"){let t=document.querySelector(".loadingtext");document.querySelector(".main").classList.toggle("blur"),t.innerText=`${e}...`,t.classList.toggle("hide")},SetLoadingText(e="Loading"){let t=document.querySelector(".loadingtext");t.innerText=`${e}...`}}});var k=h(v=>{"use strict";var N=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(v,"__esModule",{value:!0});var j=N(E()),Q=N(k());v.default={async new(e,t,a,n,r){if(!(e instanceof Attr))return Promise.reject("invalid arguments");let u=new Date().getTime();return console.log("new function request",e),await fetch(`${a.api_url()}${e.value}`,{method:"POST",body:t,credentials:"include",headers:{"uglifier-options":JSON.stringify(n),"uglifier-session":r}}).catch(l=>{let o=l;throw j.default.SetValue(Q.default.CreateResponseError("lua",o.message,j.default.GetValue())),j.default.ToggleLoading(),l}).finally(()=>{console.log(`[Client] Function request finished. (took ${new Date().getTime()-u}ms)`),console.log({f:e.value,u:a.api_url(),t:new Date().getTime()-u,s:r||null,o:Object.values(n)})})},CreateResponseError(e,t,a){let n=t;switch(a&&(a=a.replace(/--\[\[(.|\n)*]]/gm,"")),e){case"lua":{n=`--[[
                  \u250C GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  \u2502
                  \u2514 ${t}
                ]]${a?`


${a}`:""}`.replace(/^\s+/gm,"");break}}return n},EncodeRequestDataQuery(e){return encodeURIComponent(btoa(String.fromCharCode.apply(null,new Uint16Array(window.pako.gzip(JSON.stringify(e))))))}}});var O=h(_=>{"use strict";var W=_&&_.__createBinding||(Object.create?function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]}),X=_&&_.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Z=_&&_.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&W(t,e,a);return X(t,e),t};Object.defineProperty(_,"__esModule",{value:!0});var x=Z(O());_.default={Create(e,t){return localStorage.setItem(e,btoa(JSON.stringify(t||{})))},Set(e,t,a){let n=x.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));if(!n)return console.warn(`invalid localstorage key '${e}'`);n[t]=a,localStorage.setItem(e,btoa(JSON.stringify(n)))},Edit(e,t,a,n){let r=x.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));if(!r)return console.warn(`invalid localstorage key '${e}'`);r[t][a]=n,localStorage.setItem(e,btoa(JSON.stringify(r)))},GetKey(e,t){let a=x.default.Exists(e)&&JSON.parse(atob(localStorage.getItem(e)));return a?a[t]:console.warn(`invalid localstorage key '${e}'`)},Exists(e){return localStorage.getItem(e)},Clear(e){return localStorage.removeItem(e)}}});var G=h(w=>{"use strict";var ee=w&&w.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(w,"__esModule",{value:!0});var m=ee(O()),T=class{config;constructor(t={storage_key:"_goofyuglifier",default_settings:{settings:{beautify_output:!1,minify_output:!1,target_lua_version:"5.3",chinese_nonsense_characters:!0,ignore_bytecode:!1,ignore_bytestring:!0,watermark:"",protect_watermark:!1,tester_access_key:"",byte_encrypt_all_constants:!1,rename_global_functions:!1,table_length_number_rate:25,table_length_number_memestrings:"",number_transform_offset_length:999999,use_all_mathoperators_number_transform:!1,memoize_function_calls:!1,bytecode_watermark:""}}}){this.config=t,m.default.Exists(this.config.storage_key)||m.default.Create(this.config.storage_key,this.config.default_settings)}init(t){let a;t&&(m.default.Clear(this.config.storage_key),m.default.Create(this.config.storage_key,this.config.default_settings)),a=m.default.GetKey(this.config.storage_key,"settings"),document.querySelectorAll(".setting").forEach(n=>{let r=n.querySelector("input"),u=$(r).attr("id");if(u){r.addEventListener("input",o=>{let[s,i,c]=this.HandleInput(o,n);this.UpdateSetting(s,i,c)});let l=a[u];switch(l===void 0&&(l=this.config.default_settings.settings[u],a[u]=l,this.UpdateSetting(u,u,l),console.warn(`[Settings]: added missing setting > ${u} = ${a[u]}`)),r.type){case"checkbox":r.checked=l;break;case"range":let o=n.querySelector(".slider-value"),s=o.attributes.getNamedItem("value-type").value||"";o.innerText=`${l}${s}`,r.value=l;break;case"text":r.value=l;break;case"password":r.value=l;break;default:console.warn(`Invalid input type <${r.type}>`);break}}else if(r.classList.contains("select-dropdown")){let l=$(r).parent()[0].querySelector("select"),o=l.getAttribute("id"),s=a[o];s===void 0&&(s=this.config.default_settings.settings[o],a[o]=s,console.warn(`[Settings]: added missing setting > ${o}`)),r.value=s,l.value=s,l.addEventListener("change",i=>{let[c,g,p]=this.HandleInput(i,n);this.UpdateSetting(c,g,p)})}}),document.querySelector("#resetdefault").addEventListener("click",n=>{this.init(!0),console.log("Reseted settings to default",this.config.default_settings)})}HandleInput(t,a){console.log(a);let n=a.querySelector(".setting-name"),r=$(a.querySelector("input")).attr("id")||$(a).children(".select-wrapper").children("select").attr("id"),u=a.querySelector("input"),l;if(t.target instanceof HTMLInputElement&&t.target.type==="range"){let o=a.querySelector(".slider-value"),s=o.attributes.getNamedItem("value-type").value||"";l=u.value,o.innerText=`${u.value}${s}`}else t.target instanceof HTMLInputElement&&t.target.type==="checkbox"?l=u.checked:(t.target instanceof HTMLInputElement&&t.target.type,l=u.value);return[n.innerText,r,l]}UpdateSetting(t,a,n){m.default.Edit(this.config.storage_key,"settings",a,n),console.log(`Saved '${t}' setting to localStorage > ${n}`)}};w.default=T});var V=h(S=>{"use strict";var te=S&&S.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(S,"__esModule",{value:!0});var R=te(E());S.default={async CopyScript(){return await navigator.clipboard.writeText(R.default.GetValue()||""),console.log("Copied editor content to clipboard.")},Download(e){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e?e||"":R.default.GetValue())),t.setAttribute("download",`GoofyLuaUglifier_${new Date().getTime()}.lua`),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}});var J=h(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});function ae(e=null){var t=new Date(e),a=new Date,n=a.getTime(),r=t.getTime(),u=t.getFullYear(),l=a.getFullYear(),o=t.getMonth(),s=a.getMonth(),i={};i.year=a.getFullYear()-t.getFullYear(),i.month=s+12*l-(o+12*u),i.week=Math.floor((n-r)/(24*3600*1e3*7)),i.day=Math.floor((n-r)/(24*3600*1e3)),i.hour=Math.floor((n-r)/(3600*1e3)),i.minute=Math.floor((n-r)/(60*1e3)),i.second=Math.floor((n-r)/1e3);for(let q in i)i[q]==0&&delete i[q];var c="just now";if(typeof Object.keys(i)[0]<"u"){var g=Object.keys(i)[0],p=i[Object.keys(i)[0]];g+=p>1?"s":"",c=p+" "+g+" ago"}return c}D.default=ae});var Y=h(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.default={GetCookie(e){let a=`; ${document.cookie}`.split(`; ${e}=`);if(a.length===2)return a.pop().split(";").shift()},DeleteCookie(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}});var K=h(f=>{var oe=f&&f.__createBinding||(Object.create?function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]}),ne=f&&f.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),re=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&oe(t,e,a);return ne(t,e),t},y=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(f,"__esModule",{value:!0});var ie=y(z()),H=y(k()),b=y(E()),le=y(G()),I=y(O()),F=y(V()),d=re(K()),se=y(J()),B=y(Y()),P=B.default.GetCookie("_GLUSES")||void 0,A=null;(0,ie.default)(async()=>{let e=new le.default;M.AutoInit(),e.init();let t=document.querySelectorAll(".function-btn"),a=document.querySelectorAll(".sidebar-btn"),n={copy:F.default.CopyScript,download:F.default.Download,clear:b.default.Clear};t.forEach(o=>{$(o).on("click",async s=>{if(d.default.block_requests)return;d.default.block_requests=!0,b.default.ToggleLoading("Processing");let i=s.target.attributes.getNamedItem("data-function"),c=await H.default.new(i,btoa(String.fromCharCode.apply(null,new Uint16Array(window.pako.gzip(b.default.GetValue())))),d.default.options,I.default.GetKey(e.config.storage_key,"settings"),P),g=c.headers,p=g.get("uglifier-session"),q=g.get("uglifier-ms-time");if(c instanceof Response){let U="";c.ok?(U=await c.text(),P=p,console.log(`[Server] Uglification process took ${q}ms. (session: ${P})`),b.default.SetValue(U)):b.default.SetValue(H.default.CreateResponseError("lua",`${c.statusText} - ${c.status}`,b.default.GetValue()))}b.default.ToggleLoading(),d.default.block_requests=!1})}),a.forEach(o=>{$(o).on("click",async s=>{let i=s.target.attributes.getNamedItem("data-function")?.value;if(i&&n[i])try{n[i]()}catch(c){console.error(`[Quick Action Error]: ${c}`)}})});async function r(){await fetch(`${d.default.options.api_url()}cache/RobloxConstants:LastUpdated`).then(o=>o.json()).then(o=>{I.default.Set(e.config.storage_key,"RobloxConstants:LastUpdated",o),A=o}).catch(o=>{console.error(o),A=I.default.GetKey(e.config.storage_key,"RobloxConstants:LastUpdated"),M.toast({html:`Error: ${o}`})}).finally(()=>{$("#rbxc_lastupdated").text((0,se.default)(A))})}$(".rbxc_update").on("click",async()=>{$(".rbxc_update").addClass("disabled").text("Requesting..."),await fetch(`${d.default.options.api_url()}constants/update/roblox`,{method:"POST"}).then(o=>o.json()).then(async o=>{M.toast({html:`Server Response: ${o.message} - ${o.code}${o.error?`<br>Error: ${o.error}`:""}`}),console.log(o),await r()}).finally(()=>{$(".rbxc_update").removeClass("disabled").text("Update now")}).catch(o=>{console.error(o),M.toast({html:`Error: ${o}`})})});async function u(){await fetch(`${d.default.options.api_url()}uglifier/preset`).then(o=>o.json()).then(o=>{Object.keys(o).forEach(s=>{let i=document.querySelector(".preset").cloneNode(!0),c="";$(i).removeClass("hide"),$(i).find(".preset-name").text(s),document.querySelector(".presets-content").append(i),o[s].forEach((g,p)=>{c+=g+(p===o[s].length-1?"":", ")}),$(i).find(".preset-funcs").text(c)})})}await r();function l(o){o===!0?($(".acc_login").hide(),$("#discord-avatar").show(),$(".acc_logout").show(),$("#account_username").text(window.discordAccount.username),$("#account_id").text(window.discordAccount.id),$("#discord-avatar").attr("src",window.discordAvatar)):($(".acc_logout").hide(),$(".acc_login").show(),$("#account_username").text("Not logged in"),$("#account_id").text("N/A"),$("#discord-avatar").hide())}$(".acc_login").on("click",async()=>{location.replace(`${d.default.options.mopsfl_api_url()}oauth/login/discord`)}),$(".acc_logout").on("click",()=>{$(".acc_logout").text("...").attr("disabled","disabled"),fetch(`${d.default.options.mopsfl_api_url()}oauth/account/logout`,{credentials:"include"}).then(o=>{l(!1),$(".acc_logout").text("Logout").removeAttr("disabled")})}),B.default.GetCookie("_ASID")?fetch(`${d.default.options.mopsfl_api_url()}oauth/account/get`,{credentials:"include"}).then(o=>o.json()).then(async o=>{o.code===0?($(".acc_logout").hide(),$("#account_username").text("Not logged in"),$("#account_id").text("N/A"),$("#discord-avatar").hide()):o.oauth==="discord"&&(await fetch(`${d.default.options.api_url()}oauth/account/isTester`,{credentials:"include"}).then(s=>s.json()).then(s=>{$("#tester_access").text(s==!0?"Yes":"No")}),window.discordAccount=o.user,window.discordAvatar=`https://cdn.discordapp.com/avatars/${o.user.id}/${o.user.avatar}`,l(!0))}):l(!1)});f.default={block_requests:!1,options:{api_url:()=>location.hostname=="localhost"&&!window.forceProduction?"http://localhost:6968/v1/":"https://goofyluauglifier.mopsfl.de/v1/",mopsfl_api_url:()=>location.hostname=="localhost"&&!window.forceProduction?"http://localhost:6969/v1/":"https://api.mopsfl.de/v1/"}}});export default K();
