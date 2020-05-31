import{createMutableSource as r,createContext as n,memo as e,useContext as t,useCallback as u,useMutableSource as o,useRef as i,useMemo as c,createElement as a,useLayoutEffect as f,useEffect as v}from"react";import{unstable_runWithPriority as d,unstable_NormalPriority as s,unstable_UserBlockingPriority as l}from"scheduler";var p="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?v:f,w=Symbol(),m=Symbol(),h=new WeakMap,g=function(r){return r};function x(t){var u,o,f=r({current:t},function(){return t}),v=n(((u={})[w]=f,u));return v.Provider=(o=v.Provider,e(function(n){var e,t=n.value,u=n.children,f=i(((e={}).v=t,e.l=new Set,e));p(function(){f.current.v=t,d(s,function(){f.current.l.forEach(function(r){return r()})})});var v=c(function(){var n;return(n={})[w]=r(f,function(){return f.current.v}),n},[]);return a(o,{value:v},u)})),delete v.Consumer,v}var y=function(r,n){var e=r.current.l;return e.add(n),function(){return e.delete(n)}};function S(r,n){void 0===n&&(n=g);var e=t(r)[w];if("production"!==process.env.NODE_ENV&&!e)throw new Error("This useContext requires special context for selector support");var i=u(function(r){var e=n(r.current.v);if("function"==typeof e){var t;if(h.has(e))return h.get(e);var u=((t={})[m]=e,t);return h.set(e,u),u}return e},[n]),c=o(e,i,y);return c&&c[m]?c[m]:c}function C(r){return function(){var n=arguments;return d(l,function(){return r.apply(void 0,[].slice.call(n))})}}export{x as createContext,S as useContext,C as wrapCallbackWithPriority};
//# sourceMappingURL=index.esm.js.map
