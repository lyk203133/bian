const __vite__fileDeps=["assets/index-BRiHVxG9.js","assets/hooks.module-DfaYuRxX.js","assets/___vite-browser-external_commonjs-proxy-DryavEhw.js","assets/index-B1kJlHKY.js","assets/index.es-mguM07ao.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function hd(n){return{formatters:void 0,fees:void 0,serializers:void 0,...n}}const qh="2.18.2",Gh=n=>n,Jc=n=>n,Yh=()=>`viem@${qh}`;let Z=class hc extends Error{constructor(e,t={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Yh()});const r=t.cause instanceof hc?t.cause.details:(i=t.cause)!=null&&i.message?t.cause.message:t.details,o=t.cause instanceof hc&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${t.docsBaseUrl??"https://viem.sh"}${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return fd(this,e)}};function fd(n,e){return e!=null&&e(n)?n:n&&typeof n=="object"&&"cause"in n?fd(n.cause,e):e?null:n}class Kh extends Z{constructor({max:e,min:t,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Jh extends Z{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class Qh extends Z{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function _i(n,{strict:e=!0}={}){return!n||typeof n!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(n):n.startsWith("0x")}function Ge(n){return _i(n,{strict:!1})?Math.ceil((n.length-2)/2):n.length}function Fo(n,{dir:e="left"}={}){let t=typeof n=="string"?n.replace("0x",""):n,r=0;for(let o=0;o<t.length-1&&t[e==="left"?o:t.length-o-1].toString()==="0";o++)r++;return t=e==="left"?t.slice(r):t.slice(0,t.length-r),typeof n=="string"?(t.length===1&&e==="right"&&(t=`${t}0`),`0x${t.length%2===1?`0${t}`:t}`):t}class pd extends Z{constructor({offset:e,position:t,size:r}){super(`Slice ${t==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class gd extends Z{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class zl extends Z{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function Ei(n,{dir:e,size:t=32}={}){return typeof n=="string"?On(n,{dir:e,size:t}):Xh(n,{dir:e,size:t})}function On(n,{dir:e,size:t=32}={}){if(t===null)return n;const r=n.replace("0x","");if(r.length>t*2)throw new gd({size:Math.ceil(r.length/2),targetSize:t,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](t*2,"0")}`}function Xh(n,{dir:e,size:t=32}={}){if(t===null)return n;if(n.length>t)throw new gd({size:n.length,targetSize:t,type:"bytes"});const r=new Uint8Array(t);for(let o=0;o<t;o++){const i=e==="right";r[i?o:t-o-1]=n[i?o:n.length-o-1]}return r}const ef=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function Qs(n,e={}){return typeof n=="number"||typeof n=="bigint"?Ae(n,e):typeof n=="string"?Xs(n,e):typeof n=="boolean"?md(n,e):xt(n,e)}function md(n,e={}){const t=`0x${Number(n)}`;return typeof e.size=="number"?(Bt(t,{size:e.size}),Ei(t,{size:e.size})):t}function xt(n,e={}){let t="";for(let o=0;o<n.length;o++)t+=ef[n[o]];const r=`0x${t}`;return typeof e.size=="number"?(Bt(r,{size:e.size}),Ei(r,{dir:"right",size:e.size})):r}function Ae(n,e={}){const{signed:t,size:r}=e,o=BigInt(n);let i;r?t?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof n=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&t?-i-1n:0;if(i&&o>i||o<s){const c=typeof n=="bigint"?"n":"";throw new Kh({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:t,size:r,value:`${n}${c}`})}const a=`0x${(t&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?Ei(a,{size:r}):a}const tf=new TextEncoder;function Xs(n,e={}){const t=tf.encode(n);return xt(t,e)}const nf=new TextEncoder;function Qc(n,e={}){return typeof n=="number"||typeof n=="bigint"?of(n,e):typeof n=="boolean"?rf(n,e):_i(n)?ea(n,e):cr(n,e)}function rf(n,e={}){const t=new Uint8Array(1);return t[0]=Number(n),typeof e.size=="number"?(Bt(t,{size:e.size}),Ei(t,{size:e.size})):t}const cn={zero:48,nine:57,A:65,F:70,a:97,f:102};function Fl(n){if(n>=cn.zero&&n<=cn.nine)return n-cn.zero;if(n>=cn.A&&n<=cn.F)return n-(cn.A-10);if(n>=cn.a&&n<=cn.f)return n-(cn.a-10)}function ea(n,e={}){let t=n;e.size&&(Bt(t,{size:e.size}),t=Ei(t,{dir:"right",size:e.size}));let r=t.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,i=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const c=Fl(r.charCodeAt(a++)),l=Fl(r.charCodeAt(a++));if(c===void 0||l===void 0)throw new Z(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);i[s]=c*16+l}return i}function of(n,e){const t=Ae(n,e);return ea(t)}function cr(n,e={}){const t=nf.encode(n);return typeof e.size=="number"?(Bt(t,{size:e.size}),Ei(t,{dir:"right",size:e.size})):t}function Bt(n,{size:e}){if(Ge(n)>e)throw new Qh({givenSize:Ge(n),maxSize:e})}function wd(n,e={}){const{signed:t}=e;e.size&&Bt(n,{size:e.size});const r=BigInt(n);if(!t)return r;const o=(n.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function sf(n,e={}){return Number(wd(n,e))}function af(n,e={}){let t=ea(n);return e.size&&(Bt(t,{size:e.size}),t=Fo(t,{dir:"right"})),new TextDecoder().decode(t)}class Ki extends Z{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Xc extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function Hl(n){if(!Number.isSafeInteger(n)||n<0)throw new Error(`Wrong positive integer: ${n}`)}function bd(n,...e){if(!(n instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(n.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`)}function Zl(n,e=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(e&&n.finished)throw new Error("Hash#digest() has already been called")}function cf(n,e){bd(n);const t=e.outputLen;if(n.length<t)throw new Error(`digestInto() expects output buffer of length at least ${t}`)}const ts=BigInt(2**32-1),Vl=BigInt(32);function lf(n,e=!1){return e?{h:Number(n&ts),l:Number(n>>Vl&ts)}:{h:Number(n>>Vl&ts)|0,l:Number(n&ts)|0}}function uf(n,e=!1){let t=new Uint32Array(n.length),r=new Uint32Array(n.length);for(let o=0;o<n.length;o++){const{h:i,l:s}=lf(n[o],e);[t[o],r[o]]=[i,s]}return[t,r]}const df=(n,e,t)=>n<<t|e>>>32-t,hf=(n,e,t)=>e<<t|n>>>32-t,ff=(n,e,t)=>e<<t-32|n>>>64-t,pf=(n,e,t)=>n<<t-32|e>>>64-t;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const gf=n=>n instanceof Uint8Array,mf=n=>new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4)),wf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!wf)throw new Error("Non little-endian hardware is not supported");function bf(n){if(typeof n!="string")throw new Error(`utf8ToBytes expected string, got ${typeof n}`);return new Uint8Array(new TextEncoder().encode(n))}function vd(n){if(typeof n=="string"&&(n=bf(n)),!gf(n))throw new Error(`expected Uint8Array, got ${typeof n}`);return n}class vf{clone(){return this._cloneInto()}}function yf(n){const e=r=>n().update(vd(r)).digest(),t=n();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>n(),e}const[yd,xd,Cd]=[[],[],[]],xf=BigInt(0),ki=BigInt(1),Cf=BigInt(2),_f=BigInt(7),Ef=BigInt(256),$f=BigInt(113);for(let n=0,e=ki,t=1,r=0;n<24;n++){[t,r]=[r,(2*t+3*r)%5],yd.push(2*(5*r+t)),xd.push((n+1)*(n+2)/2%64);let o=xf;for(let i=0;i<7;i++)e=(e<<ki^(e>>_f)*$f)%Ef,e&Cf&&(o^=ki<<(ki<<BigInt(i))-ki);Cd.push(o)}const[Sf,Af]=uf(Cd,!0),ql=(n,e,t)=>t>32?ff(n,e,t):df(n,e,t),Gl=(n,e,t)=>t>32?pf(n,e,t):hf(n,e,t);function If(n,e=24){const t=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)t[s]=n[s]^n[s+10]^n[s+20]^n[s+30]^n[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=t[c],h=t[c+1],p=ql(l,h,1)^t[a],f=Gl(l,h,1)^t[a+1];for(let m=0;m<50;m+=10)n[s+m]^=p,n[s+m+1]^=f}let o=n[2],i=n[3];for(let s=0;s<24;s++){const a=xd[s],c=ql(o,i,a),l=Gl(o,i,a),h=yd[s];o=n[h],i=n[h+1],n[h]=c,n[h+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)t[a]=n[s+a];for(let a=0;a<10;a++)n[s+a]^=~t[(a+2)%10]&t[(a+4)%10]}n[0]^=Sf[r],n[1]^=Af[r]}t.fill(0)}class el extends vf{constructor(e,t,r,o=!1,i=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Hl(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=mf(this.state)}keccak(){If(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Zl(this);const{blockLen:t,state:r}=this;e=vd(e);const o=e.length;for(let i=0;i<o;){const s=Math.min(t-this.pos,o-i);for(let a=0;a<s;a++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:r,blockLen:o}=this;e[r]^=t,t&128&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){Zl(this,!1),bd(e),this.finish();const t=this.state,{blockLen:r}=this;for(let o=0,i=e.length;o<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-o);e.set(t.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Hl(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(cf(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:r,outputLen:o,rounds:i,enableXOF:s}=this;return e||(e=new el(t,r,o,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const Rf=(n,e,t)=>yf(()=>new el(e,n,t)),Tf=Rf(1,136,256/8);function Qr(n,e){const t=e||"hex",r=Tf(_i(n,{strict:!1})?Qc(n):n);return t==="bytes"?r:Qs(r)}const Ua=new Xc(8192);function tl(n,e){if(Ua.has(`${n}.${e}`))return Ua.get(`${n}.${e}`);const t=e?`${e}${n.toLowerCase()}`:n.substring(2).toLowerCase(),r=Qr(cr(t),"bytes"),o=(e?t.substring(`${e}0x`.length):t).split("");for(let s=0;s<40;s+=2)r[s>>1]>>4>=8&&o[s]&&(o[s]=o[s].toUpperCase()),(r[s>>1]&15)>=8&&o[s+1]&&(o[s+1]=o[s+1].toUpperCase());const i=`0x${o.join("")}`;return Ua.set(`${n}.${e}`,i),i}function et(n,e){if(!Dn(n,{strict:!1}))throw new Ki({address:n});return tl(n,e)}const Of=/^0x[a-fA-F0-9]{40}$/,Da=new Xc(8192);function Dn(n,e){const{strict:t=!0}=e??{},r=`${n}.${t}`;if(Da.has(r))return Da.get(r);const o=Of.test(n)?n.toLowerCase()===n?!0:t?tl(n)===n:!0:!1;return Da.set(r,o),o}function dr(n){return typeof n[0]=="string"?nl(n):Pf(n)}function Pf(n){let e=0;for(const o of n)e+=o.length;const t=new Uint8Array(e);let r=0;for(const o of n)t.set(o,r),r+=o.length;return t}function nl(n){return`0x${n.reduce((e,t)=>e+t.replace("0x",""),"")}`}class Yl extends Z{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class kf extends Z{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Nf extends Z{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const Mf={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Nf({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(n){if(n<0||n>this.bytes.length-1)throw new kf({length:this.bytes.length,position:n})},decrementPosition(n){if(n<0)throw new Yl({offset:n});const e=this.position-n;this.assertPosition(e),this.position=e},getReadCount(n){return this.positionReadCount.get(n||this.position)||0},incrementPosition(n){if(n<0)throw new Yl({offset:n});const e=this.position+n;this.assertPosition(e),this.position=e},inspectByte(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(n,e){const t=e??this.position;return this.assertPosition(t+n-1),this.bytes.subarray(t,t+n)},inspectUint8(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(n){const e=n??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(n){const e=n??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(n){const e=n??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushBytes(n){this.assertPosition(this.position+n.length-1),this.bytes.set(n,this.position),this.position+=n.length},pushUint8(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushUint16(n){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,n),this.position+=2},pushUint24(n){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,n>>8),this.dataView.setUint8(this.position+2,n&255),this.position+=3},pushUint32(n){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,n),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const n=this.inspectByte();return this.position++,n},readBytes(n,e){this.assertReadLimit(),this._touch();const t=this.inspectBytes(n);return this.position+=e??n,t},readUint8(){this.assertReadLimit(),this._touch();const n=this.inspectUint8();return this.position+=1,n},readUint16(){this.assertReadLimit(),this._touch();const n=this.inspectUint16();return this.position+=2,n},readUint24(){this.assertReadLimit(),this._touch();const n=this.inspectUint24();return this.position+=3,n},readUint32(){this.assertReadLimit(),this._touch();const n=this.inspectUint32();return this.position+=4,n},get remaining(){return this.bytes.length-this.position},setPosition(n){const e=this.position;return this.assertPosition(n),this.position=n,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const n=this.getReadCount();this.positionReadCount.set(this.position,n+1),n>0&&this.recursiveReadCount++}};function Lf(n,{recursiveReadLimit:e=8192}={}){const t=Object.create(Mf);return t.bytes=n,t.dataView=new DataView(n.buffer,n.byteOffset,n.byteLength),t.positionReadCount=new Map,t.recursiveReadLimit=e,t}const Uf={gwei:9,wei:18},Df={ether:-9,wei:9},jf={ether:-18,gwei:-9};function ta(n,e){let t=n.toString();const r=t.startsWith("-");r&&(t=t.slice(1)),t=t.padStart(e,"0");let[o,i]=[t.slice(0,t.length-e),t.slice(t.length-e)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function Bf(n,e="wei"){return ta(n,Uf[e])}function lr(n,e="wei"){return ta(n,Df[e])}function _d(n){const e=Object.entries(n).map(([r,o])=>o===void 0||o===!1?null:[r,o]).filter(Boolean),t=e.reduce((r,[o])=>Math.max(r,o.length),0);return e.map(([r,o])=>`  ${`${r}:`.padEnd(t+1)}  ${o}`).join(`
`)}class Wf extends Z{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class fc extends Z{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Ed extends Z{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class Vr extends Z{constructor({cause:e,message:t}={}){var o;const r=(o=t==null?void 0:t.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Vr,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Vr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class ws extends Z{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${lr(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(ws,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class pc extends Z{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${lr(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(pc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class gc extends Z{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(gc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class mc extends Z{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(mc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class wc extends Z{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(wc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class bc extends Z{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(bc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class vc extends Z{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(vc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class yc extends Z{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(yc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class xc extends Z{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(xc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class bs extends Z{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${lr(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${lr(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(bs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class $d extends Z{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function vs(n,e,t,{strict:r}={}){return _i(n,{strict:!1})?zf(n,e,t,{strict:r}):Id(n,e,t,{strict:r})}function Sd(n,e){if(typeof e=="number"&&e>0&&e>Ge(n)-1)throw new pd({offset:e,position:"start",size:Ge(n)})}function Ad(n,e,t){if(typeof e=="number"&&typeof t=="number"&&Ge(n)!==t-e)throw new pd({offset:t,position:"end",size:Ge(n)})}function Id(n,e,t,{strict:r}={}){Sd(n,e);const o=n.slice(e,t);return r&&Ad(o,e,t),o}function zf(n,e,t,{strict:r}={}){Sd(n,e);const o=`0x${n.replace("0x","").slice((e??0)*2,(t??n.length)*2)}`;return r&&Ad(o,e,t),o}const Ff=hd({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Hf={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function Zf(n){const e={};return typeof n.accessList<"u"&&(e.accessList=n.accessList),typeof n.blobVersionedHashes<"u"&&(e.blobVersionedHashes=n.blobVersionedHashes),typeof n.blobs<"u"&&(typeof n.blobs[0]!="string"?e.blobs=n.blobs.map(t=>xt(t)):e.blobs=n.blobs),typeof n.data<"u"&&(e.data=n.data),typeof n.from<"u"&&(e.from=n.from),typeof n.gas<"u"&&(e.gas=Ae(n.gas)),typeof n.gasPrice<"u"&&(e.gasPrice=Ae(n.gasPrice)),typeof n.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=Ae(n.maxFeePerBlobGas)),typeof n.maxFeePerGas<"u"&&(e.maxFeePerGas=Ae(n.maxFeePerGas)),typeof n.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=Ae(n.maxPriorityFeePerGas)),typeof n.nonce<"u"&&(e.nonce=Ae(n.nonce)),typeof n.to<"u"&&(e.to=n.to),typeof n.type<"u"&&(e.type=Hf[n.type]),typeof n.value<"u"&&(e.value=Ae(n.value)),e}function na({blockNumber:n,chain:e,contract:t}){var o;const r=(o=e==null?void 0:e.contracts)==null?void 0:o[t];if(!r)throw new fc({chain:e,contract:{name:t}});if(n&&r.blockCreated&&r.blockCreated>n)throw new fc({blockNumber:n,chain:e,contract:{name:t,blockCreated:r.blockCreated}});return r.address}const Rd=hd({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),Vf="modulepreload",qf=function(n){return"/"+n},Kl={},Xr=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.all(t.map(a=>{if(a=qf(a),a in Kl)return;Kl[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Vf,c||(h.as="script",h.crossOrigin=""),h.href=a,s&&h.setAttribute("nonce",s),document.head.appendChild(h),c)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>e()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ra(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function b5(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}),t}function ei(n,{includeName:e=!1}={}){if(n.type!=="function"&&n.type!=="event"&&n.type!=="error")throw new op(n.type);return`${n.name}(${il(n.inputs,{includeName:e})})`}function il(n,{includeName:e=!1}={}){return n?n.map(t=>Gf(t,{includeName:e})).join(e?", ":","):""}function Gf(n,{includeName:e}){return n.type.startsWith("tuple")?`(${il(n.components,{includeName:e})})${n.type.slice(5)}`:n.type+(e&&n.name?` ${n.name}`:"")}class Yf extends Z{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class Jl extends Z{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Kf extends Z{constructor({data:e,params:t,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${il(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class ia extends Z{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class Jf extends Z{constructor({expectedLength:e,givenLength:t,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Qf extends Z{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${Ge(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Xf extends Z{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class Td extends Z{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class ys extends Z{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class ep extends Z{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class tp extends Z{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${ei(e.abiItem)}\`, and`,`\`${t.type}\` in \`${ei(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class np extends Z{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class rp extends Z{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class ip extends Z{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class op extends Z{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function Od(n,e){if(n.length!==e.length)throw new Xf({expectedLength:n.length,givenLength:e.length});const t=sp({params:n,values:e}),r=sl(t);return r.length===0?"0x":r}function sp({params:n,values:e}){const t=[];for(let r=0;r<n.length;r++)t.push(ol({param:n[r],value:e[r]}));return t}function ol({param:n,value:e}){const t=al(n.type);if(t){const[r,o]=t;return cp(e,{length:r,param:{...n,type:o}})}if(n.type==="tuple")return fp(e,{param:n});if(n.type==="address")return ap(e);if(n.type==="bool")return up(e);if(n.type.startsWith("uint")||n.type.startsWith("int")){const r=n.type.startsWith("int");return dp(e,{signed:r})}if(n.type.startsWith("bytes"))return lp(e,{param:n});if(n.type==="string")return hp(e);throw new np(n.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function sl(n){let e=0;for(let i=0;i<n.length;i++){const{dynamic:s,encoded:a}=n[i];s?e+=32:e+=Ge(a)}const t=[],r=[];let o=0;for(let i=0;i<n.length;i++){const{dynamic:s,encoded:a}=n[i];s?(t.push(Ae(e+o,{size:32})),r.push(a),o+=Ge(a)):t.push(a)}return dr([...t,...r])}function ap(n){if(!Dn(n))throw new Ki({address:n});return{dynamic:!1,encoded:On(n.toLowerCase())}}function cp(n,{length:e,param:t}){const r=e===null;if(!Array.isArray(n))throw new ip(n);if(!r&&n.length!==e)throw new Jf({expectedLength:e,givenLength:n.length,type:`${t.type}[${e}]`});let o=!1;const i=[];for(let s=0;s<n.length;s++){const a=ol({param:t,value:n[s]});a.dynamic&&(o=!0),i.push(a)}if(r||o){const s=sl(i);if(r){const a=Ae(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?dr([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:dr(i.map(({encoded:s})=>s))}}function lp(n,{param:e}){const[,t]=e.type.split("bytes"),r=Ge(n);if(!t){let o=n;return r%32!==0&&(o=On(o,{dir:"right",size:Math.ceil((n.length-2)/2/32)*32})),{dynamic:!0,encoded:dr([On(Ae(r,{size:32})),o])}}if(r!==Number.parseInt(t))throw new Qf({expectedSize:Number.parseInt(t),value:n});return{dynamic:!1,encoded:On(n,{dir:"right"})}}function up(n){if(typeof n!="boolean")throw new Z(`Invalid boolean value: "${n}" (type: ${typeof n}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:On(md(n))}}function dp(n,{signed:e}){return{dynamic:!1,encoded:Ae(n,{size:32,signed:e})}}function hp(n){const e=Xs(n),t=Math.ceil(Ge(e)/32),r=[];for(let o=0;o<t;o++)r.push(On(vs(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:dr([On(Ae(Ge(e),{size:32})),...r])}}function fp(n,{param:e}){let t=!1;const r=[];for(let o=0;o<e.components.length;o++){const i=e.components[o],s=Array.isArray(n)?o:i.name,a=ol({param:i,value:n[s]});r.push(a),a.dynamic&&(t=!0)}return{dynamic:t,encoded:t?sl(r):dr(r.map(({encoded:o})=>o))}}function al(n){const e=n.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const ja="/docs/contract/encodeDeployData";function Pd(n){const{abi:e,args:t,bytecode:r}=n;if(!t||t.length===0)return r;const o=e.find(s=>"type"in s&&s.type==="constructor");if(!o)throw new Yf({docsPath:ja});if(!("inputs"in o))throw new Jl({docsPath:ja});if(!o.inputs||o.inputs.length===0)throw new Jl({docsPath:ja});const i=Od(o.inputs,t);return nl([r,i])}function $i(n){return typeof n=="string"?{address:n,type:"json-rpc"}:n}class pp extends Z{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}const Pn=(n,e,t)=>JSON.stringify(n,(r,o)=>typeof o=="bigint"?o.toString():o,t);class zi extends Z{constructor({body:e,cause:t,details:r,headers:o,status:i,url:s}){super("HTTP request failed.",{cause:t,details:r,metaMessages:[i&&`Status: ${i}`,`URL: ${Jc(s)}`,e&&`Request body: ${Pn(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=o,this.status=i,this.url=s}}class kd extends Z{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${Jc(r)}`,`Request body: ${Pn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class Ql extends Z{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Jc(t)}`,`Request body: ${Pn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const gp=-1;class ut extends Z{constructor(e,{code:t,docsPath:r,metaMessages:o,shortMessage:i}){super(i,{cause:e,docsPath:r,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof kd?e.code:t??gp}}class Si extends ut{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class Ji extends ut{constructor(e){super(e,{code:Ji.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Ji,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Qi extends ut{constructor(e){super(e,{code:Qi.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Qi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Xi extends ut{constructor(e,{method:t}={}){super(e,{code:Xi.code,shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Xi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class eo extends ut{constructor(e){super(e,{code:eo.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(eo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class hr extends ut{constructor(e){super(e,{code:hr.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(hr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class to extends ut{constructor(e){super(e,{code:to.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(to,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class no extends ut{constructor(e){super(e,{code:no.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(no,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class kn extends ut{constructor(e){super(e,{code:kn.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(kn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class ro extends ut{constructor(e){super(e,{code:ro.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(ro,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class io extends ut{constructor(e,{method:t}={}){super(e,{code:io.code,shortMessage:`Method${t?` "${t}"`:""} is not implemented.`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(io,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class ti extends ut{constructor(e){super(e,{code:ti.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(ti,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class oo extends ut{constructor(e){super(e,{code:oo.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(oo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Te extends Si{constructor(e){super(e,{code:Te.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Te,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class so extends Si{constructor(e){super(e,{code:so.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(so,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class ao extends Si{constructor(e,{method:t}={}){super(e,{code:ao.code,shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(ao,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class co extends Si{constructor(e){super(e,{code:co.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(co,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class lo extends Si{constructor(e){super(e,{code:lo.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(lo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class ct extends Si{constructor(e){super(e,{code:ct.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(ct,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class mp extends ut{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function wp(n,e){const t=(n.details||"").toLowerCase(),r=n instanceof Z?n.walk(o=>o.code===Vr.code):n;return r instanceof Z?new Vr({cause:n,message:r.details}):Vr.nodeMessage.test(t)?new Vr({cause:n,message:n.details}):ws.nodeMessage.test(t)?new ws({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):pc.nodeMessage.test(t)?new pc({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):gc.nodeMessage.test(t)?new gc({cause:n,nonce:e==null?void 0:e.nonce}):mc.nodeMessage.test(t)?new mc({cause:n,nonce:e==null?void 0:e.nonce}):wc.nodeMessage.test(t)?new wc({cause:n,nonce:e==null?void 0:e.nonce}):bc.nodeMessage.test(t)?new bc({cause:n}):vc.nodeMessage.test(t)?new vc({cause:n,gas:e==null?void 0:e.gas}):yc.nodeMessage.test(t)?new yc({cause:n,gas:e==null?void 0:e.gas}):xc.nodeMessage.test(t)?new xc({cause:n}):bs.nodeMessage.test(t)?new bs({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new $d({cause:n})}function bp(n,{format:e}){if(!e)return{};const t={};function r(i){const s=Object.keys(i);for(const a of s)a in n&&(t[a]=n[a]),i[a]&&typeof i[a]=="object"&&!Array.isArray(i[a])&&r(i[a])}const o=e(n||{});return r(o),t}function Ho(n,e,t){const r=n[e.name];if(typeof r=="function")return r;const o=n[t];return typeof o=="function"?o:i=>e(n,i)}function vp(n){const{account:e,gasPrice:t,maxFeePerGas:r,maxPriorityFeePerGas:o,to:i}=n,s=e?$i(e):void 0;if(s&&!Dn(s.address))throw new Ki({address:s.address});if(i&&!Dn(i))throw new Ki({address:i});if(typeof t<"u"&&(typeof r<"u"||typeof o<"u"))throw new Wf;if(r&&r>2n**256n-1n)throw new ws({maxFeePerGas:r});if(o&&r&&o>r)throw new bs({maxFeePerGas:r,maxPriorityFeePerGas:o})}class yp extends Z{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class xp extends Z{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function Xl(n){return n.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function Cp(n){return n.reduce((e,{address:t,...r})=>{let o=`${e}    ${t}:
`;return r.nonce&&(o+=`      nonce: ${r.nonce}
`),r.balance&&(o+=`      balance: ${r.balance}
`),r.code&&(o+=`      code: ${r.code}
`),r.state&&(o+=`      state:
`,o+=Xl(r.state)),r.stateDiff&&(o+=`      stateDiff:
`,o+=Xl(r.stateDiff)),o},`  State Override:
`).slice(0,-1)}function eu(n){if(!(!n||n.length===0))return n.reduce((e,{slot:t,value:r})=>{if(t.length!==66)throw new zl({size:t.length,targetSize:66,type:"hex"});if(r.length!==66)throw new zl({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e},{})}function _p(n){const{balance:e,nonce:t,state:r,stateDiff:o,code:i}=n,s={};if(i!==void 0&&(s.code=i),e!==void 0&&(s.balance=Ae(e)),t!==void 0&&(s.nonce=Ae(t)),r!==void 0&&(s.state=eu(r)),o!==void 0){if(s.state)throw new xp;s.stateDiff=eu(o)}return s}function Ep(n){if(!n)return;const e={};for(const{address:t,...r}of n){if(!Dn(t,{strict:!1}))throw new Ki({address:t});if(e[t])throw new yp({address:t});e[t]=_p(r)}return e}const Cc=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Nd=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],$p=[...Nd,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Sp=[...Nd,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],tu=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];function Ap(n,e={}){typeof e.size<"u"&&Bt(n,{size:e.size});const t=xt(n,e);return wd(t,e)}function Ip(n,e={}){let t=n;if(typeof e.size<"u"&&(Bt(t,{size:e.size}),t=Fo(t)),t.length>1||t[0]>1)throw new Jh(t);return!!t[0]}function dn(n,e={}){typeof e.size<"u"&&Bt(n,{size:e.size});const t=xt(n,e);return sf(t,e)}function Rp(n,e={}){let t=n;return typeof e.size<"u"&&(Bt(t,{size:e.size}),t=Fo(t,{dir:"right"})),new TextDecoder().decode(t)}function Md(n,e){const t=typeof e=="string"?ea(e):e,r=Lf(t);if(Ge(t)===0&&n.length>0)throw new ia;if(Ge(e)&&Ge(e)<32)throw new Kf({data:typeof e=="string"?e:xt(e),params:n,size:Ge(e)});let o=0;const i=[];for(let s=0;s<n.length;++s){const a=n[s];r.setPosition(o);const[c,l]=qr(r,a,{staticPosition:0});o+=l,i.push(c)}return i}function qr(n,e,{staticPosition:t}){const r=al(e.type);if(r){const[o,i]=r;return Op(n,{...e,type:i},{length:o,staticPosition:t})}if(e.type==="tuple")return Mp(n,e,{staticPosition:t});if(e.type==="address")return Tp(n);if(e.type==="bool")return Pp(n);if(e.type.startsWith("bytes"))return kp(n,e,{staticPosition:t});if(e.type.startsWith("uint")||e.type.startsWith("int"))return Np(n,e);if(e.type==="string")return Lp(n,{staticPosition:t});throw new rp(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const nu=32,_c=32;function Tp(n){const e=n.readBytes(32);return[tl(xt(Id(e,-20))),32]}function Op(n,e,{length:t,staticPosition:r}){if(!t){const s=dn(n.readBytes(_c)),a=r+s,c=a+nu;n.setPosition(a);const l=dn(n.readBytes(nu)),h=uo(e);let p=0;const f=[];for(let m=0;m<l;++m){n.setPosition(c+(h?m*32:p));const[y,x]=qr(n,e,{staticPosition:c});p+=x,f.push(y)}return n.setPosition(r+32),[f,32]}if(uo(e)){const s=dn(n.readBytes(_c)),a=r+s,c=[];for(let l=0;l<t;++l){n.setPosition(a+l*32);const[h]=qr(n,e,{staticPosition:a});c.push(h)}return n.setPosition(r+32),[c,32]}let o=0;const i=[];for(let s=0;s<t;++s){const[a,c]=qr(n,e,{staticPosition:r+o});o+=c,i.push(a)}return[i,o]}function Pp(n){return[Ip(n.readBytes(32),{size:32}),32]}function kp(n,e,{staticPosition:t}){const[r,o]=e.type.split("bytes");if(!o){const s=dn(n.readBytes(32));n.setPosition(t+s);const a=dn(n.readBytes(32));if(a===0)return n.setPosition(t+32),["0x",32];const c=n.readBytes(a);return n.setPosition(t+32),[xt(c),32]}return[xt(n.readBytes(Number.parseInt(o),32)),32]}function Np(n,e){const t=e.type.startsWith("int"),r=Number.parseInt(e.type.split("int")[1]||"256"),o=n.readBytes(32);return[r>48?Ap(o,{signed:t}):dn(o,{signed:t}),32]}function Mp(n,e,{staticPosition:t}){const r=e.components.length===0||e.components.some(({name:s})=>!s),o=r?[]:{};let i=0;if(uo(e)){const s=dn(n.readBytes(_c)),a=t+s;for(let c=0;c<e.components.length;++c){const l=e.components[c];n.setPosition(a+i);const[h,p]=qr(n,l,{staticPosition:a});i+=p,o[r?c:l==null?void 0:l.name]=h}return n.setPosition(t+32),[o,32]}for(let s=0;s<e.components.length;++s){const a=e.components[s],[c,l]=qr(n,a,{staticPosition:t});o[r?s:a==null?void 0:a.name]=c,i+=l}return[o,i]}function Lp(n,{staticPosition:e}){const t=dn(n.readBytes(32)),r=e+t;n.setPosition(r);const o=dn(n.readBytes(32));if(o===0)return n.setPosition(e+32),["",32];const i=n.readBytes(o,32),s=Rp(Fo(i));return n.setPosition(e+32),[s,32]}function uo(n){var r;const{type:e}=n;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=n.components)==null?void 0:r.some(uo);const t=al(n.type);return!!(t&&uo({...n,type:t[1]}))}const Up=n=>Qr(Qc(n));function Dp(n){return Up(n)}const jp="1.0.5";let _t=class Ec extends Error{constructor(e,t={}){var s;const r=t.cause instanceof Ec?t.cause.details:(s=t.cause)!=null&&s.message?t.cause.message:t.details,o=t.cause instanceof Ec&&t.cause.docsPath||t.docsPath,i=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://abitype.dev${o}`]:[],...r?[`Details: ${r}`]:[],`Version: abitype@${jp}`].join(`
`);super(i),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiTypeError"}),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}};function Vn(n,e){const t=n.exec(e);return t==null?void 0:t.groups}const Ld=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Ud=/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,Dd=/^\(.+?\).*?$/,ru=/^tuple(?<array>(\[(\d*)\])*)$/;function $c(n){let e=n.type;if(ru.test(n.type)&&"components"in n){e="(";const t=n.components.length;for(let o=0;o<t;o++){const i=n.components[o];e+=$c(i),o<t-1&&(e+=", ")}const r=Vn(ru,n.type);return e+=`)${(r==null?void 0:r.array)??""}`,$c({...n,type:e})}return"indexed"in n&&n.indexed&&(e=`${e} indexed`),n.name?`${e} ${n.name}`:e}function Ni(n){let e="";const t=n.length;for(let r=0;r<t;r++){const o=n[r];e+=$c(o),r!==t-1&&(e+=", ")}return e}function Bp(n){return n.type==="function"?`function ${n.name}(${Ni(n.inputs)})${n.stateMutability&&n.stateMutability!=="nonpayable"?` ${n.stateMutability}`:""}${n.outputs.length?` returns (${Ni(n.outputs)})`:""}`:n.type==="event"?`event ${n.name}(${Ni(n.inputs)})`:n.type==="error"?`error ${n.name}(${Ni(n.inputs)})`:n.type==="constructor"?`constructor(${Ni(n.inputs)})${n.stateMutability==="payable"?" payable":""}`:n.type==="fallback"?"fallback()":"receive() external payable"}const jd=/^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;function Wp(n){return jd.test(n)}function zp(n){return Vn(jd,n)}const Bd=/^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;function Fp(n){return Bd.test(n)}function Hp(n){return Vn(Bd,n)}const Wd=/^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;function Zp(n){return Wd.test(n)}function Vp(n){return Vn(Wd,n)}const zd=/^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;function Fd(n){return zd.test(n)}function qp(n){return Vn(zd,n)}const Hd=/^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;function Gp(n){return Hd.test(n)}function Yp(n){return Vn(Hd,n)}const Kp=/^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;function Jp(n){return Kp.test(n)}const Qp=/^receive\(\) external payable$/;function Xp(n){return Qp.test(n)}const e1=new Set(["indexed"]),Sc=new Set(["calldata","memory","storage"]);class t1 extends _t{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownTypeError"})}}class n1 extends _t{constructor({type:e}){super("Unknown type.",{metaMessages:[`Type "${e}" is not a valid ABI type.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSolidityTypeError"})}}class r1 extends _t{constructor({param:e}){super("Invalid ABI parameter.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParameterError"})}}class i1 extends _t{constructor({param:e,name:t}){super("Invalid ABI parameter.",{details:e,metaMessages:[`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SolidityProtectedKeywordError"})}}class o1 extends _t{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidModifierError"})}}class s1 extends _t{constructor({param:e,type:t,modifier:r}){super("Invalid ABI parameter.",{details:e,metaMessages:[`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`,`Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidFunctionModifierError"})}}class a1 extends _t{constructor({abiParameter:e}){super("Invalid ABI parameter.",{details:JSON.stringify(e,null,2),metaMessages:["ABI parameter type is invalid."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiTypeParameterError"})}}class Bi extends _t{constructor({signature:e,type:t}){super(`Invalid ${t} signature.`,{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSignatureError"})}}class c1 extends _t{constructor({signature:e}){super("Unknown signature.",{details:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownSignatureError"})}}class l1 extends _t{constructor({signature:e}){super("Invalid struct signature.",{details:e,metaMessages:["No properties exist."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStructSignatureError"})}}class u1 extends _t{constructor({type:e}){super("Circular reference detected.",{metaMessages:[`Struct "${e}" is a circular reference.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CircularReferenceError"})}}class d1 extends _t{constructor({current:e,depth:t}){super("Unbalanced parentheses.",{metaMessages:[`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],details:`Depth "${t}"`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParenthesisError"})}}function h1(n,e){return e?`${e}:${n}`:n}const Ba=new Map([["address",{type:"address"}],["bool",{type:"bool"}],["bytes",{type:"bytes"}],["bytes32",{type:"bytes32"}],["int",{type:"int256"}],["int256",{type:"int256"}],["string",{type:"string"}],["uint",{type:"uint256"}],["uint8",{type:"uint8"}],["uint16",{type:"uint16"}],["uint24",{type:"uint24"}],["uint32",{type:"uint32"}],["uint64",{type:"uint64"}],["uint96",{type:"uint96"}],["uint112",{type:"uint112"}],["uint160",{type:"uint160"}],["uint192",{type:"uint192"}],["uint256",{type:"uint256"}],["address owner",{type:"address",name:"owner"}],["address to",{type:"address",name:"to"}],["bool approved",{type:"bool",name:"approved"}],["bytes _data",{type:"bytes",name:"_data"}],["bytes data",{type:"bytes",name:"data"}],["bytes signature",{type:"bytes",name:"signature"}],["bytes32 hash",{type:"bytes32",name:"hash"}],["bytes32 r",{type:"bytes32",name:"r"}],["bytes32 root",{type:"bytes32",name:"root"}],["bytes32 s",{type:"bytes32",name:"s"}],["string name",{type:"string",name:"name"}],["string symbol",{type:"string",name:"symbol"}],["string tokenURI",{type:"string",name:"tokenURI"}],["uint tokenId",{type:"uint256",name:"tokenId"}],["uint8 v",{type:"uint8",name:"v"}],["uint256 balance",{type:"uint256",name:"balance"}],["uint256 tokenId",{type:"uint256",name:"tokenId"}],["uint256 value",{type:"uint256",name:"value"}],["event:address indexed from",{type:"address",name:"from",indexed:!0}],["event:address indexed to",{type:"address",name:"to",indexed:!0}],["event:uint indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}],["event:uint256 indexed tokenId",{type:"uint256",name:"tokenId",indexed:!0}]]);function f1(n,e={}){if(Zp(n)){const t=Vp(n);if(!t)throw new Bi({signature:n,type:"function"});const r=Tt(t.parameters),o=[],i=r.length;for(let a=0;a<i;a++)o.push(ir(r[a],{modifiers:Sc,structs:e,type:"function"}));const s=[];if(t.returns){const a=Tt(t.returns),c=a.length;for(let l=0;l<c;l++)s.push(ir(a[l],{modifiers:Sc,structs:e,type:"function"}))}return{name:t.name,type:"function",stateMutability:t.stateMutability??"nonpayable",inputs:o,outputs:s}}if(Fp(n)){const t=Hp(n);if(!t)throw new Bi({signature:n,type:"event"});const r=Tt(t.parameters),o=[],i=r.length;for(let s=0;s<i;s++)o.push(ir(r[s],{modifiers:e1,structs:e,type:"event"}));return{name:t.name,type:"event",inputs:o}}if(Wp(n)){const t=zp(n);if(!t)throw new Bi({signature:n,type:"error"});const r=Tt(t.parameters),o=[],i=r.length;for(let s=0;s<i;s++)o.push(ir(r[s],{structs:e,type:"error"}));return{name:t.name,type:"error",inputs:o}}if(Gp(n)){const t=Yp(n);if(!t)throw new Bi({signature:n,type:"constructor"});const r=Tt(t.parameters),o=[],i=r.length;for(let s=0;s<i;s++)o.push(ir(r[s],{structs:e,type:"constructor"}));return{type:"constructor",stateMutability:t.stateMutability??"nonpayable",inputs:o}}if(Jp(n))return{type:"fallback"};if(Xp(n))return{type:"receive",stateMutability:"payable"};throw new c1({signature:n})}const p1=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,g1=/^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,m1=/^u?int$/;function ir(n,e){var p,f;const t=h1(n,e==null?void 0:e.type);if(Ba.has(t))return Ba.get(t);const r=Dd.test(n),o=Vn(r?g1:p1,n);if(!o)throw new r1({param:n});if(o.name&&b1(o.name))throw new i1({param:n,name:o.name});const i=o.name?{name:o.name}:{},s=o.modifier==="indexed"?{indexed:!0}:{},a=(e==null?void 0:e.structs)??{};let c,l={};if(r){c="tuple";const m=Tt(o.type),y=[],x=m.length;for(let v=0;v<x;v++)y.push(ir(m[v],{structs:a}));l={components:y}}else if(o.type in a)c="tuple",l={components:a[o.type]};else if(m1.test(o.type))c=`${o.type}256`;else if(c=o.type,(e==null?void 0:e.type)!=="struct"&&!Zd(c))throw new n1({type:c});if(o.modifier){if(!((f=(p=e==null?void 0:e.modifiers)==null?void 0:p.has)!=null&&f.call(p,o.modifier)))throw new o1({param:n,type:e==null?void 0:e.type,modifier:o.modifier});if(Sc.has(o.modifier)&&!v1(c,!!o.array))throw new s1({param:n,type:e==null?void 0:e.type,modifier:o.modifier})}const h={type:`${c}${o.array??""}`,...i,...s,...l};return Ba.set(t,h),h}function Tt(n,e=[],t="",r=0){const o=n.trim().length;for(let i=0;i<o;i++){const s=n[i],a=n.slice(i+1);switch(s){case",":return r===0?Tt(a,[...e,t.trim()]):Tt(a,e,`${t}${s}`,r);case"(":return Tt(a,e,`${t}${s}`,r+1);case")":return Tt(a,e,`${t}${s}`,r-1);default:return Tt(a,e,`${t}${s}`,r)}}if(t==="")return e;if(r!==0)throw new d1({current:t,depth:r});return e.push(t.trim()),e}function Zd(n){return n==="address"||n==="bool"||n==="function"||n==="string"||Ld.test(n)||Ud.test(n)}const w1=/^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;function b1(n){return n==="address"||n==="bool"||n==="function"||n==="string"||n==="tuple"||Ld.test(n)||Ud.test(n)||w1.test(n)}function v1(n,e){return e||n==="bytes"||n==="string"||n==="tuple"}function y1(n){const e={},t=n.length;for(let s=0;s<t;s++){const a=n[s];if(!Fd(a))continue;const c=qp(a);if(!c)throw new Bi({signature:a,type:"struct"});const l=c.properties.split(";"),h=[],p=l.length;for(let f=0;f<p;f++){const y=l[f].trim();if(!y)continue;const x=ir(y,{type:"struct"});h.push(x)}if(!h.length)throw new l1({signature:a});e[c.name]=h}const r={},o=Object.entries(e),i=o.length;for(let s=0;s<i;s++){const[a,c]=o[s];r[a]=Vd(c,e)}return r}const x1=/^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;function Vd(n,e,t=new Set){const r=[],o=n.length;for(let i=0;i<o;i++){const s=n[i];if(Dd.test(s.type))r.push(s);else{const c=Vn(x1,s.type);if(!(c!=null&&c.type))throw new a1({abiParameter:s});const{array:l,type:h}=c;if(h in e){if(t.has(h))throw new u1({type:h});r.push({...s,type:`tuple${l??""}`,components:Vd(e[h]??[],e,new Set([...t,h]))})}else if(Zd(h))r.push(s);else throw new t1({type:h})}}return r}function qd(n){const e=y1(n),t=[],r=n.length;for(let o=0;o<r;o++){const i=n[o];Fd(i)||t.push(f1(i,e))}return t}function C1(n){let e=!0,t="",r=0,o="",i=!1;for(let s=0;s<n.length;s++){const a=n[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(o))o="";else if(o+=a,a===")"){i=!0;break}continue}if(a===" "){n[s-1]!==","&&t!==","&&t!==",("&&(t="",e=!1);continue}o+=a,t+=a}}if(!i)throw new Z("Unable to normalize signature.");return o}const _1=n=>{const e=typeof n=="string"?n:Bp(n);return C1(e)};function Gd(n){return Dp(_1(n))}const E1=Gd,cl=n=>vs(Gd(n),0,4);function ll(n){const{abi:e,args:t=[],name:r}=n,o=_i(r,{strict:!1}),i=e.filter(a=>o?a.type==="function"?cl(a)===r:a.type==="event"?E1(a)===r:!1:"name"in a&&a.name===r);if(i.length===0)return;if(i.length===1)return i[0];let s;for(const a of i){if(!("inputs"in a))continue;if(!t||t.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==t.length)continue;if(t.every((l,h)=>{const p="inputs"in a&&a.inputs[h];return p?Ac(l,p):!1})){if(s&&"inputs"in s&&s.inputs){const l=Yd(a.inputs,s.inputs,t);if(l)throw new tp({abiItem:a,type:l[0]},{abiItem:s,type:l[1]})}s=a}}return s||i[0]}function Ac(n,e){const t=typeof n,r=e.type;switch(r){case"address":return Dn(n,{strict:!1});case"bool":return t==="boolean";case"function":return t==="string";case"string":return t==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((o,i)=>Ac(Object.values(n)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?t==="number"||t==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?t==="string"||n instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(n)&&n.every(o=>Ac(o,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Yd(n,e,t){for(const r in n){const o=n[r],i=e[r];if(o.type==="tuple"&&i.type==="tuple"&&"components"in o&&"components"in i)return Yd(o.components,i.components,t[r]);const s=[o.type,i.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")?Dn(t[r],{strict:!1}):s.includes("address")&&s.includes("bytes")?Dn(t[r],{strict:!1}):!1)return s}}const Wa="/docs/contract/decodeFunctionResult";function oa(n){const{abi:e,args:t,functionName:r,data:o}=n;let i=e[0];if(r){const a=ll({abi:e,args:t,name:r});if(!a)throw new ys(r,{docsPath:Wa});i=a}if(i.type!=="function")throw new ys(void 0,{docsPath:Wa});if(!i.outputs)throw new ep(i.name,{docsPath:Wa});const s=Md(i.outputs,o);if(s&&s.length>1)return s;if(s&&s.length===1)return s[0]}const iu="/docs/contract/encodeFunctionData";function $1(n){const{abi:e,args:t,functionName:r}=n;let o=e[0];if(r){const i=ll({abi:e,args:t,name:r});if(!i)throw new ys(r,{docsPath:iu});o=i}if(o.type!=="function")throw new ys(void 0,{docsPath:iu});return{abi:[o],functionName:cl(ei(o))}}function sa(n){const{args:e}=n,{abi:t,functionName:r}=(()=>{var a;return n.abi.length===1&&((a=n.functionName)!=null&&a.startsWith("0x"))?n:$1(n)})(),o=t[0],i=r,s="inputs"in o&&o.inputs?Od(o.inputs,e??[]):void 0;return nl([i,s??"0x"])}const Kd={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},S1={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},A1={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function I1(n){const{abi:e,data:t}=n,r=vs(t,0,4);if(r==="0x")throw new ia;const i=[...e||[],S1,A1].find(s=>s.type==="error"&&r===cl(ei(s)));if(!i)throw new Td(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Md(i.inputs,vs(t,4)):void 0,errorName:i.name}}function Jd({abiItem:n,args:e,includeFunctionName:t=!0,includeName:r=!1}){if("name"in n&&"inputs"in n&&n.inputs)return`${t?n.name:""}(${n.inputs.map((o,i)=>`${r&&o.name?`${o.name}: `:""}${typeof e[i]=="object"?Pn(e[i]):e[i]}`).join(", ")})`}class R1 extends Z{constructor(e,{account:t,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:p,value:f,stateOverride:m}){var v;const y=t?$i(t):void 0;let x=_d({from:y==null?void 0:y.address,to:p,value:typeof f<"u"&&`${Bf(f)} ${((v=o==null?void 0:o.nativeCurrency)==null?void 0:v.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${lr(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${lr(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${lr(l)} gwei`,nonce:h});m&&(x+=`
${Cp(m)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class ul extends Z{constructor(e,{abi:t,args:r,contractAddress:o,docsPath:i,functionName:s,sender:a}){const c=ll({abi:t,args:r,name:s}),l=c?Jd({abiItem:c,args:r,includeFunctionName:!1,includeName:!1}):void 0,h=c?ei(c,{includeName:!0}):void 0,p=_d({address:o&&Gh(o),function:h,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],p&&"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class Ic extends Z{constructor({abi:e,data:t,functionName:r,message:o}){let i,s,a,c;if(t&&t!=="0x")try{s=I1({abi:e,data:t});const{abiItem:h,errorName:p,args:f}=s;if(p==="Error")c=f[0];else if(p==="Panic"){const[m]=f;c=Kd[m]}else{const m=h?ei(h,{includeName:!0}):void 0,y=h&&f?Jd({abiItem:h,args:f,includeFunctionName:!1,includeName:!1}):void 0;a=[m?`Error: ${m}`:"",y&&y!=="()"?`       ${[...Array((p==null?void 0:p.length)??0).keys()].map(()=>" ").join("")}${y}`:""]}}catch(h){i=h}else o&&(c=o);let l;i instanceof Td&&(l=i.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${r}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${r}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class T1 extends Z{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class O1 extends Z{constructor({factory:e}){super(`Deployment for counterfactual contract call failed${e?` for factory "${e}".`:""}`,{metaMessages:["Please ensure:","- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).","- The `factoryData` is a valid encoded function call for contract deployment function on the factory."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CounterfactualDeploymentFailedError"})}}class dl extends Z{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function Qd(n,e){var r,o,i,s,a,c;if(!(n instanceof Z))return!1;const t=n.walk(l=>l instanceof Ic);return t instanceof Ic?!!(((r=t.data)==null?void 0:r.errorName)==="ResolverNotFound"||((o=t.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||((i=t.data)==null?void 0:i.errorName)==="ResolverNotContract"||((s=t.data)==null?void 0:s.errorName)==="ResolverError"||((a=t.data)==null?void 0:a.errorName)==="HttpError"||(c=t.reason)!=null&&c.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&t.reason===Kd[50]):!1}function Xd(n){if(n.length!==66||n.indexOf("[")!==0||n.indexOf("]")!==65)return null;const e=`0x${n.slice(1,65)}`;return _i(e)?e:null}function P1(n){let e=new Uint8Array(32).fill(0);if(!n)return xt(e);const t=n.split(".");for(let r=t.length-1;r>=0;r-=1){const o=Xd(t[r]),i=o?Qc(o):Qr(cr(t[r]),"bytes");e=Qr(dr([e,i]),"bytes")}return xt(e)}function k1(n){return`[${n.slice(2)}]`}function N1(n){const e=new Uint8Array(32).fill(0);return n?Xd(n)||Qr(cr(n)):xt(e)}function e0(n){const e=n.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const t=new Uint8Array(cr(e).byteLength+2);let r=0;const o=e.split(".");for(let i=0;i<o.length;i++){let s=cr(o[i]);s.byteLength>255&&(s=cr(k1(N1(o[i])))),t[r]=s.length,t.set(s,r+1),r+=s.length+1}return t.byteLength!==r+1?t.slice(0,r+1):t}const M1=3;function Rc(n,{abi:e,address:t,args:r,docsPath:o,functionName:i,sender:s}){const{code:a,data:c,message:l,shortMessage:h}=n instanceof dl?n:n instanceof Z?n.walk(f=>"data"in f)||n.walk():{},p=n instanceof ia?new T1({functionName:i}):[M1,hr.code].includes(a)&&(c||l||h)?new Ic({abi:e,data:typeof c=="object"?c.data:c,functionName:i,message:h??l}):n;return new ul(p,{abi:e,args:r,contractAddress:t,docsPath:o,functionName:i,sender:s})}const L1="0x82ad56cb",U1="0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",D1="0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";function j1(n,{docsPath:e,...t}){const r=(()=>{const o=wp(n,t);return o instanceof $d?n:o})();return new R1(r,{docsPath:e,...t})}const za=new Map;function t0({fn:n,id:e,shouldSplitBatch:t,wait:r=0,sort:o}){const i=async()=>{const h=c();s();const p=h.map(({args:f})=>f);p.length!==0&&n(p).then(f=>{var m;o&&Array.isArray(f)&&f.sort(o);for(let y=0;y<h.length;y++){const{pendingPromise:x}=h[y];(m=x.resolve)==null||m.call(x,[f[y],f])}}).catch(f=>{var m;for(let y=0;y<h.length;y++){const{pendingPromise:x}=h[y];(m=x.reject)==null||m.call(x,f)}})},s=()=>za.delete(e),a=()=>c().map(({args:h})=>h),c=()=>za.get(e)||[],l=h=>za.set(e,[...c(),h]);return{flush:s,async schedule(h){const p={},f=new Promise((x,v)=>{p.resolve=x,p.reject=v});return(t==null?void 0:t([...a(),h]))&&i(),c().length>0?(l({args:h,pendingPromise:p}),f):(l({args:h,pendingPromise:p}),setTimeout(i,r),f)}}}async function B1(n,e){var U,ae,ye,X;const{account:t=n.account,batch:r=!!((U=n.batch)!=null&&U.multicall),blockNumber:o,blockTag:i="latest",accessList:s,blobs:a,code:c,data:l,factory:h,factoryData:p,gas:f,gasPrice:m,maxFeePerBlobGas:y,maxFeePerGas:x,maxPriorityFeePerGas:v,nonce:$,to:S,value:I,stateOverride:_,...A}=e,O=t?$i(t):void 0;if(c&&(h||p))throw new Z("Cannot provide both `code` & `factory`/`factoryData` as parameters.");if(c&&S)throw new Z("Cannot provide both `code` & `to` as parameters.");const F=c&&l,Q=h&&p&&S&&l,Y=F||Q,D=F?F1({code:c,data:l}):Q?H1({data:l,factory:h,factoryData:p,to:S}):l;try{vp(e);const N=(o?Ae(o):void 0)||i,J=Ep(_),z=(X=(ye=(ae=n.chain)==null?void 0:ae.formatters)==null?void 0:ye.transactionRequest)==null?void 0:X.format,oe=(z||Zf)({...bp(A,{format:z}),from:O==null?void 0:O.address,accessList:s,blobs:a,data:D,gas:f,gasPrice:m,maxFeePerBlobGas:y,maxFeePerGas:x,maxPriorityFeePerGas:v,nonce:$,to:Y?void 0:S,value:I});if(r&&W1({request:oe})&&!J)try{return await z1(n,{...oe,blockNumber:o,blockTag:i})}catch(pe){if(!(pe instanceof Ed)&&!(pe instanceof fc))throw pe}const se=await n.request({method:"eth_call",params:J?[oe,N,J]:[oe,N]});return se==="0x"?{data:void 0}:{data:se}}catch(B){const N=Z1(B),{offchainLookup:J,offchainLookupSignature:z}=await Xr(()=>import("./ccip-C_A8s_S9.js"),[]);if(n.ccipRead!==!1&&(N==null?void 0:N.slice(0,10))===z&&S)return{data:await J(n,{data:N,to:S})};throw Y&&(N==null?void 0:N.slice(0,10))==="0x101bb98d"?new O1({factory:h}):j1(B,{...e,account:O,chain:n.chain})}}function W1({request:n}){const{data:e,to:t,...r}=n;return!(!e||e.startsWith(L1)||!t||Object.values(r).filter(o=>typeof o<"u").length>0)}async function z1(n,e){var x;const{batchSize:t=1024,wait:r=0}=typeof((x=n.batch)==null?void 0:x.multicall)=="object"?n.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:s,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!n.chain)throw new Ed;l=na({blockNumber:o,chain:n.chain,contract:"multicall3"})}const p=(o?Ae(o):void 0)||i,{schedule:f}=t0({id:`${n.uid}.${p}`,wait:r,shouldSplitBatch(v){return v.reduce((S,{data:I})=>S+(I.length-2),0)>t*2},fn:async v=>{const $=v.map(_=>({allowFailure:!0,callData:_.data,target:_.to})),S=sa({abi:Cc,args:[$],functionName:"aggregate3"}),I=await n.request({method:"eth_call",params:[{data:S,to:l},p]});return oa({abi:Cc,args:[$],functionName:"aggregate3",data:I||"0x"})}}),[{returnData:m,success:y}]=await f({data:s,to:c});if(!y)throw new dl({data:m});return m==="0x"?{data:void 0}:{data:m}}function F1(n){const{code:e,data:t}=n;return Pd({abi:qd(["constructor(bytes, bytes)"]),bytecode:U1,args:[e,t]})}function H1(n){const{data:e,factory:t,factoryData:r,to:o}=n;return Pd({abi:qd(["constructor(address, bytes, address, bytes)"]),bytecode:D1,args:[o,e,t,r]})}function Z1(n){var t;if(!(n instanceof Z))return;const e=n.walk();return typeof(e==null?void 0:e.data)=="object"?(t=e.data)==null?void 0:t.data:e.data}async function ni(n,e){const{abi:t,address:r,args:o,functionName:i,...s}=e,a=sa({abi:t,args:o,functionName:i});try{const{data:c}=await Ho(n,B1,"call")({...s,data:a,to:r});return oa({abi:t,args:o,functionName:i,data:c||"0x"})}catch(c){throw Rc(c,{abi:t,address:r,args:o,docsPath:"/docs/contract/readContract",functionName:i})}}class V1 extends Z{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Mi extends Z{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class hl extends Z{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class q1 extends Z{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const G1=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Y1=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,K1=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,J1=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Q1(n){try{const e=await fetch(n,{method:"HEAD"});if(e.status===200){const t=e.headers.get("content-type");return t==null?void 0:t.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(t=>{const r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=n})}}function ou(n,e){return n?n.endsWith("/")?n.slice(0,-1):n:e}function n0({uri:n,gatewayUrls:e}){const t=K1.test(n);if(t)return{uri:n,isOnChain:!0,isEncoded:t};const r=ou(e==null?void 0:e.ipfs,"https://ipfs.io"),o=ou(e==null?void 0:e.arweave,"https://arweave.net"),i=n.match(G1),{protocol:s,subpath:a,target:c,subtarget:l=""}=(i==null?void 0:i.groups)||{},h=s==="ipns:/"||a==="ipns/",p=s==="ipfs:/"||a==="ipfs/"||Y1.test(n);if(n.startsWith("http")&&!h&&!p){let m=n;return e!=null&&e.arweave&&(m=n.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:m,isOnChain:!1,isEncoded:!1}}if((h||p)&&c)return{uri:`${r}/${h?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let f=n.replace(J1,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new hl({uri:n})}function r0(n){if(typeof n!="object"||!("image"in n)&&!("image_url"in n)&&!("image_data"in n))throw new V1({data:n});return n.image||n.image_url||n.image_data}async function X1({gatewayUrls:n,uri:e}){try{const t=await fetch(e).then(o=>o.json());return await fl({gatewayUrls:n,uri:r0(t)})}catch{throw new hl({uri:e})}}async function fl({gatewayUrls:n,uri:e}){const{uri:t,isOnChain:r}=n0({uri:e,gatewayUrls:n});if(r||await Q1(t))return t;throw new hl({uri:e})}function eg(n){let e=n;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[t,r,o]=e.split("/"),[i,s]=t.split(":"),[a,c]=r.split(":");if(!i||i.toLowerCase()!=="eip155")throw new Mi({reason:"Only EIP-155 supported"});if(!s)throw new Mi({reason:"Chain ID not found"});if(!c)throw new Mi({reason:"Contract address not found"});if(!o)throw new Mi({reason:"Token ID not found"});if(!a)throw new Mi({reason:"ERC namespace not found"});return{chainID:Number.parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:o}}async function tg(n,{nft:e}){if(e.namespace==="erc721")return ni(n,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return ni(n,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new q1({namespace:e.namespace})}async function ng(n,{gatewayUrls:e,record:t}){return/eip155:/i.test(t)?rg(n,{gatewayUrls:e,record:t}):fl({uri:t,gatewayUrls:e})}async function rg(n,{gatewayUrls:e,record:t}){const r=eg(t),o=await tg(n,{nft:r}),{uri:i,isOnChain:s,isEncoded:a}=n0({uri:o,gatewayUrls:e});if(s&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const l=a?atob(i.replace("data:application/json;base64,","")):i,h=JSON.parse(l);return fl({uri:r0(h),gatewayUrls:e})}let c=r.tokenID;return r.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),X1({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,c)})}async function ig(n,{blockNumber:e,blockTag:t,name:r,key:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){let c=a;if(!c){if(!n.chain)throw new Error("client chain not configured. universalResolverAddress is required.");c=na({blockNumber:e,chain:n.chain,contract:"ensUniversalResolver"})}try{const l={address:c,abi:$p,functionName:"resolve",args:[Qs(e0(r)),sa({abi:tu,functionName:"text",args:[P1(r),o]})],blockNumber:e,blockTag:t},h=Ho(n,ni,"readContract"),p=i?await h({...l,args:[...l.args,i]}):await h(l);if(p[0]==="0x")return null;const f=oa({abi:tu,functionName:"text",data:p[0]});return f===""?null:f}catch(l){if(s)throw l;if(Qd(l,"resolve"))return null;throw l}}async function og(n,{blockNumber:e,blockTag:t,assetGatewayUrls:r,name:o,gatewayUrls:i,strict:s,universalResolverAddress:a}){const c=await Ho(n,ig,"getEnsText")({blockNumber:e,blockTag:t,key:"avatar",name:o,universalResolverAddress:a,gatewayUrls:i,strict:s});if(!c)return null;try{return await ng(n,{record:c,gatewayUrls:r})}catch{return null}}async function sg(n,{address:e,blockNumber:t,blockTag:r,gatewayUrls:o,strict:i,universalResolverAddress:s}){let a=s;if(!a){if(!n.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=na({blockNumber:t,chain:n.chain,contract:"ensUniversalResolver"})}const c=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const l={address:a,abi:Sp,functionName:"reverse",args:[Qs(e0(c))],blockNumber:t,blockTag:r},h=Ho(n,ni,"readContract"),[p,f]=o?await h({...l,args:[...l.args,o]}):await h(l);return e.toLowerCase()!==f.toLowerCase()?null:p}catch(l){if(i)throw l;if(Qd(l,"reverse"))return null;throw l}}async function ag(n,{address:e,blockNumber:t,blockTag:r="latest"}){const o=t?Ae(t):void 0,i=await n.request({method:"eth_getBalance",params:[e,o||r]});return BigInt(i)}async function cg(n,e){var v;const{allowFailure:t=!0,batchSize:r,blockNumber:o,blockTag:i,multicallAddress:s,stateOverride:a}=e,c=e.contracts,l=r??(typeof((v=n.batch)==null?void 0:v.multicall)=="object"&&n.batch.multicall.batchSize||1024);let h=s;if(!h){if(!n.chain)throw new Error("client chain not configured. multicallAddress is required.");h=na({blockNumber:o,chain:n.chain,contract:"multicall3"})}const p=[[]];let f=0,m=0;for(let $=0;$<c.length;$++){const{abi:S,address:I,args:_,functionName:A}=c[$];try{const O=sa({abi:S,args:_,functionName:A});m+=(O.length-2)/2,l>0&&m>l&&p[f].length>0&&(f++,m=(O.length-2)/2,p[f]=[]),p[f]=[...p[f],{allowFailure:!0,callData:O,target:I}]}catch(O){const F=Rc(O,{abi:S,address:I,args:_,docsPath:"/docs/contract/multicall",functionName:A});if(!t)throw F;p[f]=[...p[f],{allowFailure:!0,callData:"0x",target:I}]}}const y=await Promise.allSettled(p.map($=>Ho(n,ni,"readContract")({abi:Cc,address:h,args:[$],blockNumber:o,blockTag:i,functionName:"aggregate3",stateOverride:a}))),x=[];for(let $=0;$<y.length;$++){const S=y[$];if(S.status==="rejected"){if(!t)throw S.reason;for(let _=0;_<p[$].length;_++)x.push({status:"failure",error:S.reason,result:void 0});continue}const I=S.value;for(let _=0;_<I.length;_++){const{returnData:A,success:O}=I[_],{callData:F}=p[$][_],{abi:Q,address:Y,functionName:D,args:U}=c[x.length];try{if(F==="0x")throw new ia;if(!O)throw new dl({data:A});const ae=oa({abi:Q,args:U,data:A,functionName:D});x.push(t?{result:ae,status:"success"}:ae)}catch(ae){const ye=Rc(ae,{abi:Q,address:Y,args:U,docsPath:"/docs/contract/multicall",functionName:D});if(!t)throw ye;x.push({error:ye,result:void 0,status:"failure"})}}}if(x.length!==c.length)throw new Z("multicall results mismatch");return x}async function lg(n){return new Promise(e=>setTimeout(e,n))}const ns=new Xc(8192);function ug(n,{enabled:e=!0,id:t}){if(!e||!t)return n();if(ns.get(t))return ns.get(t);const r=n().finally(()=>ns.delete(t));return ns.set(t,r),r}function i0(n,{delay:e=100,retryCount:t=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const h=typeof e=="function"?e({count:a,error:l}):e;h&&await lg(h),s({count:a+1})};try{const l=await n();o(l)}catch(l){if(a<t&&await r({count:a,error:l}))return c({error:l});i(l)}};s()})}function dg(n,e={}){return async(t,r={})=>{const{dedupe:o=!1,retryDelay:i=150,retryCount:s=3,uid:a}={...e,...r},c=o?Qr(Xs(`${a}.${Pn(t)}`)):void 0;return ug(()=>i0(async()=>{try{return await n(t)}catch(l){const h=l;switch(h.code){case Ji.code:throw new Ji(h);case Qi.code:throw new Qi(h);case Xi.code:throw new Xi(h,{method:t.method});case eo.code:throw new eo(h);case hr.code:throw new hr(h);case to.code:throw new to(h);case no.code:throw new no(h);case kn.code:throw new kn(h);case ro.code:throw new ro(h);case io.code:throw new io(h,{method:t.method});case ti.code:throw new ti(h);case oo.code:throw new oo(h);case Te.code:throw new Te(h);case so.code:throw new so(h);case ao.code:throw new ao(h);case co.code:throw new co(h);case lo.code:throw new lo(h);case ct.code:throw new ct(h);case 5e3:throw new Te(h);default:throw l instanceof Z?l:new mp(h)}}},{delay:({count:l,error:h})=>{var p;if(h&&h instanceof zi){const f=(p=h==null?void 0:h.headers)==null?void 0:p.get("Retry-After");if(f!=null&&f.match(/\d/))return Number.parseInt(f)*1e3}return~~(1<<l)*i},retryCount:s,shouldRetry:({error:l})=>hg(l)}),{enabled:o,id:c})}}function hg(n){return"code"in n&&typeof n.code=="number"?n.code===-1||n.code===ti.code||n.code===hr.code:n instanceof zi&&n.status?n.status===403||n.status===408||n.status===413||n.status===429||n.status===500||n.status===502||n.status===503||n.status===504:!0}function o0(n,{errorInstance:e=new Error("timed out"),timeout:t,signal:r}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;t>0&&(s=setTimeout(()=>{r?a.abort():i(e)},t)),o(await n({signal:(a==null?void 0:a.signal)||null}))}catch(a){(a==null?void 0:a.name)==="AbortError"&&i(e),i(a)}finally{clearTimeout(s)}})()})}function fg(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const su=fg();function pg(n,e={}){return{async request(t){var p;const{body:r,onRequest:o=e.onRequest,onResponse:i=e.onResponse,timeout:s=e.timeout??1e4}=t,a={...e.fetchOptions??{},...t.fetchOptions??{}},{headers:c,method:l,signal:h}=a;try{const f=await o0(async({signal:y})=>{const x={...a,body:Array.isArray(r)?Pn(r.map(S=>({jsonrpc:"2.0",id:S.id??su.take(),...S}))):Pn({jsonrpc:"2.0",id:r.id??su.take(),...r}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:h||(s>0?y:null)},v=new Request(n,x);return o&&await o(v),await fetch(n,x)},{errorInstance:new Ql({body:r,url:n}),timeout:s,signal:!0});i&&await i(f);let m;if((p=f.headers.get("Content-Type"))!=null&&p.startsWith("application/json")?m=await f.json():(m=await f.text(),m=JSON.parse(m||"{}")),!f.ok)throw new zi({body:r,details:Pn(m.error)||f.statusText,headers:f.headers,status:f.status,url:n});return m}catch(f){throw f instanceof zi||f instanceof Ql?f:new zi({body:r,cause:f,url:n})}}}}async function gg(n,{account:e=n.account,message:t}){if(!e)throw new pp({docsPath:"/docs/actions/wallet/signMessage"});const r=$i(e);if(r.signMessage)return r.signMessage({message:t});const o=typeof t=="string"?Xs(t):t.raw instanceof Uint8Array?Qs(t.raw):t.raw;return n.request({method:"personal_sign",params:[o,r.address]},{retryCount:0})}function Ai(n,e,t){const r=n[e.name];if(typeof r=="function")return r;const o=n[t];return typeof o=="function"?o:i=>e(n,i)}const hs="2.11.6",mg=()=>`@wagmi/core@${hs}`;var s0=function(n,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(n):r?r.value:e.get(n)},xs,a0;class Yt extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return mg()}constructor(e,t={}){var i;super(),xs.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=t.cause instanceof Yt?t.cause.details:(i=t.cause)!=null&&i.message?t.cause.message:t.details,o=t.cause instanceof Yt&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s0(this,xs,"m",a0).call(this,this,e)}}xs=new WeakSet,a0=function n(e,t){return t!=null&&t(e)?e:e.cause?s0(this,xs,"m",n).call(this,e.cause,t):e};class fr extends Yt{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class wg extends Yt{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class bg extends Yt{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class vg extends Yt{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class yg extends Yt{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}async function au(n,e){var r;let t;if(typeof e.connector=="function"?t=n._internal.connectors.setup(e.connector):t=e.connector,t.uid===n.state.current)throw new wg;try{n.setState(s=>({...s,status:"connecting"})),t.emitter.emit("message",{type:"connecting"});const o=await t.connect({chainId:e.chainId}),i=o.accounts;return t.emitter.off("connect",n._internal.events.connect),t.emitter.on("change",n._internal.events.change),t.emitter.on("disconnect",n._internal.events.disconnect),await((r=n.storage)==null?void 0:r.setItem("recentConnectorId",t.id)),n.setState(s=>({...s,connections:new Map(s.connections).set(t.uid,{accounts:i,chainId:o.chainId,connector:t}),current:t.uid,status:"connected"})),{accounts:i,chainId:o.chainId}}catch(o){throw n.setState(i=>({...i,status:i.current?"connected":"disconnected"})),o}}const Tc=256;let rs=Tc,is;function c0(n=11){if(!is||rs+n>Tc*2){is="",rs=0;for(let e=0;e<Tc;e++)is+=(256+Math.random()*256|0).toString(16).substring(1)}return is.substring(rs,rs+++n)}function l0(n){const{batch:e,cacheTime:t=n.pollingInterval??4e3,ccipRead:r,key:o="base",name:i="Base Client",pollingInterval:s=4e3,type:a="base"}=n,c=n.chain,l=n.account?$i(n.account):void 0,{config:h,request:p,value:f}=n.transport({chain:c,pollingInterval:s}),m={...h,...f},y={account:l,batch:e,cacheTime:t,ccipRead:r,chain:c,key:o,name:i,pollingInterval:s,request:p,transport:m,type:a,uid:c0()};function x(v){return $=>{const S=$(v);for(const _ in y)delete S[_];const I={...v,...S};return Object.assign(I,{extend:x(I)})}}return Object.assign(y,{extend:x(y)})}function u0({key:n,name:e,request:t,retryCount:r=3,retryDelay:o=150,timeout:i,type:s},a){const c=c0();return{config:{key:n,name:e,request:t,retryCount:r,retryDelay:o,timeout:i,type:s},request:dg(t,{retryCount:r,retryDelay:o,uid:c}),value:a}}function xg(n,e={}){const{key:t="custom",name:r="Custom Provider",retryDelay:o}=e;return({retryCount:i})=>u0({key:t,name:r,request:n.request.bind(n),retryCount:e.retryCount??i,retryDelay:o,type:"custom"})}class Cg extends Z{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function _g(n,e={}){const{batch:t,fetchOptions:r,key:o="http",name:i="HTTP JSON-RPC",onFetchRequest:s,onFetchResponse:a,retryDelay:c}=e;return({chain:l,retryCount:h,timeout:p})=>{const{batchSize:f=1e3,wait:m=0}=typeof t=="object"?t:{},y=e.retryCount??h,x=p??e.timeout??1e4,v=l==null?void 0:l.rpcUrls.default.http[0];if(!v)throw new Cg;const $=pg(v,{fetchOptions:r,onRequest:s,onResponse:a,timeout:x});return u0({key:o,name:i,async request({method:S,params:I}){const _={method:S,params:I},{schedule:A}=t0({id:v,wait:m,shouldSplitBatch(Y){return Y.length>f},fn:Y=>$.request({body:Y}),sort:(Y,D)=>Y.id-D.id}),O=async Y=>t?A(Y):[await $.request({body:Y})],[{error:F,result:Q}]=await O(_);if(F)throw new kd({body:_,error:F,url:v});return Q},retryCount:y,retryDelay:c,timeout:x,type:"http"},{fetchOptions:r,url:v})}}async function Eg(n,e={}){let t;if(e.connector){const{connector:l}=e,[h,p]=await Promise.all([l.getAccounts(),l.getChainId()]);t={accounts:h,chainId:p,connector:l}}else t=n.state.connections.get(n.state.current);if(!t)throw new bg;const r=e.chainId??t.chainId,o=await t.connector.getChainId();if(o!==t.chainId)throw new yg({connectionChainId:t.chainId,connectorChainId:o});const i=t.connector;if(i.getClient)return i.getClient({chainId:r});const s=$i(e.account??t.accounts[0]);s.address=et(s.address);const a=n.chains.find(l=>l.id===r),c=await t.connector.getProvider({chainId:r});if(e.account&&!t.accounts.some(l=>l.toLowerCase()===s.address.toLowerCase()))throw new vg({address:s.address,connector:i});return l0({account:s,chain:a,name:"Connector Client",transport:l=>xg(c)({...l,retryCount:0})})}async function $g(n,e={}){var o,i;let t;if(e.connector)t=e.connector;else{const{connections:s,current:a}=n.state,c=s.get(a);t=c==null?void 0:c.connector}const r=n.state.connections;t&&(await t.disconnect(),t.emitter.off("change",n._internal.events.change),t.emitter.off("disconnect",n._internal.events.disconnect),t.emitter.on("connect",n._internal.events.connect),r.delete(t.uid)),n.setState(s=>{if(r.size===0)return{...s,connections:new Map,current:null,status:"disconnected"};const a=r.values().next().value;return{...s,connections:new Map(r),current:a.connector.uid}});{const s=n.state.current;if(!s)return;const a=(o=n.state.connections.get(s))==null?void 0:o.connector;if(!a)return;await((i=n.storage)==null?void 0:i.setItem("recentConnectorId",a.id))}}function d0(n){return typeof n=="number"?n:n==="wei"?0:Math.abs(jf[n])}function h0(n){const e=n.state.current,t=n.state.connections.get(e),r=t==null?void 0:t.accounts,o=r==null?void 0:r[0],i=n.chains.find(a=>a.id===(t==null?void 0:t.chainId)),s=n.state.status;switch(s){case"connected":return{address:o,addresses:r,chain:i,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:o,addresses:r,chain:i,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:o,addresses:r,chain:i,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}async function Sg(n,e){const{allowFailure:t=!0,chainId:r,contracts:o,...i}=e,s=n.getClient({chainId:r});return Ai(s,cg,"multicall")({allowFailure:t,contracts:o,...i})}function Ag(n,e){const{chainId:t,...r}=e,o=n.getClient({chainId:t});return Ai(o,ni,"readContract")(r)}async function Ig(n,e){var a;const{allowFailure:t=!0,blockNumber:r,blockTag:o,...i}=e,s=e.contracts;try{const c={};for(const[f,m]of s.entries()){const y=m.chainId??n.state.chainId;c[y]||(c[y]=[]),(a=c[y])==null||a.push({contract:m,index:f})}const l=()=>Object.entries(c).map(([f,m])=>Sg(n,{...i,allowFailure:t,blockNumber:r,blockTag:o,chainId:Number.parseInt(f),contracts:m.map(({contract:y})=>y)})),h=(await Promise.all(l())).flat(),p=Object.values(c).flatMap(f=>f.map(({index:m})=>m));return h.reduce((f,m,y)=>(f&&(f[p[y]]=m),f),[])}catch(c){if(c instanceof ul)throw c;const l=()=>s.map(h=>Ag(n,{...h,blockNumber:r,blockTag:o}));return t?(await Promise.allSettled(l())).map(h=>h.status==="fulfilled"?{result:h.value,status:"success"}:{error:h.reason,result:void 0,status:"failure"}):await Promise.all(l())}}async function Rg(n,e){const{address:t,blockNumber:r,blockTag:o,chainId:i,token:s,unit:a="ether"}=e;if(s)try{return cu(n,{balanceAddress:t,chainId:i,symbolType:"string",tokenAddress:s})}catch(f){if(f instanceof ul){const m=await cu(n,{balanceAddress:t,chainId:i,symbolType:"bytes32",tokenAddress:s}),y=af(Fo(m.symbol,{dir:"right"}));return{...m,symbol:y}}throw f}const c=n.getClient({chainId:i}),h=await Ai(c,ag,"getBalance")(r?{address:t,blockNumber:r}:{address:t,blockTag:o}),p=n.chains.find(f=>f.id===i)??c.chain;return{decimals:p.nativeCurrency.decimals,formatted:ta(h,d0(a)),symbol:p.nativeCurrency.symbol,value:h}}async function cu(n,e){const{balanceAddress:t,chainId:r,symbolType:o,tokenAddress:i,unit:s}=e,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:i},[c,l,h]=await Ig(n,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[t],chainId:r},{...a,functionName:"decimals",chainId:r},{...a,functionName:"symbol",chainId:r}]}),p=ta(c??"0",d0(s??l));return{decimals:l,formatted:p,symbol:h,value:c}}function Oc(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;let t,r;if(Array.isArray(n)&&Array.isArray(e)){if(t=n.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!Oc(n[r],e[r]))return!1;return!0}if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();const o=Object.keys(n);if(t=o.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;for(r=t;r--!==0;){const i=o[r];if(i&&!Oc(n[i],e[i]))return!1}return!0}return n!==n&&e!==e}function Tg(n,e){const{chainId:t,...r}=e,o=n.getClient({chainId:t});return Ai(o,og,"getEnsAvatar")(r)}function Og(n,e){const{chainId:t,...r}=e,o=n.getClient({chainId:t});return Ai(o,sg,"getEnsName")(r)}async function Pg(n,e){const{account:t,connector:r,...o}=e;let i;return typeof t=="object"&&t.type==="local"?i=n.getClient():i=await Eg(n,{account:t,connector:r}),Ai(i,gg,"signMessage")({...o,...t?{account:t}:{}})}class En extends Yt{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class kg extends Yt{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}async function Ng(n,e){var s;const{addEthereumChainParameter:t,chainId:r}=e,o=n.state.connections.get(((s=e.connector)==null?void 0:s.uid)??n.state.current);if(o){const a=o.connector;if(!a.switchChain)throw new kg({connector:a});return await a.switchChain({addEthereumChainParameter:t,chainId:r})}const i=n.chains.find(a=>a.id===r);if(!i)throw new fr;return n.setState(a=>({...a,chainId:r})),i}function Mg(n,e){const{onChange:t}=e;return n.subscribe(()=>h0(n),t,{equalityFn(r,o){const{connector:i,...s}=r,{connector:a,...c}=o;return Oc(s,c)&&(i==null?void 0:i.id)===(a==null?void 0:a.id)&&(i==null?void 0:i.uid)===(a==null?void 0:a.uid)}})}function Lg(n,e){const{onChange:t}=e;return n._internal.connectors.subscribe((r,o)=>{t(Object.values(r),o)})}const Ug=/(rabby|trustwallet)/,Dg={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(n){return n!=null&&n.coinbaseWalletExtension?n.coinbaseWalletExtension:fs(n,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(n){return fs(n,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of t)if(e[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(n){var e,t;return(e=n==null?void 0:n.phantom)!=null&&e.ethereum?(t=n.phantom)==null?void 0:t.ethereum:fs(n,"isPhantom")}}};aa.type="injected";function aa(n={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:t}=n;function r(){const c=n.target;if(typeof c=="function"){const l=c();if(l)return l}return typeof c=="object"?c:typeof c=="string"?{...Dg[c]??{id:c,name:`${c[0].toUpperCase()}${c.slice(1)}`,provider:`is${c[0].toUpperCase()}${c.slice(1)}`}}:{id:"injected",name:"Injected",provider(l){return l==null?void 0:l.ethereum}}}let o,i,s,a;return c=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},get supportsSimulation(){return Ug.test(this.id.toLowerCase())},type:aa.type,async setup(){const l=await this.getProvider();l&&n.target&&(s||(s=this.onConnect.bind(this),l.on("connect",s)),o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)))},async connect({chainId:l,isReconnecting:h}={}){var m,y,x,v,$,S;const p=await this.getProvider();if(!p)throw new En;let f=[];if(h)f=await this.getAccounts().catch(()=>[]);else if(e)try{f=(v=(x=(y=(m=(await p.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:m.caveats)==null?void 0:y[0])==null?void 0:x.value)==null?void 0:v.map(_=>et(_))}catch(I){const _=I;if(_.code===Te.code)throw new Te(_);if(_.code===kn.code)throw _}try{!(f!=null&&f.length)&&!h&&(f=(await p.request({method:"eth_requestAccounts"})).map(A=>et(A))),s&&(p.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),p.on("accountsChanged",o)),i||(i=this.onChainChanged.bind(this),p.on("chainChanged",i)),a||(a=this.onDisconnect.bind(this),p.on("disconnect",a));let I=await this.getChainId();if(l&&I!==l){const _=await this.switchChain({chainId:l}).catch(A=>{if(A.code===Te.code)throw A;return{id:I}});I=(_==null?void 0:_.id)??I}return e&&await(($=c.storage)==null?void 0:$.removeItem(`${this.id}.disconnected`)),n.target||await((S=c.storage)==null?void 0:S.setItem("injected.connected",!0)),{accounts:f,chainId:I}}catch(I){const _=I;throw _.code===Te.code?new Te(_):_.code===kn.code?new kn(_):_}},async disconnect(){var h,p;const l=await this.getProvider();if(!l)throw new En;i&&(l.removeListener("chainChanged",i),i=void 0),a&&(l.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),l.on("connect",s));try{await o0(()=>l.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}e&&await((h=c.storage)==null?void 0:h.setItem(`${this.id}.disconnected`,!0)),n.target||await((p=c.storage)==null?void 0:p.removeItem("injected.connected"))},async getAccounts(){const l=await this.getProvider();if(!l)throw new En;return(await l.request({method:"eth_accounts"})).map(p=>et(p))},async getChainId(){const l=await this.getProvider();if(!l)throw new En;const h=await l.request({method:"eth_chainId"});return Number(h)},async getProvider(){if(typeof window>"u")return;let l;const h=r();return typeof h.provider=="function"?l=h.provider(window):typeof h.provider=="string"?l=fs(window,h.provider):l=h.provider,l&&!l.removeListener&&("off"in l&&typeof l.off=="function"?l.removeListener=l.off:l.removeListener=()=>{}),l},async isAuthorized(){var l,h;try{if(e&&await((l=c.storage)==null?void 0:l.getItem(`${this.id}.disconnected`))||!n.target&&!await((h=c.storage)==null?void 0:h.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(t!==void 0&&t!==!1){const y=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",y),!!await this.getProvider()),x=typeof t=="number"?t:1e3;if(await Promise.race([...typeof window<"u"?[new Promise($=>window.addEventListener("ethereum#initialized",()=>$(y()),{once:!0}))]:[],new Promise($=>setTimeout(()=>$(y()),x))]))return!0}throw new En}return!!(await i0(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:l,chainId:h}){var m,y,x,v;const p=await this.getProvider();if(!p)throw new En;const f=c.chains.find($=>$.id===h);if(!f)throw new ct(new fr);try{return await Promise.all([p.request({method:"wallet_switchEthereumChain",params:[{chainId:Ae(h)}]}).then(async()=>{await this.getChainId()===h&&c.emitter.emit("change",{chainId:h})}),new Promise($=>c.emitter.once("change",({chainId:S})=>{S===h&&$()}))]),f}catch($){const S=$;if(S.code===4902||((y=(m=S==null?void 0:S.data)==null?void 0:m.originalError)==null?void 0:y.code)===4902)try{const{default:I,..._}=f.blockExplorers??{};let A;l!=null&&l.blockExplorerUrls?A=l.blockExplorerUrls:I&&(A=[I.url,...Object.values(_).map(Y=>Y.url)]);let O;(x=l==null?void 0:l.rpcUrls)!=null&&x.length?O=l.rpcUrls:O=[((v=f.rpcUrls.default)==null?void 0:v.http[0])??""];const F={blockExplorerUrls:A,chainId:Ae(h),chainName:(l==null?void 0:l.chainName)??f.name,iconUrls:l==null?void 0:l.iconUrls,nativeCurrency:(l==null?void 0:l.nativeCurrency)??f.nativeCurrency,rpcUrls:O};if(await p.request({method:"wallet_addEthereumChain",params:[F]}),await this.getChainId()!==h)throw new Te(new Error("User rejected switch after adding network."));return f}catch(I){throw new Te(I)}throw S.code===Te.code?new Te(S):new ct(S)}},async onAccountsChanged(l){var h;if(l.length===0)this.onDisconnect();else if(c.emitter.listenerCount("connect")){const p=(await this.getChainId()).toString();this.onConnect({chainId:p}),e&&await((h=c.storage)==null?void 0:h.removeItem(`${this.id}.disconnected`))}else c.emitter.emit("change",{accounts:l.map(p=>et(p))})},onChainChanged(l){const h=Number(l);c.emitter.emit("change",{chainId:h})},async onConnect(l){const h=await this.getAccounts();if(h.length===0)return;const p=Number(l.chainId);c.emitter.emit("connect",{accounts:h,chainId:p});const f=await this.getProvider();f&&(s&&(f.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),f.on("accountsChanged",o)),i||(i=this.onChainChanged.bind(this),f.on("chainChanged",i)),a||(a=this.onDisconnect.bind(this),f.on("disconnect",a)))},async onDisconnect(l){const h=await this.getProvider();l&&l.code===1013&&h&&(await this.getAccounts()).length||(c.emitter.emit("disconnect"),h&&(i&&(h.removeListener("chainChanged",i),i=void 0),a&&(h.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),h.on("connect",s))))}})}function fs(n,e){function t(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const r=n.ethereum;if(r!=null&&r.providers)return r.providers.find(o=>t(o));if(r&&t(r))return r}function jg(n){const e=t=>n(t.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function Bg(){const n=new Set;let e=[];const t=()=>jg(o=>{e.some(({info:i})=>i.uuid===o.info.uuid)||(e=[...e,o],n.forEach(i=>i(e,{added:[o]})))});let r=t();return{_listeners(){return n},clear(){n.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),n.clear(),r()},findProvider({rdns:o}){return e.find(i=>i.info.rdns===o)},getProviders(){return e},reset(){this.clear(),r(),r=t()},subscribe(o,{emitImmediately:i}={}){return n.add(o),i&&o(e,{added:e}),()=>n.delete(o)}}}var Wg={VITE_PROJECT_ID:"lucas2024",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const zg=n=>(e,t,r)=>{const o=r.subscribe;return r.subscribe=(s,a,c)=>{let l=s;if(a){const h=(c==null?void 0:c.equalityFn)||Object.is;let p=s(r.getState());l=f=>{const m=s(f);if(!h(p,m)){const y=p;a(p=m,y)}},c!=null&&c.fireImmediately&&a(p,p)}return o(l)},n(e,t,r)},Fg=zg;function Hg(n,e){let t;try{t=n()}catch{return}return{getItem:o=>{var i;const s=c=>c===null?null:JSON.parse(c,void 0),a=(i=t.getItem(o))!=null?i:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,i)=>t.setItem(o,JSON.stringify(i,void 0)),removeItem:o=>t.removeItem(o)}}const ho=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return ho(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return ho(r)(t)}}}},Zg=(n,e)=>(t,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,$)=>({...$,...v}),...e},s=!1;const a=new Set,c=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return n((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...v)},r,o);const h=ho(i.serialize),p=()=>{const v=i.partialize({...r()});let $;const S=h({state:v,version:i.version}).then(I=>l.setItem(i.name,I)).catch(I=>{$=I});if($)throw $;return S},f=o.setState;o.setState=(v,$)=>{f(v,$),p()};const m=n((...v)=>{t(...v),p()},r,o);let y;const x=()=>{var v;if(!l)return;s=!1,a.forEach(S=>S(r()));const $=((v=i.onRehydrateStorage)==null?void 0:v.call(i,r()))||void 0;return ho(l.getItem.bind(l))(i.name).then(S=>{if(S)return i.deserialize(S)}).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return i.migrate(S.state,S.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return S.state}).then(S=>{var I;return y=i.merge(S,(I=r())!=null?I:m),t(y,!0),p()}).then(()=>{$==null||$(y,void 0),s=!0,c.forEach(S=>S(y))}).catch(S=>{$==null||$(void 0,S)})};return o.persist={setOptions:v=>{i={...i,...v},v.getStorage&&(l=v.getStorage())},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>x(),hasHydrated:()=>s,onHydrate:v=>(a.add(v),()=>{a.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},x(),y||m},Vg=(n,e)=>(t,r,o)=>{let i={storage:Hg(()=>localStorage),partialize:x=>x,version:0,merge:(x,v)=>({...v,...x}),...e},s=!1;const a=new Set,c=new Set;let l=i.storage;if(!l)return n((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...x)},r,o);const h=()=>{const x=i.partialize({...r()});return l.setItem(i.name,{state:x,version:i.version})},p=o.setState;o.setState=(x,v)=>{p(x,v),h()};const f=n((...x)=>{t(...x),h()},r,o);let m;const y=()=>{var x,v;if(!l)return;s=!1,a.forEach(S=>{var I;return S((I=r())!=null?I:f)});const $=((v=i.onRehydrateStorage)==null?void 0:v.call(i,(x=r())!=null?x:f))||void 0;return ho(l.getItem.bind(l))(i.name).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return i.migrate(S.state,S.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return S.state}).then(S=>{var I;return m=i.merge(S,(I=r())!=null?I:f),t(m,!0),h()}).then(()=>{$==null||$(m,void 0),m=r(),s=!0,c.forEach(S=>S(m))}).catch(S=>{$==null||$(void 0,S)})};return o.persist={setOptions:x=>{i={...i,...x},x.storage&&(l=x.storage)},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(c.add(x),()=>{c.delete(x)})},i.skipHydration||y(),m||f},qg=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Wg?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Zg(n,e)):Vg(n,e),Gg=qg;var Yg={VITE_PROJECT_ID:"lucas2024",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const lu=n=>{let e;const t=new Set,r=(c,l)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const p=e;e=l??typeof h!="object"?h:Object.assign({},e,h),t.forEach(f=>f(e,p))}},o=()=>e,a={setState:r,getState:o,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>{(Yg?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}};return e=n(r,o,a),a},Fa=n=>n?lu(n):lu;var f0={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function o(c,l,h){this.fn=c,this.context=l,this.once=h||!1}function i(c,l,h,p,f){if(typeof h!="function")throw new TypeError("The listener must be a function");var m=new o(h,p||c,f),y=t?t+l:l;return c._events[y]?c._events[y].fn?c._events[y]=[c._events[y],m]:c._events[y].push(m):(c._events[y]=m,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new r:delete c._events[l]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],h,p;if(this._eventsCount===0)return l;for(p in h=this._events)e.call(h,p)&&l.push(t?p.slice(1):p);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},a.prototype.listeners=function(l){var h=t?t+l:l,p=this._events[h];if(!p)return[];if(p.fn)return[p.fn];for(var f=0,m=p.length,y=new Array(m);f<m;f++)y[f]=p[f].fn;return y},a.prototype.listenerCount=function(l){var h=t?t+l:l,p=this._events[h];return p?p.fn?1:p.length:0},a.prototype.emit=function(l,h,p,f,m,y){var x=t?t+l:l;if(!this._events[x])return!1;var v=this._events[x],$=arguments.length,S,I;if(v.fn){switch(v.once&&this.removeListener(l,v.fn,void 0,!0),$){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,h),!0;case 3:return v.fn.call(v.context,h,p),!0;case 4:return v.fn.call(v.context,h,p,f),!0;case 5:return v.fn.call(v.context,h,p,f,m),!0;case 6:return v.fn.call(v.context,h,p,f,m,y),!0}for(I=1,S=new Array($-1);I<$;I++)S[I-1]=arguments[I];v.fn.apply(v.context,S)}else{var _=v.length,A;for(I=0;I<_;I++)switch(v[I].once&&this.removeListener(l,v[I].fn,void 0,!0),$){case 1:v[I].fn.call(v[I].context);break;case 2:v[I].fn.call(v[I].context,h);break;case 3:v[I].fn.call(v[I].context,h,p);break;case 4:v[I].fn.call(v[I].context,h,p,f);break;default:if(!S)for(A=1,S=new Array($-1);A<$;A++)S[A-1]=arguments[A];v[I].fn.apply(v[I].context,S)}}return!0},a.prototype.on=function(l,h,p){return i(this,l,h,p,!1)},a.prototype.once=function(l,h,p){return i(this,l,h,p,!0)},a.prototype.removeListener=function(l,h,p,f){var m=t?t+l:l;if(!this._events[m])return this;if(!h)return s(this,m),this;var y=this._events[m];if(y.fn)y.fn===h&&(!f||y.once)&&(!p||y.context===p)&&s(this,m);else{for(var x=0,v=[],$=y.length;x<$;x++)(y[x].fn!==h||f&&!y[x].once||p&&y[x].context!==p)&&v.push(y[x]);v.length?this._events[m]=v.length===1?v[0]:v:s(this,m)}return this},a.prototype.removeAllListeners=function(l){var h;return l?(h=t?t+l:l,this._events[h]&&s(this,h)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(f0);var Kg=f0.exports;const Jg=ra(Kg);class Qg{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new Jg})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){const r=t[0];this._emitter.emit(e,{uid:this.uid,...r})}listenerCount(e){return this._emitter.listenerCount(e)}}function Xg(n){return new Qg(n)}function em(n,e){return JSON.parse(n,(t,r)=>{let o=r;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(t,o))??o})}function uu(n,e){return n.slice(0,e).join(".")||"."}function du(n,e){const{length:t}=n;for(let r=0;r<t;++r)if(n[r]===e)return r+1;return 0}function tm(n,e){const t=typeof n=="function",r=typeof e=="function",o=[],i=[];return function(a,c){if(typeof c=="object")if(o.length){const l=du(o,this);l===0?o[o.length]=this:(o.splice(l),i.splice(l)),i[i.length]=a;const h=du(o,c);if(h!==0)return r?e.call(this,a,c,uu(i,h)):`[ref=${uu(i,h)}]`}else o[0]=c,i[0]=a;return t?n.call(this,a,c):c}}function nm(n,e,t,r){return JSON.stringify(n,tm((o,i)=>{let s=i;return typeof s=="bigint"&&(s={__type:"bigint",value:i.toString()}),s instanceof Map&&(s={__type:"Map",value:Array.from(i.entries())}),(e==null?void 0:e(o,s))??s},r),t??void 0)}function rm(n){const{deserialize:e=em,key:t="wagmi",serialize:r=nm,storage:o=p0}=n;function i(s){return s instanceof Promise?s.then(a=>a).catch(()=>null):s}return{...o,key:t,async getItem(s,a){const c=o.getItem(`${t}.${s}`),l=await i(c);return l?e(l)??null:a??null},async setItem(s,a){const c=`${t}.${s}`;a===null?await i(o.removeItem(c)):await i(o.setItem(c,r(a)))},async removeItem(s){await i(o.removeItem(`${t}.${s}`))}}}const p0={getItem:()=>null,setItem:()=>{},removeItem:()=>{}},Pc=256;let os=Pc,ss;function im(n=11){if(!ss||os+n>Pc*2){ss="",os=0;for(let e=0;e<Pc;e++)ss+=(256+Math.random()*256|0).toString(16).substring(1)}return ss.substring(os,os+++n)}function om(n){const{multiInjectedProviderDiscovery:e=!0,storage:t=rm({storage:typeof window<"u"&&window.localStorage?window.localStorage:p0}),syncConnectedChain:r=!0,ssr:o,...i}=n,s=typeof window<"u"&&e?Bg():void 0,a=Fa(()=>i.chains),c=Fa(()=>[...i.connectors??[],...o?[]:(s==null?void 0:s.getProviders().map(h))??[]].map(l));function l(_){var F;const A=Xg(im()),O={..._({emitter:A,chains:a.getState(),storage:t}),emitter:A,uid:A.uid};return A.on("connect",S),(F=O.setup)==null||F.call(O),O}function h(_){const{info:A}=_,O=_.provider;return aa({target:{...A,id:A.rdns,provider:O}})}const p=new Map;function f(_={}){const A=_.chainId??v.getState().chainId,O=a.getState().find(Q=>Q.id===A);if(_.chainId&&!O)throw new fr;{const Q=p.get(v.getState().chainId);if(Q&&!O)return Q;if(!O)throw new fr}{const Q=p.get(A);if(Q)return Q}let F;if(i.client)F=i.client({chain:O});else{const Q=O.id,Y=a.getState().map(ae=>ae.id),D={},U=Object.entries(i);for(const[ae,ye]of U)if(!(ae==="chains"||ae==="client"||ae==="connectors"||ae==="transports"))if(typeof ye=="object")if(Q in ye)D[ae]=ye[Q];else{if(Y.some(B=>B in ye))continue;D[ae]=ye}else D[ae]=ye;F=l0({...D,chain:O,batch:D.batch??{multicall:!0},transport:ae=>i.transports[Q]({...ae,connectors:c})})}return p.set(A,F),F}function m(){return{chainId:a.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let y;const x="0.0.0-canary-";hs.startsWith(x)?y=Number.parseInt(hs.replace(x,"")):y=Number.parseInt(hs.split(".")[0]??"0");const v=Fa(Fg(t?Gg(m,{migrate(_,A){if(A===y)return _;const O=m(),F=_&&typeof _=="object"&&"chainId"in _&&typeof _.chainId=="number"&&a.getState().some(Q=>Q.id===_.chainId)?_.chainId:O.chainId;return{...O,chainId:F}},name:"store",partialize(_){return{connections:{__type:"Map",value:Array.from(_.connections.entries()).map(([A,O])=>{const{id:F,name:Q,type:Y,uid:D}=O.connector;return[A,{...O,connector:{id:F,name:Q,type:Y,uid:D}}]})},chainId:_.chainId,current:_.current}},skipHydration:o,storage:t,version:y}):m));r&&v.subscribe(({connections:_,current:A})=>{var O;return A?(O=_.get(A))==null?void 0:O.chainId:void 0},_=>{if(a.getState().some(O=>O.id===_))return v.setState(O=>({...O,chainId:_??O.chainId}))}),s==null||s.subscribe(_=>{const A=new Map;for(const F of c.getState())A.set(F.id,!0);const O=[];for(const F of _){const Q=l(h(F));A.has(Q.id)||O.push(Q)}t&&!v.persist.hasHydrated()||c.setState(F=>[...F,...O],!0)});function $(_){v.setState(A=>{const O=A.connections.get(_.uid);return O?{...A,connections:new Map(A.connections).set(_.uid,{accounts:_.accounts??O.accounts,chainId:_.chainId??O.chainId,connector:O.connector})}:A})}function S(_){v.getState().status==="connecting"||v.getState().status==="reconnecting"||v.setState(A=>{const O=c.getState().find(F=>F.uid===_.uid);return O?(O.emitter.listenerCount("connect")&&O.emitter.off("connect",$),O.emitter.listenerCount("change")||O.emitter.on("change",$),O.emitter.listenerCount("disconnect")||O.emitter.on("disconnect",I),{...A,connections:new Map(A.connections).set(_.uid,{accounts:_.accounts,chainId:_.chainId,connector:O}),current:_.uid,status:"connected"}):A})}function I(_){v.setState(A=>{const O=A.connections.get(_.uid);if(O){const Q=O.connector;Q.emitter.listenerCount("change")&&O.connector.emitter.off("change",$),Q.emitter.listenerCount("disconnect")&&O.connector.emitter.off("disconnect",I),Q.emitter.listenerCount("connect")||O.connector.emitter.on("connect",S)}if(A.connections.delete(_.uid),A.connections.size===0)return{...A,connections:new Map,current:null,status:"disconnected"};const F=A.connections.values().next().value;return{...A,connections:new Map(A.connections),current:F.connector.uid}})}return{get chains(){return a.getState()},get connectors(){return c.getState()},storage:t,getClient:f,get state(){return v.getState()},setState(_){let A;typeof _=="function"?A=_(v.getState()):A=_;const O=m();typeof A!="object"&&(A=O),Object.keys(O).some(Q=>!(Q in A))&&(A=O),v.setState(A,!0)},subscribe(_,A,O){return v.subscribe(_,A,O?{...O,fireImmediately:O.emitImmediately}:void 0)},_internal:{mipd:s,store:v,ssr:!!o,syncConnectedChain:r,transports:i.transports,chains:{setState(_){const A=typeof _=="function"?_(a.getState()):_;if(A.length!==0)return a.setState(A,!0)},subscribe(_){return a.subscribe(_)}},connectors:{providerDetailToConnector:h,setup:l,setState(_){return c.setState(typeof _=="function"?_(c.getState()):_,!0)},subscribe(_){return c.subscribe(_)}},events:{change:$,connect:S,disconnect:I}}}}function Ha(n){if(typeof n=="string")return Number.parseInt(n,n.trim().substring(0,2)==="0x"?16:10);if(typeof n=="bigint")return Number(n);if(typeof n=="number")return n;throw new Error(`Cannot normalize chainId "${n}" of type "${typeof n}"`)}const sm=Symbol(),hu=Object.getPrototypeOf,kc=new WeakMap,am=n=>n&&(kc.has(n)?kc.get(n):hu(n)===Object.prototype||hu(n)===Array.prototype),cm=n=>am(n)&&n[sm]||null,fu=(n,e=!0)=>{kc.set(n,e)};var Cs={VITE_PROJECT_ID:"lucas2024",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Za=n=>typeof n=="object"&&n!==null,$n=new WeakMap,Wi=new WeakSet,lm=(n=Object.is,e=(l,h)=>new Proxy(l,h),t=l=>Za(l)&&!Wi.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),r=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,i=(l,h,p=r)=>{const f=o.get(l);if((f==null?void 0:f[0])===h)return f[1];const m=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return fu(m,!0),o.set(l,[h,m]),Reflect.ownKeys(l).forEach(y=>{if(Object.getOwnPropertyDescriptor(m,y))return;const x=Reflect.get(l,y),v={value:x,enumerable:!0,configurable:!0};if(Wi.has(x))fu(x,!1);else if(x instanceof Promise)delete v.value,v.get=()=>p(x);else if($n.has(x)){const[$,S]=$n.get(x);v.value=i($,S(),p)}Object.defineProperty(m,y,v)}),Object.preventExtensions(m)},s=new WeakMap,a=[1,1],c=l=>{if(!Za(l))throw new Error("object required");const h=s.get(l);if(h)return h;let p=a[0];const f=new Set,m=(Y,D=++a[0])=>{p!==D&&(p=D,f.forEach(U=>U(Y,D)))};let y=a[1];const x=(Y=++a[1])=>(y!==Y&&!f.size&&(y=Y,$.forEach(([D])=>{const U=D[1](Y);U>p&&(p=U)})),p),v=Y=>(D,U)=>{const ae=[...D];ae[1]=[Y,...ae[1]],m(ae,U)},$=new Map,S=(Y,D)=>{if((Cs?"production":void 0)!=="production"&&$.has(Y))throw new Error("prop listener already exists");if(f.size){const U=D[3](v(Y));$.set(Y,[D,U])}else $.set(Y,[D])},I=Y=>{var D;const U=$.get(Y);U&&($.delete(Y),(D=U[1])==null||D.call(U))},_=Y=>(f.add(Y),f.size===1&&$.forEach(([U,ae],ye)=>{if((Cs?"production":void 0)!=="production"&&ae)throw new Error("remove already exists");const X=U[3](v(ye));$.set(ye,[U,X])}),()=>{f.delete(Y),f.size===0&&$.forEach(([U,ae],ye)=>{ae&&(ae(),$.set(ye,[U]))})}),A=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),F=e(A,{deleteProperty(Y,D){const U=Reflect.get(Y,D);I(D);const ae=Reflect.deleteProperty(Y,D);return ae&&m(["delete",[D],U]),ae},set(Y,D,U,ae){const ye=Reflect.has(Y,D),X=Reflect.get(Y,D,ae);if(ye&&(n(X,U)||s.has(U)&&n(X,s.get(U))))return!0;I(D),Za(U)&&(U=cm(U)||U);let B=U;if(U instanceof Promise)U.then(N=>{U.status="fulfilled",U.value=N,m(["resolve",[D],N])}).catch(N=>{U.status="rejected",U.reason=N,m(["reject",[D],N])});else{!$n.has(U)&&t(U)&&(B=c(U));const N=!Wi.has(B)&&$n.get(B);N&&S(D,N)}return Reflect.set(Y,D,B,ae),m(["set",[D],U,X]),!0}});s.set(l,F);const Q=[A,x,i,_];return $n.set(F,Q),Reflect.ownKeys(l).forEach(Y=>{const D=Object.getOwnPropertyDescriptor(l,Y);"value"in D&&(F[Y]=l[Y],delete D.value,delete D.writable),Object.defineProperty(A,Y,D)}),F})=>[c,$n,Wi,n,e,t,r,o,i,s,a],[um]=lm();function it(n={}){return um(n)}function bn(n,e,t){const r=$n.get(n);(Cs?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],s=r[3];let a=!1;const l=s(h=>{i.push(h),o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function g0(n,e){const t=$n.get(n);(Cs?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[r,o,i]=t;return i(r,o(),e)}function fo(n){return Wi.add(n),n}function Wt(n,e,t,r){let o=n[e];return bn(n,()=>{const i=n[e];Object.is(o,i)||t(o=i)})}const Va="https://secure.walletconnect.com",Gt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Va,SECURE_SITE_DASHBOARD:`${Va}/dashboard`,SECURE_SITE_FAVICON:`${Va}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},ee={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const n=window.navigator.userAgent.toLowerCase();return ee.isMobile()&&n.includes("android")},isIos(){const n=window.navigator.userAgent.toLowerCase();return ee.isMobile()&&(n.includes("iphone")||n.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(n){return n?n-Date.now()<=Gt.TEN_SEC_MS:!0},isAllowedRetry(n){return Date.now()-n>=Gt.ONE_SEC_MS},copyToClopboard(n){navigator.clipboard.writeText(n)},getPairingExpiry(){return Date.now()+Gt.FOUR_MINUTES_MS},getPlainAddress(n){return n.split(":")[2]},async wait(n){return new Promise(e=>{setTimeout(e,n)})},debounce(n,e=500){let t;return(...r)=>{function o(){n(...r)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(n){return n.startsWith("http://")||n.startsWith("https://")},formatNativeUrl(n,e){if(ee.isHttpUrl(n))return this.formatUniversalUrl(n,e);let t=n;t.includes("://")||(t=n.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},formatUniversalUrl(n,e){if(!ee.isHttpUrl(n))return this.formatNativeUrl(n,e);let t=n;t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},openHref(n,e){window.open(n,e,"noreferrer noopener")},async preloadImage(n){const e=new Promise((t,r)=>{const o=new Image;o.onload=t,o.onerror=r,o.crossOrigin="anonymous",o.src=n});return Promise.race([e,ee.wait(2e3)])},formatBalance(n,e){var r;let t;if(n==="0")t="0.000";else if(typeof n=="string"){const o=Number(n);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return t?`${t} ${e??""}`:"0.000"},isRestrictedRegion(){try{const{timeZone:n}=new Intl.DateTimeFormat().resolvedOptions(),e=n.toUpperCase();return Gt.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return ee.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return ee.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return ee.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})},parseError(n){var e,t;return typeof n=="string"?n:typeof((t=(e=n==null?void 0:n.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?n.issues[0].message:n instanceof Error?n.message:"Unknown error"},sortRequestedNetworks(n,e=[]){const t={};return e&&n&&(n.forEach((r,o)=>{t[r]=o}),e.sort((r,o)=>{const i=t[r.id],s=t[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),e}},Be=it({isConnected:!1}),xe={state:Be,subscribe(n){return bn(Be,()=>n(Be))},subscribeKey(n,e){return Wt(Be,n,e)},setIsConnected(n){Be.isConnected=n},setCaipAddress(n){Be.caipAddress=n,Be.address=n?ee.getPlainAddress(n):void 0},setBalance(n,e){Be.balance=n,Be.balanceSymbol=e},setProfileName(n){Be.profileName=n},setProfileImage(n){Be.profileImage=n},setAddressExplorerUrl(n){Be.addressExplorerUrl=n},resetAccount(){Be.isConnected=!1,Be.caipAddress=void 0,Be.address=void 0,Be.balance=void 0,Be.balanceSymbol=void 0,Be.profileName=void 0,Be.profileImage=void 0,Be.addressExplorerUrl=void 0}};class pl{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const qa="WALLETCONNECT_DEEPLINK_CHOICE",pu="@w3m/recent",gu="@w3m/connected_wallet_image_url",mu="@w3m/connected_connector",tt={setWalletConnectDeepLink({href:n,name:e}){try{localStorage.setItem(qa,JSON.stringify({href:n,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const n=localStorage.getItem(qa);if(n)return JSON.parse(n)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(qa)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(n){try{const e=tt.getRecentWallets();e.find(r=>r.id===n.id)||(e.unshift(n),e.length>2&&e.pop(),localStorage.setItem(pu,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const n=localStorage.getItem(pu);return n?JSON.parse(n):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(n){try{localStorage.setItem(gu,n)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(gu)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(n){try{localStorage.setItem(mu,n)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(mu)}catch{console.info("Unable to get Connected Connector")}}},_n=it({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Gr={state:_n,subscribeNetworkImages(n){return bn(_n.networkImages,()=>n(_n.networkImages))},subscribeKey(n,e){return Wt(_n,n,e)},setWalletImage(n,e){_n.walletImages[n]=e},setNetworkImage(n,e){_n.networkImages[n]=e},setConnectorImage(n,e){_n.connectorImages[n]=e},setTokenImage(n,e){_n.tokenImages[n]=e}},ot=it({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ve={state:ot,subscribeKey(n,e){return Wt(ot,n,e)},setProjectId(n){ot.projectId=n},setAllWallets(n){ot.allWallets=n},setIncludeWalletIds(n){ot.includeWalletIds=n},setExcludeWalletIds(n){ot.excludeWalletIds=n},setFeaturedWalletIds(n){ot.featuredWalletIds=n},setTokens(n){ot.tokens=n},setTermsConditionsUrl(n){ot.termsConditionsUrl=n},setPrivacyPolicyUrl(n){ot.privacyPolicyUrl=n},setCustomWallets(n){ot.customWallets=n},setEnableAnalytics(n){ot.enableAnalytics=n},setSdkVersion(n){ot.sdkVersion=n},setMetadata(n){ot.metadata=n}},Xn=it({connectors:[]}),Ie={state:Xn,subscribeKey(n,e){return Wt(Xn,n,e)},setConnectors(n){Xn.connectors=n.map(e=>fo(e))},addConnector(n){var e,t;if(Xn.connectors.push(fo(n)),n.id==="w3mEmail"){const r=n,o=g0(ve.state);(t=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId})}},getEmailConnector(){return Xn.connectors.find(n=>n.type==="EMAIL")},getAnnouncedConnectorRdns(){return Xn.connectors.filter(n=>n.type==="ANNOUNCED").map(n=>{var e;return(e=n.info)==null?void 0:e.rdns})},getConnectors(){return Xn.connectors}},Li=it({open:!1,selectedNetworkId:void 0}),ri={state:Li,subscribe(n){return bn(Li,()=>n(Li))},set(n){Object.assign(Li,{...Li,...n})}},dm=ee.getAnalyticsUrl(),hm=new pl({baseUrl:dm}),fm=["MODAL_CREATED"],Wr=it({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ne={state:Wr,subscribe(n){return bn(Wr,()=>n(Wr))},_getApiHeaders(){const{projectId:n,sdkType:e,sdkVersion:t}=ve.state;return{"x-project-id":n,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(n){try{if(fm.includes(n.data.event)||typeof window>"u")return;await hm.post({path:"/e",headers:ne._getApiHeaders(),body:{eventId:ee.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:n.timestamp,props:n.data}})}catch{}},sendEvent(n){Wr.timestamp=Date.now(),Wr.data=n,ve.state.enableAnalytics&&ne._sendAnalyticsEvent(Wr)}},We=it({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),_e={state:We,subscribeKey(n,e){return Wt(We,n,e)},_getClient(){if(!We._client)throw new Error("NetworkController client not set");return We._client},setClient(n){We._client=fo(n)},setCaipNetwork(n){We.caipNetwork=n,ri.set({selectedNetworkId:n==null?void 0:n.id}),this.checkIfSupportedNetwork()},setDefaultCaipNetwork(n){We.caipNetwork=n,ri.set({selectedNetworkId:n==null?void 0:n.id}),We.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(n){We.requestedCaipNetworks=n},async getApprovedCaipNetworksData(){const n=await this._getClient().getApprovedCaipNetworksData();We.supportsAllNetworks=n.supportsAllNetworks,We.approvedCaipNetworkIds=n.approvedCaipNetworkIds},async switchActiveNetwork(n){await this._getClient().switchCaipNetwork(n),We.caipNetwork=n,n&&ne.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:n.id}})},checkIfSupportedNetwork(){var n;We.isUnsupportedChain=!((n=We.requestedCaipNetworks)!=null&&n.some(e=>{var t;return e.id===((t=We.caipNetwork)==null?void 0:t.id)})),We.isUnsupportedChain&&this.showUnsupportedChainUI()},resetNetwork(){We.isDefaultCaipNetwork||(We.caipNetwork=void 0),We.approvedCaipNetworkIds=void 0,We.supportsAllNetworks=!0},showUnsupportedChainUI(){setTimeout(()=>{Ee.open({view:"UnsupportedChain"})},300)}},pm=ee.getApiUrl(),It=new pl({baseUrl:pm}),gm="40",wu="4",Qe=it({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),me={state:Qe,subscribeKey(n,e){return Wt(Qe,n,e)},_getApiHeaders(){const{projectId:n,sdkType:e,sdkVersion:t}=ve.state;return{"x-project-id":n,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(n){const e=`${It.baseUrl}/getWalletImage/${n}`,t=await It.getBlob({path:e,headers:me._getApiHeaders()});Gr.setWalletImage(n,URL.createObjectURL(t))},async _fetchNetworkImage(n){const e=`${It.baseUrl}/public/getAssetImage/${n}`,t=await It.getBlob({path:e,headers:me._getApiHeaders()});Gr.setNetworkImage(n,URL.createObjectURL(t))},async _fetchConnectorImage(n){const e=`${It.baseUrl}/public/getAssetImage/${n}`,t=await It.getBlob({path:e,headers:me._getApiHeaders()});Gr.setConnectorImage(n,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:n}=_e.state,e=n==null?void 0:n.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>me._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:n}=Ie.state,e=n.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>me._fetchConnectorImage(t)))},async fetchFeaturedWallets(){const{featuredWalletIds:n}=ve.state;if(n!=null&&n.length){const{data:e}=await It.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:n!=null&&n.length?String(n.length):wu,include:n==null?void 0:n.join(",")}});e.sort((r,o)=>n.indexOf(r.id)-n.indexOf(o.id));const t=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(t.map(r=>me._fetchWalletImage(r))),Qe.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:n,excludeWalletIds:e,featuredWalletIds:t}=ve.state,r=[...e??[],...t??[]].filter(Boolean),{data:o,count:i}=await It.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:wu,include:n==null?void 0:n.join(","),exclude:r==null?void 0:r.join(",")}}),s=tt.getRecentWallets(),a=o.map(l=>l.image_id).filter(Boolean),c=s.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>me._fetchWalletImage(l))),Qe.recommended=o,Qe.count=i??0},async fetchWallets({page:n}){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=ve.state,o=[...Qe.recommended.map(({id:c})=>c),...t??[],...r??[]].filter(Boolean),{data:i,count:s}=await It.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:String(n),entries:gm,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=i.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>me._fetchWalletImage(c)),ee.wait(300)]),Qe.wallets=[...Qe.wallets,...i],Qe.count=s>Qe.count?s:Qe.count,Qe.page=n},async searchWallet({search:n}){const{includeWalletIds:e,excludeWalletIds:t}=ve.state;Qe.search=[];const{data:r}=await It.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:"100",search:n,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>me._fetchWalletImage(i)),ee.wait(300)]),Qe.search=r},prefetch(){const n=[me.fetchFeaturedWallets(),me.fetchRecommendedWallets(),me.fetchNetworkImages(),me.fetchConnectorImages()];ve.state.enableAnalytics===void 0&&n.push(me.fetchAnalyticsConfig()),Qe.prefetchPromise=Promise.race([Promise.allSettled(n),ee.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:n}=await It.get({path:"/getAnalyticsConfig",headers:me._getApiHeaders()});ve.setEnableAnalytics(n)}},Pe=it({view:"Connect",history:["Connect"]}),H={state:Pe,subscribeKey(n,e){return Wt(Pe,n,e)},push(n,e){n!==Pe.view&&(Pe.view=n,Pe.history.push(n),Pe.data=e)},reset(n){Pe.view=n,Pe.history=[n]},replace(n,e){Pe.history.length>1&&Pe.history.at(-1)!==n&&(Pe.view=n,Pe.history[Pe.history.length-1]=n,Pe.data=e)},goBack(){if(Pe.history.length>1){Pe.history.pop();const[n]=Pe.history.slice(-1);n&&(Pe.view=n)}},goBackToIndex(n){if(Pe.history.length>1){Pe.history=Pe.history.slice(0,n+1);const[e]=Pe.history.slice(-1);e&&(Pe.view=e)}}},er=it({loading:!1,open:!1}),Ee={state:er,subscribe(n){return bn(er,()=>n(er))},subscribeKey(n,e){return Wt(er,n,e)},async open(n){await me.state.prefetchPromise;const e=xe.state.isConnected;n!=null&&n.view?H.reset(n.view):e?H.reset("Account"):H.reset("Connect"),er.open=!0,ri.set({open:!0}),ne.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const n=xe.state.isConnected;er.open=!1,ri.set({open:!1}),ne.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:n}})},setLoading(n){er.loading=n}},mm=ee.getBlockchainApiUrl(),bu=new pl({baseUrl:mm}),m0={fetchIdentity({caipChainId:n,address:e}){return bu.get({path:`/v1/identity/${e}`,params:{chainId:n,projectId:ve.state.projectId}})},fetchTransactions({account:n,projectId:e,cursor:t}){const r=t?{cursor:t}:{};return bu.get({path:`/v1/account/${n}/history?projectId=${e}`,params:r})}},ln=it({message:"",variant:"success",open:!1}),Fe={state:ln,subscribeKey(n,e){return Wt(ln,n,e)},showSuccess(n){ln.message=n,ln.variant="success",ln.open=!0},showError(n){const e=ee.parseError(n);ln.message=e,ln.variant="error",ln.open=!0},hide(){ln.open=!1}},ze=it({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Rt={state:ze,subscribe(n){return bn(ze,()=>n(ze))},async fetchTransactions(n){const{projectId:e}=ve.state;if(!e||!n)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ze.loading=!0;try{const t=await m0.fetchTransactions({account:n,projectId:e,cursor:ze.next}),r=this.filterSpamTransactions(t.data),o=[...ze.transactions,...r];ze.loading=!1,ze.transactions=o,ze.transactionsByYear=this.groupTransactionsByYearAndMonth(ze.transactionsByYear,r),ze.empty=o.length===0,ze.next=t.next?t.next:void 0}catch{ne.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:n,projectId:e,cursor:ze.next}}),Fe.showError("Failed to fetch transactions"),ze.loading=!1,ze.empty=!0}},groupTransactionsByYearAndMonth(n={},e=[]){const t=n;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),i=new Date(r.metadata.minedAt).getMonth(),s=t[o]??{},a=s[i]??[];t[o]={...s,[i]:[...a,r]}}),t},filterSpamTransactions(n){return n.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){ze.transactions=[],ze.transactionsByYear={},ze.loading=!1,ze.empty=!1,ze.next=void 0}},Ze=it({wcError:!1,buffering:!1}),be={state:Ze,subscribeKey(n,e){return Wt(Ze,n,e)},_getClient(){if(!Ze._client)throw new Error("ConnectionController client not set");return Ze._client},setClient(n){Ze._client=fo(n)},connectWalletConnect(){Ze.wcPromise=this._getClient().connectWalletConnect(n=>{Ze.wcUri=n,Ze.wcPairingExpiry=ee.getPairingExpiry()})},async connectExternal(n){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,n)),tt.setConnectedConnector(n.type)},async signMessage(n){return this._getClient().signMessage(n)},checkInstalled(n){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,n)},resetWcConnection(){Ze.wcUri=void 0,Ze.wcPairingExpiry=void 0,Ze.wcPromise=void 0,Ze.wcLinking=void 0,Ze.recentWallet=void 0,Rt.resetTransactions(),tt.deleteWalletConnectDeepLink()},setWcLinking(n){Ze.wcLinking=n},setWcError(n){Ze.wcError=n,Ze.buffering=!1},setRecentWallet(n){Ze.recentWallet=n},setBuffering(n){Ze.buffering=n},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ht=it({status:"uninitialized",isSiweEnabled:!1}),De={state:ht,subscribeKey(n,e){return Wt(ht,n,e)},subscribe(n){return bn(ht,()=>n(ht))},_getClient(){if(!ht._client)throw new Error("SIWEController client not set");return ht._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(n){const t=this._getClient().createMessage(n);return this.setMessage(t),t},async verifyMessage(n){return await this._getClient().verifyMessage(n)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const n=this._getClient();await n.signOut(),this.setStatus("ready"),(e=n.onSignOut)==null||e.call(n)},onSignIn(n){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,n)},onSignOut(){var e;const n=this._getClient();(e=n.onSignOut)==null||e.call(n)},setSIWEClient(n){ht._client=fo(n),ht.status="ready",ht.isSiweEnabled=n.options.enabled},setNonce(n){ht.nonce=n},setStatus(n){ht.status=n},setMessage(n){ht.message=n},setSession(n){ht.session=n}},tr=it({themeMode:"dark",themeVariables:{}}),at={state:tr,subscribe(n){return bn(tr,()=>n(tr))},setThemeMode(n){tr.themeMode=n},setThemeVariables(n){tr.themeVariables={...tr.themeVariables,...n}},getSnapshot(){return g0(tr)}},Ne={getWalletImage(n){if(n!=null&&n.image_url)return n==null?void 0:n.image_url;if(n!=null&&n.image_id)return Gr.state.walletImages[n.image_id]},getNetworkImage(n){if(n!=null&&n.imageUrl)return n==null?void 0:n.imageUrl;if(n!=null&&n.imageId)return Gr.state.networkImages[n.imageId]},getConnectorImage(n){if(n!=null&&n.imageUrl)return n.imageUrl;if(n!=null&&n.imageId)return Gr.state.connectorImages[n.imageId]}},gl={goBackOrCloseModal(){H.state.history.length>1?H.goBack():Ee.close()},navigateAfterNetworkSwitch(){const{history:n}=H.state,e=n.findIndex(t=>t==="Networks");e>=1?H.goBackToIndex(e-1):Ee.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=globalThis,ml=ps.ShadowRoot&&(ps.ShadyCSS===void 0||ps.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,w0=Symbol(),vu=new WeakMap;let wm=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==w0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ml&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=vu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&vu.set(t,e))}return e}toString(){return this.cssText}};const bm=n=>new wm(typeof n=="string"?n:n+"",void 0,w0),vm=(n,e)=>{if(ml)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=ps.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},yu=ml?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return bm(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ym,defineProperty:xm,getOwnPropertyDescriptor:Cm,getOwnPropertyNames:_m,getOwnPropertySymbols:Em,getPrototypeOf:$m}=Object,Nn=globalThis,xu=Nn.trustedTypes,Sm=xu?xu.emptyScript:"",Ga=Nn.reactiveElementPolyfillSupport,Fi=(n,e)=>n,_s={toAttribute(n,e){switch(e){case Boolean:n=n?Sm:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},wl=(n,e)=>!ym(n,e),Cu={attribute:!0,type:String,converter:_s,reflect:!1,hasChanged:wl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Nn.litPropertyMetadata??(Nn.litPropertyMetadata=new WeakMap);let Ui=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Cu){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&xm(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=Cm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Cu}static _$Ei(){if(this.hasOwnProperty(Fi("elementProperties")))return;const e=$m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fi("properties"))){const t=this.properties,r=[..._m(t),...Em(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(yu(o))}else e!==void 0&&t.push(yu(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vm(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:_s).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:_s;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??wl)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},Ui[Fi("elementProperties")]=new Map,Ui[Fi("finalized")]=new Map,Ga==null||Ga({ReactiveElement:Ui}),(Nn.reactiveElementVersions??(Nn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=globalThis,Es=Hi.trustedTypes,_u=Es?Es.createPolicy("lit-html",{createHTML:n=>n}):void 0,b0="$lit$",An=`lit$${Math.random().toFixed(9).slice(2)}$`,v0="?"+An,Am=`<${v0}>`,pr=document,$s=()=>pr.createComment(""),po=n=>n===null||typeof n!="object"&&typeof n!="function",y0=Array.isArray,Im=n=>y0(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ya=`[ 	
\f\r]`,Di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eu=/-->/g,$u=/>/g,nr=RegExp(`>|${Ya}(?:([^\\s"'>=/]+)(${Ya}*=${Ya}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Su=/'/g,Au=/"/g,x0=/^(?:script|style|textarea|title)$/i,ii=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),Iu=new WeakMap,or=pr.createTreeWalker(pr,129);function C0(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return _u!==void 0?_u.createHTML(e):e}const Rm=(n,e)=>{const t=n.length-1,r=[];let o,i=e===2?"<svg>":"",s=Di;for(let a=0;a<t;a++){const c=n[a];let l,h,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,h=s.exec(c),h!==null);)f=s.lastIndex,s===Di?h[1]==="!--"?s=Eu:h[1]!==void 0?s=$u:h[2]!==void 0?(x0.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=nr):h[3]!==void 0&&(s=nr):s===nr?h[0]===">"?(s=o??Di,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,l=h[1],s=h[3]===void 0?nr:h[3]==='"'?Au:Su):s===Au||s===Su?s=nr:s===Eu||s===$u?s=Di:(s=nr,o=void 0);const m=s===nr&&n[a+1].startsWith("/>")?" ":"";i+=s===Di?c+Am:p>=0?(r.push(l),c.slice(0,p)+b0+c.slice(p)+An+m):c+An+(p===-2?a:m)}return[C0(n,i+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};let Nc=class _0{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,c=this.parts,[l,h]=Rm(e,t);if(this.el=_0.createElement(l,r),or.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=or.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(b0)){const f=h[s++],m=o.getAttribute(p).split(An),y=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:y[2],strings:m,ctor:y[1]==="."?Om:y[1]==="?"?Pm:y[1]==="@"?km:ca}),o.removeAttribute(p)}else p.startsWith(An)&&(c.push({type:6,index:i}),o.removeAttribute(p));if(x0.test(o.tagName)){const p=o.textContent.split(An),f=p.length-1;if(f>0){o.textContent=Es?Es.emptyScript:"";for(let m=0;m<f;m++)o.append(p[m],$s()),or.nextNode(),c.push({type:2,index:++i});o.append(p[f],$s())}}}else if(o.nodeType===8)if(o.data===v0)c.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(An,p+1))!==-1;)c.push({type:7,index:i}),p+=An.length-1}i++}}static createElement(e,t){const r=pr.createElement("template");return r.innerHTML=e,r}};function oi(n,e,t=n,r){var s,a;if(e===ii)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const i=po(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=oi(n,o._$AS(n,e.values),o,r)),e}let Tm=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??pr).importNode(t,!0);or.currentNode=o;let i=or.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new E0(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new Nm(i,this,e)),this._$AV.push(l),c=r[++a]}s!==(c==null?void 0:c.index)&&(i=or.nextNode(),s++)}return or.currentNode=pr,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},E0=class $0{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=oi(this,e,t),po(e)?e===je||e==null||e===""?(this._$AH!==je&&this._$AR(),this._$AH=je):e!==this._$AH&&e!==ii&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Im(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==je&&po(this._$AH)?this._$AA.nextSibling.data=e:this.T(pr.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nc.createElement(C0(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(t);else{const s=new Tm(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Iu.get(e.strings);return t===void 0&&Iu.set(e.strings,t=new Nc(e)),t}k(e){y0(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new $0(this.S($s()),this.S($s()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},ca=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=je,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=je}_$AI(e,t=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=oi(this,e,t,0),s=!po(e)||e!==this._$AH&&e!==ii,s&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=oi(this,a[r+c],t,c),l===ii&&(l=this._$AH[c]),s||(s=!po(l)||l!==this._$AH[c]),l===je?e=je:e!==je&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Om=class extends ca{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===je?void 0:e}},Pm=class extends ca{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==je)}},km=class extends ca{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=oi(this,e,t,0)??je)===ii)return;const r=this._$AH,o=e===je&&r!==je||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==je&&(r===je||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Nm=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){oi(this,e)}};const Ka=Hi.litHtmlPolyfillSupport;Ka==null||Ka(Nc,E0),(Hi.litHtmlVersions??(Hi.litHtmlVersions=[])).push("3.1.4");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=globalThis,bl=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vl=Symbol(),Ru=new WeakMap;let S0=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==vl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(bl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ru.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ru.set(t,e))}return e}toString(){return this.cssText}};const Vt=n=>new S0(typeof n=="string"?n:n+"",void 0,vl),j=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new S0(t,n,vl)},Mm=(n,e)=>{if(bl)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=gs.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},Tu=bl?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Vt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Lm,defineProperty:Um,getOwnPropertyDescriptor:Dm,getOwnPropertyNames:jm,getOwnPropertySymbols:Bm,getPrototypeOf:Wm}=Object,Mn=globalThis,Ou=Mn.trustedTypes,zm=Ou?Ou.emptyScript:"",Ja=Mn.reactiveElementPolyfillSupport,Zi=(n,e)=>n,Mc={toAttribute(n,e){switch(e){case Boolean:n=n?zm:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},A0=(n,e)=>!Lm(n,e),Pu={attribute:!0,type:String,converter:Mc,reflect:!1,hasChanged:A0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mn.litPropertyMetadata??(Mn.litPropertyMetadata=new WeakMap);let Hr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pu){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Um(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=Dm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pu}static _$Ei(){if(this.hasOwnProperty(Zi("elementProperties")))return;const e=Wm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zi("properties"))){const t=this.properties,r=[...jm(t),...Bm(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Tu(o))}else e!==void 0&&t.push(Tu(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mm(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Mc).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Mc;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??A0)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Hr.elementStyles=[],Hr.shadowRootOptions={mode:"open"},Hr[Zi("elementProperties")]=new Map,Hr[Zi("finalized")]=new Map,Ja==null||Ja({ReactiveElement:Hr}),(Mn.reactiveElementVersions??(Mn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=globalThis,Ss=Vi.trustedTypes,ku=Ss?Ss.createPolicy("lit-html",{createHTML:n=>n}):void 0,I0="$lit$",In=`lit$${Math.random().toFixed(9).slice(2)}$`,R0="?"+In,Fm=`<${R0}>`,gr=document,go=()=>gr.createComment(""),mo=n=>n===null||typeof n!="object"&&typeof n!="function",T0=Array.isArray,Hm=n=>T0(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Qa=`[ 	
\f\r]`,ji=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nu=/-->/g,Mu=/>/g,rr=RegExp(`>|${Qa}(?:([^\\s"'>=/]+)(${Qa}*=${Qa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lu=/'/g,Uu=/"/g,O0=/^(?:script|style|textarea|title)$/i,P0=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=P0(1),W=P0(2),si=Symbol.for("lit-noChange"),Ve=Symbol.for("lit-nothing"),Du=new WeakMap,sr=gr.createTreeWalker(gr,129);function k0(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ku!==void 0?ku.createHTML(e):e}const Zm=(n,e)=>{const t=n.length-1,r=[];let o,i=e===2?"<svg>":"",s=ji;for(let a=0;a<t;a++){const c=n[a];let l,h,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,h=s.exec(c),h!==null);)f=s.lastIndex,s===ji?h[1]==="!--"?s=Nu:h[1]!==void 0?s=Mu:h[2]!==void 0?(O0.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=rr):h[3]!==void 0&&(s=rr):s===rr?h[0]===">"?(s=o??ji,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,l=h[1],s=h[3]===void 0?rr:h[3]==='"'?Uu:Lu):s===Uu||s===Lu?s=rr:s===Nu||s===Mu?s=ji:(s=rr,o=void 0);const m=s===rr&&n[a+1].startsWith("/>")?" ":"";i+=s===ji?c+Fm:p>=0?(r.push(l),c.slice(0,p)+I0+c.slice(p)+In+m):c+In+(p===-2?a:m)}return[k0(n,i+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};class wo{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0;const a=e.length-1,c=this.parts,[l,h]=Zm(e,t);if(this.el=wo.createElement(l,r),sr.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=sr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(I0)){const f=h[s++],m=o.getAttribute(p).split(In),y=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:y[2],strings:m,ctor:y[1]==="."?qm:y[1]==="?"?Gm:y[1]==="@"?Ym:la}),o.removeAttribute(p)}else p.startsWith(In)&&(c.push({type:6,index:i}),o.removeAttribute(p));if(O0.test(o.tagName)){const p=o.textContent.split(In),f=p.length-1;if(f>0){o.textContent=Ss?Ss.emptyScript:"";for(let m=0;m<f;m++)o.append(p[m],go()),sr.nextNode(),c.push({type:2,index:++i});o.append(p[f],go())}}}else if(o.nodeType===8)if(o.data===R0)c.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(In,p+1))!==-1;)c.push({type:7,index:i}),p+=In.length-1}i++}}static createElement(e,t){const r=gr.createElement("template");return r.innerHTML=e,r}}function ai(n,e,t=n,r){var s,a;if(e===si)return e;let o=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const i=mo(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=ai(n,o._$AS(n,e.values),o,r)),e}class Vm{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??gr).importNode(t,!0);sr.currentNode=o;let i=sr.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Zo(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new Km(i,this,e)),this._$AV.push(l),c=r[++a]}s!==(c==null?void 0:c.index)&&(i=sr.nextNode(),s++)}return sr.currentNode=gr,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Zo{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Ve,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ai(this,e,t),mo(e)?e===Ve||e==null||e===""?(this._$AH!==Ve&&this._$AR(),this._$AH=Ve):e!==this._$AH&&e!==si&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Hm(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Ve&&mo(this._$AH)?this._$AA.nextSibling.data=e:this.T(gr.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=wo.createElement(k0(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(t);else{const s=new Vm(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Du.get(e.strings);return t===void 0&&Du.set(e.strings,t=new wo(e)),t}k(e){T0(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Zo(this.S(go()),this.S(go()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class la{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=Ve,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ve}_$AI(e,t=this,r,o){const i=this.strings;let s=!1;if(i===void 0)e=ai(this,e,t,0),s=!mo(e)||e!==this._$AH&&e!==si,s&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=ai(this,a[r+c],t,c),l===si&&(l=this._$AH[c]),s||(s=!mo(l)||l!==this._$AH[c]),l===Ve?e=Ve:e!==Ve&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===Ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qm extends la{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ve?void 0:e}}class Gm extends la{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ve)}}class Ym extends la{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=ai(this,e,t,0)??Ve)===si)return;const r=this._$AH,o=e===Ve&&r!==Ve||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Ve&&(r===Ve||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Km{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ai(this,e)}}const Xa=Vi.litHtmlPolyfillSupport;Xa==null||Xa(wo,Zo),(Vi.litHtmlVersions??(Vi.litHtmlVersions=[])).push("3.1.4");const Jm=(n,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new Zo(e.insertBefore(go(),i),i,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let M=class extends Hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jm(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return si}};var ud;M._$litElement$=!0,M.finalized=!0,(ud=globalThis.litElementHydrateSupport)==null||ud.call(globalThis,{LitElement:M});const ec=globalThis.litElementPolyfillSupport;ec==null||ec({LitElement:M});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");let qi,Ln,Un;function N0(n,e){qi=document.createElement("style"),Ln=document.createElement("style"),Un=document.createElement("style"),qi.textContent=Yr(n).core.cssText,Ln.textContent=Yr(n).dark.cssText,Un.textContent=Yr(n).light.cssText,document.head.appendChild(qi),document.head.appendChild(Ln),document.head.appendChild(Un),yl(e)}function yl(n){Ln&&Un&&(n==="light"?(Ln.removeAttribute("media"),Un.media="enabled"):(Un.removeAttribute("media"),Ln.media="enabled"))}function M0(n){qi&&Ln&&Un&&(qi.textContent=Yr(n).core.cssText,Ln.textContent=Yr(n).dark.cssText,Un.textContent=Yr(n).light.cssText)}function Yr(n){return{core:j`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${Vt(n!=null&&n["--w3m-color-mix-strength"]?`${n["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Vt((n==null?void 0:n["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Vt((n==null?void 0:n["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Vt((n==null?void 0:n["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Vt((n==null?void 0:n["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:j`
      :root {
        --w3m-color-mix: ${Vt((n==null?void 0:n["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Vt((n==null?void 0:n["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:j`
      :root {
        --w3m-color-mix: ${Vt((n==null?void 0:n["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Vt((n==null?void 0:n["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const ie=j`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Oe=j`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,xl=j`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Qm(n,e){const{kind:t,elements:r}=e;return{kind:t,elements:r,finisher(o){customElements.get(n)||customElements.define(n,o)}}}function Xm(n,e){return customElements.get(n)||customElements.define(n,e),e}function k(n){return function(t){return typeof t=="function"?Xm(n,t):Qm(n,t)}}const ew=j`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var tw=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let As=class extends M{render(){return b`<slot></slot>`}};As.styles=[ie,ew];As=tw([k("wui-card")],As);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nw={attribute:!0,type:String,converter:_s,reflect:!1,hasChanged:wl},rw=(n=nw,e,t)=>{const{kind:r,metadata:o}=t;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(t.name,n),r==="accessor"){const{name:s}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,n)},init(a){return a!==void 0&&this.P(s,void 0,n),a}}}if(r==="setter"){const{name:s}=t;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,n)}}throw Error("Unsupported decorator location: "+r)};function C(n){return(e,t)=>typeof t=="object"?rw(n,e,t):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(n){return C({...n,state:!0,attribute:!1})}const iw=j`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,ow=W`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,sw=W`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,aw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,cw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,lw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,uw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,dw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,hw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,fw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,pw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,gw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,mw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,ww=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,bw=W`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,vw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,yw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Cw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,_w=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Ew=W` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,$w=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Sw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Aw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Iw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Rw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Tw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ow=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Pw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,kw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Nw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Mw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Lw=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Uw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Dw=W`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,jw=W`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Bw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ww=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,zw=W` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Fw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Hw=W`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Zw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Vw=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,qw=W`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Gw=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Yw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,Kw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Jw=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Qw=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Xw=W`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,e2=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,t2=W`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,n2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,r2=W`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,i2=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,o2=W`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var ua=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const s2={allWallets:ow,alpha:o2,appStore:sw,chromeStore:bw,apple:aw,arrowBottom:cw,arrowLeft:lw,arrowRight:uw,arrowTop:dw,browser:hw,checkmark:fw,chevronBottom:pw,chevronLeft:gw,chevronRight:mw,chevronTop:ww,clock:vw,close:yw,compass:Cw,coinPlaceholder:xw,copy:_w,cursor:Ew,desktop:$w,disconnect:Sw,discord:Aw,etherscan:Iw,extension:Rw,externalLink:Tw,facebook:Ow,filters:Pw,github:kw,google:Nw,helpCircle:Mw,infoCircle:Lw,mail:Uw,mobile:Dw,networkPlaceholder:jw,nftPlaceholder:Bw,off:Ww,playStore:zw,qrCode:Fw,refresh:Hw,search:Zw,swapHorizontal:Vw,swapHorizontalBold:qw,swapVertical:Gw,telegram:Yw,twitch:Kw,twitter:Jw,twitterIcon:Qw,verify:Xw,verifyFilled:e2,wallet:n2,walletConnect:r2,walletPlaceholder:t2,warningCircle:i2};let mr=class extends M{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,b`${s2[this.name]}`}};mr.styles=[ie,xl,iw];ua([C()],mr.prototype,"size",void 0);ua([C()],mr.prototype,"name",void 0);ua([C()],mr.prototype,"color",void 0);mr=ua([k("wui-icon")],mr);const a2=j`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Cl=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ci=class extends M{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return b`<img src=${this.src} alt=${this.alt} />`}};ci.styles=[ie,xl,a2];Cl([C()],ci.prototype,"src",void 0);Cl([C()],ci.prototype,"alt",void 0);ci=Cl([k("wui-image")],ci);const c2=j`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var l2=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Is=class extends M{render(){return b`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Is.styles=[ie,c2];Is=l2([k("wui-loading-hexagon")],Is);const u2=j`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var _l=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let li=class extends M{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,b`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};li.styles=[ie,u2];_l([C()],li.prototype,"color",void 0);_l([C()],li.prototype,"size",void 0);li=_l([k("wui-loading-spinner")],li);const d2=j`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var L0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let bo=class extends M{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,i=245+r,s=360+r*1.75;return b`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};bo.styles=[ie,d2];L0([C({type:Number})],bo.prototype,"radius",void 0);bo=L0([k("wui-loading-thumbnail")],bo);const h2=j`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var da=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let wr=class extends M{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,b`<slot></slot>`}};wr.styles=[h2];da([C()],wr.prototype,"width",void 0);da([C()],wr.prototype,"height",void 0);da([C()],wr.prototype,"borderRadius",void 0);wr=da([k("wui-shimmer")],wr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D0=n=>(...e)=>({_$litDirective$:n,values:e});let j0=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f2=D0(class extends j0{constructor(n){var e;if(super(n),n.type!==U0.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var r,o;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(e)}const t=n.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return ii}}),p2=j`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var ha=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let br=class extends M{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,b`<slot class=${f2(e)}></slot>`}};br.styles=[ie,p2];ha([C()],br.prototype,"variant",void 0);ha([C()],br.prototype,"color",void 0);ha([C()],br.prototype,"align",void 0);br=ha([k("wui-text")],br);const g2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,m2=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,w2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,b2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,v2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,y2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,x2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,C2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,_2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,E2=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,$2=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,S2=W`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,A2=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,I2=j`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var B0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const R2={browser:g2,dao:m2,defi:w2,defiAlt:b2,eth:v2,layers:y2,lock:x2,login:C2,network:_2,nft:E2,noun:$2,profile:S2,system:A2};let vo=class extends M{constructor(){super(...arguments),this.name="browser"}render(){return b`${R2[this.name]}`}};vo.styles=[ie,I2];B0([C()],vo.prototype,"name",void 0);vo=B0([k("wui-visual")],vo);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=n=>n??je,$e={getSpacingStyles(n,e){if(Array.isArray(n))return n[e]?`var(--wui-spacing-${n[e]})`:void 0;if(typeof n=="string")return`var(--wui-spacing-${n})`},getFormattedDate(n){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(n)},getHostName(n){return new URL(n).hostname},getTruncateString({string:n,charsStart:e,charsEnd:t,truncate:r}){return n.length<=e+t?n:r==="end"?`${n.substring(0,e)}...`:r==="start"?`...${n.substring(n.length-t)}`:`${n.substring(0,Math.floor(e))}...${n.substring(n.length-Math.floor(t))}`},generateAvatarColors(n){const t=n.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,c=[];for(let l=0;l<5;l+=1){const h=this.tintColor(r,.15*l);c.push(`rgb(${h[0]}, ${h[1]}, ${h[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(n){const e=parseInt(n,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]},tintColor(n,e){const[t,r,o]=n,i=Math.round(t+(255-t)*e),s=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e);return[i,s,a]},isNumber(n){return{number:/^[0-9]+$/u}.number.test(n)},getColorTheme(n){return n||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},T2=j`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var wt=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ye=class extends M{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$e.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$e.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$e.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$e.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$e.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$e.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$e.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$e.getSpacingStyles(this.margin,3)};
    `,b`<slot></slot>`}};Ye.styles=[ie,T2];wt([C()],Ye.prototype,"flexDirection",void 0);wt([C()],Ye.prototype,"flexWrap",void 0);wt([C()],Ye.prototype,"flexBasis",void 0);wt([C()],Ye.prototype,"flexGrow",void 0);wt([C()],Ye.prototype,"flexShrink",void 0);wt([C()],Ye.prototype,"alignItems",void 0);wt([C()],Ye.prototype,"justifyContent",void 0);wt([C()],Ye.prototype,"columnGap",void 0);wt([C()],Ye.prototype,"rowGap",void 0);wt([C()],Ye.prototype,"gap",void 0);wt([C()],Ye.prototype,"padding",void 0);wt([C()],Ye.prototype,"margin",void 0);Ye=wt([k("wui-flex")],Ye);const O2=j`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var fa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let vr=class extends M{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return b`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",b`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=$e.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};vr.styles=[ie,O2];fa([C()],vr.prototype,"imageSrc",void 0);fa([C()],vr.prototype,"alt",void 0);fa([C()],vr.prototype,"address",void 0);vr=fa([k("wui-avatar")],vr);const P2=j`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var vn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ct=class extends M{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",o=t?"12%":"16%",i=t?"xxs":r?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",c=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,b` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Ct.styles=[ie,Oe,P2];vn([C()],Ct.prototype,"size",void 0);vn([C()],Ct.prototype,"backgroundColor",void 0);vn([C()],Ct.prototype,"iconColor",void 0);vn([C()],Ct.prototype,"iconSize",void 0);vn([C()],Ct.prototype,"background",void 0);vn([C({type:Boolean})],Ct.prototype,"border",void 0);vn([C()],Ct.prototype,"borderColor",void 0);vn([C()],Ct.prototype,"icon",void 0);Ct=vn([k("wui-icon-box")],Ct);const k2=j`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var rn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pt=class extends M{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return b`
      <button
        ?disabled=${this.disabled}
        class=${de(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${$e.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return b` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?b`<wui-image src=${this.networkSrc}></wui-image>`:b`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return b`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};pt.styles=[ie,Oe,k2];rn([C()],pt.prototype,"networkSrc",void 0);rn([C()],pt.prototype,"avatarSrc",void 0);rn([C()],pt.prototype,"balance",void 0);rn([C({type:Boolean})],pt.prototype,"isUnsupportedChain",void 0);rn([C({type:Boolean})],pt.prototype,"disabled",void 0);rn([C({type:Boolean})],pt.prototype,"isProfileName",void 0);rn([C()],pt.prototype,"address",void 0);rn([C()],pt.prototype,"charsStart",void 0);rn([C()],pt.prototype,"charsEnd",void 0);pt=rn([k("wui-account-button")],pt);const N2=j`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Mr=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Kt=class extends M{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),b`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?b`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?b`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:b`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Kt.styles=[ie,N2];Mr([C()],Kt.prototype,"size",void 0);Mr([C()],Kt.prototype,"name",void 0);Mr([C()],Kt.prototype,"imageSrc",void 0);Mr([C()],Kt.prototype,"walletIcon",void 0);Mr([C({type:Boolean})],Kt.prototype,"installed",void 0);Mr([C()],Kt.prototype,"badgeSize",void 0);Kt=Mr([k("wui-wallet-image")],Kt);const M2=j`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var W0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const tc=4;let yo=class extends M{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<tc;return b`${this.walletImages.slice(0,tc).map(({src:t,walletName:r})=>b`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${de(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(tc-this.walletImages.length)].map(()=>b` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};yo.styles=[ie,M2];W0([C({type:Array})],yo.prototype,"walletImages",void 0);yo=W0([k("wui-all-wallets-image")],yo);const L2=j`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var qn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Nt=class extends M{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return b`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?b`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:b``}};Nt.styles=[ie,Oe,L2];qn([C()],Nt.prototype,"size",void 0);qn([C({type:Boolean})],Nt.prototype,"disabled",void 0);qn([C({type:Boolean})],Nt.prototype,"fullWidth",void 0);qn([C({type:Boolean})],Nt.prototype,"loading",void 0);qn([C()],Nt.prototype,"variant",void 0);qn([C({type:Boolean})],Nt.prototype,"hasIconLeft",void 0);qn([C({type:Boolean})],Nt.prototype,"hasIconRight",void 0);Nt=qn([k("wui-button")],Nt);const z0=W`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,U2=j`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var F0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let xo=class extends M{constructor(){super(...arguments),this.type="wallet"}render(){return b`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?b` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${z0}`:b`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};xo.styles=[ie,Oe,U2];F0([C()],xo.prototype,"type",void 0);xo=F0([k("wui-card-select-loader")],xo);const D2=W`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,j2=W`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,B2=j`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Vo=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let jn=class extends M{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:D2,md:z0,lg:j2};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,b`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?b`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:b`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};jn.styles=[ie,B2];Vo([C()],jn.prototype,"size",void 0);Vo([C()],jn.prototype,"name",void 0);Vo([C()],jn.prototype,"imageSrc",void 0);Vo([C({type:Boolean})],jn.prototype,"selected",void 0);jn=Vo([k("wui-network-image")],jn);const W2=j`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Lr=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Jt=class extends M{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return b`
      <button data-selected=${de(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?b`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${de(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:b`
      <wui-wallet-image
        size="md"
        imageSrc=${de(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Jt.styles=[ie,Oe,W2];Lr([C()],Jt.prototype,"name",void 0);Lr([C()],Jt.prototype,"type",void 0);Lr([C()],Jt.prototype,"imageSrc",void 0);Lr([C({type:Boolean})],Jt.prototype,"disabled",void 0);Lr([C({type:Boolean})],Jt.prototype,"selected",void 0);Lr([C({type:Boolean})],Jt.prototype,"installed",void 0);Jt=Lr([k("wui-card-select")],Jt);const z2=j`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var Ur=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Qt=class extends M{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return b`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:$e.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?b`<wui-image src=${this.imageSrc}></wui-image>`:null}};Qt.styles=[ie,Oe,z2];Ur([C()],Qt.prototype,"variant",void 0);Ur([C()],Qt.prototype,"imageSrc",void 0);Ur([C({type:Boolean})],Qt.prototype,"disabled",void 0);Ur([C()],Qt.prototype,"icon",void 0);Ur([C()],Qt.prototype,"href",void 0);Ur([C()],Qt.prototype,"text",void 0);Qt=Ur([k("wui-chip")],Qt);const F2=j`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var El=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ui=class extends M{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return b`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?b`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ui.styles=[ie,Oe,F2];El([C()],ui.prototype,"size",void 0);El([C({type:Boolean})],ui.prototype,"loading",void 0);ui=El([k("wui-connect-button")],ui);const H2=j`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var pa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let yr=class extends M{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return b`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};yr.styles=[ie,Oe,H2];pa([C({type:Boolean})],yr.prototype,"disabled",void 0);pa([C()],yr.prototype,"label",void 0);pa([C()],yr.prototype,"buttonLabel",void 0);yr=pa([k("wui-cta-button")],yr);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z2=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=(n,e)=>{var r;const t=n._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),Gi(o,e);return!0},Rs=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},H0=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),G2(e)}};function V2(n){this._$AN!==void 0?(Rs(this),this._$AM=n,H0(this)):this._$AM=n}function q2(n,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=t;i<r.length;i++)Gi(r[i],!1),Rs(r[i]);else r!=null&&(Gi(r,!1),Rs(r));else Gi(this,n)}const G2=n=>{n.type==U0.CHILD&&(n._$AP??(n._$AP=q2),n._$AQ??(n._$AQ=V2))};class Y2 extends j0{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),H0(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Gi(this,e),Rs(this))}setValue(e){if(Z2(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga=()=>new K2;class K2{}const nc=new WeakMap,ma=D0(class extends Y2{render(n){return je}update(n,[e]){var r;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=n.options)==null?void 0:r.host,this.rt(this.ct=n.element)),je}rt(n){if(this.isConnected||(n=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=nc.get(e);t===void 0&&(t=new WeakMap,nc.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,n),n!==void 0&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){var n,e;return typeof this.Y=="function"?(n=nc.get(this.ht??globalThis))==null?void 0:n.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),J2=j`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Gn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Mt=class extends M{constructor(){super(...arguments),this.inputElementRef=ga(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return b` ${this.templateIcon()}
      <input
        ${ma(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${de(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${de(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?b`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Mt.styles=[ie,Oe,J2];Gn([C()],Mt.prototype,"size",void 0);Gn([C()],Mt.prototype,"icon",void 0);Gn([C({type:Boolean})],Mt.prototype,"disabled",void 0);Gn([C()],Mt.prototype,"placeholder",void 0);Gn([C()],Mt.prototype,"type",void 0);Gn([C()],Mt.prototype,"keyHint",void 0);Gn([C()],Mt.prototype,"value",void 0);Mt=Gn([k("wui-input-text")],Mt);const Q2=j`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var wa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let xr=class extends M{constructor(){super(...arguments),this.disabled=!1}render(){return b`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?b`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};xr.styles=[ie,Q2];wa([C()],xr.prototype,"errorMessage",void 0);wa([C({type:Boolean})],xr.prototype,"disabled",void 0);wa([C()],xr.prototype,"value",void 0);xr=wa([k("wui-email-input")],xr);const X2=j`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var qo=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Bn=class extends M{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return b`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Bn.styles=[ie,Oe,xl,X2];qo([C()],Bn.prototype,"size",void 0);qo([C({type:Boolean})],Bn.prototype,"disabled",void 0);qo([C()],Bn.prototype,"icon",void 0);qo([C()],Bn.prototype,"iconColor",void 0);Bn=qo([k("wui-icon-link")],Bn);const eb=j`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Z0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Co=class extends M{constructor(){super(...arguments),this.icon="copy"}render(){return b`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Co.styles=[ie,Oe,eb];Z0([C()],Co.prototype,"icon",void 0);Co=Z0([k("wui-input-element")],Co);const tb=j`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var $l=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let di=class extends M{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return b`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};di.styles=[ie,Oe,tb];$l([C({type:Boolean})],di.prototype,"disabled",void 0);$l([C({type:String})],di.prototype,"value",void 0);di=$l([k("wui-input-numeric")],di);const nb=j`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Sl=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let hi=class extends M{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return b`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};hi.styles=[ie,Oe,nb];Sl([C({type:Boolean})],hi.prototype,"disabled",void 0);Sl([C()],hi.prototype,"color",void 0);hi=Sl([k("wui-link")],hi);const rb=j`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var on=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let gt=class extends M{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return b`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${de(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return b`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return b`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return b`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?b`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:b``}chevronTemplate(){return this.chevron?b`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};gt.styles=[ie,Oe,rb];on([C()],gt.prototype,"icon",void 0);on([C()],gt.prototype,"iconSize",void 0);on([C()],gt.prototype,"variant",void 0);on([C()],gt.prototype,"iconVariant",void 0);on([C({type:Boolean})],gt.prototype,"disabled",void 0);on([C()],gt.prototype,"imageSrc",void 0);on([C()],gt.prototype,"alt",void 0);on([C({type:Boolean})],gt.prototype,"chevron",void 0);on([C({type:Boolean})],gt.prototype,"loading",void 0);gt=on([k("wui-list-item")],gt);var Lc;(function(n){n.approve="approved",n.bought="bought",n.borrow="borrowed",n.burn="burnt",n.cancel="canceled",n.claim="claimed",n.deploy="deployed",n.deposit="deposited",n.execute="executed",n.mint="minted",n.receive="received",n.repay="repaid",n.send="sent",n.sell="sold",n.stake="staked",n.trade="swapped",n.unstake="unstaked",n.withdraw="withdrawn"})(Lc||(Lc={}));const ib=j`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Dr=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Xt=class extends M{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,b`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?b`<div class="swap-images-container">
        ${e!=null&&e.url?b`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?b`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?b`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?b`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:b`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?b`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Xt.styles=[ib];Dr([C()],Xt.prototype,"type",void 0);Dr([C()],Xt.prototype,"status",void 0);Dr([C()],Xt.prototype,"direction",void 0);Dr([C({type:Boolean})],Xt.prototype,"onlyDirectionIcon",void 0);Dr([C({type:Array})],Xt.prototype,"images",void 0);Dr([C({type:Object})],Xt.prototype,"secondImage",void 0);Xt=Dr([k("wui-transaction-visual")],Xt);const ob=j`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Yn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Lt=class extends M{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return b`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${de(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${de(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Lc[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?b`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?b`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Lt.styles=[ie,ob];Yn([C()],Lt.prototype,"type",void 0);Yn([C({type:Array})],Lt.prototype,"descriptions",void 0);Yn([C()],Lt.prototype,"date",void 0);Yn([C({type:Boolean})],Lt.prototype,"onlyDirectionIcon",void 0);Yn([C()],Lt.prototype,"status",void 0);Yn([C()],Lt.prototype,"direction",void 0);Yn([C({type:Array})],Lt.prototype,"images",void 0);Lt=Yn([k("wui-transaction-list-item")],Lt);const sb=j`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ab=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ts=class extends M{render(){return b`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Ts.styles=[ie,sb];Ts=ab([k("wui-transaction-list-item-loader")],Ts);const cb=j`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var V0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let _o=class extends M{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,b`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};_o.styles=[ie,cb];V0([C()],_o.prototype,"variant",void 0);_o=V0([k("wui-tag")],_o);const lb=j`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var zt=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let lt=class extends M{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return b`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?b` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?b` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?b`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?b`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?b`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?b`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};lt.styles=[ie,Oe,lb];zt([C({type:Array})],lt.prototype,"walletImages",void 0);zt([C()],lt.prototype,"imageSrc",void 0);zt([C()],lt.prototype,"name",void 0);zt([C()],lt.prototype,"tagLabel",void 0);zt([C()],lt.prototype,"tagVariant",void 0);zt([C()],lt.prototype,"icon",void 0);zt([C()],lt.prototype,"walletIcon",void 0);zt([C({type:Boolean})],lt.prototype,"installed",void 0);zt([C({type:Boolean})],lt.prototype,"disabled",void 0);zt([C({type:Boolean})],lt.prototype,"showAllWallets",void 0);lt=zt([k("wui-list-wallet")],lt);const ub=j`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var q0=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Eo=class extends M{constructor(){super(...arguments),this.logo="google"}render(){return b`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Eo.styles=[ie,ub];q0([C()],Eo.prototype,"logo",void 0);Eo=q0([k("wui-logo")],Eo);const db=j`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Al=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let fi=class extends M{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return b`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};fi.styles=[ie,Oe,db];Al([C()],fi.prototype,"logo",void 0);Al([C({type:Boolean})],fi.prototype,"disabled",void 0);fi=Al([k("wui-logo-select")],fi);const hb=j`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var ba=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Cr=class extends M{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return b`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?b`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?b`<wui-image src=${this.imageSrc}></wui-image>`:b`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Cr.styles=[ie,Oe,hb];ba([C()],Cr.prototype,"imageSrc",void 0);ba([C({type:Boolean})],Cr.prototype,"isUnsupportedChain",void 0);ba([C({type:Boolean})],Cr.prototype,"disabled",void 0);Cr=ba([k("wui-network-button")],Cr);const fb=j`
  :host {
    position: relative;
    display: block;
  }
`;var va=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let _r=class extends M{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,t)=>{const r=e.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const r=t+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:t],i=o?this.getInputElement(o):void 0;i&&(i.disabled=!1,i.focus())}if(e==="prev"){const r=t-1,o=this.numerics[r>-1?r:t],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var t,r;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return b`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>b`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,t)}
              @keydown=${r=>this.handleKeyDown(r,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){const o=this.numerics[t],i=e||(o?this.getInputElement(o):void 0);i&&(i.value=r,this.values=this.values.map((s,a)=>a===t?r:s))}handleInput(e,t){const r=e.target,o=this.getInputElement(r);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,t):$e.isNumber(i)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const o=t[0];if(o&&$e.isNumber(o)){this.updateInput(e,r,o);const s=t.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};_r.styles=[ie,fb];va([C({type:Number})],_r.prototype,"length",void 0);va([C({type:String})],_r.prototype,"otp",void 0);va([V()],_r.prototype,"values",void 0);_r=va([k("wui-otp")],_r);var Go={},pb=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},G0={},bt={};let Il;const gb=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];bt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};bt.getSymbolTotalCodewords=function(e){return gb[e]};bt.getBCHDigit=function(n){let e=0;for(;n!==0;)e++,n>>>=1;return e};bt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Il=e};bt.isKanjiModeEnabled=function(){return typeof Il<"u"};bt.toSJIS=function(e){return Il(e)};var ya={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},n.from=function(r,o){if(n.isValid(r))return r;try{return e(r)}catch{return o}}})(ya);function Y0(){this.buffer=[],this.length=0}Y0.prototype={get:function(n){const e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let t=0;t<e;t++)this.putBit((n>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var mb=Y0;function Yo(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Yo.prototype.set=function(n,e,t,r){const o=n*this.size+e;this.data[o]=t,r&&(this.reservedBit[o]=!0)};Yo.prototype.get=function(n,e){return this.data[n*this.size+e]};Yo.prototype.xor=function(n,e,t){this.data[n*this.size+e]^=t};Yo.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};var wb=Yo,K0={};(function(n){const e=bt.getSymbolSize;n.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},n.getPositions=function(r){const o=[],i=n.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(K0);var J0={};const bb=bt.getSymbolSize,ju=7;J0.getPositions=function(e){const t=bb(e);return[[0,0],[t-ju,0],[0,t-ju]]};var Q0={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,h=null;for(let p=0;p<i;p++){a=c=0,l=h=null;for(let f=0;f<i;f++){let m=o.get(p,f);m===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=m,a=1),m=o.get(f,p),m===h?c++:(c>=5&&(s+=e.N1+(c-5)),h=m,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},n.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},n.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let h=0;h<i;h++)a=a<<1&2047|o.get(l,h),h>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(h,l),h>=10&&(c===1488||c===93)&&s++}return s*e.N3},n.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function t(r,o,i){switch(r){case n.Patterns.PATTERN000:return(o+i)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return i%3===0;case n.Patterns.PATTERN011:return(o+i)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case n.Patterns.PATTERN101:return o*i%2+o*i%3===0;case n.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case n.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}n.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,t(o,c,a))},n.getBestMask=function(o,i){const s=Object.keys(n.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),n.applyMask(l,o);const h=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(l,o),h<c&&(c=h,a=l)}return a}})(Q0);var xa={};const Tn=ya,as=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],cs=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];xa.getBlocksCount=function(e,t){switch(t){case Tn.L:return as[(e-1)*4+0];case Tn.M:return as[(e-1)*4+1];case Tn.Q:return as[(e-1)*4+2];case Tn.H:return as[(e-1)*4+3];default:return}};xa.getTotalCodewordsCount=function(e,t){switch(t){case Tn.L:return cs[(e-1)*4+0];case Tn.M:return cs[(e-1)*4+1];case Tn.Q:return cs[(e-1)*4+2];case Tn.H:return cs[(e-1)*4+3];default:return}};var X0={},Ca={};const Yi=new Uint8Array(512),Os=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)Yi[t]=e,Os[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)Yi[t]=Yi[t-255]})();Ca.log=function(e){if(e<1)throw new Error("log("+e+")");return Os[e]};Ca.exp=function(e){return Yi[e]};Ca.mul=function(e,t){return e===0||t===0?0:Yi[Os[e]+Os[t]]};(function(n){const e=Ca;n.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(r[s],o[a]);return i},n.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=e.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},n.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=n.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(X0);const eh=X0;function Rl(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}Rl.prototype.initialize=function(e){this.degree=e,this.genPoly=eh.generateECPolynomial(this.degree)};Rl.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=eh.mod(t,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var vb=Rl,th={},Kn={},Tl={};Tl.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var sn={};const nh="[0-9]+",yb="[A-Z $%*+\\-./:]+";let $o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";$o=$o.replace(/u/g,"\\u");const xb="(?:(?![A-Z0-9 $%*+\\-./:]|"+$o+`)(?:.|[\r
]))+`;sn.KANJI=new RegExp($o,"g");sn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");sn.BYTE=new RegExp(xb,"g");sn.NUMERIC=new RegExp(nh,"g");sn.ALPHANUMERIC=new RegExp(yb,"g");const Cb=new RegExp("^"+$o+"$"),_b=new RegExp("^"+nh+"$"),Eb=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");sn.testKanji=function(e){return Cb.test(e)};sn.testNumeric=function(e){return _b.test(e)};sn.testAlphanumeric=function(e){return Eb.test(e)};(function(n){const e=Tl,t=sn;n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},n.getBestModeForData=function(i){return t.testNumeric(i)?n.NUMERIC:t.testAlphanumeric(i)?n.ALPHANUMERIC:t.testKanji(i)?n.KANJI:n.BYTE},n.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},n.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(i,s){if(n.isValid(i))return i;try{return r(i)}catch{return s}}})(Kn);(function(n){const e=bt,t=xa,r=ya,o=Kn,i=Tl,s=7973,a=e.getBCHDigit(s);function c(f,m,y){for(let x=1;x<=40;x++)if(m<=n.getCapacity(x,y,f))return x}function l(f,m){return o.getCharCountIndicator(f,m)+4}function h(f,m){let y=0;return f.forEach(function(x){const v=l(x.mode,m);y+=v+x.getBitsLength()}),y}function p(f,m){for(let y=1;y<=40;y++)if(h(f,y)<=n.getCapacity(y,m,o.MIXED))return y}n.from=function(m,y){return i.isValid(m)?parseInt(m,10):y},n.getCapacity=function(m,y,x){if(!i.isValid(m))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=o.BYTE);const v=e.getSymbolTotalCodewords(m),$=t.getTotalCodewordsCount(m,y),S=(v-$)*8;if(x===o.MIXED)return S;const I=S-l(x,m);switch(x){case o.NUMERIC:return Math.floor(I/10*3);case o.ALPHANUMERIC:return Math.floor(I/11*2);case o.KANJI:return Math.floor(I/13);case o.BYTE:default:return Math.floor(I/8)}},n.getBestVersionForData=function(m,y){let x;const v=r.from(y,r.M);if(Array.isArray(m)){if(m.length>1)return p(m,v);if(m.length===0)return 1;x=m[0]}else x=m;return c(x.mode,x.getLength(),v)},n.getEncodedBits=function(m){if(!i.isValid(m)||m<7)throw new Error("Invalid QR Code version");let y=m<<12;for(;e.getBCHDigit(y)-a>=0;)y^=s<<e.getBCHDigit(y)-a;return m<<12|y}})(th);var rh={};const Uc=bt,ih=1335,$b=21522,Bu=Uc.getBCHDigit(ih);rh.getEncodedBits=function(e,t){const r=e.bit<<3|t;let o=r<<10;for(;Uc.getBCHDigit(o)-Bu>=0;)o^=ih<<Uc.getBCHDigit(o)-Bu;return(r<<10|o)^$b};var oh={};const Sb=Kn;function pi(n){this.mode=Sb.NUMERIC,this.data=n.toString()}pi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};pi.prototype.getLength=function(){return this.data.length};pi.prototype.getBitsLength=function(){return pi.getBitsLength(this.data.length)};pi.prototype.write=function(e){let t,r,o;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-t;i>0&&(r=this.data.substr(t),o=parseInt(r,10),e.put(o,i*3+1))};var Ab=pi;const Ib=Kn,rc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function gi(n){this.mode=Ib.ALPHANUMERIC,this.data=n}gi.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};gi.prototype.getLength=function(){return this.data.length};gi.prototype.getBitsLength=function(){return gi.getBitsLength(this.data.length)};gi.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=rc.indexOf(this.data[t])*45;r+=rc.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(rc.indexOf(this.data[t]),6)};var Rb=gi,Tb=function(e){for(var t=[],r=e.length,o=0;o<r;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(i&63|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(i&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const Ob=Tb,Pb=Kn;function mi(n){this.mode=Pb.BYTE,typeof n=="string"&&(n=Ob(n)),this.data=new Uint8Array(n)}mi.getBitsLength=function(e){return e*8};mi.prototype.getLength=function(){return this.data.length};mi.prototype.getBitsLength=function(){return mi.getBitsLength(this.data.length)};mi.prototype.write=function(n){for(let e=0,t=this.data.length;e<t;e++)n.put(this.data[e],8)};var kb=mi;const Nb=Kn,Mb=bt;function wi(n){this.mode=Nb.KANJI,this.data=n}wi.getBitsLength=function(e){return e*13};wi.prototype.getLength=function(){return this.data.length};wi.prototype.getBitsLength=function(){return wi.getBitsLength(this.data.length)};wi.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let t=Mb.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),n.put(t,13)}};var Lb=wi,sh={exports:{}};(function(n){var e={single_source_shortest_paths:function(t,r,o){var i={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var c,l,h,p,f,m,y,x,v;!a.empty();){c=a.pop(),l=c.value,p=c.cost,f=t[l]||{};for(h in f)f.hasOwnProperty(h)&&(m=f[h],y=p+m,x=s[h],v=typeof s[h]>"u",(v||x>y)&&(s[h]=y,a.push(h,y),i[h]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var $=["Could not find a path from ",r," to ",o,"."].join("");throw new Error($)}return i},extract_shortest_path_from_predecessor_list:function(t,r){for(var o=[],i=r;i;)o.push(i),t[i],i=t[i];return o.reverse(),o},find_path:function(t,r,o){var i=e.single_source_shortest_paths(t,r,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(t){var r=e.PriorityQueue,o={},i;t=t||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,r){return t.cost-r.cost},push:function(t,r){var o={value:t,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(sh);var Ub=sh.exports;(function(n){const e=Kn,t=Ab,r=Rb,o=kb,i=Lb,s=sn,a=bt,c=Ub;function l($){return unescape(encodeURIComponent($)).length}function h($,S,I){const _=[];let A;for(;(A=$.exec(I))!==null;)_.push({data:A[0],index:A.index,mode:S,length:A[0].length});return _}function p($){const S=h(s.NUMERIC,e.NUMERIC,$),I=h(s.ALPHANUMERIC,e.ALPHANUMERIC,$);let _,A;return a.isKanjiModeEnabled()?(_=h(s.BYTE,e.BYTE,$),A=h(s.KANJI,e.KANJI,$)):(_=h(s.BYTE_KANJI,e.BYTE,$),A=[]),S.concat(I,_,A).sort(function(F,Q){return F.index-Q.index}).map(function(F){return{data:F.data,mode:F.mode,length:F.length}})}function f($,S){switch(S){case e.NUMERIC:return t.getBitsLength($);case e.ALPHANUMERIC:return r.getBitsLength($);case e.KANJI:return i.getBitsLength($);case e.BYTE:return o.getBitsLength($)}}function m($){return $.reduce(function(S,I){const _=S.length-1>=0?S[S.length-1]:null;return _&&_.mode===I.mode?(S[S.length-1].data+=I.data,S):(S.push(I),S)},[])}function y($){const S=[];for(let I=0;I<$.length;I++){const _=$[I];switch(_.mode){case e.NUMERIC:S.push([_,{data:_.data,mode:e.ALPHANUMERIC,length:_.length},{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.ALPHANUMERIC:S.push([_,{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.KANJI:S.push([_,{data:_.data,mode:e.BYTE,length:l(_.data)}]);break;case e.BYTE:S.push([{data:_.data,mode:e.BYTE,length:l(_.data)}])}}return S}function x($,S){const I={},_={start:{}};let A=["start"];for(let O=0;O<$.length;O++){const F=$[O],Q=[];for(let Y=0;Y<F.length;Y++){const D=F[Y],U=""+O+Y;Q.push(U),I[U]={node:D,lastCount:0},_[U]={};for(let ae=0;ae<A.length;ae++){const ye=A[ae];I[ye]&&I[ye].node.mode===D.mode?(_[ye][U]=f(I[ye].lastCount+D.length,D.mode)-f(I[ye].lastCount,D.mode),I[ye].lastCount+=D.length):(I[ye]&&(I[ye].lastCount=D.length),_[ye][U]=f(D.length,D.mode)+4+e.getCharCountIndicator(D.mode,S))}}A=Q}for(let O=0;O<A.length;O++)_[A[O]].end=0;return{map:_,table:I}}function v($,S){let I;const _=e.getBestModeForData($);if(I=e.from(S,_),I!==e.BYTE&&I.bit<_.bit)throw new Error('"'+$+'" cannot be encoded with mode '+e.toString(I)+`.
 Suggested mode is: `+e.toString(_));switch(I===e.KANJI&&!a.isKanjiModeEnabled()&&(I=e.BYTE),I){case e.NUMERIC:return new t($);case e.ALPHANUMERIC:return new r($);case e.KANJI:return new i($);case e.BYTE:return new o($)}}n.fromArray=function(S){return S.reduce(function(I,_){return typeof _=="string"?I.push(v(_,null)):_.data&&I.push(v(_.data,_.mode)),I},[])},n.fromString=function(S,I){const _=p(S,a.isKanjiModeEnabled()),A=y(_),O=x(A,I),F=c.find_path(O.map,"start","end"),Q=[];for(let Y=1;Y<F.length-1;Y++)Q.push(O.table[F[Y]].node);return n.fromArray(m(Q))},n.rawSplit=function(S){return n.fromArray(p(S,a.isKanjiModeEnabled()))}})(oh);const _a=bt,ic=ya,Db=mb,jb=wb,Bb=K0,Wb=J0,Dc=Q0,jc=xa,zb=vb,Ps=th,Fb=rh,Hb=Kn,oc=oh;function Zb(n,e){const t=n.size,r=Wb.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||t<=i+a))for(let c=-1;c<=7;c++)s+c<=-1||t<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?n.set(i+a,s+c,!0,!0):n.set(i+a,s+c,!1,!0))}}function Vb(n){const e=n.size;for(let t=8;t<e-8;t++){const r=t%2===0;n.set(t,6,r,!0),n.set(6,t,r,!0)}}function qb(n,e){const t=Bb.getPositions(e);for(let r=0;r<t.length;r++){const o=t[r][0],i=t[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?n.set(o+s,i+a,!0,!0):n.set(o+s,i+a,!1,!0)}}function Gb(n,e){const t=n.size,r=Ps.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+t-8-3,s=(r>>a&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function sc(n,e,t){const r=n.size,o=Fb.getEncodedBits(e,t);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Yb(n,e){const t=n.size;let r=-1,o=t-1,i=7,s=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!n.isReserved(o,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>i&1)===1),n.set(o,a-c,l),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||t<=o){o-=r,r=-r;break}}}function Kb(n,e,t){const r=new Db;t.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Hb.getCharCountIndicator(c.mode,n)),c.write(r)});const o=_a.getSymbolTotalCodewords(n),i=jc.getTotalCodewordsCount(n,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return Jb(r,n,e)}function Jb(n,e,t){const r=_a.getSymbolTotalCodewords(e),o=jc.getTotalCodewordsCount(e,t),i=r-o,s=jc.getBlocksCount(e,t),a=r%s,c=s-a,l=Math.floor(r/s),h=Math.floor(i/s),p=h+1,f=l-h,m=new zb(f);let y=0;const x=new Array(s),v=new Array(s);let $=0;const S=new Uint8Array(n.buffer);for(let F=0;F<s;F++){const Q=F<c?h:p;x[F]=S.slice(y,y+Q),v[F]=m.encode(x[F]),y+=Q,$=Math.max($,Q)}const I=new Uint8Array(r);let _=0,A,O;for(A=0;A<$;A++)for(O=0;O<s;O++)A<x[O].length&&(I[_++]=x[O][A]);for(A=0;A<f;A++)for(O=0;O<s;O++)I[_++]=v[O][A];return I}function Qb(n,e,t,r){let o;if(Array.isArray(n))o=oc.fromArray(n);else if(typeof n=="string"){let l=e;if(!l){const h=oc.rawSplit(n);l=Ps.getBestVersionForData(h,t)}o=oc.fromString(n,l||40)}else throw new Error("Invalid data");const i=Ps.getBestVersionForData(o,t);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=Kb(e,t,o),a=_a.getSymbolSize(e),c=new jb(a);return Zb(c,e),Vb(c),qb(c,e),sc(c,t,0),e>=7&&Gb(c,e),Yb(c,s),isNaN(r)&&(r=Dc.getBestMask(c,sc.bind(null,c,t))),Dc.applyMask(r,c),sc(c,t,r),{modules:c,version:e,errorCorrectionLevel:t,maskPattern:r,segments:o}}G0.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let r=ic.M,o,i;return typeof t<"u"&&(r=ic.from(t.errorCorrectionLevel,ic.M),o=Ps.from(t.version),i=Dc.from(t.maskPattern),t.toSJISFunc&&_a.setToSJISFunction(t.toSJISFunc)),Qb(e,o,r,i)};var ah={},Ol={};(function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let r=t.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+t);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}n.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},n.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},n.getImageWidth=function(r,o){const i=n.getScale(r,o);return Math.floor((r+o.margin*2)*i)},n.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,c=n.getScale(s,i),l=Math.floor((s+i.margin*2)*c),h=i.margin*c,p=[i.color.light,i.color.dark];for(let f=0;f<l;f++)for(let m=0;m<l;m++){let y=(f*l+m)*4,x=i.color.light;if(f>=h&&m>=h&&f<l-h&&m<l-h){const v=Math.floor((f-h)/c),$=Math.floor((m-h)/c);x=p[a[v*s+$]?1:0]}r[y++]=x.r,r[y++]=x.g,r[y++]=x.b,r[y]=x.a}}})(Ol);(function(n){const e=Ol;function t(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=e.getOptions(c);const h=e.getImageWidth(i.modules.size,c),p=l.getContext("2d"),f=p.createImageData(h,h);return e.qrToImageData(f.data,i,c),t(p,l,h),p.putImageData(f,0,0),l},n.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=n.render(i,s,c),h=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(h,p.quality)}})(ah);var ch={};const Xb=Ol;function Wu(n,e){const t=n.a/255,r=e+'="'+n.hex+'"';return t<1?r+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':r}function ac(n,e,t){let r=n+e;return typeof t<"u"&&(r+=" "+t),r}function e3(n,e,t){let r="",o=0,i=!1,s=0;for(let a=0;a<n.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!i&&(i=!0),n[a]?(s++,a>0&&c>0&&n[a-1]||(r+=i?ac("M",c+t,.5+l+t):ac("m",o,0),o=0,i=!1),c+1<e&&n[a+1]||(r+=ac("h",s),s=0)):o++}return r}ch.render=function(e,t,r){const o=Xb.getOptions(t),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,c=o.color.light.a?"<path "+Wu(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Wu(o.color.dark,"stroke")+' d="'+e3(s,i,o.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+h+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,f),f};const t3=pb,Bc=G0,lh=ah,n3=ch;function Pl(n,e,t,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!t3())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=t,t=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=t,t=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(t=e,e=r=void 0):s===2&&!e.getContext&&(r=t,t=e,e=void 0),new Promise(function(c,l){try{const h=Bc.create(t,r);c(n(h,e,r))}catch(h){l(h)}})}try{const c=Bc.create(t,r);o(null,n(c,e,r))}catch(c){o(c)}}Go.create=Bc.create;Go.toCanvas=Pl.bind(null,lh.render);Go.toDataURL=Pl.bind(null,lh.renderToDataURL);Go.toString=Pl.bind(null,function(n,e,t){return n3.render(n,t)});const r3=.1,zu=2.5,un=7;function cc(n,e,t){return n===e?!1:(n-e<0?e-n:n-e)<=t+r3}function i3(n,e){const t=Array.prototype.slice.call(Go.create(n,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(t.length);return t.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const o3={generate(n,e,t){const r="#141414",o="transparent",s=[],a=i3(n,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x,y:v})=>{const $=(a.length-un)*c*x,S=(a.length-un)*c*v,I=.45;for(let _=0;_<l.length;_+=1){const A=c*(un-_*2);s.push(W`
            <rect
              fill=${_===2?r:o}
              width=${_===0?A-5:A}
              rx= ${_===0?(A-5)*I:A*I}
              ry= ${_===0?(A-5)*I:A*I}
              stroke=${r}
              stroke-width=${_===0?5:0}
              height=${_===0?A-5:A}
              x= ${_===0?S+c*_+5/2:S+c*_}
              y= ${_===0?$+c*_+5/2:$+c*_}
            />
          `)}});const h=Math.floor((t+25)/c),p=a.length/2-h/2,f=a.length/2+h/2-1,m=[];a.forEach((x,v)=>{x.forEach(($,S)=>{if(a[v][S]&&!(v<un&&S<un||v>a.length-(un+1)&&S<un||v<un&&S>a.length-(un+1))&&!(v>p&&v<f&&S>p&&S<f)){const I=v*c+c/2,_=S*c+c/2;m.push([I,_])}})});const y={};return m.forEach(([x,v])=>{var $;y[x]?($=y[x])==null||$.push(v):y[x]=[v]}),Object.entries(y).map(([x,v])=>{const $=v.filter(S=>v.every(I=>!cc(S,I,c)));return[Number(x),$]}).forEach(([x,v])=>{v.forEach($=>{s.push(W`<circle cx=${x} cy=${$} fill=${r} r=${c/zu} />`)})}),Object.entries(y).filter(([x,v])=>v.length>1).map(([x,v])=>{const $=v.filter(S=>v.some(I=>cc(S,I,c)));return[Number(x),$]}).map(([x,v])=>{v.sort((S,I)=>S<I?-1:1);const $=[];for(const S of v){const I=$.find(_=>_.some(A=>cc(S,A,c)));I?I.push(S):$.push([S])}return[x,$.map(S=>[S[0],S[S.length-1]])]}).forEach(([x,v])=>{v.forEach(([$,S])=>{s.push(W`
              <line
                x1=${x}
                x2=${x}
                y1=${$}
                y2=${S}
                stroke=${r}
                stroke-width=${c/(zu/2)}
                stroke-linecap="round"
              />
            `)})}),s}},s3=j`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ii=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let fn=class extends M{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,b`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return W`
      <svg height=${e} width=${e}>
        ${o3.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?b`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:b`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};fn.styles=[ie,s3];Ii([C()],fn.prototype,"uri",void 0);Ii([C({type:Number})],fn.prototype,"size",void 0);Ii([C()],fn.prototype,"theme",void 0);Ii([C()],fn.prototype,"imageSrc",void 0);Ii([C()],fn.prototype,"alt",void 0);fn=Ii([k("wui-qr-code")],fn);const a3=j`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var c3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ks=class extends M{constructor(){super(...arguments),this.inputComponentRef=ga()}render(){return b`
      <wui-input-text
        ${ma(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ks.styles=[ie,a3];ks=c3([k("wui-search-bar")],ks);const l3=j`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Ko=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Wn=class extends M{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return b`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Wn.styles=[ie,l3];Ko([C()],Wn.prototype,"backgroundColor",void 0);Ko([C()],Wn.prototype,"iconColor",void 0);Ko([C()],Wn.prototype,"icon",void 0);Ko([C()],Wn.prototype,"message",void 0);Wn=Ko([k("wui-snackbar")],Wn);const u3=j`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Jn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ut=class extends M{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{const r=t===this.activeTab;return b`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],o=this.buttons[e],i=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&c&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,o.animate([{width:`${a.width+c.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Ut.styles=[ie,Oe,u3];Jn([C({type:Array})],Ut.prototype,"tabs",void 0);Jn([C()],Ut.prototype,"onTabChange",void 0);Jn([C({type:Array})],Ut.prototype,"buttons",void 0);Jn([C({type:Boolean})],Ut.prototype,"disabled",void 0);Jn([V()],Ut.prototype,"activeTab",void 0);Jn([V()],Ut.prototype,"localTabWidth",void 0);Jn([V()],Ut.prototype,"isDense",void 0);Ut=Jn([k("wui-tabs")],Ut);const d3=j`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var kl=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let bi=class extends M{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return b`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};bi.styles=[ie,Oe,d3];kl([C()],bi.prototype,"placement",void 0);kl([C()],bi.prototype,"message",void 0);bi=kl([k("wui-tooltip")],bi);const h3=j`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ea=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Er=class extends M{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,b`${this.templateVisual()}`}templateVisual(){return this.imageSrc?b`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:b`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Er.styles=[ie,h3];Ea([C()],Er.prototype,"imageSrc",void 0);Ea([C()],Er.prototype,"alt",void 0);Ea([C({type:Boolean})],Er.prototype,"borderRadiusFull",void 0);Er=Ea([k("wui-visual-thumbnail")],Er);const f3=j`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var $a=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let $r=class extends M{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return b`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};$r.styles=[ie,Oe,f3];$a([C()],$r.prototype,"label",void 0);$a([C()],$r.prototype,"description",void 0);$a([C()],$r.prototype,"icon",void 0);$r=$a([k("wui-notice-card")],$r);const p3=j`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Nl=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const lc=100;let vi=class extends M{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e==null?void 0:e.scrollHeight;r&&r>lc&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return b`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${lc}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${lc}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?b` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};vi.styles=[ie,Oe,p3];Nl([C()],vi.prototype,"textTitle",void 0);Nl([C()],vi.prototype,"overflowedContent",void 0);vi=Nl([k("wui-list-accordion")],vi);const g3=j`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Sa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Sr=class extends M{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return b`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?b`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?b` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:b`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Sr.styles=[ie,Oe,g3];Sa([C()],Sr.prototype,"imageSrc",void 0);Sa([C()],Sr.prototype,"textTitle",void 0);Sa([C()],Sr.prototype,"textValue",void 0);Sr=Sa([k("wui-list-content")],Sr);const m3=j`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Ri=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pn=class extends M{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return b`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          @click=${this.onExplorer.bind(this)}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?b`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:b`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}onExplorer(){this.addressExplorerUrl&&window.open(this.addressExplorerUrl,"_blank","noreferrer noopener")}};pn.styles=[ie,Oe,m3];Ri([C()],pn.prototype,"amount",void 0);Ri([C()],pn.prototype,"networkCurreny",void 0);Ri([C()],pn.prototype,"networkImageUrl",void 0);Ri([C()],pn.prototype,"receiverAddress",void 0);Ri([C()],pn.prototype,"addressExplorerUrl",void 0);pn=Ri([k("wui-list-wallet-transaction")],pn);const w3=j`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Aa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ar=class extends M{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1}render(){return b`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?b`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:b`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Ar.styles=[ie,Oe,w3];Aa([C()],Ar.prototype,"imageSrc",void 0);Aa([C()],Ar.prototype,"name",void 0);Aa([C({type:Boolean})],Ar.prototype,"disabled",void 0);Ar=Aa([k("wui-list-network")],Ar);const b3=j`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Et=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let nt=class extends M{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$e.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$e.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$e.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$e.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$e.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$e.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$e.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$e.getSpacingStyles(this.margin,3)};
    `,b`<slot></slot>`}};nt.styles=[ie,b3];Et([C()],nt.prototype,"gridTemplateRows",void 0);Et([C()],nt.prototype,"gridTemplateColumns",void 0);Et([C()],nt.prototype,"justifyItems",void 0);Et([C()],nt.prototype,"alignItems",void 0);Et([C()],nt.prototype,"justifyContent",void 0);Et([C()],nt.prototype,"alignContent",void 0);Et([C()],nt.prototype,"columnGap",void 0);Et([C()],nt.prototype,"rowGap",void 0);Et([C()],nt.prototype,"gap",void 0);Et([C()],nt.prototype,"padding",void 0);Et([C()],nt.prototype,"margin",void 0);nt=Et([k("wui-grid")],nt);const v3=j`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var uh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let So=class extends M{constructor(){super(...arguments),this.text=""}render(){return b`${this.template()}`}template(){return this.text?b`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};So.styles=[ie,v3];uh([C()],So.prototype,"text",void 0);So=uh([k("wui-separator")],So);var dh={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(rl,function(){var t=1e3,r=6e4,o=36e5,i="millisecond",s="second",a="minute",c="hour",l="day",h="week",p="month",f="quarter",m="year",y="date",x="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(X){var B=["th","st","nd","rd"],N=X%100;return"["+X+(B[(N-20)%10]||B[N]||B[0])+"]"}},I=function(X,B,N){var J=String(X);return!J||J.length>=B?X:""+Array(B+1-J.length).join(N)+X},_={s:I,z:function(X){var B=-X.utcOffset(),N=Math.abs(B),J=Math.floor(N/60),z=N%60;return(B<=0?"+":"-")+I(J,2,"0")+":"+I(z,2,"0")},m:function X(B,N){if(B.date()<N.date())return-X(N,B);var J=12*(N.year()-B.year())+(N.month()-B.month()),z=B.clone().add(J,p),ce=N-z<0,oe=B.clone().add(J+(ce?-1:1),p);return+(-(J+(N-z)/(ce?z-oe:oe-z))||0)},a:function(X){return X<0?Math.ceil(X)||0:Math.floor(X)},p:function(X){return{M:p,y:m,w:h,d:l,D:y,h:c,m:a,s,ms:i,Q:f}[X]||String(X||"").toLowerCase().replace(/s$/,"")},u:function(X){return X===void 0}},A="en",O={};O[A]=S;var F="$isDayjsObject",Q=function(X){return X instanceof ae||!(!X||!X[F])},Y=function X(B,N,J){var z;if(!B)return A;if(typeof B=="string"){var ce=B.toLowerCase();O[ce]&&(z=ce),N&&(O[ce]=N,z=ce);var oe=B.split("-");if(!z&&oe.length>1)return X(oe[0])}else{var se=B.name;O[se]=B,z=se}return!J&&z&&(A=z),z||!J&&A},D=function(X,B){if(Q(X))return X.clone();var N=typeof B=="object"?B:{};return N.date=X,N.args=arguments,new ae(N)},U=_;U.l=Y,U.i=Q,U.w=function(X,B){return D(X,{locale:B.$L,utc:B.$u,x:B.$x,$offset:B.$offset})};var ae=function(){function X(N){this.$L=Y(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[F]=!0}var B=X.prototype;return B.parse=function(N){this.$d=function(J){var z=J.date,ce=J.utc;if(z===null)return new Date(NaN);if(U.u(z))return new Date;if(z instanceof Date)return new Date(z);if(typeof z=="string"&&!/Z$/i.test(z)){var oe=z.match(v);if(oe){var se=oe[2]-1||0,pe=(oe[7]||"0").substring(0,3);return ce?new Date(Date.UTC(oe[1],se,oe[3]||1,oe[4]||0,oe[5]||0,oe[6]||0,pe)):new Date(oe[1],se,oe[3]||1,oe[4]||0,oe[5]||0,oe[6]||0,pe)}}return new Date(z)}(N),this.init()},B.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},B.$utils=function(){return U},B.isValid=function(){return this.$d.toString()!==x},B.isSame=function(N,J){var z=D(N);return this.startOf(J)<=z&&z<=this.endOf(J)},B.isAfter=function(N,J){return D(N)<this.startOf(J)},B.isBefore=function(N,J){return this.endOf(J)<D(N)},B.$g=function(N,J,z){return U.u(N)?this[J]:this.set(z,N)},B.unix=function(){return Math.floor(this.valueOf()/1e3)},B.valueOf=function(){return this.$d.getTime()},B.startOf=function(N,J){var z=this,ce=!!U.u(J)||J,oe=U.p(N),se=function(St,qe){var Ht=U.w(z.$u?Date.UTC(z.$y,qe,St):new Date(z.$y,qe,St),z);return ce?Ht:Ht.endOf(l)},pe=function(St,qe){return U.w(z.toDate()[St].apply(z.toDate("s"),(ce?[0,0,0,0]:[23,59,59,999]).slice(qe)),z)},Ue=this.$W,He=this.$M,Je=this.$D,an="set"+(this.$u?"UTC":"");switch(oe){case m:return ce?se(1,0):se(31,11);case p:return ce?se(1,He):se(0,He+1);case h:var Ft=this.$locale().weekStart||0,vt=(Ue<Ft?Ue+7:Ue)-Ft;return se(ce?Je-vt:Je+(6-vt),He);case l:case y:return pe(an+"Hours",0);case c:return pe(an+"Minutes",1);case a:return pe(an+"Seconds",2);case s:return pe(an+"Milliseconds",3);default:return this.clone()}},B.endOf=function(N){return this.startOf(N,!1)},B.$set=function(N,J){var z,ce=U.p(N),oe="set"+(this.$u?"UTC":""),se=(z={},z[l]=oe+"Date",z[y]=oe+"Date",z[p]=oe+"Month",z[m]=oe+"FullYear",z[c]=oe+"Hours",z[a]=oe+"Minutes",z[s]=oe+"Seconds",z[i]=oe+"Milliseconds",z)[ce],pe=ce===l?this.$D+(J-this.$W):J;if(ce===p||ce===m){var Ue=this.clone().set(y,1);Ue.$d[se](pe),Ue.init(),this.$d=Ue.set(y,Math.min(this.$D,Ue.daysInMonth())).$d}else se&&this.$d[se](pe);return this.init(),this},B.set=function(N,J){return this.clone().$set(N,J)},B.get=function(N){return this[U.p(N)]()},B.add=function(N,J){var z,ce=this;N=Number(N);var oe=U.p(J),se=function(He){var Je=D(ce);return U.w(Je.date(Je.date()+Math.round(He*N)),ce)};if(oe===p)return this.set(p,this.$M+N);if(oe===m)return this.set(m,this.$y+N);if(oe===l)return se(1);if(oe===h)return se(7);var pe=(z={},z[a]=r,z[c]=o,z[s]=t,z)[oe]||1,Ue=this.$d.getTime()+N*pe;return U.w(Ue,this)},B.subtract=function(N,J){return this.add(-1*N,J)},B.format=function(N){var J=this,z=this.$locale();if(!this.isValid())return z.invalidDate||x;var ce=N||"YYYY-MM-DDTHH:mm:ssZ",oe=U.z(this),se=this.$H,pe=this.$m,Ue=this.$M,He=z.weekdays,Je=z.months,an=z.meridiem,Ft=function(qe,Ht,xn,At){return qe&&(qe[Ht]||qe(J,ce))||xn[Ht].slice(0,At)},vt=function(qe){return U.s(se%12||12,qe,"0")},St=an||function(qe,Ht,xn){var At=qe<12?"AM":"PM";return xn?At.toLowerCase():At};return ce.replace($,function(qe,Ht){return Ht||function(xn){switch(xn){case"YY":return String(J.$y).slice(-2);case"YYYY":return U.s(J.$y,4,"0");case"M":return Ue+1;case"MM":return U.s(Ue+1,2,"0");case"MMM":return Ft(z.monthsShort,Ue,Je,3);case"MMMM":return Ft(Je,Ue);case"D":return J.$D;case"DD":return U.s(J.$D,2,"0");case"d":return String(J.$W);case"dd":return Ft(z.weekdaysMin,J.$W,He,2);case"ddd":return Ft(z.weekdaysShort,J.$W,He,3);case"dddd":return He[J.$W];case"H":return String(se);case"HH":return U.s(se,2,"0");case"h":return vt(1);case"hh":return vt(2);case"a":return St(se,pe,!0);case"A":return St(se,pe,!1);case"m":return String(pe);case"mm":return U.s(pe,2,"0");case"s":return String(J.$s);case"ss":return U.s(J.$s,2,"0");case"SSS":return U.s(J.$ms,3,"0");case"Z":return oe}return null}(qe)||oe.replace(":","")})},B.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},B.diff=function(N,J,z){var ce,oe=this,se=U.p(J),pe=D(N),Ue=(pe.utcOffset()-this.utcOffset())*r,He=this-pe,Je=function(){return U.m(oe,pe)};switch(se){case m:ce=Je()/12;break;case p:ce=Je();break;case f:ce=Je()/3;break;case h:ce=(He-Ue)/6048e5;break;case l:ce=(He-Ue)/864e5;break;case c:ce=He/o;break;case a:ce=He/r;break;case s:ce=He/t;break;default:ce=He}return z?ce:U.a(ce)},B.daysInMonth=function(){return this.endOf(p).$D},B.$locale=function(){return O[this.$L]},B.locale=function(N,J){if(!N)return this.$L;var z=this.clone(),ce=Y(N,J,!0);return ce&&(z.$L=ce),z},B.clone=function(){return U.w(this.$d,this)},B.toDate=function(){return new Date(this.valueOf())},B.toJSON=function(){return this.isValid()?this.toISOString():null},B.toISOString=function(){return this.$d.toISOString()},B.toString=function(){return this.$d.toUTCString()},X}(),ye=ae.prototype;return D.prototype=ye,[["$ms",i],["$s",s],["$m",a],["$H",c],["$W",l],["$M",p],["$y",m],["$D",y]].forEach(function(X){ye[X[1]]=function(B){return this.$g(B,X[0],X[1])}}),D.extend=function(X,B){return X.$i||(X(B,ae,D),X.$i=!0),D},D.locale=Y,D.isDayjs=Q,D.unix=function(X){return D(1e3*X)},D.en=O[A],D.Ls=O,D.p={},D})})(dh);var y3=dh.exports;const Kr=ra(y3);var hh={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(rl,function(){return function(t,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(hh);var x3=hh.exports;const C3=ra(x3);var fh={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(rl,function(){return function(t,r,o){t=t||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,h,p,f){return i.fromToBase(l,h,p,f)}o.en.relativeTime=s,i.fromToBase=function(l,h,p,f,m){for(var y,x,v,$=p.$locale().relativeTime||s,S=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],I=S.length,_=0;_<I;_+=1){var A=S[_];A.d&&(y=f?o(l).diff(p,A.d,!0):p.diff(l,A.d,!0));var O=(t.rounding||Math.round)(Math.abs(y));if(v=y>0,O<=A.r||!A.r){O<=1&&_>0&&(A=S[_-1]);var F=$[A.l];m&&(O=m(""+O)),x=typeof F=="string"?F.replace("%d",O):F(O,h,A.l,v);break}}if(h)return x;var Q=v?$.future:$.past;return typeof Q=="function"?Q(x):Q.replace("%s",x)},i.to=function(l,h){return a(l,h,this,!0)},i.from=function(l,h){return a(l,h,this)};var c=function(l){return l.$u?o.utc():o()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(fh);var _3=fh.exports;const E3=ra(_3);Kr.extend(E3);Kr.extend(C3);Kr.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const ph={getYear(n=new Date().toISOString()){return Kr(n).year()},getRelativeDateFromNow(n){return Kr(n).fromNow(!0)},formatDate(n,e="DD MMM"){return Kr(n).format(e)}},$3=3,S3=["receive","deposit","borrow","claim"],A3=["withdraw","repay","burn"],ar={getMonthName(n){const e=new Date;return e.setMonth(n),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(n,e){const t=ph.getYear(),r=this.getMonthName(e);return n===t?r:`${r} ${n}`},getTransactionImages(n){const[e,t]=n,r=!!e&&(n==null?void 0:n.every(s=>!!s.nft_info)),o=(n==null?void 0:n.length)>1;return(n==null?void 0:n.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?n.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(n){return{type:ar.getTransactionTransferTokenType(n),url:ar.getTransactionImageURL(n)}},getTransactionImageURL(n){var o,i,s,a,c;let e=null;const t=!!(n!=null&&n.nft_info),r=!!(n!=null&&n.fungible_info);return n&&t?e=(s=(i=(o=n==null?void 0:n.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:n&&r&&(e=(c=(a=n==null?void 0:n.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),e},getTransactionTransferTokenType(n){return n!=null&&n.fungible_info?"FUNGIBLE":n!=null&&n.nft_info?"NFT":null},getTransactionDescriptions(n){var p,f,m;const e=(p=n.metadata)==null?void 0:p.operationType,t=n.transfers,r=((f=n.transfers)==null?void 0:f.length)>0,o=((m=n.transfers)==null?void 0:m.length)>1,i=r&&(t==null?void 0:t.every(y=>!!y.fungible_info)),[s,a]=t;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&i?(c=$e.getTruncateString({string:n.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=$e.getTruncateString({string:n.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[n.metadata.status];if(o)return t.map(y=>this.getTransferDescription(y));let h="";return S3.includes(e)?h="+":A3.includes(e)&&(h="-"),c=h.concat(c),[c]},getTransferDescription(n){var t;let e="";return n&&(n!=null&&n.nft_info?e=((t=n==null?void 0:n.nft_info)==null?void 0:t.name)||"-":n!=null&&n.fungible_info&&(e=this.getFungibleTransferDescription(n)||"-")),e},getFungibleTransferDescription(n){var r;return n?[this.getQuantityFixedValue(n==null?void 0:n.quantity.numeric),(r=n==null?void 0:n.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(n){return n?parseFloat(n).toFixed($3):null}},I3=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:ar,UiHelperUtil:$e,get WuiAccountButton(){return pt},get WuiAllWalletsImage(){return yo},get WuiAvatar(){return vr},get WuiButton(){return Nt},get WuiCard(){return As},get WuiCardSelect(){return Jt},get WuiCardSelectLoader(){return xo},get WuiChip(){return Qt},get WuiConnectButton(){return ui},get WuiCtaButton(){return yr},get WuiEmailInput(){return xr},get WuiFlex(){return Ye},get WuiGrid(){return nt},get WuiIcon(){return mr},get WuiIconBox(){return Ct},get WuiIconLink(){return Bn},get WuiImage(){return ci},get WuiInputElement(){return Co},get WuiInputNumeric(){return di},get WuiInputText(){return Mt},get WuiLink(){return hi},get WuiListAccordion(){return vi},get WuiListContent(){return Sr},get WuiListItem(){return gt},get WuiListNetwork(){return Ar},get WuiListWallet(){return lt},get WuiListWalletTransaction(){return pn},get WuiLoadingHexagon(){return Is},get WuiLoadingSpinner(){return li},get WuiLoadingThumbnail(){return bo},get WuiLogo(){return Eo},get WuiLogoSelect(){return fi},get WuiNetworkButton(){return Cr},get WuiNetworkImage(){return jn},get WuiNoticeCard(){return $r},get WuiOtp(){return _r},get WuiQrCode(){return fn},get WuiSearchBar(){return ks},get WuiSeparator(){return So},get WuiShimmer(){return wr},get WuiSnackbar(){return Wn},get WuiTabs(){return Ut},get WuiTag(){return _o},get WuiText(){return br},get WuiTooltip(){return bi},get WuiTransactionListItem(){return Lt},get WuiTransactionListItemLoader(){return Ts},get WuiTransactionVisual(){return Xt},get WuiVisual(){return vo},get WuiVisualThumbnail(){return Er},get WuiWalletImage(){return Kt},customElement:k,initializeTheming:N0,setColorTheme:yl,setThemeVariables:M0},Symbol.toStringTag,{value:"Module"}));var $t=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let mt=class extends M{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=xe.state.address,this.balanceVal=xe.state.balance,this.balanceSymbol=xe.state.balanceSymbol,this.profileName=xe.state.profileName,this.profileImage=xe.state.profileImage,this.network=_e.state.caipNetwork,this.isUnsupportedChain=_e.state.isUnsupportedChain,this.unsubscribe.push(xe.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),_e.subscribeKey("caipNetwork",e=>this.network=e),_e.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Ne.getNetworkImage(this.network),t=this.balance==="show";return b`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${de(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${de(e)}
        avatarSrc=${de(this.profileImage)}
        balance=${t?ee.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ee.open({view:"UnsupportedChain"}):Ee.open()}};$t([C({type:Boolean})],mt.prototype,"disabled",void 0);$t([C()],mt.prototype,"balance",void 0);$t([C()],mt.prototype,"charsStart",void 0);$t([C()],mt.prototype,"charsEnd",void 0);$t([V()],mt.prototype,"address",void 0);$t([V()],mt.prototype,"balanceVal",void 0);$t([V()],mt.prototype,"balanceSymbol",void 0);$t([V()],mt.prototype,"profileName",void 0);$t([V()],mt.prototype,"profileImage",void 0);$t([V()],mt.prototype,"network",void 0);$t([V()],mt.prototype,"isUnsupportedChain",void 0);mt=$t([k("w3m-account-button")],mt);const R3=j`
  :host {
    display: block;
    width: max-content;
  }
`;var yn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Dt=class extends M{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=xe.state.isConnected,this.unsubscribe.push(xe.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?b`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${de(this.balance)}
            .charsStart=${de(this.charsStart)}
            .charsEnd=${de(this.charsEnd)}
          >
          </w3m-account-button>
        `:b`
          <w3m-connect-button
            size=${de(this.size)}
            label=${de(this.label)}
            loadingLabel=${de(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Dt.styles=R3;yn([C({type:Boolean})],Dt.prototype,"disabled",void 0);yn([C()],Dt.prototype,"balance",void 0);yn([C()],Dt.prototype,"size",void 0);yn([C()],Dt.prototype,"label",void 0);yn([C()],Dt.prototype,"loadingLabel",void 0);yn([C()],Dt.prototype,"charsStart",void 0);yn([C()],Dt.prototype,"charsEnd",void 0);yn([V()],Dt.prototype,"isAccount",void 0);Dt=yn([k("w3m-button")],Dt);var Ti=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ir=class extends M{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ee.state.open,this.loading=Ee.state.loading,this.unsubscribe.push(Ee.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return b`
      <wui-connect-button
        size=${de(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ee.close():this.loading||Ee.open()}};Ti([C()],Ir.prototype,"size",void 0);Ti([C()],Ir.prototype,"label",void 0);Ti([C()],Ir.prototype,"loadingLabel",void 0);Ti([V()],Ir.prototype,"open",void 0);Ti([V()],Ir.prototype,"loading",void 0);Ir=Ti([k("w3m-connect-button")],Ir);const T3=j`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ia=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Fu="scroll-lock";let Rr=class extends M{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ee.state.open,this.caipAddress=xe.state.caipAddress,this.isSiweEnabled=De.state.isSiweEnabled,this.initializeTheming(),me.prefetch(),this.unsubscribe.push(Ee.subscribeKey("open",e=>e?this.onOpen():this.onClose()),De.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),xe.subscribe(e=>this.onNewAccountState(e))),ne.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?b`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&De.state.status!=="success"&&await be.disconnect(),Ee.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=at.state,r=$e.getColorTheme(t);N0(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Fe.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Fu,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Fu}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await De.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{const o=await De.getSession();o&&!t?await De.signOut():t&&!o&&this.onSiweNavigation()}catch{t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?H.push("ConnectingSiwe"):Ee.open({view:"ConnectingSiwe"})}};Rr.styles=T3;Ia([V()],Rr.prototype,"open",void 0);Ia([V()],Rr.prototype,"caipAddress",void 0);Ia([V()],Rr.prototype,"isSiweEnabled",void 0);Rr=Ia([k("w3m-modal")],Rr);const O3=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Rr}},Symbol.toStringTag,{value:"Module"})),P3=j`
  :host {
    display: block;
    width: max-content;
  }
`;var Oi=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let zn=class extends M{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=_e.state.caipNetwork,this.connected=xe.state.isConnected,this.loading=Ee.state.loading,this.isUnsupportedChain=_e.state.isUnsupportedChain,this.unsubscribe.push(_e.subscribeKey("caipNetwork",e=>this.network=e),xe.subscribeKey("isConnected",e=>this.connected=e),Ee.subscribeKey("loading",e=>this.loading=e),_e.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return b`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${de(Ne.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(ne.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ee.open({view:"Networks"}))}};zn.styles=P3;Oi([C({type:Boolean})],zn.prototype,"disabled",void 0);Oi([V()],zn.prototype,"network",void 0);Oi([V()],zn.prototype,"connected",void 0);Oi([V()],zn.prototype,"loading",void 0);Oi([V()],zn.prototype,"isUnsupportedChain",void 0);zn=Oi([k("w3m-network-button")],zn);const k3=j`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var gh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ns=class extends M{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=H.state.view,this.unsubscribe.push(H.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return b`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return b`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return b`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return b`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return b`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return b`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return b`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return b`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return b`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return b`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return b`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return b`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return b`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return b`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return b`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return b`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return b`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return b`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return b`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return b`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return b`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return b`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;default:return b`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:t}=H.state;let r=-10,o=10;t.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Ns.styles=k3;gh([V()],Ns.prototype,"view",void 0);Ns=gh([k("w3m-router")],Ns);const N3=j`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var Qn=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let en=class extends M{constructor(){super(),this.usubscribe=[],this.address=xe.state.address,this.profileImage=xe.state.profileImage,this.profileName=xe.state.profileName,this.balance=xe.state.balance,this.balanceSymbol=xe.state.balanceSymbol,this.network=_e.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(xe.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ee.close()}),_e.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ne.getNetworkImage(this.network);return b`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${de(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?$e.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):$e.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${ee.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${de(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=tt.getConnectedConnector(),t=Ie.getEmailConnector(),{origin:r}=location;return!t||e!=="EMAIL"||r.includes(Gt.SECURE_SITE)?null:b`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=tt.getConnectedConnector(),t=Ie.getEmailConnector();if(!t||e!=="EMAIL")return null;const r=t.provider.getEmail()??"";return b`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=xe.state;return e?b`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=_e.state,t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return t||!r}onCopyAddress(){try{this.address&&(ee.copyToClopboard(this.address),Fe.showSuccess("Address copied"))}catch{Fe.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(ne.sendEvent({type:"track",event:"CLICK_NETWORKS"}),H.push("Networks"))}onTransactions(){ne.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),H.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await be.disconnect(),ne.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ee.close()}catch{ne.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Fe.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=xe.state;e&&ee.openHref(e,"_blank")}onGoToUpgradeView(){ne.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),H.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){H.push("UpdateEmailWallet",{email:e})}};en.styles=N3;Qn([V()],en.prototype,"address",void 0);Qn([V()],en.prototype,"profileImage",void 0);Qn([V()],en.prototype,"profileName",void 0);Qn([V()],en.prototype,"balance",void 0);Qn([V()],en.prototype,"balanceSymbol",void 0);Qn([V()],en.prototype,"network",void 0);Qn([V()],en.prototype,"disconecting",void 0);en=Qn([k("w3m-account-view")],en);var mh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Wc=class extends M{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=ee.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return b`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?b`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:b`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return ee.isMobile()?b`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){H.push("ConnectingWalletConnect")}};mh([V()],Wc.prototype,"search",void 0);Wc=mh([k("w3m-all-wallets-view")],Wc);const M3=j`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var wh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ms=class extends M{constructor(){super(),this.unsubscribe=[],this.connectors=Ie.state.connectors,this.unsubscribe.push(Ie.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return b`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(ee.isMobile())return null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?b`
      <wui-list-wallet
        imageSrc=${de(Ne.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=ve.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>b`
        <wui-list-wallet
          imageSrc=${de(Ne.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:t}=me.state;return t.length?this.filterOutDuplicateWallets(t).map(o=>b`
        <wui-list-wallet
          imageSrc=${de(Ne.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return tt.getRecentWallets().map(t=>b`
        <wui-list-wallet
          imageSrc=${de(Ne.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:b`
        <wui-list-wallet
          imageSrc=${de(Ne.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!be.checkInstalled()?null:b`
        <wui-list-wallet
          imageSrc=${de(Ne.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=Ie.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(Gt.CONNECTOR_RDNS_MAP[t.id])?null:b`
        <wui-list-wallet
          imageSrc=${de(Ne.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(c=>c.type==="WALLET_CONNECT"),{allWallets:t}=ve.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!ee.isMobile())return null;const r=me.state.count,o=me.state.featured.length,i=r+o,s=i<10?i:Math.floor(i/10)*10,a=s<i?`${s}+`:`${s}`;return b`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(f=>f.type==="WALLET_CONNECT"))return null;const{recommended:t}=me.state,{customWallets:r,featuredWalletIds:o}=ve.state,{connectors:i}=Ie.state,s=tt.getRecentWallets(),c=i.filter(f=>f.type==="INJECTED").filter(f=>f.name!=="Browser Wallet");if(o||r||!t.length)return null;const l=c.length+s.length,h=Math.max(0,2-l);return this.filterOutDuplicateWallets(t).slice(0,h).map(f=>b`
        <wui-list-wallet
          imageSrc=${de(Ne.getWalletImage(f))}
          name=${(f==null?void 0:f.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?ee.isMobile()?H.push("AllWallets"):H.push("ConnectingWalletConnect"):H.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const r=tt.getRecentWallets().map(i=>i.id);return e.filter(i=>!r.includes(i.id))}onAllWallets(){ne.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),H.push("AllWallets")}onConnectWallet(e){H.push("ConnectingWalletConnect",{wallet:e})}};Ms.styles=M3;wh([V()],Ms.prototype,"connectors",void 0);Ms=wh([k("w3m-connect-view")],Ms);const L3=j`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var jr=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class dt extends M{constructor(){var e,t,r,o;super(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,this.connector=(t=H.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Ne.getWalletImage(this.wallet)??Ne.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=be.state.wcUri,this.error=be.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(be.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),be.subscribeKey("wcError",i=>this.error=i),be.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),b`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${de(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?b`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(be.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=at.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return b`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(ee.copyToClopboard(this.uri),Fe.showSuccess("Link copied"))}catch{Fe.showError("Failed to copy")}}}dt.styles=L3;jr([V()],dt.prototype,"uri",void 0);jr([V()],dt.prototype,"error",void 0);jr([V()],dt.prototype,"ready",void 0);jr([V()],dt.prototype,"showRetry",void 0);jr([V()],dt.prototype,"buffering",void 0);jr([C({type:Boolean})],dt.prototype,"isMobile",void 0);jr([C()],dt.prototype,"onRetry",void 0);var U3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const D3={INJECTED:"browser",ANNOUNCED:"browser"};let Hu=class extends dt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:D3[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&tt.setConnectedWalletImageUrl(this.connector.imageUrl),await be.connectExternal(this.connector),De.state.isSiweEnabled?H.push("ConnectingSiwe"):Ee.close(),ne.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){ne.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Hu=U3([k("w3m-connecting-external-view")],Hu);var bh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let zc=class extends M{constructor(){var e;super(...arguments),this.dappName=(e=ve.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return b`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,ne.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{De.setStatus("loading");const e=await De.signIn();return De.setStatus("success"),ne.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return Fe.showError("Signature declined"),De.setStatus("error"),ne.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=xe.state;e?(await be.disconnect(),Ee.close()):H.push("Connect"),ne.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};bh([V()],zc.prototype,"isSigning",void 0);zc=bh([k("w3m-connecting-siwe-view")],zc);var Ml=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ls=class extends M{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Gt.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),b`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):b`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=be.state;if(e||ee.isPairingExpired(t)){if(be.connectWalletConnect(),this.wallet){const r=Ne.getWalletImage(this.wallet);r&&tt.setConnectedWalletImageUrl(r)}else{const o=Ie.state.connectors.find(s=>s.type==="WALLET_CONNECT"),i=Ne.getConnectorImage(o);i&&tt.setConnectedWalletImageUrl(i)}await be.state.wcPromise,this.finalizeConnection(),De.state.isSiweEnabled?H.push("ConnectingSiwe"):Ee.close()}}catch(t){ne.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),be.setWcError(!0),ee.isAllowedRetry(this.lastRetry)&&(Fe.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=be.state;e&&tt.setWalletConnectDeepLink(e),t&&tt.setWeb3ModalRecent(t),ne.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:y})=>y).filter(Boolean),a=i?[i]:s??[],c=a.length,l=e,h=r,p=be.checkInstalled(a),f=c&&p,m=t&&!ee.isMobile();f&&this.platforms.push("browser"),l&&this.platforms.push(ee.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),m&&this.platforms.push("desktop"),!f&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return b`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return b`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return b`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return b`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return b`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return b`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?b`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ml([V()],Ls.prototype,"platform",void 0);Ml([V()],Ls.prototype,"platforms",void 0);Ls=Ml([k("w3m-connecting-wc-view")],Ls);var j3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Zu=class extends M{constructor(){var e;super(...arguments),this.wallet=(e=H.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return b`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?b`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?b`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?b`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?b`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&ee.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&ee.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&ee.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&ee.openHref(this.wallet.homepage,"_blank")}};Zu=j3([k("w3m-downloads-view")],Zu);var B3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const W3="https://walletconnect.com/explorer";let Vu=class extends M{render(){return b`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{ee.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=me.state,{customWallets:r}=ve.state;return[...t,...r??[],...e].slice(0,4).map(i=>b`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${de(Ne.getWalletImage(i))}
          @click=${()=>{ee.openHref(i.homepage??W3,"_blank")}}
        ></wui-list-wallet>
      `)}};Vu=B3([k("w3m-get-wallet-view")],Vu);const z3=j`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ll=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ao=class extends M{constructor(){var e;super(),this.network=(e=H.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return b`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${de(Ne.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:b`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await _e.switchActiveNetwork(this.network),De.state.isSiweEnabled||gl.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Ao.styles=z3;Ll([V()],Ao.prototype,"showRetry",void 0);Ll([V()],Ao.prototype,"error",void 0);Ao=Ll([k("w3m-network-switch-view")],Ao);const F3=j`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var vh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Us=class extends M{constructor(){super(),this.unsubscribe=[],this.caipNetwork=_e.state.caipNetwork,this.unsubscribe.push(_e.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return b`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){ne.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),H.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=_e.state,o=e,i=ee.sortRequestedNetworks(e,t);return i==null?void 0:i.map(s=>{var a;return b`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${de(Ne.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(o!=null&&o.includes(s.id))}
          data-testid=${`w3m-network-switch-${s.name??s.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=xe.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=_e.state,{data:s}=H.state;t&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await _e.switchActiveNetwork(e),gl.navigateAfterNetworkSwitch()):o&&H.push("SwitchNetwork",{...s,network:e}):t||(_e.setCaipNetwork(e),H.push("Connect"))}};Us.styles=F3;vh([V()],Us.prototype,"caipNetwork",void 0);Us=vh([k("w3m-networks-view")],Us);const H3=j`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Br=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const ls="last-transaction",Z3=7;let gn=class extends M{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=xe.state.address,this.transactions=Rt.state.transactions,this.transactionsByYear=Rt.state.transactionsByYear,this.loading=Rt.state.loading,this.empty=Rt.state.empty,this.next=Rt.state.next,this.unsubscribe.push(xe.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Rt.resetTransactions(),Rt.fetchTransactions(e.address))}),Rt.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&Rt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return b`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{const o=r===e.length-1,i=parseInt(t,10);return new Array(12).fill(null).map((a,c)=>c).reverse().map(a=>{var h;const c=ar.getTransactionGroupTitle(i,a),l=(h=this.transactionsByYear[i])==null?void 0:h[a];return l?b`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${c}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(l,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:i,isAllNFT:s,images:a,status:c,transfers:l,type:h}=this.getTransactionListItemProps(e),p=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!s?b`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${t&&this.next?ls:""}
          status=${c}
          type=${h}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?l.map((m,y)=>{const x=ar.getTransferDescription(m),v=t&&y===l.length-1;return b` <wui-transaction-list-item
          date=${r}
          direction=${m.direction}
          id=${v&&this.next?ls:""}
          status=${c}
          type=${h}
          .onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[y]]}
          .descriptions=${[x]}
        ></wui-transaction-list-item>`}):b`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${t&&this.next?ls:""}
        status=${c}
        type=${h}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,o)=>{const i=t&&o===e.length-1;return b`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return b`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(Z3).fill(b` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=ve.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(Rt.fetchTransactions(this.address),ne.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,r,o;(t=this.paginationObserver)==null||t.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ls}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var c,l,h,p,f;const t=ph.formatDate((c=e==null?void 0:e.metadata)==null?void 0:c.minedAt),r=ar.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,i=(l=e==null?void 0:e.transfers)==null?void 0:l[0],s=!!i&&((h=e==null?void 0:e.transfers)==null?void 0:h.every(m=>!!m.nft_info)),a=ar.getTransactionImages(o);return{date:t,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:s,images:a,status:(p=e.metadata)==null?void 0:p.status,transfers:o,type:(f=e.metadata)==null?void 0:f.operationType}}};gn.styles=H3;Br([V()],gn.prototype,"address",void 0);Br([V()],gn.prototype,"transactions",void 0);Br([V()],gn.prototype,"transactionsByYear",void 0);Br([V()],gn.prototype,"loading",void 0);Br([V()],gn.prototype,"empty",void 0);Br([V()],gn.prototype,"next",void 0);gn=Br([k("w3m-transactions-view")],gn);var V3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const q3=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let qu=class extends M{render(){return b`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${q3}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{ee.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qu=V3([k("w3m-what-is-a-network-view")],qu);var G3=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Y3=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Gu=class extends M{render(){return b`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Y3}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ne.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),H.push("GetWallet")}};Gu=G3([k("w3m-what-is-a-wallet-view")],Gu);const K3=j`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,K={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},yh={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"],GET_CHAIN_ID:"eth_chainId"};var Ce;(function(n){n.assertEqual=o=>o;function e(o){}n.assertIs=e;function t(o){throw new Error}n.assertNever=t,n.arrayToEnum=o=>{const i={};for(const s of o)i[s]=s;return i},n.getValidEnumValues=o=>{const i=n.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of i)s[a]=o[a];return n.objectValues(s)},n.objectValues=o=>n.objectKeys(o).map(function(i){return o[i]}),n.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},n.find=(o,i)=>{for(const s of o)if(i(s))return s},n.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Ce||(Ce={}));var Fc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Fc||(Fc={}));const q=Ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Rn=n=>{switch(typeof n){case"undefined":return q.undefined;case"string":return q.string;case"number":return isNaN(n)?q.nan:q.number;case"boolean":return q.boolean;case"function":return q.function;case"bigint":return q.bigint;case"symbol":return q.symbol;case"object":return Array.isArray(n)?q.array:n===null?q.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?q.promise:typeof Map<"u"&&n instanceof Map?q.map:typeof Set<"u"&&n instanceof Set?q.set:typeof Date<"u"&&n instanceof Date?q.date:q.object;default:return q.unknown}},L=Ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),J3=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class Pt extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(i){return i.message},r={_errors:[]},o=i=>{for(const s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(t(s));else{let a=r,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(t(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const o of this.issues)o.path.length>0?(t[o.path[0]]=t[o.path[0]]||[],t[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}Pt.create=n=>new Pt(n);const Io=(n,e)=>{let t;switch(n.code){case L.invalid_type:n.received===q.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case L.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,Ce.jsonStringifyReplacer)}`;break;case L.unrecognized_keys:t=`Unrecognized key(s) in object: ${Ce.joinValues(n.keys,", ")}`;break;case L.invalid_union:t="Invalid input";break;case L.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Ce.joinValues(n.options)}`;break;case L.invalid_enum_value:t=`Invalid enum value. Expected ${Ce.joinValues(n.options)}, received '${n.received}'`;break;case L.invalid_arguments:t="Invalid function arguments";break;case L.invalid_return_type:t="Invalid function return type";break;case L.invalid_date:t="Invalid date";break;case L.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:Ce.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case L.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case L.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case L.custom:t="Invalid input";break;case L.invalid_intersection_types:t="Intersection results could not be merged";break;case L.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case L.not_finite:t="Number must be finite";break;default:t=e.defaultError,Ce.assertNever(n)}return{message:t}};let xh=Io;function Q3(n){xh=n}function Ds(){return xh}const js=n=>{const{data:e,path:t,errorMaps:r,issueData:o}=n,i=[...t,...o.path||[]],s={...o,path:i};let a="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)a=l(s,{data:e,defaultError:a}).message;return{...o,path:i,message:o.message||a}},X3=[];function G(n,e){const t=js({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ds(),Io].filter(r=>!!r)});n.common.issues.push(t)}class Ke{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const o of t){if(o.status==="aborted")return le;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const o of t)r.push({key:await o.key,value:await o.value});return Ke.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const o of t){const{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return le;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}}const le=Object.freeze({status:"aborted"}),Ch=n=>({status:"dirty",value:n}),rt=n=>({status:"valid",value:n}),Hc=n=>n.status==="aborted",Zc=n=>n.status==="dirty",Ro=n=>n.status==="valid",Bs=n=>typeof Promise<"u"&&n instanceof Promise;var te;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(te||(te={}));class tn{constructor(e,t,r,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Yu=(n,e)=>{if(Ro(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Pt(n.common.issues);return this._error=t,this._error}}};function fe(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:o}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:t??a.defaultError},description:o}}class ge{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Rn(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ke,ctx:{common:e.parent.common,data:e.data,parsedType:Rn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Bs(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const o={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Rn(e)},i=this._parseSync({data:e,path:o.path,parent:o});return Yu(o,i)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Rn(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Bs(o)?o:Promise.resolve(o));return Yu(r,i)}refine(e,t){const r=o=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(o):t;return this._refinement((o,i)=>{const s=e(o),a=()=>i.addIssue({code:L.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,t){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof t=="function"?t(r,o):t),!1))}_refinement(e){return new jt({schema:this,typeName:re.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return hn.create(this,this._def)}nullable(){return Pr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kt.create(this,this._def)}promise(){return xi.create(this,this._def)}or(e){return ko.create([this,e],this._def)}and(e){return No.create(this,e,this._def)}transform(e){return new jt({...fe(this._def),schema:this,typeName:re.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new jo({...fe(this._def),innerType:this,defaultValue:t,typeName:re.ZodDefault})}brand(){return new Eh({typeName:re.ZodBranded,type:this,...fe(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Hs({...fe(this._def),innerType:this,catchValue:t,typeName:re.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Jo.create(this,e)}readonly(){return Vs.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ev=/^c[^\s-]{8,}$/i,tv=/^[a-z][a-z0-9]*$/,nv=/^[0-9A-HJKMNP-TV-Z]{26}$/,rv=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,iv=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ov="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let uc;const sv=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,av=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,cv=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):n.precision===0?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function lv(n,e){return!!((e==="v4"||!e)&&sv.test(n)||(e==="v6"||!e)&&av.test(n))}class Ot extends ge{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==q.string){const i=this._getOrReturnCtx(e);return G(i,{code:L.invalid_type,expected:q.string,received:i.parsedType}),le}const r=new Ke;let o;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),G(o,{code:L.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),G(o,{code:L.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?G(o,{code:L.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&G(o,{code:L.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")iv.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"email",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")uc||(uc=new RegExp(ov,"u")),uc.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"emoji",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")rv.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"uuid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")ev.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"cuid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")tv.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"cuid2",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")nv.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"ulid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),G(o,{validation:"url",code:L.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"regex",code:L.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),G(o,{code:L.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),G(o,{code:L.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),G(o,{code:L.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?cv(i).test(e.data)||(o=this._getOrReturnCtx(e,o),G(o,{code:L.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?lv(e.data,i.version)||(o=this._getOrReturnCtx(e,o),G(o,{validation:"ip",code:L.invalid_string,message:i.message}),r.dirty()):Ce.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(o=>e.test(o),{validation:t,code:L.invalid_string,...te.errToObj(r)})}_addCheck(e){return new Ot({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...te.errToObj(e)})}url(e){return this._addCheck({kind:"url",...te.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...te.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...te.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...te.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...te.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...te.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...te.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...te.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...te.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...te.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...te.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...te.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...te.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...te.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...te.errToObj(t)})}nonempty(e){return this.min(1,te.errToObj(e))}trim(){return new Ot({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ot({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ot({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Ot.create=n=>{var e;return new Ot({checks:[],typeName:re.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...fe(n)})};function uv(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=t>r?t:r,i=parseInt(n.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return i%s/Math.pow(10,o)}class Fn extends ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==q.number){const i=this._getOrReturnCtx(e);return G(i,{code:L.invalid_type,expected:q.number,received:i.parsedType}),le}let r;const o=new Ke;for(const i of this._def.checks)i.kind==="int"?Ce.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),G(r,{code:L.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?uv(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),G(r,{code:L.not_finite,message:i.message}),o.dirty()):Ce.assertNever(i);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,te.toString(t))}setLimit(e,t,r,o){return new Fn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:te.toString(o)}]})}_addCheck(e){return new Fn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:te.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:te.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:te.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:te.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:te.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ce.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Fn.create=n=>new Fn({checks:[],typeName:re.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...fe(n)});class Hn extends ge{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==q.bigint){const i=this._getOrReturnCtx(e);return G(i,{code:L.invalid_type,expected:q.bigint,received:i.parsedType}),le}let r;const o=new Ke;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),G(r,{code:L.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Ce.assertNever(i);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,te.toString(t))}setLimit(e,t,r,o){return new Hn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:te.toString(o)}]})}_addCheck(e){return new Hn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:te.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Hn.create=n=>{var e;return new Hn({checks:[],typeName:re.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...fe(n)})};class To extends ge{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==q.boolean){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.boolean,received:r.parsedType}),le}return rt(e.data)}}To.create=n=>new To({typeName:re.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...fe(n)});class Tr extends ge{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==q.date){const i=this._getOrReturnCtx(e);return G(i,{code:L.invalid_type,expected:q.date,received:i.parsedType}),le}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return G(i,{code:L.invalid_date}),le}const r=new Ke;let o;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),G(o,{code:L.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),G(o,{code:L.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Ce.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Tr({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:te.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:te.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Tr.create=n=>new Tr({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:re.ZodDate,...fe(n)});class Ws extends ge{_parse(e){if(this._getType(e)!==q.symbol){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.symbol,received:r.parsedType}),le}return rt(e.data)}}Ws.create=n=>new Ws({typeName:re.ZodSymbol,...fe(n)});class Oo extends ge{_parse(e){if(this._getType(e)!==q.undefined){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.undefined,received:r.parsedType}),le}return rt(e.data)}}Oo.create=n=>new Oo({typeName:re.ZodUndefined,...fe(n)});class Po extends ge{_parse(e){if(this._getType(e)!==q.null){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.null,received:r.parsedType}),le}return rt(e.data)}}Po.create=n=>new Po({typeName:re.ZodNull,...fe(n)});class yi extends ge{constructor(){super(...arguments),this._any=!0}_parse(e){return rt(e.data)}}yi.create=n=>new yi({typeName:re.ZodAny,...fe(n)});class ur extends ge{constructor(){super(...arguments),this._unknown=!0}_parse(e){return rt(e.data)}}ur.create=n=>new ur({typeName:re.ZodUnknown,...fe(n)});class mn extends ge{_parse(e){const t=this._getOrReturnCtx(e);return G(t,{code:L.invalid_type,expected:q.never,received:t.parsedType}),le}}mn.create=n=>new mn({typeName:re.ZodNever,...fe(n)});class zs extends ge{_parse(e){if(this._getType(e)!==q.undefined){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.void,received:r.parsedType}),le}return rt(e.data)}}zs.create=n=>new zs({typeName:re.ZodVoid,...fe(n)});class kt extends ge{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),o=this._def;if(t.parsedType!==q.array)return G(t,{code:L.invalid_type,expected:q.array,received:t.parsedType}),le;if(o.exactLength!==null){const s=t.data.length>o.exactLength.value,a=t.data.length<o.exactLength.value;(s||a)&&(G(t,{code:s?L.too_big:L.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&t.data.length<o.minLength.value&&(G(t,{code:L.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&t.data.length>o.maxLength.value&&(G(t,{code:L.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((s,a)=>o.type._parseAsync(new tn(t,s,t.path,a)))).then(s=>Ke.mergeArray(r,s));const i=[...t.data].map((s,a)=>o.type._parseSync(new tn(t,s,t.path,a)));return Ke.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new kt({...this._def,minLength:{value:e,message:te.toString(t)}})}max(e,t){return new kt({...this._def,maxLength:{value:e,message:te.toString(t)}})}length(e,t){return new kt({...this._def,exactLength:{value:e,message:te.toString(t)}})}nonempty(e){return this.min(1,e)}}kt.create=(n,e)=>new kt({type:n,minLength:null,maxLength:null,exactLength:null,typeName:re.ZodArray,...fe(e)});function Zr(n){if(n instanceof ke){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=hn.create(Zr(r))}return new ke({...n._def,shape:()=>e})}else return n instanceof kt?new kt({...n._def,type:Zr(n.element)}):n instanceof hn?hn.create(Zr(n.unwrap())):n instanceof Pr?Pr.create(Zr(n.unwrap())):n instanceof nn?nn.create(n.items.map(e=>Zr(e))):n}class ke extends ge{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Ce.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==q.object){const l=this._getOrReturnCtx(e);return G(l,{code:L.invalid_type,expected:q.object,received:l.parsedType}),le}const{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof mn&&this._def.unknownKeys==="strip"))for(const l in o.data)s.includes(l)||a.push(l);const c=[];for(const l of s){const h=i[l],p=o.data[l];c.push({key:{status:"valid",value:l},value:h._parse(new tn(o,p,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof mn){const l=this._def.unknownKeys;if(l==="passthrough")for(const h of a)c.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(l==="strict")a.length>0&&(G(o,{code:L.unrecognized_keys,keys:a}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const h of a){const p=o.data[h];c.push({key:{status:"valid",value:h},value:l._parse(new tn(o,p,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const h of c){const p=await h.key;l.push({key:p,value:await h.value,alwaysSet:h.alwaysSet})}return l}).then(l=>Ke.mergeObjectSync(r,l)):Ke.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return te.errToObj,new ke({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var o,i,s,a;const c=(s=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,t,r).message)!==null&&s!==void 0?s:r.defaultError;return t.code==="unrecognized_keys"?{message:(a=te.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new ke({...this._def,unknownKeys:"strip"})}passthrough(){return new ke({...this._def,unknownKeys:"passthrough"})}extend(e){return new ke({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ke({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:re.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ke({...this._def,catchall:e})}pick(e){const t={};return Ce.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new ke({...this._def,shape:()=>t})}omit(e){const t={};return Ce.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new ke({...this._def,shape:()=>t})}deepPartial(){return Zr(this)}partial(e){const t={};return Ce.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?t[r]=o:t[r]=o.optional()}),new ke({...this._def,shape:()=>t})}required(e){const t={};return Ce.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof hn;)i=i._def.innerType;t[r]=i}}),new ke({...this._def,shape:()=>t})}keyof(){return _h(Ce.objectKeys(this.shape))}}ke.create=(n,e)=>new ke({shape:()=>n,unknownKeys:"strip",catchall:mn.create(),typeName:re.ZodObject,...fe(e)});ke.strictCreate=(n,e)=>new ke({shape:()=>n,unknownKeys:"strict",catchall:mn.create(),typeName:re.ZodObject,...fe(e)});ke.lazycreate=(n,e)=>new ke({shape:n,unknownKeys:"strip",catchall:mn.create(),typeName:re.ZodObject,...fe(e)});class ko extends ge{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function o(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;const s=i.map(a=>new Pt(a.ctx.common.issues));return G(t,{code:L.invalid_union,unionErrors:s}),le}if(t.common.async)return Promise.all(r.map(async i=>{const s={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:s}),ctx:s}})).then(o);{let i;const s=[];for(const c of r){const l={...t,common:{...t.common,issues:[]},parent:null},h=c._parseSync({data:t.data,path:t.path,parent:l});if(h.status==="valid")return h;h.status==="dirty"&&!i&&(i={result:h,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const a=s.map(c=>new Pt(c));return G(t,{code:L.invalid_union,unionErrors:a}),le}}get options(){return this._def.options}}ko.create=(n,e)=>new ko({options:n,typeName:re.ZodUnion,...fe(e)});const ms=n=>n instanceof Lo?ms(n.schema):n instanceof jt?ms(n.innerType()):n instanceof Uo?[n.value]:n instanceof Zn?n.options:n instanceof Do?Object.keys(n.enum):n instanceof jo?ms(n._def.innerType):n instanceof Oo?[void 0]:n instanceof Po?[null]:null;class Ra extends ge{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==q.object)return G(t,{code:L.invalid_type,expected:q.object,received:t.parsedType}),le;const r=this.discriminator,o=t.data[r],i=this.optionsMap.get(o);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(G(t,{code:L.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),le)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const o=new Map;for(const i of t){const s=ms(i.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new Ra({typeName:re.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...fe(r)})}}function Vc(n,e){const t=Rn(n),r=Rn(e);if(n===e)return{valid:!0,data:n};if(t===q.object&&r===q.object){const o=Ce.objectKeys(e),i=Ce.objectKeys(n).filter(a=>o.indexOf(a)!==-1),s={...n,...e};for(const a of i){const c=Vc(n[a],e[a]);if(!c.valid)return{valid:!1};s[a]=c.data}return{valid:!0,data:s}}else if(t===q.array&&r===q.array){if(n.length!==e.length)return{valid:!1};const o=[];for(let i=0;i<n.length;i++){const s=n[i],a=e[i],c=Vc(s,a);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return t===q.date&&r===q.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class No extends ge{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(Hc(i)||Hc(s))return le;const a=Vc(i.value,s.value);return a.valid?((Zc(i)||Zc(s))&&t.dirty(),{status:t.value,value:a.data}):(G(r,{code:L.invalid_intersection_types}),le)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}No.create=(n,e,t)=>new No({left:n,right:e,typeName:re.ZodIntersection,...fe(t)});class nn extends ge{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==q.array)return G(r,{code:L.invalid_type,expected:q.array,received:r.parsedType}),le;if(r.data.length<this._def.items.length)return G(r,{code:L.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),le;!this._def.rest&&r.data.length>this._def.items.length&&(G(r,{code:L.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map((s,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new tn(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>Ke.mergeArray(t,s)):Ke.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new nn({...this._def,rest:e})}}nn.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new nn({items:n,typeName:re.ZodTuple,rest:null,...fe(e)})};class Mo extends ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==q.object)return G(r,{code:L.invalid_type,expected:q.object,received:r.parsedType}),le;const o=[],i=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:i._parse(new tn(r,a,r.path,a)),value:s._parse(new tn(r,r.data[a],r.path,a))});return r.common.async?Ke.mergeObjectAsync(t,o):Ke.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof ge?new Mo({keyType:e,valueType:t,typeName:re.ZodRecord,...fe(r)}):new Mo({keyType:Ot.create(),valueType:e,typeName:re.ZodRecord,...fe(t)})}}class Fs extends ge{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==q.map)return G(r,{code:L.invalid_type,expected:q.map,received:r.parsedType}),le;const o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,c],l)=>({key:o._parse(new tn(r,a,r.path,[l,"key"])),value:i._parse(new tn(r,c,r.path,[l,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,h=await c.value;if(l.status==="aborted"||h.status==="aborted")return le;(l.status==="dirty"||h.status==="dirty")&&t.dirty(),a.set(l.value,h.value)}return{status:t.value,value:a}})}else{const a=new Map;for(const c of s){const l=c.key,h=c.value;if(l.status==="aborted"||h.status==="aborted")return le;(l.status==="dirty"||h.status==="dirty")&&t.dirty(),a.set(l.value,h.value)}return{status:t.value,value:a}}}}Fs.create=(n,e,t)=>new Fs({valueType:e,keyType:n,typeName:re.ZodMap,...fe(t)});class Or extends ge{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==q.set)return G(r,{code:L.invalid_type,expected:q.set,received:r.parsedType}),le;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(G(r,{code:L.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),t.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(G(r,{code:L.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),t.dirty());const i=this._def.valueType;function s(c){const l=new Set;for(const h of c){if(h.status==="aborted")return le;h.status==="dirty"&&t.dirty(),l.add(h.value)}return{status:t.value,value:l}}const a=[...r.data.values()].map((c,l)=>i._parse(new tn(r,c,r.path,l)));return r.common.async?Promise.all(a).then(c=>s(c)):s(a)}min(e,t){return new Or({...this._def,minSize:{value:e,message:te.toString(t)}})}max(e,t){return new Or({...this._def,maxSize:{value:e,message:te.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Or.create=(n,e)=>new Or({valueType:n,minSize:null,maxSize:null,typeName:re.ZodSet,...fe(e)});class Jr extends ge{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==q.function)return G(t,{code:L.invalid_type,expected:q.function,received:t.parsedType}),le;function r(a,c){return js({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ds(),Io].filter(l=>!!l),issueData:{code:L.invalid_arguments,argumentsError:c}})}function o(a,c){return js({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ds(),Io].filter(l=>!!l),issueData:{code:L.invalid_return_type,returnTypeError:c}})}const i={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof xi){const a=this;return rt(async function(...c){const l=new Pt([]),h=await a._def.args.parseAsync(c,i).catch(m=>{throw l.addIssue(r(c,m)),l}),p=await Reflect.apply(s,this,h);return await a._def.returns._def.type.parseAsync(p,i).catch(m=>{throw l.addIssue(o(p,m)),l})})}else{const a=this;return rt(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new Pt([r(c,l.error)]);const h=Reflect.apply(s,this,l.data),p=a._def.returns.safeParse(h,i);if(!p.success)throw new Pt([o(h,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Jr({...this._def,args:nn.create(e).rest(ur.create())})}returns(e){return new Jr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new Jr({args:e||nn.create([]).rest(ur.create()),returns:t||ur.create(),typeName:re.ZodFunction,...fe(r)})}}class Lo extends ge{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Lo.create=(n,e)=>new Lo({getter:n,typeName:re.ZodLazy,...fe(e)});class Uo extends ge{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return G(t,{received:t.data,code:L.invalid_literal,expected:this._def.value}),le}return{status:"valid",value:e.data}}get value(){return this._def.value}}Uo.create=(n,e)=>new Uo({value:n,typeName:re.ZodLiteral,...fe(e)});function _h(n,e){return new Zn({values:n,typeName:re.ZodEnum,...fe(e)})}class Zn extends ge{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return G(t,{expected:Ce.joinValues(r),received:t.parsedType,code:L.invalid_type}),le}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),r=this._def.values;return G(t,{received:t.data,code:L.invalid_enum_value,options:r}),le}return rt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return Zn.create(e)}exclude(e){return Zn.create(this.options.filter(t=>!e.includes(t)))}}Zn.create=_h;class Do extends ge{_parse(e){const t=Ce.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==q.string&&r.parsedType!==q.number){const o=Ce.objectValues(t);return G(r,{expected:Ce.joinValues(o),received:r.parsedType,code:L.invalid_type}),le}if(t.indexOf(e.data)===-1){const o=Ce.objectValues(t);return G(r,{received:r.data,code:L.invalid_enum_value,options:o}),le}return rt(e.data)}get enum(){return this._def.values}}Do.create=(n,e)=>new Do({values:n,typeName:re.ZodNativeEnum,...fe(e)});class xi extends ge{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==q.promise&&t.common.async===!1)return G(t,{code:L.invalid_type,expected:q.promise,received:t.parsedType}),le;const r=t.parsedType===q.promise?t.data:Promise.resolve(t.data);return rt(r.then(o=>this._def.type.parseAsync(o,{path:t.path,errorMap:t.common.contextualErrorMap})))}}xi.create=(n,e)=>new xi({type:n,typeName:re.ZodPromise,...fe(e)});class jt extends ge{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===re.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{G(r,s),s.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const s=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const c=o.refinement(a,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?le:(a.status==="dirty"&&t.dirty(),s(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?le:(a.status==="dirty"&&t.dirty(),s(a.value).then(()=>({status:t.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ro(s))return s;const a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Ro(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:t.value,value:a})):s);Ce.assertNever(o)}}jt.create=(n,e,t)=>new jt({schema:n,typeName:re.ZodEffects,effect:e,...fe(t)});jt.createWithPreprocess=(n,e,t)=>new jt({schema:e,effect:{type:"preprocess",transform:n},typeName:re.ZodEffects,...fe(t)});class hn extends ge{_parse(e){return this._getType(e)===q.undefined?rt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}hn.create=(n,e)=>new hn({innerType:n,typeName:re.ZodOptional,...fe(e)});class Pr extends ge{_parse(e){return this._getType(e)===q.null?rt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Pr.create=(n,e)=>new Pr({innerType:n,typeName:re.ZodNullable,...fe(e)});class jo extends ge{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===q.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}jo.create=(n,e)=>new jo({innerType:n,typeName:re.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...fe(e)});class Hs extends ge{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Bs(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Pt(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Pt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Hs.create=(n,e)=>new Hs({innerType:n,typeName:re.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...fe(e)});class Zs extends ge{_parse(e){if(this._getType(e)!==q.nan){const r=this._getOrReturnCtx(e);return G(r,{code:L.invalid_type,expected:q.nan,received:r.parsedType}),le}return{status:"valid",value:e.data}}}Zs.create=n=>new Zs({typeName:re.ZodNaN,...fe(n)});const dv=Symbol("zod_brand");class Eh extends ge{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class Jo extends ge{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?le:i.status==="dirty"?(t.dirty(),Ch(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?le:o.status==="dirty"?(t.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,t){return new Jo({in:e,out:t,typeName:re.ZodPipeline})}}class Vs extends ge{_parse(e){const t=this._def.innerType._parse(e);return Ro(t)&&(t.value=Object.freeze(t.value)),t}}Vs.create=(n,e)=>new Vs({innerType:n,typeName:re.ZodReadonly,...fe(e)});const $h=(n,e={},t)=>n?yi.create().superRefine((r,o)=>{var i,s;if(!n(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(s=(i=a.fatal)!==null&&i!==void 0?i:t)!==null&&s!==void 0?s:!0,l=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...l,fatal:c})}}):yi.create(),hv={object:ke.lazycreate};var re;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(re||(re={}));const fv=(n,e={message:`Input not instance of ${n.name}`})=>$h(t=>t instanceof n,e),Sh=Ot.create,Ah=Fn.create,pv=Zs.create,gv=Hn.create,Ih=To.create,mv=Tr.create,wv=Ws.create,bv=Oo.create,vv=Po.create,yv=yi.create,xv=ur.create,Cv=mn.create,_v=zs.create,Ev=kt.create,$v=ke.create,Sv=ke.strictCreate,Av=ko.create,Iv=Ra.create,Rv=No.create,Tv=nn.create,Ov=Mo.create,Pv=Fs.create,kv=Or.create,Nv=Jr.create,Mv=Lo.create,Lv=Uo.create,Uv=Zn.create,Dv=Do.create,jv=xi.create,Ku=jt.create,Bv=hn.create,Wv=Pr.create,zv=jt.createWithPreprocess,Fv=Jo.create,Hv=()=>Sh().optional(),Zv=()=>Ah().optional(),Vv=()=>Ih().optional(),qv={string:n=>Ot.create({...n,coerce:!0}),number:n=>Fn.create({...n,coerce:!0}),boolean:n=>To.create({...n,coerce:!0}),bigint:n=>Hn.create({...n,coerce:!0}),date:n=>Tr.create({...n,coerce:!0})},Gv=le;var R=Object.freeze({__proto__:null,defaultErrorMap:Io,setErrorMap:Q3,getErrorMap:Ds,makeIssue:js,EMPTY_PATH:X3,addIssueToContext:G,ParseStatus:Ke,INVALID:le,DIRTY:Ch,OK:rt,isAborted:Hc,isDirty:Zc,isValid:Ro,isAsync:Bs,get util(){return Ce},get objectUtil(){return Fc},ZodParsedType:q,getParsedType:Rn,ZodType:ge,ZodString:Ot,ZodNumber:Fn,ZodBigInt:Hn,ZodBoolean:To,ZodDate:Tr,ZodSymbol:Ws,ZodUndefined:Oo,ZodNull:Po,ZodAny:yi,ZodUnknown:ur,ZodNever:mn,ZodVoid:zs,ZodArray:kt,ZodObject:ke,ZodUnion:ko,ZodDiscriminatedUnion:Ra,ZodIntersection:No,ZodTuple:nn,ZodRecord:Mo,ZodMap:Fs,ZodSet:Or,ZodFunction:Jr,ZodLazy:Lo,ZodLiteral:Uo,ZodEnum:Zn,ZodNativeEnum:Do,ZodPromise:xi,ZodEffects:jt,ZodTransformer:jt,ZodOptional:hn,ZodNullable:Pr,ZodDefault:jo,ZodCatch:Hs,ZodNaN:Zs,BRAND:dv,ZodBranded:Eh,ZodPipeline:Jo,ZodReadonly:Vs,custom:$h,Schema:ge,ZodSchema:ge,late:hv,get ZodFirstPartyTypeKind(){return re},coerce:qv,any:yv,array:Ev,bigint:gv,boolean:Ih,date:mv,discriminatedUnion:Iv,effect:Ku,enum:Uv,function:Nv,instanceof:fv,intersection:Rv,lazy:Mv,literal:Lv,map:Pv,nan:pv,nativeEnum:Dv,never:Cv,null:vv,nullable:Wv,number:Ah,object:$v,oboolean:Vv,onumber:Zv,optional:Bv,ostring:Hv,pipeline:Fv,preprocess:zv,promise:jv,record:Ov,set:kv,strictObject:Sv,string:Sh,symbol:wv,transformer:Ku,tuple:Tv,undefined:bv,union:Av,unknown:xv,void:_v,NEVER:Gv,ZodIssueCode:L,quotelessJson:J3,ZodError:Pt});const st=R.object({message:R.string()});function ue(n){return R.literal(K[n])}R.object({accessList:R.array(R.string()),blockHash:R.string().nullable(),blockNumber:R.string().nullable(),chainId:R.string(),from:R.string(),gas:R.string(),hash:R.string(),input:R.string().nullable(),maxFeePerGas:R.string(),maxPriorityFeePerGas:R.string(),nonce:R.string(),r:R.string(),s:R.string(),to:R.string(),transactionIndex:R.string().nullable(),type:R.string(),v:R.string(),value:R.string()});const Yv=R.object({chainId:R.number()}),Kv=R.object({email:R.string().email()}),Jv=R.object({otp:R.string()}),Qv=R.object({chainId:R.optional(R.number())}),Xv=R.object({email:R.string().email()}),ey=R.object({otp:R.string()}),ty=R.object({otp:R.string()}),ny=R.object({themeMode:R.optional(R.enum(["light","dark"])),themeVariables:R.optional(R.record(R.string(),R.string().or(R.number())))}),ry=R.object({metadata:R.object({name:R.string(),description:R.string(),url:R.string(),icons:R.array(R.string())}).optional(),sdkVersion:R.string(),projectId:R.string()}),iy=R.object({action:R.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),oy=R.object({email:R.string().email(),address:R.string(),chainId:R.number()}),sy=R.object({isConnected:R.boolean()}),ay=R.object({chainId:R.number()}),cy=R.object({chainId:R.number()}),ly=R.object({newEmail:R.string().email()}),uy=R.any(),dy=R.object({method:R.literal("personal_sign"),params:R.array(R.any())}),hy=R.object({method:R.literal("eth_sendTransaction"),params:R.array(R.any())}),fy=R.object({method:R.literal("eth_accounts")}),py=R.object({method:R.literal("eth_getBalance"),params:R.array(R.any())}),gy=R.object({method:R.literal("eth_estimateGas"),params:R.array(R.any())}),my=R.object({method:R.literal("eth_gasPrice")}),wy=R.object({method:R.literal("eth_signTypedData_v4"),params:R.array(R.any())}),by=R.object({method:R.literal("eth_getTransactionByHash"),params:R.array(R.any())}),vy=R.object({method:R.literal("eth_blockNumber")}),yy=R.object({method:R.literal("eth_chainId")}),Ju=R.object({token:R.string()}),us={appEvent:R.object({type:ue("APP_SWITCH_NETWORK"),payload:Yv}).or(R.object({type:ue("APP_CONNECT_EMAIL"),payload:Kv})).or(R.object({type:ue("APP_CONNECT_DEVICE")})).or(R.object({type:ue("APP_CONNECT_OTP"),payload:Jv})).or(R.object({type:ue("APP_GET_USER"),payload:R.optional(Qv)})).or(R.object({type:ue("APP_SIGN_OUT")})).or(R.object({type:ue("APP_IS_CONNECTED"),payload:R.optional(Ju)})).or(R.object({type:ue("APP_GET_CHAIN_ID")})).or(R.object({type:ue("APP_RPC_REQUEST"),payload:dy.or(hy).or(fy).or(py).or(gy).or(my).or(wy).or(vy).or(yy).or(by)})).or(R.object({type:ue("APP_UPDATE_EMAIL"),payload:Xv})).or(R.object({type:ue("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:ey})).or(R.object({type:ue("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:ty})).or(R.object({type:ue("APP_SYNC_THEME"),payload:ny})).or(R.object({type:ue("APP_SYNC_DAPP_DATA"),payload:ry})),frameEvent:R.object({type:ue("FRAME_SWITCH_NETWORK_ERROR"),payload:st}).or(R.object({type:ue("FRAME_SWITCH_NETWORK_SUCCESS"),payload:cy})).or(R.object({type:ue("FRAME_CONNECT_EMAIL_ERROR"),payload:st})).or(R.object({type:ue("FRAME_CONNECT_EMAIL_SUCCESS"),payload:iy})).or(R.object({type:ue("FRAME_CONNECT_OTP_ERROR"),payload:st})).or(R.object({type:ue("FRAME_CONNECT_OTP_SUCCESS")})).or(R.object({type:ue("FRAME_CONNECT_DEVICE_ERROR"),payload:st})).or(R.object({type:ue("FRAME_CONNECT_DEVICE_SUCCESS")})).or(R.object({type:ue("FRAME_GET_USER_ERROR"),payload:st})).or(R.object({type:ue("FRAME_GET_USER_SUCCESS"),payload:oy})).or(R.object({type:ue("FRAME_SIGN_OUT_ERROR"),payload:st})).or(R.object({type:ue("FRAME_SIGN_OUT_SUCCESS")})).or(R.object({type:ue("FRAME_IS_CONNECTED_ERROR"),payload:st})).or(R.object({type:ue("FRAME_IS_CONNECTED_SUCCESS"),payload:sy})).or(R.object({type:ue("FRAME_GET_CHAIN_ID_ERROR"),payload:st})).or(R.object({type:ue("FRAME_GET_CHAIN_ID_SUCCESS"),payload:ay})).or(R.object({type:ue("FRAME_RPC_REQUEST_ERROR"),payload:st})).or(R.object({type:ue("FRAME_RPC_REQUEST_SUCCESS"),payload:uy})).or(R.object({type:ue("FRAME_SESSION_UPDATE"),payload:Ju})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_ERROR"),payload:st})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_SUCCESS")})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:st})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:st})).or(R.object({type:ue("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:ly})).or(R.object({type:ue("FRAME_SYNC_THEME_ERROR"),payload:st})).or(R.object({type:ue("FRAME_SYNC_THEME_SUCCESS")})).or(R.object({type:ue("FRAME_SYNC_DAPP_DATA_ERROR"),payload:st})).or(R.object({type:ue("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},ft={set(n,e){Xe.isClient&&localStorage.setItem(`${K.STORAGE_KEY}${n}`,e)},get(n){return Xe.isClient?localStorage.getItem(`${K.STORAGE_KEY}${n}`):null},delete(n){Xe.isClient&&localStorage.removeItem(`${K.STORAGE_KEY}${n}`)}},xy=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ds=30*1e3,Xe={getBlockchainApiUrl(){try{const{timeZone:n}=new Intl.DateTimeFormat().resolvedOptions(),e=n.toUpperCase();return xy.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const n=ft.get(K.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<ds){const t=Math.ceil((ds-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const n=ft.get(K.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<ds)return Math.ceil((ds-e)/1e3)}return 0},checkIfRequestIsAllowed(n){var t;const e=(t=n==null?void 0:n.payload)==null?void 0:t.method;return yh.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class Cy{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Xe.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{Xe.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(K.FRAME_EVENT_KEY)))return;const i=us.frameEvent.parse(o);r(i)})},onAppEvent:r=>{Xe.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(K.APP_EVENT_KEY)))return;const i=us.appEvent.parse(o);r(i)})},postAppEvent:r=>{var o;if(Xe.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");us.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")}},postFrameEvent:r=>{if(Xe.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");us.frameEvent.parse(r),parent.postMessage(r,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),t&&(this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),Xe.isClient)){const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${K.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class _y{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new Cy(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("💻 received",t),t.type){case K.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case K.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case K.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case K.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case K.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case K.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case K.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case K.FRAME_GET_USER_ERROR:return this.onConnectError(t);case K.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case K.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case K.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case K.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case K.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case K.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case K.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case K.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case K.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case K.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case K.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case K.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case K.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case K.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case K.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case K.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case K.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case K.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case K.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case K.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case K.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);default:return null}})}getLoginEmailUsed(){return!!ft.get(K.EMAIL_LOGIN_USED_KEY)}getEmail(){return ft.get(K.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Xe.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:K.APP_CONNECT_EMAIL,payload:e}),new Promise((t,r)=>{this.connectEmailResolver={resolve:t,reject:r}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_CONNECT_OTP,payload:e}),new Promise((t,r)=>{this.connectOtpResolver={resolve:t,reject:r}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Xe.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:K.APP_UPDATE_EMAIL,payload:e}),new Promise((t,r)=>{this.updateEmailResolver={resolve:t,reject:r}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((t,r)=>{this.updateEmailPrimaryOtpResolver={resolve:t,reject:r}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((t,r)=>{this.updateEmailSecondaryOtpResolver={resolve:t,reject:r}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_SYNC_THEME,payload:e}),new Promise((t,r)=>{this.syncThemeResolver={resolve:t,reject:r}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_SYNC_DAPP_DATA,payload:e}),new Promise((t,r)=>{this.syncDappDataResolver={resolve:t,reject:r}})}async connect(e){const t=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_GET_USER,payload:{chainId:t}}),new Promise((r,o)=>{this.connectResolver={resolve:r,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((t,r)=>{this.switchChainResolver={resolve:t,reject:r}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:K.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,yh.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:K.APP_RPC_REQUEST,payload:e}),new Promise((t,r)=>{this.rpcRequestResolver={resolve:t,reject:r}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(K.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(K.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===K.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){var t;(t=this.connectEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;(t=this.connectEmailResolver)==null||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var t;(t=this.connectDeviceResolver)==null||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var t;(t=this.connectOtpResolver)==null||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(t=this.connectResolver)==null||t.resolve(e.payload)}onConnectError(e){var t;(t=this.connectResolver)==null||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),(t=this.isConnectedResolver)==null||t.resolve(e.payload)}onIsConnectedError(e){var t;(t=this.isConnectedResolver)==null||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.getChainIdResolver)==null||t.resolve(e.payload)}onGetChainIdError(e){var t;(t=this.getChainIdResolver)==null||t.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;(t=this.disconnectResolver)==null||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.switchChainResolver)==null||t.resolve(e.payload)}onSwitchChainError(e){var t;(t=this.switchChainResolver)==null||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;(t=this.rpcRequestResolver)==null||t.resolve(e.payload)}onRpcRequestError(e){var t;(t=this.rpcRequestResolver)==null||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;(t=this.updateEmailResolver)==null||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;(t=this.updateEmailPrimaryOtpResolver)==null||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var r;const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),(r=this.updateEmailSecondaryOtpResolver)==null||r.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){var t;(t=this.updateEmailSecondaryOtpResolver)==null||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var t;(t=this.syncThemeResolver)==null||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var t;(t=this.syncDappDataResolver)==null||t.reject(e.payload.message)}setNewLastEmailLoginTime(){ft.set(K.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){ft.set(K.EMAIL,e),ft.set(K.EMAIL_LOGIN_USED_KEY,"true"),ft.delete(K.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){ft.delete(K.EMAIL_LOGIN_USED_KEY),ft.delete(K.EMAIL),ft.delete(K.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){ft.set(K.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(ft.get(K.LAST_USED_CHAIN_KEY))}}var Ta=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Ey=6;let wn=class extends M{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Xe.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=H.state.data)==null?void 0:e.email,this.emailConnector=Ie.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?b`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:b` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?b`
                    <wui-text variant="small-400" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Xe.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Xe.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===Ey&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(r){this.error=ee.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!Ie.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Fe.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Fe.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};wn.styles=K3;Ta([V()],wn.prototype,"loading",void 0);Ta([V()],wn.prototype,"timeoutTimeLeft",void 0);Ta([V()],wn.prototype,"error",void 0);wn=Ta([k("w3m-email-otp-widget")],wn);var $y=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Qu=class extends wn{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await be.connectExternal(this.emailConnector),Ee.close(),ne.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}catch(t){throw ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};Qu=$y([k("w3m-email-verify-otp-view")],Qu);const Sy=j`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Rh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let qs=class extends M{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.email,this.emailConnector=Ie.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 10 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),ne.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),H.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Fe.showSuccess("Code email resent")}}catch(e){Fe.showError(e)}finally{this.loading=!1}}};qs.styles=Sy;Rh([V()],qs.prototype,"loading",void 0);qs=Rh([k("w3m-email-verify-device-view")],qs);const Ay=j`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Th=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Gs=class extends M{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ee.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const t=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(t==null?void 0:t.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),b`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};Gs.styles=Ay;Th([V()],Gs.prototype,"ready",void 0);Gs=Th([k("w3m-approve-transaction-view")],Gs);var Iy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Xu=class extends M{render(){return b`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Gt.SECURE_SITE_DASHBOARD}
          imageSrc=${Gt.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Xu=Iy([k("w3m-upgrade-wallet-view")],Xu);const Ry=j`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Ul=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Bo=class extends M{constructor(){var e;super(...arguments),this.formRef=ga(),this.initialEmail=((e=H.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return b`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ma(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${H.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=Ie.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),ne.sendEvent({type:"track",event:"EMAIL_EDIT"}),H.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){Fe.showError(t),this.loading=!1}}};Bo.styles=Ry;Ul([V()],Bo.prototype,"email",void 0);Ul([V()],Bo.prototype,"loading",void 0);Bo=Ul([k("w3m-update-email-wallet-view")],Bo);var Ty=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ed=class extends wn{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:t}),ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),H.replace("UpdateEmailSecondaryOtp",H.state.data))}catch(r){throw ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{H.replace("UpdateEmailWallet",H.state.data)}}};ed=Ty([k("w3m-update-email-primary-otp-view")],ed);var Oy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let td=class extends wn{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:t}),ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),H.replace("Account",{email:this.email}))}catch(r){throw ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{H.replace("UpdateEmailWallet",H.state.data)}}};td=Oy([k("w3m-update-email-secondary-otp-view")],td);const Py=j`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Oh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ys=class extends M{constructor(){super(...arguments),this.disconecting=!1}render(){return b`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=_e.state;return ee.sortRequestedNetworks(e,t).map(o=>b`
        <wui-list-network
          imageSrc=${de(Ne.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await be.disconnect(),ne.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ee.close()}catch{ne.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Fe.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=xe.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=_e.state,{data:s}=H.state;t&&(i==null?void 0:i.id)!==e.id?r!=null&&r.includes(e.id)?(await _e.switchActiveNetwork(e),gl.navigateAfterNetworkSwitch()):o&&H.push("SwitchNetwork",{...s,network:e}):t||(_e.setCaipNetwork(e),H.push("Connect"))}};Ys.styles=Py;Oh([V()],Ys.prototype,"disconecting",void 0);Ys=Oh([k("w3m-unsupported-chain-view")],Ys);const ky=j`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Ph(n){const{connectors:e}=Ie.state,t=e.filter(i=>i.type==="ANNOUNCED").reduce((i,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(i[s.info.rdns]=!0),i},{});return n.map(i=>({...i,installed:!!i.rdns&&!!t[i.rdns??""]})).sort((i,s)=>Number(s.installed)-Number(i.installed))}var Qo=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const nd="local-paginator";let kr=class extends M{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!me.state.wallets.length,this.wallets=me.state.wallets,this.recommended=me.state.recommended,this.featured=me.state.featured,this.unsubscribe.push(me.subscribeKey("wallets",e=>this.wallets=e),me.subscribeKey("recommended",e=>this.recommended=e),me.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return b`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await me.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>b`
        <wui-card-select-loader type="wallet" id=${de(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return Ph(e).map(r=>b`
        <wui-card-select
          imageSrc=${de(Ne.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=me.state,i=window.innerWidth<352?3:4,s=e.length+t.length;let c=Math.ceil(s/i)*i-s+i;return c-=e.length?r.length%i:0,o===0&&r.length>0?null:o===0||[...r,...e,...t].length<o?this.shimmerTemplate(c,nd):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${nd}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=me.state;s.length<i&&me.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=Ie.state,r=t.find(({explorerId:o})=>o===e.id);r?H.push("ConnectingExternal",{connector:r}):H.push("ConnectingWalletConnect",{wallet:e})}};kr.styles=ky;Qo([V()],kr.prototype,"initial",void 0);Qo([V()],kr.prototype,"wallets",void 0);Qo([V()],kr.prototype,"recommended",void 0);Qo([V()],kr.prototype,"featured",void 0);kr=Qo([k("w3m-all-wallets-list")],kr);const Ny=j`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Dl=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Wo=class extends M{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?b`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await me.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=me.state,t=Ph(e);return e.length?b`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>b`
            <wui-card-select
              imageSrc=${de(Ne.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:b`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=Ie.state,r=t.find(({explorerId:o})=>o===e.id);r?H.push("ConnectingExternal",{connector:r}):H.push("ConnectingWalletConnect",{wallet:e})}};Wo.styles=Ny;Dl([V()],Wo.prototype,"loading",void 0);Dl([C()],Wo.prototype,"query",void 0);Wo=Dl([k("w3m-all-wallets-search")],Wo);var Oa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let zo=class extends M{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(be.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return b`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};Oa([C({type:Array})],zo.prototype,"platforms",void 0);Oa([C()],zo.prototype,"onSelectPlatfrom",void 0);Oa([V()],zo.prototype,"buffering",void 0);zo=Oa([k("w3m-connecting-header")],zo);var My=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let rd=class extends dt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Ie.state,t=e.find(o=>{var i,s;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(o=>o.type==="INJECTED");t?await be.connectExternal(t):r&&await be.connectExternal(r),Ee.close(),ne.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){ne.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};rd=My([k("w3m-connecting-wc-browser")],rd);var Ly=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let id=class extends dt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:o,href:i}=ee.formatNativeUrl(t,this.uri);be.setWcLinking({name:r,href:i}),be.setRecentWallet(this.wallet),ee.openHref(o,"_blank")}catch{this.error=!0}}};id=Ly([k("w3m-connecting-wc-desktop")],id);var Uy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let od=class extends dt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:o,href:i}=ee.formatNativeUrl(t,this.uri);be.setWcLinking({name:r,href:i}),be.setRecentWallet(this.wallet),ee.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=ee.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(be.setBuffering(!0),setTimeout(()=>{be.setBuffering(!1)},5e3))}};od=Uy([k("w3m-connecting-wc-mobile")],od);const Dy=j`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var jy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let qc=class extends dt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),b`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return be.setWcLinking(void 0),be.setRecentWallet(this.wallet),b` <wui-qr-code
      size=${e}
      theme=${at.state.themeMode}
      uri=${this.uri}
      imageSrc=${de(Ne.getWalletImage(this.wallet))}
      alt=${de(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return b`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};qc.styles=Dy;qc=jy([k("w3m-connecting-wc-qrcode")],qc);const By=j`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Wy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Gc=class extends M{constructor(){var e;super(...arguments),this.dappImageUrl=(e=ve.state.metadata)==null?void 0:e.icons,this.walletImageUrl=tt.getConnectedWalletImageUrl()}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return b`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Gc.styles=By;Gc=Wy([k("w3m-connecting-siwe")],Gc);var zy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let sd=class extends M{constructor(){var e;if(super(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${de(Ne.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};sd=zy([k("w3m-connecting-wc-unsupported")],sd);var Fy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ad=class extends dt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ne.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:o,href:i}=ee.formatUniversalUrl(t,this.uri);be.setWcLinking({name:r,href:i}),be.setRecentWallet(this.wallet),ee.openHref(o,"_blank")}catch{this.error=!0}}};ad=Fy([k("w3m-connecting-wc-web")],ad);const Hy=j`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Pa=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};function cd(){var s,a,c,l,h,p,f;const n=(a=(s=H.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(l=(c=H.state.data)==null?void 0:c.wallet)==null?void 0:l.name,t=(p=(h=H.state.data)==null?void 0:h.network)==null?void 0:p.name,r=e??n,o=Ie.getConnectors();return{Connect:`Connect ${o.length===1&&((f=o[0])==null?void 0:f.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network"}}let Ci=class extends M{constructor(){super(),this.unsubscribe=[],this.heading=cd()[H.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(H.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),be.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return b`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){ne.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),H.push("WhatIsAWallet")}async onClose(){De.state.isSiweEnabled&&De.state.status!=="success"&&await be.disconnect(),Ee.close()}titleTemplate(){return b`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=H.state,t=e==="Connect",r=e==="ApproveTransaction";return this.showBack&&!r?b`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:b`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?b`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(t){const o=cd()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=H.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){H.state.view==="ConnectingSiwe"?H.push("Connect"):H.goBack()}};Ci.styles=[Hy];Pa([V()],Ci.prototype,"heading",void 0);Pa([V()],Ci.prototype,"buffering",void 0);Pa([V()],Ci.prototype,"showBack",void 0);Ci=Pa([k("w3m-header")],Ci);var kh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Yc=class extends M{constructor(){super(...arguments),this.data=[]}render(){return b`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>b`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>b`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};kh([C({type:Array})],Yc.prototype,"data",void 0);Yc=kh([k("w3m-help-widget")],Yc);const Zy=j`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var Vy=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Kc=class extends M{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=ve.state;return!e&&!t?null:b`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=ve.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=ve.state;return e?b`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=ve.state;return e?b`<a href=${e}>Privacy Policy</a>`:null}};Kc.styles=[Zy];Kc=Vy([k("w3m-legal-footer")],Kc);const qy=j`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Nh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ks=class extends M{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=ee.isMobile(),a=ee.isIos(),c=ee.isAndroid(),l=[t,r,i,o].filter(Boolean).length>1,h=$e.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?b`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>H.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?b`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?b`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?b`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&ee.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&ee.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&ee.openHref(this.wallet.homepage,"_blank")}};Ks.styles=[qy];Nh([C({type:Object})],Ks.prototype,"wallet",void 0);Ks=Nh([k("w3m-mobile-download-links")],Ks);const Gy=j`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Mh=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Yy={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Js=class extends M{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Fe.state.open,this.unsubscribe.push(Fe.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=Fe.state,r=Yy[t];return b`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Fe.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Js.styles=Gy;Mh([V()],Js.prototype,"open",void 0);Js=Mh([k("w3m-snackbar")],Js);const Ky=j`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var Xo=function(n,e,t,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Nr=class extends M{constructor(){super(),this.unsubscribe=[],this.formRef=ga(),this.connectors=Ie.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Ie.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>r.type==="EMAIL")?b`
      ${this.alphaWarningTemplate()}
      <form ${ma(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?b`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return b`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">Email login is in alpha</wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?b`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?b`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=Ie.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});ne.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(ne.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),H.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&H.push("EmailVerifyDevice",{email:this.email})}catch(t){const r=ee.parseError(t);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":Fe.showError(t)}finally{this.loading=!1}}onFocusEvent(){ne.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Nr.styles=Ky;Xo([V()],Nr.prototype,"connectors",void 0);Xo([V()],Nr.prototype,"email",void 0);Xo([V()],Nr.prototype,"loading",void 0);Xo([V()],Nr.prototype,"error",void 0);Nr=Xo([k("w3m-email-login-widget")],Nr);let ld=!1;class Jy{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{xe.setIsConnected(t)},this.setCaipAddress=t=>{xe.setCaipAddress(t)},this.setBalance=(t,r)=>{xe.setBalance(t,r)},this.setProfileName=t=>{xe.setProfileName(t)},this.setProfileImage=t=>{xe.setProfileImage(t)},this.resetAccount=()=>{xe.resetAccount()},this.setCaipNetwork=t=>{_e.setCaipNetwork(t)},this.getCaipNetwork=()=>_e.state.caipNetwork,this.setRequestedCaipNetworks=t=>{_e.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>_e.getApprovedCaipNetworksData(),this.resetNetwork=()=>{_e.resetNetwork()},this.setConnectors=t=>{Ie.setConnectors(t)},this.addConnector=t=>{Ie.addConnector(t)},this.getConnectors=()=>Ie.getConnectors(),this.resetWcConnection=()=>{be.resetWcConnection()},this.fetchIdentity=t=>m0.fetchIdentity(t),this.setAddressExplorerUrl=t=>{xe.setAddressExplorerUrl(t)},this.setSIWENonce=t=>{De.setNonce(t)},this.setSIWESession=t=>{De.setSession(t)},this.setSIWEStatus=t=>{De.setStatus(t)},this.setSIWEMessage=t=>{De.setMessage(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ee.open(e)}async close(){await this.initOrContinue(),Ee.close()}setLoading(e){Ee.setLoading(e)}getThemeMode(){return at.state.themeMode}getThemeVariables(){return at.state.themeVariables}setThemeMode(e){at.setThemeMode(e),yl(at.state.themeMode);try{const t=Ie.getEmailConnector();t&&t.provider.syncTheme({themeMode:at.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){at.setThemeVariables(e),M0(at.state.themeVariables);try{const t=Ie.getEmailConnector();t&&t.provider.syncTheme({themeVariables:at.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return at.subscribe(e)}getState(){return{...ri.state}}subscribeState(e){return ri.subscribe(e)}getEvent(){return{...ne.state}}subscribeEvents(e){return ne.subscribe(e)}subscribeSIWEState(e){return De.subscribe(e)}initControllers(e){if(_e.setClient(e.networkControllerClient),_e.setDefaultCaipNetwork(e.defaultChain),ve.setProjectId(e.projectId),ve.setAllWallets(e.allWallets),ve.setIncludeWalletIds(e.includeWalletIds),ve.setExcludeWalletIds(e.excludeWalletIds),ve.setFeaturedWalletIds(e.featuredWalletIds),ve.setTokens(e.tokens),ve.setTermsConditionsUrl(e.termsConditionsUrl),ve.setPrivacyPolicyUrl(e.privacyPolicyUrl),ve.setCustomWallets(e.customWallets),ve.setEnableAnalytics(e.enableAnalytics),ve.setSdkVersion(e._sdkVersion),be.setClient(e.connectionControllerClient),e.siweControllerClient){const t=e.siweControllerClient;De.setSIWEClient(t)}e.metadata&&ve.setMetadata(e.metadata),e.themeMode&&at.setThemeMode(e.themeMode),e.themeVariables&&at.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!ld&&ee.isClient()&&(ld=!0,this.initPromise=new Promise(async e=>{await Promise.all([Xr(()=>Promise.resolve().then(()=>I3),void 0),Xr(()=>Promise.resolve().then(()=>O3),void 0)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}const he={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"4.0.0"},Sn={ConnectorExplorerIds:{[he.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[he.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[he.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[he.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[he.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[he.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[he.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[he.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[he.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[he.INJECTED_CONNECTOR_ID]:"Browser Wallet",[he.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[he.COINBASE_CONNECTOR_ID]:"Coinbase",[he.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[he.LEDGER_CONNECTOR_ID]:"Ledger",[he.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[he.INJECTED_CONNECTOR_ID]:"INJECTED",[he.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[he.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[he.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},zr={caipNetworkIdToNumber(n){return n?Number(n.split(":")[1]):void 0},getCaipTokens(n){if(!n)return;const e={};return Object.entries(n).forEach(([t,r])=>{e[`${he.EIP155}:${t}`]=r}),e}};function Qy(n){if(n)return{id:`${he.EIP155}:${n.id}`,name:n.name,imageId:Sn.EIP155NetworkImageIds[n.id]}}async function Xy(n){var i,s,a,c;if(!n)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(n==null?void 0:n.getProvider()),t=(s=(i=e==null?void 0:e.signer)==null?void 0:i.session)==null?void 0:s.namespaces,r=(a=t==null?void 0:t[he.EIP155])==null?void 0:a.methods,o=(c=t==null?void 0:t[he.EIP155])==null?void 0:c.chains;return{supportsAllNetworks:!!(r!=null&&r.includes(he.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function e5(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:Sn.WalletConnectRpcChainIds.map(n=>`${he.EIP155}:${n}`)}}class t5 extends Jy{constructor(e){const{wagmiConfig:t,siweConfig:r,defaultChain:o,tokens:i,_sdkVersion:s,...a}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async h=>{const p=zr.caipNetworkIdToNumber(h==null?void 0:h.id);p&&await Ng(this.wagmiConfig,{chainId:p})},getApprovedCaipNetworksData:async()=>new Promise(h=>{var m,y;const f=new Map(t.state.connections).get(t.state.current||"");if(((m=f==null?void 0:f.connector)==null?void 0:m.id)===he.EMAIL_CONNECTOR_ID)h(e5());else if(((y=f==null?void 0:f.connector)==null?void 0:y.id)===he.WALLET_CONNECT_CONNECTOR_ID){const x=t.connectors.find(v=>v.id===he.WALLET_CONNECT_CONNECTOR_ID);h(Xy(x))}h({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},l={connectWalletConnect:async h=>{var y;const p=t.connectors.find(x=>x.id===he.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await p.getProvider()).on("display_uri",x=>{h(x)});const m=zr.caipNetworkIdToNumber((y=this.getCaipNetwork())==null?void 0:y.id);await au(this.wagmiConfig,{connector:p,chainId:m})},connectExternal:async({id:h,provider:p,info:f})=>{var x,v;const m=t.connectors.find($=>$.id===h);if(!m)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&f&&m.id===he.EIP6963_CONNECTOR_ID&&((x=m.setEip6963Wallet)==null||x.call(m,{provider:p,info:f}));const y=zr.caipNetworkIdToNumber((v=this.getCaipNetwork())==null?void 0:v.id);await au(this.wagmiConfig,{connector:m,chainId:y})},checkInstalled:h=>{const p=this.getConnectors().find(f=>f.type==="INJECTED");return h?p&&window!=null&&window.ethereum?h.some(f=>{var m;return!!((m=window.ethereum)!=null&&m[String(f)])}):!1:!!window.ethereum},disconnect:async()=>{var h;await $g(this.wagmiConfig),(h=r==null?void 0:r.options)!=null&&h.signOutOnDisconnect&&await r.signOut()},signMessage:async h=>Pg(this.wagmiConfig,{message:h})};super({networkControllerClient:c,connectionControllerClient:l,siweControllerClient:r,defaultChain:Qy(o),tokens:zr.getCaipTokens(i),_sdkVersion:s??`html-wagmi-${he.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),Lg(this.wagmiConfig,{onChange:h=>this.syncConnectors(h)}),Mg(this.wagmiConfig,{onChange:h=>this.syncAccount({...h,config:t})})}getState(){const e=super.getState();return{...e,selectedNetworkId:zr.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:zr.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){const t=e==null?void 0:e.map(r=>{var o,i;return{id:`${he.EIP155}:${r.id}`,name:r.name,imageId:Sn.EIP155NetworkImageIds[r.id],imageUrl:(i=(o=this.options)==null?void 0:o.chainImages)==null?void 0:i[r.id]}});this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r}){if(this.resetAccount(),this.syncNetwork(),t&&e&&r){const o=`${he.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(o),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,s,a,c;const{address:e,isConnected:t,chainId:r}=h0(this.wagmiConfig),o=this.wagmiConfig.chains.find(l=>l.id===r);if(o||r){const l=(o==null?void 0:o.name)??(r==null?void 0:r.toString()),h=Number((o==null?void 0:o.id)??r),p=`${he.EIP155}:${h}`;if(this.setCaipNetwork({id:p,name:l,imageId:Sn.EIP155NetworkImageIds[h],imageUrl:(s=(i=this.options)==null?void 0:i.chainImages)==null?void 0:s[h]}),t&&e&&r){const f=`${he.EIP155}:${h}:${e}`;if(this.setCaipAddress(f),(c=(a=o==null?void 0:o.blockExplorers)==null?void 0:a.default)!=null&&c.url){const m=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(m)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t!==Rd.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:r,avatar:o}=await this.fetchIdentity({caipChainId:`${he.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(o)}catch{const r=await Og(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);const o=await Tg(this.wagmiConfig,{name:r,chainId:t});o&&this.setProfileImage(o)}}}async syncBalance(e,t){var o,i,s;const r=this.wagmiConfig.chains.find(a=>a.id===t);if(r){const a=await Rg(this.wagmiConfig,{address:e,chainId:r.id,token:(s=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[r.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}syncConnectors(e){const t=new Set,r=e.filter(a=>!t.has(a.id)&&t.add(a.id)),o=[],i=he.COINBASE_SDK_CONNECTOR_ID,s=r.find(a=>a.id===Gt.CONNECTOR_RDNS_MAP[i]);r.forEach(({id:a,name:c,type:l,icon:h})=>{var f,m;s&&a===i||he.EMAIL_CONNECTOR_ID===a||o.push({id:a,explorerId:Sn.ConnectorExplorerIds[a],imageUrl:((m=(f=this.options)==null?void 0:f.connectorImages)==null?void 0:m[a])??h,name:Sn.ConnectorNamesMap[a]??c,imageId:Sn.ConnectorImageIds[a],type:Sn.ConnectorTypesMap[l]??"EXTERNAL"})}),this.setConnectors(o),this.syncEmailConnector(r)}async syncEmailConnector(e){const t=e.find(({id:r})=>r===he.EMAIL_CONNECTOR_ID);if(t){const r=await t.getProvider();this.addConnector({id:he.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:r}),this.listenEmailConnector(t)}}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const t=await e.getProvider(),r=t.getLoginEmailUsed();super.setLoading(r),t.onRpcRequest(o=>{Xe.checkIfRequestIsAllowed(o)||super.open({view:"ApproveTransaction"})}),t.onRpcResponse(()=>{super.close()}),t.onIsConnected(()=>{super.setLoading(!1)})}}}var Lh={},ka={};ka.byteLength=i5;ka.toByteArray=s5;ka.fromByteArray=l5;var qt=[],yt=[],n5=typeof Uint8Array<"u"?Uint8Array:Array,dc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Fr=0,r5=dc.length;Fr<r5;++Fr)qt[Fr]=dc[Fr],yt[dc.charCodeAt(Fr)]=Fr;yt[45]=62;yt[95]=63;function Uh(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=n.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function i5(n){var e=Uh(n),t=e[0],r=e[1];return(t+r)*3/4-r}function o5(n,e,t){return(e+t)*3/4-t}function s5(n){var e,t=Uh(n),r=t[0],o=t[1],i=new n5(o5(n,r,o)),s=0,a=o>0?r-4:r,c;for(c=0;c<a;c+=4)e=yt[n.charCodeAt(c)]<<18|yt[n.charCodeAt(c+1)]<<12|yt[n.charCodeAt(c+2)]<<6|yt[n.charCodeAt(c+3)],i[s++]=e>>16&255,i[s++]=e>>8&255,i[s++]=e&255;return o===2&&(e=yt[n.charCodeAt(c)]<<2|yt[n.charCodeAt(c+1)]>>4,i[s++]=e&255),o===1&&(e=yt[n.charCodeAt(c)]<<10|yt[n.charCodeAt(c+1)]<<4|yt[n.charCodeAt(c+2)]>>2,i[s++]=e>>8&255,i[s++]=e&255),i}function a5(n){return qt[n>>18&63]+qt[n>>12&63]+qt[n>>6&63]+qt[n&63]}function c5(n,e,t){for(var r,o=[],i=e;i<t;i+=3)r=(n[i]<<16&16711680)+(n[i+1]<<8&65280)+(n[i+2]&255),o.push(a5(r));return o.join("")}function l5(n){for(var e,t=n.length,r=t%3,o=[],i=16383,s=0,a=t-r;s<a;s+=i)o.push(c5(n,s,s+i>a?a:s+i));return r===1?(e=n[t-1],o.push(qt[e>>2]+qt[e<<4&63]+"==")):r===2&&(e=(n[t-2]<<8)+n[t-1],o.push(qt[e>>10]+qt[e>>4&63]+qt[e<<2&63]+"=")),o.join("")}var jl={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */jl.read=function(n,e,t,r,o){var i,s,a=o*8-r-1,c=(1<<a)-1,l=c>>1,h=-7,p=t?o-1:0,f=t?-1:1,m=n[e+p];for(p+=f,i=m&(1<<-h)-1,m>>=-h,h+=a;h>0;i=i*256+n[e+p],p+=f,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=s*256+n[e+p],p+=f,h-=8);if(i===0)i=1-l;else{if(i===c)return s?NaN:(m?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-l}return(m?-1:1)*s*Math.pow(2,i-r)};jl.write=function(n,e,t,r,o,i){var s,a,c,l=i*8-o-1,h=(1<<l)-1,p=h>>1,f=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=r?0:i-1,y=r?1:-1,x=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+p>=1?e+=f/c:e+=f*Math.pow(2,1-p),e*c>=2&&(s++,c/=2),s+p>=h?(a=0,s=h):s+p>=1?(a=(e*c-1)*Math.pow(2,o),s=s+p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;n[t+m]=a&255,m+=y,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;n[t+m]=s&255,m+=y,s/=256,l-=8);n[t+m-y]|=x*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){const e=ka,t=jl,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=a,n.SlowBuffer=S,n.INSPECT_MAX_BYTES=50;const o=2147483647;n.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const g=new Uint8Array(1),u={foo:function(){return 42}};return Object.setPrototypeOf(u,Uint8Array.prototype),Object.setPrototypeOf(g,u),g.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(g){if(g>o)throw new RangeError('The value "'+g+'" is invalid for option "size"');const u=new Uint8Array(g);return Object.setPrototypeOf(u,a.prototype),u}function a(g,u,d){if(typeof g=="number"){if(typeof u=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(g)}return c(g,u,d)}a.poolSize=8192;function c(g,u,d){if(typeof g=="string")return f(g,u);if(ArrayBuffer.isView(g))return y(g);if(g==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g);if(Zt(g,ArrayBuffer)||g&&Zt(g.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Zt(g,SharedArrayBuffer)||g&&Zt(g.buffer,SharedArrayBuffer)))return x(g,u,d);if(typeof g=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const w=g.valueOf&&g.valueOf();if(w!=null&&w!==g)return a.from(w,u,d);const E=v(g);if(E)return E;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof g[Symbol.toPrimitive]=="function")return a.from(g[Symbol.toPrimitive]("string"),u,d);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g)}a.from=function(g,u,d){return c(g,u,d)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(g){if(typeof g!="number")throw new TypeError('"size" argument must be of type number');if(g<0)throw new RangeError('The value "'+g+'" is invalid for option "size"')}function h(g,u,d){return l(g),g<=0?s(g):u!==void 0?typeof d=="string"?s(g).fill(u,d):s(g).fill(u):s(g)}a.alloc=function(g,u,d){return h(g,u,d)};function p(g){return l(g),s(g<0?0:$(g)|0)}a.allocUnsafe=function(g){return p(g)},a.allocUnsafeSlow=function(g){return p(g)};function f(g,u){if((typeof u!="string"||u==="")&&(u="utf8"),!a.isEncoding(u))throw new TypeError("Unknown encoding: "+u);const d=I(g,u)|0;let w=s(d);const E=w.write(g,u);return E!==d&&(w=w.slice(0,E)),w}function m(g){const u=g.length<0?0:$(g.length)|0,d=s(u);for(let w=0;w<u;w+=1)d[w]=g[w]&255;return d}function y(g){if(Zt(g,Uint8Array)){const u=new Uint8Array(g);return x(u.buffer,u.byteOffset,u.byteLength)}return m(g)}function x(g,u,d){if(u<0||g.byteLength<u)throw new RangeError('"offset" is outside of buffer bounds');if(g.byteLength<u+(d||0))throw new RangeError('"length" is outside of buffer bounds');let w;return u===void 0&&d===void 0?w=new Uint8Array(g):d===void 0?w=new Uint8Array(g,u):w=new Uint8Array(g,u,d),Object.setPrototypeOf(w,a.prototype),w}function v(g){if(a.isBuffer(g)){const u=$(g.length)|0,d=s(u);return d.length===0||g.copy(d,0,0,u),d}if(g.length!==void 0)return typeof g.length!="number"||La(g.length)?s(0):m(g);if(g.type==="Buffer"&&Array.isArray(g.data))return m(g.data)}function $(g){if(g>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return g|0}function S(g){return+g!=g&&(g=0),a.alloc(+g)}a.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==a.prototype},a.compare=function(u,d){if(Zt(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),Zt(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(u)||!a.isBuffer(d))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===d)return 0;let w=u.length,E=d.length;for(let T=0,P=Math.min(w,E);T<P;++T)if(u[T]!==d[T]){w=u[T],E=d[T];break}return w<E?-1:E<w?1:0},a.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(u,d){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return a.alloc(0);let w;if(d===void 0)for(d=0,w=0;w<u.length;++w)d+=u[w].length;const E=a.allocUnsafe(d);let T=0;for(w=0;w<u.length;++w){let P=u[w];if(Zt(P,Uint8Array))T+P.length>E.length?(a.isBuffer(P)||(P=a.from(P)),P.copy(E,T)):Uint8Array.prototype.set.call(E,P,T);else if(a.isBuffer(P))P.copy(E,T);else throw new TypeError('"list" argument must be an Array of Buffers');T+=P.length}return E};function I(g,u){if(a.isBuffer(g))return g.length;if(ArrayBuffer.isView(g)||Zt(g,ArrayBuffer))return g.byteLength;if(typeof g!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof g);const d=g.length,w=arguments.length>2&&arguments[2]===!0;if(!w&&d===0)return 0;let E=!1;for(;;)switch(u){case"ascii":case"latin1":case"binary":return d;case"utf8":case"utf-8":return Ma(g).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d*2;case"hex":return d>>>1;case"base64":return Wl(g).length;default:if(E)return w?-1:Ma(g).length;u=(""+u).toLowerCase(),E=!0}}a.byteLength=I;function _(g,u,d){let w=!1;if((u===void 0||u<0)&&(u=0),u>this.length||((d===void 0||d>this.length)&&(d=this.length),d<=0)||(d>>>=0,u>>>=0,d<=u))return"";for(g||(g="utf8");;)switch(g){case"hex":return ce(this,u,d);case"utf8":case"utf-8":return X(this,u,d);case"ascii":return J(this,u,d);case"latin1":case"binary":return z(this,u,d);case"base64":return ye(this,u,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,u,d);default:if(w)throw new TypeError("Unknown encoding: "+g);g=(g+"").toLowerCase(),w=!0}}a.prototype._isBuffer=!0;function A(g,u,d){const w=g[u];g[u]=g[d],g[d]=w}a.prototype.swap16=function(){const u=this.length;if(u%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let d=0;d<u;d+=2)A(this,d,d+1);return this},a.prototype.swap32=function(){const u=this.length;if(u%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let d=0;d<u;d+=4)A(this,d,d+3),A(this,d+1,d+2);return this},a.prototype.swap64=function(){const u=this.length;if(u%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let d=0;d<u;d+=8)A(this,d,d+7),A(this,d+1,d+6),A(this,d+2,d+5),A(this,d+3,d+4);return this},a.prototype.toString=function(){const u=this.length;return u===0?"":arguments.length===0?X(this,0,u):_.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(u){if(!a.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u?!0:a.compare(this,u)===0},a.prototype.inspect=function(){let u="";const d=n.INSPECT_MAX_BYTES;return u=this.toString("hex",0,d).replace(/(.{2})/g,"$1 ").trim(),this.length>d&&(u+=" ... "),"<Buffer "+u+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(u,d,w,E,T){if(Zt(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(d===void 0&&(d=0),w===void 0&&(w=u?u.length:0),E===void 0&&(E=0),T===void 0&&(T=this.length),d<0||w>u.length||E<0||T>this.length)throw new RangeError("out of range index");if(E>=T&&d>=w)return 0;if(E>=T)return-1;if(d>=w)return 1;if(d>>>=0,w>>>=0,E>>>=0,T>>>=0,this===u)return 0;let P=T-E,we=w-d;const Me=Math.min(P,we),Re=this.slice(E,T),Le=u.slice(d,w);for(let Se=0;Se<Me;++Se)if(Re[Se]!==Le[Se]){P=Re[Se],we=Le[Se];break}return P<we?-1:we<P?1:0};function O(g,u,d,w,E){if(g.length===0)return-1;if(typeof d=="string"?(w=d,d=0):d>2147483647?d=2147483647:d<-2147483648&&(d=-2147483648),d=+d,La(d)&&(d=E?0:g.length-1),d<0&&(d=g.length+d),d>=g.length){if(E)return-1;d=g.length-1}else if(d<0)if(E)d=0;else return-1;if(typeof u=="string"&&(u=a.from(u,w)),a.isBuffer(u))return u.length===0?-1:F(g,u,d,w,E);if(typeof u=="number")return u=u&255,typeof Uint8Array.prototype.indexOf=="function"?E?Uint8Array.prototype.indexOf.call(g,u,d):Uint8Array.prototype.lastIndexOf.call(g,u,d):F(g,[u],d,w,E);throw new TypeError("val must be string, number or Buffer")}function F(g,u,d,w,E){let T=1,P=g.length,we=u.length;if(w!==void 0&&(w=String(w).toLowerCase(),w==="ucs2"||w==="ucs-2"||w==="utf16le"||w==="utf-16le")){if(g.length<2||u.length<2)return-1;T=2,P/=2,we/=2,d/=2}function Me(Le,Se){return T===1?Le[Se]:Le.readUInt16BE(Se*T)}let Re;if(E){let Le=-1;for(Re=d;Re<P;Re++)if(Me(g,Re)===Me(u,Le===-1?0:Re-Le)){if(Le===-1&&(Le=Re),Re-Le+1===we)return Le*T}else Le!==-1&&(Re-=Re-Le),Le=-1}else for(d+we>P&&(d=P-we),Re=d;Re>=0;Re--){let Le=!0;for(let Se=0;Se<we;Se++)if(Me(g,Re+Se)!==Me(u,Se)){Le=!1;break}if(Le)return Re}return-1}a.prototype.includes=function(u,d,w){return this.indexOf(u,d,w)!==-1},a.prototype.indexOf=function(u,d,w){return O(this,u,d,w,!0)},a.prototype.lastIndexOf=function(u,d,w){return O(this,u,d,w,!1)};function Q(g,u,d,w){d=Number(d)||0;const E=g.length-d;w?(w=Number(w),w>E&&(w=E)):w=E;const T=u.length;w>T/2&&(w=T/2);let P;for(P=0;P<w;++P){const we=parseInt(u.substr(P*2,2),16);if(La(we))return P;g[d+P]=we}return P}function Y(g,u,d,w){return es(Ma(u,g.length-d),g,d,w)}function D(g,u,d,w){return es(Fh(u),g,d,w)}function U(g,u,d,w){return es(Wl(u),g,d,w)}function ae(g,u,d,w){return es(Hh(u,g.length-d),g,d,w)}a.prototype.write=function(u,d,w,E){if(d===void 0)E="utf8",w=this.length,d=0;else if(w===void 0&&typeof d=="string")E=d,w=this.length,d=0;else if(isFinite(d))d=d>>>0,isFinite(w)?(w=w>>>0,E===void 0&&(E="utf8")):(E=w,w=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const T=this.length-d;if((w===void 0||w>T)&&(w=T),u.length>0&&(w<0||d<0)||d>this.length)throw new RangeError("Attempt to write outside buffer bounds");E||(E="utf8");let P=!1;for(;;)switch(E){case"hex":return Q(this,u,d,w);case"utf8":case"utf-8":return Y(this,u,d,w);case"ascii":case"latin1":case"binary":return D(this,u,d,w);case"base64":return U(this,u,d,w);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ae(this,u,d,w);default:if(P)throw new TypeError("Unknown encoding: "+E);E=(""+E).toLowerCase(),P=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ye(g,u,d){return u===0&&d===g.length?e.fromByteArray(g):e.fromByteArray(g.slice(u,d))}function X(g,u,d){d=Math.min(g.length,d);const w=[];let E=u;for(;E<d;){const T=g[E];let P=null,we=T>239?4:T>223?3:T>191?2:1;if(E+we<=d){let Me,Re,Le,Se;switch(we){case 1:T<128&&(P=T);break;case 2:Me=g[E+1],(Me&192)===128&&(Se=(T&31)<<6|Me&63,Se>127&&(P=Se));break;case 3:Me=g[E+1],Re=g[E+2],(Me&192)===128&&(Re&192)===128&&(Se=(T&15)<<12|(Me&63)<<6|Re&63,Se>2047&&(Se<55296||Se>57343)&&(P=Se));break;case 4:Me=g[E+1],Re=g[E+2],Le=g[E+3],(Me&192)===128&&(Re&192)===128&&(Le&192)===128&&(Se=(T&15)<<18|(Me&63)<<12|(Re&63)<<6|Le&63,Se>65535&&Se<1114112&&(P=Se))}}P===null?(P=65533,we=1):P>65535&&(P-=65536,w.push(P>>>10&1023|55296),P=56320|P&1023),w.push(P),E+=we}return N(w)}const B=4096;function N(g){const u=g.length;if(u<=B)return String.fromCharCode.apply(String,g);let d="",w=0;for(;w<u;)d+=String.fromCharCode.apply(String,g.slice(w,w+=B));return d}function J(g,u,d){let w="";d=Math.min(g.length,d);for(let E=u;E<d;++E)w+=String.fromCharCode(g[E]&127);return w}function z(g,u,d){let w="";d=Math.min(g.length,d);for(let E=u;E<d;++E)w+=String.fromCharCode(g[E]);return w}function ce(g,u,d){const w=g.length;(!u||u<0)&&(u=0),(!d||d<0||d>w)&&(d=w);let E="";for(let T=u;T<d;++T)E+=Zh[g[T]];return E}function oe(g,u,d){const w=g.slice(u,d);let E="";for(let T=0;T<w.length-1;T+=2)E+=String.fromCharCode(w[T]+w[T+1]*256);return E}a.prototype.slice=function(u,d){const w=this.length;u=~~u,d=d===void 0?w:~~d,u<0?(u+=w,u<0&&(u=0)):u>w&&(u=w),d<0?(d+=w,d<0&&(d=0)):d>w&&(d=w),d<u&&(d=u);const E=this.subarray(u,d);return Object.setPrototypeOf(E,a.prototype),E};function se(g,u,d){if(g%1!==0||g<0)throw new RangeError("offset is not uint");if(g+u>d)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(u,d,w){u=u>>>0,d=d>>>0,w||se(u,d,this.length);let E=this[u],T=1,P=0;for(;++P<d&&(T*=256);)E+=this[u+P]*T;return E},a.prototype.readUintBE=a.prototype.readUIntBE=function(u,d,w){u=u>>>0,d=d>>>0,w||se(u,d,this.length);let E=this[u+--d],T=1;for(;d>0&&(T*=256);)E+=this[u+--d]*T;return E},a.prototype.readUint8=a.prototype.readUInt8=function(u,d){return u=u>>>0,d||se(u,1,this.length),this[u]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(u,d){return u=u>>>0,d||se(u,2,this.length),this[u]|this[u+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(u,d){return u=u>>>0,d||se(u,2,this.length),this[u]<<8|this[u+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(u,d){return u=u>>>0,d||se(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+this[u+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(u,d){return u=u>>>0,d||se(u,4,this.length),this[u]*16777216+(this[u+1]<<16|this[u+2]<<8|this[u+3])},a.prototype.readBigUInt64LE=Cn(function(u){u=u>>>0,At(u,"offset");const d=this[u],w=this[u+7];(d===void 0||w===void 0)&&Pi(u,this.length-8);const E=d+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24,T=this[++u]+this[++u]*2**8+this[++u]*2**16+w*2**24;return BigInt(E)+(BigInt(T)<<BigInt(32))}),a.prototype.readBigUInt64BE=Cn(function(u){u=u>>>0,At(u,"offset");const d=this[u],w=this[u+7];(d===void 0||w===void 0)&&Pi(u,this.length-8);const E=d*2**24+this[++u]*2**16+this[++u]*2**8+this[++u],T=this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+w;return(BigInt(E)<<BigInt(32))+BigInt(T)}),a.prototype.readIntLE=function(u,d,w){u=u>>>0,d=d>>>0,w||se(u,d,this.length);let E=this[u],T=1,P=0;for(;++P<d&&(T*=256);)E+=this[u+P]*T;return T*=128,E>=T&&(E-=Math.pow(2,8*d)),E},a.prototype.readIntBE=function(u,d,w){u=u>>>0,d=d>>>0,w||se(u,d,this.length);let E=d,T=1,P=this[u+--E];for(;E>0&&(T*=256);)P+=this[u+--E]*T;return T*=128,P>=T&&(P-=Math.pow(2,8*d)),P},a.prototype.readInt8=function(u,d){return u=u>>>0,d||se(u,1,this.length),this[u]&128?(255-this[u]+1)*-1:this[u]},a.prototype.readInt16LE=function(u,d){u=u>>>0,d||se(u,2,this.length);const w=this[u]|this[u+1]<<8;return w&32768?w|4294901760:w},a.prototype.readInt16BE=function(u,d){u=u>>>0,d||se(u,2,this.length);const w=this[u+1]|this[u]<<8;return w&32768?w|4294901760:w},a.prototype.readInt32LE=function(u,d){return u=u>>>0,d||se(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},a.prototype.readInt32BE=function(u,d){return u=u>>>0,d||se(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},a.prototype.readBigInt64LE=Cn(function(u){u=u>>>0,At(u,"offset");const d=this[u],w=this[u+7];(d===void 0||w===void 0)&&Pi(u,this.length-8);const E=this[u+4]+this[u+5]*2**8+this[u+6]*2**16+(w<<24);return(BigInt(E)<<BigInt(32))+BigInt(d+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24)}),a.prototype.readBigInt64BE=Cn(function(u){u=u>>>0,At(u,"offset");const d=this[u],w=this[u+7];(d===void 0||w===void 0)&&Pi(u,this.length-8);const E=(d<<24)+this[++u]*2**16+this[++u]*2**8+this[++u];return(BigInt(E)<<BigInt(32))+BigInt(this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+w)}),a.prototype.readFloatLE=function(u,d){return u=u>>>0,d||se(u,4,this.length),t.read(this,u,!0,23,4)},a.prototype.readFloatBE=function(u,d){return u=u>>>0,d||se(u,4,this.length),t.read(this,u,!1,23,4)},a.prototype.readDoubleLE=function(u,d){return u=u>>>0,d||se(u,8,this.length),t.read(this,u,!0,52,8)},a.prototype.readDoubleBE=function(u,d){return u=u>>>0,d||se(u,8,this.length),t.read(this,u,!1,52,8)};function pe(g,u,d,w,E,T){if(!a.isBuffer(g))throw new TypeError('"buffer" argument must be a Buffer instance');if(u>E||u<T)throw new RangeError('"value" argument is out of bounds');if(d+w>g.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(u,d,w,E){if(u=+u,d=d>>>0,w=w>>>0,!E){const we=Math.pow(2,8*w)-1;pe(this,u,d,w,we,0)}let T=1,P=0;for(this[d]=u&255;++P<w&&(T*=256);)this[d+P]=u/T&255;return d+w},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(u,d,w,E){if(u=+u,d=d>>>0,w=w>>>0,!E){const we=Math.pow(2,8*w)-1;pe(this,u,d,w,we,0)}let T=w-1,P=1;for(this[d+T]=u&255;--T>=0&&(P*=256);)this[d+T]=u/P&255;return d+w},a.prototype.writeUint8=a.prototype.writeUInt8=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,1,255,0),this[d]=u&255,d+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,2,65535,0),this[d]=u&255,this[d+1]=u>>>8,d+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,2,65535,0),this[d]=u>>>8,this[d+1]=u&255,d+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,4,4294967295,0),this[d+3]=u>>>24,this[d+2]=u>>>16,this[d+1]=u>>>8,this[d]=u&255,d+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,4,4294967295,0),this[d]=u>>>24,this[d+1]=u>>>16,this[d+2]=u>>>8,this[d+3]=u&255,d+4};function Ue(g,u,d,w,E){xn(u,w,E,g,d,7);let T=Number(u&BigInt(4294967295));g[d++]=T,T=T>>8,g[d++]=T,T=T>>8,g[d++]=T,T=T>>8,g[d++]=T;let P=Number(u>>BigInt(32)&BigInt(4294967295));return g[d++]=P,P=P>>8,g[d++]=P,P=P>>8,g[d++]=P,P=P>>8,g[d++]=P,d}function He(g,u,d,w,E){xn(u,w,E,g,d,7);let T=Number(u&BigInt(4294967295));g[d+7]=T,T=T>>8,g[d+6]=T,T=T>>8,g[d+5]=T,T=T>>8,g[d+4]=T;let P=Number(u>>BigInt(32)&BigInt(4294967295));return g[d+3]=P,P=P>>8,g[d+2]=P,P=P>>8,g[d+1]=P,P=P>>8,g[d]=P,d+8}a.prototype.writeBigUInt64LE=Cn(function(u,d=0){return Ue(this,u,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Cn(function(u,d=0){return He(this,u,d,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(u,d,w,E){if(u=+u,d=d>>>0,!E){const Me=Math.pow(2,8*w-1);pe(this,u,d,w,Me-1,-Me)}let T=0,P=1,we=0;for(this[d]=u&255;++T<w&&(P*=256);)u<0&&we===0&&this[d+T-1]!==0&&(we=1),this[d+T]=(u/P>>0)-we&255;return d+w},a.prototype.writeIntBE=function(u,d,w,E){if(u=+u,d=d>>>0,!E){const Me=Math.pow(2,8*w-1);pe(this,u,d,w,Me-1,-Me)}let T=w-1,P=1,we=0;for(this[d+T]=u&255;--T>=0&&(P*=256);)u<0&&we===0&&this[d+T+1]!==0&&(we=1),this[d+T]=(u/P>>0)-we&255;return d+w},a.prototype.writeInt8=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,1,127,-128),u<0&&(u=255+u+1),this[d]=u&255,d+1},a.prototype.writeInt16LE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,2,32767,-32768),this[d]=u&255,this[d+1]=u>>>8,d+2},a.prototype.writeInt16BE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,2,32767,-32768),this[d]=u>>>8,this[d+1]=u&255,d+2},a.prototype.writeInt32LE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,4,2147483647,-2147483648),this[d]=u&255,this[d+1]=u>>>8,this[d+2]=u>>>16,this[d+3]=u>>>24,d+4},a.prototype.writeInt32BE=function(u,d,w){return u=+u,d=d>>>0,w||pe(this,u,d,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[d]=u>>>24,this[d+1]=u>>>16,this[d+2]=u>>>8,this[d+3]=u&255,d+4},a.prototype.writeBigInt64LE=Cn(function(u,d=0){return Ue(this,u,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Cn(function(u,d=0){return He(this,u,d,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Je(g,u,d,w,E,T){if(d+w>g.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("Index out of range")}function an(g,u,d,w,E){return u=+u,d=d>>>0,E||Je(g,u,d,4),t.write(g,u,d,w,23,4),d+4}a.prototype.writeFloatLE=function(u,d,w){return an(this,u,d,!0,w)},a.prototype.writeFloatBE=function(u,d,w){return an(this,u,d,!1,w)};function Ft(g,u,d,w,E){return u=+u,d=d>>>0,E||Je(g,u,d,8),t.write(g,u,d,w,52,8),d+8}a.prototype.writeDoubleLE=function(u,d,w){return Ft(this,u,d,!0,w)},a.prototype.writeDoubleBE=function(u,d,w){return Ft(this,u,d,!1,w)},a.prototype.copy=function(u,d,w,E){if(!a.isBuffer(u))throw new TypeError("argument should be a Buffer");if(w||(w=0),!E&&E!==0&&(E=this.length),d>=u.length&&(d=u.length),d||(d=0),E>0&&E<w&&(E=w),E===w||u.length===0||this.length===0)return 0;if(d<0)throw new RangeError("targetStart out of bounds");if(w<0||w>=this.length)throw new RangeError("Index out of range");if(E<0)throw new RangeError("sourceEnd out of bounds");E>this.length&&(E=this.length),u.length-d<E-w&&(E=u.length-d+w);const T=E-w;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(d,w,E):Uint8Array.prototype.set.call(u,this.subarray(w,E),d),T},a.prototype.fill=function(u,d,w,E){if(typeof u=="string"){if(typeof d=="string"?(E=d,d=0,w=this.length):typeof w=="string"&&(E=w,w=this.length),E!==void 0&&typeof E!="string")throw new TypeError("encoding must be a string");if(typeof E=="string"&&!a.isEncoding(E))throw new TypeError("Unknown encoding: "+E);if(u.length===1){const P=u.charCodeAt(0);(E==="utf8"&&P<128||E==="latin1")&&(u=P)}}else typeof u=="number"?u=u&255:typeof u=="boolean"&&(u=Number(u));if(d<0||this.length<d||this.length<w)throw new RangeError("Out of range index");if(w<=d)return this;d=d>>>0,w=w===void 0?this.length:w>>>0,u||(u=0);let T;if(typeof u=="number")for(T=d;T<w;++T)this[T]=u;else{const P=a.isBuffer(u)?u:a.from(u,E),we=P.length;if(we===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(T=0;T<w-d;++T)this[T+d]=P[T%we]}return this};const vt={};function St(g,u,d){vt[g]=class extends d{constructor(){super(),Object.defineProperty(this,"message",{value:u.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${g}]`,this.stack,delete this.name}get code(){return g}set code(E){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:E,writable:!0})}toString(){return`${this.name} [${g}]: ${this.message}`}}}St("ERR_BUFFER_OUT_OF_BOUNDS",function(g){return g?`${g} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),St("ERR_INVALID_ARG_TYPE",function(g,u){return`The "${g}" argument must be of type number. Received type ${typeof u}`},TypeError),St("ERR_OUT_OF_RANGE",function(g,u,d){let w=`The value of "${g}" is out of range.`,E=d;return Number.isInteger(d)&&Math.abs(d)>2**32?E=qe(String(d)):typeof d=="bigint"&&(E=String(d),(d>BigInt(2)**BigInt(32)||d<-(BigInt(2)**BigInt(32)))&&(E=qe(E)),E+="n"),w+=` It must be ${u}. Received ${E}`,w},RangeError);function qe(g){let u="",d=g.length;const w=g[0]==="-"?1:0;for(;d>=w+4;d-=3)u=`_${g.slice(d-3,d)}${u}`;return`${g.slice(0,d)}${u}`}function Ht(g,u,d){At(u,"offset"),(g[u]===void 0||g[u+d]===void 0)&&Pi(u,g.length-(d+1))}function xn(g,u,d,w,E,T){if(g>d||g<u){const P=typeof u=="bigint"?"n":"";let we;throw u===0||u===BigInt(0)?we=`>= 0${P} and < 2${P} ** ${(T+1)*8}${P}`:we=`>= -(2${P} ** ${(T+1)*8-1}${P}) and < 2 ** ${(T+1)*8-1}${P}`,new vt.ERR_OUT_OF_RANGE("value",we,g)}Ht(w,E,T)}function At(g,u){if(typeof g!="number")throw new vt.ERR_INVALID_ARG_TYPE(u,"number",g)}function Pi(g,u,d){throw Math.floor(g)!==g?(At(g,d),new vt.ERR_OUT_OF_RANGE("offset","an integer",g)):u<0?new vt.ERR_BUFFER_OUT_OF_BOUNDS:new vt.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${u}`,g)}const Wh=/[^+/0-9A-Za-z-_]/g;function zh(g){if(g=g.split("=")[0],g=g.trim().replace(Wh,""),g.length<2)return"";for(;g.length%4!==0;)g=g+"=";return g}function Ma(g,u){u=u||1/0;let d;const w=g.length;let E=null;const T=[];for(let P=0;P<w;++P){if(d=g.charCodeAt(P),d>55295&&d<57344){if(!E){if(d>56319){(u-=3)>-1&&T.push(239,191,189);continue}else if(P+1===w){(u-=3)>-1&&T.push(239,191,189);continue}E=d;continue}if(d<56320){(u-=3)>-1&&T.push(239,191,189),E=d;continue}d=(E-55296<<10|d-56320)+65536}else E&&(u-=3)>-1&&T.push(239,191,189);if(E=null,d<128){if((u-=1)<0)break;T.push(d)}else if(d<2048){if((u-=2)<0)break;T.push(d>>6|192,d&63|128)}else if(d<65536){if((u-=3)<0)break;T.push(d>>12|224,d>>6&63|128,d&63|128)}else if(d<1114112){if((u-=4)<0)break;T.push(d>>18|240,d>>12&63|128,d>>6&63|128,d&63|128)}else throw new Error("Invalid code point")}return T}function Fh(g){const u=[];for(let d=0;d<g.length;++d)u.push(g.charCodeAt(d)&255);return u}function Hh(g,u){let d,w,E;const T=[];for(let P=0;P<g.length&&!((u-=2)<0);++P)d=g.charCodeAt(P),w=d>>8,E=d%256,T.push(E),T.push(w);return T}function Wl(g){return e.toByteArray(zh(g))}function es(g,u,d,w){let E;for(E=0;E<w&&!(E+d>=u.length||E>=g.length);++E)u[E+d]=g[E];return E}function Zt(g,u){return g instanceof u||g!=null&&g.constructor!=null&&g.constructor.name!=null&&g.constructor.name===u.name}function La(g){return g!==g}const Zh=function(){const g="0123456789abcdef",u=new Array(256);for(let d=0;d<16;++d){const w=d*16;for(let E=0;E<16;++E)u[w+E]=g[d]+g[E]}return u}();function Cn(g){return typeof BigInt>"u"?Vh:g}function Vh(){throw new Error("BigInt not supported")}})(Lh);var dd;typeof window<"u"&&(window.Buffer||(window.Buffer=Lh.Buffer),window.global||(window.global=window),window.process||(window.process={}),(dd=window.process)!=null&&dd.env||(window.process={env:{}}));Na.type="coinbaseWallet";function Na(n={}){return n.version==="3"||n.headlessMode?d5(n):u5(n)}function u5(n){let e,t,r,o,i;return s=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:Na.type,async connect({chainId:a}={}){try{const c=await this.getProvider(),l=(await c.request({method:"eth_requestAccounts"})).map(p=>et(p));r||(r=this.onAccountsChanged.bind(this),c.on("accountsChanged",r)),o||(o=this.onChainChanged.bind(this),c.on("chainChanged",o)),i||(i=this.onDisconnect.bind(this),c.on("disconnect",i));let h=await this.getChainId();if(a&&h!==a){const p=await this.switchChain({chainId:a}).catch(f=>{if(f.code===Te.code)throw f;return{id:h}});h=(p==null?void 0:p.id)??h}return{accounts:l,chainId:h}}catch(c){throw/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(c.message)?new Te(c):c}},async disconnect(){var c;const a=await this.getProvider();r&&(a.removeListener("accountsChanged",r),r=void 0),o&&(a.removeListener("chainChanged",o),o=void 0),i&&(a.removeListener("disconnect",i),i=void 0),a.disconnect(),(c=a.close)==null||c.call(a)},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(c=>et(c))},async getChainId(){const c=await(await this.getProvider()).request({method:"eth_chainId"});return Number(c)},async getProvider(){if(!t){const a=await(async()=>{const{default:c}=await Xr(()=>import("./index-BRiHVxG9.js").then(l=>l.i),__vite__mapDeps([0,1,2]));return typeof c!="function"&&typeof c.default=="function"?c.default:c})();e=new a({...n,appChainIds:s.chains.map(c=>c.id)}),t=e.makeWeb3Provider({...n,options:n.preference??"all"})}return t},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:a,chainId:c}){var p,f,m,y;const l=s.chains.find(x=>x.id===c);if(!l)throw new ct(new fr);const h=await this.getProvider();try{return await h.request({method:"wallet_switchEthereumChain",params:[{chainId:Ae(l.id)}]}),l}catch(x){if(x.code===4902)try{let v;a!=null&&a.blockExplorerUrls?v=a.blockExplorerUrls:v=(p=l.blockExplorers)!=null&&p.default.url?[(f=l.blockExplorers)==null?void 0:f.default.url]:[];let $;(m=a==null?void 0:a.rpcUrls)!=null&&m.length?$=a.rpcUrls:$=[((y=l.rpcUrls.default)==null?void 0:y.http[0])??""];const S={blockExplorerUrls:v,chainId:Ae(c),chainName:(a==null?void 0:a.chainName)??l.name,iconUrls:a==null?void 0:a.iconUrls,nativeCurrency:(a==null?void 0:a.nativeCurrency)??l.nativeCurrency,rpcUrls:$};return await h.request({method:"wallet_addEthereumChain",params:[S]}),l}catch(v){throw new Te(v)}throw new ct(x)}},onAccountsChanged(a){a.length===0?this.onDisconnect():s.emitter.emit("change",{accounts:a.map(c=>et(c))})},onChainChanged(a){const c=Number(a);s.emitter.emit("change",{chainId:c})},async onDisconnect(a){s.emitter.emit("disconnect");const c=await this.getProvider();r&&(c.removeListener("accountsChanged",r),r=void 0),o&&(c.removeListener("chainChanged",o),o=void 0),i&&(c.removeListener("disconnect",i),i=void 0)}})}function d5(n){let t,r,o,i,s;return a=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:Na.type,async connect({chainId:c}={}){try{const l=await this.getProvider(),h=(await l.request({method:"eth_requestAccounts"})).map(f=>et(f));o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)),i||(i=this.onChainChanged.bind(this),l.on("chainChanged",i)),s||(s=this.onDisconnect.bind(this),l.on("disconnect",s));let p=await this.getChainId();if(c&&p!==c){const f=await this.switchChain({chainId:c}).catch(m=>{if(m.code===Te.code)throw m;return{id:p}});p=(f==null?void 0:f.id)??p}return{accounts:h,chainId:p}}catch(l){throw/(user closed modal|accounts received is empty|user denied account)/i.test(l.message)?new Te(l):l}},async disconnect(){const c=await this.getProvider();o&&(c.removeListener("accountsChanged",o),o=void 0),i&&(c.removeListener("chainChanged",i),i=void 0),s&&(c.removeListener("disconnect",s),s=void 0),c.disconnect(),c.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(l=>et(l))},async getChainId(){const l=await(await this.getProvider()).request({method:"eth_chainId"});return Number(l)},async getProvider(){var c;if(!r){const l=await(async()=>{const{default:y}=await Xr(()=>import("./index-B1kJlHKY.js").then(x=>x.i),__vite__mapDeps([3,2,1]));return typeof y!="function"&&typeof y.default=="function"?y.default:y})();t=new l({reloadOnDisconnect:!1,...n});const h=(c=t.walletExtension)==null?void 0:c.getChainId(),p=a.chains.find(y=>n.chainId?y.id===n.chainId:y.id===h)||a.chains[0],f=n.chainId||(p==null?void 0:p.id),m=n.jsonRpcUrl||(p==null?void 0:p.rpcUrls.default.http[0]);r=t.makeWeb3Provider(m,f)}return r},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:c,chainId:l}){var f,m,y,x;const h=a.chains.find(v=>v.id===l);if(!h)throw new ct(new fr);const p=await this.getProvider();try{return await p.request({method:"wallet_switchEthereumChain",params:[{chainId:Ae(h.id)}]}),h}catch(v){if(v.code===4902)try{let $;c!=null&&c.blockExplorerUrls?$=c.blockExplorerUrls:$=(f=h.blockExplorers)!=null&&f.default.url?[(m=h.blockExplorers)==null?void 0:m.default.url]:[];let S;(y=c==null?void 0:c.rpcUrls)!=null&&y.length?S=c.rpcUrls:S=[((x=h.rpcUrls.default)==null?void 0:x.http[0])??""];const I={blockExplorerUrls:$,chainId:Ae(l),chainName:(c==null?void 0:c.chainName)??h.name,iconUrls:c==null?void 0:c.iconUrls,nativeCurrency:(c==null?void 0:c.nativeCurrency)??h.nativeCurrency,rpcUrls:S};return await p.request({method:"wallet_addEthereumChain",params:[I]}),h}catch($){throw new Te($)}throw new ct(v)}},onAccountsChanged(c){c.length===0?this.onDisconnect():a.emitter.emit("change",{accounts:c.map(l=>et(l))})},onChainChanged(c){const l=Number(c);a.emitter.emit("change",{chainId:l})},async onDisconnect(c){a.emitter.emit("disconnect");const l=await this.getProvider();o&&(l.removeListener("accountsChanged",o),o=void 0),i&&(l.removeListener("chainChanged",i),i=void 0),s&&(l.removeListener("disconnect",s),s=void 0)}})}Bl.type="walletConnect";function Bl(n){const e=n.isNewChainsStale??!0;let t,r;const o="eip155";let i,s,a,c,l,h;return p=>({id:"walletConnect",name:"WalletConnect",type:Bl.type,async setup(){const f=await this.getProvider().catch(()=>null);f&&(a||(a=this.onConnect.bind(this),f.on("connect",a)),l||(l=this.onSessionDelete.bind(this),f.on("session_delete",l)))},async connect({chainId:f,...m}={}){var y,x;try{const v=await this.getProvider();if(!v)throw new En;c||(c=this.onDisplayUri,v.on("display_uri",c));let $=f;if(!$){const A=await((y=p.storage)==null?void 0:y.getItem("state"))??{};p.chains.some(F=>F.id===A.chainId)?$=A.chainId:$=(x=p.chains[0])==null?void 0:x.id}if(!$)throw new Error("No chains found on connector.");const S=await this.isChainsStale();if(v.session&&S&&await v.disconnect(),!v.session||S){const A=p.chains.filter(O=>O.id!==$).map(O=>O.id);await v.connect({optionalChains:[$,...A],..."pairingTopic"in m?{pairingTopic:m.pairingTopic}:{}}),this.setRequestedChainsIds(p.chains.map(O=>O.id))}const I=(await v.enable()).map(A=>et(A)),_=await this.getChainId();return c&&(v.removeListener("display_uri",c),c=void 0),a&&(v.removeListener("connect",a),a=void 0),i||(i=this.onAccountsChanged.bind(this),v.on("accountsChanged",i)),s||(s=this.onChainChanged.bind(this),v.on("chainChanged",s)),h||(h=this.onDisconnect.bind(this),v.on("disconnect",h)),l||(l=this.onSessionDelete.bind(this),v.on("session_delete",l)),{accounts:I,chainId:_}}catch(v){throw/(user rejected|connection request reset)/i.test(v==null?void 0:v.message)?new Te(v):v}},async disconnect(){const f=await this.getProvider();try{await(f==null?void 0:f.disconnect())}catch(m){if(!/No matching key/i.test(m.message))throw m}finally{s&&(f==null||f.removeListener("chainChanged",s),s=void 0),h&&(f==null||f.removeListener("disconnect",h),h=void 0),a||(a=this.onConnect.bind(this),f==null||f.on("connect",a)),i&&(f==null||f.removeListener("accountsChanged",i),i=void 0),l&&(f==null||f.removeListener("session_delete",l),l=void 0),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(m=>et(m))},async getProvider({chainId:f}={}){var y;async function m(){const x=p.chains.map($=>$.id);if(!x.length)return;const{EthereumProvider:v}=await Xr(()=>import("./index.es-mguM07ao.js"),__vite__mapDeps([4,2]));return await v.init({...n,disableProviderPing:!0,optionalChains:x,projectId:n.projectId,rpcMap:Object.fromEntries(p.chains.map($=>[$.id,$.rpcUrls.default.http[0]])),showQrModal:n.showQrModal??!0})}return t||(r||(r=m()),t=await r,t==null||t.events.setMaxListeners(Number.POSITIVE_INFINITY)),f&&await((y=this.switchChain)==null?void 0:y.call(this,{chainId:f})),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[f,m]=await Promise.all([this.getAccounts(),this.getProvider()]);return f.length?await this.isChainsStale()&&m.session?(await m.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({addEthereumChainParameter:f,chainId:m}){var v,$,S;const y=await this.getProvider();if(!y)throw new En;const x=p.chains.find(I=>I.id===m);if(!x)throw new ct(new fr);try{await Promise.all([new Promise(_=>{const A=({chainId:O})=>{O===m&&(p.emitter.off("change",A),_())};p.emitter.on("change",A)}),y.request({method:"wallet_switchEthereumChain",params:[{chainId:Ae(m)}]})]);const I=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...I,m]),x}catch(I){const _=I;if(/(user rejected)/i.test(_.message))throw new Te(_);try{let A;f!=null&&f.blockExplorerUrls?A=f.blockExplorerUrls:A=(v=x.blockExplorers)!=null&&v.default.url?[($=x.blockExplorers)==null?void 0:$.default.url]:[];let O;(S=f==null?void 0:f.rpcUrls)!=null&&S.length?O=f.rpcUrls:O=[...x.rpcUrls.default.http];const F={blockExplorerUrls:A,chainId:Ae(m),chainName:(f==null?void 0:f.chainName)??x.name,iconUrls:f==null?void 0:f.iconUrls,nativeCurrency:(f==null?void 0:f.nativeCurrency)??x.nativeCurrency,rpcUrls:O};await y.request({method:"wallet_addEthereumChain",params:[F]});const Q=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...Q,m]),x}catch(A){throw new Te(A)}}},onAccountsChanged(f){f.length===0?this.onDisconnect():p.emitter.emit("change",{accounts:f.map(m=>et(m))})},onChainChanged(f){const m=Number(f);p.emitter.emit("change",{chainId:m})},async onConnect(f){const m=Number(f.chainId),y=await this.getAccounts();p.emitter.emit("connect",{accounts:y,chainId:m})},async onDisconnect(f){this.setRequestedChainsIds([]),p.emitter.emit("disconnect");const m=await this.getProvider();i&&(m.removeListener("accountsChanged",i),i=void 0),s&&(m.removeListener("chainChanged",s),s=void 0),h&&(m.removeListener("disconnect",h),h=void 0),l&&(m.removeListener("session_delete",l),l=void 0),a||(a=this.onConnect.bind(this),m.on("connect",a))},onDisplayUri(f){p.emitter.emit("message",{type:"display_uri",data:f})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var m,y,x;return t?((x=(y=(m=t.session)==null?void 0:m.namespaces[o])==null?void 0:y.accounts)==null?void 0:x.map(v=>Number.parseInt(v.split(":")[1]||"")))??[]:[]},async getRequestedChainsIds(){var f;return await((f=p.storage)==null?void 0:f.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(!e)return!1;const f=p.chains.map(x=>x.id),m=this.getNamespaceChainsIds();if(m.length&&!m.some(x=>f.includes(x)))return!1;const y=await this.getRequestedChainsIds();return!f.every(x=>y.includes(x))},async setRequestedChainsIds(f){var m;await((m=p.storage)==null?void 0:m.setItem(this.requestedChainsStorageKey,f))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function h5(n){return e=>({id:he.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(t={}){const r=await this.getProvider(),{address:o,chainId:i}=await r.connect({chainId:t.chainId});return{accounts:[o],account:o,chainId:i,chain:{id:i,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},async getAccounts(){const t=await this.getProvider(),{address:r}=await t.connect();return[r]},async getProvider(){return this.provider||(this.provider=new _y(n.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const t=await this.getProvider(),{chainId:r}=await t.getChainId();return r},async isAuthorized(){const t=await this.getProvider(),{isConnected:r}=await t.isConnected();return r},async switchChain({chainId:t}){try{const r=e.chains.find(i=>i.id===t);if(!r)throw new ct(new Error("chain not found on connector."));return await(await this.getProvider()).switchNetwork(t),e.emitter.emit("change",{chainId:Ha(t)}),r}catch(r){throw r instanceof Error?new ct(r):r}},onAccountsChanged(t){t.length===0?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(et)})},onChainChanged(t){const r=Ha(t);e.emitter.emit("change",{chainId:r})},async onConnect(t){const r=Ha(t.chainId),o=await this.getAccounts();e.emitter.emit("connect",{accounts:o,chainId:r})},async onDisconnect(t){await(await this.getProvider()).disconnect()}})}function f5({projectId:n,chains:e,metadata:t,enableInjected:r,enableCoinbase:o,enableEmail:i,enableWalletConnect:s,enableEIP6963:a,...c}){const l=[],h=e.map(f=>[f.id,_g()]),p=Object.fromEntries(h);return s!==!1&&l.push(Bl({projectId:n,metadata:t,showQrModal:!1})),r!==!1&&l.push(aa({shimDisconnect:!0})),o!==!1&&l.push(Na({appName:(t==null?void 0:t.name)??"Unknown",appLogoUrl:(t==null?void 0:t.icons[0])??"Unknown",enableMobileWalletLink:!0})),i===!0&&l.push(h5({chains:[...e],options:{projectId:n}})),om({chains:e,multiInjectedProviderDiscovery:a!==!1,transports:p,...c,connectors:l})}function p5(n){return new t5({...n,_sdkVersion:`html-wagmi-${he.VERSION}`})}const Dh="lucas2024",jh=[Rd,Ff],g5=f5({chains:jh,projectId:Dh,metadata:{name:"Html Example",description:"Html Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]}}),Bh=p5({wagmiConfig:g5,projectId:Dh,chains:jh,themeMode:"light"}),m5=document.getElementById("open-connect-modal"),w5=document.getElementById("open-network-modal");m5.addEventListener("click",()=>Bh.open());w5.addEventListener("click",()=>Bh.open({view:"Networks"}));export{Z as B,Jg as E,zi as H,Ki as I,Xr as _,g0 as a,Pn as b,B1 as c,I1 as d,dr as e,Od as f,Jc as g,_i as h,Dn as i,ra as j,b5 as k,Lh as l,rl as m,Go as n,it as p,bn as s};
