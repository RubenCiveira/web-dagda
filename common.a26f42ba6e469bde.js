"use strict";(self.webpackChunkagenda_angular=self.webpackChunkagenda_angular||[]).push([[592],{2169:(D,u,e)=>{e.d(u,{X:()=>o});class o{static clone(a){const n=new o;return n.pageSize=a.pageSize,n.pageNumber=a.pageNumber,n.lastRow=a.lastRow,n.search=a.search,n.dossier="string"==typeof a.dossier||a.dossier instanceof String?a.dossier:a.dossier?a.dossier.uid:void 0,n.escritor="string"==typeof a.escritor||a.escritor instanceof String?a.escritor:a.escritor?a.escritor.uid:void 0,n}}},112:(D,u,e)=>{e.d(u,{Y:()=>f});var c=e(7130),o=e(2433),i=e(48),a=e(5e3),n=e(5276);let f=(()=>{class s extends o._j{constructor(r){super({uid:"uid",group:"net-civeira-ejemplos-agenda",name:"documento",path:"proyecto-documentos",acl:"proyecto-documentos"},r)}mapperForRelation(r){if("dossier"===r){const l=new c.h(this._handlerProvider);return new o.cr(l._meta,l)}if("escritor"===r){const l=new i.X(this._handlerProvider);return new o.cr(l._meta,l)}return null}references(){return{dossier:{type:"Dossier"},escritor:{type:"Escritor"}}}datetimes(){return["fechaSubida","fechaValidacion","fecha"]}validar(r){return super.patch(r.uid+"/validar?validado=true",{validado:"true"},r)}validarAllForQuery(r){return super.patchAllForQuery("/-/validar",r,{validado:"true"})}guardar(r){return super.patch(r.uid+"/guardar?guardado=false",{guardado:"false"},r)}guardarAllForQuery(r){return super.patchAllForQuery("/-/guardar",r,{guardado:"false"})}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(n.D))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4610:(D,u,e)=>{e.d(u,{S:()=>f});var c=e(7130),o=e(6305),i=e(2433),a=e(5e3),n=e(5276);let f=(()=>{class s extends i._j{constructor(r){super({uid:"uid",group:"net-civeira-ejemplos-agenda",name:"lugarDossier",path:"proyecto-lugares-dossieres",acl:"proyecto-lugares-dossieres"},r)}mapperForRelation(r){if("lugar"===r){const l=new o._(this._handlerProvider);return new i.cr(l._meta,l)}if("dossier"===r){const l=new c.h(this._handlerProvider);return new i.cr(l._meta,l)}return null}references(){return{lugar:{type:"Lugar"},dossier:{type:"Dossier"}}}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(n.D))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5753:(D,u,e)=>{e.d(u,{b:()=>y});var c=e(791),o=e(5e3),i=e(6050),a=e(9808),n=e(7322),f=e(7093),s=e(4107),p=e(3075),r=e(508),l=e(7423),O=e(5245);function m(_,d){if(1&_&&(o.TgZ(0,"mat-option",7),o._uU(1),o.qZA()),2&_){const t=d.$implicit;o.s9C("value",t.value),o.xp6(1),o.hij(" ",t.label," ")}}function C(_,d){if(1&_){const t=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(v){o.CHM(t);const g=o.oxw(2);return null==g.control||g.control.setValue(null),v.stopPropagation()}),o.TgZ(1,"mat-icon"),o._uU(2,"close"),o.qZA()()}}function M(_,d){if(1&_){const t=o.EpF();o.TgZ(0,"button",9),o.NdJ("click",function(){return o.CHM(t),o.oxw(2).showHelp()}),o.TgZ(1,"mat-icon"),o._uU(2,"help_outline"),o.qZA()()}}function P(_,d){if(1&_&&(o.TgZ(0,"mat-error"),o._UZ(1,"editable-error-block",10),o.qZA()),2&_){const t=o.oxw(2);o.xp6(1),o.Q6J("messages",t.errorMessages)("control",t.control)}}function h(_,d){if(1&_&&(o.TgZ(0,"mat-form-field",1)(1,"mat-label"),o._uU(2),o.qZA(),o.TgZ(3,"mat-select",2),o.YNc(4,m,2,2,"mat-option",3),o.qZA(),o.YNc(5,C,3,0,"button",4),o.YNc(6,M,3,0,"button",5),o.YNc(7,P,2,2,"mat-error",6),o.qZA()),2&_){const t=o.oxw();o.Q6J("floatLabel",t.floatLabel)("appearance",t.appearance),o.xp6(2),o.Oqu(t.label),o.xp6(1),o.Q6J("required",t.required)("placeholder",t.placeholder)("formControl",t.control),o.xp6(1),o.Q6J("ngForOf",t.options),o.xp6(1),o.Q6J("ngIf",!t.required&&(null==t.control?null:t.control.value)),o.xp6(1),o.Q6J("ngIf",t.help),o.xp6(1),o.Q6J("ngIf",t.control.invalid)}}let y=(()=>{class _ extends c.G7{constructor(t){super(t),this.options=[]}ngAfterViewInit(){if(this.options.splice(0,this.options.length),this.contentOptions){const t=this.contentOptions.toArray();for(const E of t)this.options.push({value:E.value,label:E.label})}}}return _.\u0275fac=function(t){return new(t||_)(o.Y36(i.U))},_.\u0275cmp=o.Xpm({type:_,selectors:[["editable-choose"]],contentQueries:function(t,E,v){if(1&t&&o.Suo(v,c.tx,4),2&t){let g;o.iGM(g=o.CRH())&&(E.contentOptions=g)}},features:[o.qOj],decls:1,vars:1,consts:[["fxFlex","100%",3,"floatLabel","appearance",4,"ngIf"],["fxFlex","100%",3,"floatLabel","appearance"],[3,"required","placeholder","formControl"],[3,"value",4,"ngFor","ngForOf"],["matSuffix","","mat-icon-button","","type","button","aria-label","Clear",3,"click",4,"ngIf"],["mat-icon-button","","matSuffix","",3,"click",4,"ngIf"],[4,"ngIf"],[3,"value"],["matSuffix","","mat-icon-button","","type","button","aria-label","Clear",3,"click"],["mat-icon-button","","matSuffix","",3,"click"],[3,"messages","control"]],template:function(t,E){1&t&&o.YNc(0,h,8,10,"mat-form-field",0),2&t&&o.Q6J("ngIf",E.control)},directives:[a.O5,n.KE,f.yH,n.hX,s.gD,p.Q7,p.JJ,p.oH,a.sg,r.ey,l.lW,n.R9,O.Hw,n.TO,c.qJ],encapsulation:2,changeDetection:0}),_})()},8473:(D,u,e)=>{e.d(u,{x:()=>O});var c=e(9808),o=e(2155),i=e(3075),a=e(7423),n=e(7322),f=e(5245),s=e(7531),p=e(4107),r=e(1614),l=e(5e3);let O=(()=>{class m{}return m.\u0275fac=function(M){return new(M||m)},m.\u0275mod=l.oAB({type:m}),m.\u0275inj=l.cJS({providers:[],imports:[[c.ez,i.u5,r.r,i.UX,o.o9,s.c,f.Ps,a.ot,p.LD,n.lN]]}),m})()}}]);