import{S as s,i as a,s as t,e,t as r,c,a as o,g as l,d as n,b as u,f as i,D as f,J as d,H as h}from"../../chunks/vendor-78de171c.js";import{d as m}from"../../chunks/db-26c0b30b.js";function b(s){let a,t,m,b,p,g;return{c(){a=e("div"),t=e("div"),m=e("button"),b=r("Default"),this.h()},l(s){a=c(s,"DIV",{class:!0});var e=o(a);t=c(e,"DIV",{class:!0});var r=o(t);m=c(r,"BUTTON",{type:!0,class:!0});var u=o(m);b=l(u,"Default"),u.forEach(n),r.forEach(n),e.forEach(n),this.h()},h(){u(m,"type","button"),u(m,"class","text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"),u(t,"class","w-full flex items-center flex-col"),u(a,"class","container")},m(e,r){i(e,a,r),f(a,t),f(t,m),f(m,b),p||(g=d(m,"click",s[0]),p=!0)},p:h,i:h,o:h,d(s){s&&n(a),p=!1,g()}}}function p(s){return[()=>m.supabase.auth.signIn({email:"dragos199993+test@gmail.com",password:"travel1*"})]}class g extends s{constructor(s){super(),a(this,s,p,b,t,{})}}export{g as default};