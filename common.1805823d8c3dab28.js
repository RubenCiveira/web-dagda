"use strict";(self.webpackChunkagenda_angular=self.webpackChunkagenda_angular||[]).push([[592],{6228:(u,i,s)=>{s.d(i,{T:()=>t});class t{static clone(r){const e=new t;return e.pageSize=r.pageSize,e.pageNumber=r.pageNumber,e.lastRow=r.lastRow,e.search=r.search,e.activo=r.activo,e.bbox=r.bbox,e.zoom=r.zoom,e}}},6813:(u,i,s)=>{s.d(i,{I:()=>r});var c=s(2433),t=s(5e3),a=s(5276);let r=(()=>{class e extends c._j{constructor(n){super({uid:"uid",group:"net-civeira-ejemplos-agenda",name:"region",path:"geo-regiones",acl:"geo-regiones"},n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(a.D))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2169:(u,i,s)=>{s.d(i,{X:()=>t});class t{static clone(r){const e=new t;return e.pageSize=r.pageSize,e.pageNumber=r.pageNumber,e.lastRow=r.lastRow,e.search=r.search,e.dossier="string"==typeof r.dossier||r.dossier instanceof String?r.dossier:r.dossier?r.dossier.nombre:void 0,e.escritor="string"==typeof r.escritor||r.escritor instanceof String?r.escritor:r.escritor?r.escritor.uid:void 0,e}}},112:(u,i,s)=>{s.d(i,{Y:()=>p});var c=s(7130),t=s(2433),a=s(48),r=s(5e3),e=s(5276);let p=(()=>{class n extends t._j{constructor(o){super({uid:"uid",group:"net-civeira-ejemplos-agenda",name:"documento",path:"proyecto-documentos",acl:"proyecto-documentos"},o)}mapperForRelation(o){if("dossier"===o){const _=new c.h(this._handlerProvider);return new t.cr(_._meta,_)}if("escritor"===o){const _=new a.X(this._handlerProvider);return new t.cr(_._meta,_)}return null}references(){return{dossier:{type:"Dossier"},escritor:{type:"Escritor"}}}datetimes(){return["fechaSubida","fechaValidacion","fecha"]}validar(o){return super.patch(o.uid+"/validar?validado=true",{validado:"true"},o)}validarAllForQuery(o){return super.patchAllForQuery("/-/validar",o,{validado:"true"})}guardar(o){return super.patch(o.uid+"/guardar?guardado=false",{guardado:"false"},o)}guardarAllForQuery(o){return super.patchAllForQuery("/-/guardar",o,{guardado:"false"})}}return n.\u0275fac=function(o){return new(o||n)(r.LFG(e.D))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);