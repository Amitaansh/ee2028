(()=>{var Nc="170";var Bd=0,Sh=1,Hd=2;var Ou=1,zc=2,qn=3,fi=0,Ze=1,Ue=2,Nn=0,ui=1,$t=2,bh=3,Eh=4,kd=5,Pi=100,Vd=101,Gd=102,Wd=103,Xd=104,qd=200,Yd=201,Zd=202,Kd=203,al=204,ll=205,Jd=206,jd=207,Qd=208,$d=209,tf=210,ef=211,nf=212,sf=213,rf=214,cl=0,hl=1,ul=2,ds=3,dl=4,fl=5,pl=6,ml=7,Bu=0,of=1,af=2,di=0,Fc=1,Oc=2,Bc=3,_r=4,lf=5,Hc=6,kc=7;var Hu=300,fs=301,ps=302,gl=303,xl=304,qo=306,rr=1e3,Li=1001,vl=1002,tn=1003,cf=1004;var Dr=1005;var xn=1006,Ea=1007;var Di=1008;var jn=1009,ku=1010,Vu=1011,or=1012,Vc=1013,Ui=1014,Un=1015,en=1016,Gc=1017,Wc=1018,ms=1020,Gu=35902,Wu=1021,Xu=1022,An=1023,qu=1024,Yu=1025,cs=1026,gs=1027,Xc=1028,qc=1029,Zu=1030,Yc=1031;var Zc=1033,fo=33776,po=33777,mo=33778,go=33779,yl=35840,Ml=35841,_l=35842,Sl=35843,bl=36196,El=37492,wl=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,zl=37818,Fl=37819,Ol=37820,Bl=37821,xo=36492,Hl=36494,kl=36495,Ku=36283,Vl=36284,Gl=36285,Wl=36286;var vo=2300,Xl=2301,wa=2302,wh=2400,Th=2401,Ah=2402;var hf=3200,uf=3201;var Ju=0,df=1,ci="",de="srgb",Ps="srgb-linear",Yo="linear",le="srgb";var Vi=7680;var Rh=519,ff=512,pf=513,mf=514,ju=515,gf=516,xf=517,vf=518,yf=519,ql=35044,Oi=35048;var Ch="300 es",Zn=2e3,yo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ta=Math.PI/180,Mo=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Mf(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var J=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],y=s[4],x=s[7],T=s[2],E=s[5],w=s[8];return r[0]=o*v+a*M+l*T,r[3]=o*g+a*y+l*E,r[6]=o*p+a*x+l*w,r[1]=h*v+c*M+d*T,r[4]=h*g+c*y+d*E,r[7]=h*p+c*x+d*w,r[2]=u*v+f*M+m*T,r[5]=u*g+f*y+m*E,r[8]=u*p+f*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(s*h-c*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new Xt;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=_o("canvas");return i.style.display="block",i}var Ph={};function $s(i){i in Ph||(Ph[i]=!0,console.warn(i))}function Sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ef(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ih=[.64,.33,.3,.6,.15,.06],Lh=[.2126,.7152,.0722],Dh=[.3127,.329],Uh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ps]:{primaries:Ih,whitePoint:Dh,transfer:Yo,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:Ih,whitePoint:Dh,transfer:le,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var Gi,Yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=_o("canvas")),Gi.width=t.width,Gi.height=t.height;let n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,So=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tf=0,Ke=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Li,s=Li,r=xn,o=Di,a=An,l=jn,h=i.DEFAULT_ANISOTROPY,c=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Kn(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Hu;Ke.DEFAULT_ANISOTROPY=1;var fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,x=(f+1)/2,T=(p+1)/2,E=(c+u)/4,w=(d+v)/4,C=(m+g)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-v)/M,this.z=(u-c)/M,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bo=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Te=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(d!==v||l!==u||h!==f||c!==m){let g=1-a,p=l*u+h*f+c*m+d*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,p*M);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let x=a*M;if(l=l*g+u*x,h=h*g+f*x,c=c*g+m*x,d=d*g+v*x,g===1-a){let T=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=T,h*=T,c*=T,d*=T}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*d+l*f-h*u,t[e+1]=l*m+c*u+h*d-a*f,t[e+2]=h*m+c*f+a*u-l*d,t[e+3]=c*m-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"YXZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"ZXY":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"ZYX":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"YZX":this._x=u*c*d+h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d-u*f*m;break;case"XZY":this._x=u*c*d-h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*h+o*d-a*c,this.y=n+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new R,zh=new Te,Qn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Nr.subVectors(this.max,Vs),Wi.subVectors(t.a,Vs),Xi.subVectors(t.b,Vs),qi.subVectors(t.c,Vs),ii.subVectors(Xi,Wi),si.subVectors(qi,Xi),bi.subVectors(Wi,qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-bi.z,bi.y,ii.z,0,-ii.x,si.z,0,-si.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!Ia(e,Wi,Xi,qi,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,Wi,Xi,qi,Nr))?!1:(zr.crossVectors(ii,si),e=[zr.x,zr.y,zr.z],Ia(e,Wi,Xi,qi,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new R,new R,new R,new R,new R,new R,new R,new R],En=new R,Ur=new Qn,Wi=new R,Xi=new R,qi=new R,ii=new R,si=new R,bi=new R,Vs=new R,Nr=new R,zr=new R,Ei=new R;function Ia(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),h=e.dot(Ei),c=n.dot(Ei);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Af=new Qn,Gs=new R,La=new R,Je=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(La)),this.expandByPoint(Gs.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new R,Da=new R,Fr=new R,ri=new R,Ua=new R,Or=new R,Na=new R,ar=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=ri.dot(this.direction),l=-ri.dot(Fr),h=ri.lengthSq(),c=Math.abs(1-o*o),d,u,f,m;if(c>0)if(d=o*l-a,u=o*a-l,m=r*c,d>=0)if(u>=-m)if(u<=m){let v=1/c;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Da).addScaledVector(Fr,u),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),Or.subVectors(n,t),Na.crossVectors(Ua,Or);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(Or.crossVectors(ri,Or));if(l<0)return null;let h=a*this.direction.dot(Ua.cross(ri));if(h<0||l+h>o)return null;let c=-a*ri.dot(Na);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class i{constructor(t,e,n,s,r,o,a,l,h,c,d,u,f,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,d,u,f,m,v,g)}set(t,e,n,s,r,o,a,l,h,c,d,u,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,f=o*d,m=a*c,v=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+m*h,e[5]=u-v*h,e[9]=-a*l,e[2]=v-u*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,m=h*c,v=h*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,m=h*c,v=h*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=v-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,f=o*d,m=a*c,v=a*d;e[0]=l*c,e[4]=m*h-f,e[8]=u*h+v,e[1]=l*d,e[5]=v*h+u,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*h,m=a*l,v=a*h;e[0]=l*c,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*h,m=a*l,v=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+v,e[5]=o*c,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*c,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Cf)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),oi.crossVectors(n,dn),oi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),oi.crossVectors(n,dn)),oi.normalize(),Br.crossVectors(dn,oi),s[0]=oi.x,s[4]=Br.x,s[8]=dn.x,s[1]=oi.y,s[5]=Br.y,s[9]=dn.y,s[2]=oi.z,s[6]=Br.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],T=n[15],E=s[0],w=s[4],C=s[8],S=s[12],_=s[1],I=s[5],N=s[9],U=s[13],B=s[2],V=s[6],k=s[10],tt=s[14],X=s[3],ht=s[7],ft=s[11],_t=s[15];return r[0]=o*E+a*_+l*B+h*X,r[4]=o*w+a*I+l*V+h*ht,r[8]=o*C+a*N+l*k+h*ft,r[12]=o*S+a*U+l*tt+h*_t,r[1]=c*E+d*_+u*B+f*X,r[5]=c*w+d*I+u*V+f*ht,r[9]=c*C+d*N+u*k+f*ft,r[13]=c*S+d*U+u*tt+f*_t,r[2]=m*E+v*_+g*B+p*X,r[6]=m*w+v*I+g*V+p*ht,r[10]=m*C+v*N+g*k+p*ft,r[14]=m*S+v*U+g*tt+p*_t,r[3]=M*E+y*_+x*B+T*X,r[7]=M*w+y*I+x*V+T*ht,r[11]=M*C+y*N+x*k+T*ft,r[15]=M*S+y*U+x*tt+T*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*h*d-r*a*u+n*h*u+s*a*f-n*l*f)+v*(+e*l*f-e*h*u+r*o*u-s*o*f+s*h*c-r*l*c)+g*(+e*h*d-e*a*f-r*o*d+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*d+e*a*u+s*o*d-n*o*u+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],M=d*g*h-v*u*h+v*l*f-a*g*f-d*l*p+a*u*p,y=m*u*h-c*g*h-m*l*f+o*g*f+c*l*p-o*u*p,x=c*v*h-m*d*h+m*a*f-o*v*f-c*a*p+o*d*p,T=m*d*l-c*v*l-m*a*u+o*v*u+c*a*g-o*d*g,E=e*M+n*y+s*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=M*w,t[1]=(v*u*r-d*g*r-v*s*f+n*g*f+d*s*p-n*u*p)*w,t[2]=(a*g*r-v*l*r+v*s*h-n*g*h-a*s*p+n*l*p)*w,t[3]=(d*l*r-a*u*r-d*s*h+n*u*h+a*s*f-n*l*f)*w,t[4]=y*w,t[5]=(c*g*r-m*u*r+m*s*f-e*g*f-c*s*p+e*u*p)*w,t[6]=(m*l*r-o*g*r-m*s*h+e*g*h+o*s*p-e*l*p)*w,t[7]=(o*u*r-c*l*r+c*s*h-e*u*h-o*s*f+e*l*f)*w,t[8]=x*w,t[9]=(m*d*r-c*v*r-m*n*f+e*v*f+c*n*p-e*d*p)*w,t[10]=(o*v*r-m*a*r+m*n*h-e*v*h-o*n*p+e*a*p)*w,t[11]=(c*a*r-o*d*r-c*n*h+e*d*h+o*n*f-e*a*f)*w,t[12]=T*w,t[13]=(c*v*s-m*d*s+m*n*u-e*v*u-c*n*g+e*d*g)*w,t[14]=(m*a*s-o*v*s-m*n*l+e*v*l+o*n*g-e*a*g)*w,t[15]=(o*d*s-c*a*s+c*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,m=r*d,v=o*c,g=o*d,p=a*d,M=l*h,y=l*c,x=l*d,T=n.x,E=n.y,w=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+x)*T,s[2]=(m-y)*T,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(u+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+y)*w,s[9]=(g-M)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let h=1/r,c=1/o,d=1/a;return wn.elements[0]*=h,wn.elements[1]*=h,wn.elements[2]*=h,wn.elements[4]*=c,wn.elements[5]*=c,wn.elements[6]*=c,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Zn){let l=this.elements,h=2*r/(e-t),c=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(a===Zn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===yo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn){let l=this.elements,h=1/(e-t),c=1/(n-s),d=1/(o-r),u=(e+t)*h,f=(n+s)*c,m,v;if(a===Zn)m=(o+r)*d,v=-2*d;else if(a===yo)m=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new R,wn=new qt,Rf=new R(0,0,0),Cf=new R(1,1,1),oi=new R,Br=new R,dn=new R,Fh=new qt,Oh=new Te,on=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pf=0,Bh=new R,Zi=new Te,Gn=new qt,Hr=new R,Ws=new R,If=new R,Lf=new Te,Hh=new R(1,0,0),kh=new R(0,1,0),Vh=new R(0,0,1),Gh={type:"added"},Df={type:"removed"},Ki={type:"childadded",child:null},za={type:"childremoved",child:null},Ae=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new on,n=new Te,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Xt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ws,Hr,this.up):Gn.lookAt(Hr,Ws,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,If),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new R,Wn=new R,Fa=new R,Xn=new R,Ji=new R,ji=new R,Wh=new R,Oa=new R,Ba=new R,Ha=new R,ka=new fe,Va=new fe,Ga=new fe,hi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Wn.subVectors(n,e),Fa.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(Wn),l=Tn.dot(Fa),h=Wn.dot(Wn),c=Wn.dot(Fa),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-a*c)*u,m=(o*c-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ka.setScalar(0),Va.setScalar(0),Ga.setScalar(0),ka.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Wn.subVectors(t,e),Tn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Tn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),ji.subVectors(r,n),Oa.subVectors(t,n);let l=Ji.dot(Oa),h=ji.dot(Oa);if(l<=0&&h<=0)return e.copy(n);Ba.subVectors(t,s);let c=Ji.dot(Ba),d=ji.dot(Ba);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Ji,o);Ha.subVectors(t,r);let f=Ji.dot(Ha),m=ji.dot(Ha);if(m>=0&&f<=m)return e.copy(r);let v=f*h-l*m;if(v<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(n).addScaledVector(ji,a);let g=c*m-f*d;if(g<=0&&d-c>=0&&f-m>=0)return Wh.subVectors(r,s),a=(d-c)/(d-c+(f-m)),e.copy(s).addScaledVector(Wh,a);let p=1/(g+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Mf(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Qt.fromWorkingColorSpace($e.copy(this),t),Math.round(Xe($e.r*255,0,255))*65536+Math.round(Xe($e.g*255,0,255))*256+Math.round(Xe($e.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=de){Qt.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(kr);let n=Aa(ai.h,kr.h,e),s=Aa(ai.s,kr.s,e),r=Aa(ai.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ot;ot.NAMES=$u;var Uf=0,zn=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Kn(),this.name="",this.blending=ui,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_e=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new R,Vr=new J,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var wo=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var To=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ot=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nf=0,gn=new qt,Xa=new Ae,Qi=new R,fn=new Qn,Xs=new Qn,We=new R,ie=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?To:wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(fn.min,Xs.min),fn.expandByPoint(We),We.addVectors(fn.max,Xs.max),fn.expandByPoint(We)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)We.fromBufferAttribute(a,h),l&&(Qi.fromBufferAttribute(t,h),We.add(Qi)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;let h=new R,c=new R,d=new R,u=new J,f=new J,m=new J,v=new R,g=new R;function p(C,S,_){h.fromBufferAttribute(n,C),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,_),c.sub(h),d.sub(h),f.sub(u),m.sub(u);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(I),a[C].add(v),a[S].add(v),a[_].add(v),l[C].add(g),l[S].add(g),l[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){let _=M[C],I=_.start,N=_.count;for(let U=I,B=I+N;U<B;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new R,x=new R,T=new R,E=new R;function w(C){T.fromBufferAttribute(s,C),E.copy(T);let S=a[C];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(E,S);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,S=M.length;C<S;++C){let _=M[C],I=_.start,N=_.count;for(let U=I,B=I+N;U<B;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,h=new R,c=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),a.add(c),l.add(c),h.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let p=0;p<c;p++)u[m++]=h[f++]}return new be(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new qt,wi=new ar,Gr=new Je,qh=new R,Wr=new R,Xr=new R,qr=new R,qa=new R,Yr=new R,Yh=new R,Zr=new R,lt=class extends Ae{constructor(t=new ie,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(qa.fromBufferAttribute(d,t),o?Yr.addScaledVector(qa,c):Yr.addScaledVector(qa.sub(e),c))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Gr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Gr,qh)===null||wi.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,T=y;x<T;x+=3){let E=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);s=Kr(this,p,t,n,h,c,d,E,w,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Kr(this,o,t,n,h,c,d,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,T=y;x<T;x+=3){let E=x,w=x+1,C=x+2;s=Kr(this,p,t,n,h,c,d,E,w,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=g,y=g+1,x=g+2;s=Kr(this,o,t,n,h,c,d,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function zf(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===fi,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Zr);return h<e.near||h>e.far?null:{distance:h,point:Zr.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(h,qr);let c=zf(i,t,e,n,Wr,Xr,qr,Yh);if(c){let d=new R;hi.getBarycoord(Yh,Wr,Xr,qr,d),s&&(c.uv=hi.getInterpolatedAttribute(s,a,l,h,d,new J)),r&&(c.uv1=hi.getInterpolatedAttribute(r,a,l,h,d,new J)),o&&(c.normal=hi.getInterpolatedAttribute(o,a,l,h,d,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new R,materialIndex:0};hi.getNormal(Wr,Xr,qr,u.normal),c.face=u,c.barycoord=d}return c}var ge=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(d,2));function m(v,g,p,M,y,x,T,E,w,C,S){let _=x/w,I=T/C,N=x/2,U=T/2,B=E/2,V=w+1,k=C+1,tt=0,X=0,ht=new R;for(let ft=0;ft<k;ft++){let _t=ft*I-U;for(let Nt=0;Nt<V;Nt++){let re=Nt*_-N;ht[v]=re*M,ht[g]=_t*y,ht[p]=B,h.push(ht.x,ht.y,ht.z),ht[v]=0,ht[g]=0,ht[p]=E>0?1:-1,c.push(ht.x,ht.y,ht.z),d.push(Nt/w),d.push(1-ft/C),tt+=1}}for(let ft=0;ft<C;ft++)for(let _t=0;_t<w;_t++){let Nt=u+_t+V*ft,re=u+_t+V*(ft+1),K=u+(_t+1)+V*(ft+1),st=u+(_t+1)+V*ft;l.push(Nt,re,st),l.push(re,K,st),X+=6}a.addGroup(f,X,S),f+=X,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ff(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function td(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Mn={clone:xs,merge:rn},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ao=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new R,Zh=new J,Kh=new J,qe=class extends Ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Kh),e.subVectors(Kh,Zh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,ts=1,Jl=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe($i,ts,t,e);s.layers=this.layers,this.add(s);let r=new qe($i,ts,t,e);r.layers=this.layers,this.add(r);let o=new qe($i,ts,t,e);o.layers=this.layers,this.add(o);let a=new qe($i,ts,t,e);a.layers=this.layers,this.add(a);let l=new qe($i,ts,t,e);l.layers=this.layers,this.add(l);let h=new qe($i,ts,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ro=class extends Ke{constructor(t,e,n,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jl=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Nn});r.uniforms.tEquirect.value=e;let o=new lt(s,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=xn),new Jl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ya=new R,Hf=new R,kf=new Xt,Yn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ya.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kf.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Je,Jr=new R,lr=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],d=s[6],u=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],M=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,u-h,g-f,x-p).normalize(),n[1].setComponents(l+r,u+h,g+f,x+p).normalize(),n[2].setComponents(l+o,u+c,g+m,x+M).normalize(),n[3].setComponents(l-o,u-c,g-m,x-M).normalize(),n[4].setComponents(l-a,u-d,g-v,x-y).normalize(),e===Zn)n[5].setComponents(l+a,u+d,g+v,x+y).normalize();else if(e===yo)n[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){let c=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,c);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];i.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Re=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<c;p++){let M=p*u-o;for(let y=0;y<h;y++){let x=y*d-r;m.push(x,-M,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+h*p,x=M+h*(p+1),T=M+1+h*(p+1),E=M+1+h*p;f.push(y,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:Jf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:$f,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:_p,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:zp,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:Hp,lights_physical_pars_fragment:kp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Kp,map_pars_fragment:Jp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:_m,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:zm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:Hm,worldpos_vertex:km,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:Km,distanceRGBA_vert:Jm,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:$m,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:v0,shadow_frag:y0,sprite_vert:M0,sprite_frag:_0},dt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ln={basic:{uniforms:rn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:rn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:rn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:rn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:rn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:rn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:rn([dt.points,dt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:rn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:rn([dt.common,dt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:rn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:rn([dt.sprite,dt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:rn([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:rn([dt.lights,dt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Ln.physical={uniforms:rn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var jr={r:0,b:0,g:0},Ai=new on,S0=new qt;function b0(i,t,e,n,s,r,o){let a=new ot(0),l=r===!0?0:1,h,c,d=null,u=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function v(M){let y=!1,x=m(M);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){let x=m(y);x&&(x.isCubeTexture||x.mapping===qo)?(c===void 0&&(c=new lt(new ge(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:xs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(Ai)),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==le,(d!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new lt(new Re(2,2),new Kt({name:"BackgroundMaterial",uniforms:xs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,y){M.getRGB(jr,td(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:g}}function E0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,I,N,U,B){let V=!1,k=d(U,N,I);r!==k&&(r=k,h(r.object)),V=f(_,U,N,B),V&&m(_,U,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(_,I,N,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function h(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function d(_,I,N){let U=N.wireframe===!0,B=n[_.id];B===void 0&&(B={},n[_.id]=B);let V=B[I.id];V===void 0&&(V={},B[I.id]=V);let k=V[U];return k===void 0&&(k=u(l()),V[U]=k),k}function u(_){let I=[],N=[],U=[];for(let B=0;B<e;B++)I[B]=0,N[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,I,N,U){let B=r.attributes,V=I.attributes,k=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let ft=B[X],_t=V[X];if(_t===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function m(_,I,N,U){let B={},V=I.attributes,k=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let ft=V[X];ft===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));let _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),B[X]=_t,k++}r.attributes=B,r.attributesNum=k,r.index=U}function v(){let _=r.newAttributes;for(let I=0,N=_.length;I<N;I++)_[I]=0}function g(_){p(_,0)}function p(_,I){let N=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;N[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),B[_]!==I&&(i.vertexAttribDivisor(_,I),B[_]=I)}function M(){let _=r.newAttributes,I=r.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==_[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function y(_,I,N,U,B,V,k){k===!0?i.vertexAttribIPointer(_,I,N,B,V):i.vertexAttribPointer(_,I,N,U,B,V)}function x(_,I,N,U){v();let B=U.attributes,V=N.getAttributes(),k=I.defaultAttributeValues;for(let tt in V){let X=V[tt];if(X.location>=0){let ht=B[tt];if(ht===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){let ft=ht.normalized,_t=ht.itemSize,Nt=t.get(ht);if(Nt===void 0)continue;let re=Nt.buffer,K=Nt.type,st=Nt.bytesPerElement,wt=K===i.INT||K===i.UNSIGNED_INT||ht.gpuType===Vc;if(ht.isInterleavedBufferAttribute){let at=ht.data,Lt=at.stride,Bt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<X.locationSize;zt++)p(X.location+zt,at.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<X.locationSize;zt++)g(X.location+zt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let zt=0;zt<X.locationSize;zt++)y(X.location+zt,_t/X.locationSize,K,ft,Lt*st,(Bt+_t/X.locationSize*zt)*st,wt)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)p(X.location+at,ht.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<X.locationSize;at++)g(X.location+at);i.bindBuffer(i.ARRAY_BUFFER,re);for(let at=0;at<X.locationSize;at++)y(X.location+at,_t/X.locationSize,K,ft,_t*st,_t/X.locationSize*at*st,wt)}}else if(k!==void 0){let ft=k[tt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(X.location,ft);break;case 3:i.vertexAttrib3fv(X.location,ft);break;case 4:i.vertexAttrib4fv(X.location,ft);break;default:i.vertexAttrib1fv(X.location,ft)}}}}M()}function T(){C();for(let _ in n){let I=n[_];for(let N in I){let U=I[N];for(let B in U)c(U[B].object),delete U[B];delete I[N]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let I=n[_.id];for(let N in I){let U=I[N];for(let B in U)c(U[B].object),delete U[B];delete I[N]}delete n[_.id]}function w(_){for(let I in n){let N=n[I];if(N[_.id]===void 0)continue;let U=N[_.id];for(let B in U)c(U[B].object),delete U[B];delete N[_.id]}}function C(){S(),o=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function w0(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,d){d!==0&&(i.drawArraysInstanced(n,h,c,d),e.update(c,n,d))}function a(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,d);let f=0;for(let m=0;m<d;m++)f+=c[m];e.update(f,n,1)}function l(h,c,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],c[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v]*u[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function T0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==An&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Un&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function A0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?c(null):h();else{let M=r?0:n,y=M*4,x=p.clippingState||null;l.value=x,x=c(m,u,y,f);for(let T=0;T!==y;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function R0(i){let t=new WeakMap;function e(o,a){return a===gl?o.mapping=fs:a===xl&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gl||a===xl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new jl(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var vs=class extends Ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},as=4,Jh=[.125,.215,.35,.446,.526,.582],Ii=20,Za=new vs,jh=new ot,Ka=null,Ja=0,ja=0,Qa=!1,Ci=(1+Math.sqrt(5))/2,es=1/Ci,Qh=[new R(-Ci,es,0),new R(Ci,es,0),new R(-es,0,Ci),new R(es,0,Ci),new R(0,Ci,-es),new R(0,Ci,es),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Ja,ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:en,format:An,colorSpace:Ps,depthBuffer:!1},s=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=P0(r,t,e)}return s}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,s){let a=new qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(jh),c.toneMapping=di,c.autoClear=!1;let f=new _e({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),m=new lt(new ge,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(jh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let y=this._cubeSize;Qr(s,M*y,p>2?y:0,y,y),c.setRenderTarget(s),v&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new lt(this._lodPlanes[s],h),u=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),v=r/m,g=isFinite(r)?1+Math.floor(c*v):Ii;g>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);let p=[],M=0;for(let w=0;w<Ii;++w){let C=w/v,S=Math.exp(-C*C/2);p.push(S),w===0?M+=S:w<g&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;let x=this._sizeLods[s],T=3*x*(s>y-as?s-y+as:0),E=4*(this._cubeSize-x);Qr(e,T,E,3*x,2*x),l.setRenderTarget(e),l.render(d,Za)}};function C0(i){let t=[],e=[],n=[],s=i,r=i-as+1+Jh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-as?l=Jh[o-i+as-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,C=E>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(S,v*m*E),y.set(u,g*m*E);let _=[E,E,E,E,E,E];x.set(_,p*m*E)}let T=new ie;T.setAttribute("position",new be(M,v)),T.setAttribute("uv",new be(y,g)),T.setAttribute("faceIndex",new be(x,p)),t.push(T),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function P0(i,t,e){let n=new Float32Array(Ii),s=new R(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function tu(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function eu(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===gl||l===xl,c=l===fs||l===ps;if(h||c){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ys(i)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new ys(i)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let v=u.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],i.ARRAY_BUFFER)}}function h(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let y=0,x=M.length;y<x;y+=3){let T=M[y+0],E=M[y+1],w=M[y+2];u.push(T,E,E,w,w,T)}}else if(m!==void 0){let M=m.array;v=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let T=y+0,E=y+1,w=y+2;u.push(T,E,E,w,w,T)}}else return;let g=new(Qu(u)?To:wo)(u,1);g.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function c(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function U0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function h(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function c(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function N0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){let n=new WeakMap,s=new fe;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*d),w=new bo(E,x,T,d);w.type=Un,w.needsUpdate=!0;let C=y*4;for(let _=0;_<d;_++){let I=g[_],N=p[_],U=M[_],B=x*T*4*_;for(let V=0;V<I.count;V++){let k=V*C;f===!0&&(s.fromBufferAttribute(I,V),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),m===!0&&(s.fromBufferAttribute(N,V),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),v===!0&&(s.fromBufferAttribute(U,V),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new J(x,T)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<h.length;v++)f+=h[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function F0(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,d=t.get(l,c);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Co=class extends Ke{constructor(t,e,n,s,r,o,a,l,h,c=cs){if(c!==cs&&c!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===cs&&(n=Ui),n===void 0&&c===gs&&(n=ms),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nd=new Ke,nu=new Co(1,1),id=new bo,sd=new Kl,rd=new Ro,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),ke(e,n)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),ke(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(He(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),ke(e,n)}}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=ju,r=nu):r=nd,e.setTexture2D(t||r,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sd,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rd,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||id,s)}function ig(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return H0;case 35666:return k0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return K0;case 36294:return J0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,t){i.uniform1fv(this.addr,t)}function rg(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function ag(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function lg(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cg(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hg(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ug(i,t){i.uniform1iv(this.addr,t)}function dg(i,t){i.uniform2iv(this.addr,t)}function fg(i,t){i.uniform3iv(this.addr,t)}function pg(i,t){i.uniform4iv(this.addr,t)}function mg(i,t){i.uniform1uiv(this.addr,t)}function gg(i,t){i.uniform2uiv(this.addr,t)}function xg(i,t){i.uniform3uiv(this.addr,t)}function vg(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nd,r[o])}function Mg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sd,r[o])}function _g(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rd,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||id,r[o])}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return Sg}}var Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$a=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){let n=i.name,s=n.length;for($a.lastIndex=0;;){let r=$a.exec(n),o=$a.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){lu(e,h===void 0?new Ql(a,i,t):new $l(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new tc(a),lu(e,d)),e=d}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Eg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wg=37297,Tg=0;function Ag(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hu=new Xt;function Rg(i){Qt._getMatrix(hu,Qt.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Yo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ag(i.getShaderSource(t),o)}else return s}function Cg(i,t){let e=Rg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case Bc:e="Cineon";break;case _r:e="ACESFilmic";break;case Hc:e="AgX";break;case kc:e="Neutral";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $r=new R;function Ig(){Qt.getLuminanceCoefficients($r);let i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Dg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function tr(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Ng,Fg)}var zg=new Map;function Fg(i,t){let e=Zt[t];if(e===void 0){let n=zg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(Og,Bg)}function Bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function kg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Gg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hg(e),h=kg(e),c=Vg(e),d=Gg(e),u=Wg(e),f=Lg(e),m=Dg(r),v=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(g=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Zt.tonemapping_pars_fragment:"",e.toneMapping!==di?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=ec(o),o=du(o,e),o=fu(o,e),a=ec(a),a=du(a,e),a=fu(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+o,x=M+p+a,T=cu(s,s.VERTEX_SHADER,y),E=cu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,T),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(E).trim(),V=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,E);else{let tt=uu(s,T,"vertex"),X=uu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+tt+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||B==="")&&(k=!1);k&&(I.diagnostics={runnable:V,programLog:N,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(E),C=new us(s,v),S=Ug(s,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,wg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var qg=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function Yg(i,t,e,n,s,r,o){let a=new Eo,l=new nc,h=new Set,c=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return h.add(S),S===0?"uv":`uv${S}`}function g(S,_,I,N,U){let B=N.fog,V=U.geometry,k=S.isMeshStandardMaterial?N.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),X=tt&&tt.mapping===qo?tt.image.height:null,ht=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=ft!==void 0?ft.length:0,Nt=0;V.morphAttributes.position!==void 0&&(Nt=1),V.morphAttributes.normal!==void 0&&(Nt=2),V.morphAttributes.color!==void 0&&(Nt=3);let re,K,st,wt;if(ht){let ce=Ln[ht];re=ce.vertexShader,K=ce.fragmentShader}else re=S.vertexShader,K=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),wt=l.getFragmentShaderID(S);let at=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,zt=U.isBatchedMesh===!0,ee=!!S.map,Q=!!S.matcap,it=!!tt,L=!!S.aoMap,Pt=!!S.lightMap,et=!!S.bumpMap,St=!!S.normalMap,ut=!!S.displacementMap,Dt=!!S.emissiveMap,yt=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,H=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,Z=S.sheen>0,Tt=S.transmission>0,pt=b&&!!S.anisotropyMap,Mt=H&&!!S.clearcoatMap,jt=H&&!!S.clearcoatNormalMap,nt=H&&!!S.clearcoatRoughnessMap,bt=$&&!!S.iridescenceMap,Ut=$&&!!S.iridescenceThicknessMap,Ft=Z&&!!S.sheenColorMap,Et=Z&&!!S.sheenRoughnessMap,te=!!S.specularMap,Yt=!!S.specularColorMap,pe=!!S.specularIntensityMap,z=Tt&&!!S.transmissionMap,mt=Tt&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,vt=S.alphaTest>0,gt=!!S.alphaHash,Gt=!!S.extensions,we=di;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(we=i.toneMapping);let je={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:K,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:zt,batchingColor:zt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ps,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:Q,envMap:it,envMapMode:it&&tt.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:Pt,bumpMap:et,normalMap:St,displacementMap:u&&ut,emissiveMap:Dt,normalMapObjectSpace:St&&S.normalMapType===df,normalMapTangentSpace:St&&S.normalMapType===Ju,metalnessMap:yt,roughnessMap:P,anisotropy:b,anisotropyMap:pt,clearcoat:H,clearcoatMap:Mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:$,iridescenceMap:bt,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:te,specularColorMap:Yt,specularIntensityMap:pe,transmission:Tt,transmissionMap:z,thicknessMap:mt,gradientMap:q,opaque:S.transparent===!1&&S.blending===ui&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:vt,alphaHash:gt,combine:S.combine,mapUv:ee&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Pt&&v(S.lightMap.channel),bumpMapUv:et&&v(S.bumpMap.channel),normalMapUv:St&&v(S.normalMap.channel),displacementMapUv:ut&&v(S.displacementMap.channel),emissiveMapUv:Dt&&v(S.emissiveMap.channel),metalnessMapUv:yt&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:pt&&v(S.anisotropyMap.channel),clearcoatMapUv:Mt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(S.sheenRoughnessMap.channel),specularMapUv:te&&v(S.specularMap.channel),specularColorMapUv:Yt&&v(S.specularColorMap.channel),specularIntensityMapUv:pe&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:mt&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(St||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(ee||j),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function p(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(_,S),y(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function y(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let _=m[S.type],I;if(_){let N=Ln[_];I=Mn.clone(N.uniforms)}else I=S.uniforms;return I}function T(S,_){let I;for(let N=0,U=c.length;N<U;N++){let B=c[N];if(B.cacheKey===_){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Xg(i,_,S,r),c.push(I)),I}function E(S){if(--S.usedTimes===0){let _=c.indexOf(S);c[_]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function Zg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,m,v,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),t++,p}function a(d,u,f,m,v,g){let p=o(d,u,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,v,g){let p=o(d,u,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(d,u){e.length>1&&e.sort(d||Kg),n.length>1&&n.sort(u||gu),s.length>1&&s.sort(u||gu)}function c(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function Jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ot};break;case"SpotLight":e={position:new R,direction:new R,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $g=0;function tx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ex(i){let t=new jg,e=Qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);let s=new R,r=new qt,o=new qt;function a(h){let c=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,M=0,y=0,x=0,T=0,E=0,w=0;h.sort(tx);for(let S=0,_=h.length;S<_;S++){let I=h[S],N=I.color,U=I.intensity,B=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=N.r*U,d+=N.g*U,u+=N.b*U;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],U);w++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=k,f++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(N).multiplyScalar(U),k.distance=B,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[v]=k;let tt=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,tt.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=tt.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=V,x++}v++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(N).multiplyScalar(U),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=k,g++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=k,m++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(U),k.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[p]=k,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=f,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=w,n.version=$g++)}function l(h,c){let d=0,u=0,f=0,m=0,v=0,g=c.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){let y=h[p];if(y.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function vu(i){let t=new ex(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vu(i),t.set(s,[a])):r>=o.length?(a=new vu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sc=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rx(i,t,e){let n=new lr,s=new J,r=new J,o=new fe,a=new sc({depthPacking:uf}),l=new rc,h={},c=e.maxTextureSize,d={[fi]:Ze,[Ze]:fi,[Ue]:Ue},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ie;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(E,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==qn&&this.type===qn,B=p===qn&&this.type!==qn;for(let V=0,k=E.length;V<k;V++){let tt=E[V],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||U===!0||B===!0){let _t=this.type!==qn?{minFilter:tn,magFilter:tn}:{};X.map!==null&&X.map.dispose(),X.map=new Ne(s.x,s.y,_t),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ft=X.getViewportCount();for(let _t=0;_t<ft;_t++){let Nt=X.getViewport(_t);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),N.viewport(o),X.updateMatrices(tt,_t),n=X.getFrustum(),x(w,C,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===qn&&M(X,C),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,_,I)};function M(E,w){let C=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ne(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,f,v,null)}function y(E,w,C,S){let _=null,I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)_=I;else if(_=C.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=_.uuid,U=w.uuid,B=h[N];B===void 0&&(B={},h[N]=B);let V=B[U];V===void 0&&(V=_.clone(),B[U]=V,w.addEventListener("dispose",T)),_=V}if(_.visible=w.visible,_.wireframe=w.wireframe,S===qn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=i.properties.get(_);N.light=C}return _}function x(E,w,C,S,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let U=t.update(E),B=E.material;if(Array.isArray(B)){let V=U.groups;for(let k=0,tt=V.length;k<tt;k++){let X=V[k],ht=B[X.materialIndex];if(ht&&ht.visible){let ft=y(E,ht,S,_);E.onBeforeShadow(i,E,w,C,U,ft,X),i.renderBufferDirect(C,null,U,ft,E,X),E.onAfterShadow(i,E,w,C,U,ft,X)}}}else if(B.visible){let V=y(E,B,S,_);E.onBeforeShadow(i,E,w,C,U,V,null),i.renderBufferDirect(C,null,U,V,E,null),E.onAfterShadow(i,E,w,C,U,V,null)}}let N=E.children;for(let U=0,B=N.length;U<B;U++)x(N[U],w,C,S,_)}function T(E){E.target.removeEventListener("dispose",T);for(let C in h){let S=h[C],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var ox={[cl]:hl,[ul]:pl,[dl]:ml,[ds]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:ds};function ax(i,t){function e(){let z=!1,mt=new fe,q=null,j=new fe(0,0,0,0);return{setMask:function(vt){q!==vt&&!z&&(i.colorMask(vt,vt,vt,vt),q=vt)},setLocked:function(vt){z=vt},setClear:function(vt,gt,Gt,we,je){je===!0&&(vt*=we,gt*=we,Gt*=we),mt.set(vt,gt,Gt,we),j.equals(mt)===!1&&(i.clearColor(vt,gt,Gt,we),j.copy(mt))},reset:function(){z=!1,q=null,j.set(-1,0,0,0)}}}function n(){let z=!1,mt=!1,q=null,j=null,vt=null;return{setReversed:function(gt){if(mt!==gt){let Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let we=vt;vt=null,this.setClear(we)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?at(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(gt){q!==gt&&!z&&(i.depthMask(gt),q=gt)},setFunc:function(gt){if(mt&&(gt=ox[gt]),j!==gt){switch(gt){case cl:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){z=gt},setClear:function(gt){vt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){z=!1,q=null,j=null,vt=null,mt=!1}}}function s(){let z=!1,mt=null,q=null,j=null,vt=null,gt=null,Gt=null,we=null,je=null;return{setTest:function(ce){z||(ce?at(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ce){mt!==ce&&!z&&(i.stencilMask(ce),mt=ce)},setFunc:function(ce,Sn,Bn){(q!==ce||j!==Sn||vt!==Bn)&&(i.stencilFunc(ce,Sn,Bn),q=ce,j=Sn,vt=Bn)},setOp:function(ce,Sn,Bn){(gt!==ce||Gt!==Sn||we!==Bn)&&(i.stencilOp(ce,Sn,Bn),gt=ce,Gt=Sn,we=Bn)},setLocked:function(ce){z=ce},setClear:function(ce){je!==ce&&(i.clearStencil(ce),je=ce)},reset:function(){z=!1,mt=null,q=null,j=null,vt=null,gt=null,Gt=null,we=null,je=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,c={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,M=null,y=null,x=null,T=null,E=null,w=new ot(0,0,0),C=0,S=!1,_=null,I=null,N=null,U=null,B=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=tt>=2);let ht=null,ft={},_t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),re=new fe().fromArray(_t),K=new fe().fromArray(Nt);function st(z,mt,q,j){let vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<q;Gt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}let wt={};wt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ds),et(!1),St(Sh),at(i.CULL_FACE),L(Nn);function at(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function Lt(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function Bt(z,mt){return d[z]!==mt?(i.bindFramebuffer(z,mt),d[z]=mt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function zt(z,mt){let q=f,j=!1;if(z){q=u.get(mt),q===void 0&&(q=[],u.set(mt,q));let vt=z.textures;if(q.length!==vt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Gt=vt.length;gt<Gt;gt++)q[gt]=i.COLOR_ATTACHMENT0+gt;q.length=vt.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function ee(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let Q={[Pi]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};Q[Wd]=i.MIN,Q[Xd]=i.MAX;let it={[qd]:i.ZERO,[Yd]:i.ONE,[Zd]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[tf]:i.SRC_ALPHA_SATURATE,[Qd]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Kd]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[jd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[sf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,mt,q,j,vt,gt,Gt,we,je,ce){if(z===Nn){v===!0&&(Lt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),z!==kd){if(z!==g||ce!==S){if((p!==Pi||x!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,x=Pi),ce)switch(z){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $t:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $t:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,T=null,E=null,w.set(0,0,0),C=0,g=z,S=ce}return}vt=vt||mt,gt=gt||q,Gt=Gt||j,(mt!==p||vt!==x)&&(i.blendEquationSeparate(Q[mt],Q[vt]),p=mt,x=vt),(q!==M||j!==y||gt!==T||Gt!==E)&&(i.blendFuncSeparate(it[q],it[j],it[gt],it[Gt]),M=q,y=j,T=gt,E=Gt),(we.equals(w)===!1||je!==C)&&(i.blendColor(we.r,we.g,we.b,je),w.copy(we),C=je),g=z,S=!1}function Pt(z,mt){z.side===Ue?Lt(i.CULL_FACE):at(i.CULL_FACE);let q=z.side===Ze;mt&&(q=!q),et(q),z.blending===ui&&z.transparent===!1?L(Nn):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let j=z.stencilWrite;a.setTest(j),j&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Dt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(z){_!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),_=z)}function St(z){z!==Bd?(at(i.CULL_FACE),z!==I&&(z===Sh?i.cullFace(i.BACK):z===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),I=z}function ut(z){z!==N&&(k&&i.lineWidth(z),N=z)}function Dt(z,mt,q){z?(at(i.POLYGON_OFFSET_FILL),(U!==mt||B!==q)&&(i.polygonOffset(mt,q),U=mt,B=q)):Lt(i.POLYGON_OFFSET_FILL)}function yt(z){z?at(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+V-1),ht!==z&&(i.activeTexture(z),ht=z)}function b(z,mt,q){q===void 0&&(ht===null?q=i.TEXTURE0+V-1:q=ht);let j=ft[q];j===void 0&&(j={type:void 0,texture:void 0},ft[q]=j),(j.type!==z||j.texture!==mt)&&(ht!==q&&(i.activeTexture(q),ht=q),i.bindTexture(z,mt||wt[z]),j.type=z,j.texture=mt)}function H(){let z=ft[ht];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(z){re.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),re.copy(z))}function Et(z){K.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),K.copy(z))}function te(z,mt){let q=h.get(mt);q===void 0&&(q=new WeakMap,h.set(mt,q));let j=q.get(z);j===void 0&&(j=i.getUniformBlockIndex(mt,z.name),q.set(z,j))}function Yt(z,mt){let j=h.get(mt).get(z);l.get(mt)!==j&&(i.uniformBlockBinding(mt,j,z.__bindingPointIndex),l.set(mt,j))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ht=null,ft={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,M=null,y=null,x=null,T=null,E=null,w=new ot(0,0,0),C=0,S=!1,_=null,I=null,N=null,U=null,B=null,re.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Lt,bindFramebuffer:Bt,drawBuffers:zt,useProgram:ee,setBlending:L,setMaterial:Pt,setFlipSided:et,setCullFace:St,setLineWidth:ut,setPolygonOffset:Dt,setScissorTest:yt,activeTexture:P,bindTexture:b,unbindTexture:H,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:bt,texImage3D:Ut,updateUBOMapping:te,uniformBlockBinding:Yt,texStorage2D:jt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ft,viewport:Et,reset:pe}}function yu(i,t,e,n){let s=lx(n);switch(e){case Wu:return i*t;case qu:return i*t;case Yu:return i*t*2;case Xc:return i*t/s.components*s.byteLength;case qc:return i*t/s.components*s.byteLength;case Zu:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Zc:return i*t*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case yl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case bl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xo:case Hl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ku:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(i){switch(i){case jn:case ku:return{byteLength:1,components:1};case or:case Vu:case en:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Ui:case Vc:case Un:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new J,c=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return f?new OffscreenCanvas(P,b):_o("canvas")}function v(P,b,H){let Y=1,$=yt(P);if(($.width>H||$.height>H)&&(Y=H/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z=Math.floor(Y*$.width),Tt=Math.floor(Y*$.height);d===void 0&&(d=m(Z,Tt));let pt=b?m(Z,Tt):d;return pt.width=Z,pt.height=Tt,pt.getContext("2d").drawImage(P,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Tt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,H,Y,$=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=b;if(b===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),b===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){let Tt=$?Yo:Qt.getTransfer(Y);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=Tt===le?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,b){let H;return P?b===null||b===Ui||b===ms?H=i.DEPTH24_STENCIL8:b===Un?H=i.DEPTH32F_STENCIL8:b===or&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===ms?H=i.DEPTH_COMPONENT24:b===Un?H=i.DEPTH_COMPONENT32F:b===or&&(H=i.DEPTH_COMPONENT16),H}function T(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){let b=P.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&c.delete(b)}function w(P){let b=P.target;b.removeEventListener("dispose",w),_(b)}function C(P){let b=n.get(P);if(b.__webglInit===void 0)return;let H=P.source,Y=u.get(H);if(Y){let $=Y[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(P),Object.keys(Y).length===0&&u.delete(H)}n.remove(P)}function S(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let H=P.source,Y=u.get(H);delete Y[b.__cacheKey],o.memory.textures--}function _(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let $=0;$<b.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(b.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=P.textures;for(let Y=0,$=H.length;Y<$;Y++){let Z=n.get(H[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(P)}let I=0;function N(){I=0}function U(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function B(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function V(P,b){let H=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,P,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function k(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function tt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function X(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){st(H,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let ht={[rr]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},ft={[tn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},_t={[ff]:i.NEVER,[yf]:i.ALWAYS,[pf]:i.LESS,[ju]:i.LEQUAL,[mf]:i.EQUAL,[vf]:i.GEQUAL,[gf]:i.GREATER,[xf]:i.NOTEQUAL};function Nt(P,b){if(b.type===Un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===Ea||b.magFilter===Dr||b.magFilter===Di||b.minFilter===xn||b.minFilter===Ea||b.minFilter===Dr||b.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ht[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ht[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ht[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Dr&&b.minFilter!==Di||b.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function re(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));let Y=b.source,$=u.get(Y);$===void 0&&($={},u.set(Y,$));let Z=B(b);if(Z!==P.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),$[Z].usedTimes++;let Tt=$[P.__cacheKey];Tt!==void 0&&($[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(b)),P.__cacheKey=Z,P.__webglTexture=$[Z].texture}return H}function K(P,b,H){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let $=re(P,b),Z=b.source;e.bindTexture(Y,P.__webglTexture,i.TEXTURE0+H);let Tt=n.get(Z);if(Z.version!==Tt.__version||$===!0){e.activeTexture(i.TEXTURE0+H);let pt=Qt.getPrimaries(Qt.workingColorSpace),Mt=b.colorSpace===ci?null:Qt.getPrimaries(b.colorSpace),jt=b.colorSpace===ci||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=v(b.image,!1,s.maxTextureSize);nt=Dt(b,nt);let bt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),Ft=y(b.internalFormat,bt,Ut,b.colorSpace,b.isVideoTexture);Nt(Y,b);let Et,te=b.mipmaps,Yt=b.isVideoTexture!==!0,pe=Tt.__version===void 0||$===!0,z=Z.dataReady,mt=T(b,nt);if(b.isDepthTexture)Ft=x(b.format===gs,b.type),pe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,bt,Ut,null));else if(b.isDataTexture)if(te.length>0){Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,te[0].width,te[0].height);for(let q=0,j=te.length;q<j;q++)Et=te[q],Yt?z&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,bt,Ut,Et.data);b.generateMipmaps=!1}else Yt?(pe&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,nt.width,nt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,bt,Ut,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,bt,Ut,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,te[0].width,te[0].height,nt.depth);for(let q=0,j=te.length;q<j;q++)if(Et=te[q],b.format!==An)if(bt!==null)if(Yt){if(z)if(b.layerUpdates.size>0){let vt=yu(Et.width,Et.height,b.format,b.type);for(let gt of b.layerUpdates){let Gt=Et.data.subarray(gt*vt/Et.data.BYTES_PER_ELEMENT,(gt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,gt,Et.width,Et.height,1,bt,Gt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,nt.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,nt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,nt.depth,bt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,nt.depth,0,bt,Ut,Et.data)}else{Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,te[0].width,te[0].height);for(let q=0,j=te.length;q<j;q++)Et=te[q],b.format!==An?bt!==null?Yt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?z&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,bt,Ut,Et.data)}else if(b.isDataArrayTexture)if(Yt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,nt.width,nt.height,nt.depth),z)if(b.layerUpdates.size>0){let q=yu(nt.width,nt.height,b.format,b.type);for(let j of b.layerUpdates){let vt=nt.data.subarray(j*q/nt.data.BYTES_PER_ELEMENT,(j+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,bt,Ut,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,bt,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,bt,Ut,nt.data);else if(b.isData3DTexture)Yt?(pe&&e.texStorage3D(i.TEXTURE_3D,mt,Ft,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,bt,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,bt,Ut,nt.data);else if(b.isFramebufferTexture){if(pe)if(Yt)e.texStorage2D(i.TEXTURE_2D,mt,Ft,nt.width,nt.height);else{let q=nt.width,j=nt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ft,q,j,0,bt,Ut,null),q>>=1,j>>=1}}else if(te.length>0){if(Yt&&pe){let q=yt(te[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ft,q.width,q.height)}for(let q=0,j=te.length;q<j;q++)Et=te[q],Yt?z&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt,Ut,Et):e.texImage2D(i.TEXTURE_2D,q,Ft,bt,Ut,Et);b.generateMipmaps=!1}else if(Yt){if(pe){let q=yt(nt);e.texStorage2D(i.TEXTURE_2D,mt,Ft,q.width,q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,bt,Ut,nt);g(b)&&p(Y),Tt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function st(P,b,H){if(b.image.length!==6)return;let Y=re(P,b),$=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let Z=n.get($);if($.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+H);let Tt=Qt.getPrimaries(Qt.workingColorSpace),pt=b.colorSpace===ci?null:Qt.getPrimaries(b.colorSpace),Mt=b.colorSpace===ci||Tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let jt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let j=0;j<6;j++)!jt&&!nt?bt[j]=v(b.image[j],!0,s.maxCubemapSize):bt[j]=nt?b.image[j].image:b.image[j],bt[j]=Dt(b,bt[j]);let Ut=bt[0],Ft=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),te=y(b.internalFormat,Ft,Et,b.colorSpace),Yt=b.isVideoTexture!==!0,pe=Z.__version===void 0||Y===!0,z=$.dataReady,mt=T(b,Ut);Nt(i.TEXTURE_CUBE_MAP,b);let q;if(jt){Yt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,Ut.width,Ut.height);for(let j=0;j<6;j++){q=bt[j].mipmaps;for(let vt=0;vt<q.length;vt++){let gt=q[vt];b.format!==An?Ft!==null?Yt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,gt.width,gt.height,Ft,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,te,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,gt.width,gt.height,Ft,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,te,gt.width,gt.height,0,Ft,Et,gt.data)}}}else{if(q=b.mipmaps,Yt&&pe){q.length>0&&mt++;let j=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Yt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt[j].width,bt[j].height,Ft,Et,bt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,bt[j].width,bt[j].height,0,Ft,Et,bt[j].data);for(let vt=0;vt<q.length;vt++){let Gt=q[vt].image[j].image;Yt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Gt.width,Gt.height,Ft,Et,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,te,Gt.width,Gt.height,0,Ft,Et,Gt.data)}}else{Yt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,Et,bt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,Ft,Et,bt[j]);for(let vt=0;vt<q.length;vt++){let gt=q[vt];Yt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Ft,Et,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,te,Ft,Et,gt.image[j])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function wt(P,b,H,Y,$,Z){let Tt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),Mt=y(H.internalFormat,Tt,pt,H.colorSpace),jt=n.get(b),nt=n.get(H);if(nt.__renderTarget=b,!jt.__hasExternalTextures){let bt=Math.max(1,b.width>>Z),Ut=Math.max(1,b.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Z,Mt,bt,Ut,b.depth,0,Tt,pt,null):e.texImage2D($,Z,Mt,bt,Ut,0,Tt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,nt.__webglTexture,0,et(b)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,nt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(P,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let Y=b.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,Z=x(b.stencilBuffer,$),Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=et(b);St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{let Y=b.textures;for(let $=0;$<Y.length;$++){let Z=Y[$],Tt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),Mt=y(Z.internalFormat,Tt,pt,Z.colorSpace),jt=et(b);H&&St(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Mt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let $=Y.__webglTexture,Z=et(b);if(b.depthTexture.format===cs)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(b.depthTexture.format===gs)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Bt(P){let b=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Lt(b.__webglFramebuffer,P)}else if(H){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(b.__webglDepthbuffer[Y],P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,P,!1);else{let Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(P,b,H){let Y=n.get(P);b!==void 0&&wt(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Bt(P)}function ee(P){let b=P.texture,H=n.get(P),Y=n.get(b);P.addEventListener("dispose",w);let $=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Tt=$.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)H.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let pt=0,Mt=$.length;pt<Mt;pt++){let jt=n.get($[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&St(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<$.length;pt++){let Mt=$[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);let jt=r.convert(Mt.format,Mt.colorSpace),nt=r.convert(Mt.type),bt=y(Mt.internalFormat,jt,nt,Mt.colorSpace,P.isXRRenderTarget===!0),Ut=et(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,bt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),at(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)wt(H.__webglFramebuffer[pt][Mt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else wt(H.__webglFramebuffer[pt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,Mt=$.length;pt<Mt;pt++){let jt=$[pt],nt=n.get(jt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Nt(i.TEXTURE_2D,jt),wt(H.__webglFramebuffer,P,jt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),Nt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)wt(H.__webglFramebuffer[Mt],P,b,i.COLOR_ATTACHMENT0,pt,Mt);else wt(H.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,pt,0);g(b)&&p(pt),e.unbindTexture()}P.depthBuffer&&Bt(P)}function Q(P){let b=P.textures;for(let H=0,Y=b.length;H<Y;H++){let $=b[H];if(g($)){let Z=M(P),Tt=n.get($).__webglTexture;e.bindTexture(Z,Tt),p(Z),e.unbindTexture()}}}let it=[],L=[];function Pt(P){if(P.samples>0){if(St(P)===!1){let b=P.textures,H=P.width,Y=P.height,$=i.COLOR_BUFFER_BIT,Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),pt=b.length>1;if(pt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let jt=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,$,i.NEAREST),l===!0&&(it.length=0,L.length=0,it.push(i.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(Z),L.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let jt=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(P){return Math.min(s.maxSamples,P.samples)}function St(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(P){let b=o.render.frame;c.get(P)!==b&&(c.set(P,b),P.update())}function Dt(P,b){let H=P.colorSpace,Y=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Ps&&H!==ci&&(Qt.getTransfer(H)===le?(Y!==An||$!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=St}function hx(i,t){function e(n,s=ci){let r,o=Qt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.BYTE;if(n===Vu)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===Wu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===An)return i.RGBA;if(n===qu)return i.LUMINANCE;if(n===Yu)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===Zu)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===_l||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===El||n===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===El)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===Hl||n===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===Vl||n===Gl||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var oc=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ye=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},ux={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kt({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,m=null,v=new ac,g=e.getContextAttributes(),p=null,M=null,y=[],x=[],T=new J,E=null,w=new qe;w.viewport=new fe;let C=new qe;C.viewport=new fe;let S=[w,C],_=new oc,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=y[K];return st===void 0&&(st=new er,y[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=y[K];return st===void 0&&(st=new er,y[K]=st),st.getGripSpace()},this.getHand=function(K){let st=y[K];return st===void 0&&(st=new er,y[K]=st),st.getHandSpace()};function U(K){let st=x.indexOf(K.inputSource);if(st===-1)return;let wt=y[st];wt!==void 0&&(wt.update(K.inputSource,K.frame,h||o),wt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let K=0;K<y.length;K++){let st=x[K];st!==null&&(x[K]=null,y[K].disconnect(st))}I=null,N=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,M=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ne(f.framebufferWidth,f.framebufferHeight,{format:An,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,wt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?gs:cs,wt=g.stencil?ms:Ui);let Lt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ne(u.textureWidth,u.textureHeight,{format:An,type:jn,depthTexture:new Co(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(K){for(let st=0;st<K.removed.length;st++){let wt=K.removed[st],at=x.indexOf(wt);at>=0&&(x[at]=null,y[at].disconnect(wt))}for(let st=0;st<K.added.length;st++){let wt=K.added[st],at=x.indexOf(wt);if(at===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=x.length){x.push(wt),at=Bt;break}else if(x[Bt]===null){x[Bt]=wt,at=Bt;break}if(at===-1)break}let Lt=y[at];Lt&&Lt.connect(wt)}}let k=new R,tt=new R;function X(K,st,wt){k.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(wt.matrixWorld);let at=k.distanceTo(tt),Lt=st.projectionMatrix.elements,Bt=wt.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),ee=Lt[14]/(Lt[10]+1),Q=(Lt[9]+1)/Lt[5],it=(Lt[9]-1)/Lt[5],L=(Lt[8]-1)/Lt[0],Pt=(Bt[8]+1)/Bt[0],et=zt*L,St=zt*Pt,ut=at/(-L+Pt),Dt=ut*-L;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Dt),K.translateZ(ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let yt=zt+ut,P=ee+ut,b=et-Dt,H=St+(at-Dt),Y=Q*ee/P*yt,$=it*ee/P*yt;K.projectionMatrix.makePerspective(b,H,Y,$,yt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let st=K.near,wt=K.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(wt=v.depthFar)),_.near=C.near=w.near=st,_.far=C.far=w.far=wt,(I!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,N=_.far),w.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,_.layers.mask=w.layers.mask|C.layers.mask;let at=K.parent,Lt=_.cameras;ht(_,at);for(let Bt=0;Bt<Lt.length;Bt++)ht(Lt[Bt],at);Lt.length===2?X(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),ft(K,_,at)};function ft(K,st,wt){wt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(wt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _t=null;function Nt(K,st){if(c=st.getViewerPose(h||o),m=st,c!==null){let wt=c.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let at=!1;wt.length!==_.cameras.length&&(_.cameras.length=0,at=!0);for(let Bt=0;Bt<wt.length;Bt++){let zt=wt[Bt],ee=null;if(f!==null)ee=f.getViewport(zt);else{let it=d.getViewSubImage(u,zt);ee=it.viewport,Bt===0&&(t.setRenderTargetTextures(M,it.colorTexture,u.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(M))}let Q=S[Bt];Q===void 0&&(Q=new qe,Q.layers.enable(Bt),Q.viewport=new fe,S[Bt]=Q),Q.matrix.fromArray(zt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(zt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),Bt===0&&(_.matrix.copy(Q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),at===!0&&_.cameras.push(Q)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Bt=d.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,s.renderState)}}for(let wt=0;wt<y.length;wt++){let at=x[wt],Lt=y[wt];at!==null&&Lt!==void 0&&Lt.update(at,st,h||o)}_t&&_t(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let re=new ed;re.setAnimationLoop(Nt),this.setAnimationLoop=function(K){_t=K},this.dispose=function(){}}},Ri=new on,px=new qt;function mx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,td(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ri)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function h(M,y){let x=s[M.id];x===void 0&&(m(M),x=c(M),s[M.id]=x,M.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(M,T);let E=t.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function c(M){let y=d();M.__bindingPointIndex=y;let x=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let y=s[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,_=C.length;S<_;S++){let I=C[S];if(f(I,E,S,T)===!0){let N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],B=0;for(let V=0;V<U.length;V++){let k=U[V],tt=v(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+B,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,x,T){let E=M.value,w=y+"_"+x;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{let C=T[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(M){let y=M.uniforms,x=0,T=16;for(let w=0,C=y.length;w<C;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,I=S.length;_<I;_++){let N=S[_],U=Array.isArray(N.value)?N.value:[N.value];for(let B=0,V=U.length;B<V;B++){let k=U[B],tt=v(k),X=x%T,ht=X%tt.boundary,ft=X+ht;x+=ht,ft!==0&&T-ft<tt.storage&&(x+=T-ft),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=tt.storage}}}let E=x%T;return E>0&&(x+=T-E),M.__size=x,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var Po=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=di,this.toneMappingExposure=1;let x=this,T=!1,E=0,w=0,C=null,S=-1,_=null,I=new fe,N=new fe,U=null,B=new ot(0),V=0,k=e.width,tt=e.height,X=1,ht=null,ft=null,_t=new fe(0,0,k,tt),Nt=new fe(0,0,k,tt),re=!1,K=new lr,st=!1,wt=!1,at=new qt,Lt=new qt,Bt=new R,zt=new fe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function it(){return C===null?X:1}let L=n;function Pt(A,F){return e.getContext(A,F)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let F="webgl2";if(L=Pt(F,A),L===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,St,ut,Dt,yt,P,b,H,Y,$,Z,Tt,pt,Mt,jt,nt,bt,Ut,Ft,Et,te,Yt,pe,z;function mt(){et=new L0(L),et.init(),Yt=new hx(L,et),St=new T0(L,et,t,Yt),ut=new ax(L,et),St.reverseDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),Dt=new N0(L),yt=new Zg,P=new cx(L,et,ut,yt,St,Yt,Dt),b=new R0(x),H=new I0(x),Y=new Vf(L),pe=new E0(L,Y),$=new D0(L,Y,Dt,pe),Z=new F0(L,$,Y,Dt),Ft=new z0(L,St,P),nt=new A0(yt),Tt=new Yg(x,b,H,et,St,pe,nt),pt=new mx(x,yt),Mt=new Jg,jt=new nx(et),Ut=new b0(x,b,H,ut,Z,f,l),bt=new rx(x,Z,St),z=new gx(L,Dt,St,ut),Et=new w0(L,et,Dt),te=new U0(L,et,Dt),Dt.programs=Tt.programs,x.capabilities=St,x.extensions=et,x.properties=yt,x.renderLists=Mt,x.shadowMap=bt,x.state=ut,x.info=Dt}mt();let q=new lc(x,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(k,tt,!1))},this.getSize=function(A){return A.set(k,tt)},this.setSize=function(A,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,tt=F,e.width=Math.floor(A*X),e.height=Math.floor(F*X),G===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(k*X,tt*X).floor()},this.setDrawingBufferSize=function(A,F,G){k=A,tt=F,X=G,e.width=Math.floor(A*G),e.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,F,G,W){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,F,G,W),ut.viewport(I.copy(_t).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,F,G,W){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,F,G,W),ut.scissor(N.copy(Nt).multiplyScalar(X).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){ut.setScissorTest(re=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let O=!1;if(C!==null){let rt=C.texture.format;O=rt===Zc||rt===Yc||rt===qc}if(O){let rt=C.texture.type,xt=rt===jn||rt===Ui||rt===or||rt===ms||rt===Gc||rt===Wc,At=Ut.getClearColor(),Rt=Ut.getClearAlpha(),Ht=At.r,Wt=At.g,Ct=At.b;xt?(m[0]=Ht,m[1]=Wt,m[2]=Ct,m[3]=Rt,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Ht,v[1]=Wt,v[2]=Ct,v[3]=Rt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),jt.dispose(),yt.dispose(),b.dispose(),H.dispose(),Z.dispose(),pe.dispose(),z.dispose(),Tt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ph),q.removeEventListener("sessionend",mh),Si.stop()};function j(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=Dt.autoReset,F=bt.enabled,G=bt.autoUpdate,W=bt.needsUpdate,O=bt.type;mt(),Dt.autoReset=A,bt.enabled=F,bt.autoUpdate=G,bt.needsUpdate=W,bt.type=O}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){let F=A.target;F.removeEventListener("dispose",Gt),we(F)}function we(A){je(A),yt.remove(A)}function je(A){let F=yt.get(A).programs;F!==void 0&&(F.forEach(function(G){Tt.releaseProgram(G)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,O,rt){F===null&&(F=ee);let xt=O.isMesh&&O.matrixWorld.determinant()<0,At=zd(A,F,G,W,O);ut.setMaterial(W,xt);let Rt=G.index,Ht=1;if(W.wireframe===!0){if(Rt=$.getWireframeAttribute(G),Rt===void 0)return;Ht=2}let Wt=G.drawRange,Ct=G.attributes.position,ne=Wt.start*Ht,me=(Wt.start+Wt.count)*Ht;rt!==null&&(ne=Math.max(ne,rt.start*Ht),me=Math.min(me,(rt.start+rt.count)*Ht)),Rt!==null?(ne=Math.max(ne,0),me=Math.min(me,Rt.count)):Ct!=null&&(ne=Math.max(ne,0),me=Math.min(me,Ct.count));let ye=me-ne;if(ye<0||ye===1/0)return;pe.setup(O,W,At,G,Rt);let cn,oe=Et;if(Rt!==null&&(cn=Y.get(Rt),oe=te,oe.setIndex(cn)),O.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*it()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(O.isLine){let It=W.linewidth;It===void 0&&(It=1),ut.setLineWidth(It*it()),O.isLineSegments?oe.setMode(L.LINES):O.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else O.isPoints?oe.setMode(L.POINTS):O.isSprite&&oe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let It=O._multiDrawStarts,Hn=O._multiDrawCounts,ae=O._multiDrawCount,bn=Rt?Y.get(Rt).bytesPerElement:1,ki=yt.get(W).currentProgram.getUniforms();for(let un=0;un<ae;un++)ki.setValue(L,"_gl_DrawID",un),oe.render(It[un]/bn,Hn[un])}else if(O.isInstancedMesh)oe.renderInstances(ne,ye,O.count);else if(G.isInstancedBufferGeometry){let It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Hn=Math.min(G.instanceCount,It);oe.renderInstances(ne,ye,Hn)}else oe.render(ne,ye)};function ce(A,F,G){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,Lr(A,F,G),A.side=fi,A.needsUpdate=!0,Lr(A,F,G),A.side=Ue):Lr(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),p=jt.get(G),p.init(F),y.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let rt=O.material;if(rt)if(Array.isArray(rt))for(let xt=0;xt<rt.length;xt++){let At=rt[xt];ce(At,G,O),W.add(At)}else ce(rt,G,O),W.add(rt)}),y.pop(),p=null,W},this.compileAsync=function(A,F,G=null){let W=this.compile(A,F,G);return new Promise(O=>{function rt(){if(W.forEach(function(xt){yt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){O(A);return}setTimeout(rt,10)}et.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Sn=null;function Bn(A){Sn&&Sn(A)}function ph(){Si.stop()}function mh(){Si.start()}let Si=new ed;Si.setAnimationLoop(Bn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){Sn=A,q.setAnimationLoop(A),A===null?Si.stop():Si.start()},q.addEventListener("sessionstart",ph),q.addEventListener("sessionend",mh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,C),p=jt.get(A,y.length),p.init(F),y.push(p),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Lt),wt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,wt),g=Mt.get(A,M.length),g.init(),M.push(g),q.enabled===!0&&q.isPresenting===!0){let rt=x.xr.getDepthSensingMesh();rt!==null&&ba(rt,F,-1/0,x.sortObjects)}ba(A,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,ft),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ut.addToRenderList(g,A),this.info.render.frame++,st===!0&&nt.beginShadows();let G=p.state.shadowsArray;bt.render(G,A,F),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){let rt=F.cameras;if(O.length>0)for(let xt=0,At=rt.length;xt<At;xt++){let Rt=rt[xt];xh(W,O,A,Rt)}Q&&Ut.render(A);for(let xt=0,At=rt.length;xt<At;xt++){let Rt=rt[xt];gh(g,A,Rt,Rt.viewport)}}else O.length>0&&xh(W,O,A,F),Q&&Ut.render(A),gh(g,A,F);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,F),pe.resetDefaultState(),S=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ba(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){W&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);let xt=Z.update(A),At=A.material;At.visible&&g.push(A,xt,At,G,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let xt=Z.update(A),At=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),zt.copy(xt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(At)){let Rt=xt.groups;for(let Ht=0,Wt=Rt.length;Ht<Wt;Ht++){let Ct=Rt[Ht],ne=At[Ct.materialIndex];ne&&ne.visible&&g.push(A,xt,ne,G,zt.z,Ct)}}else At.visible&&g.push(A,xt,At,G,zt.z,null)}}let rt=A.children;for(let xt=0,At=rt.length;xt<At;xt++)ba(rt[xt],F,G,W)}function gh(A,F,G,W){let O=A.opaque,rt=A.transmissive,xt=A.transparent;p.setupLightsView(G),st===!0&&nt.setGlobalState(x.clippingPlanes,G),W&&ut.viewport(I.copy(W)),O.length>0&&Ir(O,F,G),rt.length>0&&Ir(rt,F,G),xt.length>0&&Ir(xt,F,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function xh(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ne(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?en:jn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let rt=p.state.transmissionRenderTarget[W.id],xt=W.viewport||I;rt.setSize(xt.z,xt.w);let At=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(B),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ut.render(G);let Rt=x.toneMapping;x.toneMapping=di;let Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),st===!0&&nt.setGlobalState(x.clippingPlanes,W),Ir(A,G,W),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ct=0,ne=F.length;Ct<ne;Ct++){let me=F[Ct],ye=me.object,cn=me.geometry,oe=me.material,It=me.group;if(oe.side===Ue&&ye.layers.test(W.layers)){let Hn=oe.side;oe.side=Ze,oe.needsUpdate=!0,vh(ye,G,W,cn,oe,It),oe.side=Hn,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}x.setRenderTarget(At),x.setClearColor(B,V),Ht!==void 0&&(W.viewport=Ht),x.toneMapping=Rt}function Ir(A,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=A.length;O<rt;O++){let xt=A[O],At=xt.object,Rt=xt.geometry,Ht=W===null?xt.material:W,Wt=xt.group;At.layers.test(G.layers)&&vh(At,F,G,Rt,Ht,Wt)}}function vh(A,F,G,W,O,rt){A.onBeforeRender(x,F,G,W,O,rt),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,F,G,W,A,rt),O.transparent===!0&&O.side===Ue&&O.forceSinglePass===!1?(O.side=Ze,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,A,rt),O.side=fi,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,A,rt),O.side=Ue):x.renderBufferDirect(G,F,W,O,A,rt),A.onAfterRender(x,F,G,W,O,rt)}function Lr(A,F,G){F.isScene!==!0&&(F=ee);let W=yt.get(A),O=p.state.lights,rt=p.state.shadowsArray,xt=O.state.version,At=Tt.getParameters(A,O.state,rt,F,G),Rt=Tt.getProgramCacheKey(At),Ht=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?H:b).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Gt),Ht=new Map,W.programs=Ht);let Wt=Ht.get(Rt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===xt)return Mh(A,At),Wt}else At.uniforms=Tt.getUniforms(A),A.onBeforeCompile(At,x),Wt=Tt.acquireProgram(At,Rt),Ht.set(Rt,Wt),W.uniforms=At.uniforms;let Ct=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=nt.uniform),Mh(A,At),W.needsLights=Od(A),W.lightsStateVersion=xt,W.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function yh(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=us.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Mh(A,F){let G=yt.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function zd(A,F,G,W,O){F.isScene!==!0&&(F=ee),P.resetTextureUnits();let rt=F.fog,xt=W.isMeshStandardMaterial?F.environment:null,At=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ps,Rt=(W.isMeshStandardMaterial?H:b).get(W.envMap||xt),Ht=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,me=!!G.morphAttributes.color,ye=di;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=x.toneMapping);let cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=cn!==void 0?cn.length:0,It=yt.get(W),Hn=p.state.lights;if(st===!0&&(wt===!0||A!==_)){let mn=A===_&&W.id===S;nt.setState(W,A,mn)}let ae=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Hn.state.version||It.outputColorSpace!==At||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==Rt||W.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==Wt||It.morphTargets!==Ct||It.morphNormals!==ne||It.morphColors!==me||It.toneMapping!==ye||It.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,It.__version=W.version);let bn=It.currentProgram;ae===!0&&(bn=Lr(W,F,O));let ki=!1,un=!1,Hs=!1,Me=bn.getUniforms(),In=It.uniforms;if(ut.useProgram(bn.program)&&(ki=!0,un=!0,Hs=!0),W.id!==S&&(S=W.id,un=!0),ki||_!==A){ut.buffers.depth.getReversed()?(at.copy(A.projectionMatrix),bf(at),Ef(at),Me.setValue(L,"projectionMatrix",at)):Me.setValue(L,"projectionMatrix",A.projectionMatrix),Me.setValue(L,"viewMatrix",A.matrixWorldInverse);let ei=Me.map.cameraPosition;ei!==void 0&&ei.setValue(L,Bt.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,un=!0,Hs=!0)}if(O.isSkinnedMesh){Me.setOptional(L,O,"bindMatrix"),Me.setOptional(L,O,"bindMatrixInverse");let mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Me.setValue(L,"boneTexture",mn.boneTexture,P))}O.isBatchedMesh&&(Me.setOptional(L,O,"batchingTexture"),Me.setValue(L,"batchingTexture",O._matricesTexture,P),Me.setOptional(L,O,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",O._indirectTexture,P),Me.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",O._colorsTexture,P));let ks=G.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&Ft.update(O,G,bn),(un||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Me.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(In.envMap.value=Rt,In.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),un&&(Me.setValue(L,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Fd(In,Hs),rt&&W.fog===!0&&pt.refreshFogUniforms(In,rt),pt.refreshMaterialUniforms(In,W,X,tt,p.state.transmissionRenderTarget[A.id]),us.upload(L,yh(It),In,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(us.upload(L,yh(It),In,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Me.setValue(L,"center",O.center),Me.setValue(L,"modelViewMatrix",O.modelViewMatrix),Me.setValue(L,"normalMatrix",O.normalMatrix),Me.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let mn=W.uniformsGroups;for(let ei=0,ni=mn.length;ei<ni;ei++){let _h=mn[ei];z.update(_h,bn),z.bind(_h,bn)}}return bn}function Fd(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Od(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,F,G){yt.get(A.texture).__webglTexture=F,yt.get(A.depthTexture).__webglTexture=G;let W=yt.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){let G=yt.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){C=A,E=F,w=G;let W=!0,O=null,rt=!1,xt=!1;if(A){let Rt=yt.get(A);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Rt.__hasExternalTextures)P.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ct=A.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&yt.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let Wt=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][G]:O=Wt[F],rt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?O=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[G]:O=Wt,I.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else I.copy(_t).multiplyScalar(X).floor(),N.copy(Nt).multiplyScalar(X).floor(),U=re;if(ut.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&ut.drawBuffers(A,O),ut.viewport(I),ut.scissor(N),ut.setScissorTest(U),rt){let Rt=yt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,G)}else if(xt){let Rt=yt.get(A.texture),Ht=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Ht)}S=-1},this.readRenderTargetPixels=function(A,F,G,W,O,rt,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){ut.bindFramebuffer(L.FRAMEBUFFER,At);try{let Rt=A.texture,Ht=Rt.format,Wt=Rt.type;if(!St.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O&&L.readPixels(F,G,W,O,Yt.convert(Ht),Yt.convert(Wt),rt)}finally{let Rt=C!==null?yt.get(C).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,O,rt,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){let Rt=A.texture,Ht=Rt.format,Wt=Rt.type;if(!St.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O){ut.bindFramebuffer(L.FRAMEBUFFER,At);let Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,Yt.convert(Ht),Yt.convert(Wt),0);let ne=C!==null?yt.get(C).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,ne);let me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Sf(L,me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(Ct),L.deleteSync(me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(A.image.width*W),rt=Math.floor(A.image.height*W),xt=F!==null?F.x:0,At=F!==null?F.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,xt,At,O,rt),ut.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,W=null,O=0){A.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let rt,xt,At,Rt,Ht,Wt,Ct,ne,me,ye=A.isCompressedTexture?A.mipmaps[O]:A.image;G!==null?(rt=G.max.x-G.min.x,xt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Ht=G.min.y,Wt=G.isBox3?G.min.z:0):(rt=ye.width,xt=ye.height,At=ye.depth||1,Rt=0,Ht=0,Wt=0),W!==null?(Ct=W.x,ne=W.y,me=W.z):(Ct=0,ne=0,me=0);let cn=Yt.convert(F.format),oe=Yt.convert(F.type),It;F.isData3DTexture?(P.setTexture3D(F,0),It=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),It=L.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let Hn=L.getParameter(L.UNPACK_ROW_LENGTH),ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bn=L.getParameter(L.UNPACK_SKIP_PIXELS),ki=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let Hs=A.isDataArrayTexture||A.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let In=yt.get(A),ks=yt.get(F),mn=yt.get(In.__renderTarget),ei=yt.get(ks.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ni=0;ni<At;ni++)Hs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(A).__webglTexture,O,Wt+ni),A.isDepthTexture?(Me&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(F).__webglTexture,O,me+ni),L.blitFramebuffer(Rt,Ht,rt,xt,Ct,ne,rt,xt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Me?L.copyTexSubImage3D(It,O,Ct,ne,me+ni,Rt,Ht,rt,xt):L.copyTexSubImage2D(It,O,Ct,ne,me+ni,Rt,Ht,rt,xt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Me?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(It,O,Ct,ne,me,rt,xt,At,cn,oe,ye.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(It,O,Ct,ne,me,rt,xt,At,cn,ye.data):L.texSubImage3D(It,O,Ct,ne,me,rt,xt,At,cn,oe,ye):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ct,ne,rt,xt,cn,oe,ye.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ct,ne,ye.width,ye.height,cn,ye.data):L.texSubImage2D(L.TEXTURE_2D,O,Ct,ne,rt,xt,cn,oe,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ki),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),O===0&&F.generateMipmaps&&L.generateMipmap(It),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,O=0){return A.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,G,W,O)},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,ut.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},Io=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ms=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new R,cr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vn=class extends zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ns,qs=new R,is=new R,ss=new R,rs=new J,Ys=new J,od=new qt,to=new R,Zs=new R,eo=new R,Mu=new J,tl=new J,_u=new J,Rn=class extends Ae{constructor(t=new vn){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lo(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new cr(n,3,0,!1)),ns.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;no(to.set(-.5,-.5,0),ss,o,is,s,r),no(Zs.set(.5,-.5,0),ss,o,is,s,r),no(eo.set(.5,.5,0),ss,o,is,s,r),Mu.set(0,0),tl.set(1,0),_u.set(1,1);let a=t.ray.intersectTriangle(to,Zs,eo,!1,qs);if(a===null&&(no(Zs.set(-.5,.5,0),ss,o,is,s,r),tl.set(0,1),a=t.ray.intersectTriangle(to,eo,Zs,!1,qs),a===null))return;let l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:hi.getInterpolation(qs,to,Zs,eo,Mu,tl,_u,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function no(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*rs.x-s*rs.y,Ys.y=s*rs.x+r*rs.y):Ys.copy(rs),i.copy(t),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(od)}var cc=class extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,h=tn,c=tn,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ze=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new qt,Su=new qt,io=[],bu=new Qn,xx=new qt,Ks=new lt,Js=new Je,Fe=class extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ze(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),bu.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Je),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Js.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Su.multiplyMatrices(n,os),Ks.matrixWorld=Su,Ks.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ze(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cc(new Float32Array(s*this.count),s,this.count,Xc,Un));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hr=class extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Do=new R,Uo=new R,Eu=new qt,js=new ar,so=new Je,el=new R,wu=new R,hc=class extends Ae{constructor(t=new ie,e=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Do.fromBufferAttribute(e,s-1),Uo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Uo);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;Eu.copy(s).invert(),js.copy(t.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=h){let p=c.getX(v),M=c.getX(v+1),y=ro(this,t,js,l,p,M);y&&e.push(y)}if(this.isLineLoop){let v=c.getX(m-1),g=c.getX(f),p=ro(this,t,js,l,v,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=h){let p=ro(this,t,js,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){let v=ro(this,t,js,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Do.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),e.distanceSqToSegment(Do,Uo,el,wu)>n)return;el.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(el);if(!(l<t.near||l>t.far))return{distance:l,point:wu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Tu=new R,Au=new R,ur=class extends hc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tu.fromBufferAttribute(e,s),Au.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(Au);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ru=new qt,uc=new ar,oo=new Je,ao=new R,dr=class extends Ae{constructor(t=new ie,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;Ru.copy(s).invert(),uc.copy(t.ray).applyMatrix4(Ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=u,v=f;m<v;m++){let g=h.getX(m);ao.fromBufferAttribute(d,g),Cu(ao,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,v=f;m<v;m++)ao.fromBufferAttribute(d,m),Cu(ao,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cu(i,t,e,n,s,r,o){let a=uc.distanceSqToPoint(i);if(a<e){let l=new R;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ve=class extends Ke{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],u=n[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new J:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new qt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var lo=new R,nl=new Jc,il=new Jc,sl=new Jc,Ss=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),h=lo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(c),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),nl.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,m,v,g),il.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,m,v,g),sl.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,m,v,g)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),il.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),sl.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vx(i,t){let e=1-i;return e*e*t}function yx(i,t){return 2*(1-i)*i*t}function Mx(i,t){return i*i*t}function nr(i,t,e,n){return vx(i,t)+yx(i,e)+Mx(i,n)}function _x(i,t){let e=1-i;return e*e*e*t}function Sx(i,t){let e=1-i;return 3*e*e*i*t}function bx(i,t){return 3*(1-i)*i*i*t}function Ex(i,t){return i*i*i*t}function ir(i,t,e,n,s){return _x(i,t)+Sx(i,e)+bx(i,n)+Ex(i,s)}var No=class extends yn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends yn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y),ir(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends yn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends yn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends yn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends yn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y),nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Pu(a,l.x,h.x,c.x,d.x),Pu(a,l.y,h.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this}},gc=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:Ss,CubicBezierCurve:No,CubicBezierCurve3:fc,EllipseCurve:fr,LineCurve:zo,LineCurve3:pc,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:mc,SplineCurve:Oo}),xc=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new gc[s.type]().fromJSON(s))}return this}},pr=class extends xc{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zo(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fo(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new No(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let h=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vc=class i extends ie{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/e,d=new R,u=new J,f=new R,m=new R,v=new R,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let M=0;M<=e;M++){let y=n+M*c*s,x=Math.sin(y),T=Math.cos(y);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*x,d.y=t[E].y,d.z=t[E].x*T,o.push(d.x,d.y,d.z),u.x=M/e,u.y=E/(t.length-1),a.push(u.x,u.y);let w=l[3*E+0]*x,C=l[3*E+1],S=l[3*E+0]*T;h.push(w,C,S)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){let x=y+M*t.length,T=x,E=x+t.length,w=x+t.length+1,C=x+1;r.push(T,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("uv",new Ot(a,2)),this.setAttribute("normal",new Ot(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Bo=class i extends vc{constructor(t=1,e=1,n=4,s=8){let r=new pr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},bs=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new R,c=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],m=0,v=[],g=n/2,p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function M(){let x=new R,T=new R,E=0,w=(e-t)/n;for(let C=0;C<=r;C++){let S=[],_=C/r,I=_*(e-t)+t;for(let N=0;N<=s;N++){let U=N/s,B=U*l+a,V=Math.sin(B),k=Math.cos(B);T.x=I*V,T.y=-_*n+g,T.z=I*k,d.push(T.x,T.y,T.z),x.set(V,w,k).normalize(),u.push(x.x,x.y,x.z),f.push(U,1-_),S.push(m++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let _=v[S][C],I=v[S+1][C],N=v[S+1][C+1],U=v[S][C+1];(t>0||S!==0)&&(c.push(_,I,U),E+=3),(e>0||S!==r-1)&&(c.push(I,N,U),E+=3)}h.addGroup(p,E,0),p+=E}function y(x){let T=m,E=new J,w=new R,C=0,S=x===!0?t:e,_=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*_,0),u.push(0,_,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let B=N/s*l+a,V=Math.cos(B),k=Math.sin(B);w.x=S*k,w.y=g*_,w.z=S*V,d.push(w.x,w.y,w.z),u.push(0,_,0),E.x=V*.5+.5,E.y=k*.5*_+.5,f.push(E.x,E.y),m++}for(let N=0;N<s;N++){let U=T+N,B=I+N;x===!0?c.push(B,B+1,U):c.push(B+1,B,U),C+=3}h.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yc=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new R,x=new R,T=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],T),l(y,x,T,M)}function l(M,y,x,T){let E=T+1,w=[];for(let C=0;C<=E;C++){w[C]=[];let S=M.clone().lerp(x,C/E),_=y.clone().lerp(x,C/E),I=E-C;for(let N=0;N<=I;N++)N===0&&C===E?w[C][N]=S:w[C][N]=S.clone().lerp(_,N/I)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let _=Math.floor(S/2);S%2===0?(u(w[C][_+1]),u(w[C+1][_]),u(w[C][_])):(u(w[C][_+1]),u(w[C+1][_+1]),u(w[C+1][_]))}}function h(M){let y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function c(){let M=new R;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let x=g(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(x,1-T)}m(),d()}function d(){for(let M=0;M<o.length;M+=6){let y=o[M+0],x=o[M+2],T=o[M+4],E=Math.max(y,x,T),w=Math.min(y,x,T);E>.9&&w<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,y){let x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){let M=new R,y=new R,x=new R,T=new R,E=new J,w=new J,C=new J;for(let S=0,_=0;S<r.length;S+=9,_+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),T.copy(M).add(y).add(x).divideScalar(3);let I=g(T);v(E,_+0,M,I),v(w,_+2,y,I),v(C,_+4,x,I)}}function v(M,y,x,T){T<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ho=class i extends yc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mr=class extends pr{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}},wx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ad(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,d,u,f;if(n&&(r=Px(i,t,r,e)),i.length>80*e){a=h=i[0],l=c=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<a&&(a=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return gr(r,o,e,a,l,f,0),o}};function ad(i,t,e,n,s){let r,o;if(s===kx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Iu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Iu(r,i[r],i[r+1],o);return o&&Ko(o,o.next)&&(vr(o),o=o.next),o}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ko(e,e.next)||Ee(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Nx(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?Ax(i,n,s,r):Tx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),vr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Rx(Ni(i),t,e),gr(i,t,e,n,s,r,2)):o===2&&Cx(i,t,e,n,s,r):gr(Ni(i),t,e,n,s,r,1);break}}}function Tx(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=s<r?s<o?s:o:r<o?r:o,d=a<l?a<h?a:h:l<h?l:h,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,m=n.next;for(;m!==t;){if(m.x>=c&&m.x<=u&&m.y>=d&&m.y<=f&&ls(s,a,r,l,o,h,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ax(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,c=s.y,d=r.y,u=o.y,f=a<l?a<h?a:h:l<h?l:h,m=c<d?c<u?c:u:d<u?d:u,v=a>l?a>h?a:h:l>h?l:h,g=c>d?c>u?c:u:d>u?d:u,p=Mc(f,m,t,e,n),M=Mc(v,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ls(a,c,l,d,h,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&ls(a,c,l,d,h,u,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&ls(a,c,l,d,h,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&ls(a,c,l,d,h,u,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ko(s,r)&&ld(s,n,n.next,r)&&xr(s,r)&&xr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function Cx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ox(o,a)){let l=cd(o,a);o=Ni(o,o.next),l=Ni(l,l.next),gr(o,t,e,n,s,r,0),gr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Px(i,t,e,n){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=ad(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Fx(h));for(s.sort(Ix),r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Ix(i,t){return i.x-t.x}function Lx(i,t){let e=Dx(i,t);if(!e)return t;let n=cd(e,i);return Ni(n,n.next),Ni(e,e.next)}function Dx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,c=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ls(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),xr(e,i)&&(d<c||d===c&&(e.x>s.x||e.x===s.x&&Ux(s,e)))&&(s=e,c=d)),e=e.next;while(e!==a);return s}function Ux(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Nx(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zx(s)}function zx(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bx(i,t)&&(xr(i,t)&&xr(t,i)&&Hx(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Ko(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ko(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=ho(Ee(i,t,e)),r=ho(Ee(i,t,n)),o=ho(Ee(e,n,i)),a=ho(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&co(i,e,t)||r===0&&co(i,n,t)||o===0&&co(e,i,n)||a===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function Bx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Hx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){let e=new _c(i.i,i.x,i.y),n=new _c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Iu(i,t,e,n){let s=new _c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lu(t),Du(n,t);let o=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Du(n,e[l]);let a=wx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ko=class i extends ie{constructor(t=new mr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Vx,y,x=!1,T,E,w,C;p&&(y=p.getSpacedPoints(c),x=!0,u=!1,T=p.computeFrenetFrames(c,!1),E=new R,w=new R,C=new R),u||(g=0,f=0,m=0,v=0);let S=a.extractPoints(h),_=S.shape,I=S.holes;if(!sr.isClockWise(_)){_=_.reverse();for(let Q=0,it=I.length;Q<it;Q++){let L=I[Q];sr.isClockWise(L)&&(I[Q]=L.reverse())}}let U=sr.triangulateShape(_,I),B=_;for(let Q=0,it=I.length;Q<it;Q++){let L=I[Q];_=_.concat(L)}function V(Q,it,L){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(it,L)}let k=_.length,tt=U.length;function X(Q,it,L){let Pt,et,St,ut=Q.x-it.x,Dt=Q.y-it.y,yt=L.x-Q.x,P=L.y-Q.y,b=ut*ut+Dt*Dt,H=ut*P-Dt*yt;if(Math.abs(H)>Number.EPSILON){let Y=Math.sqrt(b),$=Math.sqrt(yt*yt+P*P),Z=it.x-Dt/Y,Tt=it.y+ut/Y,pt=L.x-P/$,Mt=L.y+yt/$,jt=((pt-Z)*P-(Mt-Tt)*yt)/(ut*P-Dt*yt);Pt=Z+ut*jt-Q.x,et=Tt+Dt*jt-Q.y;let nt=Pt*Pt+et*et;if(nt<=2)return new J(Pt,et);St=Math.sqrt(nt/2)}else{let Y=!1;ut>Number.EPSILON?yt>Number.EPSILON&&(Y=!0):ut<-Number.EPSILON?yt<-Number.EPSILON&&(Y=!0):Math.sign(Dt)===Math.sign(P)&&(Y=!0),Y?(Pt=-Dt,et=ut,St=Math.sqrt(b)):(Pt=ut,et=Dt,St=Math.sqrt(b/2))}return new J(Pt/St,et/St)}let ht=[];for(let Q=0,it=B.length,L=it-1,Pt=Q+1;Q<it;Q++,L++,Pt++)L===it&&(L=0),Pt===it&&(Pt=0),ht[Q]=X(B[Q],B[L],B[Pt]);let ft=[],_t,Nt=ht.concat();for(let Q=0,it=I.length;Q<it;Q++){let L=I[Q];_t=[];for(let Pt=0,et=L.length,St=et-1,ut=Pt+1;Pt<et;Pt++,St++,ut++)St===et&&(St=0),ut===et&&(ut=0),_t[Pt]=X(L[Pt],L[St],L[ut]);ft.push(_t),Nt=Nt.concat(_t)}for(let Q=0;Q<g;Q++){let it=Q/g,L=f*Math.cos(it*Math.PI/2),Pt=m*Math.sin(it*Math.PI/2)+v;for(let et=0,St=B.length;et<St;et++){let ut=V(B[et],ht[et],Pt);at(ut.x,ut.y,-L)}for(let et=0,St=I.length;et<St;et++){let ut=I[et];_t=ft[et];for(let Dt=0,yt=ut.length;Dt<yt;Dt++){let P=V(ut[Dt],_t[Dt],Pt);at(P.x,P.y,-L)}}}let re=m+v;for(let Q=0;Q<k;Q++){let it=u?V(_[Q],Nt[Q],re):_[Q];x?(w.copy(T.normals[0]).multiplyScalar(it.x),E.copy(T.binormals[0]).multiplyScalar(it.y),C.copy(y[0]).add(w).add(E),at(C.x,C.y,C.z)):at(it.x,it.y,0)}for(let Q=1;Q<=c;Q++)for(let it=0;it<k;it++){let L=u?V(_[it],Nt[it],re):_[it];x?(w.copy(T.normals[Q]).multiplyScalar(L.x),E.copy(T.binormals[Q]).multiplyScalar(L.y),C.copy(y[Q]).add(w).add(E),at(C.x,C.y,C.z)):at(L.x,L.y,d/c*Q)}for(let Q=g-1;Q>=0;Q--){let it=Q/g,L=f*Math.cos(it*Math.PI/2),Pt=m*Math.sin(it*Math.PI/2)+v;for(let et=0,St=B.length;et<St;et++){let ut=V(B[et],ht[et],Pt);at(ut.x,ut.y,d+L)}for(let et=0,St=I.length;et<St;et++){let ut=I[et];_t=ft[et];for(let Dt=0,yt=ut.length;Dt<yt;Dt++){let P=V(ut[Dt],_t[Dt],Pt);x?at(P.x,P.y+y[c-1].y,y[c-1].x+L):at(P.x,P.y,d+L)}}}K(),st();function K(){let Q=s.length/3;if(u){let it=0,L=k*it;for(let Pt=0;Pt<tt;Pt++){let et=U[Pt];Lt(et[2]+L,et[1]+L,et[0]+L)}it=c+g*2,L=k*it;for(let Pt=0;Pt<tt;Pt++){let et=U[Pt];Lt(et[0]+L,et[1]+L,et[2]+L)}}else{for(let it=0;it<tt;it++){let L=U[it];Lt(L[2],L[1],L[0])}for(let it=0;it<tt;it++){let L=U[it];Lt(L[0]+k*c,L[1]+k*c,L[2]+k*c)}}n.addGroup(Q,s.length/3-Q,0)}function st(){let Q=s.length/3,it=0;wt(B,it),it+=B.length;for(let L=0,Pt=I.length;L<Pt;L++){let et=I[L];wt(et,it),it+=et.length}n.addGroup(Q,s.length/3-Q,1)}function wt(Q,it){let L=Q.length;for(;--L>=0;){let Pt=L,et=L-1;et<0&&(et=Q.length-1);for(let St=0,ut=c+g*2;St<ut;St++){let Dt=k*St,yt=k*(St+1),P=it+Pt+Dt,b=it+et+Dt,H=it+et+yt,Y=it+Pt+yt;Bt(P,b,H,Y)}}}function at(Q,it,L){l.push(Q),l.push(it),l.push(L)}function Lt(Q,it,L){zt(Q),zt(it),zt(L);let Pt=s.length/3,et=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee(et[0]),ee(et[1]),ee(et[2])}function Bt(Q,it,L,Pt){zt(Q),zt(it),zt(Pt),zt(it),zt(L),zt(Pt);let et=s.length/3,St=M.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);ee(St[0]),ee(St[1]),ee(St[3]),ee(St[1]),ee(St[2]),ee(St[3])}function zt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ee(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new gc[s.type]().fromJSON(s)),new i(n,t.options)}},Vx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new J(r,o),new J(a,l),new J(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new J(o,1-l),new J(h,1-d),new J(u,1-m),new J(v,1-p)]:[new J(a,1-l),new J(c,1-d),new J(f,1-m),new J(g,1-p)]}};function Gx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yr=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],c=[],d=t,u=(e-t)/s,f=new R,m=new J;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,c.push(m.x,m.y)}d+=u}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let M=p+g,y=M,x=M+n+1,T=M+n+2,E=M+1;a.push(y,x,E),a.push(x,T,E)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new R,u=new R,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let E=T/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(E+x,1-y),M.push(h++)}c.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=c[p][M+1],x=c[p][M],T=c[p+1][M],E=c[p+1][M+1];(p!==0||o>0)&&f.push(y,x,E),(p!==n-1||l<Math.PI)&&f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],c=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let v=m/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(m/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,M=(s+1)*f+m;o.push(v,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vo=class extends Kt{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},kt=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function uo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-n;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,l=2*n-e;break;case Ah:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let T=0;T!==a;++T)r[T]=p*o[c+T]+M*o[h+T]+y*o[l+T]+x*o[d+T];return r}},bc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},Ec=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vo:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wx(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xl;var zi=class extends Cn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=vo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Cn{};wc.prototype.ValueTypeName="color";var Tc=class extends Cn{};Tc.prototype.ValueTypeName="number";var Ac=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Te.slerpFlat(r,0,o,h-a,o,h,l);return r}},Go=class extends Cn{InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=vo;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Cn{};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null}}},Xx=new Cc,Pc=class{constructor(t){this.manager=t!==void 0?t:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wo=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new qt,Uu=new R,Nu=new R,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ic=class extends Mr{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Mo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Xo=class extends Ts{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zu=new qt,Qs=new R,ol=new R,Lc=class extends Mr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),ol.copy(n.position),ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ol),n.updateMatrixWorld(),s.makeTranslation(-Qs.x,-Qs.y,-Qs.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}},As=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Dc=class extends Mr{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var gi=class extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Cs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fu(){return performance.now()}var jc="\\[\\]\\.:\\/",qx=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",Yx="[^"+jc.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Kx=/(WCOD+)?/.source.replace("WCOD",Yx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Qx=new RegExp("^"+Zx+Kx+Jx+jx+"$"),$x=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(t){let e=Qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Uc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);var Jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tv=new vs(-1,1,1,-1,0,1),$c=class extends ie{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}},ev=new $c,Fn=class{constructor(t){this._mesh=new lt(ev,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ls=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Kt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mn.clone(t.uniforms),this.material=new Kt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sr=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},jo=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Qo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ls(Jo),this.copyPass.material.blending=Nn,this.clock=new Cs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sr!==void 0&&(o instanceof Sr?n=!0:o instanceof jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $o=class extends an{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var hd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ds=class i extends an{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,o,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Ne(r,o,{type:en});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ne(r,o,{type:en});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=hd;this.highPassUniforms=Mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Jo;this.copyUniforms=Mn.clone(c.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new _e,this.fsQuad=new Fn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Kt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Kt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ds.BlurDirectionX=new J(1,0);Ds.BlurDirectionY=new J(0,1);var ud={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ta=class extends an{constructor(){super();let t=ud;this.uniforms=Mn.clone(t.uniforms),this.material=new Vo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var br={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Er={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},ea={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var na=class extends an{constructor(t,e){super(),this.edgesRT=new Ne(t,e,{depthBuffer:!1,type:en}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Ne(t,e,{depthBuffer:!1,type:en}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Ke,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=xn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Ke,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=tn,this.searchTexture.minFilter=tn,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Mn.clone(br.uniforms),this.uniformsEdges.resolution.value.set(1/t,1/e),this.materialEdges=new Kt({defines:Object.assign({},br.defines),uniforms:this.uniformsEdges,vertexShader:br.vertexShader,fragmentShader:br.fragmentShader}),this.uniformsWeights=Mn.clone(Er.uniforms),this.uniformsWeights.resolution.value.set(1/t,1/e),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Kt({defines:Object.assign({},Er.defines),uniforms:this.uniformsWeights,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader}),this.uniformsBlend=Mn.clone(ea.uniforms),this.uniformsBlend.resolution.value.set(1/t,1/e),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Kt({uniforms:this.uniformsBlend,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader}),this.fsQuad=new Fn(null)}render(t,e,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,t.setRenderTarget(this.edgesRT),this.clear&&t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialWeights,t.setRenderTarget(this.weightsRT),this.clear&&t.clear(),this.fsQuad.render(t),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}setSize(t,e){this.edgesRT.setSize(t,e),this.weightsRT.setSize(t,e),this.materialEdges.uniforms.resolution.value.set(1/t,1/e),this.materialWeights.uniforms.resolution.value.set(1/t,1/e),this.materialBlend.uniforms.resolution.value.set(1/t,1/e)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var nv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new J(1,1)},uGrain:{value:.035},uAberr:{value:0},uFlash:{value:0},uAttack:{value:0},uLost:{value:0},uHit:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uGrain, uAberr, uFlash, uAttack, uLost, uHit; uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
    void main(){
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      float ab = (0.0018 + uAberr * 0.02) * r2 * 2.2;
      vec3 col = vec3(texture2D(tDiffuse, vUv + d * ab).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ab).b);
      // lightning: cold lift of the whole frame
      col += uFlash * (0.08 + col * 0.6) * vec3(0.75, 0.82, 1.0);
      // attacked: pulsing red grade
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      float pulse = 0.65 + 0.35 * sin(uTime * 8.0);
      col = mix(col, vec3(lum) * vec3(1.35, 0.42, 0.38), uAttack * 0.5 * pulse);
      col = mix(col, vec3(lum * 0.8), uLost);
      // vignette (also darkens corners for the HUD panels)
      col *= mix(1.0, 0.42, smoothstep(0.08, 0.62, r2 * 1.35));
      // red edges on hit / while attacked
      float edge = smoothstep(0.12, 0.5, r2);
      col += vec3(0.9, 0.04, 0.03) * edge * (uHit + uAttack * 0.35 * pulse);
      // film grain
      float n = hash(vUv * uRes + fract(uTime * 7.13) * 91.7) - 0.5;
      col += n * uGrain * (0.5 + 0.5 * min(lum, 1.0));
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`},th={high:{label:"HIGH",ratioMax:1.5,msaa:4,smaa:!1,shadows:!0,shadowSize:2048,particles:1,rain:1},low:{label:"LOW",ratioMax:1,msaa:0,smaa:!0,shadows:!1,shadowSize:1024,particles:.4,rain:.35}},ia=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,t.shadowMap.enabled=!0,t.shadowMap.type=zc,t.toneMapping=_r,t.toneMappingExposure=1.25;let s=window.innerWidth,r=window.innerHeight,o=new Ne(s,r,{type:en,samples:4});this.composer=new Qo(t,o),this.renderPass=new $o(e,n),this.bloom=new Ds(new J(s,r),.8,.55,.78),this.output=new ta,this.final=new Ls(nv),this.smaa=new na(s,r);for(let a of[this.renderPass,this.bloom,this.output,this.final,this.smaa])this.composer.addPass(a);this.hit=0,this.flashT=0,this.quality=null,this.fpsAcc=0,this.fpsN=0,this.lowStreak=0,window.addEventListener("resize",()=>this.resize())}setQuality(t){let e=th[t]||th.high;this.quality=t in th?t:"high",this.q=e;let n=Math.min(window.devicePixelRatio||1,e.ratioMax);this.renderer.setPixelRatio(n),this.composer.setPixelRatio(n);for(let s of[this.composer.renderTarget1,this.composer.renderTarget2])s.samples!==e.msaa&&(s.samples=e.msaa,s.dispose());this.smaa.enabled=e.smaa,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e);let n=this.renderer.getPixelRatio();this.final.uniforms.uRes.value.set(t*n,e*n)}render(t,e,n){let s=this.final.uniforms;s.uTime.value=e,s.uFlash.value=n.flash||0,s.uAberr.value=Math.min(1,(n.shake||0)*.6),s.uAttack.value+=((n.attack?1:0)-s.uAttack.value)*Math.min(1,t*4),s.uLost.value+=((n.lost?1:0)-s.uLost.value)*Math.min(1,t*2),this.hit=Math.max(0,this.hit-t*3.5),s.uHit.value=this.hit,this.bloom.enabled=n.bloom!==!1,this.composer.render(t)}shouldDropToLow(t){if(this.quality!=="high"||t<=0||(this.fpsAcc+=t,this.fpsN++,this.fpsAcc<1))return!1;let e=this.fpsN/this.fpsAcc;return this.fpsAcc=0,this.fpsN=0,this.lowStreak=e<42?this.lowStreak+1:0,this.lowStreak>=3}};function sa(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ie,h=0;for(let c=0;c<i.length;++c){let d=i[c],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+c);c+=i[u].attributes.position.count}l.setIndex(d)}for(let c in r){let d=dd(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in o){let d=o[c][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][u]);let m=dd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}return l}function dd(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let o=new t(r),a=new be(o,e,n),l=0;for(let h=0;h<i.length;++h){let c=i[h];if(c.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=c.count;u<f;u++)for(let m=0;m<e;m++){let v=c.getComponent(u,m);a.setComponent(u+d,m,v)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function ra(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new Ve(e);return n.colorSpace=de,n}function fd(i="rgba(255,255,255,1)",t=.25,e=64){return ra(e,(n,s)=>{let r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,i),r.addColorStop(t,i.replace(/[\d.]+\)$/,"0.55)")),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,s,s)})}function pd(i=128,t=7){let e=t,n=()=>(e=e*16807%2147483647,e/2147483647);return ra(i,(s,r)=>{s.clearRect(0,0,r,r);for(let o=0;o<26;o++){let a=r*(.12+n()*.18),l=n()*Math.PI*2,h=n()*r*.22,c=r/2+Math.cos(l)*h,d=r/2+Math.sin(l)*h,u=s.createRadialGradient(c,d,0,c,d,a);u.addColorStop(0,"rgba(255,255,255,0.22)"),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.beginPath(),s.arc(c,d,a,0,Math.PI*2),s.fill()}})}function md(i=128){return ra(i,(t,e)=>{let n=t.createRadialGradient(e/2,e*.62,0,e/2,e*.55,e*.48);n.addColorStop(0,"rgba(255,250,220,1)"),n.addColorStop(.25,"rgba(255,190,80,0.9)"),n.addColorStop(.6,"rgba(255,80,10,0.35)"),n.addColorStop(1,"rgba(120,0,0,0)"),t.fillStyle=n,t.beginPath(),t.ellipse(e/2,e*.55,e*.34,e*.46,0,0,Math.PI*2),t.fill()})}function gd(i=64){return ra(i,(t,e)=>{let n=t.createLinearGradient(0,0,e,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,e*.42,e,e*.16);let s=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e*.5);s.addColorStop(0,"rgba(255,255,255,0.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,e,e)})}var iv=`
  attribute vec3 iPos; attribute vec4 iCol; attribute vec3 iSR;   // size, rotation, stretch
  uniform float uFogDensity;
  varying vec2 vUv; varying vec4 vCol; varying float vFog;
  void main(){
    vUv = uv; vCol = iCol;
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    float c = cos(iSR.y), s = sin(iSR.y);
    vec2 q = vec2(position.x * iSR.z, position.y);
    vec2 p = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * iSR.x;
    vec4 mv = viewMatrix * vec4(iPos + right * p.x + up * p.y, 1.0);
    gl_Position = projectionMatrix * mv;
    float d = -mv.z;
    vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  }`,sv=`
  uniform sampler2D uMap; uniform vec3 uFogColor; uniform float uAdditive;
  varying vec2 vUv; varying vec4 vCol; varying float vFog;
  void main(){
    vec4 t = texture2D(uMap, vUv);
    vec4 c = t * vCol;
    if (c.a < 0.003) discard;
    if (uAdditive > 0.5) { c.rgb *= c.a * (1.0 - vFog); gl_FragColor = vec4(c.rgb, 1.0); }
    else { c.rgb = mix(c.rgb, uFogColor, vFog); gl_FragColor = c; }
    #include <colorspace_fragment>
  }`,Bi=class{constructor(t,{max:e=512,map:n,additive:s=!0,renderOrder:r=10}={}){this.max=e,this.list=[],this.free=[];let o=new Re(1,1),a=new gi;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),this.aPos=new ze(new Float32Array(e*3),3).setUsage(Oi),this.aCol=new ze(new Float32Array(e*4),4).setUsage(Oi),this.aSR=new ze(new Float32Array(e*3),3).setUsage(Oi),a.setAttribute("iPos",this.aPos),a.setAttribute("iCol",this.aCol),a.setAttribute("iSR",this.aSR),a.instanceCount=0,a.boundingSphere=new Je(new R,1e7),this.mat=new Kt({uniforms:{uMap:{value:n},uFogDensity:{value:0},uFogColor:{value:new ot},uAdditive:{value:s?1:0}},vertexShader:iv,fragmentShader:sv,transparent:!0,depthWrite:!1,blending:s?$t:ui}),this.mesh=new lt(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.userData.noAO=!0,this.geo=a,t.add(this.mesh),this.scale=1}spawn(t){if(this.list.length>=this.max)return null;let e=this.free.pop()||{};return e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx||0,e.vy=t.vy||0,e.vz=t.vz||0,e.life=t.life||1,e.age=0,e.size=t.size||1,e.size1=t.size1!==void 0?t.size1:e.size,e.r=t.r!==void 0?t.r:1,e.g=t.g!==void 0?t.g:1,e.b=t.b!==void 0?t.b:1,e.a=t.a!==void 0?t.a:1,e.a1=t.a1!==void 0?t.a1:0,e.rot=t.rot||0,e.vrot=t.vrot||0,e.drag=t.drag||0,e.grav=t.grav||0,e.stretch=t.stretch||1,e.fadeIn=t.fadeIn||0,e.vstretch=!!t.vstretch,this.list.push(e),e}update(t,e,n){let s=1,r=0,o=0,a=0,l=1,h=0;if(n){let m=n.matrixWorld.elements;s=m[0],r=m[1],o=m[2],a=m[4],l=m[5],h=m[6]}e&&(this.mat.uniforms.uFogDensity.value=e.density,this.mat.uniforms.uFogColor.value.copy(e.color));let c=this.aPos.array,d=this.aCol.array,u=this.aSR.array,f=0;for(let m=this.list.length-1;m>=0;m--){let v=this.list[m];if(v.age+=t,v.age>=v.life){this.list[m]=this.list[this.list.length-1],this.list.pop(),this.free.push(v);continue}let g=Math.exp(-v.drag*t);v.vx*=g,v.vy=v.vy*g-v.grav*t,v.vz*=g,v.x+=v.vx*t,v.y+=v.vy*t,v.z+=v.vz*t,v.rot+=v.vrot*t,v.vstretch&&(v.rot=Math.atan2(v.vx*a+v.vy*l+v.vz*h,v.vx*s+v.vy*r+v.vz*o))}for(let m=0;m<this.list.length;m++){let v=this.list[m],g=v.age/v.life,p=v.a+(v.a1-v.a)*g;v.fadeIn>0&&v.age<v.fadeIn&&(p*=v.age/v.fadeIn),c[f*3]=v.x,c[f*3+1]=v.y,c[f*3+2]=v.z,d[f*4]=v.r,d[f*4+1]=v.g,d[f*4+2]=v.b,d[f*4+3]=p,u[f*3]=v.size+(v.size1-v.size)*g,u[f*3+1]=v.rot,u[f*3+2]=v.stretch,f++}this.geo.instanceCount=f,this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSR.needsUpdate=!0,f>0&&(this.aPos.addUpdateRange(0,f*3),this.aCol.addUpdateRange(0,f*4),this.aSR.addUpdateRange(0,f*3))}clear(){for(;this.list.length;)this.free.push(this.list.pop());this.geo.instanceCount=0}};function rv(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(0,0,0,0.95)"),n.addColorStop(.45,"rgba(10,6,4,0.75)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let s=11,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<18;a++){let l=r()*Math.PI*2,h=128*(.25+r()*.22);e.strokeStyle=`rgba(0,0,0,${.35+r()*.3})`,e.lineWidth=2+r()*4,e.beginPath(),e.moveTo(128/2,128/2),e.lineTo(128/2+Math.cos(l)*h,128/2+Math.sin(l)*h),e.stroke()}let o=new Ve(t);return o.colorSpace=de,o}var eh=class{constructor(){this.ready=!1,this.q=1}init(t){if(this.ready)return;this.scene=t,this.glow=new Bi(t,{max:400,map:fd("rgba(255,255,255,1)",.18),additive:!0,renderOrder:12}),this.spark=new Bi(t,{max:900,map:gd(),additive:!0,renderOrder:13}),this.fire=new Bi(t,{max:1400,map:md(),additive:!0,renderOrder:11}),this.smoke=new Bi(t,{max:900,map:pd(),additive:!1,renderOrder:9}),this.pools=[this.smoke,this.fire,this.glow,this.spark],this.decalMax=200,this.decalN=0;let e=new Re(1,1);e.rotateX(-Math.PI/2),this.decals=new Fe(e,new _e({map:rv(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.decalMax),this.decals.count=0,this.decals.renderOrder=2,this.decals.frustumCulled=!1,this.decals.userData.noAO=!0,t.add(this.decals),this.lights=[0,1].map(()=>{let n=new As(16728160,0,60,1.6);return n.position.set(0,-500,0),t.add(n),{l:n,t:0,dur:1,i0:0}}),this.lightIdx=0,this.ready=!0}setQuality(t){this.q=t==="low"?.4:1}n(t){return Math.max(1,Math.round(t*this.q))}flashLight(t,e,n,s,r=300,o=.25,a=70){let l=this.lights[this.lightIdx];this.lightIdx=(this.lightIdx+1)%this.lights.length,l.l.position.set(t,e,n),l.l.color.set(s),l.l.distance=a,l.t=0,l.dur=o,l.i0=r,l.l.intensity=r}scorch(t,e,n=6){let s=new qt().compose(new R(t,.06,e),new Te().setFromAxisAngle(new R(0,1,0),Math.random()*6.28),new R(n,1,n)),r=this.decalN%this.decalMax;this.decals.setMatrixAt(r,s),this.decalN++,this.decals.count=Math.min(this.decalN,this.decalMax),this.decals.instanceMatrix.needsUpdate=!0}muzzle(t,e=new ot(1,.25,.45)){this.glow.spawn({x:t.x,y:t.y,z:t.z,life:.12,size:4,size1:9,r:1,g:.9,b:.95,a:1,a1:0}),this.glow.spawn({x:t.x,y:t.y,z:t.z,life:.35,size:7,size1:3,r:e.r,g:e.g,b:e.b,a:.9,a1:0});for(let n=0;n<this.n(10);n++){let s=18+Math.random()*20,r=new R(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize();this.spark.spawn({x:t.x,y:t.y,z:t.z,vx:r.x*s,vy:r.y*s,vz:r.z*s,life:.2+Math.random()*.2,size:.5,r:1,g:.7,b:.8,a:1,a1:0,stretch:5,vstretch:!0,drag:3})}this.flashLight(t.x,t.y,t.z,e,260,.18,50)}impact(t,e,n,s=new ot(1,.25,.45)){this.glow.spawn({x:t,y:e,z:n,life:.25,size:3,size1:16,r:1,g:.95,b:.9,a:1,a1:0}),this.glow.spawn({x:t,y:e,z:n,life:.6,size:10,size1:4,r:s.r,g:s.g,b:s.b,a:.8,a1:0});for(let r=0;r<this.n(26);r++){let o=10+Math.random()*26,a=Math.random()*Math.PI*2,l=Math.random()*1.2;this.spark.spawn({x:t,y:e,z:n,vx:Math.cos(a)*Math.cos(l)*o,vy:Math.sin(l)*o+4,vz:Math.sin(a)*Math.cos(l)*o,life:.4+Math.random()*.6,size:.35+Math.random()*.3,r:1,g:.75+Math.random()*.2,b:.4,a:1,a1:0,stretch:6,vstretch:!0,drag:1.2,grav:22})}this.embers(t,e,n,10),this.smokePuff(t,e-.5,n,5,.35),this.flashLight(t,e+2,n,16740416,200,.35,45)}embers(t,e,n,s=8){for(let r=0;r<this.n(s);r++)this.spark.spawn({x:t+(Math.random()-.5)*2,y:e+Math.random()*2,z:n+(Math.random()-.5)*2,vx:(Math.random()-.5)*3,vy:2+Math.random()*5,vz:(Math.random()-.5)*3,life:1+Math.random()*1.6,size:.25+Math.random()*.25,r:1,g:.5+Math.random()*.3,b:.1,a:1,a1:0,stretch:1.6,vstretch:!0,drag:.6,grav:-1.5})}flame(t,e,n,s=3,r=.9){this.fire.spawn({x:t+(Math.random()-.5)*s*.5,y:e,z:n+(Math.random()-.5)*s*.5,vx:(Math.random()-.5)*1.2,vy:s*(1.1+Math.random()*.8),vz:(Math.random()-.5)*1.2,life:r*(.6+Math.random()*.6),size:s*(.9+Math.random()*.5),size1:s*.25,r:1,g:.55+Math.random()*.25,b:.25,a:.95,a1:0,rot:(Math.random()-.5)*.6,vrot:(Math.random()-.5)*1.5,fadeIn:.08,drag:.8})}smokePuff(t,e,n,s=6,r=.25,o=4,a=3,l=1.5){let h=r*(.8+Math.random()*.4);return this.smoke.spawn({x:t+(Math.random()-.5)*s*.3,y:e,z:n+(Math.random()-.5)*s*.3,vx:l+(Math.random()-.5),vy:a*(.7+Math.random()*.6),vz:l*.4+(Math.random()-.5),life:o*(.7+Math.random()*.6),size:s*.6,size1:s*2.6,r:h,g:h*.95,b:h*.92,a:.55,a1:0,rot:Math.random()*6.28,vrot:(Math.random()-.5)*.4,fadeIn:.6,drag:.15})}dust(t,e,n,s=1){let r=Math.random()*Math.PI*2,o=6+Math.random()*8;this.smoke.spawn({x:t+Math.cos(r)*2,y:e+.4,z:n+Math.sin(r)*2,vx:Math.cos(r)*o,vy:.6+Math.random(),vz:Math.sin(r)*o,life:1.2+Math.random()*.8,size:2,size1:7,r:.42,g:.38,b:.34,a:.45*s,a1:0,rot:Math.random()*6.28,vrot:Math.random()-.5,fadeIn:.15,drag:1.4})}update(t,e,n){if(this.ready){for(let s of this.pools)s.update(t,n,e);for(let s of this.lights)s.l.intensity<=0||(s.t+=t,s.l.intensity=s.t>=s.dur?0:s.i0*(1-s.t/s.dur))}}clear(){if(this.ready)for(let t of this.pools)t.clear()}},Ge=new eh;var Us=new R(0,1,0);function sh(i,t){let e=new ot(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new be(s,3)),i}function Ce(i,t,e,n,s,r,o){let a=new ge(i,t,e);return a.translate(n,s,r),sh(a,o)}function $n(i,t,e,n,s,r,o,a=10,l=0,h=0){let c=new xe(i,t,e,a);return l&&c.rotateZ(l),h&&c.rotateX(h),c.translate(n,s,r),sh(c,o)}function ov(i){for(let t of Object.keys(i.attributes))["position","normal","color"].includes(t)||i.deleteAttribute(t);return i.index?i.toNonIndexed():i}function vi(i){return sa(i.map(ov))}var rh="uniform float uFogDensity; varying float vFog;",wr=class{constructor(t,e,n,{renderOrder:s=8}={}){let r=new Re(1,1),o=new gi;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=new Float32Array(e.length*3),l=new Float32Array(e.length*3),h=new Float32Array(e.length*3);e.forEach((c,d)=>{a.set([c.x,c.y,c.z],d*3),l.set([c.c.r,c.c.g,c.c.b],d*3),h.set([c.size,c.seed,c.flick||0],d*3)}),o.setAttribute("iPos",new ze(a,3)),o.setAttribute("iCol",new ze(l,3)),o.setAttribute("iS",new ze(h,3)),o.instanceCount=e.length,o.boundingSphere=new Je(new R,1e7),this.mat=new Kt({uniforms:{uMap:{value:n},uTime:{value:0},uFogDensity:{value:.0015}},vertexShader:`attribute vec3 iPos, iCol, iS; uniform float uTime; ${rh} varying vec2 vUv; varying vec3 vCol;
        float fl(float s, float amt){ float a = fract(sin(floor(uTime * 12.0 + s * 91.0) * 12.9898 + s) * 43758.5453);
          float b = sin(uTime * (1.5 + s * 3.0) + s * 20.0); return mix(1.0, step(0.35, a) * (0.8 + 0.2 * b), amt); }
        void main(){ vUv = uv; vCol = iCol * fl(iS.y, iS.z);
          vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 u = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          vec4 mv = viewMatrix * vec4(iPos + (r * position.x + u * position.y) * iS.x, 1.0);
          float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying vec3 vCol; varying float vFog;
        void main(){ vec4 t = texture2D(uMap, vUv); gl_FragColor = vec4(vCol * t.rgb * t.a * (1.0 - vFog), 1.0);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:$t}),this.mesh=new lt(o,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.userData.noAO=!0,t.add(this.mesh)}update(t,e){this.mat.uniforms.uTime.value=t,this.mat.uniforms.uFogDensity.value=e.density}},nh=class{constructor(t,e,n,s){let r=new Re(1,1),o=a=>{let l=new gi;l.index=r.index,l.setAttribute("position",r.attributes.position),l.setAttribute("uv",r.attributes.uv);let h=new Float32Array(e.length*3),c=new Float32Array(e.length*3),d=new Float32Array(e.length*3);e.forEach((m,v)=>{h.set([m.x,.1+(a?.02:0),m.z],v*3),c.set([m.c.r,m.c.g,m.c.b],v*3),d.set([a?m.h||8:m.r,m.seed,m.flick||0],v*3)}),l.setAttribute("iPos",new ze(h,3)),l.setAttribute("iCol",new ze(c,3)),l.setAttribute("iS",new ze(d,3)),l.instanceCount=e.length,l.boundingSphere=new Je(new R,1e7);let u=new Kt({uniforms:{uMap:{value:n},uTime:{value:0},uFogDensity:{value:.0015},uGain:{value:a?.5:.24}},vertexShader:`attribute vec3 iPos, iCol, iS; uniform float uTime; ${rh} varying vec2 vUv; varying vec3 vCol; varying float vK;
          float fl(float s, float amt){ float a = fract(sin(floor(uTime * 12.0 + s * 91.0) * 12.9898 + s) * 43758.5453);
            float b = sin(uTime * (1.5 + s * 3.0) + s * 20.0); return mix(1.0, step(0.35, a) * (0.8 + 0.2 * b), amt); }
          void main(){ vUv = uv; vCol = iCol * fl(iS.y, iS.z); vec3 wp;
            ${a?`
            vec2 toC = cameraPosition.xz - iPos.xz; float dist = length(toC); vec2 f = toC / max(dist, 0.001); vec2 sd = vec2(-f.y, f.x);
            float camH = max(cameraPosition.y, 0.5);
            float L = clamp(dist * iS.x / (iS.x + camH), 2.0, 40.0);        // mirror-point distance of a light at height h
            wp = vec3(iPos.x, iPos.y, iPos.z) + vec3(sd.x, 0.0, sd.y) * position.x * 1.6 + vec3(f.x, 0.0, f.y) * (position.y + 0.5) * L * 1.6;
            vK = (1.0 - smoothstep(0.08, 0.7, camH / max(dist, 1.0))) * (1.0 - smoothstep(120.0, 260.0, dist));`:`
            wp = iPos + vec3(position.x, 0.0, -position.y) * iS.x * 2.0; vK = 1.0;`}
            vec4 mv = viewMatrix * vec4(wp, 1.0); float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
            gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uMap; uniform float uGain; varying vec2 vUv; varying vec3 vCol; varying float vK; varying float vFog;
          void main(){ ${a?"float a = (1.0 - abs(vUv.x - 0.5) * 2.0); a = a * a * (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y);":"float a = texture2D(uMap, vUv).a;"}
            gl_FragColor = vec4(vCol * a * vK * uGain * (1.0 - vFog), 1.0);
            #include <colorspace_fragment>
          }`,transparent:!0,depthWrite:!1,blending:$t,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),f=new lt(l,u);return f.frustumCulled=!1,f.renderOrder=3,f.userData.noAO=!0,t.add(f),u};this.mats=[o(!1)],s&&this.mats.push(o(!0))}update(t,e){for(let n of this.mats)n.uniforms.uTime.value=t,n.uniforms.uFogDensity.value=e.density}};function av(i=64){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,0.7)"),n.addColorStop(.5,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new Ve(t);return s.colorSpace=de,s}var ih=[["HOTEL","#ff3b8a"],["OPEN 24H","#3affd0"],["PHARMACY","#4aff6a"],["NOODLES","#ffb03a"],["ARCADE","#b45aff"],["BAR","#ff3a3a"],["CLINIC","#3ad0ff"],["KARAOKE","#ff5ad8"],["RAMEN","#ff7a2a"],["MOTEL","#ffd23a"],["CAFE","#5affe0"],["EXIT","#3aff5a"],["LAUNDRY","#7ab4ff"],["GARAGE","#ff9a3a"],["SUPPLY","#e0ff3a"],["E4 RAMEN","#ff4a6a"]];function lv(){let i=document.createElement("canvas");i.width=1024,i.height=1024;let t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,1024,1024),ih.forEach(([n,s],r)=>{let o=r%2*512,a=Math.floor(r/2)*128;t.save(),t.beginPath(),t.rect(o,a,512,128),t.clip(),t.strokeStyle=s,t.lineWidth=4,t.shadowColor=s,t.shadowBlur=16,t.strokeRect(o+10,a+12,492,104),t.font=`bold ${n.length>7?64:78}px "Arial Black", Impact, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle=s,t.shadowBlur=22,t.fillText(n,o+256,a+66),t.shadowBlur=0,t.fillStyle="rgba(255,255,255,0.85)",t.fillText(n,o+256,a+66),t.restore()});let e=new Ve(i);return e.colorSpace=de,e.anisotropy=4,e}var oa=class{constructor(t){this.world=t,this.scene=t.scene,this.r=aa(31337),this.soft=av(),this.burning=[],this.glows=[],this.pools=[],this.updaters=[],this._lamps(),this._cars(),this._barricades(),this._debris(),this._rooftops(),this._signs(),this._plaza(),this.glowSet=new wr(this.scene,this.glows,this.soft),this.poolSet=new nh(this.scene,this.pools,this.soft,!0)}inPlaza(t,e,n=0){return Math.abs(t)<80+n&&Math.abs(e)<80+n}blocked(t,e,n=1){if(Math.abs(t)>Jt||Math.abs(e)>Jt)return!0;for(let s of this.world.buildingsNear(t,e))if(t>s.minX-n&&t<s.maxX+n&&e>s.minZ-n&&e<s.maxZ+n)return!0;return!1}_lamps(){let t=this.r,e=2895926,n=vi([$n(.13,.2,9,0,4.5,0,e,8),$n(.09,.09,2.6,1.2,8.85,0,e,6,Math.PI/2),Ce(1.1,.22,.45,2.45,8.8,0,3817030),Ce(.9,.06,.32,2.45,8.66,0,16773836)]),s=new kt({vertexColors:!0,metalness:.6,roughness:.45}),r=[],o=(u,f,m)=>{this.inPlaza(u,f)||this.blocked(u,f,.5)||r.push({x:u,z:f,yaw:m})};for(let u=0;u<=he;u++)for(let f=0;f<he;f++){let m=Pe(f),v=Pe(u);for(let[g,p]of[[.25,1],[.75,-1]]){let M=m+nn*g;o(v+p*12.5,M,p>0?Math.PI:0),o(M,v+p*12.5,p>0?Math.PI/2:-Math.PI/2)}}let a=new Fe(n,s,r.length),l=new qt,h=new Te,c=new ot(1,.55,.2),d=new ot(.65,.8,1);r.forEach((u,f)=>{h.setFromAxisAngle(Us,u.yaw),l.compose(new R(u.x,0,u.z),h,new R(1,1,1)),a.setMatrixAt(f,l);let m=t();if(m<.28)return;let v=m<.36?1:0,g=(t()<.7?c:d).clone().multiplyScalar(2.2),p=u.x+Math.cos(-u.yaw)*2.45,M=u.z+Math.sin(-u.yaw)*2.45,y=t();this.glows.push({x:p,y:8.55,z:M,c:g,size:3.2,seed:y,flick:v}),this.glows.push({x:p,y:8.5,z:M,c:g.clone().multiplyScalar(.25),size:11,seed:y,flick:v}),this.pools.push({x:p,z:M,c:g.clone().multiplyScalar(.85),r:8.5,h:8.6,seed:y,flick:v})}),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a)}_carGeo(){let r=vi([Ce(1.85,.7,4.3,0,.6,0,16777215),Ce(1.65,.55,2.2,0,1.22,-.2,1054752),Ce(1.55,.06,2,0,1.52,-.2,16777215),...[[-.9,1.35],[.9,1.35],[-.9,-1.35],[.9,-1.35]].map(([l,h])=>$n(.36,.36,.28,l,.36,h,1118481,12,Math.PI/2)),Ce(.4,.14,.05,-.6,.72,2.16,14540253),Ce(.4,.14,.05,.6,.72,2.16,14540253),Ce(.4,.12,.05,-.6,.78,-2.16,8392720),Ce(.4,.12,.05,.6,.78,-2.16,8392720)]),o=vi([Ce(2.55,2.6,11.5,0,1.75,0,16777215),Ce(2.6,.9,10.6,0,2.15,-.2,1054752),Ce(2.4,1.1,.05,0,2.1,5.76,1054752),...[[-1.15,3.8],[1.15,3.8],[-1.15,-3.6],[1.15,-3.6]].map(([l,h])=>$n(.5,.5,.35,l,.5,h,1118481,12,Math.PI/2))]),a=vi([Ce(2.3,1.6,2.2,0,1.4,2.6,16777215),Ce(2.1,.7,.05,0,1.75,3.71,1054752),Ce(2.4,2.4,5,0,1.85,-1.2,5922888),...[[-1.05,2.6],[1.05,2.6],[-1.05,-.4],[1.05,-.4],[-1.05,-2.6],[1.05,-2.6]].map(([l,h])=>$n(.48,.48,.38,l,.48,h,1118481,12,Math.PI/2))]);return{car:r,bus:o,truck:a}}_cars(){let t=this.r,{car:e,bus:n,truck:s}=this._carGeo(),r=new kt({vertexColors:!0,metalness:.45,roughness:.38}),o=[9051164,1849962,11579568,2105894,6973984,13684944,2775610,8014362,4860506],a={car:[],bus:[],truck:[]},l=this.world.pylons;for(let f=0;f<900&&a.car.length<210;f++){let m=t()<.5,v=Math.floor(t()*(he+1)),g=Math.floor(t()*he),p=Pe(g)+16+t()*(nn-32),M=(t()<.5?-1:1)*(3+t()*4.5),y=m?Pe(v)+M:p,x=m?p:Pe(v)+M;if(this.inPlaza(y,x,6)||this.blocked(y,x,2)||l.some(U=>Math.hypot(U.x-y,U.z-x)<18))continue;let T=t(),E=T<.07?"bus":T<.13?"truck":"car",w=t()<.25,C=(m?0:Math.PI/2)+(t()<.5?0:Math.PI)+(w?(t()-.5)*2.2:(t()-.5)*.25),S=t()<.08,_=S||t()<.12,I=w&&E==="car"&&t()<.15,N=new ot(_?1446415:o[Math.floor(t()*o.length)]);a[E].push({x:y,z:x,yaw:C,col:N,burning:S,flipped:I,hazard:!_&&t()<.12})}let h=new qt,c=new Te,d=new on;for(let[f,m]of[["car",e],["bus",n],["truck",s]]){let v=a[f],g=new Fe(m,r,v.length);v.forEach((p,M)=>{d.set(p.flipped?0:(t()-.5)*.04,p.yaw,p.flipped?Math.PI:(t()-.5)*.04),c.setFromEuler(d),h.compose(new R(p.x,p.flipped&&f==="car"?1.55:0,p.z),c,new R(1,1,1)),g.setMatrixAt(M,h),g.setColorAt(M,p.col);let y=f==="bus"?5.5:f==="truck"?3.6:2.1;if(p.burning&&(this.burning.push({x:p.x,z:p.z,size:f==="car"?2.6:4,acc:0,sacc:0}),this.pools.push({x:p.x,z:p.z,c:new ot(1,.42,.1).multiplyScalar(1.6),r:f==="car"?10:14,h:3,seed:t(),flick:.4}),this.glows.push({x:p.x,y:2.5,z:p.z,c:new ot(1,.4,.1).multiplyScalar(.5),size:16,seed:t(),flick:.3})),p.hazard){let x=Math.sin(p.yaw),T=Math.cos(p.yaw),E=Math.cos(p.yaw),w=-Math.sin(p.yaw);for(let[C,S]of[[y,1],[y,-1],[-y,1],[-y,-1]])this.glows.push({x:p.x+x*C+E*S*.75,y:.75,z:p.z+T*C+w*S*.75,c:new ot(1.6,.75,.1),size:1.6,seed:.5,flick:0,hazard:!0})}}),g.castShadow=!0,g.receiveShadow=!0,this.scene.add(g)}let u=this.glows.filter(f=>f.hazard);this.glows=this.glows.filter(f=>!f.hazard),u.length&&(this.hazard=new wr(this.scene,u,this.soft),this.updaters.push(f=>{this.hazard.mesh.visible=Math.sin(f*5)>0}))}_barricades(){let t=this.r,e=new mr;e.moveTo(-.35,0),e.lineTo(.35,0),e.lineTo(.15,.25),e.lineTo(.09,.85),e.lineTo(-.09,.85),e.lineTo(-.15,.25),e.closePath();let n=new ko(e,{depth:3,bevelEnabled:!1});n.translate(0,0,-1.5);let s=new kt({color:9078912,roughness:.85}),r=new kt({color:16738842,roughness:.6,emissive:2099200}),o=new Bo(.28,.7,2,6);o.rotateZ(Math.PI/2),o.scale(1,.6,1);let a=new kt({color:6970432,roughness:1}),l=vi([Ce(.18,.18,2.6,0,.9,0,2763306),$n(.09,.09,2.6,0,.9,0,2763306,6,Math.PI/4,Math.PI/2),$n(.09,.09,2.6,0,.9,0,2763306,6,-Math.PI/4,Math.PI/2)]),h=new kt({vertexColors:!0,metalness:.7,roughness:.5}),c=[],d=[],u=[],f=(w,C,S,_,I=0)=>{let N=Math.hypot(S-w,_-C),U=Math.floor(N/3.1),B=Math.atan2(S-w,_-C);for(let V=0;V<U;V++){if(I&&V%I===I-1)continue;let k=(V+.5)/U;c.push({x:w+(S-w)*k,z:C+(_-C)*k,yaw:B+(t()-.5)*.08})}},m=84;for(let w of[-1,1])f(-m,w*m,-14,w*m),f(14,w*m,m,w*m),f(w*m,-m,w*m,-14),f(w*m,14,w*m,m);for(let w of this.world.habitats){for(let _=0;_<44;_++){if(_%11===0)continue;let I=_/44*Math.PI*2;if(c.push({x:w.x+Math.cos(I)*24,z:w.z+Math.sin(I)*24,yaw:-I}),_%3===0)for(let N=0;N<2;N++)d.push({x:w.x+Math.cos(I)*(24+1.2),y:.17+N*.32,z:w.z+Math.sin(I)*(24+1.2),yaw:-I+Math.PI/2})}for(let _=0;_<10;_++){let I=t()*Math.PI*2;u.push({x:w.x+Math.cos(I)*(29+t()*4),z:w.z+Math.sin(I)*(29+t()*4),yaw:t()*6})}}for(let w of this.world.hordes){let C=Math.round(w.x/nn+he/2),S=Pe(C);if(Math.abs(S-w.x)>60)continue;let _=w.z+(w.z>0?-1:1)*(w.radius+10);if(!this.inPlaza(S,_,10)){f(S-12,_,S+12,_,4);for(let I=0;I<4;I++)u.push({x:S+(t()-.5)*20,z:_+(t()-.5)*8+4,yaw:t()*6})}}for(let w=0;w<26;w++){let C=t()<.5?-1:1,S=(t()-.5)*2*m,_=t()<.5?S:C*(m+5+t()*3),I=_===S?C*(m+5+t()*3):S;Math.abs(_)<14||Math.abs(I)<14||u.push({x:_,z:I,yaw:t()*6})}for(let[w,C]of[[-1,-1],[1,-1],[-1,1],[1,1]])for(let S=0;S<9;S++)for(let _=0;_<3;_++){let I=S/8*Math.PI/2;d.push({x:w*(m-8)+w*Math.cos(I)*-6,y:.17+_*.32,z:C*(m-8)+C*Math.sin(I)*-6,yaw:I*w*C+_%2*.3})}let v=new qt,g=new Te,p=new R(1,1,1),M=new Fe(n,s,c.length),y=new ge(.2,.12,2.6);y.translate(0,.55,0);let x=new Fe(y,r,c.length);c.forEach((w,C)=>{g.setFromAxisAngle(Us,w.yaw),v.compose(new R(w.x,0,w.z),g,p),M.setMatrixAt(C,v),x.setMatrixAt(C,v)});let T=new Fe(o,a,d.length);d.forEach((w,C)=>{g.setFromAxisAngle(Us,w.yaw),v.compose(new R(w.x,w.y,w.z),g,p),T.setMatrixAt(C,v)});let E=new Fe(l,h,u.length);u.forEach((w,C)=>{g.setFromAxisAngle(Us,w.yaw),v.compose(new R(w.x,0,w.z),g,p),E.setMatrixAt(C,v)});for(let w of[M,x,T,E])w.castShadow=!0,w.receiveShadow=!0,this.scene.add(w)}_debris(){let t=this.r,e=new Ho(1,0),n=[];for(let h=0;h<he;h++)for(let c=0;c<he;c++){let d=this.world.cellType[h][c],u=Pn(h),f=Pn(c),m=d==="ruin"?60:d==="lot"?6:0;for(let v=0;v<m;v++)n.push({x:u+(t()-.5)*yi,z:f+(t()-.5)*yi,s:.3+Math.pow(t(),2)*2.2})}for(let h=0;h<500;h++){let c=t()<.5,d=Math.floor(t()*(he+1)),u=(t()-.5)*2*Jt,f=(t()<.5?-1:1)*(11+t()*3),m=c?Pe(d)+f:u,v=c?u:Pe(d)+f;this.inPlaza(m,v)||this.blocked(m,v,.3)||n.push({x:m,z:v,s:.15+t()*.5})}let s=new Fe(e,new kt({color:5591628,roughness:.95,flatShading:!0}),n.length),r=new qt,o=new Te,a=new on,l=new ot;n.forEach((h,c)=>{a.set(t()*6,t()*6,t()*6),o.setFromEuler(a),r.compose(new R(h.x,h.s*.3,h.z),o,new R(h.s*(.8+t()*.6),h.s*(.5+t()*.4),h.s*(.8+t()*.6))),s.setMatrixAt(c,r),l.setHSL(.08,.08+t()*.1,.25+t()*.2),s.setColorAt(c,l)}),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s)}_rooftops(){let t=this.r,e=vi([$n(2.2,2.2,3.2,0,3.6,0,6967360,14),(()=>{let g=new Es(2.3,1,14);return g.translate(0,5.7,0),sh(g,4864560)})(),...[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].map(([g,p])=>Ce(.2,2,.2,g,1,p,2763306))]),n=vi([Ce(4,2.6,4.5,0,1.3,0,5592926),Ce(1.2,2,.05,0,1,2.26,1710618)]),s=vi([$n(.12,.2,10,0,5,0,9080470,6),Ce(1.8,.08,.08,0,7.5,0,9080470),Ce(1.2,.08,.08,0,9,0,9080470)]),r=new pn(1.4,12,6,0,Math.PI*2,0,Math.PI/3);r.rotateX(-1),r.translate(0,1.4,0);let o=[],a=[],l=[],h=[],c=new ot(2.2,.15,.08);for(let g of this.world.buildings){if(g.kind!=="city"||g.h<12)continue;let p=M=>[g.x+(t()-.5)*Math.max(0,g.w-M*2),g.z+(t()-.5)*Math.max(0,g.d-M*2)];if((g.style===2||g.style===0&&g.h<70)&&t()<.45){let[M,y]=p(4);o.push({x:M,y:g.h,z:y,yaw:t()*6})}if(t()<.5){let[M,y]=p(4);a.push({x:M,y:g.h,z:y,yaw:Math.floor(t()*4)*Math.PI/2})}if(t()<.22){let[M,y]=p(2);l.push({x:M,y:g.h,z:y,yaw:t()*6}),this.glows.push({x:M,y:g.h+10.3,z:y,c,size:2.2,seed:t(),flick:0,beacon:!0})}if(t()<.25){let[M,y]=p(3);h.push({x:M,y:g.h,z:y,yaw:t()*6})}}let d=new qt,u=new Te,f=new R(1,1,1),m=new kt({vertexColors:!0,roughness:.7,metalness:.35});for(let[g,p]of[[e,o],[n,a],[s,l],[r,h]]){if(!p.length)continue;let M=new Fe(g,g===r?new kt({color:13619928,roughness:.4,metalness:.3,side:Ue}):m,p.length);p.forEach((y,x)=>{u.setFromAxisAngle(Us,y.yaw),d.compose(new R(y.x,y.y,y.z),u,f),M.setMatrixAt(x,d)}),M.castShadow=!0,M.receiveShadow=!0,this.scene.add(M)}let v=this.glows.filter(g=>g.beacon);this.glows=this.glows.filter(g=>!g.beacon),v.length&&(this.roofBeacons=new wr(this.scene,v,this.soft),this.updaters.push(g=>{this.roofBeacons.mesh.visible=g%1.6<.5}))}_signs(){let t=this.r,e=[];for(let a of this.world.buildings){if(a.kind!=="city"||a.h<14||a.style===3)continue;let l=Math.floor((a.x+Jt)/nn),h=Math.floor((a.z+Jt)/nn),c=Pn(l),d=Pn(h),u=[];a.maxX>c+yi/2-8&&u.push([1,0]),a.minX<c-yi/2+8&&u.push([-1,0]),a.maxZ>d+yi/2-8&&u.push([0,1]),a.minZ<d-yi/2+8&&u.push([0,-1]);for(let[f,m]of u){if(t()>.32)continue;let v=f?a.d:a.w,g=(t()-.5)*(v-12),p=t()<.4,M=p?5+t()*2:7+t()*6,y=M/4,x=5.5+t()*Math.min(14,a.h-9),T=f?f>0?a.maxX:a.minX:a.x+g,E=m?m>0?a.maxZ:a.minZ:a.z+g,w,C,S,_;p?(w=T+f*(M/2+.4),C=E+m*(M/2+.4),S=f,_=m):(w=T+f*.25,C=E+m*.25,S=-m,_=f);let I=Math.floor(t()*ih.length);if(e.push({px:w,py:x,pz:C,rx:S,rz:_,w:M,h:y,u:I%2*.5,v:1-(Math.floor(I/2)+1)/8,seed:t(),flick:t()<.25?1:0}),x<12){let N=new ot(ih[I][1]).multiplyScalar(.9);this.pools.push({x:w+f*6,z:C+m*6,c:N.clone().multiplyScalar(.5),r:6,h:x,seed:e[e.length-1].seed,flick:e[e.length-1].flick})}}}let n=new Re(1,1),s=new gi;s.index=n.index,s.setAttribute("position",n.attributes.position),s.setAttribute("uv",n.attributes.uv);let r=(a,l)=>{let h=new Float32Array(e.length*a);return e.forEach((c,d)=>h.set(l(c),d*a)),new ze(h,a)};s.setAttribute("iPos",r(3,a=>[a.px,a.py,a.pz])),s.setAttribute("iRight",r(3,a=>[a.rx,0,a.rz])),s.setAttribute("iSize",r(4,a=>[a.w,a.h,a.u,a.v])),s.setAttribute("iF",r(2,a=>[a.seed,a.flick])),s.instanceCount=e.length,s.boundingSphere=new Je(new R,1e7),this.signMat=new Kt({uniforms:{uMap:{value:lv()},uTime:{value:0},uFogDensity:{value:.0015}},vertexShader:`attribute vec3 iPos, iRight; attribute vec4 iSize; attribute vec2 iF; uniform float uTime; ${rh}
        varying vec2 vUv; varying float vOn;
        void main(){
          vUv = vec2(iSize.z + uv.x * 0.5, iSize.w + uv.y * 0.125);
          float a = fract(sin(floor(uTime * 9.0 + iF.x * 77.0) * 12.9898 + iF.x) * 43758.5453);
          vOn = mix(1.0, step(0.3, a), iF.y) * (0.9 + 0.1 * sin(uTime * 50.0 + iF.x * 10.0));
          vec3 wp = iPos + iRight * position.x * iSize.x + vec3(0.0, 1.0, 0.0) * position.y * iSize.y;
          vec4 mv = viewMatrix * vec4(wp, 1.0); float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying float vOn; varying float vFog;
        void main(){ vec3 c = texture2D(uMap, vUv).rgb; gl_FragColor = vec4(c * 2.2 * vOn * (1.0 - vFog), 1.0);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:$t,side:Ue});let o=new lt(s,this.signMat);o.frustumCulled=!1,o.renderOrder=6,o.userData.noAO=!0,this.scene.add(o)}_plaza(){let t=this.r,e=new kt({color:3817030,metalness:.7,roughness:.4}),n=new kt({color:2236962,emissive:16774365,emissiveIntensity:2.5}),s=()=>Ns(16773328,.09);this.floods=[];for(let[m,v]of[[-70,-30],[70,-70],[70,60],[-62,66]]){let g=new lt(new xe(.25,.4,16,8),e);g.position.set(m,8,v),g.castShadow=!0;let p=new Ye;p.position.set(m,16,v),p.lookAt(0,0,0);let M=new lt(new ge(3.2,1.2,.6),e),y=new lt(new ge(2.8,.9,.1),n);y.position.z=.33;let x=Math.hypot(m,16,v)*.9,T=new lt(new xe(.9,9,x,20,1,!0),s());T.geometry.translate(0,-x/2,0),T.geometry.rotateX(-Math.PI/2),T.userData.noAO=!0,p.add(M,y,T),this.scene.add(g,p),this.glows.push({x:m,y:16,z:v,c:new ot(1.6,1.5,1.3),size:7,seed:t(),flick:0}),this.pools.push({x:m*.45,z:v*.45,c:new ot(1,.95,.85).multiplyScalar(.55),r:16,h:16,seed:t(),flick:0}),this.floods.push(T)}let{truck:r}=this._carGeo(),o=new kt({vertexColors:!0,metalness:.3,roughness:.6}),a=new Fe(r,o,3),l=new qt,h=new Te,c=new R(1,1,1);[[-20,-66,1.57],[-8,-70,1.4],[30,-40,.4]].forEach(([m,v,g],p)=>{h.setFromAxisAngle(Us,g),l.compose(new R(m,0,v),h,c),a.setMatrixAt(p,l),a.setColorAt(p,new ot(4870710))}),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a);let d=new lt(new ge(3,2,2),new kt({color:11569696,roughness:.6,metalness:.4}));d.position.set(-30,1,-30),d.castShadow=!0,this.scene.add(d),this.genLight={x:-30,y:2.2,z:-30},this.glows.push({x:-30,y:2.3,z:-30,c:new ot(.2,2,.4),size:.9,seed:.2,flick:1});let u=new xe(.01,4,3,4,1);u.rotateY(Math.PI/4),u.translate(0,1.5,0);let f=new kt({color:5134908,roughness:1});for(let[m,v]of[[40,30],[52,18],[-40,40]]){let g=new lt(u,f);g.position.set(m,0,v),g.scale.set(1.4,1,2),g.castShadow=!0,g.receiveShadow=!0,this.scene.add(g),this.pools.push({x:m,z:v,c:new ot(1,.6,.25).multiplyScalar(.6),r:7,h:3,seed:t(),flick:0})}}setQuality(t){this.q=t==="low"?.4:1}update(t,e,n){let s=this.scene.fog;this.glowSet.update(e,s),this.poolSet.update(e,s),this.hazard&&this.hazard.update(e,s),this.roofBeacons&&this.roofBeacons.update(e,s),this.signMat.uniforms.uTime.value=e,this.signMat.uniforms.uFogDensity.value=s.density;for(let o of this.updaters)o(e);for(let o of this.floods)o.material.uniforms.uTime.value=e;let r=this.q||1;for(let o of this.burning)if(!(Math.hypot(o.x-n.position.x,o.z-n.position.z)>450)){for(o.acc+=t*18*r;o.acc>=1;)o.acc-=1,Ge.flame(o.x+(Math.random()-.5)*o.size,.8,o.z+(Math.random()-.5)*o.size,o.size*1.3,.9);for(o.sacc+=t*2.2*r;o.sacc>=1;)o.sacc-=1,Ge.smokePuff(o.x,3,o.z,7,.14,7,4,1.8)}}};var la=class{constructor(t,e=9e3){this.max=e;let n=new Float32Array(e*2*3),s=new Float32Array(e*2);for(let o=0;o<e;o++){let a=Math.random(),l=Math.random(),h=Math.random();for(let c=0;c<2;c++)n.set([a,l,h],(o*2+c)*3),s[o*2+c]=c}let r=new ie;r.setAttribute("position",new be(n,3)),r.setAttribute("aEnd",new be(s,1)),r.boundingSphere=new Je(new R,1e7),this.mat=new Kt({uniforms:{uCam:{value:new R},uTime:{value:0},uBox:{value:130},uVel:{value:new R},uFlash:{value:0}},vertexShader:`
        attribute float aEnd; uniform vec3 uCam, uVel; uniform float uTime, uBox; varying float vA;
        void main(){
          vec3 s = position * uBox;
          vec3 p;
          p.x = uCam.x - uBox * 0.5 + mod(s.x - uCam.x, uBox);
          p.z = uCam.z - uBox * 0.5 + mod(s.z - uCam.z, uBox);
          p.y = uCam.y - uBox * 0.5 + mod(s.y - uTime * 34.0 - uCam.y, uBox);
          vec3 dir = normalize(vec3(2.5, -34.0, 1.2) - uVel * 0.9);
          p += dir * aEnd * 1.7;
          float d = length(p - uCam);
          vA = smoothstep(3.0, 9.0, d) * (1.0 - smoothstep(uBox * 0.25, uBox * 0.5, d)) * step(0.0, p.y) * (0.6 + 0.4 * aEnd);
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`uniform float uFlash; varying float vA;
        void main(){ gl_FragColor = vec4(vec3(0.62, 0.68, 0.8) * (1.0 + uFlash * 3.0), vA * 0.2); }`,transparent:!0,depthWrite:!1}),this.lines=new ur(r,this.mat),this.lines.frustumCulled=!1,this.lines.renderOrder=14,t.add(this.lines),this.vel=new R,this.prev=null}setQuality(t){this.lines.geometry.setDrawRange(0,Math.floor(this.max*(t==="low"?.35:1))*2)}update(t,e,n,s,r=0){let o=this.mat.uniforms;if(o.uCam.value.copy(n.position),o.uTime.value=e,this.prev&&t>0){let a=new R().subVectors(n.position,this.prev).divideScalar(t);a.length()<200&&this.vel.lerp(a,Math.min(1,t*4))}this.prev=(this.prev||new R).copy(n.position),o.uVel.value.copy(this.vel),o.uFlash.value=r}},ca=class{constructor(t){this.world=t,this.next=6+Math.random()*8,this.t=0,this.flashes=[],this.flash=0,this.dir=new R(1,.3,0);let e=new hr({color:14673663,transparent:!0,opacity:0,blending:$t,depthWrite:!1,fog:!1});this.bolt=new ur(new ie,e),this.bolt.frustumCulled=!1,t.scene.add(this.bolt),this.glowMat=new _e({color:10466559,transparent:!0,opacity:0,blending:$t,depthWrite:!1,fog:!1}),this.boltGlow=new lt(new ie,this.glowMat),this.boltGlow.frustumCulled=!1,t.scene.add(this.boltGlow),this.onThunder=null}_makeBolt(t){let e=Math.random()*Math.PI*2,n=700+Math.random()*600,s=t.position.x+Math.cos(e)*n,r=t.position.z+Math.sin(e)*n;this.dir.set(Math.cos(e),.25,Math.sin(e)).normalize();let o=[],a=[],l=(h,c,d,u,f)=>{let m=h,v=c,g=d,p=Math.floor(u/22);for(let M=0;M<p&&v>0;M++){let y=m+(Math.random()-.5)*38,x=v-(14+Math.random()*20),T=g+(Math.random()-.5)*38;o.push(m,v,g,y,x,T);let E=f===0?3.5:1.6,w=y-m,C=x-v,S=T-g,_=(m+y)/2-t.position.x,I=(v+x)/2-t.position.y,N=(g+T)/2-t.position.z,U=C*N-S*I,B=S*_-w*N,V=w*I-C*_,k=Math.hypot(U,B,V)||1;U=U/k*E,B=B/k*E,V=V/k*E,a.push(m-U,v-B,g-V,m+U,v+B,g+V,y+U,x+B,T+V,m-U,v-B,g-V,y+U,x+B,T+V,y-U,x-B,T-V),f<2&&Math.random()<.18&&l(y,x,T,u*.35,f+1),m=y,v=x,g=T}};return l(s,520+Math.random()*200,r,900,0),this.bolt.geometry.dispose(),this.bolt.geometry=new ie().setAttribute("position",new Ot(o,3)),this.boltGlow.geometry.dispose(),this.boltGlow.geometry=new ie().setAttribute("position",new Ot(a,3)),n}strike(t){let e=this._makeBolt(t),n=this.t,s=2+Math.floor(Math.random()*3);for(let r=0;r<s;r++)this.flashes.push({at:n+r*(.06+Math.random()*.12),k:r===0?1:.5+Math.random()*.5});this.boltT=.35,this.onThunder&&this.onThunder(e/340,Math.max(.3,1.4-e/1300))}update(t,e,n){this.t=e,this.next-=t,this.next<=0&&(this.strike(n),this.next=9+Math.random()*16);let s=0;for(let o=this.flashes.length-1;o>=0;o--){let a=this.flashes[o],l=e-a.at;if(!(l<0)){if(l>.5){this.flashes.splice(o,1);continue}s=Math.max(s,a.k*Math.exp(-l*9))}}this.flash=s,this.boltT>0&&(this.boltT-=t);let r=this.boltT>0?Math.min(1,s*1.6+.15):0;return this.bolt.material.opacity=r,this.glowMat.opacity=r*.35,s}};var he=14,nn=90,yi=62,Jt=he*nn/2;function aa(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pn(i){return(i-he/2+.5)*nn}function Pe(i){return(i-he/2)*nn}function ti(i,t,e=128){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,i),r.addColorStop(.35,i),r.addColorStop(1,t),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new Ve(n);return o.colorSpace=de,o}var ha=`
  float zdH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float zdN2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(zdH2(i), zdH2(i + vec2(1, 0)), f.x), mix(zdH2(i + vec2(0, 1)), zdH2(i + vec2(1, 1)), f.x), f.y); }
  float zdH3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float zdN3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(zdH3(i), zdH3(i + vec3(1,0,0)), f.x), mix(zdH3(i + vec3(0,1,0)), zdH3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(zdH3(i + vec3(0,0,1)), zdH3(i + vec3(1,0,1)), f.x), mix(zdH3(i + vec3(0,1,1)), zdH3(i + vec3(1,1,1)), f.x), f.y), f.z); }
`;function Ns(i,t=.25){return new Kt({uniforms:{uColor:{value:new ot(i)},uOpacity:{value:t},uTime:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity, uTime; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){
        float facing = abs(dot(normalize(vN), normalize(vV)));
        float core = pow(facing, 2.5);
        float fade = smoothstep(0.0, 0.04, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
        float flow = 0.72 + 0.28 * sin(vUv.y * 90.0 - uTime * 5.0) * sin(vUv.y * 23.0 - uTime * 2.1);
        gl_FragColor = vec4(uColor * core * fade * flow * uOpacity * 2.6, 1.0);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:$t,side:Ue})}var ua=class{constructor(t,e){this.scene=t,this.renderer=e,this.rng=aa(2028),this.rng2=aa(90417),this.time=0,this.flash=0,this.quality="high",this.buildings=[],this.grid=new Map,this.cellType=[],this.hordes=[],this.pylons=[],this.habitats=[],this.zombies=[],this.fires=[],this.beacons=[],this.anim=[],Ge.init(t),this._layout(),this._sky(),this._ground(),this._buildings(),this._base(),this._hordes(),this._pylons(),this._habitats(),this._fires(),this._ash(),this._env(),this.street=new oa(this),this.rain=new la(t),this.lightning=new ca(this),this._fogColor=t.fog.color.clone(),this._fogDensity=t.fog.density}_layout(){let t=this.rng;for(let n=0;n<he;n++){this.cellType[n]=[];for(let s=0;s<he;s++){let r;if((n===6||n===7)&&(s===6||s===7))r="plaza";else{let o=t();r=o<.7?"city":o<.88?"lot":"ruin"}this.cellType[n][s]=r}}let e=[[1,2],[2,11],[11,1],[12,10],[4,7],[9,4],[10,12],[3,4],[7,1],[6,12],[12,6],[1,8]];for(let[n,s]of e)this.cellType[n][s]="lot"}key(t,e){return t*100+e}_sky(){let t=new pn(2400,48,24),e=new Kt({side:Ze,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uFlash:{value:0},uFlashDir:{value:new R(1,.2,0)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        varying vec3 vDir; uniform float uTime, uFlash; uniform vec3 uFlashDir;
        ${ha}
        float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * zdN3(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 zen = vec3(0.010,0.012,0.032);
          vec3 mid = vec3(0.06,0.03,0.075);
          vec3 hor = vec3(0.46,0.14,0.055);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.22, h));
          c = mix(c, zen, smoothstep(0.22, 0.85, h));
          float burn = 0.07 * sin(atan(d.z, d.x) * 9.0 + uTime * 0.7) * (1.0 - smoothstep(0.0, 0.12, h));
          c += vec3(burn, burn * 0.3, 0.0);
          vec3 md = normalize(vec3(-0.45, 0.32, -0.83));
          float mdot = dot(d, md);
          float m = smoothstep(0.99875, 0.9993, mdot);
          c += vec3(1.0, 0.92, 0.8) * m * 1.8;
          c += vec3(0.25, 0.22, 0.32) * pow(max(mdot, 0.0), 60.0);
          // storm clouds, lit from below by the burning city and by lightning
          vec2 cp = d.xz / (max(h, 0.0) + 0.16);
          float cl = fbm(vec3(cp * 0.75 + vec2(uTime * 0.012, uTime * 0.004), uTime * 0.004));
          float cov = smoothstep(0.40, 0.78, cl) * smoothstep(-0.02, 0.2, h);
          vec3 under = mix(vec3(0.42, 0.13, 0.05), vec3(0.045, 0.035, 0.06), smoothstep(0.0, 0.3, h));
          vec3 ccol = under * (0.55 + 0.6 * (1.0 - cl));
          ccol += vec3(0.18, 0.16, 0.24) * pow(max(mdot, 0.0), 12.0) * (1.0 - cl);   // moon silver lining
          float fl = uFlash * (0.35 + 0.65 * pow(max(dot(d, normalize(uFlashDir)), 0.0), 3.0));
          ccol += vec3(0.7, 0.75, 1.0) * fl * (0.6 + cl);
          c = mix(c, ccol, cov * 0.92);
          c += vec3(0.55, 0.6, 0.85) * fl * 0.12;
          if (h < 0.0) c = hor * 0.3;
          gl_FragColor = vec4(c, 1.0);
        }`});this.sky=new lt(t,e),this.sky.userData.noAO=!0,this.sky.renderOrder=-10,this.scene.add(this.sky);let n=1400,s=new Float32Array(n*3),r=this.rng;for(let h=0;h<n;h++){let c=r()*Math.PI*2,d=Math.acos(.15+r()*.85);s[h*3]=Math.sin(d)*Math.cos(c)*2200,s[h*3+1]=Math.cos(d)*2200,s[h*3+2]=Math.sin(d)*Math.sin(c)*2200}let o=new ie;o.setAttribute("position",new be(s,3)),this.stars=new dr(o,new _s({color:12109055,size:1.4,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.55})),this.scene.add(this.stars),this.scene.fog=new Io(1707026,.00155),this.hemi=new Wo(5918856,2758672,.55),this.scene.add(this.hemi),this.moonDir=new R(-450,400,-800).normalize(),this.moon=new Rs(11057407,1.15),this.moon.position.copy(this.moonDir).multiplyScalar(900),this.moon.castShadow=!0;let a=this.moon.shadow.camera;a.left=-230,a.right=230,a.top=230,a.bottom=-230,a.near=10,a.far=2200,this.moon.shadow.mapSize.set(2048,2048),this.moon.shadow.bias=-4e-4,this.moon.shadow.normalBias=.5,this.scene.add(this.moon,this.moon.target);let l=new Rs(16738858,.6);l.position.set(600,80,500),this.scene.add(l),this.flashLight=new Rs(13161727,0),this.flashLight.position.set(300,600,200),this.scene.add(this.flashLight)}_env(){let t=new Ms,e=new Kt({side:Ze,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 c = mix(vec3(0.9, 0.3, 0.1), vec3(0.08, 0.05, 0.12), smoothstep(-0.05, 0.25, h));
          c = mix(c, vec3(0.02, 0.025, 0.06), smoothstep(0.25, 0.9, h));
          c += vec3(0.6, 0.6, 0.8) * pow(max(dot(d, normalize(vec3(-0.45, 0.32, -0.83))), 0.0), 40.0);
          if (h < 0.0) c = vec3(0.05, 0.04, 0.05);
          gl_FragColor = vec4(c, 1.0); }`});t.add(new lt(new pn(100,32,16),e));let n=this.rng2;for(let r=0;r<40;r++){let o=n()*Math.PI*2,a=2+n()*10,l=new lt(new Re(6+n()*10,2+n()*3),new _e({color:new ot().setHSL(n()<.7?.08:.55,.7,.5+n()*.3),side:Ue}));l.position.set(Math.cos(o)*80,a,Math.sin(o)*80),l.lookAt(0,a,0),t.add(l)}let s=new ys(this.renderer);this.envTex=s.fromScene(t,.02,.1,500).texture,s.dispose(),this.scene.environment=this.envTex,this.scene.environmentIntensity=.42}_ground(){let s=document.createElement("canvas");s.width=s.height=4096;let r=s.getContext("2d"),o=this.rng,a=this.rng2,l=x=>(x+2e3/2)*2.048,h=2048,c=h/2e3,d=document.createElement("canvas");d.width=d.height=h;let u=d.getContext("2d"),f=x=>(x+2e3/2)*c;u.fillStyle="rgb(225,225,225)",u.fillRect(0,0,h,h),u.fillStyle="rgb(92,92,92)",u.fillRect(f(-Jt-14),f(-Jt-14),(2*Jt+28)*c,(2*Jt+28)*c),r.fillStyle="#15120f",r.fillRect(0,0,4096,4096),r.fillStyle="#17181c",r.fillRect(l(-Jt-14),l(-Jt-14),(2*Jt+28)*2.048,(2*Jt+28)*2.048);for(let x=0;x<9e3;x++){let T=18+a()*14;r.fillStyle=`rgba(${T},${T},${T+3},0.35)`,r.fillRect(a()*4096,a()*4096,6+a()*30,6+a()*30)}for(let x=0;x<he;x++)for(let T=0;T<he;T++){let E=Pn(x),w=Pn(T),C=this.cellType[x][T],S=C==="plaza"?nn/2:yi/2;if(C!=="plaza"&&(r.fillStyle="#34343a",r.fillRect(l(E-S-5),l(w-S-5),(2*S+10)*2.048,(2*S+10)*2.048),r.strokeStyle="#4a4a50",r.lineWidth=1.2*2.048,r.strokeRect(l(E-S-5),l(w-S-5),(2*S+10)*2.048,(2*S+10)*2.048),u.fillStyle="rgb(150,150,150)",u.fillRect(f(E-S-5),f(w-S-5),(2*S+10)*c,(2*S+10)*c)),r.fillStyle=C==="lot"?"#1e2018":C==="plaza"?"#25262b":"#29292d",r.fillRect(l(E-S-2),l(w-S-2),(2*S+4)*2.048,(2*S+4)*2.048),u.fillStyle=C==="plaza"?"rgb(110,110,110)":"rgb(215,215,215)",u.fillRect(f(E-S-2),f(w-S-2),(2*S+4)*c,(2*S+4)*c),C==="plaza"){r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=1;for(let _=-S;_<=S;_+=4)r.beginPath(),r.moveTo(l(E+_),l(w-S)),r.lineTo(l(E+_),l(w+S)),r.stroke(),r.beginPath(),r.moveTo(l(E-S),l(w+_)),r.lineTo(l(E+S),l(w+_)),r.stroke()}if(C==="lot")for(let _=0;_<40;_++){r.fillStyle=`rgba(${40+o()*30},${55+o()*30},${30+o()*20},0.5)`;let I=l(E-S+o()*2*S),N=l(w-S+o()*2*S),U=(4+o()*10)*2,B=(4+o()*10)*2;r.fillRect(I,N,U,B)}}r.setLineDash([6*2.048,8*2.048]),r.strokeStyle="rgba(210,175,60,0.6)",r.lineWidth=.35*2.048;for(let x=0;x<=he;x++){let T=l(Pe(x));r.beginPath(),r.moveTo(T,l(-Jt)),r.lineTo(T,l(Jt)),r.stroke(),r.beginPath(),r.moveTo(l(-Jt),T),r.lineTo(l(Jt),T),r.stroke()}r.setLineDash([]),r.strokeStyle="rgba(200,200,200,0.28)",r.lineWidth=.25*2.048;for(let x=0;x<=he;x++)for(let T of[-9.5,9.5]){let E=l(Pe(x)+T);r.beginPath(),r.moveTo(E,l(-Jt)),r.lineTo(E,l(Jt)),r.stroke(),r.beginPath(),r.moveTo(l(-Jt),E),r.lineTo(l(Jt),E),r.stroke()}r.fillStyle="rgba(210,210,210,0.32)";for(let x=0;x<=he;x++)for(let T=0;T<=he;T++){let E=Pe(x),w=Pe(T);for(let C=-8;C<=8;C+=2.2)r.fillRect(l(E+C),l(w-17),1.1*2.048,4*2.048),r.fillRect(l(E+C),l(w+13),1.1*2.048,4*2.048),r.fillRect(l(E-17),l(w+C),4*2.048,1.1*2.048),r.fillRect(l(E+13),l(w+C),4*2.048,1.1*2.048)}for(let x=0;x<2500;x++)r.fillStyle=`rgba(0,0,0,${.15+o()*.3})`,r.fillRect(o()*4096,o()*4096,(1+o()*3)*2,(1+o()*3)*2);r.lineCap="round";for(let x=0;x<700;x++){let T=(a()-.5)*2*Jt,E=(a()-.5)*2*Jt;r.strokeStyle=`rgba(0,0,0,${.3+a()*.3})`,r.lineWidth=.6+a(),r.beginPath(),r.moveTo(l(T),l(E));for(let w=0;w<6;w++)T+=(a()-.5)*5,E+=(a()-.5)*5,r.lineTo(l(T),l(E));r.stroke()}let m=()=>{let x=(a()-.5)*2*Jt,T=Math.floor(a()*(he+1)),E=(a()-.5)*22;return a()<.5?[Pe(T)+E,x]:[x,Pe(T)+E]};for(let x=0;x<500;x++){let[T,E]=m(),w=1+a()*3,C=r.createRadialGradient(l(T),l(E),0,l(T),l(E),w*2.048);C.addColorStop(0,"rgba(5,5,8,0.55)"),C.addColorStop(1,"rgba(5,5,8,0)"),r.fillStyle=C,r.beginPath(),r.arc(l(T),l(E),w*2.048,0,Math.PI*2),r.fill()}for(let x=0;x<160;x++){let[T,E]=m();r.fillStyle="#26262a",r.beginPath(),r.arc(l(T),l(E),.9*2.048,0,Math.PI*2),r.fill(),r.strokeStyle="#121214",r.lineWidth=2,r.stroke()}for(let x=0;x<900;x++){let[T,E]=m(),w=2+a()*7,C=1.5+a()*4,S=a()*Math.PI;r.save(),r.translate(l(T),l(E)),r.rotate(S),r.fillStyle="rgba(6,7,10,0.5)",r.beginPath(),r.ellipse(0,0,w*2.048,C*2.048,0,0,Math.PI*2),r.fill(),r.restore(),u.save(),u.translate(f(T),f(E)),u.rotate(S);let _=u.createRadialGradient(0,0,0,0,0,w*c*1.3);_.addColorStop(0,"rgba(8,8,8,1)"),_.addColorStop(.7,"rgba(8,8,8,0.9)"),_.addColorStop(1,"rgba(8,8,8,0)"),u.fillStyle=_,u.scale(1,C/w),u.beginPath(),u.arc(0,0,w*c*1.3,0,Math.PI*2),u.fill(),u.restore()}let v=l(0);r.fillStyle="#2c3038",r.beginPath(),r.arc(v,v,16*2.048,0,Math.PI*2),r.fill(),r.strokeStyle="#ffd24a",r.lineWidth=.6*2.048,r.beginPath(),r.arc(v,v,14*2.048,0,Math.PI*2),r.stroke(),r.setLineDash([2*2.048,2*2.048]),r.beginPath(),r.arc(v,v,15.3*2.048,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.fillStyle="#ffd24a",r.font=`bold ${Math.round(18*2.048)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText("H",v,v+1),u.fillStyle="rgb(70,70,70)",u.beginPath(),u.arc(f(0),f(0),16*c,0,Math.PI*2),u.fill();let g=new Ve(s);g.colorSpace=de,g.anisotropy=this.renderer.capabilities.getMaxAnisotropy();let p=new Ve(d);p.anisotropy=g.anisotropy;let M=new kt({map:g,roughnessMap:p,roughness:1,metalness:0,envMapIntensity:1.6});M.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGW;
${ha}`).replace("#include <map_fragment>",`#include <map_fragment>
          float zdG = zdN2(vGW.xz * 0.55) * 0.55 + zdN2(vGW.xz * 2.7) * 0.3 + zdN2(vGW.xz * 11.0) * 0.15;
          diffuseColor.rgb *= 0.78 + 0.42 * zdG;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = clamp(roughnessFactor + (zdG - 0.5) * 0.3, 0.04, 1.0);`)};let y=new lt(new Re(2e3,2e3),M);y.rotation.x=-Math.PI/2,y.receiveShadow=!0,this.ground=y,this.scene.add(y)}_buildings(){let t=this.rng,e=this.rng2,n=[],s=(x,T,E,w,C,S)=>{let _={minX:x-E/2,maxX:x+E/2,minZ:T-w/2,maxZ:T+w/2,h:C,kind:S,x,z:T,w:E,d:w};n.push(_);let I=Math.floor((x+Jt)/nn),N=Math.floor((T+Jt)/nn),U=this.key(I,N);this.grid.has(U)||this.grid.set(U,[]),this.grid.get(U).push(_)};for(let x=0;x<he;x++)for(let T=0;T<he;T++){let E=this.cellType[x][T],w=Pn(x),C=Pn(T),S=Math.hypot(w,C),_=.35+.65*Math.min(1,S/450),I=()=>14+Math.pow(t(),2.1)*130*_;if(E==="city"){let N=t();if(N<.3)s(w,C,50+t()*8,50+t()*8,I()*1.15,"city");else if(N<.6)s(w-15.5,C,27,52+t()*6,I(),"city"),s(w+15.5,C,27,52+t()*6,I(),"city");else for(let U of[-1,1])for(let B of[-1,1]){let V=22+t()*6,k=22+t()*6;s(w+U*15.5,C+B*15.5,V,k,I()*.85,"city")}}else if(E==="ruin")for(let N=0;N<3;N++)s(w+(t()-.5)*34,C+(t()-.5)*34,10+t()*14,10+t()*14,3+t()*9,"ruin")}this.buildings=n;for(let x of n){let T=e();x.kind==="ruin"?x.style=3:x.h>75?x.style=T<.45?1:T<.88?0:3:x.h>30?x.style=T<.38?0:T<.82?2:T<.9?1:3:x.style=T<.65?2:T<.85?0:3,x.seed=e(),x.dark=e()<.22}let r=new ge(1,1,1);r.translate(0,.5,0);let o=r.clone(),a=new Float32Array(n.length*3);n.forEach((x,T)=>{a[T*3]=x.style,a[T*3+1]=x.seed,a[T*3+2]=x.dark?1:0}),o.setAttribute("aStyle",new ze(a,3));let l=new kt({color:16777215,roughness:.86,metalness:.06});l.onBeforeCompile=x=>{x.uniforms.uTime={value:0},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aStyle; varying vec3 vZdWorld; varying vec3 vZdNormal; varying vec3 vZdStyle; varying vec3 vZdLocal; varying vec3 vZdSize;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec4 zdW = vec4(transformed, 1.0);
          vec3 zdN = normal;
          vZdSize = vec3(1.0);
          #ifdef USE_INSTANCING
            zdW = instanceMatrix * zdW;
            zdN = mat3(instanceMatrix) * zdN;
            vZdSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          #endif
          zdW = modelMatrix * zdW;
          vZdWorld = zdW.xyz;
          vZdNormal = normalize(mat3(modelMatrix) * zdN);
          vZdStyle = aStyle;
          vZdLocal = position;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
          varying vec3 vZdWorld; varying vec3 vZdNormal; varying vec3 vZdStyle; varying vec3 vZdLocal; varying vec3 vZdSize; uniform float uTime;
          ${ha}`).replace("#include <color_fragment>",`#include <color_fragment>
          vec3 zn = normalize(vZdNormal);
          float zWall = 1.0 - step(0.5, abs(zn.y));
          // varyings that are constant per building still arrive with rounding noise: snap them,
          // otherwise the hashes below turn that noise into speckled windows
          float zStyle = floor(vZdStyle.x + 0.5), zSeed = floor(vZdStyle.y * 997.0 + 0.5) / 997.0, zDark = step(0.5, vZdStyle.z);
          vec2 zp = abs(zn.x) > 0.5 ? vZdWorld.zy : vZdWorld.xy;
          float zAlong = abs(zn.x) > 0.5 ? vZdLocal.z : vZdLocal.x;          // -0.5..0.5 across the facade
          float zWidth = abs(zn.x) > 0.5 ? vZdSize.z : vZdSize.x;
          float zEdge = (0.5 - abs(zAlong)) * zWidth;                       // metres to the building corner
          float zTopDist = vZdSize.y - vZdWorld.y;                          // metres below the roof line
          vec2 zcs = zStyle < 0.5 ? vec2(3.3, 3.5) : zStyle < 1.5 ? vec2(1.7, 3.6) : zStyle < 2.5 ? vec2(2.7, 3.0) : vec2(3.3, 3.5);
          vec2 zcell = zp / zcs; vec2 zf = fract(zcell); vec2 zid = floor(zcell);
          vec2 zface = floor(zn.xz * 2.0 + 2.5);          // +0.5: stable for exactly axis-aligned normals
          float zh = zdH2(zid + zface * 57.3 + zSeed * 91.0);
          float zfloor = zdH2(vec2(zid.y, zSeed * 33.0 + zface.x * 2.0 + zface.y * 3.0));
          vec4 zr = zStyle < 0.5 ? vec4(0.18, 0.82, 0.26, 0.82) : zStyle < 1.5 ? vec4(0.04, 0.96, 0.08, 0.94) : zStyle < 2.5 ? vec4(0.25, 0.75, 0.3, 0.78) : vec4(0.2, 0.8, 0.28, 0.8);
          float zWin = zWall * step(zr.x, zf.x) * step(zf.x, zr.y) * step(zr.z, zf.y) * step(zf.y, zr.w) * step(5.0, vZdWorld.y) * step(1.4, zEdge) * step(1.2, zTopDist);
          float zShop = zWall * step(vZdWorld.y, 4.4) * step(0.6, vZdWorld.y) * step(2.0, zEdge) * step(zStyle, 2.5);
          // facade base colour
          float zgrime = zdN2(zp * vec2(0.6, 0.12) + zSeed * 20.0);
          diffuseColor.rgb *= mix(0.72, 1.08, zgrime);
          diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 14.0, vZdWorld.y));          // street grime / contact shadow
          diffuseColor.rgb *= mix(0.6, 1.0, smoothstep(0.0, 1.6, zEdge));                 // corner shading
          diffuseColor.rgb *= 1.0 - 0.18 * zWall * (1.0 - step(0.12, fract(zp.y / zcs.y)));  // floor slab lines
          if (zStyle > 0.5 && zStyle < 1.5) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.2, 0.27), 0.65 * zWall);
          if (zStyle > 1.5 && zStyle < 2.5) diffuseColor.rgb *= 1.0 - 0.25 * zWall * step(0.86, fract(zp.y / zcs.y));  // balconies
          float zSoot = 0.0;
          if (zStyle > 2.5) { zSoot = smoothstep(0.25, 0.75, zdN2(zp * 0.08 + zSeed * 7.0) + (vZdWorld.y / max(vZdSize.y, 1.0)) * 0.5); diffuseColor.rgb *= 1.0 - 0.75 * zSoot; }
          diffuseColor.rgb *= 1.0 - 0.6 * zWin;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.05, 0.06), zShop * 0.6 * step(0.5, fract(vZdWorld.y * 2.4)));
          if (zn.y > 0.5) diffuseColor.rgb *= 0.55 + 0.25 * zdN2(vZdWorld.xz * 0.4);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, zStyle > 0.5 && zStyle < 1.5 ? 0.08 : 0.18, zWin);
          if (zStyle > 0.5 && zStyle < 1.5) roughnessFactor = mix(roughnessFactor, 0.25, zWall);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
          metalnessFactor = mix(metalnessFactor, 0.55, zWin);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          {
            float litRate = zStyle > 2.5 ? 0.06 : zStyle > 0.5 && zStyle < 1.5 ? 0.22 : 0.3;
            litRate *= 1.0 - 0.85 * zDark;
            float lit = step(1.0 - litRate, zh) + step(0.9, zfloor) * step(0.35, zh) * step(zStyle, 1.5) * (1.0 - zDark);
            lit = min(lit, 1.0);
            vec3 wc = mix(vec3(1.0, 0.58, 0.26), vec3(0.55, 0.74, 1.0), step(0.66, fract(zh * 13.7)));
            if (fract(zh * 7.3) > 0.9) wc = vec3(0.35, 0.45, 1.0) * (0.5 + 0.5 * zdH2(vec2(floor(uTime * 6.0 + zh * 50.0), zh)));  // TV flicker
            float flick = 0.82 + 0.18 * sin(uTime * (2.0 + zh * 9.0) + zh * 40.0);
            float glowIn = 0.75 + 0.25 * zf.y;
            totalEmissiveRadiance += zWin * lit * wc * 1.45 * flick * glowIn;
            // burnt buildings: embers glowing in a few lower windows
            if (zStyle > 2.5) totalEmissiveRadiance += zWin * step(0.9, zh) * step(vZdWorld.y, 30.0) * vec3(1.0, 0.32, 0.06) * (0.8 + 0.6 * sin(uTime * 7.0 + zh * 30.0));
            // a few shops still running on generators
            float shop = step(0.86, zdH2(vec2(floor(zp.x / 9.0), zSeed * 17.0 + zface.x * 3.0 + zface.y * 5.0))) * (1.0 - zDark);
            vec3 sc = mix(vec3(0.2, 0.9, 1.0), vec3(1.0, 0.25, 0.7), step(0.5, fract(zSeed * 9.1 + zp.x * 0.01)));
            totalEmissiveRadiance += zShop * shop * step(1.2, vZdWorld.y) * sc * 0.9;
            // lit crown band on some towers
            float crown = step(60.0, vZdSize.y) * step(0.55, zSeed) * zWall * step(zTopDist, 2.2) * step(0.6, zTopDist) * (1.0 - zDark);
            totalEmissiveRadiance += crown * mix(vec3(0.3, 0.85, 1.0), vec3(1.0, 0.85, 0.6), step(0.8, zSeed)) * 1.6;
          }`),l.userData.shader=x},this.buildingMat=l;let h=new Fe(o,l,n.length),c=new qt,d=new ot,u=[5921894,5066583,6512730,5722185,4738389,7039600,4145480];n.forEach((x,T)=>{c.compose(new R(x.x,0,x.z),new Te,new R(x.w,x.h,x.d)),h.setMatrixAt(T,c),d.setHex(x.kind==="ruin"?3880499:u[Math.floor(t()*u.length)]),x.style===2&&d.lerp(new ot(8018504),.35),h.setColorAt(T,d)}),h.castShadow=!0,h.receiveShadow=!0,this.buildingMesh=h,this.scene.add(h);let f=[];for(let x of n){if(x.kind!=="city")continue;let T=.5,E=1.2;f.push([x.x,x.h,x.minZ+T/2,x.w,E,T],[x.x,x.h,x.maxZ-T/2,x.w,E,T],[x.minX+T/2,x.h,x.z,T,E,x.d],[x.maxX-T/2,x.h,x.z,T,E,x.d])}let m=new Fe(r,new kt({color:3947844,roughness:.9}),f.length);f.forEach(([x,T,E,w,C,S],_)=>{c.compose(new R(x,T,E),new Te,new R(w,C,S)),m.setMatrixAt(_,c)}),m.castShadow=!0,m.receiveShadow=!0,this.scene.add(m);let v=[];for(let x of n){if(x.kind!=="city")continue;let T=1+Math.floor(t()*3);for(let E=0;E<T;E++)v.push({x:x.x+(t()-.5)*x.w*.6,z:x.z+(t()-.5)*x.d*.6,y:x.h,w:3+t()*5,h:1.5+t()*3.5,d:3+t()*5});x.h>85&&this.beacons.push(new R(x.x,x.h+6,x.z))}let g=new Fe(r,new kt({color:3816514,roughness:.7,metalness:.3}),v.length);v.forEach((x,T)=>{c.compose(new R(x.x,x.y,x.z),new Te,new R(x.w,Math.min(x.h,2.4),x.d)),g.setMatrixAt(T,c)}),g.castShadow=!0,g.receiveShadow=!0,this.scene.add(g);let p=new xe(.2,.35,6,6);p.translate(0,3,0);let M=new Fe(p,new kt({color:7829367,metalness:.6,roughness:.4}),this.beacons.length);this.beacons.forEach((x,T)=>{c.makeTranslation(x.x,x.y-6,x.z),M.setMatrixAt(T,c)}),this.scene.add(M);let y=ti("rgba(255,60,40,1)","rgba(255,0,0,0)");this.beaconSprites=this.beacons.map((x,T)=>{let E=new Rn(new vn({map:y,blending:$t,depthWrite:!1,transparent:!0}));return E.position.copy(x),E.scale.setScalar(7),E.userData.ph=T*.37,this.scene.add(E),E})}_base(){let t={x:-48,z:-52,w:40,d:26,h:22,kind:"lab"};Object.assign(t,{minX:t.x-t.w/2,maxX:t.x+t.w/2,minZ:t.z-t.d/2,maxZ:t.z+t.d/2}),this.buildings.push(t);let e=Math.floor((t.x+Jt)/nn),n=Math.floor((t.z+Jt)/nn);this.grid.has(this.key(e,n))||this.grid.set(this.key(e,n),[]),this.grid.get(this.key(e,n)).push(t);let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d");r.fillStyle="#4e5560",r.fillRect(0,0,512,256);for(let x=0;x<3;x++)for(let T=0;T<9;T++){let E=(T*7+x*3)%5!==0;r.fillStyle=E?"#bfeaff":"#111820",r.fillRect(14+T*55,30+x*72,40,40)}r.fillStyle="#3ae6ff",r.fillRect(0,0,512,6),r.fillRect(0,250,512,6);let o=new Ve(s);o.colorSpace=de;let a=document.createElement("canvas");a.width=512,a.height=256;let l=a.getContext("2d");l.drawImage(s,0,0),l.globalCompositeOperation="multiply",l.fillStyle="#000",l.fillRect(0,0,512,256),l.globalCompositeOperation="source-over";for(let x=0;x<3;x++)for(let T=0;T<9;T++)(T*7+x*3)%5!==0&&(l.fillStyle="#7fd8ff",l.fillRect(14+T*55,30+x*72,40,40));l.fillStyle="#3ae6ff",l.fillRect(0,0,512,6),l.fillRect(0,250,512,6);let h=new Ve(a);h.colorSpace=de;let c=new kt({map:o,emissiveMap:h,emissive:16777215,emissiveIntensity:1.2,roughness:.5,metalness:.2}),d=new kt({color:3817288,roughness:.8}),u=new lt(new ge(t.w,t.h,t.d),[c,c,d,d,c,c]);u.position.set(t.x,t.h/2,t.z),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);let f=new lt(new pn(3,16,8,0,Math.PI*2,0,Math.PI/3),new kt({color:13685980,metalness:.4,roughness:.35,side:Ue}));f.position.set(t.x+10,t.h+3.5,t.z),f.rotation.set(-.9,.6,0);let m=new lt(new xe(.15,.25,12,6),new kt({color:10133674,metalness:.7,roughness:.3}));m.position.set(t.x-12,t.h+6,t.z+4),this.scene.add(f,m);let v=document.createElement("canvas");v.width=512,v.height=128;let g=v.getContext("2d");g.fillStyle="#000",g.fillRect(0,0,512,128),g.shadowColor="#42e8ff",g.shadowBlur=18,g.fillStyle="#9ff4ff",g.font="bold 64px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("E4-03-07 LAB",256,66);let p=new Ve(v);p.colorSpace=de;let M=new lt(new Re(30,7.5),new _e({map:p,transparent:!0,blending:$t,depthWrite:!1}));M.position.set(t.x,t.h+5,t.z+t.d/2-2),this.scene.add(M);let y=ti("rgba(255,210,80,1)","rgba(255,160,0,0)");this.padLights=[];for(let x=0;x<16;x++){let T=x/16*Math.PI*2,E=new Rn(new vn({map:y,blending:$t,depthWrite:!1,transparent:!0}));E.position.set(Math.cos(T)*17,.5,Math.sin(T)*17),E.scale.setScalar(1.6),this.scene.add(E),this.padLights.push(E)}}_zombieGeometry(){let t=[],e=(n,s,r,o,a,l,h,c,d,u=0)=>{let f=new ge(n,s,r);u&&f.rotateX(u),f.translate(o,a,l);let m=f.attributes.position.count;f.setAttribute("aPart",new Ot(new Array(m).fill(h),1)),f.setAttribute("aSkin",new Ot(new Array(m).fill(c),1));let v=new ot(d),g=[];for(let p=0;p<m;p++)g.push(v.r,v.g,v.b);f.setAttribute("color",new Ot(g,3)),t.push(f)};return e(.2,.46,.22,-.13,.63,0,4,0,4212304),e(.17,.42,.18,-.13,.22,.02,4,1,13619151),e(.2,.08,.3,-.13,.04,.06,4,0,2236962),e(.2,.46,.22,.13,.63,0,5,0,4212304),e(.17,.42,.18,.13,.22,.02,5,1,13619151),e(.2,.08,.3,.13,.04,.06,5,0,2236962),e(.42,.22,.24,0,.92,0,0,0,3817290),e(.5,.6,.28,0,1.28,.03,0,0,5917242,.2),e(.36,.12,.22,0,1.52,.08,0,1,13684944,.2),e(.3,.3,.3,0,1.72,.14,1,1,16777215),e(.24,.08,.2,0,1.55,.2,1,1,11579568),e(.07,.045,.03,-.075,1.76,.295,7,0,16777215),e(.07,.045,.03,.075,1.76,.295,7,0,16777215),e(.14,.34,.15,-.34,1.3,.04,2,0,5917242),e(.12,.36,.12,-.34,.96,.04,2,1,14211288),e(.13,.12,.08,-.34,.74,.04,2,1,12632256),e(.14,.34,.15,.34,1.3,.04,3,0,5917242),e(.12,.36,.12,.34,.96,.04,3,1,14211288),e(.13,.12,.08,.34,.74,.04,3,1,12632256),sa(t)}_zombieMaterial(){let t=new kt({color:16777215,vertexColors:!0,roughness:.92,emissive:793096});return t.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
          attribute float aPart; attribute float aSkin; attribute vec4 aAnim;
          varying float vPart; varying float vBurn; varying vec3 vLoc;
          mat3 zdRotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
          mat3 zdRotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }`).replace("#include <beginnormal_vertex>",`
          float zph = aAnim.x, zwalk = aAnim.y, zreach = aAnim.z;
          mat3 zR = mat3(1.0); vec3 zPiv = vec3(0.0);
          if (aPart > 1.5 && aPart < 3.5) {
            float side = aPart < 2.5 ? 1.0 : -1.0;
            zPiv = vec3(-0.34 * side, 1.48, 0.04);
            float a = -1.2 + 0.16 * sin(zph * 0.5 + side) - zreach * (0.55 + 0.45 * sin(zph * 2.3 + side * 1.7));
            zR = zdRotZ(side * 0.08 * sin(zph * 0.7)) * zdRotX(a);
          } else if (aPart > 3.5 && aPart < 5.5) {
            float side = aPart < 4.5 ? 1.0 : -1.0;
            zPiv = vec3(0.0, 0.86, 0.0);
            zR = zdRotX(sin(zph + (side > 0.0 ? 0.0 : 3.14159)) * 0.5 * zwalk);
          } else if (aPart > 0.5 && aPart < 1.5 || aPart > 6.5) {
            zPiv = vec3(0.0, 1.56, 0.08);
            zR = zdRotZ(0.22 * sin(zph * 0.37)) * zdRotX(0.15 * sin(zph * 0.5));
          }
          vec3 objectNormal = zR * vec3(normal);
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif`).replace("#include <begin_vertex>",`vec3 transformed = zR * (vec3(position) - zPiv) + zPiv;
          vPart = aPart; vBurn = aAnim.w; vLoc = position;`).replace("#include <color_vertex>",`
          #if defined( USE_COLOR )
            float zhs = fract(sin(dot(instanceColor, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
            vec3 zcloth = mix(vec3(0.75, 0.8, 0.9), vec3(1.15, 0.9, 0.75), zhs);
            vColor = color * mix(zcloth, instanceColor * 1.15, aSkin);
          #endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uTime; varying float vPart; varying float vBurn; varying vec3 vLoc;
          ${ha}`).replace("#include <color_fragment>",`#include <color_fragment>
          float zrag = zdN3(vLoc * 9.0);
          diffuseColor.rgb *= 0.7 + 0.45 * zrag;
          diffuseColor.rgb *= 1.0 - 0.88 * smoothstep(0.0, 0.6, vBurn);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          if (vPart > 6.5) totalEmissiveRadiance += vec3(1.0, 0.12, 0.04) * 6.0 * (1.0 - vBurn);
          if (vBurn > 0.0) {
            float cr = zdN3(vLoc * 14.0 + vec3(0.0, -uTime * 2.0, 0.0));
            float glow = smoothstep(0.45, 0.8, cr) * (1.0 - smoothstep(0.7, 1.0, vBurn)) * smoothstep(0.0, 0.15, vBurn);
            totalEmissiveRadiance += vec3(1.0, 0.36, 0.06) * glow * 5.0;
          }`),t.userData.shader=e},t}_hordes(){let t=this.rng,e=this.rng2,n=[];for(let g=0;g<he;g++)for(let p=0;p<he;p++){let M=Pn(g),y=Pn(p);this.cellType[g][p]==="lot"&&Math.hypot(M,y)>180&&n.push({x:M,z:y})}for(let g=n.length-1;g>0;g--){let p=Math.floor(t()*(g+1));[n[g],n[p]]=[n[p],n[g]]}this.freeLots=n;let s=[];for(let g=0;g<4;g++){let p=Pe(2+Math.floor(t()*(he-3))),M=Pe(2+Math.floor(t()*(he-3)));Math.hypot(p,M)>200&&s.push({x:p,z:M})}for(;s.length<10&&n.length>6;)s.push(n.pop());let r=this._zombieGeometry(),o=22,a=s.length*o;this.zAnim=new ze(new Float32Array(a*4),4).setUsage(Oi),r.setAttribute("aAnim",this.zAnim),this.zMat=this._zombieMaterial(),this.zMesh=new Fe(r,this.zMat,a),this.zMesh.instanceMatrix.setUsage(Oi),this.zMesh.frustumCulled=!1;let l=[7311194,6126162,8096362,5793356,9083498,5204554],h=new ot,c=new yr(.92,1,96);c.rotateX(-Math.PI/2);let d=ti("rgba(255,40,30,0.5)","rgba(255,0,0,0)"),u=document.createElement("canvas");u.width=1024,u.height=16;let f=u.getContext("2d");for(let g=0;g<48;g++)f.fillStyle=g%2?"rgba(255,60,40,0.0)":"rgba(255,80,50,1)",f.fillRect(g*(1024/48),0,1024/48,16);let m=new Ve(u);m.wrapS=rr,m.colorSpace=de;let v=new yr(1.03,1.07,128,1);{let g=v.attributes.position,p=v.attributes.uv;for(let M=0;M<g.count;M++){let y=Math.atan2(g.getY(M),g.getX(M));p.setXY(M,y/(Math.PI*2)+.5,Math.hypot(g.getX(M),g.getY(M))>1.05?1:0)}}v.rotateX(-Math.PI/2),s.forEach((g,p)=>{let M=34+t()*10,y=new lt(c,new _e({color:16722458,transparent:!0,opacity:.85,blending:$t,depthWrite:!1}));y.scale.setScalar(M),y.position.set(g.x,.3,g.z),this.scene.add(y);let x=new lt(v,new _e({map:m,color:16726570,transparent:!0,opacity:.8,blending:$t,depthWrite:!1}));x.scale.setScalar(M),x.position.set(g.x,.32,g.z),this.scene.add(x);let T=new lt(new Re(M*2.4,M*2.4),new _e({map:d,transparent:!0,blending:$t,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.set(g.x,.2,g.z),this.scene.add(T);let E={x:g.x,z:g.z,radius:M,ring:y,glow:T,dash:x,alive:o,total:o,cleared:!1,zombies:[]};for(let w=0;w<o;w++){let C=t()*Math.PI*2,S=Math.sqrt(t())*M*.85,_={idx:p*o+w,horde:E,x:g.x+Math.cos(C)*S,z:g.z+Math.sin(C)*S,hx:g.x+Math.cos(C)*S,hz:g.z+Math.sin(C)*S,yaw:t()*Math.PI*2,phase:t()*10,speed:.6+t()*.5,scale:2.1+t()*.6,dead:!1,deadT:0,walk:e()*10,fallDir:e()<.5?-1:1};E.zombies.push(_),this.zombies.push(_),h.setHex(l[Math.floor(t()*l.length)]),this.zMesh.setColorAt(_.idx,h)}this.hordes.push(E)}),this.scene.add(this.zMesh)}_pylons(){let t=this.rng,e=ti("rgba(80,240,255,0.9)","rgba(0,200,255,0)"),n=[[0,0]],s=8,r=0;for(;n.length<s+1&&r++<500;){let h=Pe(1+Math.floor(t()*(he-1))),c=Pe(1+Math.floor(t()*(he-1)));n.every(([d,u])=>Math.hypot(d-h,u-c)>260)&&n.push([h,c])}n.shift();let o=new kt({color:2766144,metalness:.8,roughness:.35}),a=ti("rgba(60,220,255,0.55)","rgba(0,160,255,0)"),l=()=>new Kt({uniforms:{uTime:{value:0},uOn:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime, uOn; varying vec2 vUv;
        void main(){ vec2 p = vUv - 0.5; float r = length(p) * 2.0; float a = atan(p.y, p.x);
          float swirl = 0.5 + 0.5 * sin(a * 6.0 + r * 14.0 - uTime * 4.0);
          float rim = smoothstep(0.55, 1.0, r) * (1.0 - smoothstep(0.96, 1.0, r));
          float v = (0.12 + 0.4 * swirl * r + rim * 0.9) * (1.0 - smoothstep(0.97, 1.0, r));
          gl_FragColor = vec4(vec3(0.2, 0.85, 1.0) * v * uOn, 1.0);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:$t,side:Ue});for(let[h,c]of n){let d=26+t()*14,u=new Ye;u.position.set(h,0,c);let f=new lt(new xe(1.6,1.6,300,16,1,!0),Ns(3860223,.3));f.position.y=150,f.userData.noAO=!0;let m=new lt(new mi(10,.7,12,64),new kt({color:670276,emissive:3203327,emissiveIntensity:2.2,metalness:.6,roughness:.3}));m.position.y=d;let v=new lt(new bs(9.4,48),l());v.userData.noAO=!0,m.add(v);let g=new Rn(new vn({map:e,blending:$t,depthWrite:!1,transparent:!0,opacity:.6}));g.position.y=d,g.scale.setScalar(26);let p=new lt(new xe(3,4,2,16),new kt({color:2240568,emissive:1085600,emissiveIntensity:.8,metalness:.6,roughness:.4}));p.position.y=1,p.castShadow=!0;let M=d-10.6,y=new lt(new xe(.55,.9,M,8),o);y.position.y=M/2,y.castShadow=!0;let x=new lt(new mi(2.2,.25,6,16,Math.PI),o);x.rotation.z=Math.PI,x.position.y=M+.2;let T=new lt(new xe(.6,.6,M*.9,8,1,!0),new _e({color:3860223,wireframe:!0,transparent:!0,opacity:.35,blending:$t,depthWrite:!1}));T.position.y=M/2;let E=new lt(new Re(26,26),new _e({map:a,transparent:!0,blending:$t,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.12,u.add(f,m,g,p,y,x,T,E),this.scene.add(u),this.pylons.push({x:h,z:c,y:d,ring:m,beam:f,halo:g,membrane:v,pool:E,cooldown:0})}}_habitats(){let t=this.rng,e=this.rng2,n=this.freeLots.filter(f=>Math.hypot(f.x,f.z)>230),s=[];for(let f of n)if(s.every(m=>Math.hypot(m.x-f.x,m.z-f.z)>300)&&s.push(f),s.length===5)break;let r=[[-520,-430],[480,-470],[520,420],[-470,500],[60,560]];for(;s.length<5;){let[f,m]=r[s.length];s.push({x:f,z:m})}let o=new pn(18,48,24,0,Math.PI*2,0,Math.PI/2),a=ti("rgba(255,200,120,1)","rgba(255,140,40,0)"),l=ti("rgba(255,190,110,0.5)","rgba(255,120,40,0)"),h=new kt({color:9075290,roughness:.95}),c=[8010282,2771562,5925434].map(f=>new kt({color:f,roughness:.7,metalness:.4})),d=new Es(2.4,2.4,4);d.rotateY(Math.PI/4),d.translate(0,1.2,0);let u=new ge(6,2.6,2.4);u.translate(0,1.3,0),s.forEach((f,m)=>{let v=new Ye;v.position.set(f.x,0,f.z);let g=new lt(o,new Kt({uniforms:{uTime:{value:0},uColor:{value:new ot(8376575)},uFound:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uTime, uFound; uniform vec3 uColor; varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){
            float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
            float fres = pow(f, 2.2);
            // hexagon-ish lattice from the sphere coordinates
            float a = atan(vP.z, vP.x) * 12.0; float e = vP.y * 0.9;
            vec2 q = vec2(a, e + 0.5 * floor(a));
            vec2 g = abs(fract(q) - 0.5);
            float hexl = 1.0 - smoothstep(0.0, 0.06, min(g.x, g.y));
            float wave = 0.5 + 0.5 * sin(vP.y * 0.8 - uTime * 2.0);
            vec3 col = mix(uColor, vec3(0.4, 1.0, 0.55), uFound);
            float v = fres * 0.9 + hexl * (0.12 + 0.25 * wave) + 0.03;
            gl_FragColor = vec4(col * v, 1.0);
            #include <colorspace_fragment>
          }`,transparent:!0,depthWrite:!1,blending:$t,side:Ue}));g.userData.noAO=!0;let p=new lt(new xe(1.2,2.2,460,16,1,!0),Ns(10473727,.12));p.position.y=230,p.userData.noAO=!0;let M=new lt(new Re(46,46),new _e({map:l,transparent:!0,blending:$t,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.15,v.add(g,p,M);for(let y=0;y<6;y++){let x=new Rn(new vn({map:a,blending:$t,depthWrite:!1,transparent:!0}));x.position.set((t()-.5)*20,1.5+t()*2,(t()-.5)*20),x.scale.setScalar(4+t()*3),v.add(x)}for(let y=0;y<7;y++){let x=e()*Math.PI*2,T=4+e()*9,E=e()<.6?new lt(d,h):new lt(u,c[y%3]);E.position.set(Math.cos(x)*T,0,Math.sin(x)*T),E.rotation.y=e()*Math.PI,E.castShadow=!0,E.receiveShadow=!0,v.add(E)}this.scene.add(v),this.habitats.push({x:f.x,z:f.z,found:!1,dome:g,beam:p,survivors:6+Math.floor(t()*30),name:`HABITAT ${String.fromCharCode(65+m)}`})})}_fires(){let t=this.rng,e=ti("rgba(255,170,60,1)","rgba(255,60,0,0)"),n=this.buildings.filter(s=>s.kind==="city"&&s.h<70);for(let s=0;s<16&&n.length;s++){let r=n[Math.floor(t()*n.length)],o=[];for(let a=0;a<3;a++){let l=new Rn(new vn({map:e,blending:$t,depthWrite:!1,transparent:!0,opacity:.55}));l.position.set(r.x+(t()-.5)*r.w*.5,r.h+3+a*3,r.z+(t()-.5)*r.d*.5),l.scale.setScalar(10+t()*6),this.scene.add(l),o.push({s:l,base:l.scale.x,ph:t()*10})}o.roof=r.h,this.fires.push(o)}}_ash(){let e=new Float32Array(7500),n=this.rng;for(let r=0;r<2500;r++)e[r*3]=(n()-.5)*300,e[r*3+1]=n()*160,e[r*3+2]=(n()-.5)*300;let s=new ie;s.setAttribute("position",new be(e,3)),this.ash=new dr(s,new _s({color:16752736,size:.18,map:ti("rgba(255,220,190,1)","rgba(255,200,160,0)",32),transparent:!0,opacity:.6,depthWrite:!1,blending:$t})),this.ash.geometry.setDrawRange(0,900),this.scene.add(this.ash)}burst(t,e,n,s=16726634){Ge.impact(t,e,n,new ot(s)),Ge.scorch(t,n,5+Math.random()*3)}setQuality(t){this.quality=t;let e=t!=="low";this.moon.castShadow=e;let n=e?2048:1024;this.moon.shadow.mapSize.x!==n&&(this.moon.shadow.mapSize.set(n,n),this.moon.shadow.map&&(this.moon.shadow.map.dispose(),this.moon.shadow.map=null)),Ge.setQuality(t),this.rain.setQuality(t),this.street.setQuality(t),this.ash.geometry.setDrawRange(0,e?900:400)}buildingsNear(t,e){let n=Math.floor((t+Jt)/nn),s=Math.floor((e+Jt)/nn),r=[];for(let o=n-1;o<=n+1;o++)for(let a=s-1;a<=s+1;a++){let l=this.grid.get(this.key(o,a));l&&r.push(...l)}return r}heightAt(t,e){let n=0;for(let s of this.buildingsNear(t,e))t>s.minX&&t<s.maxX&&e>s.minZ&&e<s.maxZ&&(n=Math.max(n,s.h));return n}_updateShadow(t){let e=new R;t.getWorldDirection(e),e.y=0,e.lengthSq()<1e-4&&e.set(0,0,-1),e.normalize();let n=this._focus||(this._focus=new R);n.copy(t.position).addScaledVector(e,110),n.y=0;let s=this.moonDir,r=Math.abs(s.y)>.99?new R(0,0,1):new R(0,1,0),o=new R().crossVectors(r,s).normalize(),a=new R().crossVectors(s,o),l=(this.moon.shadow.camera.right-this.moon.shadow.camera.left)/this.moon.shadow.mapSize.x,h=n.dot(o),c=n.dot(a);n.addScaledVector(o,Math.round(h/l)*l-h).addScaledVector(a,Math.round(c/l)*l-c),this.moon.target.position.copy(n),this.moon.position.copy(n).addScaledVector(s,900),this.moon.target.updateMatrixWorld()}update(t,e,n,s){this.time=e,this.buildingMat.userData.shader&&(this.buildingMat.userData.shader.uniforms.uTime.value=e),this.zMat.userData.shader&&(this.zMat.userData.shader.uniforms.uTime.value=e),this.sky.material.uniforms.uTime.value=e,this.sky.position.copy(s.position),this.stars.position.copy(s.position),this.moon.castShadow&&this._updateShadow(s),this.flash=this.lightning.update(t,e,s),this.sky.material.uniforms.uFlash.value=this.flash,this.hemi.intensity=.55+this.flash*1.6,this.flashLight.intensity=this.flash*3.5,this.scene.environmentIntensity=.42+this.flash*.6,this.stars.material.opacity=.55*(1-Math.min(1,this.flash*2));for(let c of this.beaconSprites)c.material.opacity=Math.sin(e*3+c.userData.ph)>.6?1:.12;this.padLights.forEach((c,d)=>{let u=((e*2-d/16)%1+1)%1;c.material.opacity=.25+.75*Math.pow(1-u,4)});let r=this.quality==="low"?.4:1;for(let c of this.fires){for(let u of c){let f=.75+.25*Math.sin(e*9+u.ph)*Math.sin(e*5.3+u.ph*2);u.s.scale.setScalar(u.base*f)}let d=c[0].s.position;if(Math.hypot(d.x-s.position.x,d.z-s.position.z)<700){for(c.acc=(c.acc||0)+t*22*r;c.acc>=1;){c.acc-=1;let u=c[Math.floor(Math.random()*c.length)].s.position;Ge.flame(u.x,c.roof+.5,u.z,5+Math.random()*3,1.1)}for(c.sacc=(c.sacc||0)+t*2.6*r;c.sacc>=1;)c.sacc-=1,Ge.smokePuff(d.x,c.roof+8,d.z,12,.16,9,6,2.2)}}let o=(c,d)=>Math.min(1,Math.max(0,(Math.hypot(s.position.x-c,s.position.z-d)-6)/30));for(let c of this.pylons){c.ring.rotation.y+=t*.8;let d=c.cooldown<=0;c.cooldown=Math.max(0,c.cooldown-t),c.ring.material.emissiveIntensity=d?2+Math.sin(e*4)*.6:.3,c.beam.material.uniforms.uOpacity.value=(d?.3:.07)*o(c.x,c.z),c.beam.material.uniforms.uTime.value=e,c.halo.material.opacity=d?.32:.06,c.membrane.material.uniforms.uTime.value=e,c.membrane.material.uniforms.uOn.value=d?1:.15,c.pool.material.opacity=d?1:.3}for(let c of this.habitats){let d=c.beam.material.uniforms;d.uColor.value.setHex(c.found?7012234:10473727),d.uOpacity.value=(.12+.04*Math.sin(e*2+c.x))*o(c.x,c.z),d.uTime.value=e,c.dome.material.uniforms.uTime.value=e,c.dome.material.uniforms.uFound.value+=((c.found?1:0)-c.dome.material.uniforms.uFound.value)*Math.min(1,t*2)}for(let c of this.hordes){let d=.55+.35*Math.sin(e*3+c.x);if(c.ring.material.opacity=c.cleared?.25:d,c.ring.material.color.setHex(c.cleared?3866474:16722458),c.glow.material.opacity=c.cleared?0:d*.5,c.dash.rotation.y+=t*(c.cleared?.05:.25),c.dash.material.color.setHex(c.cleared?3866474:16726570),c.dash.material.opacity=c.cleared?.3:.8,!c.cleared&&Math.random()<t*1.5*r&&Math.hypot(c.x-s.position.x,c.z-s.position.z)<500){let u=Math.random()*6.28,f=Math.random()*c.radius,m=Ge.smokePuff(c.x+Math.cos(u)*f,1,c.z+Math.sin(u)*f,14,.2,6,.4,.6);m&&(m.r=.22,m.g=.05,m.b=.05,m.a=.22)}}let a=this.ash.geometry.attributes.position,l=s.position.x,h=s.position.z;for(let c=0;c<a.count;c++){let d=a.getY(c)-t*1.6,u=a.getX(c),f=a.getZ(c);d<0&&(d+=160),u-l>150?u-=300:u-l<-150&&(u+=300),f-h>150?f-=300:f-h<-150&&(f+=300),a.setXYZ(c,u+Math.sin(this.time*.5+c)*t*.6,d,f)}if(a.needsUpdate=!0,n&&n.state!=="parked"&&n.state!=="down"&&n.altitude!==void 0&&n.altitude<16){let c=1-n.altitude/16;this._dustAcc=(this._dustAcc||0)+t*40*c*r;let d=n.pos.y-n.altitude;for(;this._dustAcc>=1;)this._dustAcc-=1,Ge.dust(n.pos.x,d,n.pos.z,c)}this.street.update(t,e,s),this.rain.update(t,e,s,n,this.flash),this._animateZombies(t,e,n),Ge.update(t,s,this.scene.fog)}_animateZombies(t,e,n){let s=new qt,r=new Te,o=new on,a=new R,l=new R,h=n?n.pos.x:1e9,c=n?n.pos.z:1e9,d=n?n.pos.y:1e9,u=this.zAnim.array,f=this.quality==="low"?.4:1;for(let m of this.zombies){let v=m.idx*4;if(m.dead){m.deadT===0&&(m.scorched=!1),m.deadT+=t;let B=Math.min(1,m.deadT/.35),V=Math.min(1,m.deadT/1.6),k=Math.max(0,m.deadT-1.2)*1.1,tt=Math.max(0,1-Math.max(0,m.deadT-1.4)/.8);if(a.set(m.x,-k,m.z),o.set(-B*1.35,m.yaw,B*.25*m.fallDir),r.setFromEuler(o),l.setScalar(m.scale*Math.max(1e-4,tt)),s.compose(a,r,l),this.zMesh.setMatrixAt(m.idx,s),u[v]=m.walk,u[v+1]=0,u[v+2]=0,u[v+3]=Math.min(1,V*1.1),m.deadT<1.9&&tt>0){for(m.facc=(m.facc||0)+t*16*f;m.facc>=1;)m.facc-=1,Ge.flame(m.x+(Math.random()-.5)*2,.3,m.z+(Math.random()-.5)*2,2.2+Math.random()*1.5,.8);Math.random()<t*6*f&&Ge.embers(m.x,1,m.z,2),Math.random()<t*2.5*f&&Ge.smokePuff(m.x,1.5,m.z,4,.12,4,2.5,1)}m.wasDead=!0;continue}m.wasDead&&(m.wasDead=!1,m.facc=0);let g=m.horde,p=Math.hypot(h-g.x,c-g.z)<g.radius*1.7&&d<60,M,y,x;p?(M=h+Math.sin(m.phase)*6,y=c+Math.cos(m.phase)*6,x=2.6*m.speed+1.2):(M=m.hx+Math.sin(e*.3+m.phase)*4,y=m.hz+Math.cos(e*.27+m.phase)*4,x=m.speed);let T=M-m.x,E=y-m.z,w=Math.hypot(T,E),C=0;if(w>.5){let V=Math.atan2(T,E)-m.yaw;V=Math.atan2(Math.sin(V),Math.cos(V)),m.yaw+=V*Math.min(1,t*3),m.x+=Math.sin(m.yaw)*x*t,m.z+=Math.cos(m.yaw)*x*t,C=1}let S=m.x-g.x,_=m.z-g.z,I=Math.hypot(S,_),N=g.radius*1.15;I>N&&(m.x=g.x+S/I*N,m.z=g.z+_/I*N),m.walk+=t*(C?x*2.4+.6:.6);let U=p&&d<40?1:0;m.reach=(m.reach||0)+(U-(m.reach||0))*Math.min(1,t*4),a.set(m.x,Math.abs(Math.sin(m.walk))*.06*C+m.reach*Math.abs(Math.sin(e*7+m.phase))*.5,m.z),o.set(p?-.3:.12,m.yaw,Math.sin(m.walk*.5+m.phase)*.1),r.setFromEuler(o),l.setScalar(m.scale),s.compose(a,r,l),this.zMesh.setMatrixAt(m.idx,s),u[v]=m.walk,u[v+1]=C?Math.min(1,.4+x*.3):.1,u[v+2]=m.reach,u[v+3]=0}this.zMesh.instanceMatrix.needsUpdate=!0,this.zAnim.needsUpdate=!0}};var Tr=new R;function _n(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Tr.copy(t),Tr[n]=0,Tr.normalize();let h=.5*o/(o+a),c=1-Tr.angleTo(i)/l;return Math.sign(Tr[e])===1?c*h:a/(o+a)+h+h*(1-c)}var zs=class extends ge{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),c=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=c.length/6,m=new R,v=.5/s;for(let g=0,p=0;g<c.length;g+=3,p+=2)switch(a.fromArray(c,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),c[g+0]=h.x*Math.sign(a.x)+l.x*r,c[g+1]=h.y*Math.sign(a.y)+l.y*r,c[g+2]=h.z*Math.sign(a.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),u[p+0]=_n(m,l,"z","y",r,n),u[p+1]=1-_n(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),u[p+0]=1-_n(m,l,"z","y",r,n),u[p+1]=1-_n(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),u[p+0]=1-_n(m,l,"x","z",r,t),u[p+1]=_n(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),u[p+0]=1-_n(m,l,"x","z",r,t),u[p+1]=1-_n(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),u[p+0]=1-_n(m,l,"x","y",r,t),u[p+1]=1-_n(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),u[p+0]=_n(m,l,"x","y",r,t),u[p+1]=1-_n(m,l,"y","x",r,e);break}}};var da=(i,t,e)=>Math.max(t,Math.min(e,i));function fa(i){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,i),n.addColorStop(.3,i),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new Ve(t);return s.colorSpace=de,s}function cv(i){return new Kt({uniforms:{uColor:{value:new ot(i)},uLife:{value:1},uTime:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uLife, uTime; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){
        float f = pow(abs(dot(normalize(vN), normalize(vV))), 3.0);
        float e = 0.75 + 0.25 * sin(vUv.y * 60.0 - uTime * 80.0);
        gl_FragColor = vec4(uColor * f * e * uLife * 2.4, 1.0);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:$t})}function hv(){return new Kt({uniforms:{uSpin:{value:0},uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uSpin, uAmt; varying vec2 vUv;
      void main(){
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; float a = atan(p.y, p.x);
        float blades = pow(abs(cos(a - uSpin)), 14.0) + pow(abs(cos(a - uSpin - 0.35)), 30.0) * 0.5;
        float disc = smoothstep(1.0, 0.94, r) * smoothstep(0.12, 0.22, r);
        float tip = smoothstep(1.0, 0.96, r) * smoothstep(0.9, 0.95, r);
        float alpha = (disc * (0.07 + 0.3 * blades) + tip * 0.35) * uAmt;
        gl_FragColor = vec4(vec3(0.72, 0.8, 0.88), alpha);
      }`,transparent:!0,depthWrite:!1,side:Ue})}var pa=class{constructor(t){this.scene=t,this.group=new Ye,this.body=new Ye,this.group.add(this.body),this._model(),t.add(this.group),this.pos=new R(0,.9,0),this.yaw=Math.PI,this.speed=0,this.vy=0,this.bank=0,this.pitchVis=0,this.state="parked",this.shake=0,this.beams=[],this.forward=new R,this.t=0;let e=fa("rgba(0,0,0,0.85)");this.shadow=new lt(new Re(1,1),new _e({map:e,transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.userData.noAO=!0,t.add(this.shadow),this.light=new As(8055039,40,50,1.6),this.light.position.set(0,-1.5,0),this.group.add(this.light),this.spot=new Xo(15791359,0,170,.3,.6,1.5),this.spot.position.set(0,-1.1,.9),this.spotTarget=new Ae,this.spotTarget.position.set(0,-30,40),this.group.add(this.spot,this.spotTarget),this.spot.target=this.spotTarget;let n=70,s=new xe(n*Math.tan(.3),.25,n,24,1,!0);s.translate(0,n/2,0),s.rotateX(Math.PI/2),this.cone=new lt(s,Ns(14479359,.05)),this.cone.userData.noAO=!0,t.add(this.cone)}_model(){let t=new kt({color:1843238,metalness:.55,roughness:.32}),e=new kt({color:13949152,metalness:.35,roughness:.28}),n=new kt({color:16738842,metalness:.3,roughness:.4}),s=new kt({color:665648,emissive:3205375,emissiveIntensity:3}),r=1.6,o=this.body;o.scale.setScalar(r);let a=N=>(N.castShadow=!0,N),l=a(new lt(new zs(1.4,.42,2,3,.14),t)),h=a(new lt(new zs(1.1,.26,1.45,3,.1),e));h.position.set(0,.3,-.05);let c=new lt(new ge(.12,.27,1.3),n);c.position.set(.32,.31,-.05);let d=a(new lt(new zs(.7,.18,.7,2,.05),t));d.position.set(0,.5,-.35);let u=new lt(new ge(.9,.12,.08),s);u.position.set(0,.12,1),o.add(l,h,c,d,u),this.battLeds=[];for(let N=0;N<4;N++){let U=new lt(new ge(.08,.03,.06),new _e({color:4259696}));U.position.set(-.2+N*.13,.6,-.05),o.add(U),this.battLeds.push(U)}this.rotors=[],this.blurs=[],this.ledMats=[];let f=new ge(.16,.1,1.55),m=new xe(.22,.25,.26,16),v=new mi(.26,.025,6,24);v.rotateX(Math.PI/2);let g=new ge(1.7,.02,.13),p=new bs(.88,32);p.rotateX(-Math.PI/2);for(let[N,U]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let B=U>0,V=a(new lt(f,t));V.position.set(N*.72,.05,U*.72),V.rotation.y=Math.atan2(N,U);let k=new _e({color:B?3205375:16722480}),tt=new lt(new ge(.05,.03,1.2),k);tt.position.set(N*.72,-.01,U*.72),tt.rotation.y=V.rotation.y,this.ledMats.push({m:k,base:new ot(B?3205375:16722480),k:this.ledMats.length});let X=a(new lt(m,t));X.position.set(N*1.45,.14,U*1.45);let ht=new lt(v,new kt({color:1118481,emissive:B?3205375:16722480,emissiveIntensity:2.5}));ht.position.set(N*1.45,.06,U*1.45);let ft=new Ye;ft.position.set(N*1.45,.31,U*1.45);let _t=new lt(g,e);_t.rotation.x=.12,ft.add(_t);let Nt=new lt(p,hv());Nt.position.set(N*1.45,.31,U*1.45),Nt.userData.noAO=!0,o.add(V,tt,X,ht,ft,Nt),this.rotors.push(ft),this.blurs.push(Nt)}for(let N of[-1,1]){let U=a(new lt(new xe(.04,.04,1.8,6),t));U.rotation.x=Math.PI/2,U.position.set(N*.55,-.48,0),o.add(U);for(let B of[-.5,.5]){let V=new lt(new xe(.03,.03,.34,6),t);V.position.set(N*.5,-.32,B),V.rotation.z=N*.3,o.add(V)}}for(let N of[-.4,.4]){let U=new lt(new xe(.012,.02,.6,5),t);U.position.set(N,.55,-.85),U.rotation.x=-.35,o.add(U)}let M=fa("rgba(80,240,255,1)"),y=fa("rgba(255,50,40,1)"),x=fa("rgba(255,255,255,1)");for(let[N,U,B]of[[.6,1,M],[-.6,1,M],[.6,-1,y],[-.6,-1,y]]){let V=new Rn(new vn({map:B,blending:$t,depthWrite:!1,transparent:!0}));V.position.set(N,0,U),V.scale.setScalar(.9),o.add(V)}this.strobe=new Rn(new vn({map:x,blending:$t,depthWrite:!1,transparent:!0})),this.strobe.position.set(0,.62,-.8),this.strobe.scale.setScalar(1.6),o.add(this.strobe);let T=new lt(new ge(.42,.22,.08),t);T.position.set(0,-.32,.5),this.gimbal=new Ye,this.gimbal.position.set(0,-.45,.5);let E=a(new lt(new pn(.17,16,12),e)),w=new lt(new xe(.09,.1,.1,16),new kt({color:329224,metalness:.9,roughness:.05}));w.rotation.x=Math.PI/2,w.position.z=.15;let C=new lt(new pn(.025,6,4),new _e({color:16719904}));C.position.set(.11,.07,.12),this.rec=C,this.gimbal.add(E,w,C),o.add(T,this.gimbal);let S=a(new lt(new xe(.11,.16,.9,12),t));S.rotation.x=Math.PI/2,S.position.set(0,-.32,1);let _=new lt(new mi(.14,.03,6,16),new kt({color:3147784,emissive:16719936,emissiveIntensity:2}));_.position.set(0,-.32,1.25),this.coil=_;let I=new lt(new pn(.1,10,8),new kt({color:3147784,emissive:16719936,emissiveIntensity:4}));I.position.set(0,-.32,1.48),o.add(S,_,I),this.muzzle=I}reset(){this.pos.set(0,.9,0),this.yaw=Math.PI,this.speed=0,this.vy=0,this.bank=0,this.pitchVis=0,this.state="parked"}takeoff(){(this.state==="parked"||this.state==="hover")&&(this.state=this.pos.y<18?"takeoff":"flying")}getForward(t=this.forward){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}update(t,e,n){let s=this.getForward(),r=null,o=0,a=0,l=0;switch(this.t+=t,this.state){case"parked":l=0,a=0;break;case"takeoff":l=6,a=9,o=-e.roll*.6,this.pos.y>22&&(this.state="flying");break;case"flying":{o=-e.roll*1.3,a=-e.pitch*17,l=da(22+e.pitch*11,12,34);break}case"hover":l=0,a=Math.sin(performance.now()/600)*.4;break;case"attacked":l=4,a=-2.2,o=1.6,this.shake=1;break;case"down":l=0,a=-14,o=2.5;break;default:break}let h=Jt+40;if((Math.abs(this.pos.x)>h||Math.abs(this.pos.z)>h)&&this.state==="flying"){let y=Math.atan2(-this.pos.x,-this.pos.z)-this.yaw;y=Math.atan2(Math.sin(y),Math.cos(y)),o=da(y*2,-1.5,1.5),this.outOfBounds=!0}else this.outOfBounds=!1;let c=1-Math.exp(-t*2.5);this.speed+=(l-this.speed)*c,this.vy+=(a-this.vy)*(1-Math.exp(-t*3)),this.yaw+=o*t,this.pos.addScaledVector(s,this.speed*t),this.pos.y+=this.vy*t;let d=this.state==="parked"?.9:2;this.pos.y<d&&(this.vy<-9&&this.state==="flying"&&(r="ground"),this.pos.y=d,this.vy=Math.max(0,this.vy)),this.pos.y>230&&(this.pos.y=230,this.vy=Math.min(0,this.vy));let u=2.6;for(let M of n.buildingsNear(this.pos.x,this.pos.z)){if(this.pos.x<M.minX-u||this.pos.x>M.maxX+u||this.pos.z<M.minZ-u||this.pos.z>M.maxZ+u||this.pos.y>M.h+u)continue;let y=this.pos.x-(M.minX-u),x=M.maxX+u-this.pos.x,T=this.pos.z-(M.minZ-u),E=M.maxZ+u-this.pos.z,w=M.h+u-this.pos.y,C=Math.min(y,x,T,E,w);if(C===w){this.pos.y=M.h+u,this.vy=Math.max(0,this.vy);continue}C===y?this.pos.x=M.minX-u:C===x?this.pos.x=M.maxX+u:C===T?this.pos.z=M.minZ-u:this.pos.z=M.maxZ+u;let S=Math.sin(this.yaw),_=Math.cos(this.yaw);C===y||C===x?S=-S:_=-_,this.yaw=Math.atan2(S,_),this.speed*=.35,r="building",this.t-(this._lastImpact||-9)>.9&&(this._lastImpact=this.t,Ge.impact(this.pos.x,this.pos.y,this.pos.z,new ot(1,.7,.3)))}let f=this.state==="flying"||this.state==="takeoff"?e.roll*.65:0,m=this.state==="flying"?e.pitch*.45+this.speed*.006:0;this.bank+=(f-this.bank)*(1-Math.exp(-t*6)),this.pitchVis+=(m-this.pitchVis)*(1-Math.exp(-t*6)),this.group.position.copy(this.pos),this.group.rotation.set(0,this.yaw,0);let v=this.shake*.12;this.body.rotation.set(this.pitchVis+(Math.random()-.5)*v,0,this.bank+(Math.random()-.5)*v),this.shake=Math.max(0,this.shake-t*2),this._animate(t);let g=n.heightAt(this.pos.x,this.pos.z),p=Math.max(.5,this.pos.y-g);this.shadow.position.set(this.pos.x,g+.25,this.pos.z),this.shadow.scale.setScalar(6+p*.08),this.shadow.material.opacity=da(1.2-p/90,.08,.9),this.altitude=p;for(let M=this.beams.length-1;M>=0;M--){let y=this.beams[M];y.t-=t;let x=Math.max(0,y.t/y.life),T=.75+.25*Math.sin(this.t*90+M);y.core.material.opacity=Math.min(1,x*1.6)*T,y.glow.material.uniforms.uLife.value=x*T,y.glow.material.uniforms.uTime.value=this.t;let E=.4+.6*x;y.core.scale.set(E,E,1),y.glow.scale.set(.6+x*.6,.6+x*.6,1),y.t<=0&&(this.scene.remove(y.grp),y.core.geometry.dispose(),y.core.material.dispose(),y.glow.geometry.dispose(),y.glow.material.dispose(),this.beams.splice(M,1))}return r}_animate(t){let e=this.t,n=this.state!=="parked"&&this.state!=="down",s=this.state==="parked"?5:this.state==="down"?3:55,r=da((s-10)/30,0,1);this.rotors.forEach((d,u)=>{d.rotation.y+=t*s*(u%2?1:-1),d.visible=r<.9}),this.blurs.forEach((d,u)=>{d.material.uniforms.uSpin.value+=t*9*(u%2?1:-1),d.material.uniforms.uAmt.value=r});let o=this.state==="attacked";for(let d of this.ledMats){let u=o?Math.sin(e*16)>0?2.5:.2:.7+.9*Math.max(0,Math.sin(e*4-d.k*1.2));d.m.color.copy(o?new ot(16719904):d.base).multiplyScalar(u)}this.strobe.material.opacity=e%1.2<.06?1:0,this.rec.visible=e%1<.5,this.battLeds.forEach((d,u)=>{d.visible=u<3||e%.8<.4}),this.coil.material.emissiveIntensity=1.5+Math.sin(e*6)*.8,this.gimbal.rotation.set(-.25+Math.sin(e*.7)*.08,Math.sin(e*.5)*.4,0);let a=Math.sin(e*.6)*.45;this.spotTarget.position.set(Math.sin(a)*40,this.state==="parked"?-40:-26,Math.cos(a)*40);let l=this.state==="parked"?260:n?750:0;o&&(l*=Math.random()<.35?.1:1),this.spot.intensity=l,this.group.updateMatrixWorld();let h=this.spot.getWorldPosition(new R),c=this.spotTarget.getWorldPosition(new R);this.cone.position.copy(h),this.cone.lookAt(c),this.cone.material.uniforms.uOpacity.value=l/750*.05,this.cone.material.uniforms.uTime.value=e,this.light.intensity=n?40:15}muzzleWorld(t=new R){return this.muzzle.getWorldPosition(t)}fireBeam(t,e=16722538){let n=this.muzzleWorld(),r=new R().subVectors(t,n).length(),o=new Ye,a=new xe(.13,.13,r,8,1,!0);a.translate(0,r/2,0),a.rotateX(Math.PI/2);let l=new lt(a,new _e({color:new ot(e).lerp(new ot(16777215),.7).multiplyScalar(3),transparent:!0,opacity:1,blending:$t,depthWrite:!1})),h=new xe(.9,.9,r,16,1,!0);h.translate(0,r/2,0),h.rotateX(Math.PI/2);let c=new lt(h,cv(e));l.userData.noAO=c.userData.noAO=!0,o.add(l,c),o.position.copy(n),o.lookAt(t),this.scene.add(o),this.beams.push({grp:o,core:l,glow:c,t:.6,life:.6}),this.beams.filter(d=>d.t>.55).length<=1&&Ge.muzzle(n,new ot(e))}},ma=class{constructor(t){this.camera=t,this.pos=new R(0,8,18),this.look=new R,this.shake=0}update(t,e,n){let s=e.getForward(new R),r=e.state==="parked"?14:15+e.speed*.12,o=new R().copy(e.pos).addScaledVector(s,-r);o.y+=e.state==="parked"?5:5.5;for(let c=0;c<6;c++){let d=n.heightAt(o.x,o.z);if(o.y>d+1.5)break;o.lerp(e.pos,.3),o.y=Math.max(o.y,e.pos.y+2)}o.y=Math.max(o.y,1.5);let a=1-Math.exp(-t*4.5);this.pos.lerp(o,a);let l=new R().copy(e.pos).addScaledVector(s,12);l.y+=1.2,this.look.lerp(l,1-Math.exp(-t*8)),this.camera.position.copy(this.pos),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*3)),this.camera.lookAt(this.look);let h=66+e.speed*.25;Math.abs(this.camera.fov-h)>.1&&(this.camera.fov+=(h-this.camera.fov)*a,this.camera.updateProjectionMatrix())}};function xd(i){let t;if(i.startsWith("C,")){let e=i.split(",");return e.length>=5?{type:"tilt",pitch:+e[1],roll:+e[2],fire:e[3]==="1",range:+e[4],energy:e.length>5?+e[5]:void 0}:{type:"junk",line:i}}if(i.startsWith("N,")){let e=i.split(",");return{type:"nav",alt:+e[1],hdg:+e[2]}}return(t=/^A,(\d+),(\w+)/.exec(i))?{type:"attackTick",secs:+t[1],src:t[2]}:(t=/^Z,STATUS,(\w+),(\d),(\d+)/.exec(i))?{type:"status",mode:t[1],attacked:t[2]==="1",energy:+t[3]}:i.includes("Entering STANDBY MODE")?{type:"mode",mode:"STANDBY",text:i}:i.includes("Entering BATTLE MODE")?{type:"mode",mode:"BATTLE",text:i}:(t=/Laser fired! Charge left: (\d+)\/10/.exec(i))?{type:"fired",energy:+t[1],text:i}:(t=/Laser charging: (\d+)\/10/.exec(i))?{type:"charging",energy:+t[1],text:i}:(t=/Laser not ready: (\d+)\/10/.exec(i))?{type:"notready",energy:+t[1],text:i}:i.includes("Drone Was Attacked")?{type:"attacked",text:i}:i.includes("Rescued")?{type:"rescued",text:i}:/terminated/i.test(i)?{type:"terminated",text:i}:(t=/^T:\s*([-\d.]+).*?P:\s*([-\d.]+).*?H:\s*([-\d.]+)/.exec(i))?{type:"telemetry",T:+t[1],P:+t[2],H:+t[3],text:i}:/threshold/.test(i)?{type:"warning",text:i}:i.startsWith("[ZD]")?{type:"diag",text:i}:{type:"text",text:i}}var Ar=class{constructor(t,e){this.onLine=t,this.onStatus=e||(()=>{}),this.enc=new TextEncoder,this.port=null,this.writer=null,this.reader=null,this.kind="usb"}static supported(){return typeof navigator<"u"&&"serial"in navigator}async connect(t=115200,e=!1){let n=e?{}:{filters:[{usbVendorId:1155}]};this.port=await navigator.serial.requestPort(n),await this.port.open({baudRate:t,bufferSize:8192}),this.writer=this.port.writable.getWriter(),this.onStatus("connected"),this._readLoop()}async _readLoop(){let t=new TextDecoderStream;this._pipe=this.port.readable.pipeTo(t.writable).catch(()=>{}),this.reader=t.readable.getReader();let e="";try{for(;;){let{value:n,done:s}=await this.reader.read();if(s)break;e+=n;let r;for(;(r=e.indexOf(`
`))>=0;){let o=e.slice(0,r).replace(/\r/g,"");e=e.slice(r+1),o.length&&this.onLine(o)}e.length>4096&&(e="")}}catch{}this.onStatus("lost")}send(t){this.writer&&this.writer.write(this.enc.encode(t+`
`)).catch(()=>{})}async disconnect(){try{this.reader&&await this.reader.cancel()}catch{}try{this.writer&&this.writer.releaseLock()}catch{}try{this.port&&await this.port.close()}catch{}this.port=this.writer=this.reader=null,this.onStatus("closed")}},ga=class i{constructor(t){this.onLine=t,this.kind="sim",this.mode="STANDBY",this.attacked=!1,this.energy=0,this.pitch=0,this.roll=0,this.targetPitch=0,this.targetRoll=0,this.range=8190,this.flipped=!1,this.terminated=!1,this.t=0,this.tTel=0,this.tStream=0,this.tNav=0,this.tAtt=0,this.tAttack0=0,this.pendingSingle=!1,this.pressT=0,this.lastEdge=-1,this.fireFlag=0,this.src="FLIP",this.alt=0}emit(t){this.terminated||setTimeout(()=>this.onLine(t),0)}start(){this.emit("[ZD] Zombie Drone add-ons | SIMULATED BOARD (keyboard) | OLED - | TOF - | BUZZER -"),this.emit("Entering STANDBY MODE")}press(){if(this.terminated)return;let t=performance.now()/1e3;this.t=t,this.held=!0,!(t-this.lastEdge<.05)&&(this.lastEdge=t,this.pendingSingle&&t-this.pressT<.5?(this.pendingSingle=!1,this._double()):(this.pendingSingle=!0,this.pressT=t))}release(){this.held=!1}_single(){this.mode==="BATTLE"&&!this.attacked&&this._charge()}_long(){this.mode==="BATTLE"&&!this.attacked&&this._fire()}_charge(){this.energy=Math.min(10,this.energy+3),this.emit(`Laser charging: ${this.energy}/10`)}_fire(){this.energy>=5?(this.energy-=5,this.emit(`Laser fired! Charge left: ${this.energy}/10`),this.fireFlag=1):this.emit(`Laser not ready: ${this.energy}/10 (needs 5/10)`)}_double(){this.mode==="STANDBY"?(this.mode="BATTLE",this.attacked=!1,this.emit("Entering BATTLE MODE"),this.tBattle=this.t):this.attacked?(this.attacked=!1,this.emit("Rescued! Back to BATTLE MODE")):(this.mode="STANDBY",this.emit("Entering STANDBY MODE"),this.tTel=this.t)}_attack(t){this.mode!=="BATTLE"||this.attacked||(this.attacked=!0,this.src=t,this.tAttack0=this.tAtt=this.t,this.emit("Drone Was Attacked! "),this.emit(`A,10,${t}`))}setFlipped(t){this.flipped=t}grab(){this.t=performance.now()/1e3,this.range=40,this._grabUntil=this.t+.4,this.mode==="BATTLE"&&this.t-(this.tBattle||0)>1.5&&this._attack("TOF")}receive(t){this.terminated||(t==="E,PING"?this.emit(`Z,STATUS,${this.mode},${this.attacked?1:0},${this.energy}`):t==="E,CHARGE"&&this.mode==="BATTLE"&&!this.attacked?this._charge():t==="E,FIRE"&&this.mode==="BATTLE"&&!this.attacked&&this._fire())}send(t){this.receive(t)}update(t){if(this.terminated)return;this.t=performance.now()/1e3;let e=this.t;this.pendingSingle&&e-this.pressT>=.5&&(this.pendingSingle=!1,this.held?this._long():this._single()),this._grabUntil&&e>this._grabUntil&&(this.range=8190,this._grabUntil=0);let n=Math.min(1,t*6);if(this.pitch+=(this.targetPitch-this.pitch)*n,this.roll+=(this.targetRoll-this.roll)*n,this.mode==="STANDBY"){if(e-this.tTel>=1){this.tTel=e;let s=29.5+Math.sin(e/20)*.6,r=1008.4+Math.sin(e/30)*.3,o=63+Math.sin(e/15)*3;this.emit(`T: ${s.toFixed(2)} degC, P: ${r.toFixed(2)} hPa, H: ${o.toFixed(2)} %RH, A: 9.79 m/s^2, G: 0.61 dps, M: 0.43 gauss`)}return}if(this.mode==="BATTLE"){if(this.flipped&&!this.attacked&&this._attack("FLIP"),e-this.tStream>=.02){this.tStream=e;let s=this.flipped?178:this.roll;this.emit(`C,${this.pitch.toFixed(1)},${s.toFixed(1)},${this.fireFlag},${this.range},${this.energy}`),this.fireFlag=0}if(e-this.tNav>=.5&&(this.tNav=e,this.emit(`N,${this.alt.toFixed(1)},0`)),this.attacked){if(e-this.tAttack0>=10)this.emit("Drone terminated. Communication cut off."),this.attacked=!1,this.mode="DEAD",setTimeout(()=>{this.terminated=!0},5);else if(e-this.tAtt>=1){this.tAtt=e;let s=Math.ceil(10-(e-this.tAttack0));this.emit("Drone Was Attacked! "),this.emit(`A,${s},${this.src}`)}}}}reset(){let t=this.onLine;Object.assign(this,new i(t)),this.start()}};var xa=class{constructor(){this.ctx=null,this.muted=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=.5,this.master.connect(t.destination),this.hum=t.createOscillator(),this.hum.type="sawtooth",this.hum.frequency.value=80,this.hum2=t.createOscillator(),this.hum2.type="triangle",this.hum2.frequency.value=161;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=420,this.humGain=t.createGain(),this.humGain.gain.value=0,this.hum.connect(e),this.hum2.connect(e),e.connect(this.humGain),this.humGain.connect(this.master),this.hum.start(),this.hum2.start();let n=t.sampleRate;this.noise=t.createBuffer(1,n,t.sampleRate);let s=this.noise.getChannelData(0);for(let l=0;l<n;l++)s[l]=Math.random()*2-1;let r=t.createBufferSource();r.buffer=this.noise,r.loop=!0;let o=t.createBiquadFilter();o.type="highpass",o.frequency.value=700;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=5200,this.rainGain=t.createGain(),this.rainGain.gain.value=.045,r.connect(o),o.connect(a),a.connect(this.rainGain),this.rainGain.connect(this.master),r.start()}thunder(t=2,e=.6){if(!this.ctx)return;let n=this.ctx,s=n.currentTime+Math.min(t,5),r=n.createBufferSource();r.buffer=this.noise,r.loop=!0;let o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(900,s),o.frequency.exponentialRampToValueAtTime(70,s+3.5);let a=n.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.5*e,s+.12),a.gain.setTargetAtTime(.25*e,s+.4,.3),a.gain.exponentialRampToValueAtTime(.001,s+4.2),r.connect(o),o.connect(a),a.connect(this.master),r.start(s),r.stop(s+4.4),t<2&&this._noise(.25,4e3,.35*e,Math.min(t,5))}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.5)}rotor(t,e){if(!this.ctx)return;let n=this.ctx.currentTime;this.humGain.gain.setTargetAtTime(t*.12,n,.2),this.hum.frequency.setTargetAtTime(70+e*2.2,n,.2),this.hum2.frequency.setTargetAtTime(141+e*4.4,n,.2)}_tone(t,e,n,s,r=.3,o=0){if(!this.ctx)return;let a=this.ctx,l=a.currentTime+o,h=a.createOscillator(),c=a.createGain();h.type=t,h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+s),c.gain.setValueAtTime(r,l),c.gain.exponentialRampToValueAtTime(.001,l+s),h.connect(c),c.connect(this.master),h.start(l),h.stop(l+s+.02)}_noise(t,e,n=.4,s=0){if(!this.ctx)return;let r=this.ctx,o=r.currentTime+s,a=r.createBufferSource();a.buffer=this.noise;let l=r.createBiquadFilter();l.type="lowpass",l.frequency.value=e;let h=r.createGain();h.gain.setValueAtTime(n,o),h.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l),l.connect(h),h.connect(this.master),a.start(o),a.stop(o+t+.02)}laser(){this._tone("square",1800,180,.35,.22),this._tone("sawtooth",900,90,.4,.15,.03),this._noise(.3,3e3,.12)}zap(){this._noise(.25,1200,.25),this._tone("triangle",300,60,.25,.2)}hit(){this._noise(.4,600,.6),this._tone("sine",120,40,.35,.5)}charge(){this._tone("sine",400,1200,.25,.25),this._tone("sine",600,1800,.25,.18,.12)}habitat(){[523,659,784,1046].forEach((t,e)=>this._tone("triangle",t,t,.3,.2,e*.12))}tick(){this._tone("square",1400,1400,.06,.12)}alarm(t){this._tone("square",880,880,t?.08:.14,.18),this._tone("square",660,660,t?.08:.14,.18,t?.1:.18)}rescued(){this._tone("triangle",660,660,.12,.25),this._tone("triangle",990,990,.18,.25,.15)}lost(){this._tone("sawtooth",440,55,1.6,.35),this._noise(1.8,5e3,.25)}mode(){this._tone("sine",520,780,.15,.2)}win(){[523,659,784,1046,1318].forEach((t,e)=>this._tone("triangle",t,t,.45,.22,e*.15))}};var ct=i=>document.getElementById(i),Cr=(i,t,e)=>Math.max(t,Math.min(e,i)),uv={invertPitch:!1,invertRoll:!1,swap:!1,sens:1,maxTilt:35,bloom:!0,deadzone:3,gfx:"auto"},Ie={...uv};try{Object.assign(Ie,JSON.parse(localStorage.getItem("zd-settings")||"{}"))}catch{}function dv(){try{localStorage.setItem("zd-settings",JSON.stringify(Ie))}catch{}}var Sa=new Po({canvas:ct("c"),antialias:!1,powerPreference:"high-performance"});Sa.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Sa.setSize(window.innerWidth,window.innerHeight);var uh=new Ms,hn=new qe(66,window.innerWidth/window.innerHeight,.5,6e3),Pr=new ia(Sa,uh,hn),Le=new ua(uh,Sa),Vt=new pa(uh),Mi=new ma(hn),Oe=new xa,Ma=!1;function fv(){return Ie.gfx==="low"||Ie.gfx==="auto"&&Ma?"low":"high"}function dh(){let i=fv();Pr.setQuality(i),Le.setQuality(i)}dh();Le.lightning.onThunder=(i,t)=>Oe.thunder(i,t);var D={link:null,linkKind:"none",linkOk:!1,boardMode:"UNKNOWN",attacked:!1,attackSecs:10,attackSrc:"FLIP",attackT0:0,terminated:!1,energy:0,raw:{pitch:0,roll:0},range:8190,baroAlt:null,boardHdg:null,calib:{pitch:0,roll:0},score:0,kills:0,hordesCleared:0,habitatsFound:0,hull:100,missionT:0,running:!1,over:!1,wipeActive:!1,wipeT:6,wipeSent:-1,lastTilt:0,cCount:0,cRate:0,lastLine:0,fwSeen:!1,tConnect:0,fwWarned:!1,T:null,P:null,H:null,lastScoreMsg:"",tScore:0,tPing:0,tRate:0};window.__zd={G:D,world:Le,drone:Vt,settings:Ie,gfx:Pr};var va=ct("loglines");function ln(i,t=""){let e=document.createElement("div"),n=new Date;for(e.textContent=`${n.toTimeString().slice(0,8)}  ${i}`,t&&(e.className=t),va.appendChild(e);va.children.length>11;)va.removeChild(va.firstChild)}function Be(i,t="",e="",n=2600){let s=document.createElement("div");for(s.className=`toast ${e}`,s.innerHTML=`${i}${t?`<small>${t}</small>`:""}`,ct("toasts").appendChild(s);ct("toasts").children.length>4;)ct("toasts").removeChild(ct("toasts").firstChild);setTimeout(()=>s.remove(),n)}function Os(i){!D.link||D.terminated||(D.link.send(i),!i.startsWith("E,PING")&&!i.startsWith("E,SCORE")&&ln(`PC \u2192 ${i}`,"l-pc"))}function Ed(i){D.lastLine=performance.now();let t=xd(i);switch(t.type){case"tilt":D.fwSeen=!0,D.raw.pitch=t.pitch,D.raw.roll=t.roll,D.range=t.range,t.energy!==void 0&&(D.energy=t.energy),D.lastTilt=performance.now(),D.cCount++,D.boardMode!=="BATTLE"&&!D.terminated&&oh("BATTLE",!0);break;case"nav":D.baroAlt=t.alt,D.boardHdg=t.hdg;break;case"attackTick":D.attacked||ah(t.src),D.attackSecs=t.secs,D.attackSrc=t.src,D.attackT0=performance.now()-(10-t.secs)*1e3,Oe.alarm(t.secs<=3);break;case"status":D.fwSeen=!0,t.mode!==D.boardMode&&oh(t.mode,!0),D.energy=t.energy,t.attacked&&!D.attacked&&ah(D.attackSrc);break;case"mode":ln(t.text,"l-ok"),D.terminated&&lh(),oh(t.mode);break;case"charging":D.energy=t.energy,ln(t.text);break;case"notready":D.energy=t.energy,ln(t.text,"l-warn"),Be("LASER NOT READY",`${t.energy}/10 \xB7 charge to 5/10 first (blue button or a cyan pylon)`,"amb",1800);break;case"fired":D.energy=t.energy,ln(t.text,"l-ok"),xv();break;case"attacked":ln(t.text,"l-red"),D.attacked||ah(D.attackSrc);break;case"rescued":ln(t.text,"l-ok"),mv();break;case"terminated":ln(t.text,"l-red"),gv();break;case"telemetry":D.T=t.T,D.P=t.P,D.H=t.H,ln(t.text,"l-dim"),D.terminated&&lh();break;case"warning":ln(t.text,"l-warn");break;case"diag":ln(t.text,"l-diag"),D.terminated&&lh();break;default:ln(t.text||i)}}function pv(i){i==="connected"&&(D.linkOk=!0,ln("USB serial connected (115200 8N1)","l-diag")),i==="lost"&&(D.linkOk=!1,ln("USB serial lost","l-red"),Be("LINK LOST","USB cable unplugged or port closed","red",4e3))}function oh(i,t=!1){i!==D.boardMode&&(D.boardMode=i,i==="BATTLE"?(D.attacked=!1,ct("standby").classList.add("hidden"),!D.running&&!D.over&&(D.running=!0,D.missionT=0,Be("BATTLE MODE","drone launching \xB7 tilt the board to fly","grn")),Vt.takeoff(),t||Oe.mode()):i==="STANDBY"&&(D.attacked=!1,ct("attack").classList.add("hidden"),Vt.state!=="parked"&&(Vt.state=Vt.pos.y<3?"parked":"hover"),ct("standby").classList.remove("hidden"),D.wipeActive&&(D.wipeActive=!1,ct("wipe").classList.add("hidden")),t||Oe.mode()))}function ah(i){D.attacked=!0,D.attackSrc=i||"FLIP",D.attackSecs=10,D.attackT0=performance.now(),Vt.state!=="down"&&(Vt.state="attacked"),ct("attack").classList.remove("hidden"),Mi.shake=1.2,Oe.alarm(!1)}function mv(){D.attacked&&(D.attacked=!1,ct("attack").classList.add("hidden"),D.boardMode==="BATTLE"&&!D.over&&(Vt.state="flying"),Oe.rescued(),Be("RESCUED","back to BATTLE MODE","grn"))}function gv(){D.terminated=!0,D.attacked=!1,D.over=!0,ct("attack").classList.add("hidden"),ct("wipe").classList.add("hidden"),Vt.state="down",Oe.lost(),setTimeout(()=>ct("lost").classList.remove("hidden"),900)}function lh(){D.terminated=!1,ct("lost").classList.add("hidden"),fh(),D.boardMode="UNKNOWN",Be("NEW DRONE ONLINE","board reset detected","grn")}function fh(){Object.assign(D,{score:0,kills:0,hordesCleared:0,habitatsFound:0,hull:100,missionT:0,running:!1,over:!1,wipeActive:!1,wipeT:6,attacked:!1});for(let i of Le.habitats)i.found=!1;for(let i of Le.hordes){i.alive=i.total,i.cleared=!1;for(let t of i.zombies)t.dead=!1,t.deadT=0,t.x=t.hx,t.z=t.hz}for(let i of Le.pylons)i.cooldown=0;Vt.reset(),["attack","end","wipe"].forEach(i=>ct(i).classList.add("hidden")),D.boardMode==="BATTLE"&&(D.running=!0,Vt.takeoff())}function wd(i,t){D.over=!0,D.running=!1,ct("endtitle").textContent=i,ct("endtitle").style.color=t;let e=Math.floor(D.missionT/60),n=Math.floor(D.missionT%60);ct("endstats").innerHTML=`SCORE ${D.score}<br>HABITATS ${D.habitatsFound}/5 \xB7 ZOMBIES ${D.kills} \xB7 HORDES ${D.hordesCleared}<br>TIME ${e}:${String(n).padStart(2,"0")}`,ct("end").classList.remove("hidden")}function xv(){Oe.laser();let i=Vt.pos,t=Vt.getForward(new R),e=[];for(let s of Le.zombies){if(s.dead)continue;let r=s.x-i.x,o=s.z-i.z,a=1.5-i.y,l=Math.hypot(r,a,o);if(l>190)continue;let h=(r*t.x+o*t.z)/Math.max(1,Math.hypot(r,o));e.push({z:s,score:l-h*60})}e.sort((s,r)=>s.score-r.score);let n=e.slice(0,8);if(!n.length){Vt.fireBeam(new R().copy(i).addScaledVector(t,160).add(new R(0,-10,0))),Be("LASER FIRED","no zombies in range","amb",1800);return}for(let{z:s}of n)Vt.fireBeam(new R(s.x,1.2*s.scale,s.z)),Le.burst(s.x,1.2*s.scale,s.z),s.dead=!0,s.deadT=0,s.horde.alive--,D.kills++,D.score+=10,s.horde.alive<=0&&!s.horde.cleared&&(s.horde.cleared=!0,D.hordesCleared++,D.score+=100,Be("HORDE CLEARED","+100 \xB7 zone is safe now","grn"));setTimeout(()=>Oe.zap(),120),Be(`LASER FIRED \xB7 ${n.length} ZOMBIES DOWN`,`+${n.length*10}`,"red",1800)}var vd=0;function yd(i){let t=performance.now();i!=="wipe"&&t-vd<900||(vd=t,D.hull=Math.max(0,D.hull-(i==="wipe"?40:12)),Os("E,HIT"),Oe.hit(),Mi.shake=1.5,ct("hitflash").style.background="rgba(255,40,40,.35)",setTimeout(()=>{ct("hitflash").style.background="rgba(255,40,40,0)"},160),D.hull<=0&&!D.over&&(Vt.state="down",Be("DRONE DOWN","hull integrity 0%","red",4e3),setTimeout(()=>wd("DRONE DOWN","#ff4a4a"),1500)))}var On=new Set;window.addEventListener("keydown",i=>{if(i.repeat){["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault();return}On.add(i.code);let t=D.linkKind==="sim"?D.link:null;if(i.code==="Space"&&(i.preventDefault(),t?t.press():Td()),i.code==="KeyF"&&t&&t.setFlipped(!0),i.code==="KeyG"&&t&&t.grab(),i.code==="KeyC"&&Ad(),i.code==="KeyL"&&ct("log").classList.toggle("hidden"),i.code==="KeyM"&&(Oe.setMuted(!Oe.muted),Be(Oe.muted?"SOUND OFF":"SOUND ON","","",1200)),i.code==="Escape"&&Pd(),i.code==="KeyR"){if(D.terminated&&t){t.reset();return}fh(),Be("MISSION RESTARTED","","",1500)}});window.addEventListener("keyup",i=>{On.delete(i.code),i.code==="Space"&&D.linkKind==="sim"&&D.link.release(),i.code==="KeyF"&&D.linkKind==="sim"&&D.link.setFlipped(!1)});function Td(){D.linkKind!=="usb"||D.boardMode!=="BATTLE"||D.attacked||D.terminated||Os("E,FIRE")}ct("c").addEventListener("mousedown",i=>{i.button===0&&Td()});function vv(i,t){return t=Math.min(99,Math.max(5,t)),i*Math.atan(.151977*Math.sqrt(t+8.313659))+Math.atan(i+t)-Math.atan(t-1.676331)+.00391838*Math.pow(t,1.5)*Math.atan(.023101*t)-4.686035}function Ad(){D.calib.pitch=D.raw.pitch,D.calib.roll=D.raw.roll,Be("TILT LEVELLED",`zero = pitch ${D.raw.pitch.toFixed(1)}\xB0, roll ${D.raw.roll.toFixed(1)}\xB0`,"",2e3)}function Rd(){let i=0,t=0;return(On.has("KeyS")||On.has("ArrowDown"))&&(i+=26),(On.has("KeyW")||On.has("ArrowUp"))&&(i-=26),(On.has("KeyD")||On.has("ArrowRight"))&&(t+=30),(On.has("KeyA")||On.has("ArrowLeft"))&&(t-=30),{p:i,r:t}}function Cd(){return D.linkKind==="usb"&&performance.now()-D.lastTilt>1e3}function yv(){let i=D.raw.pitch-D.calib.pitch,t=D.raw.roll-D.calib.roll;if(Cd()){let s=Rd(),r=D.kbSmooth||(D.kbSmooth={p:0,r:0});r.p+=(s.p-r.p)*.15,r.r+=(s.r-r.r)*.15;let o=1/35;return{pitch:Cr(r.p*o,-1,1),roll:Cr(r.r*o,-1,1),dp:r.p,dr:r.r}}Math.abs(D.raw.roll)>120&&(t=0),Ie.swap&&([i,t]=[t,i]),Ie.invertPitch&&(i=-i),Ie.invertRoll&&(t=-t);let e=s=>Math.sign(s)*Math.max(0,Math.abs(s)-Ie.deadzone),n=Ie.sens/Ie.maxTilt;return{pitch:Cr(e(i)*n,-1,1),roll:Cr(e(t)*n,-1,1),dp:i,dr:t}}function Mv(){let i=D.link,{p:t,r:e}=Rd();i.targetPitch=t,i.targetRoll=e,i.alt=Vt.altitude||0}function Pd(){let i=ct("settings");i.classList.contains("hidden")&&(ct("sInvP").checked=Ie.invertPitch,ct("sInvR").checked=Ie.invertRoll,ct("sSwap").checked=Ie.swap,ct("sSens").value=Ie.sens,ct("sMax").value=Ie.maxTilt,ct("sBloom").checked=Ie.bloom,ct("sGfx").value=Ie.gfx),i.classList.toggle("hidden")}for(let[i,t,e]of[["sInvP","invertPitch","b"],["sInvR","invertRoll","b"],["sSwap","swap","b"],["sSens","sens","n"],["sMax","maxTilt","n"],["sBloom","bloom","b"],["sGfx","gfx","s"]])ct(i).addEventListener("input",n=>{Ie[t]=e==="b"?n.target.checked:e==="s"?n.target.value:+n.target.value,dv(),t==="gfx"&&(Ma=!1,dh())});ct("calBtn").onclick=()=>Ad();ct("closeSet").onclick=()=>Pd();ct("againBtn").onclick=()=>{fh()};Ar.supported()?ct("serialNote").innerHTML='Plug the B-L4S5I-IOT01A into USB (ST-LINK), click connect and pick <b>STMicroelectronics STLink Virtual COM Port</b>. 115200 baud. Close Tera Term first: only one program can own the COM port. <a href="#" id="anyPort" style="color:#8fe">Port not listed?</a>':(ct("connectBtn").disabled=!0,ct("serialNote").innerHTML="Web Serial is not available here. Open this page in <b>Google Chrome or Microsoft Edge</b> (use <b>start_game.bat</b>, which serves it from http://localhost). Keyboard mode works everywhere.");function Id(i){ct("title").classList.add("hidden"),ct("hud").classList.remove("hidden"),D.linkKind=i;let t=ct("link");t.textContent=i==="usb"?"USB \xB7 STM32":"KEYBOARD SIM",t.style.color=i==="usb"?"#5dff8a":"#ffb340"}async function Ld(i){Oe.unlock();try{let t=new Ar(Ed,pv);await t.connect(115200,i),D.link=t,Id("usb"),D.tConnect=performance.now(),Os("E,PING"),setTimeout(()=>{performance.now()-D.lastLine>1800&&Be("WAITING FOR THE BOARD\u2026","press the black RESET button on the STM32 board","amb",5e3)},2e3)}catch(t){t&&t.name!=="NotFoundError"&&Be("COULD NOT OPEN PORT",String(t.message||t),"red",5e3)}}ct("connectBtn").onclick=()=>Ld(!1);document.addEventListener("click",i=>{i.target&&i.target.id==="anyPort"&&(i.preventDefault(),Ld(!0))});ct("simBtn").onclick=()=>{Oe.unlock();let i=new ga(Ed);D.link=i,Id("sim"),i.start(),Be("KEYBOARD SIMULATION","double-tap SPACE to launch \xB7 WASD to fly","amb",4500)};var Dd=ct("energy");for(let i=0;i<10;i++)Dd.appendChild(document.createElement("div"));var se=ct("horizon").getContext("2d"),ve=ct("minimap").getContext("2d"),Bs=220,Hi=Bs/(2*Jt+140),Fs=(i,t)=>[Bs/2+i*Hi,Bs/2+t*Hi],_a=document.createElement("canvas");_a.width=_a.height=Bs;{let i=_a.getContext("2d");i.fillStyle="rgba(30,40,50,.6)";let[t,e]=Fs(-Jt,-Jt);i.fillRect(t,e,2*Jt*Hi,2*Jt*Hi),i.fillStyle="rgba(140,160,180,.55)";for(let n of Le.buildings){let[s,r]=Fs(n.minX,n.minZ);i.fillRect(s,r,Math.max(1,(n.maxX-n.minX)*Hi),Math.max(1,(n.maxZ-n.minZ)*Hi))}}var Ud=ct("compassStrip");{let i={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};for(let t=-360;t<=720;t+=15){let e=document.createElement("span"),n=(t%360+360)%360;e.textContent=i[n]||(n%45===0?n:"\xB7"),i[n]&&(e.style.color=n===0?"#ff5a5a":"#fff"),e.style.left=`${t*4}px`,e.dataset.d=t,Ud.appendChild(e)}}var ch=0;function _v(i,t){if(ch+=i,ch<1/20)return;ch=0;let e=(Math.atan2(Math.sin(Vt.yaw),-Math.cos(Vt.yaw))*180/Math.PI+360)%360;Ud.style.transform=`translateX(${210-e*4}px)`;let n=ct("mode"),s=D.terminated?"TERMINATED":D.attacked?"ATTACKED":D.boardMode;n.textContent=s,n.style.color=D.terminated||D.attacked?"#ff4a4a":D.boardMode==="BATTLE"?"#5dff8a":D.boardMode==="STANDBY"?"#3ae6ff":"#888",ct("rate").textContent=`${D.cRate} Hz`,ct("score").textContent=D.score,ct("habs").textContent=`${D.habitatsFound}/5`,ct("kills").textContent=D.kills,ct("hordes").textContent=`${D.hordesCleared}/${Le.hordes.length}`;let r=Math.floor(D.missionT/60),o=Math.floor(D.missionT%60);ct("mtime").textContent=`${r}:${String(o).padStart(2,"0")}`,ct("alt").textContent=Math.round(Vt.altitude||0),ct("spd").textContent=Math.round(Vt.speed),ct("baro").textContent=D.baroAlt===null?"--":`${D.baroAlt>=0?"+":""}${D.baroAlt.toFixed(1)} m`,ct("bhdg").textContent=D.boardHdg===null?"--":`${Math.round(D.boardHdg)}\xB0`,ct("pit").textContent=`${t.dp>=0?"+":""}${t.dp.toFixed(0)}`,ct("rol").textContent=`${t.dr>=0?"+":""}${t.dr.toFixed(0)}`,[...Dd.children].forEach((p,M)=>p.classList.toggle("on",M<D.energy)),ct("hull").style.width=`${D.hull}%`;let a=50,l=150,h=250,c=D.range,d=c<600?1-c/600:0;ct("tofbar").style.width=`${d*100}%`,ct("tofbar").style.background=c<a?"#ff3b3b":c<l?"#ffb340":"#3ae6ff",ct("tof").textContent=c>=8190?"no target":`${c} mm${c<a?"  HOLD = GRAB":""}`;let u=ct("hand"),f=c<h?1-c/h:0;u.style.opacity=f>0?Math.min(1,f*2):0,u.style.transform=`translateX(-50%) translateY(${(1-f)*60}%) scale(${.6+f*.9})`;let m=140;se.clearRect(0,0,m,m),se.save(),se.beginPath(),se.arc(m/2,m/2,64,0,Math.PI*2),se.clip(),se.translate(m/2,m/2),se.rotate(-t.dr*Math.PI/180);let v=Cr(t.dp,-60,60)*1.2;se.fillStyle="#1b4a6a",se.fillRect(-100,-200+v,200,200),se.fillStyle="#4a3420",se.fillRect(-100,v,200,200),se.strokeStyle="#fff",se.lineWidth=2,se.beginPath(),se.moveTo(-100,v),se.lineTo(100,v),se.stroke(),se.restore(),se.strokeStyle="#3ae6ff",se.lineWidth=2,se.beginPath(),se.arc(m/2,m/2,64,0,Math.PI*2),se.stroke(),se.strokeStyle="#ffd23b",se.lineWidth=3,se.beginPath(),se.moveTo(m/2-30,m/2),se.lineTo(m/2-10,m/2),se.moveTo(m/2+10,m/2),se.lineTo(m/2+30,m/2),se.stroke(),ve.clearRect(0,0,Bs,Bs),ve.drawImage(_a,0,0);for(let p of Le.hordes){let[M,y]=Fs(p.x,p.z);ve.beginPath(),ve.arc(M,y,Math.max(3,p.radius*Hi),0,Math.PI*2),ve.fillStyle=p.cleared?"rgba(90,255,140,.35)":"rgba(255,50,40,.55)",ve.fill()}for(let p of Le.pylons){let[M,y]=Fs(p.x,p.z);ve.fillStyle=p.cooldown>0?"rgba(58,230,255,.3)":"#3ae6ff",ve.beginPath(),ve.arc(M,y,3,0,Math.PI*2),ve.fill()}for(let p of Le.habitats){let[M,y]=Fs(p.x,p.z);ve.fillStyle=p.found?"#5dff8a":"#9fd0ff",ve.fillRect(M-4,y-4,8,8),p.found||(ve.strokeStyle="rgba(159,208,255,.6)",ve.strokeRect(M-6,y-6,12,12))}{let[p,M]=Fs(Vt.pos.x,Vt.pos.z);ve.save(),ve.translate(p,M),ve.rotate(-Vt.yaw+Math.PI),ve.fillStyle="#fff",ve.beginPath(),ve.moveTo(0,-7),ve.lineTo(5,5),ve.lineTo(0,2),ve.lineTo(-5,5),ve.closePath(),ve.fill(),ve.restore()}if(D.boardMode==="STANDBY"&&(ct("sbtel").textContent=D.T===null?"waiting for telemetry\u2026":`T ${D.T.toFixed(1)} \xB0C   P ${D.P.toFixed(1)} hPa   H ${D.H.toFixed(1)} %RH`,D.H!==null)){let p=vv(D.T,D.H),M=p<=31&&D.T>=10&&D.P>=950&&D.P<=1050;ct("sbhab").innerHTML=M?`<span style="color:#5dff8a">HABITABLE \xB7 wet-bulb ${p.toFixed(1)} \xB0C (limit 31 \xB0C)</span>`:`<span style="color:#ffb340">NOT HABITABLE \xB7 wet-bulb ${p.toFixed(1)} \xB0C (limit 31 \xB0C)</span>`}if(D.attacked){let p=Math.max(0,Math.ceil(10-(performance.now()-D.attackT0)/1e3));ct("atkcount").textContent=Math.min(p,D.attackSecs),ct("atksrc").textContent=D.attackSrc==="TOF"?"A ZOMBIE HAND GRABBED THE DRONE":"DRONE FLIPPED UPSIDE DOWN"}let g="";D.linkKind==="sim"&&D.boardMode==="STANDBY"?g="double-tap SPACE to launch (board double-press)":D.boardMode==="BATTLE"&&!D.attacked&&(g=D.habitatsFound<5?"find the blue habitat beacons \xB7 fly through cyan rings to charge the laser":"",D.energy>=5&&(g=D.linkKind==="sim"?"\u{1F534} LASER READY \xB7 hold SPACE to fire":"\u{1F534} LASER READY \xB7 hold the blue button (or Space / click) to fire"),Cd()&&(g=D.fwSeen?"\u26A0 no tilt data from the board \xB7 flying with WASD / arrow keys":"\u26A0 board is not answering E,PING (enhanced firmware not running?) \xB7 flying with WASD / arrow keys")),ct("hint").textContent=g,ct("oob").classList.toggle("hidden",!Vt.outOfBounds)}var Md=ct("static").getContext("2d");function Sv(){if(ct("lost").classList.contains("hidden"))return;let i=Md.createImageData(320,180);for(let t=0;t<i.data.length;t+=4){let e=Math.random()*255;i.data[t]=i.data[t+1]=i.data[t+2]=e,i.data[t+3]=255}Md.putImageData(i,0,0)}var _d=new Cs,Rr=0;function Nd(){requestAnimationFrame(Nd);let i=Math.min(.05,_d.getDelta()),t=_d.elapsedTime;D.linkKind==="sim"&&D.link&&(Mv(),D.link.update(i));let e=yv(),n=D.boardMode==="BATTLE"&&!D.terminated&&!D.over,s=Vt.update(i,n&&!D.attacked?e:{pitch:0,roll:0},Le);if(s&&n&&!D.attacked&&yd(s),n&&D.running){D.attacked||(D.missionT+=i);for(let a of Le.pylons){if(a.cooldown>0)continue;Math.hypot(Vt.pos.x-a.x,Vt.pos.y-a.y,Vt.pos.z-a.z)<12&&(a.cooldown=8,D.score+=5,Os("E,CHARGE"),Oe.charge(),Be("CHARGING PYLON","laser +3/10 (board charges like a single press)","",2200))}for(let a of Le.habitats)if(!a.found&&Math.hypot(Vt.pos.x-a.x,Vt.pos.z-a.z)<32&&Vt.pos.y<80){a.found=!0,D.habitatsFound++,D.score+=250,Oe.habitat();let l=D.H!==null?D.H:55+Math.random()*10;Be(`${a.name} FOUND \xB7 ${D.habitatsFound}/5`,`${a.survivors} survivors \xB7 humidity ${l.toFixed(0)} %RH (comfortable) \xB7 +250`,"grn",4e3),D.habitatsFound>=5&&setTimeout(()=>{Oe.win(),wd("MISSION COMPLETE","#5dff8a")},1200)}let o=null;if(!D.attacked){for(let a of Le.hordes)if(!a.cleared&&Math.hypot(Vt.pos.x-a.x,Vt.pos.z-a.z)<a.radius&&Vt.pos.y<35){o=a;break}}if(o){D.wipeActive||(D.wipeActive=!0,D.wipeT=6,D.wipeSent=-1,ct("wipe").classList.remove("hidden")),D.wipeT-=i;let a=Math.max(0,Math.ceil(D.wipeT));a!==D.wipeSent&&(D.wipeSent=a,Os(`E,WIPE,${a}`),Oe.tick()),ct("wipesec").textContent=a,D.wipeT<=0&&(Be("MEMORY WIPE","the horde got its hands on the drone \xB7 hull -40%","red",3e3),yd("wipe"),Vt.vy=22,D.wipeT=6,D.wipeSent=-1)}else D.wipeActive&&(D.wipeActive=!1,ct("wipe").classList.add("hidden"),Os("E,SAFE"))}let r=performance.now();if(D.link&&!D.terminated){r-D.tPing>2e3&&(D.tPing=r,D.link.send("E,PING"));let o=`E,SCORE,${D.score},${D.habitatsFound}`;o!==D.lastScoreMsg&&r-D.tScore>1e3&&(D.tScore=r,D.lastScoreMsg=o,D.link.send(o))}r-D.tRate>1e3&&(D.cRate=D.cCount,D.cCount=0,D.tRate=r),D.linkKind==="usb"&&!D.fwSeen&&!D.fwWarned&&D.lastLine&&r-D.tConnect>5e3&&(D.fwWarned=!0,ln("No reply to E,PING: the board is not running the enhanced firmware, or it cannot hear the PC","l-red"),Be("BOARD NOT ANSWERING",'reset the board: Tera Term should show "[ZD] ... build <date>" lines',"red",8e3));{let o=ct("link");D.linkKind==="usb"&&(o.textContent=D.fwSeen?"USB \xB7 STM32":"USB \xB7 NO REPLY",o.style.color=D.fwSeen?"#5dff8a":"#ff4a4a")}if(Le.update(i,t,Vt,hn),!ct("title").classList.contains("hidden"))_i(i,t);else if(Vt.state==="parked"){_i.active&&(_i.active=!1,hn.position.set(Math.sin(Rr)*34,14,Math.cos(Rr)*34)),Rr+=i*.15;let o=new R(Math.sin(Rr)*34,14,Math.cos(Rr)*34);hn.position.lerp(o,1-Math.exp(-i*1.5)),hn.lookAt(0,3,0),Mi.pos.copy(hn.position)}else Mi.update(i,Vt,Le);Oe.rotor(Vt.state==="parked"?.15:Vt.state==="down"?0:1,Vt.speed),_v(i,e),Sv(),Mi.shake>Sd+.4&&(Pr.hit=1),Sd=Mi.shake,Ie.gfx==="auto"&&!Ma&&t>5&&Pr.shouldDropToLow(i)&&(Ma=!0,dh(),Be("GRAPHICS SET TO LOW","the frame rate was low on High \xB7 Esc to change","amb",3500)),Pr.render(i,t,{flash:Le.flash,shake:Mi.shake,attack:D.attacked,lost:D.terminated,bloom:Ie.bloom})}var Sd=0,hh=(()=>{let i=Pe,t=[[i(7),i(9)],[i(7),i(2)],[i(11),i(2)],[i(11),i(11)],[i(3),i(11)],[i(3),i(5)],[i(7),i(5)]],e=[];for(let l=0;l<t.length;l++){let[h,c]=t[(l+t.length-1)%t.length],[d,u]=t[l],[f,m]=t[(l+1)%t.length],v=Math.hypot(d-h,u-c),g=Math.hypot(f-d,m-u),p=30;e.push(new R(d+(h-d)/v*p,0,u+(c-u)/v*p),new R(d+(f-d)/g*p,0,u+(m-u)/g*p))}let n=new Ss(e,!0,"centripetal"),s=600,r=n.getSpacedPoints(s);r.pop();let o=r.map((l,h)=>34+22*Math.sin(h/s*Math.PI*6)),a=r.map(l=>Le.heightAt(l.x,l.z)+14);for(let l=0;l<r.length;l++)o[l]=Math.max(o[l],a[l]);for(let l=0;l<3;l++){let h=o.slice();for(let c=0;c<o.length;c++){let d=0,u=0;for(let f=-12;f<=12;f++){let m=o[(c+f+o.length)%o.length];d=Math.max(d,a[(c+f+o.length)%o.length]),u+=m}h[c]=Math.max(u/25,d)}for(let c=0;c<o.length;c++)o[c]=h[c]}return r.forEach((l,h)=>{l.y=o[h]}),new Ss(r,!0)})(),bd=hh.getLength(),ya=0;function _i(i){ya=(ya+i*26/bd)%1;let t=hh.getPointAt(ya),e=hh.getPointAt((ya+45/bd)%1);e.y-=12,_i.look||(_i.look=e.clone(),hn.position.copy(t)),_i.active=!0,hn.position.lerp(t,Math.min(1,i*3)),_i.look.lerp(e,Math.min(1,i*2)),hn.lookAt(_i.look),Math.abs(hn.fov-62)>.1&&(hn.fov=62,hn.updateProjectionMatrix()),Mi.pos.copy(hn.position)}Nd();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
