export function lerp(a,b,t){ return a+(b-a)*t; }
export function clamp(v,l,h){ return Math.max(l,Math.min(h,v)); }
export function rand(a,b){ return a+Math.random()*(b-a); }
export function rInt(a,b){ return Math.floor(rand(a,b+1)); }