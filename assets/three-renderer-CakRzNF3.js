import{c as Aa,N as Lt,S as ui,C as ye,F as Gr,V as be,R as Ra,a as mt,w as Zn,M as ln,W as Ai,b as Qt,d as ot,L as an,H as Pn,U as kt,D as xt,B as Et,e as fn,f as yn,p as ba,E as Ca,g as ut,P as xn,A as wa,h as Fn,i as yt,j as Rn,k as di,l as un,m as dn,n as Hr,o as Pa,q as pn,r as Jt,s as st,O as Vr,t as ya,u as Ln,v as $t,x as bn,y as La,z as Ua,G as nn,I as Da,J as Ia,K as Na,Q as Fa,T as Oa,X as Ba,Y as Ga,Z as Ha,_ as Va,$ as ka,a0 as za,a1 as Wa,a2 as Xa,a3 as Ya,a4 as qa,a5 as Ka,a6 as $a,a7 as kr,a8 as On,a9 as Bt,aa as _n,ab as Za,ac as sn,ad as ja,ae as Qa,af as Ja,ag as eo,ah as zr,ai as to,aj as no,ak as io,al as Wr,am as ze,an as ro,ao,ap as oo,aq as zt,ar as pi,as as cn,at as Xr,au as Ht,av as Pt,aw as Cn,ax as Yr,ay as qr,az as Kr,aA as $r,aB as Un,aC as so,aD as co,aE as lo,aF as fo,aG as Zr,aH as Gt,aI as uo,aJ as po,aK as ho,aL as jr,aM as mo,aN as Qr,aO as Jr,aP as Bn,aQ as Gn,aR as Hn,aS as Vn,aT as je,aU as Ri,aV as bi,aW as Ci,aX as wi,aY as Pi,aZ as yi,a_ as Li,a$ as Ui,b0 as Di,b1 as Ii,b2 as Ni,b3 as Fi,b4 as Oi,b5 as Bi,b6 as Gi,b7 as Hi,b8 as Vi,b9 as ki,ba as zi,bb as Wi,bc as Xi,bd as Yi,be as qi,bf as Ki,bg as $i,bh as Zi,bi as ji,bj as Qi,bk as jn,bl as Qn,bm as Jn,bn as ei,bo as ti,bp as ni,bq as ii,br as _o,bs as Ji,bt as go,bu as Tn,bv as vo,bw as er,bx as tr,by as nr,bz as ri,bA as ai,bB as Eo,bC as ea,bD as So,bE as Mo,bF as xo,bG as ta,bH as ir,bI as na,bJ as rr,bK as ia,bL as To,bM as Ao,bN as Ro,bO as ar,bP as ht,bQ as bo,bR as ra,bS as Co,bT as wo,bU as Po,bV as aa,bW as yo,bX as Lo,bY as Uo,bZ as Do,b_ as Io,b$ as oa,c0 as No,c1 as Fo,c2 as Oo,c3 as Bo,c4 as Go,c5 as Ho,c6 as vt,c7 as sa,c8 as Vo,c9 as or,ca as Ct,cb as ko,cc as ca,cd as la,ce as jt,cf as zo,cg as Wo,ch as sr,ci as Xo,cj as oi,ck as Yo,cl as si,cm as qo,cn as fa,co as wn,cp as Ko,cq as $o,cr as Zo,cs as jo,ct as Qo,cu as cr}from"./three-core-y0KBi971.js";var kn={exports:{}},rn={};var lr;function Jo(){if(lr)return rn;lr=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(i,r,a){var s=null;if(a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),"key"in r){a={};for(var o in r)o!=="key"&&(a[o]=r[o])}else a=r;return r=a.ref,{$$typeof:e,type:i,key:s,ref:r!==void 0?r:null,props:a}}return rn.Fragment=n,rn.jsx=t,rn.jsxs=t,rn}var fr;function es(){return fr||(fr=1,kn.exports=Jo()),kn.exports}var Xt=es(),zn={exports:{}},De={};var ur;function ts(){if(ur)return De;ur=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),s=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),_=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l=Object.assign,c={};function b(C,K,F){this.props=C,this.context=K,this.refs=c,this.updater=F||T}b.prototype.isReactComponent={},b.prototype.setState=function(C,K){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,K,"setState")},b.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function A(){}A.prototype=b.prototype;function M(C,K,F){this.props=C,this.context=K,this.refs=c,this.updater=F||T}var U=M.prototype=new A;U.constructor=M,l(U,b.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function y(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function v(C,K,F){var H=F.ref;return{$$typeof:e,type:C,key:K,ref:H!==void 0?H:null,props:F}}function D(C,K){return v(C.type,K,C.props)}function w(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function G(C){var K={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(F){return K[F]})}var z=/\/+/g;function W(C,K){return typeof C=="object"&&C!==null&&C.key!=null?G(""+C.key):K.toString(36)}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(y,y):(C.status="pending",C.then(function(K){C.status==="pending"&&(C.status="fulfilled",C.value=K)},function(K){C.status==="pending"&&(C.status="rejected",C.reason=K)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function j(C,K,F,H,J){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var ae=!1;if(C===null)ae=!0;else switch(ce){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(C.$$typeof){case e:case n:ae=!0;break;case m:return ae=C._init,j(ae(C._payload),K,F,H,J)}}if(ae)return J=J(C),ae=H===""?"."+W(C,0):H,P(J)?(F="",ae!=null&&(F=ae.replace(z,"$&/")+"/"),j(J,K,F,"",function(R){return R})):J!=null&&(w(J)&&(J=D(J,F+(J.key==null||C&&C.key===J.key?"":(""+J.key).replace(z,"$&/")+"/")+ae)),K.push(J)),1;ae=0;var Ie=H===""?".":H+":";if(P(C))for(var We=0;We<C.length;We++)H=C[We],ce=Ie+W(H,We),ae+=j(H,K,F,ce,J);else if(We=x(C),typeof We=="function")for(C=We.call(C),We=0;!(H=C.next()).done;)H=H.value,ce=Ie+W(H,We++),ae+=j(H,K,F,ce,J);else if(ce==="object"){if(typeof C.then=="function")return j(Y(C),K,F,H,J);throw K=String(C),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ae}function X(C,K,F){if(C==null)return C;var H=[],J=0;return j(C,H,"","",function(ce){return K.call(F,ce,J++)}),H}function pe(C){if(C._status===-1){var K=C._result,F=K();F.then(function(H){(C._status===0||C._status===-1)&&(C._status=1,C._result=H,F.status===void 0&&(F.status="fulfilled",F.value=H))},function(H){(C._status===0||C._status===-1)&&(C._status=2,C._result=H,F.status===void 0&&(F.status="rejected",F.reason=H))}),C._status===-1&&(C._status=0,C._result=F)}if(C._status===1)return C._result.default;throw C._result}var me=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function we(C){var K=O.T,F={};F.types=K!==null?K.types:null,O.T=F;try{var H=C(),J=O.S;J!==null&&J(F,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(y,me)}catch(ce){me(ce)}finally{K!==null&&F.types!==null&&(K.types=F.types),O.T=K}}function He(C){var K=O.T;if(K!==null){var F=K.types;F===null?K.types=[C]:F.indexOf(C)===-1&&F.push(C)}else we(He.bind(null,C))}var Ye={map:X,forEach:function(C,K,F){X(C,function(){K.apply(this,arguments)},F)},count:function(C){var K=0;return X(C,function(){K++}),K},toArray:function(C){return X(C,function(K){return K})||[]},only:function(C){if(!w(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=p,De.Children=Ye,De.Component=b,De.Fragment=t,De.Profiler=r,De.PureComponent=M,De.StrictMode=i,De.Suspense=f,De.ViewTransition=g,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return O.H.useMemoCache(C)}},De.addTransitionType=He,De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,K,F){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var H=l({},C.props),J=C.key;if(K!=null)for(ce in K.key!==void 0&&(J=""+K.key),K)!E.call(K,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&K.ref===void 0||(H[ce]=K[ce]);var ce=arguments.length-2;if(ce===1)H.children=F;else if(1<ce){for(var ae=Array(ce),Ie=0;Ie<ce;Ie++)ae[Ie]=arguments[Ie+2];H.children=ae}return v(C.type,J,H)},De.createContext=function(C){return C={$$typeof:s,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:a,_context:C},C},De.createElement=function(C,K,F){var H,J={},ce=null;if(K!=null)for(H in K.key!==void 0&&(ce=""+K.key),K)E.call(K,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(J[H]=K[H]);var ae=arguments.length-2;if(ae===1)J.children=F;else if(1<ae){for(var Ie=Array(ae),We=0;We<ae;We++)Ie[We]=arguments[We+2];J.children=Ie}if(C&&C.defaultProps)for(H in ae=C.defaultProps,ae)J[H]===void 0&&(J[H]=ae[H]);return v(C,ce,J)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:o,render:C}},De.isValidElement=w,De.lazy=function(C){return{$$typeof:m,_payload:{_status:-1,_result:C},_init:pe}},De.memo=function(C,K){return{$$typeof:d,type:C,compare:K===void 0?null:K}},De.startTransition=we,De.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},De.use=function(C){return O.H.use(C)},De.useActionState=function(C,K,F){return O.H.useActionState(C,K,F)},De.useCallback=function(C,K){return O.H.useCallback(C,K)},De.useContext=function(C){return O.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,K){return O.H.useDeferredValue(C,K)},De.useEffect=function(C,K){return O.H.useEffect(C,K)},De.useEffectEvent=function(C){return O.H.useEffectEvent(C)},De.useId=function(){return O.H.useId()},De.useImperativeHandle=function(C,K,F){return O.H.useImperativeHandle(C,K,F)},De.useInsertionEffect=function(C,K){return O.H.useInsertionEffect(C,K)},De.useLayoutEffect=function(C,K){return O.H.useLayoutEffect(C,K)},De.useMemo=function(C,K){return O.H.useMemo(C,K)},De.useOptimistic=function(C,K){return O.H.useOptimistic(C,K)},De.useReducer=function(C,K,F){return O.H.useReducer(C,K,F)},De.useRef=function(C){return O.H.useRef(C)},De.useState=function(C){return O.H.useState(C)},De.useSyncExternalStore=function(C,K,F){return O.H.useSyncExternalStore(C,K,F)},De.useTransition=function(){return O.H.useTransition()},De.version="19.3.1",De}var dr;function ns(){return dr||(dr=1,zn.exports=ts()),zn.exports}var Yt=ns();function ua(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function is(e){const n=new WeakMap;function t(o,f){const d=o.array,m=o.usage,p=d.byteLength,g=e.createBuffer();e.bindBuffer(f,g),e.bufferData(f,d,m),o.onUploadCallback();let _;if(d instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=e.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=e.SHORT;else if(d instanceof Uint32Array)_=e.UNSIGNED_INT;else if(d instanceof Int32Array)_=e.INT;else if(d instanceof Int8Array)_=e.BYTE;else if(d instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,f,d){const m=f.array,p=f.updateRanges;if(e.bindBuffer(d,o),p.length===0)e.bufferSubData(d,0,m);else{p.sort((_,x)=>_.start-x.start);let g=0;for(let _=1;_<p.length;_++){const x=p[g],T=p[_];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++g,p[g]=T)}p.length=g+1;for(let _=0,x=p.length;_<x;_++){const T=p[_];e.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=n.get(o);f&&(e.deleteBuffer(f.buffer),n.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=n.get(o);(!m||m.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=n.get(o);if(d===void 0)n.set(o,t(o,f));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,o,f),d.version=o.version}}return{get:r,remove:a,update:s}}var rs=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,as=`#ifdef USE_ALPHAHASH
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
#endif`,os=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ss=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ls=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fs=`#ifdef USE_AOMAP
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
#endif`,us=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ds=`#ifdef USE_BATCHING
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
#endif`,ps=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ms=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_s=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gs=`#ifdef USE_IRIDESCENCE
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
#endif`,vs=`#ifdef USE_BUMPMAP
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
#endif`,Es=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ss=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ms=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ts=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,As=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bs=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cs=`#define PI 3.141592653589793
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
} // validated`,ws=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ps=`vec3 transformedNormal = objectNormal;
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
#endif`,ys=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ls=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Us=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ds=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Is="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ns=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fs=`#ifdef USE_ENVMAP
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
#endif`,Os=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bs=`#ifdef USE_ENVMAP
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
#endif`,Gs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hs=`#ifdef USE_ENVMAP
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
#endif`,Vs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ks=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ws=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xs=`#ifdef USE_GRADIENTMAP
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
}`,Ys=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ks=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$s=`uniform bool receiveShadow;
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
#endif`,Zs=`#ifdef USE_ENVMAP
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
#endif`,js=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Js=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ec=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tc=`PhysicalMaterial material;
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
#endif`,nc=`struct PhysicalMaterial {
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
}`,ic=`
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
#endif`,rc=`#if defined( RE_IndirectDiffuse )
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
#endif`,ac=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pc=`#if defined( USE_POINTS_UV )
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
#endif`,hc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_c=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ec=`#ifdef USE_MORPHTARGETS
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
#endif`,Sc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ac=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bc=`#ifdef USE_NORMALMAP
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
#endif`,Cc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ic=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kc=`float getShadowMask() {
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
}`,zc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wc=`#ifdef USE_SKINNING
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
#endif`,Xc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yc=`#ifdef USE_SKINNING
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
#endif`,qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$c=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jc=`#ifdef USE_TRANSMISSION
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
#endif`,Qc=`#ifdef USE_TRANSMISSION
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
#endif`,Jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,el=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const il=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rl=`uniform sampler2D t2D;
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
}`,al=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ol=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ll=`#include <common>
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
}`,fl=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ul=`#define DISTANCE
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
}`,dl=`#define DISTANCE
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
}`,pl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ml=`uniform float scale;
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
}`,_l=`uniform vec3 diffuse;
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
}`,gl=`#include <common>
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
}`,vl=`uniform vec3 diffuse;
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
}`,El=`#define LAMBERT
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
}`,Sl=`#define LAMBERT
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
}`,Ml=`#define MATCAP
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
}`,xl=`#define MATCAP
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
}`,Tl=`#define NORMAL
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
}`,Al=`#define NORMAL
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
}`,Rl=`#define PHONG
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
}`,bl=`#define PHONG
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
}`,Cl=`#define STANDARD
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
}`,wl=`#define STANDARD
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
}`,Pl=`#define TOON
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
}`,yl=`#define TOON
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
}`,Ll=`uniform float size;
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
}`,Ul=`uniform vec3 diffuse;
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
}`,Dl=`#include <common>
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
}`,Il=`uniform vec3 color;
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
}`,Nl=`uniform float rotation;
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
}`,Fl=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:rs,alphahash_pars_fragment:as,alphamap_fragment:os,alphamap_pars_fragment:ss,alphatest_fragment:cs,alphatest_pars_fragment:ls,aomap_fragment:fs,aomap_pars_fragment:us,batching_pars_vertex:ds,batching_vertex:ps,begin_vertex:hs,beginnormal_vertex:ms,bsdfs:_s,iridescence_fragment:gs,bumpmap_pars_fragment:vs,clipping_planes_fragment:Es,clipping_planes_pars_fragment:Ss,clipping_planes_pars_vertex:Ms,clipping_planes_vertex:xs,color_fragment:Ts,color_pars_fragment:As,color_pars_vertex:Rs,color_vertex:bs,common:Cs,cube_uv_reflection_fragment:ws,defaultnormal_vertex:Ps,displacementmap_pars_vertex:ys,displacementmap_vertex:Ls,emissivemap_fragment:Us,emissivemap_pars_fragment:Ds,colorspace_fragment:Is,colorspace_pars_fragment:Ns,envmap_fragment:Fs,envmap_common_pars_fragment:Os,envmap_pars_fragment:Bs,envmap_pars_vertex:Gs,envmap_physical_pars_fragment:Zs,envmap_vertex:Hs,fog_vertex:Vs,fog_pars_vertex:ks,fog_fragment:zs,fog_pars_fragment:Ws,gradientmap_pars_fragment:Xs,lightmap_pars_fragment:Ys,lights_lambert_fragment:qs,lights_lambert_pars_fragment:Ks,lights_pars_begin:$s,lights_toon_fragment:js,lights_toon_pars_fragment:Qs,lights_phong_fragment:Js,lights_phong_pars_fragment:ec,lights_physical_fragment:tc,lights_physical_pars_fragment:nc,lights_fragment_begin:ic,lights_fragment_maps:rc,lights_fragment_end:ac,logdepthbuf_fragment:oc,logdepthbuf_pars_fragment:sc,logdepthbuf_pars_vertex:cc,logdepthbuf_vertex:lc,map_fragment:fc,map_pars_fragment:uc,map_particle_fragment:dc,map_particle_pars_fragment:pc,metalnessmap_fragment:hc,metalnessmap_pars_fragment:mc,morphinstance_vertex:_c,morphcolor_vertex:gc,morphnormal_vertex:vc,morphtarget_pars_vertex:Ec,morphtarget_vertex:Sc,normal_fragment_begin:Mc,normal_fragment_maps:xc,normal_pars_fragment:Tc,normal_pars_vertex:Ac,normal_vertex:Rc,normalmap_pars_fragment:bc,clearcoat_normal_fragment_begin:Cc,clearcoat_normal_fragment_maps:wc,clearcoat_pars_fragment:Pc,iridescence_pars_fragment:yc,opaque_fragment:Lc,packing:Uc,premultiplied_alpha_fragment:Dc,project_vertex:Ic,dithering_fragment:Nc,dithering_pars_fragment:Fc,roughnessmap_fragment:Oc,roughnessmap_pars_fragment:Bc,shadowmap_pars_fragment:Gc,shadowmap_pars_vertex:Hc,shadowmap_vertex:Vc,shadowmask_pars_fragment:kc,skinbase_vertex:zc,skinning_pars_vertex:Wc,skinning_vertex:Xc,skinnormal_vertex:Yc,specularmap_fragment:qc,specularmap_pars_fragment:Kc,tonemapping_fragment:$c,tonemapping_pars_fragment:Zc,transmission_fragment:jc,transmission_pars_fragment:Qc,uv_pars_fragment:Jc,uv_pars_vertex:el,uv_vertex:tl,worldpos_vertex:nl,background_vert:il,background_frag:rl,backgroundCube_vert:al,backgroundCube_frag:ol,cube_vert:sl,cube_frag:cl,depth_vert:ll,depth_frag:fl,distanceRGBA_vert:ul,distanceRGBA_frag:dl,equirect_vert:pl,equirect_frag:hl,linedashed_vert:ml,linedashed_frag:_l,meshbasic_vert:gl,meshbasic_frag:vl,meshlambert_vert:El,meshlambert_frag:Sl,meshmatcap_vert:Ml,meshmatcap_frag:xl,meshnormal_vert:Tl,meshnormal_frag:Al,meshphong_vert:Rl,meshphong_frag:bl,meshphysical_vert:Cl,meshphysical_frag:wl,meshtoon_vert:Pl,meshtoon_frag:yl,points_vert:Ll,points_frag:Ul,shadow_vert:Dl,shadow_frag:Il,sprite_vert:Nl,sprite_frag:Fl},se={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},bt={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};bt.physical={uniforms:ht([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const gn={r:0,b:0,g:0},It=new na,Ol=new ln;function Bl(e,n,t,i,r,a,s){const o=new ye(0);let f=a===!0?0:1,d,m,p=null,g=0,_=null;function x(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:n).get(M)),M}function T(A){let M=!1;const U=x(A);U===null?c(o,f):U&&U.isColor&&(c(U,1),M=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(A,M){const U=x(M);U&&(U.isCubeTexture||U.mapping===Un)?(m===void 0&&(m=new st(new Ln(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ir(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,y,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),It.copy(M.backgroundRotation),It.x*=-1,It.y*=-1,It.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Ol.makeRotationFromEuler(It)),m.material.toneMapped=ot.getTransfer(U.colorSpace)!==je,(p!==U||g!==U.version||_!==e.toneMapping)&&(m.material.needsUpdate=!0,p=U,g=U.version,_=e.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new st(new $r(2,2),new zt({name:"BackgroundMaterial",uniforms:ir(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.toneMapped=ot.getTransfer(U.colorSpace)!==je,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||g!==U.version||_!==e.toneMapping)&&(d.material.needsUpdate=!0,p=U,g=U.version,_=e.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function c(A,M){A.getRGB(gn,ta(e)),i.buffers.color.setClear(gn.r,gn.g,gn.b,M,s)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,M=1){o.set(A),f=M,c(o,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,c(o,f)},render:T,addToRenderList:l,dispose:b}}function Gl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(v,D,w,G,z){let W=!1;const Y=p(G,w,D);a!==Y&&(a=Y,d(a.object)),W=_(v,G,w,z),W&&x(v,G,w,z),z!==null&&n.update(z,e.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,M(v,D,w,G),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function f(){return e.createVertexArray()}function d(v){return e.bindVertexArray(v)}function m(v){return e.deleteVertexArray(v)}function p(v,D,w){const G=w.wireframe===!0;let z=i[v.id];z===void 0&&(z={},i[v.id]=z);let W=z[D.id];W===void 0&&(W={},z[D.id]=W);let Y=W[G];return Y===void 0&&(Y=g(f()),W[G]=Y),Y}function g(v){const D=[],w=[],G=[];for(let z=0;z<t;z++)D[z]=0,w[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:w,attributeDivisors:G,object:v,attributes:{},index:null}}function _(v,D,w,G){const z=a.attributes,W=D.attributes;let Y=0;const j=w.getAttributes();for(const X in j)if(j[X].location>=0){const me=z[X];let we=W[X];if(we===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;Y++}return a.attributesNum!==Y||a.index!==G}function x(v,D,w,G){const z={},W=D.attributes;let Y=0;const j=w.getAttributes();for(const X in j)if(j[X].location>=0){let me=W[X];me===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));const we={};we.attribute=me,me&&me.data&&(we.data=me.data),z[X]=we,Y++}a.attributes=z,a.attributesNum=Y,a.index=G}function T(){const v=a.newAttributes;for(let D=0,w=v.length;D<w;D++)v[D]=0}function l(v){c(v,0)}function c(v,D){const w=a.newAttributes,G=a.enabledAttributes,z=a.attributeDivisors;w[v]=1,G[v]===0&&(e.enableVertexAttribArray(v),G[v]=1),z[v]!==D&&(e.vertexAttribDivisor(v,D),z[v]=D)}function b(){const v=a.newAttributes,D=a.enabledAttributes;for(let w=0,G=D.length;w<G;w++)D[w]!==v[w]&&(e.disableVertexAttribArray(w),D[w]=0)}function A(v,D,w,G,z,W,Y){Y===!0?e.vertexAttribIPointer(v,D,w,z,W):e.vertexAttribPointer(v,D,w,G,z,W)}function M(v,D,w,G){T();const z=G.attributes,W=w.getAttributes(),Y=D.defaultAttributeValues;for(const j in W){const X=W[j];if(X.location>=0){let pe=z[j];if(pe===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),pe!==void 0){const me=pe.normalized,we=pe.itemSize,He=n.get(pe);if(He===void 0)continue;const Ye=He.buffer,C=He.type,K=He.bytesPerElement,F=C===e.INT||C===e.UNSIGNED_INT||pe.gpuType===Zr;if(pe.isInterleavedBufferAttribute){const H=pe.data,J=H.stride,ce=pe.offset;if(H.isInstancedInterleavedBuffer){for(let ae=0;ae<X.locationSize;ae++)c(X.location+ae,H.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ae=0;ae<X.locationSize;ae++)l(X.location+ae);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let ae=0;ae<X.locationSize;ae++)A(X.location+ae,we/X.locationSize,C,me,J*K,(ce+we/X.locationSize*ae)*K,F)}else{if(pe.isInstancedBufferAttribute){for(let H=0;H<X.locationSize;H++)c(X.location+H,pe.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<X.locationSize;H++)l(X.location+H);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let H=0;H<X.locationSize;H++)A(X.location+H,we/X.locationSize,C,me,we*K,we/X.locationSize*H*K,F)}}else if(Y!==void 0){const me=Y[j];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(X.location,me);break;case 3:e.vertexAttrib3fv(X.location,me);break;case 4:e.vertexAttrib4fv(X.location,me);break;default:e.vertexAttrib1fv(X.location,me)}}}}b()}function U(){O();for(const v in i){const D=i[v];for(const w in D){const G=D[w];for(const z in G)m(G[z].object),delete G[z];delete D[w]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const D=i[v.id];for(const w in D){const G=D[w];for(const z in G)m(G[z].object),delete G[z];delete D[w]}delete i[v.id]}function y(v){for(const D in i){const w=i[D];if(w[v.id]===void 0)continue;const G=w[v.id];for(const z in G)m(G[z].object),delete G[z];delete w[v.id]}}function O(){E(),s=!0,a!==r&&(a=r,d(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:y,initAttributes:T,enableAttribute:l,disableUnusedAttributes:b}}function Hl(e,n,t){let i;function r(d){i=d}function a(d,m){e.drawArrays(i,d,m),t.update(m,i,1)}function s(d,m,p){p!==0&&(e.drawArraysInstanced(i,d,m,p),t.update(m,i,p))}function o(d,m,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,p);let _=0;for(let x=0;x<p;x++)_+=m[x];t.update(_,i,1)}function f(d,m,p,g){if(p===0)return;const _=n.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d.length;x++)s(d[x],m[x],g[x]);else{_.multiDrawArraysInstancedWEBGL(i,d,0,m,0,g,0,p);let x=0;for(let T=0;T<p;T++)x+=m[T]*g[T];t.update(x,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=f}function Vl(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(y){return!(y!==yt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const O=y===Pn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==kt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Gt&&!O)}function f(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:l,maxAttributes:c,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function kl(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new Wr,o=new ze,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const _=p.length!==0||g||i!==0||r;return r=g,i=p.length,_},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,_){const x=p.clippingPlanes,T=p.clipIntersection,l=p.clipShadows,c=e.get(p);if(!r||x===null||x.length===0||a&&!l)a?m(null):d();else{const b=a?0:i,A=b*4;let M=c.clippingState||null;f.value=M,M=m(x,g,A,_);for(let U=0;U!==A;++U)M[U]=t[U];c.clippingState=M,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function m(p,g,_,x){const T=p!==null?p.length:0;let l=null;if(T!==0){if(l=f.value,x!==!0||l===null){const c=_+T*4,b=g.matrixWorldInverse;o.getNormalMatrix(b),(l===null||l.length<c)&&(l=new Float32Array(c));for(let A=0,M=_;A!==T;++A,M+=4)s.copy(p[A]).applyMatrix4(b,o),s.normal.toArray(l,M),l[M+3]=s.constant}f.value=l,f.needsUpdate=!0}return n.numPlanes=T,n.numIntersection=0,l}}function zl(e){let n=new WeakMap;function t(s,o){return o===ri?s.mapping=pn:o===ai&&(s.mapping=Jt),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ri||o===ai)if(n.has(s)){const f=n.get(s).texture;return t(f,s.mapping)}else{const f=s.image;if(f&&f.height>0){const d=new Eo(f.height);return d.fromEquirectangularTexture(e,s),n.set(s,d),s.addEventListener("dispose",r),t(d.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const f=n.get(o);f!==void 0&&(n.delete(o),f.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Zt=4,pr=[.125,.215,.35,.446,.526,.582],Ot=20,Wn=new Vr,hr=new ye;let Xn=null,Yn=0,qn=0,Kn=!1;const Ft=(1+Math.sqrt(5))/2,qt=1/Ft,mr=[new be(-Ft,qt,0),new be(Ft,qt,0),new be(-qt,0,Ft),new be(qt,0,Ft),new be(0,Ft,-qt),new be(0,Ft,qt),new be(-1,1,-1),new be(1,1,-1),new be(-1,1,1),new be(1,1,1)],Wl=new be;class ci{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=Wl}=a;Xn=this._renderer.getRenderTarget(),Yn=this._renderer.getActiveCubeFace(),qn=this._renderer.getActiveMipmapLevel(),Kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(n,i,r,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Xn,Yn,qn),this._renderer.xr.enabled=Kn,n.scissorTest=!1,vn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===pn||n.mapping===Jt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Xn=this._renderer.getRenderTarget(),Yn=this._renderer.getActiveCubeFace(),qn=this._renderer.getActiveMipmapLevel(),Kn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Pn,format:yt,colorSpace:yn,depthBuffer:!1},r=_r(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_r(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xl(a)),this._blurMaterial=Yl(a,n,t)}return r}_compileMaterial(n){const t=new st(this._lodPlanes[0],n);this._renderer.compile(t,Wn)}_sceneToCubeUV(n,t,i,r,a){const f=new xn(90,1,t,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(hr),p.toneMapping=Lt,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new ya({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),l=new st(new Ln,T);let c=!1;const b=n.background;b?b.isColor&&(T.color.copy(b),n.background=null,c=!0):(T.color.copy(hr),c=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(f.up.set(0,d[A],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+m[A],a.y,a.z)):M===1?(f.up.set(0,0,d[A]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+m[A],a.z)):(f.up.set(0,d[A],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+m[A]));const U=this._cubeSize;vn(r,M*U,A>2?U:0,U,U),p.setRenderTarget(r),c&&p.render(l,f),p.render(n,f)}l.geometry.dispose(),l.material.dispose(),p.toneMapping=_,p.autoClear=g,n.background=b}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===pn||n.mapping===Jt;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gr());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new st(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const f=this._cubeSize;vn(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,Wn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=mr[(r-a-1)%mr.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const f=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new st(this._lodPlanes[r],d),g=d.uniforms,_=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ot-1),T=a/x,l=isFinite(a)?1+Math.floor(m*T):Ot;l>Ot&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ot}`);const c=[];let b=0;for(let y=0;y<Ot;++y){const O=y/T,E=Math.exp(-O*O/2);c.push(E),y===0?b+=E:y<l&&(b+=2*E)}for(let y=0;y<c.length;y++)c[y]=c[y]/b;g.envMap.value=n.texture,g.samples.value=l,g.weights.value=c,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:A}=this;g.dTheta.value=x,g.mipInt.value=A-i;const M=this._sizeLods[r],U=3*M*(r>A-Zt?r-A+Zt:0),P=4*(this._cubeSize-M);vn(t,U,P,3*M,2*M),f.setRenderTarget(t),f.render(p,Wn)}}function Xl(e){const n=[],t=[],i=[];let r=e;const a=e-Zt+1+pr.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let f=1/o;s>e-Zt?f=pr[s-e+Zt-1]:s===0&&(f=0),i.push(f);const d=1/(o-2),m=-d,p=1+d,g=[m,m,p,m,p,p,m,m,p,p,m,p],_=6,x=6,T=3,l=2,c=1,b=new Float32Array(T*x*_),A=new Float32Array(l*x*_),M=new Float32Array(c*x*_);for(let P=0;P<_;P++){const y=P%3*2/3-1,O=P>2?0:-1,E=[y,O,0,y+2/3,O,0,y+2/3,O+1,0,y,O,0,y+2/3,O+1,0,y,O+1,0];b.set(E,T*x*P),A.set(g,l*x*P);const v=[P,P,P,P,P,P];M.set(v,c*x*P)}const U=new pi;U.setAttribute("position",new cn(b,T)),U.setAttribute("uv",new cn(A,l)),U.setAttribute("faceIndex",new cn(M,c)),n.push(U),r>Zt&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function _r(e,n,t){const i=new Qt(e,n,t);return i.texture.mapping=Un,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function Yl(e,n,t){const i=new Float32Array(Ot),r=new be(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Ot,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hi(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function gr(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hi(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function vr(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function hi(){return`

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
	`}function ql(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const f=o.mapping,d=f===ri||f===ai,m=f===pn||f===Jt;if(d||m){let p=n.get(o);const g=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new ci(e)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),p.texture;if(p!==void 0)return p.texture;{const _=o.image;return d&&_&&_.height>0||m&&_&&r(_)?(t===null&&(t=new ci(e)),p=d?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let f=0;const d=6;for(let m=0;m<d;m++)o[m]!==void 0&&f++;return f===d}function a(o){const f=o.target;f.removeEventListener("dispose",a);const d=n.get(f);d!==void 0&&(n.delete(f),d.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Kl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $l(e,n,t,i){const r={},a=new WeakMap;function s(p){const g=p.target;g.index!==null&&n.remove(g.index);for(const x in g.attributes)n.remove(g.attributes[x]);g.removeEventListener("dispose",s),delete r[g.id];const _=a.get(g);_&&(n.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(p,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function f(p){const g=p.attributes;for(const _ in g)n.update(g[_],e.ARRAY_BUFFER)}function d(p){const g=[],_=p.index,x=p.attributes.position;let T=0;if(_!==null){const b=_.array;T=_.version;for(let A=0,M=b.length;A<M;A+=3){const U=b[A+0],P=b[A+1],y=b[A+2];g.push(U,P,P,y,y,U)}}else if(x!==void 0){const b=x.array;T=x.version;for(let A=0,M=b.length/3-1;A<M;A+=3){const U=A+0,P=A+1,y=A+2;g.push(U,P,P,y,y,U)}}else return;const l=new(Ro(g)?To:Ao)(g,1);l.version=T;const c=a.get(p);c&&n.remove(c),a.set(p,l)}function m(p){const g=a.get(p);if(g){const _=p.index;_!==null&&g.version<_.version&&d(p)}else d(p);return a.get(p)}return{get:o,update:f,getWireframeAttribute:m}}function Zl(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function f(g,_){e.drawElements(i,_,a,g*s),t.update(_,i,1)}function d(g,_,x){x!==0&&(e.drawElementsInstanced(i,_,a,g*s,x),t.update(_,i,x))}function m(g,_,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,g,0,x);let l=0;for(let c=0;c<x;c++)l+=_[c];t.update(l,i,1)}function p(g,_,x,T){if(x===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let c=0;c<g.length;c++)d(g[c]/s,_[c],T[c]);else{l.multiDrawElementsInstancedWEBGL(i,_,0,a,g,0,T,0,x);let c=0;for(let b=0;b<x;b++)c+=_[b]*T[b];t.update(c,i,1)}}this.setMode=r,this.setIndex=o,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function jl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ql(e,n,t){const i=new WeakMap,r=new mt;function a(s,o,f){const d=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=m!==void 0?m.length:0;let g=i.get(o);if(g===void 0||g.count!==p){let E=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",E)};g!==void 0&&g.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),T===!0&&(A=3);let M=o.attributes.position.count*A,U=1;M>n.maxTextureSize&&(U=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const P=new Float32Array(M*U*4*p),y=new ea(P,M,U,p);y.type=Gt,y.needsUpdate=!0;const O=A*4;for(let v=0;v<p;v++){const D=l[v],w=c[v],G=b[v],z=M*U*4*v;for(let W=0;W<D.count;W++){const Y=W*O;_===!0&&(r.fromBufferAttribute(D,W),P[z+Y+0]=r.x,P[z+Y+1]=r.y,P[z+Y+2]=r.z,P[z+Y+3]=0),x===!0&&(r.fromBufferAttribute(w,W),P[z+Y+4]=r.x,P[z+Y+5]=r.y,P[z+Y+6]=r.z,P[z+Y+7]=0),T===!0&&(r.fromBufferAttribute(G,W),P[z+Y+8]=r.x,P[z+Y+9]=r.y,P[z+Y+10]=r.z,P[z+Y+11]=G.itemSize===4?r.w:1)}}g={count:p,texture:y,size:new ut(M,U)},i.set(o,g),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let _=0;for(let T=0;T<d.length;T++)_+=d[T];const x=o.morphTargetsRelative?1:1-_;f.getUniforms().setValue(e,"morphTargetBaseInfluence",x),f.getUniforms().setValue(e,"morphTargetInfluences",d)}f.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Jl(e,n,t,i){let r=new WeakMap;function a(f){const d=i.render.frame,m=f.geometry,p=n.get(f,m);if(r.get(p)!==d&&(n.update(p),r.set(p,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",o)===!1&&f.addEventListener("dispose",o),r.get(f)!==d&&(t.update(f.instanceMatrix,e.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,e.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return p}function s(){r=new WeakMap}function o(f){const d=f.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:s}}const da=new oa,Er=new Hr(1,1),pa=new ea,ha=new Io,ma=new Do,Sr=[],Mr=[],xr=new Float32Array(16),Tr=new Float32Array(9),Ar=new Float32Array(4);function en(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Sr[r];if(a===void 0&&(a=new Float32Array(r),Sr[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function ct(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function lt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Dn(e,n){let t=Mr[n];t===void 0&&(t=new Int32Array(n),Mr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function ef(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function tf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2fv(this.addr,n),lt(t,n)}}function nf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ct(t,n))return;e.uniform3fv(this.addr,n),lt(t,n)}}function rf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4fv(this.addr,n),lt(t,n)}}function af(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;Ar.set(i),e.uniformMatrix2fv(this.addr,!1,Ar),lt(t,i)}}function of(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;Tr.set(i),e.uniformMatrix3fv(this.addr,!1,Tr),lt(t,i)}}function sf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;xr.set(i),e.uniformMatrix4fv(this.addr,!1,xr),lt(t,i)}}function cf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function lf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2iv(this.addr,n),lt(t,n)}}function ff(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3iv(this.addr,n),lt(t,n)}}function uf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4iv(this.addr,n),lt(t,n)}}function df(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function pf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2uiv(this.addr,n),lt(t,n)}}function hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3uiv(this.addr,n),lt(t,n)}}function mf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4uiv(this.addr,n),lt(t,n)}}function _f(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Er.compareFunction=zr,a=Er):a=da,t.setTexture2D(n||a,r)}function gf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||ha,r)}function vf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||ma,r)}function Ef(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||pa,r)}function Sf(e){switch(e){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return rf;case 35674:return af;case 35675:return of;case 35676:return sf;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return ff;case 35669:case 35673:return uf;case 5125:return df;case 36294:return pf;case 36295:return hf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return Ef}}function Mf(e,n){e.uniform1fv(this.addr,n)}function xf(e,n){const t=en(n,this.size,2);e.uniform2fv(this.addr,t)}function Tf(e,n){const t=en(n,this.size,3);e.uniform3fv(this.addr,t)}function Af(e,n){const t=en(n,this.size,4);e.uniform4fv(this.addr,t)}function Rf(e,n){const t=en(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function bf(e,n){const t=en(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Cf(e,n){const t=en(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function wf(e,n){e.uniform1iv(this.addr,n)}function Pf(e,n){e.uniform2iv(this.addr,n)}function yf(e,n){e.uniform3iv(this.addr,n)}function Lf(e,n){e.uniform4iv(this.addr,n)}function Uf(e,n){e.uniform1uiv(this.addr,n)}function Df(e,n){e.uniform2uiv(this.addr,n)}function If(e,n){e.uniform3uiv(this.addr,n)}function Nf(e,n){e.uniform4uiv(this.addr,n)}function Ff(e,n,t){const i=this.cache,r=n.length,a=Dn(t,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||da,a[s])}function Of(e,n,t){const i=this.cache,r=n.length,a=Dn(t,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||ha,a[s])}function Bf(e,n,t){const i=this.cache,r=n.length,a=Dn(t,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||ma,a[s])}function Gf(e,n,t){const i=this.cache,r=n.length,a=Dn(t,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||pa,a[s])}function Hf(e){switch(e){case 5126:return Mf;case 35664:return xf;case 35665:return Tf;case 35666:return Af;case 35674:return Rf;case 35675:return bf;case 35676:return Cf;case 5124:case 35670:return wf;case 35667:case 35671:return Pf;case 35668:case 35672:return yf;case 35669:case 35673:return Lf;case 5125:return Uf;case 36294:return Df;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Gf}}class Vf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sf(t.type)}}class kf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hf(t.type)}}class zf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const $n=/(\w+)(\])?(\[|\.)?/g;function Rr(e,n){e.seq.push(n),e.map[n.id]=n}function Wf(e,n,t){const i=e.name,r=i.length;for($n.lastIndex=0;;){const a=$n.exec(i),s=$n.lastIndex;let o=a[1];const f=a[2]==="]",d=a[3];if(f&&(o=o|0),d===void 0||d==="["&&s+2===r){Rr(t,d===void 0?new Vf(o,e,n):new kf(o,e,n));break}else{let p=t.map[o];p===void 0&&(p=new zf(o),Rr(t,p)),t=p}}}class An{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);Wf(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],f=i[o.id];f.needsUpdate!==!1&&o.setValue(n,f.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function br(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Xf=37297;let Yf=0;function qf(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Cr=new ze;function Kf(e){ot._getMatrix(Cr,ot.workingColorSpace,e);const n=`mat3( ${Cr.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(e)){case ia:return[n,"LinearTransferOETF"];case je:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function wr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+qf(e.getShaderSource(n),o)}else return a}function $f(e,n){const t=Kf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zf(e,n){let t;switch(n){case Uo:t="Linear";break;case Lo:t="Reinhard";break;case yo:t="Cineon";break;case aa:t="ACESFilmic";break;case Po:t="AgX";break;case wo:t="Neutral";break;case Co:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const En=new be;function jf(){ot.getLuminanceCoefficients(En);const e=En.x.toFixed(4),n=En.y.toFixed(4),t=En.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(on).join(`
`)}function Jf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function eu(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function on(e){return e!==""}function Pr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function yr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const tu=/^[ \t]*#include +<([\w\d./]+)>/gm;function li(e){return e.replace(tu,iu)}const nu=new Map;function iu(e,n){let t=Ge[n];if(t===void 0){const i=nu.get(n);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return li(t)}const ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lr(e){return e.replace(ru,au)}function au(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ur(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function ou(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Xr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ra?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Pt&&(n="SHADOWMAP_TYPE_VSM"),n}function su(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case pn:case Jt:n="ENVMAP_TYPE_CUBE";break;case Un:n="ENVMAP_TYPE_CUBE_UV";break}return n}function cu(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Jt&&(n="ENVMAP_MODE_REFRACTION"),n}function lu(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Bo:n="ENVMAP_BLENDING_MULTIPLY";break;case Oo:n="ENVMAP_BLENDING_MIX";break;case Fo:n="ENVMAP_BLENDING_ADD";break}return n}function fu(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uu(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=ou(t),d=su(t),m=cu(t),p=lu(t),g=fu(t),_=Qf(t),x=Jf(a),T=r.createProgram();let l,c,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(on).join(`
`),l.length>0&&(l+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(on).join(`
`),c.length>0&&(c+=`
`)):(l=[Ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),c=[Ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lt?"#define TONE_MAPPING":"",t.toneMapping!==Lt?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Lt?Zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,$f("linearToOutputTexel",t.outputColorSpace),jf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(on).join(`
`)),s=li(s),s=Pr(s,t),s=yr(s,t),o=li(o),o=Pr(o,t),o=yr(o,t),s=Lr(s),o=Lr(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,l=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,c=["#define varying in",t.glslVersion===ar?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ar?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const A=b+l+s,M=b+c+o,U=br(r,r.VERTEX_SHADER,A),P=br(r,r.FRAGMENT_SHADER,M);r.attachShader(T,U),r.attachShader(T,P),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function y(D){if(e.debug.checkShaderErrors){const w=r.getProgramInfoLog(T)||"",G=r.getShaderInfoLog(U)||"",z=r.getShaderInfoLog(P)||"",W=w.trim(),Y=G.trim(),j=z.trim();let X=!0,pe=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(X=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,T,U,P);else{const me=wr(r,U,"vertex"),we=wr(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+me+`
`+we)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||j==="")&&(pe=!1);pe&&(D.diagnostics={runnable:X,programLog:W,vertexShader:{log:Y,prefix:l},fragmentShader:{log:j,prefix:c}})}r.deleteShader(U),r.deleteShader(P),O=new An(r,T),E=eu(r,T)}let O;this.getUniforms=function(){return O===void 0&&y(this),O};let E;this.getAttributes=function(){return E===void 0&&y(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(T,Xf)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yf++,this.cacheKey=n,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=P,this}let du=0;class pu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new hu(n),t.set(n,i)),i}}class hu{constructor(n){this.id=du++,this.code=n,this.usedTimes=0}}function mu(e,n,t,i,r,a,s){const o=new bo,f=new pu,d=new Set,m=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return d.add(E),E===0?"uv":`uv${E}`}function l(E,v,D,w,G){const z=w.fog,W=G.geometry,Y=E.isMeshStandardMaterial?w.environment:null,j=(E.isMeshStandardMaterial?t:n).get(E.envMap||Y),X=j&&j.mapping===Un?j.image.height:null,pe=x[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=me!==void 0?me.length:0;let He=0;W.morphAttributes.position!==void 0&&(He=1),W.morphAttributes.normal!==void 0&&(He=2),W.morphAttributes.color!==void 0&&(He=3);let Ye,C,K,F;if(pe){const Xe=bt[pe];Ye=Xe.vertexShader,C=Xe.fragmentShader}else Ye=E.vertexShader,C=E.fragmentShader,f.update(E),K=f.getVertexShaderID(E),F=f.getFragmentShaderID(E);const H=e.getRenderTarget(),J=e.state.buffers.depth.getReversed(),ce=G.isInstancedMesh===!0,ae=G.isBatchedMesh===!0,Ie=!!E.map,We=!!E.matcap,R=!!j,Qe=!!E.aoMap,Fe=!!E.lightMap,Le=!!E.bumpMap,ve=!!E.normalMap,Je=!!E.displacementMap,Ee=!!E.emissiveMap,Be=!!E.metalnessMap,ft=!!E.roughnessMap,at=E.anisotropy>0,S=E.clearcoat>0,u=E.dispersion>0,B=E.iridescence>0,$=E.sheen>0,Q=E.transmission>0,q=at&&!!E.anisotropyMap,Te=S&&!!E.clearcoatMap,re=S&&!!E.clearcoatNormalMap,Se=S&&!!E.clearcoatRoughnessMap,Me=B&&!!E.iridescenceMap,ne=B&&!!E.iridescenceThicknessMap,ue=$&&!!E.sheenColorMap,Pe=$&&!!E.sheenRoughnessMap,xe=!!E.specularMap,le=!!E.specularColorMap,Oe=!!E.specularIntensityMap,L=Q&&!!E.transmissionMap,ie=Q&&!!E.thicknessMap,oe=!!E.gradientMap,he=!!E.alphaMap,ee=E.alphaTest>0,Z=!!E.alphaHash,ge=!!E.extensions;let Ne=Lt;E.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ne=e.toneMapping);const $e={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:C,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:F,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:ae,batchingColor:ae&&G._colorsTexture!==null,instancing:ce,instancingColor:ce&&G.instanceColor!==null,instancingMorph:ce&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:H===null?e.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yn,alphaToCoverage:!!E.alphaToCoverage,map:Ie,matcap:We,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:Fe,bumpMap:Le,normalMap:ve,displacementMap:g&&Je,emissiveMap:Ee,normalMapObjectSpace:ve&&E.normalMapType===xo,normalMapTangentSpace:ve&&E.normalMapType===Mo,metalnessMap:Be,roughnessMap:ft,anisotropy:at,anisotropyMap:q,clearcoat:S,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:u,iridescence:B,iridescenceMap:Me,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:le,specularIntensityMap:Oe,transmission:Q,transmissionMap:L,thicknessMap:ie,gradientMap:oe,opaque:E.transparent===!1&&E.blending===Tn&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:ee,alphaHash:Z,combine:E.combine,mapUv:Ie&&T(E.map.channel),aoMapUv:Qe&&T(E.aoMap.channel),lightMapUv:Fe&&T(E.lightMap.channel),bumpMapUv:Le&&T(E.bumpMap.channel),normalMapUv:ve&&T(E.normalMap.channel),displacementMapUv:Je&&T(E.displacementMap.channel),emissiveMapUv:Ee&&T(E.emissiveMap.channel),metalnessMapUv:Be&&T(E.metalnessMap.channel),roughnessMapUv:ft&&T(E.roughnessMap.channel),anisotropyMapUv:q&&T(E.anisotropyMap.channel),clearcoatMapUv:Te&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(E.sheenRoughnessMap.channel),specularMapUv:xe&&T(E.specularMap.channel),specularColorMapUv:le&&T(E.specularColorMap.channel),specularIntensityMapUv:Oe&&T(E.specularIntensityMap.channel),transmissionMapUv:L&&T(E.transmissionMap.channel),thicknessMapUv:ie&&T(E.thicknessMap.channel),alphaMapUv:he&&T(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ve||at),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Ie||he),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:He,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===je,decodeVideoTextureEmissive:Ee&&E.emissiveMap.isVideoTexture===!0&&ot.getTransfer(E.emissiveMap.colorSpace)===je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xt,flipSided:E.side===Et,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function c(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)v.push(D),v.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(b(v,E),A(v,E),v.push(e.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function b(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function A(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const v=x[E.type];let D;if(v){const w=bt[v];D=So.clone(w.uniforms)}else D=E.uniforms;return D}function U(E,v){let D;for(let w=0,G=m.length;w<G;w++){const z=m[w];if(z.cacheKey===v){D=z,++D.usedTimes;break}}return D===void 0&&(D=new uu(e,v,E,a),m.push(D)),D}function P(E){if(--E.usedTimes===0){const v=m.indexOf(E);m[v]=m[m.length-1],m.pop(),E.destroy()}}function y(E){f.remove(E)}function O(){f.dispose()}return{getParameters:l,getProgramCacheKey:c,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:y,programs:m,dispose:O}}function _u(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,f){e.get(s)[o]=f}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function gu(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Dr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ir(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(p,g,_,x,T,l){let c=e[n];return c===void 0?(c={id:p.id,object:p,geometry:g,material:_,groupOrder:x,renderOrder:p.renderOrder,z:T,group:l},e[n]=c):(c.id=p.id,c.object=p,c.geometry=g,c.material=_,c.groupOrder=x,c.renderOrder=p.renderOrder,c.z=T,c.group=l),n++,c}function o(p,g,_,x,T,l){const c=s(p,g,_,x,T,l);_.transmission>0?i.push(c):_.transparent===!0?r.push(c):t.push(c)}function f(p,g,_,x,T,l){const c=s(p,g,_,x,T,l);_.transmission>0?i.unshift(c):_.transparent===!0?r.unshift(c):t.unshift(c)}function d(p,g){t.length>1&&t.sort(p||gu),i.length>1&&i.sort(g||Dr),r.length>1&&r.sort(g||Dr)}function m(){for(let p=n,g=e.length;p<g;p++){const _=e[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:f,finish:m,sort:d}}function vu(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new Ir,e.set(i,[s])):r>=a.length?(s=new Ir,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function Eu(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new be,color:new ye};break;case"SpotLight":t={position:new be,direction:new be,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new be,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new be,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new be,halfWidth:new be,halfHeight:new be};break}return e[n.id]=t,t}}}function Su(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Mu=0;function xu(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Tu(e){const n=new Eu,t=Su(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new be);const r=new be,a=new ln,s=new ln;function o(d){let m=0,p=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let _=0,x=0,T=0,l=0,c=0,b=0,A=0,M=0,U=0,P=0,y=0;d.sort(xu);for(let E=0,v=d.length;E<v;E++){const D=d[E],w=D.color,G=D.intensity,z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)m+=w.r*G,p+=w.g*G,g+=w.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],G);y++}else if(D.isDirectionalLight){const Y=n.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,X=t.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[_]=X,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=D.shadow.matrix,b++}i.directional[_]=Y,_++}else if(D.isSpotLight){const Y=n.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(w).multiplyScalar(G),Y.distance=z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[T]=Y;const j=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,j.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[T]=j.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[T]=X,i.spotShadowMap[T]=W,M++}T++}else if(D.isRectAreaLight){const Y=n.get(D);Y.color.copy(w).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[l]=Y,l++}else if(D.isPointLight){const Y=n.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const j=D.shadow,X=t.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[x]=X,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=D.shadow.matrix,A++}i.point[x]=Y,x++}else if(D.isHemisphereLight){const Y=n.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[c]=Y,c++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=p,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==x||O.spotLength!==T||O.rectAreaLength!==l||O.hemiLength!==c||O.numDirectionalShadows!==b||O.numPointShadows!==A||O.numSpotShadows!==M||O.numSpotMaps!==U||O.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=T,i.rectArea.length=l,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,O.directionalLength=_,O.pointLength=x,O.spotLength=T,O.rectAreaLength=l,O.hemiLength=c,O.numDirectionalShadows=b,O.numPointShadows=A,O.numSpotShadows=M,O.numSpotMaps=U,O.numLightProbes=y,i.version=Mu++)}function f(d,m){let p=0,g=0,_=0,x=0,T=0;const l=m.matrixWorldInverse;for(let c=0,b=d.length;c<b;c++){const A=d[c];if(A.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(l),p++}else if(A.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(l),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(l),_++}else if(A.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(l),s.identity(),a.copy(A.matrixWorld),a.premultiply(l),s.extractRotation(a),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(A.isPointLight){const M=i.point[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(l),g++}else if(A.isHemisphereLight){const M=i.hemi[T];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(l),T++}}}return{setup:o,setupView:f,state:i}}function Nr(e){const n=new Tu(e),t=[],i=[];function r(m){d.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function s(m){i.push(m)}function o(){n.setup(t)}function f(m){n.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:o,setupLightsView:f,pushLight:a,pushShadow:s}}function Au(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new Nr(e),n.set(r,[o])):a>=s.length?(o=new Nr(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const Ru=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bu=`uniform sampler2D shadow_pass;
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
}`;function Cu(e,n,t){let i=new Gr;const r=new ut,a=new ut,s=new mt,o=new ro({depthPacking:ao}),f=new oo,d={},m=t.maxTextureSize,p={[fn]:Et,[Et]:fn,[xt]:xt},g=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ru,fragmentShader:bu}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const x=new pi;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new st(x,g),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let c=this.type;this.render=function(P,y,O){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||P.length===0)return;const E=e.getRenderTarget(),v=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),w=e.state;w.setBlending(Ht),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const G=c!==Pt&&this.type===Pt,z=c===Pt&&this.type!==Pt;for(let W=0,Y=P.length;W<Y;W++){const j=P[W],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pe=X.getFrameExtents();if(r.multiply(pe),a.copy(X.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/pe.x),r.x=a.x*pe.x,X.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/pe.y),r.y=a.y*pe.y,X.mapSize.y=a.y)),X.map===null||G===!0||z===!0){const we=this.type!==Pt?{minFilter:sn,magFilter:sn}:{};X.map!==null&&X.map.dispose(),X.map=new Qt(r.x,r.y,we),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();const me=X.getViewportCount();for(let we=0;we<me;we++){const He=X.getViewport(we);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),w.viewport(s),X.updateMatrices(j,we),i=X.getFrustum(),M(y,O,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Pt&&b(X,O),X.needsUpdate=!1}c=this.type,l.needsUpdate=!1,e.setRenderTarget(E,v,D)};function b(P,y){const O=n.update(T);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qt(r.x,r.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(y,null,O,g,T,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(y,null,O,_,T,null)}function A(P,y,O,E){let v=null;const D=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)v=D;else if(v=O.isPointLight===!0?f:o,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const w=v.uuid,G=y.uuid;let z=d[w];z===void 0&&(z={},d[w]=z);let W=z[G];W===void 0&&(W=v.clone(),z[G]=W,y.addEventListener("dispose",U)),v=W}if(v.visible=y.visible,v.wireframe=y.wireframe,E===Pt?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:p[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const w=e.properties.get(v);w.light=O}return v}function M(P,y,O,E,v){if(P.visible===!1)return;if(P.layers.test(y.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Pt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const G=n.update(P),z=P.material;if(Array.isArray(z)){const W=G.groups;for(let Y=0,j=W.length;Y<j;Y++){const X=W[Y],pe=z[X.materialIndex];if(pe&&pe.visible){const me=A(P,pe,E,v);P.onBeforeShadow(e,P,y,O,G,me,X),e.renderBufferDirect(O,null,G,me,P,X),P.onAfterShadow(e,P,y,O,G,me,X)}}}else if(z.visible){const W=A(P,z,E,v);P.onBeforeShadow(e,P,y,O,G,W,null),e.renderBufferDirect(O,null,G,W,P,null),P.onAfterShadow(e,P,y,O,G,W,null)}}const w=P.children;for(let G=0,z=w.length;G<z;G++)M(w[G],y,O,E,v)}function U(P){P.target.removeEventListener("dispose",U);for(const O in d){const E=d[O],v=P.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const wu={[ii]:ni,[ti]:Qn,[ei]:jn,[bn]:Jn,[ni]:ii,[Qn]:ti,[jn]:ei,[Jn]:bn};function Pu(e,n){function t(){let L=!1;const ie=new mt;let oe=null;const he=new mt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!L&&(e.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Z,ge,Ne,$e){$e===!0&&(ee*=Ne,Z*=Ne,ge*=Ne),ie.set(ee,Z,ge,Ne),he.equals(ie)===!1&&(e.clearColor(ee,Z,ge,Ne),he.copy(ie))},reset:function(){L=!1,oe=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,oe=null,he=null,ee=null;return{setReversed:function(Z){if(ie!==Z){const ge=n.get("EXT_clip_control");Z?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(Z){Z?H(e.DEPTH_TEST):J(e.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!L&&(e.depthMask(Z),oe=Z)},setFunc:function(Z){if(ie&&(Z=wu[Z]),he!==Z){switch(Z){case ii:e.depthFunc(e.NEVER);break;case ni:e.depthFunc(e.ALWAYS);break;case ti:e.depthFunc(e.LESS);break;case bn:e.depthFunc(e.LEQUAL);break;case ei:e.depthFunc(e.EQUAL);break;case Jn:e.depthFunc(e.GEQUAL);break;case Qn:e.depthFunc(e.GREATER);break;case jn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ee!==Z&&(ie&&(Z=1-Z),e.clearDepth(Z),ee=Z)},reset:function(){L=!1,oe=null,he=null,ee=null,ie=!1}}}function r(){let L=!1,ie=null,oe=null,he=null,ee=null,Z=null,ge=null,Ne=null,$e=null;return{setTest:function(Xe){L||(Xe?H(e.STENCIL_TEST):J(e.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!L&&(e.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,wt,Rt){(oe!==Xe||he!==wt||ee!==Rt)&&(e.stencilFunc(Xe,wt,Rt),oe=Xe,he=wt,ee=Rt)},setOp:function(Xe,wt,Rt){(Z!==Xe||ge!==wt||Ne!==Rt)&&(e.stencilOp(Xe,wt,Rt),Z=Xe,ge=wt,Ne=Rt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){$e!==Xe&&(e.clearStencil(Xe),$e=Xe)},reset:function(){L=!1,ie=null,oe=null,he=null,ee=null,Z=null,ge=null,Ne=null,$e=null}}}const a=new t,s=new i,o=new r,f=new WeakMap,d=new WeakMap;let m={},p={},g=new WeakMap,_=[],x=null,T=!1,l=null,c=null,b=null,A=null,M=null,U=null,P=null,y=new ye(0,0,0),O=0,E=!1,v=null,D=null,w=null,G=null,z=null;const W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=j>=2);let pe=null,me={};const we=e.getParameter(e.SCISSOR_BOX),He=e.getParameter(e.VIEWPORT),Ye=new mt().fromArray(we),C=new mt().fromArray(He);function K(L,ie,oe,he){const ee=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ge=0;ge<oe;ge++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,ee):e.texImage2D(ie+ge,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ee);return Z}const F={};F[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(e.DEPTH_TEST),s.setFunc(bn),Le(!1),ve(Ji),H(e.CULL_FACE),Qe(Ht);function H(L){m[L]!==!0&&(e.enable(L),m[L]=!0)}function J(L){m[L]!==!1&&(e.disable(L),m[L]=!1)}function ce(L,ie){return p[L]!==ie?(e.bindFramebuffer(L,ie),p[L]=ie,L===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ie),L===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function ae(L,ie){let oe=_,he=!1;if(L){oe=g.get(ie),oe===void 0&&(oe=[],g.set(ie,oe));const ee=L.textures;if(oe.length!==ee.length||oe[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,ge=ee.length;Z<ge;Z++)oe[Z]=e.COLOR_ATTACHMENT0+Z;oe.length=ee.length,he=!0}}else oe[0]!==e.BACK&&(oe[0]=e.BACK,he=!0);he&&e.drawBuffers(oe)}function Ie(L){return x!==L?(e.useProgram(L),x=L,!0):!1}const We={[nn]:e.FUNC_ADD,[Ua]:e.FUNC_SUBTRACT,[La]:e.FUNC_REVERSE_SUBTRACT};We[Go]=e.MIN,We[Ho]=e.MAX;const R={[qa]:e.ZERO,[Ya]:e.ONE,[Xa]:e.SRC_COLOR,[Wa]:e.SRC_ALPHA,[za]:e.SRC_ALPHA_SATURATE,[ka]:e.DST_COLOR,[Va]:e.DST_ALPHA,[Ha]:e.ONE_MINUS_SRC_COLOR,[Ga]:e.ONE_MINUS_SRC_ALPHA,[Ba]:e.ONE_MINUS_DST_COLOR,[Oa]:e.ONE_MINUS_DST_ALPHA,[Fa]:e.CONSTANT_COLOR,[Na]:e.ONE_MINUS_CONSTANT_COLOR,[Ia]:e.CONSTANT_ALPHA,[Da]:e.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ie,oe,he,ee,Z,ge,Ne,$e,Xe){if(L===Ht){T===!0&&(J(e.BLEND),T=!1);return}if(T===!1&&(H(e.BLEND),T=!0),L!==vo){if(L!==l||Xe!==E){if((c!==nn||M!==nn)&&(e.blendEquation(e.FUNC_ADD),c=nn,M=nn),Xe)switch(L){case Tn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nr:e.blendFunc(e.ONE,e.ONE);break;case tr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case er:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Tn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case tr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case er:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,A=null,U=null,P=null,y.set(0,0,0),O=0,l=L,E=Xe}return}ee=ee||ie,Z=Z||oe,ge=ge||he,(ie!==c||ee!==M)&&(e.blendEquationSeparate(We[ie],We[ee]),c=ie,M=ee),(oe!==b||he!==A||Z!==U||ge!==P)&&(e.blendFuncSeparate(R[oe],R[he],R[Z],R[ge]),b=oe,A=he,U=Z,P=ge),(Ne.equals(y)===!1||$e!==O)&&(e.blendColor(Ne.r,Ne.g,Ne.b,$e),y.copy(Ne),O=$e),l=L,E=!1}function Fe(L,ie){L.side===xt?J(e.CULL_FACE):H(e.CULL_FACE);let oe=L.side===Et;ie&&(oe=!oe),Le(oe),L.blending===Tn&&L.transparent===!1?Qe(Ht):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):J(e.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){v!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),v=L)}function ve(L){L!==_o?(H(e.CULL_FACE),L!==D&&(L===Ji?e.cullFace(e.BACK):L===go?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):J(e.CULL_FACE),D=L}function Je(L){L!==w&&(Y&&e.lineWidth(L),w=L)}function Ee(L,ie,oe){L?(H(e.POLYGON_OFFSET_FILL),(G!==ie||z!==oe)&&(e.polygonOffset(ie,oe),G=ie,z=oe)):J(e.POLYGON_OFFSET_FILL)}function Be(L){L?H(e.SCISSOR_TEST):J(e.SCISSOR_TEST)}function ft(L){L===void 0&&(L=e.TEXTURE0+W-1),pe!==L&&(e.activeTexture(L),pe=L)}function at(L,ie,oe){oe===void 0&&(pe===null?oe=e.TEXTURE0+W-1:oe=pe);let he=me[oe];he===void 0&&(he={type:void 0,texture:void 0},me[oe]=he),(he.type!==L||he.texture!==ie)&&(pe!==oe&&(e.activeTexture(oe),pe=oe),e.bindTexture(L,ie||F[L]),he.type=L,he.texture=ie)}function S(){const L=me[pe];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function u(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(L){Ye.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function Pe(L){C.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),C.copy(L))}function xe(L,ie){let oe=d.get(ie);oe===void 0&&(oe=new WeakMap,d.set(ie,oe));let he=oe.get(L);he===void 0&&(he=e.getUniformBlockIndex(ie,L.name),oe.set(L,he))}function le(L,ie){const he=d.get(ie).get(L);f.get(ie)!==he&&(e.uniformBlockBinding(ie,he,L.__bindingPointIndex),f.set(ie,he))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},pe=null,me={},p={},g=new WeakMap,_=[],x=null,T=!1,l=null,c=null,b=null,A=null,M=null,U=null,P=null,y=new ye(0,0,0),O=0,E=!1,v=null,D=null,w=null,G=null,z=null,Ye.set(0,0,e.canvas.width,e.canvas.height),C.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:H,disable:J,bindFramebuffer:ce,drawBuffers:ae,useProgram:Ie,setBlending:Qe,setMaterial:Fe,setFlipSided:Le,setCullFace:ve,setLineWidth:Je,setPolygonOffset:Ee,setScissorTest:Be,activeTexture:ft,bindTexture:at,unbindTexture:S,compressedTexImage2D:u,compressedTexImage3D:B,texImage2D:Me,texImage3D:ne,updateUBOMapping:xe,uniformBlockBinding:le,texStorage2D:re,texStorage3D:Se,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:ue,viewport:Pe,reset:Oe}}function yu(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,m=new WeakMap;let p;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,u){return _?new OffscreenCanvas(S,u):No("canvas")}function T(S,u,B){let $=1;const Q=at(S);if((Q.width>B||Q.height>B)&&($=B/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const q=Math.floor($*Q.width),Te=Math.floor($*Q.height);p===void 0&&(p=x(q,Te));const re=u?x(q,Te):p;return re.width=q,re.height=Te,re.getContext("2d").drawImage(S,0,0,q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Te+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function l(S){return S.generateMipmaps}function c(S){e.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(S,u,B,$,Q=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let q=u;if(u===e.RED&&(B===e.FLOAT&&(q=e.R32F),B===e.HALF_FLOAT&&(q=e.R16F),B===e.UNSIGNED_BYTE&&(q=e.R8)),u===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.R8UI),B===e.UNSIGNED_SHORT&&(q=e.R16UI),B===e.UNSIGNED_INT&&(q=e.R32UI),B===e.BYTE&&(q=e.R8I),B===e.SHORT&&(q=e.R16I),B===e.INT&&(q=e.R32I)),u===e.RG&&(B===e.FLOAT&&(q=e.RG32F),B===e.HALF_FLOAT&&(q=e.RG16F),B===e.UNSIGNED_BYTE&&(q=e.RG8)),u===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RG8UI),B===e.UNSIGNED_SHORT&&(q=e.RG16UI),B===e.UNSIGNED_INT&&(q=e.RG32UI),B===e.BYTE&&(q=e.RG8I),B===e.SHORT&&(q=e.RG16I),B===e.INT&&(q=e.RG32I)),u===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RGB8UI),B===e.UNSIGNED_SHORT&&(q=e.RGB16UI),B===e.UNSIGNED_INT&&(q=e.RGB32UI),B===e.BYTE&&(q=e.RGB8I),B===e.SHORT&&(q=e.RGB16I),B===e.INT&&(q=e.RGB32I)),u===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),B===e.UNSIGNED_INT&&(q=e.RGBA32UI),B===e.BYTE&&(q=e.RGBA8I),B===e.SHORT&&(q=e.RGBA16I),B===e.INT&&(q=e.RGBA32I)),u===e.RGB&&(B===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),u===e.RGBA){const Te=Q?ia:ot.getTransfer($);B===e.FLOAT&&(q=e.RGBA32F),B===e.HALF_FLOAT&&(q=e.RGBA16F),B===e.UNSIGNED_BYTE&&(q=Te===je?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&n.get("EXT_color_buffer_float"),q}function M(S,u){let B;return S?u===null||u===dn||u===un?B=e.DEPTH24_STENCIL8:u===Gt?B=e.DEPTH32F_STENCIL8:u===Cn&&(B=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===dn||u===un?B=e.DEPTH_COMPONENT24:u===Gt?B=e.DEPTH_COMPONENT32F:u===Cn&&(B=e.DEPTH_COMPONENT16),B}function U(S,u){return l(S)===!0||S.isFramebufferTexture&&S.minFilter!==sn&&S.minFilter!==Bt?Math.log2(Math.max(u.width,u.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?u.mipmaps.length:1}function P(S){const u=S.target;u.removeEventListener("dispose",P),O(u),u.isVideoTexture&&m.delete(u)}function y(S){const u=S.target;u.removeEventListener("dispose",y),v(u)}function O(S){const u=i.get(S);if(u.__webglInit===void 0)return;const B=S.source,$=g.get(B);if($){const Q=$[u.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(S),Object.keys($).length===0&&g.delete(B)}i.remove(S)}function E(S){const u=i.get(S);e.deleteTexture(u.__webglTexture);const B=S.source,$=g.get(B);delete $[u.__cacheKey],s.memory.textures--}function v(S){const u=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(u.__webglFramebuffer[$]))for(let Q=0;Q<u.__webglFramebuffer[$].length;Q++)e.deleteFramebuffer(u.__webglFramebuffer[$][Q]);else e.deleteFramebuffer(u.__webglFramebuffer[$]);u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer[$])}else{if(Array.isArray(u.__webglFramebuffer))for(let $=0;$<u.__webglFramebuffer.length;$++)e.deleteFramebuffer(u.__webglFramebuffer[$]);else e.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&e.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let $=0;$<u.__webglColorRenderbuffer.length;$++)u.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(u.__webglColorRenderbuffer[$]);u.__webglDepthRenderbuffer&&e.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const B=S.textures;for(let $=0,Q=B.length;$<Q;$++){const q=i.get(B[$]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(B[$])}i.remove(S)}let D=0;function w(){D=0}function G(){const S=D;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function z(S){const u=[];return u.push(S.wrapS),u.push(S.wrapT),u.push(S.wrapR||0),u.push(S.magFilter),u.push(S.minFilter),u.push(S.anisotropy),u.push(S.internalFormat),u.push(S.format),u.push(S.type),u.push(S.generateMipmaps),u.push(S.premultiplyAlpha),u.push(S.flipY),u.push(S.unpackAlignment),u.push(S.colorSpace),u.join()}function W(S,u){const B=i.get(S);if(S.isVideoTexture&&Be(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(B,S,u);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+u)}function Y(S,u){const B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){F(B,S,u);return}t.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+u)}function j(S,u){const B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){F(B,S,u);return}t.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+u)}function X(S,u){const B=i.get(S);if(S.version>0&&B.__version!==S.version){H(B,S,u);return}t.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+u)}const pe={[kr]:e.REPEAT,[$a]:e.CLAMP_TO_EDGE,[Ka]:e.MIRRORED_REPEAT},me={[sn]:e.NEAREST,[Za]:e.NEAREST_MIPMAP_NEAREST,[_n]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[On]:e.LINEAR_MIPMAP_NEAREST,[an]:e.LINEAR_MIPMAP_LINEAR},we={[io]:e.NEVER,[no]:e.ALWAYS,[to]:e.LESS,[zr]:e.LEQUAL,[eo]:e.EQUAL,[Ja]:e.GEQUAL,[Qa]:e.GREATER,[ja]:e.NOTEQUAL};function He(S,u){if(u.type===Gt&&n.has("OES_texture_float_linear")===!1&&(u.magFilter===Bt||u.magFilter===On||u.magFilter===_n||u.magFilter===an||u.minFilter===Bt||u.minFilter===On||u.minFilter===_n||u.minFilter===an)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,pe[u.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,pe[u.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,pe[u.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,me[u.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,me[u.minFilter]),u.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,we[u.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===sn||u.minFilter!==_n&&u.minFilter!==an||u.type===Gt&&n.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const B=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,r.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function Ye(S,u){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,u.addEventListener("dispose",P));const $=u.source;let Q=g.get($);Q===void 0&&(Q={},g.set($,Q));const q=z(u);if(q!==S.__cacheKey){Q[q]===void 0&&(Q[q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Q[q].usedTimes++;const Te=Q[S.__cacheKey];Te!==void 0&&(Q[S.__cacheKey].usedTimes--,Te.usedTimes===0&&E(u)),S.__cacheKey=q,S.__webglTexture=Q[q].texture}return B}function C(S,u,B){return Math.floor(Math.floor(S/B)/u)}function K(S,u,B,$){const q=S.updateRanges;if(q.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,B,$,u.data);else{q.sort((ne,ue)=>ne.start-ue.start);let Te=0;for(let ne=1;ne<q.length;ne++){const ue=q[Te],Pe=q[ne],xe=ue.start+ue.count,le=C(Pe.start,u.width,4),Oe=C(ue.start,u.width,4);Pe.start<=xe+1&&le===Oe&&C(Pe.start+Pe.count-1,u.width,4)===le?ue.count=Math.max(ue.count,Pe.start+Pe.count-ue.start):(++Te,q[Te]=Pe)}q.length=Te+1;const re=e.getParameter(e.UNPACK_ROW_LENGTH),Se=e.getParameter(e.UNPACK_SKIP_PIXELS),Me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,u.width);for(let ne=0,ue=q.length;ne<ue;ne++){const Pe=q[ne],xe=Math.floor(Pe.start/4),le=Math.ceil(Pe.count/4),Oe=xe%u.width,L=Math.floor(xe/u.width),ie=le,oe=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Oe),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),t.texSubImage2D(e.TEXTURE_2D,0,Oe,L,ie,oe,B,$,u.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,re),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(e.UNPACK_SKIP_ROWS,Me)}}function F(S,u,B){let $=e.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),u.isData3DTexture&&($=e.TEXTURE_3D);const Q=Ye(S,u),q=u.source;t.bindTexture($,S.__webglTexture,e.TEXTURE0+B);const Te=i.get(q);if(q.version!==Te.__version||Q===!0){t.activeTexture(e.TEXTURE0+B);const re=ot.getPrimaries(ot.workingColorSpace),Se=u.colorSpace===$t?null:ot.getPrimaries(u.colorSpace),Me=u.colorSpace===$t||re===Se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=T(u.image,!1,r.maxTextureSize);ne=ft(u,ne);const ue=a.convert(u.format,u.colorSpace),Pe=a.convert(u.type);let xe=A(u.internalFormat,ue,Pe,u.colorSpace,u.isVideoTexture);He($,u);let le;const Oe=u.mipmaps,L=u.isVideoTexture!==!0,ie=Te.__version===void 0||Q===!0,oe=q.dataReady,he=U(u,ne);if(u.isDepthTexture)xe=M(u.format===Rn,u.type),ie&&(L?t.texStorage2D(e.TEXTURE_2D,1,xe,ne.width,ne.height):t.texImage2D(e.TEXTURE_2D,0,xe,ne.width,ne.height,0,ue,Pe,null));else if(u.isDataTexture)if(Oe.length>0){L&&ie&&t.texStorage2D(e.TEXTURE_2D,he,xe,Oe[0].width,Oe[0].height);for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],L?oe&&t.texSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Pe,le.data):t.texImage2D(e.TEXTURE_2D,ee,xe,le.width,le.height,0,ue,Pe,le.data);u.generateMipmaps=!1}else L?(ie&&t.texStorage2D(e.TEXTURE_2D,he,xe,ne.width,ne.height),oe&&K(u,ne,ue,Pe)):t.texImage2D(e.TEXTURE_2D,0,xe,ne.width,ne.height,0,ue,Pe,ne.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){L&&ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,xe,Oe[0].width,Oe[0].height,ne.depth);for(let ee=0,Z=Oe.length;ee<Z;ee++)if(le=Oe[ee],u.format!==yt)if(ue!==null)if(L){if(oe)if(u.layerUpdates.size>0){const ge=rr(le.width,le.height,u.format,u.type);for(const Ne of u.layerUpdates){const $e=le.data.subarray(Ne*ge/le.data.BYTES_PER_ELEMENT,(Ne+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,Ne,le.width,le.height,1,ue,$e)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,ue,le.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ee,xe,le.width,le.height,ne.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?oe&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,ue,Pe,le.data):t.texImage3D(e.TEXTURE_2D_ARRAY,ee,xe,le.width,le.height,ne.depth,0,ue,Pe,le.data)}else{L&&ie&&t.texStorage2D(e.TEXTURE_2D,he,xe,Oe[0].width,Oe[0].height);for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],u.format!==yt?ue!==null?L?oe&&t.compressedTexSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(e.TEXTURE_2D,ee,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?oe&&t.texSubImage2D(e.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Pe,le.data):t.texImage2D(e.TEXTURE_2D,ee,xe,le.width,le.height,0,ue,Pe,le.data)}else if(u.isDataArrayTexture)if(L){if(ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,xe,ne.width,ne.height,ne.depth),oe)if(u.layerUpdates.size>0){const ee=rr(ne.width,ne.height,u.format,u.type);for(const Z of u.layerUpdates){const ge=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,ue,Pe,ge)}u.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Pe,ne.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,ne.width,ne.height,ne.depth,0,ue,Pe,ne.data);else if(u.isData3DTexture)L?(ie&&t.texStorage3D(e.TEXTURE_3D,he,xe,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Pe,ne.data)):t.texImage3D(e.TEXTURE_3D,0,xe,ne.width,ne.height,ne.depth,0,ue,Pe,ne.data);else if(u.isFramebufferTexture){if(ie)if(L)t.texStorage2D(e.TEXTURE_2D,he,xe,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(e.TEXTURE_2D,ge,xe,ee,Z,0,ue,Pe,null),ee>>=1,Z>>=1}}else if(Oe.length>0){if(L&&ie){const ee=at(Oe[0]);t.texStorage2D(e.TEXTURE_2D,he,xe,ee.width,ee.height)}for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],L?oe&&t.texSubImage2D(e.TEXTURE_2D,ee,0,0,ue,Pe,le):t.texImage2D(e.TEXTURE_2D,ee,xe,ue,Pe,le);u.generateMipmaps=!1}else if(L){if(ie){const ee=at(ne);t.texStorage2D(e.TEXTURE_2D,he,xe,ee.width,ee.height)}oe&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ue,Pe,ne)}else t.texImage2D(e.TEXTURE_2D,0,xe,ue,Pe,ne);l(u)&&c($),Te.__version=q.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function H(S,u,B){if(u.image.length!==6)return;const $=Ye(S,u),Q=u.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||$===!0){t.activeTexture(e.TEXTURE0+B);const Te=ot.getPrimaries(ot.workingColorSpace),re=u.colorSpace===$t?null:ot.getPrimaries(u.colorSpace),Se=u.colorSpace===$t||Te===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Me=u.isCompressedTexture||u.image[0].isCompressedTexture,ne=u.image[0]&&u.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Me&&!ne?ue[Z]=T(u.image[Z],!0,r.maxCubemapSize):ue[Z]=ne?u.image[Z].image:u.image[Z],ue[Z]=ft(u,ue[Z]);const Pe=ue[0],xe=a.convert(u.format,u.colorSpace),le=a.convert(u.type),Oe=A(u.internalFormat,xe,le,u.colorSpace),L=u.isVideoTexture!==!0,ie=q.__version===void 0||$===!0,oe=Q.dataReady;let he=U(u,Pe);He(e.TEXTURE_CUBE_MAP,u);let ee;if(Me){L&&ie&&t.texStorage2D(e.TEXTURE_CUBE_MAP,he,Oe,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){ee=ue[Z].mipmaps;for(let ge=0;ge<ee.length;ge++){const Ne=ee[ge];u.format!==yt?xe!==null?L?oe&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Ne.width,Ne.height,xe,Ne.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Oe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?oe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,Ne.width,Ne.height,xe,le,Ne.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,Oe,Ne.width,Ne.height,0,xe,le,Ne.data)}}}else{if(ee=u.mipmaps,L&&ie){ee.length>0&&he++;const Z=at(ue[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,he,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){L?oe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,xe,le,ue[Z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ue[Z].width,ue[Z].height,0,xe,le,ue[Z].data);for(let ge=0;ge<ee.length;ge++){const $e=ee[ge].image[Z].image;L?oe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,$e.width,$e.height,xe,le,$e.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Oe,$e.width,$e.height,0,xe,le,$e.data)}}else{L?oe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe,le,ue[Z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,xe,le,ue[Z]);for(let ge=0;ge<ee.length;ge++){const Ne=ee[ge];L?oe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,xe,le,Ne.image[Z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,Oe,xe,le,Ne.image[Z])}}}l(u)&&c(e.TEXTURE_CUBE_MAP),q.__version=Q.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function J(S,u,B,$,Q,q){const Te=a.convert(B.format,B.colorSpace),re=a.convert(B.type),Se=A(B.internalFormat,Te,re,B.colorSpace),Me=i.get(u),ne=i.get(B);if(ne.__renderTarget=u,!Me.__hasExternalTextures){const ue=Math.max(1,u.width>>q),Pe=Math.max(1,u.height>>q);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Se,ue,Pe,u.depth,0,Te,re,null):t.texImage2D(Q,q,Se,ue,Pe,0,Te,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),Ee(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Q,ne.__webglTexture,0,Je(u)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,Q,ne.__webglTexture,q),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(S,u,B){if(e.bindRenderbuffer(e.RENDERBUFFER,S),u.depthBuffer){const $=u.depthTexture,Q=$&&$.isDepthTexture?$.type:null,q=M(u.stencilBuffer,Q),Te=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Je(u);Ee(u)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,q,u.width,u.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,q,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,q,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Te,e.RENDERBUFFER,S)}else{const $=u.textures;for(let Q=0;Q<$.length;Q++){const q=$[Q],Te=a.convert(q.format,q.colorSpace),re=a.convert(q.type),Se=A(q.internalFormat,Te,re,q.colorSpace),Me=Je(u);B&&Ee(u)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,Se,u.width,u.height):Ee(u)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me,Se,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,Se,u.width,u.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ae(S,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(u.depthTexture);$.__renderTarget=u,(!$.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),W(u.depthTexture,0);const Q=$.__webglTexture,q=Je(u);if(u.depthTexture.format===di)Ee(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(u.depthTexture.format===Rn)Ee(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(S){const u=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==S.depthTexture){const $=S.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),$){const Q=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),u.__depthDisposeCallback=Q}u.__boundDepthTexture=$}if(S.depthTexture&&!u.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=S.texture.mipmaps;$&&$.length>0?ae(u.__webglFramebuffer[0],S):ae(u.__webglFramebuffer,S)}else if(B){u.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[$]),u.__webglDepthbuffer[$]===void 0)u.__webglDepthbuffer[$]=e.createRenderbuffer(),ce(u.__webglDepthbuffer[$],S,!1);else{const Q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=u.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,q)}}else{const $=S.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=e.createRenderbuffer(),ce(u.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=u.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,q)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function We(S,u,B){const $=i.get(S);u!==void 0&&J($.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Ie(S)}function R(S){const u=S.texture,B=i.get(S),$=i.get(u);S.addEventListener("dispose",y);const Q=S.textures,q=S.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=u.version,s.memory.textures++),q){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(u.mipmaps&&u.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let Se=0;Se<u.mipmaps.length;Se++)B.__webglFramebuffer[re][Se]=e.createFramebuffer()}else B.__webglFramebuffer[re]=e.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<u.mipmaps.length;re++)B.__webglFramebuffer[re]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(Te)for(let re=0,Se=Q.length;re<Se;re++){const Me=i.get(Q[re]);Me.__webglTexture===void 0&&(Me.__webglTexture=e.createTexture(),s.memory.textures++)}if(S.samples>0&&Ee(S)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Se=Q[re];B.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Me=a.convert(Se.format,Se.colorSpace),ne=a.convert(Se.type),ue=A(Se.internalFormat,Me,ne,Se.colorSpace,S.isXRRenderTarget===!0),Pe=Je(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe,ue,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,B.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){t.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),He(e.TEXTURE_CUBE_MAP,u);for(let re=0;re<6;re++)if(u.mipmaps&&u.mipmaps.length>0)for(let Se=0;Se<u.mipmaps.length;Se++)J(B.__webglFramebuffer[re][Se],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else J(B.__webglFramebuffer[re],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);l(u)&&c(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=Q.length;re<Se;re++){const Me=Q[re],ne=i.get(Me);let ue=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),He(ue,Me),J(B.__webglFramebuffer,S,Me,e.COLOR_ATTACHMENT0+re,ue,0),l(Me)&&c(ue)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),He(re,u),u.mipmaps&&u.mipmaps.length>0)for(let Se=0;Se<u.mipmaps.length;Se++)J(B.__webglFramebuffer[Se],S,u,e.COLOR_ATTACHMENT0,re,Se);else J(B.__webglFramebuffer,S,u,e.COLOR_ATTACHMENT0,re,0);l(u)&&c(re),t.unbindTexture()}S.depthBuffer&&Ie(S)}function Qe(S){const u=S.textures;for(let B=0,$=u.length;B<$;B++){const Q=u[B];if(l(Q)){const q=b(S),Te=i.get(Q).__webglTexture;t.bindTexture(q,Te),c(q),t.unbindTexture()}}}const Fe=[],Le=[];function ve(S){if(S.samples>0){if(Ee(S)===!1){const u=S.textures,B=S.width,$=S.height;let Q=e.COLOR_BUFFER_BIT;const q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=i.get(S),re=u.length>1;if(re)for(let Me=0;Me<u.length;Me++)t.bindFramebuffer(e.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=S.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<u.length;Me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const ne=i.get(u[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0)}e.blitFramebuffer(0,0,B,$,0,0,B,$,Q,e.NEAREST),f===!0&&(Fe.length=0,Le.length=0,Fe.push(e.COLOR_ATTACHMENT0+Me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Fe.push(q),Le.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Le)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let Me=0;Me<u.length;Me++){t.bindFramebuffer(e.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const ne=i.get(u[Me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Te.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,ne,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&f){const u=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])}}}function Je(S){return Math.min(r.maxSamples,S.samples)}function Ee(S){const u=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function Be(S){const u=s.render.frame;m.get(S)!==u&&(m.set(S,u),S.update())}function ft(S,u){const B=S.colorSpace,$=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==yn&&B!==$t&&(ot.getTransfer(B)===je?($!==yt||Q!==kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),u}function at(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(d.width=S.naturalWidth||S.width,d.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(d.width=S.displayWidth,d.height=S.displayHeight):(d.width=S.width,d.height=S.height),d}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ee}function Lu(e,n){function t(i,r=$t){let a;const s=ot.getTransfer(r);if(i===kt)return e.UNSIGNED_BYTE;if(i===Yr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===qr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===so)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===co)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===lo)return e.BYTE;if(i===fo)return e.SHORT;if(i===Cn)return e.UNSIGNED_SHORT;if(i===Zr)return e.INT;if(i===dn)return e.UNSIGNED_INT;if(i===Gt)return e.FLOAT;if(i===Pn)return e.HALF_FLOAT;if(i===uo)return e.ALPHA;if(i===po)return e.RGB;if(i===yt)return e.RGBA;if(i===di)return e.DEPTH_COMPONENT;if(i===Rn)return e.DEPTH_STENCIL;if(i===ho)return e.RED;if(i===jr)return e.RED_INTEGER;if(i===mo)return e.RG;if(i===Qr)return e.RG_INTEGER;if(i===Jr)return e.RGBA_INTEGER;if(i===Bn||i===Gn||i===Hn||i===Vn)if(s===je)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Bn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Bn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ri||i===bi||i===Ci||i===wi)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ri)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ci)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wi)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pi||i===yi||i===Li)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Pi||i===yi)return s===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Li)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ui||i===Di||i===Ii||i===Ni||i===Fi||i===Oi||i===Bi||i===Gi||i===Hi||i===Vi||i===ki||i===zi||i===Wi||i===Xi)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ui)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Di)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ii)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ni)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ki)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xi)return s===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yi||i===qi||i===Ki)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Yi)return s===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qi)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ki)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$i||i===Zi||i===ji||i===Qi)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===$i)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ji)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qi)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===un?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Du=`
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

}`;class Iu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Kr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new zt({vertexShader:Uu,fragmentShader:Du,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new $r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nu extends Ca{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",f=1,d=null,m=null,p=null,g=null,_=null,x=null;const T=typeof XRWebGLBinding<"u",l=new Iu,c={},b=t.getContextAttributes();let A=null,M=null;const U=[],P=[],y=new ut;let O=null;const E=new xn;E.viewport=new mt;const v=new xn;v.viewport=new mt;const D=[E,v],w=new wa;let G=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let H=U[F];return H===void 0&&(H=new Fn,U[F]=H),H.getTargetRaySpace()},this.getControllerGrip=function(F){let H=U[F];return H===void 0&&(H=new Fn,U[F]=H),H.getGripSpace()},this.getHand=function(F){let H=U[F];return H===void 0&&(H=new Fn,U[F]=H),H.getHandSpace()};function W(F){const H=P.indexOf(F.inputSource);if(H===-1)return;const J=U[H];J!==void 0&&(J.update(F.inputSource,F.frame,d||s),J.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let F=0;F<U.length;F++){const H=P[F];H!==null&&(P[F]=null,U[F].disconnect(H))}G=null,z=null,l.reset();for(const F in c)delete c[F];n.setRenderTarget(A),_=null,g=null,p=null,r=null,M=null,K.stop(),i.isPresenting=!1,n.setPixelRatio(O),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(F){d=F},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(A=n.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=n.getPixelRatio(),n.getSize(y),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ce=null,ae=null;b.depth&&(ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=b.stencil?Rn:di,ce=b.stencil?un:dn);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(Ie),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),M=new Qt(g.textureWidth,g.textureHeight,{format:yt,type:kt,depthTexture:new Hr(g.textureWidth,g.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const J={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:_}),n.setPixelRatio(1),n.setSize(_.framebufferWidth,_.framebufferHeight,!1),M=new Qt(_.framebufferWidth,_.framebufferHeight,{format:yt,type:kt,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(f),d=null,s=await r.requestReferenceSpace(o),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function j(F){for(let H=0;H<F.removed.length;H++){const J=F.removed[H],ce=P.indexOf(J);ce>=0&&(P[ce]=null,U[ce].disconnect(J))}for(let H=0;H<F.added.length;H++){const J=F.added[H];let ce=P.indexOf(J);if(ce===-1){for(let Ie=0;Ie<U.length;Ie++)if(Ie>=P.length){P.push(J),ce=Ie;break}else if(P[Ie]===null){P[Ie]=J,ce=Ie;break}if(ce===-1)break}const ae=U[ce];ae&&ae.connect(J)}}const X=new be,pe=new be;function me(F,H,J){X.setFromMatrixPosition(H.matrixWorld),pe.setFromMatrixPosition(J.matrixWorld);const ce=X.distanceTo(pe),ae=H.projectionMatrix.elements,Ie=J.projectionMatrix.elements,We=ae[14]/(ae[10]-1),R=ae[14]/(ae[10]+1),Qe=(ae[9]+1)/ae[5],Fe=(ae[9]-1)/ae[5],Le=(ae[8]-1)/ae[0],ve=(Ie[8]+1)/Ie[0],Je=We*Le,Ee=We*ve,Be=ce/(-Le+ve),ft=Be*-Le;if(H.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ft),F.translateZ(Be),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ae[10]===-1)F.projectionMatrix.copy(H.projectionMatrix),F.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const at=We+Be,S=R+Be,u=Je-ft,B=Ee+(ce-ft),$=Qe*R/S*at,Q=Fe*R/S*at;F.projectionMatrix.makePerspective(u,B,$,Q,at,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function we(F,H){H===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(H.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let H=F.near,J=F.far;l.texture!==null&&(l.depthNear>0&&(H=l.depthNear),l.depthFar>0&&(J=l.depthFar)),w.near=v.near=E.near=H,w.far=v.far=E.far=J,(G!==w.near||z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,z=w.far),w.layers.mask=F.layers.mask|6,E.layers.mask=w.layers.mask&3,v.layers.mask=w.layers.mask&5;const ce=F.parent,ae=w.cameras;we(w,ce);for(let Ie=0;Ie<ae.length;Ie++)we(ae[Ie],ce);ae.length===2?me(w,E,v):w.projectionMatrix.copy(E.projectionMatrix),He(F,w,ce)};function He(F,H,J){J===null?F.matrix.copy(H.matrixWorld):(F.matrix.copy(J.matrixWorld),F.matrix.invert(),F.matrix.multiply(H.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(H.projectionMatrix),F.projectionMatrixInverse.copy(H.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Pa*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&_===null))return f},this.setFoveation=function(F){f=F,g!==null&&(g.fixedFoveation=F),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=F)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(w)},this.getCameraTexture=function(F){return c[F]};let Ye=null;function C(F,H){if(m=H.getViewerPose(d||s),x=H,m!==null){const J=m.views;_!==null&&(n.setRenderTargetFramebuffer(M,_.framebuffer),n.setRenderTarget(M));let ce=!1;J.length!==w.cameras.length&&(w.cameras.length=0,ce=!0);for(let R=0;R<J.length;R++){const Qe=J[R];let Fe=null;if(_!==null)Fe=_.getViewport(Qe);else{const ve=p.getViewSubImage(g,Qe);Fe=ve.viewport,R===0&&(n.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),n.setRenderTarget(M))}let Le=D[R];Le===void 0&&(Le=new xn,Le.layers.enable(R),Le.viewport=new mt,D[R]=Le),Le.matrix.fromArray(Qe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Qe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),R===0&&(w.matrix.copy(Le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ce===!0&&w.cameras.push(Le)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const R=p.getDepthInformation(J[0]);R&&R.isValid&&R.texture&&l.init(R,r.renderState)}if(ae&&ae.includes("camera-access")&&T){n.state.unbindTexture(),p=i.getBinding();for(let R=0;R<J.length;R++){const Qe=J[R].camera;if(Qe){let Fe=c[Qe];Fe||(Fe=new Kr,c[Qe]=Fe);const Le=p.getCameraImage(Qe);Fe.sourceTexture=Le}}}}for(let J=0;J<U.length;J++){const ce=P[J],ae=U[J];ce!==null&&ae!==void 0&&ae.update(ce,H,d||s)}Ye&&Ye(F,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),x=null}const K=new ua;K.setAnimationLoop(C),this.setAnimationLoop=function(F){Ye=F},this.dispose=function(){}}}const Nt=new na,Fu=new ln;function Ou(e,n){function t(l,c){l.matrixAutoUpdate===!0&&l.updateMatrix(),c.value.copy(l.matrix)}function i(l,c){c.color.getRGB(l.fogColor.value,ta(e)),c.isFog?(l.fogNear.value=c.near,l.fogFar.value=c.far):c.isFogExp2&&(l.fogDensity.value=c.density)}function r(l,c,b,A,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(l,c):c.isMeshToonMaterial?(a(l,c),p(l,c)):c.isMeshPhongMaterial?(a(l,c),m(l,c)):c.isMeshStandardMaterial?(a(l,c),g(l,c),c.isMeshPhysicalMaterial&&_(l,c,M)):c.isMeshMatcapMaterial?(a(l,c),x(l,c)):c.isMeshDepthMaterial?a(l,c):c.isMeshDistanceMaterial?(a(l,c),T(l,c)):c.isMeshNormalMaterial?a(l,c):c.isLineBasicMaterial?(s(l,c),c.isLineDashedMaterial&&o(l,c)):c.isPointsMaterial?f(l,c,b,A):c.isSpriteMaterial?d(l,c):c.isShadowMaterial?(l.color.value.copy(c.color),l.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(l,c){l.opacity.value=c.opacity,c.color&&l.diffuse.value.copy(c.color),c.emissive&&l.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(l.map.value=c.map,t(c.map,l.mapTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.bumpMap&&(l.bumpMap.value=c.bumpMap,t(c.bumpMap,l.bumpMapTransform),l.bumpScale.value=c.bumpScale,c.side===Et&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,t(c.normalMap,l.normalMapTransform),l.normalScale.value.copy(c.normalScale),c.side===Et&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,t(c.displacementMap,l.displacementMapTransform),l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,l.emissiveMapTransform)),c.specularMap&&(l.specularMap.value=c.specularMap,t(c.specularMap,l.specularMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);const b=n.get(c),A=b.envMap,M=b.envMapRotation;A&&(l.envMap.value=A,Nt.copy(M),Nt.x*=-1,Nt.y*=-1,Nt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Nt.y*=-1,Nt.z*=-1),l.envMapRotation.value.setFromMatrix4(Fu.makeRotationFromEuler(Nt)),l.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=c.reflectivity,l.ior.value=c.ior,l.refractionRatio.value=c.refractionRatio),c.lightMap&&(l.lightMap.value=c.lightMap,l.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,l.lightMapTransform)),c.aoMap&&(l.aoMap.value=c.aoMap,l.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,l.aoMapTransform))}function s(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,c.map&&(l.map.value=c.map,t(c.map,l.mapTransform))}function o(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}function f(l,c,b,A){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*b,l.scale.value=A*.5,c.map&&(l.map.value=c.map,t(c.map,l.uvTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}function d(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map,t(c.map,l.mapTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}function m(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4)}function p(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap)}function g(l,c){l.metalness.value=c.metalness,c.metalnessMap&&(l.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,l.metalnessMapTransform)),l.roughness.value=c.roughness,c.roughnessMap&&(l.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,l.roughnessMapTransform)),c.envMap&&(l.envMapIntensity.value=c.envMapIntensity)}function _(l,c,b){l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,l.sheenColorMapTransform)),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,l.sheenRoughnessMapTransform))),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,l.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(l.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Et&&l.clearcoatNormalScale.value.negate())),c.dispersion>0&&(l.dispersion.value=c.dispersion),c.iridescence>0&&(l.iridescence.value=c.iridescence,l.iridescenceIOR.value=c.iridescenceIOR,l.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(l.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,l.iridescenceMapTransform)),c.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=b.texture,l.transmissionSamplerSize.value.set(b.width,b.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,l.transmissionMapTransform)),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(l.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(l.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,l.specularColorMapTransform)),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,l.specularIntensityMapTransform))}function x(l,c){c.matcap&&(l.matcap.value=c.matcap)}function T(l,c){const b=n.get(c).light;l.referencePosition.value.setFromMatrixPosition(b.matrixWorld),l.nearDistance.value=b.shadow.camera.near,l.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bu(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,A){const M=A.program;i.uniformBlockBinding(b,M)}function d(b,A){let M=r[b.id];M===void 0&&(x(b),M=m(b),r[b.id]=M,b.addEventListener("dispose",l));const U=A.program;i.updateUBOMapping(b,U);const P=n.render.frame;a[b.id]!==P&&(g(b),a[b.id]=P)}function m(b){const A=p();b.__bindingPointIndex=A;const M=e.createBuffer(),U=b.__size,P=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,U,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,M),M}function p(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const A=r[b.id],M=b.uniforms,U=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let P=0,y=M.length;P<y;P++){const O=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,v=O.length;E<v;E++){const D=O[E];if(_(D,P,E,U)===!0){const w=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let W=0;W<G.length;W++){const Y=G[W],j=T(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,w+z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,w,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(b,A,M,U){const P=b.value,y=A+"_"+M;if(U[y]===void 0)return typeof P=="number"||typeof P=="boolean"?U[y]=P:U[y]=P.clone(),!0;{const O=U[y];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return U[y]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function x(b){const A=b.uniforms;let M=0;const U=16;for(let y=0,O=A.length;y<O;y++){const E=Array.isArray(A[y])?A[y]:[A[y]];for(let v=0,D=E.length;v<D;v++){const w=E[v],G=Array.isArray(w.value)?w.value:[w.value];for(let z=0,W=G.length;z<W;z++){const Y=G[z],j=T(Y),X=M%U,pe=X%j.boundary,me=X+pe;M+=pe,me!==0&&U-me<j.storage&&(M+=U-me),w.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,M+=j.storage}}}const P=M%U;return P>0&&(M+=U-P),b.__size=M,b.__cache={},this}function T(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function l(b){const A=b.target;A.removeEventListener("dispose",l);const M=s.indexOf(A.__bindingPointIndex);s.splice(M,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function c(){for(const b in r)e.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:f,update:d,dispose:c}}class Gu{constructor(n={}){const{canvas:t=Aa(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const x=new Uint32Array(4),T=new Int32Array(4);let l=null,c=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=ui;let P=0,y=0,O=null,E=-1,v=null;const D=new mt,w=new mt;let G=null;const z=new ye(0);let W=0,Y=t.width,j=t.height,X=1,pe=null,me=null;const we=new mt(0,0,Y,j),He=new mt(0,0,Y,j);let Ye=!1;const C=new Gr;let K=!1,F=!1;const H=new ln,J=new be,ce=new mt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function We(){return O===null?X:1}let R=i;function Qe(h,I){return t.getContext(h,I)}try{const h={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ee,!1),R===null){const I="webgl2";if(R=Qe(I,h),R===null)throw Qe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Fe,Le,ve,Je,Ee,Be,ft,at,S,u,B,$,Q,q,Te,re,Se,Me,ne,ue,Pe,xe,le,Oe;function L(){Fe=new Kl(R),Fe.init(),xe=new Lu(R,Fe),Le=new Vl(R,Fe,n,xe),ve=new Pu(R,Fe),Le.reversedDepthBuffer&&g&&ve.buffers.depth.setReversed(!0),Je=new jl(R),Ee=new _u,Be=new yu(R,Fe,ve,Ee,Le,xe,Je),ft=new zl(M),at=new ql(M),S=new is(R),le=new Gl(R,S),u=new $l(R,S,Je,le),B=new Jl(R,u,S,Je),ne=new Ql(R,Le,Be),re=new kl(Ee),$=new mu(M,ft,at,Fe,Le,le,re),Q=new Ou(M,Ee),q=new vu,Te=new Au(Fe),Me=new Bl(M,ft,at,ve,B,_,f),Se=new Cu(M,B,Le),Oe=new Bu(R,Je,Le,ve),ue=new Hl(R,Fe,Je),Pe=new Zl(R,Fe,Je),Je.programs=$.programs,M.capabilities=Le,M.extensions=Fe,M.properties=Ee,M.renderLists=q,M.shadowMap=Se,M.state=ve,M.info=Je}L();const ie=new Nu(M,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const h=Fe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Fe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(h){h!==void 0&&(X=h,this.setSize(Y,j,!1))},this.getSize=function(h){return h.set(Y,j)},this.setSize=function(h,I,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=h,j=I,t.width=Math.floor(h*X),t.height=Math.floor(I*X),V===!0&&(t.style.width=h+"px",t.style.height=I+"px"),this.setViewport(0,0,h,I)},this.getDrawingBufferSize=function(h){return h.set(Y*X,j*X).floor()},this.setDrawingBufferSize=function(h,I,V){Y=h,j=I,X=V,t.width=Math.floor(h*V),t.height=Math.floor(I*V),this.setViewport(0,0,h,I)},this.getCurrentViewport=function(h){return h.copy(D)},this.getViewport=function(h){return h.copy(we)},this.setViewport=function(h,I,V,k){h.isVector4?we.set(h.x,h.y,h.z,h.w):we.set(h,I,V,k),ve.viewport(D.copy(we).multiplyScalar(X).round())},this.getScissor=function(h){return h.copy(He)},this.setScissor=function(h,I,V,k){h.isVector4?He.set(h.x,h.y,h.z,h.w):He.set(h,I,V,k),ve.scissor(w.copy(He).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(h){ve.setScissorTest(Ye=h)},this.setOpaqueSort=function(h){pe=h},this.setTransparentSort=function(h){me=h},this.getClearColor=function(h){return h.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(h=!0,I=!0,V=!0){let k=0;if(h){let N=!1;if(O!==null){const te=O.texture.format;N=te===Jr||te===Qr||te===jr}if(N){const te=O.texture.type,fe=te===kt||te===dn||te===Cn||te===un||te===Yr||te===qr,_e=Me.getClearColor(),de=Me.getClearAlpha(),Ce=_e.r,Ue=_e.g,Ae=_e.b;fe?(x[0]=Ce,x[1]=Ue,x[2]=Ae,x[3]=de,R.clearBufferuiv(R.COLOR,0,x)):(T[0]=Ce,T[1]=Ue,T[2]=Ae,T[3]=de,R.clearBufferiv(R.COLOR,0,T))}else k|=R.COLOR_BUFFER_BIT}I&&(k|=R.DEPTH_BUFFER_BIT),V&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Me.dispose(),q.dispose(),Te.dispose(),Ee.dispose(),ft.dispose(),at.dispose(),B.dispose(),le.dispose(),Oe.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Rt),ie.removeEventListener("sessionend",vi),Ut.stop()};function oe(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const h=Je.autoReset,I=Se.enabled,V=Se.autoUpdate,k=Se.needsUpdate,N=Se.type;L(),Je.autoReset=h,Se.enabled=I,Se.autoUpdate=V,Se.needsUpdate=k,Se.type=N}function ee(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Z(h){const I=h.target;I.removeEventListener("dispose",Z),ge(I)}function ge(h){Ne(h),Ee.remove(h)}function Ne(h){const I=Ee.get(h).programs;I!==void 0&&(I.forEach(function(V){$.releaseProgram(V)}),h.isShaderMaterial&&$.releaseShaderCache(h))}this.renderBufferDirect=function(h,I,V,k,N,te){I===null&&(I=ae);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=va(h,I,V,k,N);ve.setMaterial(k,fe);let de=V.index,Ce=1;if(k.wireframe===!0){if(de=u.getWireframeAttribute(V),de===void 0)return;Ce=2}const Ue=V.drawRange,Ae=V.attributes.position;let Ve=Ue.start*Ce,qe=(Ue.start+Ue.count)*Ce;te!==null&&(Ve=Math.max(Ve,te.start*Ce),qe=Math.min(qe,(te.start+te.count)*Ce)),de!==null?(Ve=Math.max(Ve,0),qe=Math.min(qe,de.count)):Ae!=null&&(Ve=Math.max(Ve,0),qe=Math.min(qe,Ae.count));const rt=qe-Ve;if(rt<0||rt===1/0)return;le.setup(N,k,_e,V,de);let Ze,Ke=ue;if(de!==null&&(Ze=S.get(de),Ke=Pe,Ke.setIndex(Ze)),N.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*We()),Ke.setMode(R.LINES)):Ke.setMode(R.TRIANGLES);else if(N.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*We()),N.isLineSegments?Ke.setMode(R.LINES):N.isLineLoop?Ke.setMode(R.LINE_LOOP):Ke.setMode(R.LINE_STRIP)}else N.isPoints?Ke.setMode(R.POINTS):N.isSprite&&Ke.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,tt=N._multiDrawCounts,ke=N._multiDrawCount,_t=de?S.get(de).bytesPerElement:1,Wt=Ee.get(k).currentProgram.getUniforms();for(let gt=0;gt<ke;gt++)Wt.setValue(R,"_gl_DrawID",gt),Ke.render(Re[gt]/_t,tt[gt])}else if(N.isInstancedMesh)Ke.renderInstances(Ve,rt,N.count);else if(V.isInstancedBufferGeometry){const Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,tt=Math.min(V.instanceCount,Re);Ke.renderInstances(Ve,rt,tt)}else Ke.render(Ve,rt)};function $e(h,I,V){h.transparent===!0&&h.side===xt&&h.forceSinglePass===!1?(h.side=Et,h.needsUpdate=!0,mn(h,I,V),h.side=fn,h.needsUpdate=!0,mn(h,I,V),h.side=xt):mn(h,I,V)}this.compile=function(h,I,V=null){V===null&&(V=h),c=Te.get(V),c.init(I),A.push(c),V.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),h!==V&&h.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),c.setupLights();const k=new Set;return h.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const _e=te[fe];$e(_e,V,N),k.add(_e)}else $e(te,V,N),k.add(te)}),c=A.pop(),k},this.compileAsync=function(h,I,V=null){const k=this.compile(h,I,V);return new Promise(N=>{function te(){if(k.forEach(function(fe){Ee.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){N(h);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Xe=null;function wt(h){Xe&&Xe(h)}function Rt(){Ut.stop()}function vi(){Ut.start()}const Ut=new ua;Ut.setAnimationLoop(wt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(h){Xe=h,ie.setAnimationLoop(h),h===null?Ut.stop():Ut.start()},ie.addEventListener("sessionstart",Rt),ie.addEventListener("sessionend",vi),this.render=function(h,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),h.isScene===!0&&h.onBeforeRender(M,h,I,O),c=Te.get(h,A.length),c.init(I),A.push(c),H.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),C.setFromProjectionMatrix(H,Ai,I.reversedDepth),F=this.localClippingEnabled,K=re.init(this.clippingPlanes,F),l=q.get(h,b.length),l.init(),b.push(l),ie.enabled===!0&&ie.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&In(te,I,-1/0,M.sortObjects)}In(h,I,0,M.sortObjects),l.finish(),M.sortObjects===!0&&l.sort(pe,me),Ie=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ie&&Me.addToRenderList(l,h),this.info.render.frame++,K===!0&&re.beginShadows();const V=c.state.shadowsArray;Se.render(V,h,I),K===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=l.opaque,N=l.transmissive;if(c.setupLights(),I.isArrayCamera){const te=I.cameras;if(N.length>0)for(let fe=0,_e=te.length;fe<_e;fe++){const de=te[fe];Si(k,N,h,de)}Ie&&Me.render(h);for(let fe=0,_e=te.length;fe<_e;fe++){const de=te[fe];Ei(l,h,de,de.viewport)}}else N.length>0&&Si(k,N,h,I),Ie&&Me.render(h),Ei(l,h,I);O!==null&&y===0&&(Be.updateMultisampleRenderTarget(O),Be.updateRenderTargetMipmap(O)),h.isScene===!0&&h.onAfterRender(M,h,I),le.resetDefaultState(),E=-1,v=null,A.pop(),A.length>0?(c=A[A.length-1],K===!0&&re.setGlobalState(M.clippingPlanes,c.state.camera)):c=null,b.pop(),b.length>0?l=b[b.length-1]:l=null};function In(h,I,V,k){if(h.visible===!1)return;if(h.layers.test(I.layers)){if(h.isGroup)V=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(I);else if(h.isLight)c.pushLight(h),h.castShadow&&c.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||C.intersectsSprite(h)){k&&ce.setFromMatrixPosition(h.matrixWorld).applyMatrix4(H);const fe=B.update(h),_e=h.material;_e.visible&&l.push(h,fe,_e,V,ce.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||C.intersectsObject(h))){const fe=B.update(h),_e=h.material;if(k&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),ce.copy(h.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ce.copy(fe.boundingSphere.center)),ce.applyMatrix4(h.matrixWorld).applyMatrix4(H)),Array.isArray(_e)){const de=fe.groups;for(let Ce=0,Ue=de.length;Ce<Ue;Ce++){const Ae=de[Ce],Ve=_e[Ae.materialIndex];Ve&&Ve.visible&&l.push(h,fe,Ve,V,ce.z,Ae)}}else _e.visible&&l.push(h,fe,_e,V,ce.z,null)}}const te=h.children;for(let fe=0,_e=te.length;fe<_e;fe++)In(te[fe],I,V,k)}function Ei(h,I,V,k){const N=h.opaque,te=h.transmissive,fe=h.transparent;c.setupLightsView(V),K===!0&&re.setGlobalState(M.clippingPlanes,V),k&&ve.viewport(D.copy(k)),N.length>0&&hn(N,I,V),te.length>0&&hn(te,I,V),fe.length>0&&hn(fe,I,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Si(h,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[k.id]===void 0&&(c.state.transmissionRenderTarget[k.id]=new Qt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Pn:kt,minFilter:an,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const te=c.state.transmissionRenderTarget[k.id],fe=k.viewport||D;te.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),de=M.getActiveCubeFace(),Ce=M.getActiveMipmapLevel();M.setRenderTarget(te),M.getClearColor(z),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Ie&&Me.render(V);const Ue=M.toneMapping;M.toneMapping=Lt;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),c.setupLightsView(k),K===!0&&re.setGlobalState(M.clippingPlanes,k),hn(h,V,k),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let qe=0,rt=I.length;qe<rt;qe++){const Ze=I[qe],Ke=Ze.object,Re=Ze.geometry,tt=Ze.material,ke=Ze.group;if(tt.side===xt&&Ke.layers.test(k.layers)){const _t=tt.side;tt.side=Et,tt.needsUpdate=!0,Mi(Ke,V,k,Re,tt,ke),tt.side=_t,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}M.setRenderTarget(_e,de,Ce),M.setClearColor(z,W),Ae!==void 0&&(k.viewport=Ae),M.toneMapping=Ue}function hn(h,I,V){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,te=h.length;N<te;N++){const fe=h[N],_e=fe.object,de=fe.geometry,Ce=fe.group;let Ue=fe.material;Ue.allowOverride===!0&&k!==null&&(Ue=k),_e.layers.test(V.layers)&&Mi(_e,I,V,de,Ue,Ce)}}function Mi(h,I,V,k,N,te){h.onBeforeRender(M,I,V,k,N,te),h.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),N.onBeforeRender(M,I,V,k,h,te),N.transparent===!0&&N.side===xt&&N.forceSinglePass===!1?(N.side=Et,N.needsUpdate=!0,M.renderBufferDirect(V,I,k,N,h,te),N.side=fn,N.needsUpdate=!0,M.renderBufferDirect(V,I,k,N,h,te),N.side=xt):M.renderBufferDirect(V,I,k,N,h,te),h.onAfterRender(M,I,V,k,N,te)}function mn(h,I,V){I.isScene!==!0&&(I=ae);const k=Ee.get(h),N=c.state.lights,te=c.state.shadowsArray,fe=N.state.version,_e=$.getParameters(h,N.state,te,I,V),de=$.getProgramCacheKey(_e);let Ce=k.programs;k.environment=h.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(h.isMeshStandardMaterial?at:ft).get(h.envMap||k.environment),k.envMapRotation=k.environment!==null&&h.envMap===null?I.environmentRotation:h.envMapRotation,Ce===void 0&&(h.addEventListener("dispose",Z),Ce=new Map,k.programs=Ce);let Ue=Ce.get(de);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===fe)return Ti(h,_e),Ue}else _e.uniforms=$.getUniforms(h),h.onBeforeCompile(_e,M),Ue=$.acquireProgram(_e,de),Ce.set(de,Ue),k.uniforms=_e.uniforms;const Ae=k.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Ti(h,_e),k.needsLights=Sa(h),k.lightsStateVersion=fe,k.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ue,k.uniformsList=null,Ue}function xi(h){if(h.uniformsList===null){const I=h.currentProgram.getUniforms();h.uniformsList=An.seqWithValue(I.seq,h.uniforms)}return h.uniformsList}function Ti(h,I){const V=Ee.get(h);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function va(h,I,V,k,N){I.isScene!==!0&&(I=ae),Be.resetTextureUnits();const te=I.fog,fe=k.isMeshStandardMaterial?I.environment:null,_e=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yn,de=(k.isMeshStandardMaterial?at:ft).get(k.envMap||fe),Ce=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!V.morphAttributes.position,Ve=!!V.morphAttributes.normal,qe=!!V.morphAttributes.color;let rt=Lt;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(rt=M.toneMapping);const Ze=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=Ze!==void 0?Ze.length:0,Re=Ee.get(k),tt=c.state.lights;if(K===!0&&(F===!0||h!==v)){const dt=h===v&&k.id===E;re.setState(k,h,dt)}let ke=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==tt.state.version||Re.outputColorSpace!==_e||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==de||k.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==re.numPlanes||Re.numIntersection!==re.numIntersection)||Re.vertexAlphas!==Ce||Re.vertexTangents!==Ue||Re.morphTargets!==Ae||Re.morphNormals!==Ve||Re.morphColors!==qe||Re.toneMapping!==rt||Re.morphTargetsCount!==Ke)&&(ke=!0):(ke=!0,Re.__version=k.version);let _t=Re.currentProgram;ke===!0&&(_t=mn(k,I,N));let Wt=!1,gt=!1,tn=!1;const nt=_t.getUniforms(),St=Re.uniforms;if(ve.useProgram(_t.program)&&(Wt=!0,gt=!0,tn=!0),k.id!==E&&(E=k.id,gt=!0),Wt||v!==h){ve.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),nt.setValue(R,"projectionMatrix",h.projectionMatrix),nt.setValue(R,"viewMatrix",h.matrixWorldInverse);const pt=nt.map.cameraPosition;pt!==void 0&&pt.setValue(R,J.setFromMatrixPosition(h.matrixWorld)),Le.logarithmicDepthBuffer&&nt.setValue(R,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(R,"isOrthographic",h.isOrthographicCamera===!0),v!==h&&(v=h,gt=!0,tn=!0)}if(N.isSkinnedMesh){nt.setOptional(R,N,"bindMatrix"),nt.setOptional(R,N,"bindMatrixInverse");const dt=N.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),nt.setValue(R,"boneTexture",dt.boneTexture,Be))}N.isBatchedMesh&&(nt.setOptional(R,N,"batchingTexture"),nt.setValue(R,"batchingTexture",N._matricesTexture,Be),nt.setOptional(R,N,"batchingIdTexture"),nt.setValue(R,"batchingIdTexture",N._indirectTexture,Be),nt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&nt.setValue(R,"batchingColorTexture",N._colorsTexture,Be));const Mt=V.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&ne.update(N,V,_t),(gt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,nt.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(St.envMap.value=de,St.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(St.envMapIntensity.value=I.environmentIntensity),gt&&(nt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&Ea(St,tn),te&&k.fog===!0&&Q.refreshFogUniforms(St,te),Q.refreshMaterialUniforms(St,k,X,j,c.state.transmissionRenderTarget[h.id]),An.upload(R,xi(Re),St,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(An.upload(R,xi(Re),St,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(R,"center",N.center),nt.setValue(R,"modelViewMatrix",N.modelViewMatrix),nt.setValue(R,"normalMatrix",N.normalMatrix),nt.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const dt=k.uniformsGroups;for(let pt=0,Nn=dt.length;pt<Nn;pt++){const Dt=dt[pt];Oe.update(Dt,_t),Oe.bind(Dt,_t)}}return _t}function Ea(h,I){h.ambientLightColor.needsUpdate=I,h.lightProbe.needsUpdate=I,h.directionalLights.needsUpdate=I,h.directionalLightShadows.needsUpdate=I,h.pointLights.needsUpdate=I,h.pointLightShadows.needsUpdate=I,h.spotLights.needsUpdate=I,h.spotLightShadows.needsUpdate=I,h.rectAreaLights.needsUpdate=I,h.hemisphereLights.needsUpdate=I}function Sa(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(h,I,V){const k=Ee.get(h);k.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ee.get(h.texture).__webglTexture=I,Ee.get(h.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,I){const V=Ee.get(h);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const Ma=R.createFramebuffer();this.setRenderTarget=function(h,I=0,V=0){O=h,P=I,y=V;let k=!0,N=null,te=!1,fe=!1;if(h){const de=Ee.get(h);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(h);else if(de.__hasExternalTextures)Be.rebindTextures(h,Ee.get(h.texture).__webglTexture,Ee.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const Ae=h.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&Ee.has(Ae)&&(h.width!==Ae.image.width||h.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(h)}}const Ce=h.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Ue=Ee.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?N=Ue[I][V]:N=Ue[I],te=!0):h.samples>0&&Be.useMultisampledRTT(h)===!1?N=Ee.get(h).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[V]:N=Ue,D.copy(h.viewport),w.copy(h.scissor),G=h.scissorTest}else D.copy(we).multiplyScalar(X).floor(),w.copy(He).multiplyScalar(X).floor(),G=Ye;if(V!==0&&(N=Ma),ve.bindFramebuffer(R.FRAMEBUFFER,N)&&k&&ve.drawBuffers(h,N),ve.viewport(D),ve.scissor(w),ve.setScissorTest(G),te){const de=Ee.get(h.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,V)}else if(fe){const de=I;for(let Ce=0;Ce<h.textures.length;Ce++){const Ue=Ee.get(h.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,V,de)}}else if(h!==null&&V!==0){const de=Ee.get(h.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(h,I,V,k,N,te,fe,_e=0){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&fe!==void 0&&(de=de[fe]),de){ve.bindFramebuffer(R.FRAMEBUFFER,de);try{const Ce=h.textures[_e],Ue=Ce.format,Ae=Ce.type;if(!Le.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=h.width-k&&V>=0&&V<=h.height-N&&(h.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(I,V,k,N,xe.convert(Ue),xe.convert(Ae),te))}finally{const Ce=O!==null?Ee.get(O).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(h,I,V,k,N,te,fe,_e=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&fe!==void 0&&(de=de[fe]),de)if(I>=0&&I<=h.width-k&&V>=0&&V<=h.height-N){ve.bindFramebuffer(R.FRAMEBUFFER,de);const Ce=h.textures[_e],Ue=Ce.format,Ae=Ce.type;if(!Le.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),h.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(I,V,k,N,xe.convert(Ue),xe.convert(Ae),0);const qe=O!==null?Ee.get(O).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,qe);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ba(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(Ve),R.deleteSync(rt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,I=null,V=0){const k=Math.pow(2,-V),N=Math.floor(h.image.width*k),te=Math.floor(h.image.height*k),fe=I!==null?I.x:0,_e=I!==null?I.y:0;Be.setTexture2D(h,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,fe,_e,N,te),ve.unbindTexture()};const xa=R.createFramebuffer(),Ta=R.createFramebuffer();this.copyTextureToTexture=function(h,I,V=null,k=null,N=0,te=null){te===null&&(N!==0?(Zn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let fe,_e,de,Ce,Ue,Ae,Ve,qe,rt;const Ze=h.isCompressedTexture?h.mipmaps[te]:h.image;if(V!==null)fe=V.max.x-V.min.x,_e=V.max.y-V.min.y,de=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ue=V.min.y,Ae=V.isBox3?V.min.z:0;else{const Mt=Math.pow(2,-N);fe=Math.floor(Ze.width*Mt),_e=Math.floor(Ze.height*Mt),h.isDataArrayTexture?de=Ze.depth:h.isData3DTexture?de=Math.floor(Ze.depth*Mt):de=1,Ce=0,Ue=0,Ae=0}k!==null?(Ve=k.x,qe=k.y,rt=k.z):(Ve=0,qe=0,rt=0);const Ke=xe.convert(I.format),Re=xe.convert(I.type);let tt;I.isData3DTexture?(Be.setTexture3D(I,0),tt=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),tt=R.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),tt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const ke=R.getParameter(R.UNPACK_ROW_LENGTH),_t=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Wt=R.getParameter(R.UNPACK_SKIP_PIXELS),gt=R.getParameter(R.UNPACK_SKIP_ROWS),tn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ze.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ze.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae);const nt=h.isDataArrayTexture||h.isData3DTexture,St=I.isDataArrayTexture||I.isData3DTexture;if(h.isDepthTexture){const Mt=Ee.get(h),dt=Ee.get(I),pt=Ee.get(Mt.__renderTarget),Nn=Ee.get(dt.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,pt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Dt=0;Dt<de;Dt++)nt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(h).__webglTexture,N,Ae+Dt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,te,rt+Dt)),R.blitFramebuffer(Ce,Ue,fe,_e,Ve,qe,fe,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||h.isRenderTargetTexture||Ee.has(h)){const Mt=Ee.get(h),dt=Ee.get(I);ve.bindFramebuffer(R.READ_FRAMEBUFFER,xa),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ta);for(let pt=0;pt<de;pt++)nt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.__webglTexture,N,Ae+pt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,N),St?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dt.__webglTexture,te,rt+pt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dt.__webglTexture,te),N!==0?R.blitFramebuffer(Ce,Ue,fe,_e,Ve,qe,fe,_e,R.COLOR_BUFFER_BIT,R.NEAREST):St?R.copyTexSubImage3D(tt,te,Ve,qe,rt+pt,Ce,Ue,fe,_e):R.copyTexSubImage2D(tt,te,Ve,qe,Ce,Ue,fe,_e);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else St?h.isDataTexture||h.isData3DTexture?R.texSubImage3D(tt,te,Ve,qe,rt,fe,_e,de,Ke,Re,Ze.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(tt,te,Ve,qe,rt,fe,_e,de,Ke,Ze.data):R.texSubImage3D(tt,te,Ve,qe,rt,fe,_e,de,Ke,Re,Ze):h.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,Ve,qe,fe,_e,Ke,Re,Ze.data):h.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,Ve,qe,Ze.width,Ze.height,Ke,Ze.data):R.texSubImage2D(R.TEXTURE_2D,te,Ve,qe,fe,_e,Ke,Re,Ze);R.pixelStorei(R.UNPACK_ROW_LENGTH,ke),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tn),te===0&&I.generateMipmaps&&R.generateMipmap(tt),ve.unbindTexture()},this.initRenderTarget=function(h){Ee.get(h).__webglFramebuffer===void 0&&Be.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Be.setTextureCube(h,0):h.isData3DTexture?Be.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Be.setTexture2DArray(h,0):Be.setTexture2D(h,0),ve.unbindTexture()},this.resetState=function(){P=0,y=0,O=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(n),t.unpackColorSpace=ot._getUnpackColorSpace()}}function Hu(e,n=1e-4){n=Math.max(n,Number.EPSILON);const t={},i=e.getIndex(),r=e.getAttribute("position"),a=i?i.count:r.count;let s=0;const o=Object.keys(e.attributes),f={},d={},m=[],p=["getX","getY","getZ","getW"],g=["setX","setY","setZ","setW"];for(let b=0,A=o.length;b<A;b++){const M=o[b],U=e.attributes[M];f[M]=new U.constructor(new U.array.constructor(U.count*U.itemSize),U.itemSize,U.normalized);const P=e.morphAttributes[M];P&&(d[M]||(d[M]=[]),P.forEach((y,O)=>{const E=new y.array.constructor(y.count*y.itemSize);d[M][O]=new y.constructor(E,y.itemSize,y.normalized)}))}const _=n*.5,x=Math.log10(1/n),T=Math.pow(10,x),l=_*T;for(let b=0;b<a;b++){const A=i?i.getX(b):b;let M="";for(let U=0,P=o.length;U<P;U++){const y=o[U],O=e.getAttribute(y),E=O.itemSize;for(let v=0;v<E;v++)M+=`${~~(O[p[v]](A)*T+l)},`}if(M in t)m.push(t[M]);else{for(let U=0,P=o.length;U<P;U++){const y=o[U],O=e.getAttribute(y),E=e.morphAttributes[y],v=O.itemSize,D=f[y],w=d[y];for(let G=0;G<v;G++){const z=p[G],W=g[G];if(D[W](s,O[z](A)),E)for(let Y=0,j=E.length;Y<j;Y++)w[Y][W](s,E[Y][z](A))}}t[M]=s,m.push(s),s++}}const c=e.clone();for(const b in e.attributes){const A=f[b];if(c.setAttribute(b,new A.constructor(A.array.slice(0,s*A.itemSize),A.itemSize,A.normalized)),b in d)for(let M=0;M<d[b].length;M++){const U=d[b][M];c.morphAttributes[b][M]=new U.constructor(U.array.slice(0,s*U.itemSize),U.itemSize,U.normalized)}}return c.setIndex(m),c}function Vu(e=17,n=128){const t=new Uint8Array(n*n*4);let i=e;for(let a=0;a<t.length;a+=4){i=Math.imul(i,1664525)+1013904223>>>0;const s=112+(i>>>25);t[a]=t[a+1]=t[a+2]=s,t[a+3]=255}const r=new Vo(t,n,n);return r.wrapS=r.wrapT=kr,r.magFilter=Bt,r.needsUpdate=!0,r}function et(e,n=.36,t=.008){return new sa({color:e,roughness:n,metalness:0,ior:1.43,clearcoat:.28,clearcoatRoughness:.3,sheen:.12,sheenColor:"#FFF2DC",sheenRoughness:.65,bumpMap:Vu(),bumpScale:t,envMapIntensity:.85})}function it(e,n){const t=new st(e,n);return t.castShadow=!0,t.receiveShadow=!0,t}function Vt(e,n,t,i,r=24){const a=new Ln(e,n,t,r,r,r),s=a.attributes.position,o=new be,f=new be,d=new be;for(let m=0;m<s.count;m++)o.fromBufferAttribute(s,m),f.set(vt.clamp(o.x,-e/2+i,e/2-i),vt.clamp(o.y,-n/2+i,n/2-i),vt.clamp(o.z,-t/2+i,t/2-i)),d.subVectors(o,f).normalize().multiplyScalar(i),o.copy(f).add(d),s.setXYZ(m,o.x,o.y,o.z);return a.computeVertexNormals(),a}function ku(e){e.deleteAttribute("normal");const n=Hu(e,1e-5);return n.computeVertexNormals(),_i(n,mi(n)),e.dispose(),n}function mi(e){const n=e.attributes.position,t=new Map;for(let i=0;i<n.count;i++){const r=`${Math.round(n.getX(i)*1e5)}:${Math.round(n.getY(i)*1e5)}:${Math.round(n.getZ(i)*1e5)}`,a=t.get(r);a?a.push(i):t.set(r,[i])}return[...t.values()].filter(i=>i.length>1)}function _i(e,n){const t=e.attributes.normal;for(const i of n){let r=0,a=0,s=0;for(const f of i)r+=t.getX(f),a+=t.getY(f),s+=t.getZ(f);const o=Math.hypot(r,a,s)||1;for(const f of i)t.setXYZ(f,r/o,a/o,s/o)}t.needsUpdate=!0}function gi(e,n,t){const i=[],r=[],a=[];for(let o=0;o<=e;o++)for(let f=0;f<=n;f++)i.push(...t(f/n,o/e).toArray()),r.push(f/n,o/e);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const d=f+o*(n+1),m=d+n+1;a.push(d,m,d+1,m,m+1,d+1)}const s=new pi;return s.setAttribute("position",new or(i,3)),s.setAttribute("uv",new or(r,2)),s.setIndex(a),s.computeVertexNormals(),s}function Tt(e,n){const t=e.attributes.position,i=new Float32Array(t.count*3);for(let r=0;r<t.count;r++)n(t.getX(r),t.getY(r),t.getZ(r)).toArray(i,r*3);e.setAttribute("color",new cn(i,3))}function At(e,n,t){return Math.sin(e*13.7+Math.sin(t*8.1)*2)*.4+Math.sin(t*24.3+n*19.7)*Math.cos(e*31.1)*.25+Math.sin(e*83.1+t*67.5)*Math.cos(n*93.2+t*42.2)*.13}function Sn(e,n){const t=document.createElement("canvas");t.width=1024,t.height=384;const i=t.getContext("2d");if(!i)return null;i.fillStyle=n?`#${n.getHexString()}`:"#B0B0B0",i.fillRect(0,0,t.width,t.height),i.fillStyle=n?"rgba(121,86,18,0.21)":"#3D3D3D",i.textAlign="center",i.textBaseline="middle",i.font="bold 147px Georgia,serif",i.fillText("BUTTER",512,e?185:215),i.font="29px Georgia,serif",i.fillText("N O M S Q U I S H",512,e?305:88),i.strokeStyle=n?"rgba(121,86,18,0.15)":"#646464",i.lineWidth=4,i.beginPath(),i.roundRect(32,25,960,330,14),i.stroke();const r=new la(t);return n&&(r.colorSpace=ui),r.anisotropy=4,r}function zu(e,n=26){const t=new Ct,i=e.toUpperCase()==="#FDE68A"?new ye("#E9C34B"):new ye(e),r=et(i,.34,.005),a=r.clone(),s=r.clone();a.bumpMap=Sn(!1)??r.bumpMap,s.bumpMap=Sn(!0)??r.bumpMap,a.map=Sn(!1,i),s.map=Sn(!0,i),a.map&&a.color.set("#FFFFFF"),s.map&&s.color.set("#FFFFFF"),a.bumpScale=s.bumpScale=.045;const o=Vt(2.65,.84,1.04,.075,n);Tt(o,(d,m,p)=>new ye().setScalar(.96+At(d,m,p)*.025));for(const d of[r,a,s])d.vertexColors=!0;t.add(it(o,[r,r,s,r,a,r]));const f=et(i.clone().multiplyScalar(.94),.4,.002);for(const d of[-1,1]){const m=it(Vt(.022,.69,.87,.01,3),f);m.position.x=d*1.321,t.add(m);const p=it(Vt(.018,.025,.82,.008,2),f);p.position.set(d*1.24,.413,0),t.add(p)}return t}function Wu(e,n=38){const t=new Ct,i=Vt(1.65,1.5,1.5,.12,n),r=i.attributes.position,a=i.attributes.normal,s=[[[-.38,.24,.24],[.3,-.28,.29],[.4,.44,.16],[-.48,-.45,.12]],[[-.3,-.35,.25],[.32,.26,.23]],[[-.35,-.32,.26],[.36,.24,.27],[-.33,.4,.15],[.42,-.43,.13]],[[-.26,.26,.25],[.36,-.22,.23]],[[-.35,.3,.28],[.34,-.24,.27],[-.4,-.43,.14],[.38,.48,.13]],[[-.28,.28,.26],[.3,-.3,.24]]];for(let d=0;d<r.count;d++){const m=Math.floor(d/(n+1)**2),p=r.getX(d),g=r.getY(d),_=r.getZ(d),x=m<2?_:p,T=m<4&&m>=2?_:g;let l=0;for(const[b,A,M]of s[m]){const U=((x-b)**2+(T-A)**2)/(M*M);U<1&&(l+=M*.73*(1-U)**1.55)}const c=Math.sin(p*8+g*3)*Math.sin(_*7-g*4)*.006;r.setXYZ(d,p-a.getX(d)*(l+c),g-a.getY(d)*(l+c),_-a.getZ(d)*(l+c))}i.computeVertexNormals();const o=e.toUpperCase()==="#FDE68A"?new ye("#EAB92D"):new ye(e),f=et(o,.25,.004);return f.clearcoat=.55,f.clearcoatRoughness=.22,Tt(i,(d,m,p)=>new ye().setScalar(.97+At(d,m,p)*.025)),f.vertexColors=!0,t.add(it(i,f)),t}function Xu(e,n=72){const t=new Ct;for(let s=0;s<3;s++){const o=.99-s*.025,f=[];for(let _=0;_<=16;_++)f.push(new ut(_/16*(o-.1),-.16-Math.sin(_/16*Math.PI)*.006));for(let _=0;_<=12;_++){const x=-Math.PI/2+_/12*Math.PI;f.push(new ut(o-.11+Math.cos(x)*.11,Math.sin(x)*.16))}for(let _=16;_>=0;_--)f.push(new ut(_/16*(o-.1),.16+Math.sin(_/16*Math.PI)*.014));const d=ku(new ko(f,n)),m=d.attributes.position;for(let _=0;_<m.count;_++){const x=m.getX(_),T=m.getZ(_),l=Math.atan2(T,x),c=m.getY(_),b=1+Math.sin(l*7+s)*.009+Math.cos(l*11-s)*.004;m.setXYZ(_,x*b,c+At(x,c+s,T)*.008,T*b)}Tt(d,(_,x,T)=>{const l=Math.hypot(_,T)/o,c=vt.smoothstep(Math.abs(x),.105,.158)*(1-vt.smoothstep(l,.88,1));return new ye("#E9C78C").lerp(new ye("#8F481C"),c*(.93+At(_,x+s,T)*.1))}),d.computeVertexNormals(),_i(d,mi(d));const p=et("#FFFFFF",.53,.025);p.vertexColors=!0,p.clearcoat=.08;const g=it(d,p);g.position.set(Math.sin(s*2.1)*.035,-.38+s*.324,Math.cos(s*2.1)*.025),g.rotation.y=s*.31,t.add(g)}const i=et("#A96A25",.18,.003);i.clearcoat=.85;const r=it(new ca(.56,.58,.014,72,1),i);r.position.set(-.04,.442,.04),r.scale.set(1,1,.87),t.add(r);const a=it(Vt(.48,.135,.42,.045,8),et("#F9DE7D",.32));return a.position.set(-.12,.505,.03),a.rotation.y=.23,t.add(a),t}function Yu(e){const n=new Ct,t=new zo(.72,.34,36,96);t.rotateX(-Math.PI/2),Tt(t,(f,d,m)=>new ye("#F1CF96").lerp(new ye("#B97132"),vt.smoothstep(Math.abs(d),.025,.22)*(.68+At(f,d,m)*.22)));const i=et("#FFFFFF",.53,.02);i.vertexColors=!0,n.add(it(t,i));const r=gi(20,100,(f,d)=>{const m=f*Math.PI*2,g=(-.06-(Math.max(0,Math.sin(m*7+.8))**10*.45+Math.max(0,Math.sin(m*5-1.2))**12*.25))*(1-d)+(Math.PI+.04)*d,_=.72+Math.cos(g)*.354;return new be(Math.cos(m)*_,Math.sin(g)*.344+.008,Math.sin(m)*_)}),a=et(e,.24,.004);a.side=xt,a.clearcoat=.65,n.add(it(r,a));const s=["#F1D36C","#F7F0E3","#B86D70","#8A6547","#A4BA8D"].map(f=>et(f,.5,.003)),o=new Wo(.014,.065,3,6);for(let f=0;f<52;f++){const d=f*2.399963,m=.72+Math.sin(f*7.1)*.22,p=Math.sqrt(Math.max(0,.354**2-(m-.72)**2)),g=it(o,s[f%s.length]);g.position.set(Math.cos(d)*m,p+.019,Math.sin(d)*m),g.rotation.set(Math.PI/2,Math.sin(f*9)*.3,d+f*1.5),n.add(g)}return n}function _a(e,n,t="#73863A"){const i=gi(8,8,(a,s)=>new be((a-.5)*n*Math.sin(s*Math.PI),Math.sin(s*Math.PI)*.05-Math.abs(a-.5)*.04,s*e)),r=et(t,.65,.008);return r.side=xt,it(i,r)}function qu(e){const n=new Ct,t=new jt(1,64,40),i=t.attributes.position;for(let p=0;p<i.count;p++){const g=i.getX(p),_=i.getY(p),x=i.getZ(p);i.setXYZ(p,g*(.96-_*.09),Math.max(-.39,_*.59),x*(.88-_*.07))}t.computeVertexNormals(),Tt(t,(p,g,_)=>new ye(e).lerp(new ye("#FFF5EA"),.18+At(p,g,_)*.045));const r=et("#FFFFFF",.72,.024);r.vertexColors=!0,r.clearcoat=.015,n.add(it(t,r));const a=new jt(1,40,32),s=a.attributes.position;for(let p=0;p<s.count;p++){const g=s.getY(p),_=.74+g*.25;s.setXYZ(p,s.getX(p)*.32*_,g*.34,s.getZ(p)*.3*_)}a.computeVertexNormals(),Tt(a,(p,g,_)=>new ye("#C85A59").lerp(new ye("#E79586"),vt.clamp(.24+g*.6+At(p,g,_)*.1,0,1)));const o=et("#FFFFFF",.39,.009);o.vertexColors=!0;const f=it(a,o);f.position.set(.08,.75,.02),n.add(f);const d=new jt(1,6,6),m=et("#CDA15D",.7,.001);for(let p=0;p<66;p++){const g=1-(p+.5)/66*2,_=p*2.399963,x=Math.sqrt(1-g*g),T=.74+g*.25,l=it(d,m);l.position.set(Math.cos(_)*x*.324*T+.08,g*.343+.75,Math.sin(_)*x*.304*T+.02),l.scale.set(.009,.017,.007),l.rotation.y=-_,l.rotation.z=(p%3-1)*.12,n.add(l)}for(let p=0;p<6;p++){const g=_a(.22,.1);g.position.set(.08,1.045,.02),g.rotation.set(-.16,p/6*Math.PI*2,0),n.add(g)}return n}function Ku(){const e=new Ct,n=gi(48,96,(s,o)=>{const f=o<.4?o/.4*.97:o>.6?(1-o)/.4*.97:.97+Math.sin((o-.4)/.2*Math.PI)*.035,d=o<.4?-.28:o>.6?-.2+Math.sin(f*Math.PI)*.025:-.24-Math.cos((o-.4)/.2*Math.PI)*.04,m=s*Math.PI*2,p=f*(1+Math.sin(m*3)*.085+Math.cos(m*7)*.035);return new be(Math.cos(m)*p*1.13,d+Math.cos(m*5)*f**6*.006,Math.sin(m)*p*.81)});Tt(n,(s,o,f)=>new ye("#FFF8E9").lerp(new ye("#D3AE70"),vt.smoothstep(Math.hypot(s/1.13,f/.81),.88,1.05)*(.35+At(s,o,f)*.2)));const t=et("#FFFFFF",.39,.014);t.vertexColors=!0,t.side=xt,e.add(it(n,t));const i=new jt(.43,56,24,0,Math.PI*2,0,Math.PI/2);i.scale(1,.65,.96),Tt(i,(s,o)=>new ye("#F8B329").lerp(new ye("#E59119"),.25-o*.4));const r=et("#FFFFFF",.19,.002);r.vertexColors=!0,r.clearcoat=.7;const a=it(i,r);return a.position.set(.08,-.19,-.025),e.add(a),e}function Fr(){const e=new Xo;return e.moveTo(-.73,-.84),e.quadraticCurveTo(-.88,-.84,-.88,-.67),e.lineTo(-.85,.19),e.bezierCurveTo(-1.1,.29,-1.02,.63,-.74,.76),e.bezierCurveTo(-.37,.99,.38,.96,.74,.76),e.bezierCurveTo(1.02,.63,1.1,.29,.85,.19),e.lineTo(.88,-.67),e.quadraticCurveTo(.88,-.84,.73,-.84),e.closePath(),e}function $u(){const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d");if(!n)return null;n.fillStyle="#F5DBAE",n.fillRect(0,0,512,512);let t=401;const i=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296);for(let a=0;a<4800;a++){const s=i()*512,o=i()*512,f=.5+i()**4*4;n.fillStyle=`rgba(144,102,53,${.06+i()*.1})`,n.beginPath(),n.ellipse(s,o,f,f*(.5+i()),i()*Math.PI,0,Math.PI*2),n.fill()}const r=new la(e);return r.colorSpace=ui,r}function Zu(e){const n=new Ct,t=new sr(Fr(),{depth:.43,bevelEnabled:!0,bevelSegments:6,bevelSize:.065,bevelThickness:.055,curveSegments:32});t.translate(0,0,-.215);const i=et("#BA793D",.62,.035);Tt(t,(m,p,g)=>new ye().setScalar(.94+At(m,p,g)*.09)),i.vertexColors=!0,n.add(it(t,i));const r=new sr(Fr(),{depth:.015,bevelEnabled:!0,bevelSegments:4,bevelSize:.035,bevelThickness:.015,curveSegments:32});r.scale(.86,.86,1);const a=r.attributes.position,s=r.attributes.uv;for(let m=0;m<a.count;m++)s.setXY(m,(a.getX(m)+1)/2,(a.getY(m)+1)/2);const o=et("#FFFFFF",.74,.025);o.map=$u(),o.clearcoat=0;const f=it(r,o);f.position.z=.27,n.add(f);const d=it(Vt(.49,.4,.075,.055,10),et(new ye(e).lerp(new ye("#FFF0B7"),.1),.33));return d.position.set(.07,-.02,.33),d.rotation.z=-.13,n.add(d),n}function ju(e){const n=new Ct,t=new jt(1,64,40),i=t.attributes.position;for(let o=0;o<i.count;o++){const f=i.getX(o),d=i.getY(o),m=i.getZ(o),p=Math.exp(-f*f*180)*Math.max(0,m)*.08;i.setXYZ(o,f*(1-d*.08),d*.94,m*.94-p)}Tt(t,(o,f,d)=>new ye(e).lerp(new ye("#DF8C86"),vt.clamp(o*.28+.3+At(o,f,d)*.1,0,.6))),t.computeVertexNormals();const r=et("#FFFFFF",.68,.02);r.vertexColors=!0,n.add(it(t,r));const a=it(new ca(.035,.048,.22,10),et("#8F6B43",.8));a.position.y=.98,a.rotation.z=-.15,n.add(a);const s=_a(.55,.28,"#879848");return s.position.set(.03,1.01,0),s.rotation.set(-.1,-1.3,.2),n.add(s),n}const fi={butter:zu,cheese:Wu,pancakes:Xu,donut:Yu,egg:Ku,mochi:qu,loaf:Zu,peach:ju},Qu=e=>e in fi;function Ju(e,n,t=!1){if(t&&(e==="butter"||e==="cheese"||e==="pancakes")){const i={butter:14,cheese:24,pancakes:40};return fi[e](n,i[e])}return fi[e](n)}function ed(e,n,t=!1){if(Qu(e))return Ju(e,n,t);const i=new Ct,r=et(n,.61,.014);r.clearcoat=.055,r.sheen=.28;const a=et("#61504A",.56,.003),s=et("#DBA3A2",.66,.007),o=new jt(1,48,32);function f(x,T,l,c,b,A,M=r){const U=it(o,M);return U.position.set(x,T,l),U.scale.set(c,b,A),i.add(U),U}const d=o.clone(),m=d.attributes.position;for(let x=0;x<m.count;x++){const T=m.getX(x),l=m.getY(x),c=m.getZ(x);m.setXYZ(x,T*(1-l*.12),Math.max(-.65,l*.78),c*.82)}Tt(d,(x,T,l)=>new ye().setScalar(.98+At(x,T,l)*.015)),d.computeVertexNormals();const p=r.clone();if(p.vertexColors=!0,i.add(it(d,p)),e==="bunny"){for(const x of[-1,1]){const T=f(x*.35,.9,-.1,.19,.57,.17);T.rotation.z=x*-.15;const l=f(x*.36,.97,.045,.065,.32,.013,s);l.rotation.z=x*-.15}f(.7,-.39,-.47,.24,.24,.24)}if(e==="bear"){for(const x of[-1,1])f(x*.65,.61,-.03,.28,.27,.17);f(0,-.02,.8,.2,.135,.035,et("#F5E5CE",.65))}if(e==="cat"){for(const x of[-1,1]){const T=f(x*.59,.59,-.03,.22,.32,.18);T.rotation.z=x*-.32}f(.85,-.4,-.16,.37,.13,.22).rotation.y=.6}if(e==="frog")for(const x of[-1,1])f(x*.53,.59,.18,.28,.25,.26);const g=e==="frog"?.63:.09,_=e==="frog"?.41:.789;for(const x of[-1,1])f(x*(e==="frog"?.53:.25),g,_,.037,.045,.009,a),f(x*.45,-.09,.733,.073,.032,.007,s),f(x*.51,-.56,.45,.25,.12,.29);return e!=="frog"&&f(0,-.035,.828,.027,.018,.006,s),i}function td(e){const n=new Set,t=new Set,i=new Set;e.traverse(r=>{if(r instanceof st){n.add(r.geometry);for(const a of Array.isArray(r.material)?r.material:[r.material])t.add(a)}}),n.forEach(r=>r.dispose()),t.forEach(r=>{for(const a of Object.values(r))a instanceof oa&&i.add(a);r.dispose()}),i.forEach(r=>r.dispose())}function ga(e,n,t,i,r){const a=e[t]-e[n],s=e[t+1]-e[n+1],o=e[t+2]-e[n+2],f=e[i]-e[n],d=e[i+1]-e[n+1],m=e[i+2]-e[n+2],p=e[r]-e[n],g=e[r+1]-e[n+1],_=e[r+2]-e[n+2];return(a*(d*_-m*g)+s*(m*p-f*_)+o*(f*g-d*p))/6}function nd({size:e,cells:n,shape:t="box",topInset:i=0}){const[r,a,s]=n;if(!Number.isFinite(i)||i<0||i>=e[1])throw new Error("The cage top inset must fit inside the body.");if(n.some(b=>!Number.isInteger(b)||b<1)||e.some(b=>!Number.isFinite(b)||b<=0))throw new Error("A soft body needs positive dimensions and whole lattice subdivisions.");const o=(r+1)*(a+1)*(s+1);if(o>65535)throw new Error("The soft-body lattice exceeds its index capacity.");const f=new Float64Array(o*3),d=(b,A,M)=>b+(r+1)*(A+(a+1)*M);for(let b=0;b<=s;b++)for(let A=0;A<=a;A++)for(let M=0;M<=r;M++){const U=d(M,A,b)*3,P=M/r*2-1,y=b/s*2-1;if(f[U]=P*e[0]*.5*(t==="cylinder"?Math.sqrt(1-y*y/2):1),f[U+1]=(A/a-.5)*e[1],f[U+2]=y*e[2]*.5*(t==="cylinder"?Math.sqrt(1-P*P/2):1),i){const O=Math.exp(-((f[U]/(e[0]*.15))**4+(f[U+2]/(e[2]*.15))**4));f[U+1]-=i*(1-O)*(A/a)**3}}const m=[],p=[],g=new Set,_=[],x=[],T=[[0,1,3,7],[0,3,2,7],[0,2,6,7],[0,6,4,7],[0,4,5,7],[0,5,1,7]];for(let b=0;b<s;b++)for(let A=0;A<a;A++)for(let M=0;M<r;M++){const U=Array.from({length:8},(P,y)=>d(M+(y&1),A+(y>>1&1),b+(y>>2&1)));for(const P of T){const y=P.map(E=>U[E]);let O=ga(f,y[0]*3,y[1]*3,y[2]*3,y[3]*3);O<0&&([y[0],y[1]]=[y[1],y[0]],O=-O),m.push(...y),p.push(O);for(let E=0;E<4;E++)for(let v=E+1;v<4;v++){const D=Math.min(y[E],y[v]),w=Math.max(y[E],y[v]),G=`${D}:${w}`;g.has(G)||(g.add(G),_.push(D,w),x.push(Math.hypot(f[D*3]-f[w*3],f[D*3+1]-f[w*3+1],f[D*3+2]-f[w*3+2])))}}}const l=new Map;for(let b=0;b<m.length;b+=4)for(const A of[[1,2,3],[0,3,2],[0,1,3],[0,2,1]]){const M=A.map(P=>m[b+P]),U=[...M].sort((P,y)=>P-y).join(":");l.has(U)?l.delete(U):l.set(U,M)}const c=[...l.values()].flat();return{rest:f,tetrahedra:new Uint16Array(m),edges:new Uint16Array(_),lengths:new Float64Array(x),volumes:new Float64Array(p),surface:new Uint16Array(c),surfaceVertices:new Uint16Array([...new Set(c)]),radius:Math.min(e[0]/r,e[1]/a,e[2]/s)*.51}}function id(e,n,t,i,r=e.lengths){const{edges:a,lengths:s}=e;for(let o=0;o<s.length;o++){const f=a[o*2]*3,d=a[o*2+1]*3,m=n[f]-n[d],p=n[f+1]-n[d+1],g=n[f+2]-n[d+2],_=Math.hypot(m,p,g);if(_<1e-9)continue;const x=Math.max(s[o]*.55,Math.min(s[o]*1.55,_)),T=x!==_?(x-_)*.5:(r[o]-_-i*t[o])/(2+i);x===_&&(t[o]+=T);const l=T/_;n[f]+=m*l,n[f+1]+=p*l,n[f+2]+=g*l,n[d]-=m*l,n[d+1]-=p*l,n[d+2]-=g*l}}const Mn=new Float64Array(12),rd=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]];function ad(e,n,t,i){const{tetrahedra:r,volumes:a}=e;for(let s=0;s<a.length;s++){const o=s*4;let f=i;for(let p=0;p<4;p++){const g=rd[p],_=r[o+g[0]]*3,x=r[o+g[1]]*3,T=r[o+g[2]]*3,l=n[x]-n[_],c=n[x+1]-n[_+1],b=n[x+2]-n[_+2],A=n[T]-n[_],M=n[T+1]-n[_+1],U=n[T+2]-n[_+2],P=(c*U-b*M)/6,y=(b*A-l*U)/6,O=(l*M-c*A)/6;Mn[p*3]=P,Mn[p*3+1]=y,Mn[p*3+2]=O,f+=P*P+y*y+O*O}if(f<1e-12)continue;const d=ga(n,r[o]*3,r[o+1]*3,r[o+2]*3,r[o+3]*3),m=(a[s]-d-i*t[s])/f;t[s]+=m;for(let p=0;p<4;p++){const g=r[o+p]*3;for(let _=0;_<3;_++)n[g+_]+=Mn[p*3+_]*m}}}function od(e,n,t,i){const{edges:r}=e;for(let a=0;a<r.length;a+=2){const s=r[a]*3,o=r[a+1]*3,f=n[s]-n[o],d=n[s+1]-n[o+1],m=n[s+2]-n[o+2],p=f*f+d*d+m*m;if(p<1e-12)continue;const g=((t[s]-t[o])*f+(t[s+1]-t[o+1])*d+(t[s+2]-t[o+2])*m)/p*i*.5;t[s]-=f*g,t[s+1]-=d*g,t[s+2]-=m*g,t[o]+=f*g,t[o+1]+=d*g,t[o+2]+=m*g}}class sd{target;goal;contacts=[];pressure=0;elapsed=0;releaseAt=1/0;constructor(n,t=[]){this.target=[...n.position],this.goal=[...n.position];const i=(r,a)=>{this.contacts.push({...r.attachment,offset:r.position.map((s,o)=>s-n.position[o]),closing:a,lambda:new Float64Array(3)})};t.length||i(n,[0,0,0]);for(const{front:r,back:a,restDistance:s,pressure:o=1}of t){const f=Math.hypot(...r.position.map((p,g)=>a.position[g]-p)),d=Math.max(0,f-s*(1-.36*o))/Math.max(f*2,1e-9),m=r.position.map((p,g)=>(a.position[g]-p)*d);i(r,m),i(a,m.map(p=>-p))}}prepare(n){if(this.elapsed+=n,this.elapsed>=this.releaseAt)return!1;const t=Math.hypot(...this.goal.map((a,s)=>a-this.target[s])),i=Math.min(1-Math.exp(-38*n),8*n/Math.max(t,1e-9));for(let a=0;a<3;a++)this.target[a]+=(this.goal[a]-this.target[a])*i;const r=Math.min(1,this.elapsed/.2);this.pressure=r*r*(3-2*r);for(const a of this.contacts)a.lambda.fill(0);return!0}end(n){return this.releaseAt=n,this.elapsed<n}solve(n,t){const i=4e-6/(t*t);for(const{indices:r,weights:a,offset:s,closing:o,lambda:f}of this.contacts){let d=i;for(const m of a)d+=m*m;for(let m=0;m<3;m++){let p=0;for(let x=0;x<r.length;x++)p+=n[r[x]*3+m]*a[x];const _=(this.target[m]+s[m]+o[m]*this.pressure-p-i*f[m])/d;f[m]+=_;for(let x=0;x<r.length;x++)n[r[x]*3+m]+=a[x]*_}}}}class cd{constructor(n){this.lattice=n,this.lengths=n.lengths.slice(),this.fast=new Float64Array(this.lengths.length),this.slow=new Float64Array(this.lengths.length)}lattice;lengths;active=!1;fast;slow;capture(n){for(let t=0;t<this.fast.length;t++)this.fast[t]=this.strain(n,t);this.updateTargets()}advance(n,t,i){for(let r=0;r<this.fast.length;r++)if(t){const a=this.strain(n,r);this.fast[r]+=(a-this.fast[r])*(1-Math.exp(-12*i)),this.slow[r]+=(a-this.slow[r])*(1-Math.exp(-1.5*i))}else this.fast[r]*=Math.exp(-i/(1.15+Math.abs(this.fast[r])*2)),this.slow[r]*=Math.exp(-i/(4.5+Math.abs(this.slow[r])*4));this.updateTargets()}strain(n,t){const i=this.lattice.edges[t*2]*3,r=this.lattice.edges[t*2+1]*3,a=Math.hypot(n[i]-n[r],n[i+1]-n[r+1],n[i+2]-n[r+2]);return Math.max(-.4,Math.min(.5,a/this.lattice.lengths[t]-1))}updateTargets(){let n=0;for(let t=0;t<this.lengths.length;t++){const i=this.fast[t]*.86+this.slow[t]*.1;this.lengths[t]=this.lattice.lengths[t]*(1+i),n=Math.max(n,Math.abs(i))}this.active=n>.0025}}class ld{constructor(n){this.options=n,this.lattice=nd(n);const{rest:t}=this.lattice,i=n.position??[0,0,0],r=Math.cos(n.rotation??0),a=Math.sin(n.rotation??0);for(let s=0;s<t.length;s+=3){const o=t[s],f=t[s+2];t[s]=o*r+f*a+i[0],t[s+1]+=i[1],t[s+2]=f*r-o*a+i[2]}this.positions=t.slice(),this.previous=t.slice(),this.velocities=new Float64Array(t.length),this.incoming=new Float64Array(t.length),this.contacts=new Float64Array(t.length),this.edgeLambdas=new Float64Array(this.lattice.lengths.length),this.volumeLambdas=new Float64Array(this.lattice.volumes.length),this.edgeCompliance=n.edgeCompliance??8e-5,this.volumeCompliance=n.volumeCompliance??1e-8,n.viscoelastic&&(this.memory=new cd(this.lattice))}options;lattice;positions;previous;velocities;incoming;contacts;edgeLambdas;volumeLambdas;edgeCompliance;volumeCompliance;memory;grab=null;get center(){const n=[0,0,0],t=this.positions.length/3;for(let i=0;i<this.positions.length;i++)n[i%3]+=this.positions[i]/t;return n}beginGrab(n,t,i=[]){this.grab=new sd({attachment:n,position:t},i)}moveGrab(n){this.grab&&(this.grab.goal=[...n])}release(n,t=0){if(this.grab&&!this.grab.end(t)&&(this.memory?.capture(this.positions),this.grab=null),!n)return;const i=Math.hypot(...n),r=i>12?12/i:1;for(let a=0;a<this.velocities.length;a++)this.velocities[a]+=n[a%3]*r}prepare(n,t){this.grab&&!this.grab.prepare(n)&&(this.memory?.capture(this.positions),this.grab=null),this.memory?.advance(this.positions,this.grab!==null,n),this.previous.set(this.positions),this.contacts.fill(0),this.edgeLambdas.fill(0),this.volumeLambdas.fill(0);const i=Math.exp(-.45*n);for(let r=0;r<this.positions.length;r+=3){this.velocities[r+1]+=t*n;const a=Math.hypot(this.velocities[r],this.velocities[r+1],this.velocities[r+2]),s=i*(a>16?16/a:1);for(let o=0;o<3;o++)this.velocities[r+o]*=s,this.incoming[r+o]=this.velocities[r+o],this.positions[r+o]+=this.velocities[r+o]*n}}solve(n){id(this.lattice,this.positions,this.edgeLambdas,this.edgeCompliance/(n*n),this.memory?.lengths),this.grab?.solve(this.positions,n),ad(this.lattice,this.positions,this.volumeLambdas,this.volumeCompliance/(n*n))}finish(n){for(let r=0;r<this.positions.length;r++)this.velocities[r]=(this.positions[r]-this.previous[r])/n;od(this.lattice,this.positions,this.velocities,1-Math.exp(-(this.memory?55:20)*n));let t=0,i=!1;for(let r=0;r<this.positions.length;r+=3){const a=this.contacts[r],s=this.contacts[r+1],o=this.contacts[r+2],f=Math.hypot(a,s,o);if(f>0){const d=a/f,m=s/f,p=o/f,g=this.incoming[r]*d+this.incoming[r+1]*m+this.incoming[r+2]*p;g<-1&&(i=!0);const _=this.velocities[r]*d+this.velocities[r+1]*m+this.velocities[r+2]*p,x=Math.max(-_,0);this.velocities[r]+=d*x,this.velocities[r+1]+=m*x,this.velocities[r+2]+=p*x;const T=this.velocities[r]-d*Math.max(_,0),l=this.velocities[r+1]-m*Math.max(_,0),c=this.velocities[r+2]-p*Math.max(_,0),b=Math.hypot(T,l,c),A=Math.min(1,(Math.max(0,-g)+9.8*n)*.65/Math.max(b,1e-9));this.velocities[r]-=T*A,this.velocities[r+1]-=l*A,this.velocities[r+2]-=c*A}t+=this.velocities[r]**2+this.velocities[r+1]**2+this.velocities[r+2]**2}return i&&!this.grab&&this.memory?.capture(this.positions),t/(this.positions.length/3)}}function fd(e,n,t,i){const r=n[t]*3,a=n[t+1]*3,s=n[t+2]*3,o=n[t+3]*3,f=e[a]-e[r],d=e[a+1]-e[r+1],m=e[a+2]-e[r+2],p=e[s]-e[r],g=e[s+1]-e[r+1],_=e[s+2]-e[r+2],x=e[o]-e[r],T=e[o+1]-e[r+1],l=e[o+2]-e[r+2],c=i[0]-e[r],b=i[1]-e[r+1],A=i[2]-e[r+2],M=f*(g*l-_*T)+d*(_*x-p*l)+m*(p*T-g*x),U=(c*(g*l-_*T)+b*(_*x-p*l)+A*(p*T-g*x))/M,P=(c*(T*m-l*d)+b*(l*f-x*m)+A*(x*d-T*f))/M,y=(c*(d*_-m*g)+b*(m*p-f*_)+A*(f*g-d*p))/M;return[1-U-P-y,U,P,y]}class ud{constructor(n){this.lattice=n,this.spacing=n.radius*3;const{rest:t,tetrahedra:i}=n;for(let r=0;r<i.length;r+=4){const a=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let o=0;o<4;o++)for(let f=0;f<3;f++){const d=Math.floor(t[i[r+o]*3+f]/this.spacing);a[f]=Math.min(a[f],d),s[f]=Math.max(s[f],d)}for(let o=a[0];o<=s[0];o++)for(let f=a[1];f<=s[1];f++)for(let d=a[2];d<=s[2];d++){const m=`${o}:${f}:${d}`,p=this.buckets.get(m);p?p.push(r):this.buckets.set(m,[r])}}}lattice;buckets=new Map;spacing;at(n){const t=n.map(o=>Math.floor(o/this.spacing)).join(":"),i=this.buckets.get(t)??Array.from({length:this.lattice.volumes.length},(o,f)=>f*4);let r=1/0,a=0,s=[1,0,0,0];for(const o of i){const f=fd(this.lattice.rest,this.lattice.tetrahedra,o,n),d=f.reduce((m,p)=>m+Math.max(0,-p,p-1)**2,0);if(!(d>=r)&&(r=d,a=o,s=f,d<1e-12))break}return{indices:Array.from(this.lattice.tetrahedra.subarray(a,a+4)),weights:s}}}class dd{constructor(n,t){this.lattice=n,this.fallback=new ud(n),this.spacing=t.size.map((i,r)=>i/t.cells[r]),this.cosine=Math.cos(t.rotation??0),this.sine=Math.sin(t.rotation??0)}lattice;fallback;spacing;cosine;sine;moment=new Float64Array(20);at(n){const{rest:t}=this.lattice,i=[],r=[],a=[],s=this.moment;s.fill(0);for(let o=0;o<t.length;o+=3){const f=t[o]-n[0],d=t[o+2]-n[2],m=(f*this.cosine-d*this.sine)/this.spacing[0],p=(t[o+1]-n[1])/this.spacing[1],g=(f*this.sine+d*this.cosine)/this.spacing[2],_=Math.hypot(m,p,g)/2.15;if(_>=1)continue;const x=(1-_)**4*(4*_+1),T=[1,m,p,g];i.push(o/3),r.push(x),a.push(T);for(let l=0;l<4;l++)for(let c=0;c<4;c++)s[l*5+c]+=x*T[l]*T[c]}s[4]=1;for(let o=0;o<4;o++){let f=o;for(let m=o+1;m<4;m++)Math.abs(s[m*5+o])>Math.abs(s[f*5+o])&&(f=m);if(Math.abs(s[f*5+o])<1e-10)return this.fallback.at(n);for(let m=o;m<5;m++){const p=s[o*5+m];s[o*5+m]=s[f*5+m],s[f*5+m]=p}const d=s[o*5+o];for(let m=o;m<5;m++)s[o*5+m]/=d;for(let m=0;m<4;m++){if(m===o)continue;const p=s[m*5+o];for(let g=o;g<5;g++)s[m*5+g]-=p*s[o*5+g]}}return{indices:i,weights:r.map((o,f)=>o*a[f].reduce((d,m,p)=>d+m*s[p*5+4],0))}}}class pd{body;skins=[];group=new Ct;constructor(n,t){const i=new oi().setFromObject(n),r=i.getCenter(new be),a=i.getSize(new be).multiplyScalar(t.scale);this.body=new ld({size:[a.x*(t.cylinder?1.035:1),a.y,a.z*(t.cylinder?1.035:1)],cells:t.cells,shape:t.cylinder?"cylinder":"box",topInset:t.cylinder?.135*t.scale:0,position:t.position,rotation:t.rotation,edgeCompliance:t.cylinder?6e-5:1e-4,volumeCompliance:1e-9,viscoelastic:!0});const s=new dd(this.body.lattice,this.body.options);n.scale.setScalar(t.scale),n.rotation.y=t.rotation,r.multiplyScalar(t.scale).applyAxisAngle(new be(0,1,0),t.rotation),n.position.fromArray(t.position).sub(r),n.updateMatrixWorld(!0);const o=[],f=new Set;n.traverse(d=>{d instanceof st&&o.push(d)});for(const d of o){f.add(d.geometry);const m=d.geometry.clone();m.applyMatrix4(d.matrixWorld),d.geometry=m;const p=m.getAttribute("position");p.setUsage(Yo);const g=[],_=[],x=new Uint32Array(p.count+1);for(let T=0;T<p.count;T++){const l=s.at([p.getX(T),p.getY(T),p.getZ(T)]);g.push(...l.indices),_.push(...l.weights),x[T+1]=g.length}d.position.set(0,0,0),d.quaternion.identity(),d.scale.set(1,1,1),d.frustumCulled=!1,this.group.add(d),this.skins.push({mesh:d,indices:new Uint16Array(g),weights:new Float32Array(_),offsets:x,normals:mi(m)})}f.forEach(d=>d.dispose())}update(){const n=this.body.positions;for(const{mesh:t,indices:i,weights:r,offsets:a,normals:s}of this.skins){const o=t.geometry.attributes.position,f=o.array;for(let d=0;d<o.count;d++){let m=0,p=0,g=0;for(let _=a[d];_<a[d+1];_++){const x=i[_]*3,T=r[_];m+=n[x]*T,p+=n[x+1]*T,g+=n[x+2]*T}f[d*3]=m,f[d*3+1]=p,f[d*3+2]=g}o.needsUpdate=!0,t.geometry.computeVertexNormals(),_i(t.geometry,s),t.geometry.computeBoundingBox(),t.geometry.computeBoundingSphere()}}createGrip(n,t){const i=this.attachment(n);if(!i)return null;const r=this.skins.map(({mesh:T})=>T),a=new oi;for(const T of r)a.union(T.geometry.boundingBox);const s=a.getSize(new be),o=s.length()+.1,f=t.clone().normalize(),d=new be().crossVectors(f,new be(0,1,0));d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();const m=new be().crossVectors(d,f).normalize(),p=Math.min(s.x,s.y,s.z)*.32,g=new si,_=new si,x=[];for(const[T,l]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]]){const c=n.point.clone().addScaledVector(d,T*p).addScaledVector(m,l*p);g.set(c.clone().addScaledVector(f,-o),f),_.set(c.clone().addScaledVector(f,o),f.clone().negate());const b=g.intersectObjects(r,!1)[0],A=_.intersectObjects(r,!1)[0];if(!b||!A||b.point.distanceToSquared(A.point)<1e-6)continue;const M=this.attachment(b),U=this.attachment(A);if(M&&U){const P=y=>new be(...[0,1,2].map(O=>y.indices.reduce((E,v,D)=>E+this.body.lattice.rest[v*3+O]*y.weights[D],0)));x.push({front:{attachment:M,position:b.point.toArray()},back:{attachment:U,position:A.point.toArray()},restDistance:P(M).distanceTo(P(U)),pressure:T===0&&l===0?1:.6})}}return{attachment:i,point:n.point.toArray(),pads:x}}attachment(n){const t=this.skins.find(({mesh:d})=>d===n.object);if(!t||!n.face)return null;const{a:i,b:r,c:a}=n.face,s=t.mesh.geometry.attributes.position,o=qo.getBarycoord(n.point,new be().fromBufferAttribute(s,i),new be().fromBufferAttribute(s,r),new be().fromBufferAttribute(s,a),new be);if(!o)return null;const f=new Map;return[i,r,a].forEach((d,m)=>{for(let p=t.offsets[d];p<t.offsets[d+1];p++){const g=t.indices[p];f.set(g,(f.get(g)??0)+t.weights[p]*o.getComponent(m))}}),{indices:[...f.keys()],weights:[...f.values()]}}}class hd{constructor(n,t,i,r,a){this.bodies=n,this.update=r,this.failed=a,this.goals=n.map(()=>null),this.previous=n.map(s=>s.positions.slice()),this.current=this.previous,this.worker=new Worker(new URL("/assets/worker-D1_bUGtO.js",import.meta.url),{type:"module",name:"Mallow Club physics"}),this.worker.onmessage=({data:s})=>{if(this.disposed)return;if(s.kind==="error"){this.fail(new Error(s.message));return}const o=performance.now();this.interval=this.receivedAt?Math.min(40,Math.max(8,o-this.receivedAt)):16,this.receivedAt=o,this.previous=this.current,this.current=s.positions,this.fraction=-1,this.busy=!1,this.sleeping=s.sleeping&&!this.commands.length,this.update()},this.worker.onerror=s=>{s.preventDefault(),this.fail(new Error(s.message||"The playground worker could not start."))},this.worker.onmessageerror=()=>this.fail(new Error("The playground worker could not return its state.")),this.post({kind:"init",bodies:n.map(s=>s.options),bounds:t,settle:i?160:60})}bodies;update;failed;sleeping=!1;worker;busy=!0;disposed=!1;queuedTime=0;commands=[];goals;previous;current;receivedAt=0;interval=16;fraction=-1;post(n){this.disposed||this.worker.postMessage(n)}fail(n){this.dispose(),this.failed(n)}enqueue(n){if(this.disposed)return;const t=this.commands.at(-1);n.kind==="move"&&t?.kind==="move"&&n.body===t.body?this.commands[this.commands.length-1]=n:this.commands.push(n),this.wake()}wake(){this.disposed||(this.sleeping=!1)}grab(n,t){this.goals[n]=t.point,this.enqueue({kind:"grab",body:n,...t})}goal(n){return this.goals[n]}moveGrab(n,t){this.goals[n]&&(this.goals[n]=t,this.enqueue({kind:"move",body:n,point:t}))}release(n,t,i=0){this.goals[n]=null,this.enqueue({kind:"release",body:n,velocity:t,minimumDuration:i})}advance(n){this.disposed||(this.queuedTime=Math.min(1/15,this.queuedTime+n),!(this.busy||this.sleeping&&!this.commands.length)&&(this.busy=!0,this.post({kind:"step",seconds:this.queuedTime,commands:this.commands}),this.commands=[],this.queuedTime=0))}sample(n){const t=Math.min(1,Math.max(0,(n-this.receivedAt)/this.interval));if(t===this.fraction)return!1;this.fraction=t;for(let i=0;i<this.bodies.length;i++){const r=this.bodies[i].positions,a=this.previous[i],s=this.current[i];for(let o=0;o<r.length;o++)r[o]=a[o]+(s[o]-a[o])*t}return!0}get active(){return!this.disposed&&(this.busy||!this.sleeping||this.fraction<1)}dispose(){this.disposed||(this.disposed=!0,this.busy=!1,this.sleeping=!0,this.fraction=1,this.goals.fill(null),this.commands=[],this.worker.terminate())}}function Or(e,n,t,i,r,a){const s=new si,o=new ut,f=t.flatMap(w=>w.skins.map(({mesh:G})=>G)),d=new Wr,m=new be,p=new be,g=["Butter","Cheese","Pancakes"];let _=0,x=null,T=!1,l=null;const c=w=>{const G=e.getBoundingClientRect();o.set((w.clientX-G.left)/G.width*2-1,1-(w.clientY-G.top)/G.height*2),s.setFromCamera(o,n)},b=(w,G=!1)=>{c(w);let z=s.intersectObjects(f,!1)[0];if(!z&&G&&l&&performance.now()-l.time<120&&Math.hypot(w.clientX-l.x,w.clientY-l.y)<12){const W=l.hit.object,Y=l.hit.face,j=W.geometry.attributes.position,X=new be;for(const[pe,me]of[Y.a,Y.b,Y.c].entries())X.addScaledVector(new be().fromBufferAttribute(j,me),l.bary.getComponent(pe));z={...l.hit,point:X}}if(!z&&G){const W=e.getBoundingClientRect(),Y=o.clone();for(const[j,X]of[[-1,0],[1,0],[0,-1],[0,1]])if(o.set(Y.x+j*16/W.width,Y.y+X*16/W.height),s.setFromCamera(o,n),z=s.intersectObjects(f,!1)[0],z)break}return z},A=()=>{i.wake(),r()},M=(w=!1)=>{const G=x||T,z=x;for(const[W,Y]of t.entries())i.release(W,void 0,w&&z&&!z.moved&&Y===z.model?.18:0);x=null,z&&e.hasPointerCapture(z.pointer)&&e.releasePointerCapture(z.pointer),T=!1,e.classList.remove("is-grabbing"),G&&a(`${g[_]} released.`),A()},U=w=>{if(!w.isPrimary||w.button!==0||x&&x.pointer!==w.pointerId)return;x&&M();const G=b(w,!0),z=G&&t.find(Y=>Y.skins.some(({mesh:j})=>j===G.object));if(!z||!G.face)return;M();const W=z.createGrip(G,s.ray.direction);W&&(_=t.indexOf(z),i.grab(_,W),d.setFromNormalAndCoplanarPoint(new be(0,0,1),G.point),x={model:z,pointer:w.pointerId,x:w.clientX,y:w.clientY,moved:!1},e.setPointerCapture(w.pointerId),e.focus({preventScroll:!0}),e.classList.add("is-grabbing"),a(`${g[_]} held. Squeezing while you hold. Move to lift. Release to drop or throw.`),w.preventDefault(),A())},P=w=>{if(!x){const G=b(w);l=G?.barycoord?{hit:G,bary:G.barycoord.clone(),x:w.clientX,y:w.clientY,time:performance.now()}:null,e.style.cursor=G?"grab":"default";return}if(c(w),w.pointerId===x.pointer){if(w.pointerType==="mouse"&&w.buttons===0){M();return}x.moved||=Math.hypot(w.clientX-x.x,w.clientY-x.y)>5,!(!x.moved||!s.ray.intersectPlane(d,p))&&(p.x=vt.clamp(p.x,-2.6,2.6),p.y=vt.clamp(p.y,-1,3.05),i.moveGrab(_,p.toArray()),w.preventDefault(),A())}},y=w=>{x?.pointer===w.pointerId&&M(w.type==="pointerup")},O=()=>{const w=t[_];M(),n.getWorldDirection(m),p.fromArray(w.body.center).addScaledVector(m,-10),s.set(p,m);const G=s.intersectObjects(w.skins.map(({mesh:W})=>W),!1)[0],z=G&&w.createGrip(G,m);z&&(i.grab(_,z),T=!0,a(`${g[_]} held. Arrow keys move it. Space releases. Shift and an arrow throws.`))},E=w=>{if(!(x||w.altKey||w.ctrlKey||w.metaKey)){if(["1","2","3"].includes(w.key))M(),_=Number(w.key)-1,a(`${g[_]} selected. Space grabs and squishes.`);else if(w.code==="Space"||w.key==="Enter"){if(w.repeat)return;T?M():O()}else if(w.key==="Escape")M();else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(w.key)){T||O();const G=w.key==="ArrowLeft"?-1:w.key==="ArrowRight"?1:0,z=w.key==="ArrowUp"?1:w.key==="ArrowDown"?-1:0;if(w.shiftKey){if(w.repeat)return;i.release(_,[G*5,z*5+3,0]),T=!1,a(`${g[_]} thrown.`)}else if(i.goal(_)){const W=i.goal(_);i.moveGrab(_,[vt.clamp(W[0]+G*.25,-2.5,2.5),vt.clamp(W[1]+z*.25,-.9,2.9),W[2]])}}else return;w.preventDefault(),A()}},v=()=>{M()},D=()=>{document.hidden&&v()};return e.addEventListener("pointerdown",U),e.addEventListener("pointermove",P),e.addEventListener("pointerup",y),e.addEventListener("pointercancel",y),e.addEventListener("lostpointercapture",y),e.addEventListener("keydown",E),e.addEventListener("blur",v),window.addEventListener("pointerup",y),window.addEventListener("blur",v),document.addEventListener("visibilitychange",D),()=>{e.removeEventListener("pointerdown",U),e.removeEventListener("pointermove",P),e.removeEventListener("pointerup",y),e.removeEventListener("pointercancel",y),e.removeEventListener("lostpointercapture",y),e.removeEventListener("keydown",E),e.removeEventListener("blur",v),window.removeEventListener("pointerup",y),window.removeEventListener("blur",v),document.removeEventListener("visibilitychange",D);const w=x;x=null,w&&e.hasPointerCapture(w.pointer)&&e.releasePointerCapture(w.pointer),e.classList.remove("is-grabbing"),e.style.removeProperty("cursor");for(let G=0;G<t.length;G++)i.release(G)}}class md extends fa{constructor(){super();const n=new Ln;n.deleteAttribute("uv");const t=new wn({side:Et}),i=new wn,r=new Ko(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const a=new st(n,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const s=new $o(n,i,6),o=new Zo;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);const f=new st(n,Kt(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new st(n,Kt(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new st(n,Kt(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new st(n,Kt(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const g=new st(n,Kt(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const _=new st(n,Kt(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const n=new Set;this.traverse(t=>{t.isMesh&&(n.add(t.geometry),n.add(t.material))});for(const t of n)t.dispose()}}function Kt(e){return new jo({color:0,emissive:16777215,emissiveIntensity:e})}function Br(e,n){const t=new md,i=new ci(n),r=i.fromScene(t,.04);t.dispose(),i.dispose(),e.environment=r.texture,e.environmentIntensity=.45;const a=new Qo("#FFFCF5","#B6C8C3",.5);e.add(a);const s=new cr("#FFF5E6",2.4);s.position.set(-3,6,5),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.left=-4,s.shadow.camera.right=4,s.shadow.camera.top=5,s.shadow.camera.bottom=-3,s.shadow.normalBias=.025,s.shadow.bias=-1e-4,s.shadow.blurSamples=8,e.add(s);const o=new cr("#FFFFFF",1.3);return o.position.set(4,3,-4),e.add(o),()=>{e.remove(a,s,o),e.environment=null,s.shadow.dispose(),r.dispose()}}function _d(e,n,t){const i=new Gu({antialias:!0,alpha:!0,powerPreference:"high-performance"}),r=new fa;let a=()=>{},s=()=>{},o,f,d=0,m=!0,p=!1,g=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)"),x=new Vr(-3.2,3.2,3.1,-3.1,.1,40);x.position.set(0,4.2,10),x.lookAt(0,.65,0);let T;const l=[];let c=Math.min(window.devicePixelRatio,1.25),b=0,A=!0;const M=()=>i.render(r,x),U=w=>{if(d=0,p||!m||document.hidden||i.getContext().isContextLost())return;const G=g?(w-g)/1e3:1/60;if(b=G>.032?b+1:Math.max(0,b-1),b>=10&&c>.75&&(c=Math.max(.75,c*.8),i.setPixelRatio(c),b=0),T.advance(G),g=w,T.sample(w)){for(const z of l)z.update();A=!0}A&&(M(),A=!1),T.active&&(d=requestAnimationFrame(U))},P=()=>{p||!m||document.hidden||d||(g=0,d=requestAnimationFrame(U))},y=()=>{cancelAnimationFrame(d),d=0,g=0},O=()=>{document.hidden?y():P()},E=w=>{w.preventDefault(),y(),s(),s=()=>{},t(!0)},v=()=>{try{a(),a=Br(r,i),s=Or(e,x,l,T,P,n),t(!1),A=!0,P()}catch{t(!0)}},D=()=>{p||(p=!0,y(),s(),T?.dispose(),o?.disconnect(),f?.disconnect(),document.removeEventListener("visibilitychange",O),i.domElement.removeEventListener("webglcontextlost",E),i.domElement.removeEventListener("webglcontextrestored",v),td(r),a(),i.dispose(),i.forceContextLoss(),i.domElement.remove())};try{i.setPixelRatio(c),i.shadowMap.enabled=!0,i.shadowMap.type=ra,i.toneMapping=aa,i.toneMappingExposure=.94,i.domElement.setAttribute("aria-hidden","true"),e.appendChild(i.domElement),a=Br(r,i);const w=[{kind:"butter",color:"#FDE68A",scale:.69,x:-1.62,z:-.75,rotation:.18,cells:[5,3,3]},{kind:"cheese",color:"#FDE68A",scale:.78,x:1.62,z:-.55,rotation:-.3,cells:[3,3,3]},{kind:"pancakes",color:"#FFCBA4",scale:.94,x:-.02,z:.45,rotation:-.15,cells:[5,3,5],cylinder:!0}];for(const W of w){const Y=ed(W.kind,W.color,!0),j=new Map;Y.traverse(me=>{if(!(me instanceof st))return;const we=He=>{if(!(He instanceof sa))return He;let Ye=j.get(He);return Ye||(Ye=new wn().copy(He),j.set(He,Ye)),Ye};me.material=Array.isArray(me.material)?me.material.map(we):we(me.material)}),j.forEach((me,we)=>we.dispose());const X=new oi().setFromObject(Y).getSize(new be),pe=new pd(Y,{...W,position:[W.x,-1.025+X.y*W.scale/2,W.z]});l.push(pe),r.add(pe.group)}const G=new st(Vt(6.2,.2,3.3,.08,10),new wn({color:"#E9DECC",roughness:.72}));G.position.set(0,-1.15,0),G.receiveShadow=!0,G.castShadow=!0,r.add(G);for(const W of l)W.update();T=new hd(l.map(W=>W.body),{min:[-2.75,-1.05,-1.3],max:[2.75,3,1.45],arch:{base:1.15,radiusX:2.75,radiusY:1.85}},_.matches,P,W=>{y(),s(),t(!0),console.error("Unable to simulate the squishy playground.",W),n("Interactive preview unavailable. Product photos remain available."),i.domElement.style.visibility="hidden"});const z=()=>{const W=e.clientWidth,Y=e.clientHeight;if(!W||!Y)return;i.setSize(W,Y);const j=W/Y,X=Math.max(5.9,6.3/j);x.left=-X*j/2,x.right=X*j/2,x.top=X/2,x.bottom=-X/2,x.updateProjectionMatrix(),A=!0,P()};return o=new ResizeObserver(z),o.observe(e),z(),s=Or(e,x,l,T,P,n),f=new IntersectionObserver(([W])=>{m=W.isIntersecting,m?P():y()}),f.observe(e),document.addEventListener("visibilitychange",O),i.domElement.addEventListener("webglcontextlost",E),i.domElement.addEventListener("webglcontextrestored",v),M(),P(),D}catch(w){throw D(),w}}function gd(){const e=Yt.useRef(null),n=Yt.useId(),[t,i]=Yt.useState(!1),[r,a]=Yt.useState(!1),[s,o]=Yt.useState("");return Yt.useEffect(()=>{if(e.current)try{const f=_d(e.current,o,i);return a(!0),f}catch{i(!0)}},[]),Xt.jsxs("div",{className:"squishy-viewer hero-viewer",children:[Xt.jsx("div",{ref:e,className:`three-host ${r&&!t?"ready":""}`,role:t?"img":"application","aria-label":t?"Butter, cheese, and pancake squishy concepts":"Squishy play window","aria-describedby":n,tabIndex:t?void 0:0,children:(!r||t)&&Xt.jsx("img",{className:"scene-fallback",src:"/products/pancake-stack-ffcba4.png",alt:""})}),Xt.jsx("p",{id:n,className:"sr-only",children:"Interactive concept models with simulated soft-body physics. Press and hold a squishy to squeeze it. Drag to lift, then release to throw. Keyboard: 1 selects butter, 2 cheese, 3 pancakes. Space grabs or releases. Arrow keys move. Shift with an arrow throws. Escape releases."}),Xt.jsx("span",{className:"sr-only",role:"status",children:s}),t&&Xt.jsx("p",{className:"scene-unavailable",children:"Interactive preview unavailable. Explore the product photos below."})]})}const Ed=Object.freeze(Object.defineProperty({__proto__:null,default:gd},Symbol.toStringTag,{value:"Module"}));export{Ed as S,Yt as a,Xt as j,ns as r};
