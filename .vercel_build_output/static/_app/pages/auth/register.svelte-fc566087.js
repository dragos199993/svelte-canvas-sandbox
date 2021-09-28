import{S as s,i as a,s as r,e,t,c as l,a as o,g as c,d as u,b as i,f as d,D as n,h as f,k as m,P as b,n as p,Q as h,J as g,R as v,H as x,T as w}from"../../chunks/vendor-78de171c.js";import{d as y}from"../../chunks/db-26c0b30b.js";function E(s){let a,r;return{c(){a=e("div"),r=t(s[3]),this.h()},l(e){a=l(e,"DIV",{class:!0,role:!0});var t=o(a);r=c(t,s[3]),t.forEach(u),this.h()},h(){i(a,"class","bg-red-100 w-full rounded-lg p-4 mb-4 text-sm text-red-700"),i(a,"role","alert")},m(s,e){d(s,a,e),n(a,r)},p(s,a){8&a&&f(r,s[3])},d(s){s&&u(a)}}}function I(s){let a,r,f,y,I,k,D,V,P,L,T,R,U,B,N,Y,j,q,A,C,H,O,_,F,J,M,Q,S,z,G,K,W,X=s[3]&&E(s);return{c(){a=m(),r=e("div"),f=e("div"),y=e("div"),I=e("h1"),k=t("Create a new account"),D=m(),V=e("form"),X&&X.c(),P=m(),L=e("div"),T=e("label"),R=t("Your email"),U=m(),B=e("input"),N=m(),Y=e("div"),j=e("label"),q=t("Your password"),A=m(),C=e("input"),H=m(),O=e("div"),_=e("label"),F=t("Password confirm"),J=m(),M=e("input"),Q=m(),S=e("div"),z=e("button"),G=t("Register"),this.h()},l(s){b('[data-svelte="svelte-f1nrop"]',document.head).forEach(u),a=p(s),r=l(s,"DIV",{class:!0});var e=o(r);f=l(e,"DIV",{class:!0});var t=o(f);y=l(t,"DIV",{class:!0});var i=o(y);I=l(i,"H1",{class:!0});var d=o(I);k=c(d,"Create a new account"),d.forEach(u),D=p(i),V=l(i,"FORM",{class:!0});var n=o(V);X&&X.l(n),P=p(n),L=l(n,"DIV",{class:!0});var m=o(L);T=l(m,"LABEL",{for:!0,class:!0});var h=o(T);R=c(h,"Your email"),h.forEach(u),U=p(m),B=l(m,"INPUT",{type:!0,id:!0,class:!0}),m.forEach(u),N=p(n),Y=l(n,"DIV",{class:!0});var g=o(Y);j=l(g,"LABEL",{for:!0,class:!0});var v=o(j);q=c(v,"Your password"),v.forEach(u),A=p(g),C=l(g,"INPUT",{type:!0,id:!0,class:!0}),g.forEach(u),H=p(n),O=l(n,"DIV",{class:!0});var x=o(O);_=l(x,"LABEL",{for:!0,class:!0});var w=o(_);F=c(w,"Password confirm"),w.forEach(u),J=p(x),M=l(x,"INPUT",{type:!0,id:!0,class:!0}),x.forEach(u),Q=p(n),S=l(n,"DIV",{class:!0});var E=o(S);z=l(E,"BUTTON",{type:!0,class:!0});var K=o(z);G=c(K,"Register"),K.forEach(u),E.forEach(u),n.forEach(u),i.forEach(u),t.forEach(u),e.forEach(u),this.h()},h(){document.title="Register",i(I,"class","pt-32 text-center text-2xl font-bold"),i(T,"for","email"),i(T,"class","text-sm font-medium text-gray-900 block mb-2"),i(B,"type","email"),i(B,"id","email"),i(B,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),B.required=!0,i(L,"class","mb-6"),i(j,"for","password"),i(j,"class","text-sm font-medium text-gray-900 block mb-2"),i(C,"type","password"),i(C,"id","password"),i(C,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),C.required=!0,i(Y,"class","mb-6"),i(_,"for","password_confirm"),i(_,"class","text-sm font-medium text-gray-900 block mb-2"),i(M,"type","password"),i(M,"id","password_confirm"),i(M,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),M.required=!0,i(O,"class","mb-6"),i(z,"type","submit"),i(z,"class","text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"),i(S,"class","flex justify-end"),i(V,"class","mt-8"),i(y,"class","w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 px-8 sm:px-0"),i(f,"class","w-full flex items-center flex-col"),i(r,"class","container")},m(e,t){d(e,a,t),d(e,r,t),n(r,f),n(f,y),n(y,I),n(I,k),n(y,D),n(y,V),X&&X.m(V,null),n(V,P),n(V,L),n(L,T),n(T,R),n(L,U),n(L,B),h(B,s[1]),n(V,N),n(V,Y),n(Y,j),n(j,q),n(Y,A),n(Y,C),h(C,s[0]),n(V,H),n(V,O),n(O,_),n(_,F),n(O,J),n(O,M),h(M,s[2]),n(V,Q),n(V,S),n(S,z),n(z,G),K||(W=[g(B,"input",s[5]),g(C,"input",s[6]),g(M,"input",s[7]),g(V,"submit",v(s[4]))],K=!0)},p(s,[a]){s[3]?X?X.p(s,a):(X=E(s),X.c(),X.m(V,P)):X&&(X.d(1),X=null),2&a&&B.value!==s[1]&&h(B,s[1]),1&a&&C.value!==s[0]&&h(C,s[0]),4&a&&M.value!==s[2]&&h(M,s[2])},i:x,o:x,d(s){s&&u(a),s&&u(r),X&&X.d(),K=!1,w(W)}}}function k(s,a,r){let e,t,l,o=null;return[e,t,l,o,async function(){if(e!==l)return void r(3,o="Passwords and password confirm needs to be the same");const s=await y.supabase.auth.signUp({email:t,password:e});s.error&&(console.log(s),r(3,o=s.error.message))},function(){t=this.value,r(1,t)},function(){e=this.value,r(0,e)},function(){l=this.value,r(2,l)}]}class D extends s{constructor(s){super(),a(this,s,k,I,r,{})}}export{D as default};
