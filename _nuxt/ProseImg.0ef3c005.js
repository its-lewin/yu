import{d as r,Q as n,b as c,c as h,B as o,Y as l,G as d,l as u,Z as f}from"./entry.f9c57fcf.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=l(d(u().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(a,s)=>(c(),h("img",{src:o(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
