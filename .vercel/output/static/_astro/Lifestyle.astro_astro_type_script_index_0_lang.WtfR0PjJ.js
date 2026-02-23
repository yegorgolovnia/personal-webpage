const $=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=new WeakMap;function y(e){if(b.has(e))return b.get(e);const t=e.querySelector(".cube-wrapper");if(!t)return null;let r=0,a=!1,o;const s=()=>e.querySelectorAll(".face"),d=()=>parseInt(e.getAttribute("data-total")||"1"),u=n=>{s().forEach((l,f)=>{f===n?l.classList.add("active-face"):l.classList.remove("active-face"),Math.abs(f-n)<=1?l.classList.remove("hidden-face"):l.classList.add("hidden-face")}),n===0?e.classList.add("first-card"):e.classList.remove("first-card")},c=()=>{r=0,t.style.transform="rotateX(0deg)",u(0)},m=n=>{if(a)return;a=!0;const i=d(),l=r+n;if(l>=0&&l<i){r=l;const f=r*90;t.style.transform=`rotateX(${f}deg)`,u(r)}clearTimeout(o),o=setTimeout(()=>{a=!1},500)};e.addEventListener("wheel",n=>{if($)return;const i=n;if(i.preventDefault(),Math.abs(i.deltaY)<10)return;const l=i.deltaY>0?1:-1;m(l)},{passive:!1});let v=0,h=0;e.addEventListener("touchstart",n=>{v=n.touches[0].clientY},{passive:!1}),e.addEventListener("touchmove",n=>{if($)return;n.preventDefault();const i=n.touches[0].clientY,l=v-i,f=40,w=Date.now();if(!(w-h<300)&&Math.abs(l)>f){const M=l>0?1:-1;m(M),v=i,h=w}},{passive:!1}),e.addEventListener("touchend",()=>{},{passive:!1});const g={reset:c};return b.set(e,g),c(),g}function p(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function L(e){const t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60;return t>0?`${t}h ${r}m`:`${r}m ${a}s`}function S(e,t,r=!1){let a;r?a=e/60/(t/100):a=e/60/(t/1e3);const o=Math.floor(a),s=Math.round((a-o)*60);return`${o}:${s.toString().padStart(2,"0")}`}function F(e,t){return(t/e*3.6).toFixed(1)}function D(e){if(!e)return{label1:"-",val1:"-",label2:"-",val2:"-"};const t=e.type,r=t==="Run"||t==="Walk"||t==="Hike",a=t==="Ride"||t==="VirtualRide",o=t==="Swim";let s=0;e.calories&&(s=Math.round(e.calories));const d=(e.distance/1e3).toFixed(2);let c={label1:"Time",val1:L(e.moving_time),label2:"Burn",val2:s>0?`${s}kcal`:"-"};return r?c={label1:"Dist",val1:`${d}km`,label2:s>0?"Burn":"Pace",val2:s>0?`${s}kcal`:`${S(e.moving_time,e.distance)}/km`}:a?c={label1:"Dist",val1:`${d}km`,label2:s>0?"Burn":"Speed",val2:s>0?`${s}kcal`:`${F(e.moving_time,e.distance)}km/h`}:o&&(c={label1:"Dist",val1:`${e.distance.toFixed(0)}m`,label2:s>0?"Burn":"Pace",val2:s>0?`${s}kcal`:`${S(e.moving_time,e.distance,!0)}/100m`}),c}function A(e){if(!e||e.length===0)return'<div class="face strava empty" style="--i: 0"><span class="mono">No data available</span></div>';const t=e.map((d,u)=>{const c=D(d),m=d.start_date?new Date(d.start_date).toLocaleDateString(void 0,{month:"short",day:"numeric"}):"",v=p(d.type||"Activity"),h=p(c.label1),g=p(c.val1),n=p(c.label2),i=p(c.val2);return`
                <a href="https://www.strava.com/activities/${d.id}" target="_blank" rel="noopener noreferrer" class="face strava" style="--i: ${u}">
                    <div class="icon-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span class="mono">Strava / Workout</span>
                    </div>
                    <div class="content">
                        <div class="activity-meta">
                            <span class="type-large">${v}</span>
                            <span class="date mono">${p(m)}</span>
                        </div>
                        <div class="stat-row">
                            <div>
                                <span class="label mono">${h}</span>
                                <div class="val">${g}</div>
                            </div>
                            <div>
                                <span class="label mono">${n}</span>
                                <div class="val">${i}</div>
                            </div>
                        </div>
                    </div>
                    <div class="status mono">
                        ${u===0?'<span class="pulse"></span>':""}
                        ${u===0?"Latest Activity":"Past Activity"}
                    </div>
                </a>
            `}).join(""),r=e.length,a=e.length+1,o=`
            <a href="https://www.strava.com/athletes/yegorgolovnia" target="_blank" rel="noopener noreferrer" class="face strava profile-card" style="--i: ${r}">
                <div class="icon-header">
                    <span class="mono">Strava / Profile</span>
                </div>
                <div class="center-msg mono">
                    <span>Follow me on Strava ↗</span>
                </div>
            </a>
        `,s=`<div class="face strava dummy-face" style="--i: ${a}"></div>`;return t+o+s}async function k(){try{const e=await fetch("/api/strava.json");if(!e.ok)throw new Error("Failed to fetch Strava");const t=await e.json(),r=Array.isArray(t)?t.slice(0,5):[],a=document.querySelector(".strava-cube");if(!a)return;const o=a.querySelector(".cube");if(!o)return;a.setAttribute("data-total",String(r.length+1)),o.innerHTML=A(r);const s=y(a);s&&s.reset()}catch(e){console.warn("Strava refresh failed",e)}}document.querySelectorAll(".cube-container").forEach(e=>{y(e)});k();setInterval(k,1800*1e3);
