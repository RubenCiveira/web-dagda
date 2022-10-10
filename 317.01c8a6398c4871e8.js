"use strict";(self.webpackChunkagenda_angular=self.webpackChunkagenda_angular||[]).push([[317],{967:(F,P,t)=>{t.d(P,{n:()=>E});var n=t(5e3),r=t(8574);let E=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Xpm({type:b,selectors:[["dossier-view-detail"]],inputs:{data:"data"},decls:1,vars:4,consts:[[3,"disabled","data"]],template:function(e,T){1&e&&n._UZ(0,"dossier-view-edit",0),2&e&&(n.Akn("detail"),n.Q6J("disabled",!0)("data",T.data))},directives:[r.P],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0}),b})()},9596:(F,P,t)=>{t.d(P,{B:()=>R});var n=t(9808),r=t(1062),E=t(2155),b=t(5113),M=t(7423),e=t(6510),T=t(1614),y=t(2375),a=t(2782),L=t(5848),D=t(5e3);let R=(()=>{class O{}return O.\u0275fac=function(x){return new(x||O)},O.\u0275mod=D.oAB({type:O}),O.\u0275inj=D.cJS({providers:[],imports:[[e.V,n.ez,L.r,T.r,E.o9,a.n,b.xu,y.W,M.ot,r.aw]]}),O})()},8574:(F,P,t)=>{t.d(P,{P:()=>S});var n=t(6537),r=t(3075),E=t(727),b=t(262),M=t(2843),e=t(4004),T=t(8505),y=t(5097),a=t(5e3),L=t(7130),D=t(7093),R=t(9808),O=t(502),A=t(791),x=t(3076),B=t(1600),m=t(1062);function f(g,I){if(1&g&&(a.TgZ(0,"editable-text",6),a.ALo(1,"translate"),a.ALo(2,"translate"),a._UZ(3,"editable-error",7),a.ALo(4,"translate"),a.qZA()),2&g){const c=a.oxw(2);a.s9C("label",a.lcZ(1,4,"proyecto.dossier-view.form.nombre.label")),a.s9C("placeholder",a.lcZ(2,6,"proyecto.dossier-view.form.nombre.placeholder")),a.Q6J("control",c.fields.nombre.control),a.xp6(3),a.s9C("message",a.lcZ(4,8,"proyecto.dossier-view.form.nombre.rule.maxlength"))}}function o(g,I){if(1&g&&(a.TgZ(0,"editable-text",8),a.ALo(1,"translate"),a.ALo(2,"translate"),a._UZ(3,"editable-error",7),a.ALo(4,"translate"),a.qZA()),2&g){const c=a.oxw(2);a.s9C("label",a.lcZ(1,4,"proyecto.dossier-view.form.alias.label")),a.s9C("placeholder",a.lcZ(2,6,"proyecto.dossier-view.form.alias.placeholder")),a.Q6J("control",c.fields.alias.control),a.xp6(3),a.s9C("message",a.lcZ(4,8,"proyecto.dossier-view.form.alias.rule.maxlength"))}}function _(g,I){if(1&g&&(a._UZ(0,"editable-decimal",9),a.ALo(1,"translate"),a.ALo(2,"translate")),2&g){const c=a.oxw(2);a.s9C("label",a.lcZ(1,3,"proyecto.dossier-view.form.latitud-central.label")),a.s9C("placeholder",a.lcZ(2,5,"proyecto.dossier-view.form.latitud-central.placeholder")),a.Q6J("control",c.fields.latitudCentral.control)}}function d(g,I){if(1&g&&(a._UZ(0,"editable-decimal",10),a.ALo(1,"translate"),a.ALo(2,"translate")),2&g){const c=a.oxw(2);a.s9C("label",a.lcZ(1,3,"proyecto.dossier-view.form.longitud-central.label")),a.s9C("placeholder",a.lcZ(2,5,"proyecto.dossier-view.form.longitud-central.placeholder")),a.Q6J("control",c.fields.longitudCentral.control)}}function h(g,I){if(1&g&&(a._UZ(0,"editable-integer",11),a.ALo(1,"translate"),a.ALo(2,"translate")),2&g){const c=a.oxw(2);a.s9C("label",a.lcZ(1,3,"proyecto.dossier-view.form.preferred-zoom.label")),a.s9C("placeholder",a.lcZ(2,5,"proyecto.dossier-view.form.preferred-zoom.placeholder")),a.Q6J("control",c.fields.preferredZoom.control)}}function K(g,I){if(1&g&&(a.YNc(0,f,5,10,"editable-text",1),a.YNc(1,o,5,10,"editable-text",2),a.YNc(2,_,3,7,"editable-decimal",3),a.YNc(3,d,3,7,"editable-decimal",4),a.YNc(4,h,3,7,"editable-integer",5)),2&g){const c=a.oxw();a.Q6J("ngIf",null==c.fields.nombre?null:c.fields.nombre.visible),a.xp6(1),a.Q6J("ngIf",null==c.fields.alias?null:c.fields.alias.visible),a.xp6(1),a.Q6J("ngIf",null==c.fields.latitudCentral?null:c.fields.latitudCentral.visible),a.xp6(1),a.Q6J("ngIf",null==c.fields.longitudCentral?null:c.fields.longitudCentral.visible),a.xp6(1),a.Q6J("ngIf",null==c.fields.preferredZoom?null:c.fields.preferredZoom.visible)}}let S=(()=>{class g{constructor(c,u,Q){this.dossierRepository=c,this.cdRef=u,this.disabled=!1,this.defaults={},this.fixed=[],this.hidden=[],this.fields={nombre:{visible:!0,editable:!0,disabled:!1},alias:{visible:!0,editable:!0,disabled:!1},latitudCentral:{visible:!0,editable:!0,disabled:!1},longitudCentral:{visible:!0,editable:!0,disabled:!1},preferredZoom:{visible:!0,editable:!0,disabled:!1}},this.fixedFields=[],this.initialsAndDefaults={},this.dirty=!1,this.invalid=!1,this.error=null,this.subscriptions=new E.w0,this.initialsAndDefaults={},this.form=Q.group({nombre:this.fields.nombre.control=new r.NI("",[r.kI.maxLength(250)]),alias:this.fields.alias.control=new r.NI("",[r.kI.maxLength(250)]),latitudCentral:this.fields.latitudCentral.control=new r.NI("",[]),longitudCentral:this.fields.longitudCentral.control=new r.NI("",[]),preferredZoom:this.fields.preferredZoom.control=new r.NI("",[])})}ngOnInit(){}ngAfterViewInit(){var c;this.acl?this.updateAcl():(null===(c=this.data)||void 0===c?void 0:c.uid)?this.dossierRepository.specificAcl(this.data.uid).subscribe(u=>{this.acl=u,this.updateAcl()}):this.dossierRepository.genericAcl().subscribe(u=>{this.acl=u,this.updateAcl()}),this.subscriptions.add(this.form.valueChanges.subscribe({next:()=>{this.updateValues()}})),this.formView&&this.formView.bindValues(this.fields)}ngOnDestroy(){this.subscriptions.unsubscribe()}ngOnChanges(c){c.defaults&&Object.assign(this.initialsAndDefaults,this.defaults),c.fixed&&(this.fixedFields=[],this.fixed.forEach&&this.fixed.forEach(u=>{this.fixedFields.push(u)})),c.acl&&this.updateAcl()}clearErrors(){this.formView&&this.formView.clearErrors()}saveValue(){if(this.formView){const c=this.dossierRepository.key(this.data),u=this.formView.retrieveValue();return(c?this.dossierRepository.update(c,u):this.dossierRepository.add(u)).pipe((0,y.I)(),(0,b.K)(Z=>{var W;return c&&this.dossierRepository.retrieve(c).subscribe(V=>{this.formView&&this.formView.markOriginal(V)}),null===(W=this.formView)||void 0===W||W.showError(Z),(0,M._)(()=>Z)}),(0,T.b)(Z=>{var W;Object.keys(Z).forEach(V=>{this.data[V]=Z[V],this.formView&&(this.formView.data[V]=Z[V])}),null===(W=this.formView)||void 0===W||W.refresh()}),(0,e.U)(Z=>"Dossier guardado"))}throw new Error("Intentando guardar sin formView")}updateValues(){var c,u;this.formView&&this.formView.bindValues(this.fields),this.dirty=!!(null===(c=this.form)||void 0===c?void 0:c.dirty),this.invalid=!!(null===(u=this.form)||void 0===u?void 0:u.invalid),this.cdRef.detectChanges()}updateAcl(){var c,u;this.formView&&this.formView.bindFields(this.fields),this.dirty=!!(null===(c=this.form)||void 0===c?void 0:c.dirty),this.invalid=!!(null===(u=this.form)||void 0===u?void 0:u.invalid),this.cdRef.detectChanges()}}return g.\u0275fac=function(c){return new(c||g)(a.Y36(L.h),a.Y36(a.sBO),a.Y36(r.qu))},g.\u0275cmp=a.Xpm({type:g,selectors:[["dossier-view-edit"]],viewQuery:function(c,u){if(1&c&&a.Gf(n.k,7),2&c){let Q;a.iGM(Q=a.CRH())&&(u.formView=Q.first)}},inputs:{disabled:"disabled",defaults:"defaults",editables:"editables",visibles:"visibles",fixed:"fixed",hidden:"hidden",acl:"acl",data:"data"},features:[a.TTD],decls:2,vars:10,consts:[["fxLayout","row wrap","fxLayoutGap","10px",3,"messagePreffix","form","disabled","fixed","hidden","editables","visibles","defaults","acl","data"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-nombre",3,"control","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-alias",3,"control","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-latitudCentral",3,"control","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-longitudCentral",3,"control","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-preferredZoom",3,"control","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-nombre",3,"control","label","placeholder"],["for","maxlength",3,"message"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-alias",3,"control","label","placeholder"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-latitudCentral",3,"control","label","placeholder"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-longitudCentral",3,"control","label","placeholder"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-dossier-preferredZoom",3,"control","label","placeholder"]],template:function(c,u){1&c&&(a.TgZ(0,"form-view",0),a.YNc(1,K,5,5,"ng-template"),a.qZA()),2&c&&a.Q6J("messagePreffix","proyecto.dossier")("form",u.form)("disabled",u.disabled)("fixed",u.fixedFields)("hidden",u.hidden)("editables",u.editables)("visibles",u.visibles)("defaults",u.initialsAndDefaults)("acl",u.acl)("data",u.data)},directives:[n.k,D.xw,D.SQ,R.O5,O.x,D.yH,A.IK,x.S,B.Y],pipes:[m.X$],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.inicial[_ngcontent-%COMP%], .modificado[_ngcontent-%COMP%], .remoto[_ngcontent-%COMP%]{display:block;margin:.5em}.diff-field[_ngcontent-%COMP%]{font-weight:700;font-size:20px}"],changeDetection:0}),g})()},5848:(F,P,t)=>{t.d(P,{r:()=>B});var n=t(9808),r=t(1062),E=t(2155),b=t(5113),M=t(7423),e=t(6510),T=t(1614),y=t(2375),a=t(2782),L=t(7893),D=t(553),R=t(2069),O=t(7531),A=t(3075),x=t(5e3);let B=(()=>{class m{}return m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=x.oAB({type:m}),m.\u0275inj=x.cJS({providers:[],imports:[[e.V,n.ez,D.L,R.W,T.r,L.o,E.o9,a.n,A.u5,b.xu,y.W,M.ot,O.c,A.UX,r.aw]]}),m})()},9087:(F,P,t)=>{t.d(P,{Kr:()=>B,MI:()=>x});var n=t(5113),r=t(5e3),E=t(791),b=t(9808),M=t(6050);const e=["formHandler"];function T(m,f){1&m&&r.GkF(0)}function y(m,f){if(1&m&&(r.ynx(0),r.YNc(1,T,1,0,"ng-container",1),r.BQk()),2&m){const o=r.oxw();r.xp6(1),r.Q6J("ngTemplateOutlet",o.template)}}function a(m,f){1&m&&r.GkF(0)}function L(m,f){if(1&m&&(r.ynx(0),r.YNc(1,a,1,0,"ng-container",1),r.BQk()),2&m){const o=r.oxw();r.xp6(1),r.Q6J("ngTemplateOutlet",o.template)}}const D=["template"],R=["showViewRelated"],O=["showCreateRelated"];let A=(()=>{class m{constructor(){this.title="",this.draw=!1}isInvalid(){var o;return(null===(o=this.handler)||void 0===o?void 0:o.first)&&this.handler.first.form.invalid}clearValues(){var o;(null===(o=this.handler)||void 0===o?void 0:o.first)&&this.handler.first.form&&this.handler.first.form.setDefault()}saveValue(){if(this.handler)return this.handler.first.saveValue();throw new Error("Imposible guarrdar el valor si no hay manejador")}}return m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["editable-create-related"]],contentQueries:function(o,_,d){if(1&o&&(r.Suo(d,r.Rgc,5),r.Suo(d,e,4)),2&o){let h;r.iGM(h=r.CRH())&&(_.template=h.first),r.iGM(h=r.CRH())&&(_.handler=h)}},inputs:{title:"title"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(o,_){1&o&&r.YNc(0,y,2,1,"ng-container",0),2&o&&r.Q6J("ngIf",_.template&&_.draw)},directives:[b.O5,b.tP],encapsulation:2}),m})(),x=(()=>{class m{constructor(){this.title="",this.draw=!1}}return m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["editable-view-related"]],contentQueries:function(o,_,d){if(1&o&&r.Suo(d,r.Rgc,5),2&o){let h;r.iGM(h=r.CRH())&&(_.template=h.first)}},inputs:{title:"title"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(o,_){1&o&&r.YNc(0,L,2,1,"ng-container",0),2&o&&r.Q6J("ngIf",_.template&&_.draw)},directives:[b.O5,b.tP],encapsulation:2}),m})(),B=(()=>{class m extends E.G7{constructor(o,_){super(o),this.cdRef=_,this.display="",this.searchId="uid",this.createLabel="Create new",this.noResultLabel="No results",this.errorSearchingLabel="Error searching",this.error=null,this.searching=!1,this.options=[],this.errorSearching=!1,this.contextFilter={},this.subscriptions.add(o.state.bindSelection(this.contextFilter).subscribe(d=>{}))}openShowRelatedData(o){if(o.cancelBubble=!0,console.log("QUIERO INTENTAR ABRIR",this.dialogRef),!this.showRelatedDialog)throw new Error("Intentando abrir un dialogo sin plantilla");this.viewRelated&&(this.viewRelated.draw=!0),this.dialogRef=this.service.dialog.open(this.showRelatedDialog,this.service.breakpoint.isMatched([n.u3.XSmall,n.u3.Small])?{panelClass:["fullscreen","fill-dialog"],autoFocus:!0,width:"100vw",maxWidth:"100vw",height:"100vh",maxHeight:"100vh",data:{list:this}}:{panelClass:["fill-dialog"],autoFocus:!0,width:"70vw",data:{list:this}}),this.dialogRef.afterClosed().subscribe(_=>{this.viewRelated&&(this.viewRelated.draw=!1)})}openCreateRelatedData(o){if(o.cancelBubble=!0,this.createRelated&&(this.createRelated.draw=!0),!this.createRelatedDialog)throw new Error("Intentando abrir un dialogo para crear sin plantilla");this.dialogRef=this.service.dialog.open(this.createRelatedDialog,this.service.breakpoint.isMatched([n.u3.XSmall,n.u3.Small])?{panelClass:["fullscreen","fill-dialog"],autoFocus:!0,width:"100vw",maxWidth:"100vw",height:"100vh",maxHeight:"100vh",data:{list:this}}:{panelClass:["fill-dialog"],autoFocus:!0,width:"70vw",data:{list:this}}),this.dialogRef.afterClosed().subscribe(_=>{this.createRelated&&(this.createRelated.draw=!1)})}createRelatedData(){if(this.error=null,!this.createRelated)throw new Error("Intentando guardar datos relacionados sin tener referencia del related");this.subscriptions.add(this.createRelated.saveValue().subscribe({next:o=>{this.valueCreated(o),this.dialogRef&&this.dialogRef.close()},error:o=>{this.error=o}}))}updateOptions(o){return o}searchOptions(o){var _;!o&&this.control&&(!(o=null===(_=this.control)||void 0===_?void 0:_.value)||"string"!=typeof o)&&(o=""),o||(o=""),(!o||"string"==typeof o)&&(o||(o=""),this.searching=!0,this.errorSearching=!1,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable)),this.search&&this.control&&(this.searchObservable=this.search(o,this.contextFilter,this.control).subscribe({next:d=>{const h=[];for(const K of d.content)h.push(K);this.options=this.updateOptions(h),this.searching=!1,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable),this.searchObservable=void 0),this.cdRef.detectChanges()},error:d=>{this.service.errorHandler.cancelError(d),this.errorSearching=d,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable),this.searchObservable=void 0),this.searching=!1}}),this.subscriptions.add(this.searchObservable)))}}return m.\u0275fac=function(o){return new(o||m)(r.Y36(M.U),r.Y36(r.sBO))},m.\u0275cmp=r.Xpm({type:m,selectors:[["editable-base"]],contentQueries:function(o,_,d){if(1&o&&(r.Suo(d,A,5),r.Suo(d,x,5),r.Suo(d,D,5)),2&o){let h;r.iGM(h=r.CRH())&&(_.createRelated=h.first),r.iGM(h=r.CRH())&&(_.viewRelated=h.first),r.iGM(h=r.CRH())&&(_.template=h.first)}},viewQuery:function(o,_){if(1&o&&(r.Gf(R,5),r.Gf(O,5)),2&o){let d;r.iGM(d=r.CRH())&&(_.showRelatedDialog=d.first),r.iGM(d=r.CRH())&&(_.createRelatedDialog=d.first)}},inputs:{display:"display",searchId:"searchId",createLabel:"createLabel",noResultLabel:"noResultLabel",errorSearchingLabel:"errorSearchingLabel",search:"search",retrieve:"retrieve"},features:[r.qOj],decls:0,vars:0,template:function(o,_){},encapsulation:2}),m})()},9952:(F,P,t)=>{t.d(P,{s:()=>q});var n=t(1079),r=t(727),E=t(5191),b=t(8372),M=t(9087),e=t(5e3),T=t(6050),y=t(9808),a=t(7322),L=t(7093),D=t(7531),R=t(3075),O=t(5245),A=t(5899),x=t(791),B=t(508),m=t(8966),f=t(7423),o=t(1062);function _(l,v){if(1&l){const i=e.EpF();e.TgZ(0,"mat-icon",14),e.NdJ("click",function(p){return e.CHM(i),e.oxw(2).openShowRelatedData(p)}),e._uU(1,"loupe"),e.qZA()}}function d(l,v){if(1&l){const i=e.EpF();e.TgZ(0,"mat-icon",14),e.NdJ("click",function(){return e.CHM(i),e.oxw(2).searchOptions()}),e._uU(1,"keyboard_arrow_down"),e.qZA()}}function h(l,v){1&l&&e._UZ(0,"mat-progress-bar",15)}function K(l,v){if(1&l&&(e.TgZ(0,"mat-error"),e._UZ(1,"editable-error-block",16),e.qZA()),2&l){const i=e.oxw(2);e.xp6(1),e.Q6J("messages",i.errorMessages)("control",i.control)}}function S(l,v){if(1&l&&(e.TgZ(0,"mat-form-field",9)(1,"mat-label"),e._uU(2),e.qZA(),e._UZ(3,"input",10),e.TgZ(4,"span",11),e.YNc(5,_,2,0,"mat-icon",6),e.YNc(6,d,2,0,"mat-icon",6),e.qZA(),e.TgZ(7,"div",12),e.YNc(8,h,1,0,"mat-progress-bar",13),e.qZA(),e.YNc(9,K,2,2,"mat-error",4),e.qZA()),2&l){const i=e.oxw(),s=e.MAs(3);e.Q6J("floatLabel",i.floatLabel)("appearance",i.appearance),e.xp6(2),e.Oqu(i.label),e.xp6(1),e.Q6J("required",i.required)("placeholder",i.placeholder)("formControl",i.control)("matAutocomplete",s),e.xp6(2),e.Q6J("ngIf",i.viewRelated&&i.control.value),e.xp6(1),e.Q6J("ngIf",!i.control.disabled),e.xp6(2),e.Q6J("ngIf",i.searching),e.xp6(1),e.Q6J("ngIf",i.control.invalid)}}function g(l,v){1&l&&e.GkF(0)}const I=function(l){return{$implicit:l}};function c(l,v){if(1&l&&(e.TgZ(0,"div",17),e.YNc(1,g,1,0,"ng-container",18),e.qZA()),2&l){const i=e.oxw();e.s9C("id",i.displayUid),e.xp6(1),e.Q6J("ngTemplateOutlet",i.template)("ngTemplateOutletContext",e.VKq(3,I,i.control.value))}}function u(l,v){if(1&l&&(e.TgZ(0,"mat-option"),e._uU(1),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Oqu(i.errorSearchingLabel)}}function Q(l,v){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const i=e.oxw().$implicit,s=e.oxw();e.xp6(1),e.hij(" ",s.displayLabel(i)," ")}}function Z(l,v){1&l&&e.GkF(0)}function W(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Z,1,0,"ng-container",18),e.BQk()),2&l){const i=e.oxw().$implicit,s=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",s.template)("ngTemplateOutletContext",e.VKq(2,I,i))}}function V(l,v){if(1&l&&(e.TgZ(0,"mat-option",19),e.YNc(1,Q,2,1,"ng-container",4),e.YNc(2,W,2,4,"ng-container",4),e.qZA()),2&l){const i=v.$implicit,s=e.oxw();e.Q6J("value",i),e.xp6(1),e.Q6J("ngIf",!s.template),e.xp6(1),e.Q6J("ngIf",s.template)}}function N(l,v){if(1&l&&(e.TgZ(0,"mat-option")(1,"mat-icon"),e._uU(2,"warning"),e.qZA(),e._uU(3),e.qZA()),2&l){const i=e.oxw();e.xp6(3),e.hij("",i.noResultLabel," ")}}function Y(l,v){if(1&l){const i=e.EpF();e.TgZ(0,"mat-option",14),e.NdJ("click",function(p){return e.CHM(i),e.oxw().openCreateRelatedData(p)}),e.TgZ(1,"mat-icon"),e._uU(2,"add"),e.qZA(),e._uU(3),e.qZA()}if(2&l){const i=e.oxw();e.xp6(3),e.hij(" ",i.createLabel," ")}}function X(l,v){if(1&l){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",26),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return null==p.dialogRef?null:p.dialogRef.close()}),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",27),e.NdJ("click",function(){return e.CHM(i),e.oxw(2).createRelatedData()}),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.BQk()}if(2&l){const i=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,3,(null==i.createRelated?null:i.createRelated.title)+".cancel")),e.xp6(2),e.Q6J("disabled",!i.createRelated||i.createRelated.isInvalid()),e.xp6(1),e.hij(" ",e.lcZ(6,5,(null==i.createRelated?null:i.createRelated.title)+".save")," ")}}function j(l,v){if(1&l){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",26),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return null==p.dialogRef?null:p.dialogRef.close()}),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",28),e.NdJ("click",function(){return e.CHM(i),e.oxw(2).error=null}),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.BQk()}if(2&l){const i=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,(null==i.createRelated?null:i.createRelated.title)+".cancel")),e.xp6(3),e.hij(" ",e.lcZ(6,4,(null==i.createRelated?null:i.createRelated.title)+".back")," ")}}function H(l,v){if(1&l){const i=e.EpF();e.TgZ(0,"div",20)(1,"button",21),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return null==p.dialogRef?null:p.dialogRef.close()}),e.TgZ(2,"mat-icon"),e._uU(3,"close"),e.qZA()(),e.TgZ(4,"h2",22),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e._UZ(7,"hr",23),e.Hsn(8),e.TgZ(9,"div",24),e._UZ(10,"span",25),e.YNc(11,X,7,7,"ng-container",4),e.YNc(12,j,7,6,"ng-container",4),e.qZA()}if(2&l){const i=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,3,(null==i.createRelated?null:i.createRelated.title)+".title")),e.xp6(6),e.Q6J("ngIf",!i.error),e.xp6(1),e.Q6J("ngIf",i.error)}}function G(l,v){if(1&l&&(e.TgZ(0,"h2",29),e._uU(1),e.qZA(),e.TgZ(2,"div",30),e.Hsn(3,1,["mat-dialog-content",""]),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Oqu(null==i.viewRelated?null:i.viewRelated.title)}}const k=[[["editable-create-related"]],[["editable-view-related"]]],z=["editable-create-related","editable-view-related"];let $=0,q=(()=>{class l extends M.Kr{constructor(i,s){super(i,s),this.searchSubscription=new r.w0,this.displayUid="_display_"+$+++(new Date).getTime()}valueCreated(i){this.control&&(this.control.setValue(i),setTimeout(()=>{var s;null===(s=this.trigger)||void 0===s||s.closePanel()},100))}ngOnDestroy(){this.searchSubscription.unsubscribe(),super.ngOnDestroy()}ngAfterContentInit(){if(!this.control)throw new Error("Control no asignado");{this.subscriptions.add(this.control.valueChanges.subscribe(p=>{const w=this.value();(0,E.b)(w)&&this.wait(w,s)})),this.subscriptions.add(this.control.valueChanges.pipe((0,b.b)(700)).subscribe({next:p=>{var w,C;const U=this.value();U&&!(0,E.b)(U)&&(U&&"object"==typeof U?JSON.stringify(U)!==JSON.stringify(null===(w=this.control)||void 0===w?void 0:w.value)&&(null===(C=this.control)||void 0===C||C.setValue(U)):this.searchOptions(U))}}));const i=this.value(),s=this.control.disabled;if((0,E.b)(i))this.wait(i,s);else if(i&&"object"!=typeof i){const p={};p[this.searchId]=i,this.loadSearch(p,s)}else!i&&null!==i&&this.control.setValue(null)}}loadSearch(i,s){var p;if(s||null===(p=this.control)||void 0===p||p.markAsPending(),this.searching=!0,this.cdRef.detectChanges(),this.cdRef.markForCheck(),this.searchSubscription.unsubscribe(),this.searchSubscription=new r.w0,!this.retrieve)throw new Error("No existe la funcion para recuperar relacionados");this.searchSubscription.add(this.retrieve(i).subscribe({next:w=>{var C;this.searching=!1,null===(C=this.control)||void 0===C||C.setValue(w)}}))}checkRelatedValue(){this.control&&"string"==typeof this.control.value&&this.control.setValue(null)}displayLabel(i){var s;if(this.template){const C=null===(s=document.getElementById(this.displayUid))||void 0===s?void 0:s.innerText;return this.oldDisplay!==C&&setTimeout(()=>{var U,J;null===(U=this.control)||void 0===U||U.patchValue(null===(J=this.control)||void 0===J?void 0:J.value)},1e3),this.oldDisplay=C,C}if(!i)return"";let p=i;const w=this.display.split(".");for(const C of w){if(!p[C])return"";p=p[C]}return p}wait(i,s){var p;s||null===(p=this.control)||void 0===p||p.markAsPending(),this.searching=!0,this.cdRef.detectChanges(),this.cdRef.markForCheck(),this.searchSubscription.unsubscribe(),this.searchSubscription=new r.w0,this.searchSubscription.add(i.subscribe({next:w=>{var C;this.searching=!1,null===(C=this.control)||void 0===C||C.setValue(w)}}))}value(){var i;const s=null===(i=this.control)||void 0===i?void 0:i.value;return"string"==typeof s?s:s&&s.value&&s.$ref?s.value:s&&void 0===s.$ref?s:void 0}}return l.\u0275fac=function(i){return new(i||l)(e.Y36(T.U),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["editable-selectone"]],viewQuery:function(i,s){if(1&i&&e.Gf(n.ZL,5),2&i){let p;e.iGM(p=e.CRH())&&(s.trigger=p.first)}},features:[e.qOj],ngContentSelectors:z,decls:12,vars:7,consts:[["fxFlex","100%",3,"floatLabel","appearance",4,"ngIf"],["style","position: absolute; width: 1px; height: 1px; overflow: hidden",3,"id",4,"ngIf"],[3,"displayWith","opened","closed"],["autocomplete","matAutocomplete"],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],["showCreateRelated",""],["showViewRelated",""],["fxFlex","100%",3,"floatLabel","appearance"],["matInput","",3,"required","placeholder","formControl","matAutocomplete"],["matSuffix","",2,"display","flex"],[2,"position","absolute","width","100%","height","3px"],["mode","query",4,"ngIf"],[3,"click"],["mode","query"],[3,"messages","control"],[2,"position","absolute","width","1px","height","1px","overflow","hidden",3,"id"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"value"],["mat-dialog-title","",2,"display","flex","margin-bottom","0px"],["mat-icon-button","",2,"margin-top","-5px",3,"click"],[2,"margin-top","0"],[2,"margin","-5px -25px 15px -25px"],["mat-dialog-actions","",2,"display","flex","margin-bottom","0px","margin-top","5px"],[2,"flex","1 1 auto"],["mat-button","",3,"click"],["mat-button","","color","primary",3,"disabled","click"],["mat-button","","color","primary",3,"click"],["mat-dialog-title",""],[2,"display","flex","flex-direction","column","max-height","600px","overflow","auto"]],template:function(i,s){1&i&&(e.F$t(k),e.YNc(0,S,10,11,"mat-form-field",0),e.YNc(1,c,2,5,"div",1),e.TgZ(2,"mat-autocomplete",2,3),e.NdJ("opened",function(){return s.searchOptions()})("closed",function(){return s.checkRelatedValue()}),e.YNc(4,u,2,1,"mat-option",4),e.YNc(5,V,3,3,"mat-option",5),e.YNc(6,N,4,1,"mat-option",4),e.YNc(7,Y,4,1,"mat-option",6),e.qZA(),e.YNc(8,H,13,5,"ng-template",null,7,e.W1O),e.YNc(10,G,4,1,"ng-template",null,8,e.W1O)),2&i&&(e.Q6J("ngIf",s.control),e.xp6(1),e.Q6J("ngIf",s.control&&s.template),e.xp6(1),e.Q6J("displayWith",s.displayLabel.bind(s)),e.xp6(2),e.Q6J("ngIf",s.errorSearching),e.xp6(1),e.Q6J("ngForOf",s.options),e.xp6(1),e.Q6J("ngIf",!s.errorSearching&&s.options&&0==s.options.length),e.xp6(1),e.Q6J("ngIf",s.createRelated&&s.options))},directives:[y.O5,a.KE,L.yH,a.hX,D.Nt,R.Fj,n.ZL,R.Q7,R.JJ,R.oH,a.R9,O.Hw,A.pW,a.TO,x.qJ,y.tP,n.XC,B.ey,y.sg,m.uh,f.lW,m.H8],pipes:[o.X$],encapsulation:2,changeDetection:0}),l})()},960:(F,P,t)=>{t.d(P,{M:()=>A});var n=t(9808),r=t(2155),E=t(3075),b=t(1079),M=t(7423),e=t(8966),T=t(7322),y=t(5245),a=t(7531),L=t(5899),D=t(1062),R=t(1614),O=t(5e3);let A=(()=>{class x{}return x.\u0275fac=function(m){return new(m||x)},x.\u0275mod=O.oAB({type:x}),x.\u0275inj=O.cJS({providers:[],imports:[[n.ez,D.aw,E.u5,R.r,E.UX,r.o9,a.c,T.lN,b.Bb,L.Cv,e.Is,M.ot,y.Ps]]}),x})()},5899:(F,P,t)=>{t.d(P,{Cv:()=>m,pW:()=>x});var n=t(5e3),r=t(9808),E=t(508),b=t(3191),M=t(6360),e=t(727),T=t(4968),y=t(9300);const a=["primaryValueBar"],L=(0,E.pj)(class{constructor(f){this._elementRef=f}},"primary"),D=new n.OlP("mat-progress-bar-location",{providedIn:"root",factory:function R(){const f=(0,n.f3M)(r.K0),o=f?f.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),O=new n.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let A=0,x=(()=>{class f extends L{constructor(_,d,h,K,S,g){super(_),this._ngZone=d,this._animationMode=h,this._changeDetectorRef=g,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new n.vpe,this._animationEndSubscription=e.w0.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+A++;const I=K?K.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${I}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===h,S&&(S.color&&(this.color=this.defaultColor=S.color),this.mode=S.mode||this.mode)}get value(){return this._value}set value(_){var d;this._value=B((0,b.su)(_)||0),null===(d=this._changeDetectorRef)||void 0===d||d.markForCheck()}get bufferValue(){return this._bufferValue}set bufferValue(_){var d;this._bufferValue=B(_||0),null===(d=this._changeDetectorRef)||void 0===d||d.markForCheck()}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const _=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,T.R)(_,"transitionend").pipe((0,y.h)(d=>d.target===_)).subscribe(()=>{0!==this.animationEnd.observers.length&&("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return f.\u0275fac=function(_){return new(_||f)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(M.Qb,8),n.Y36(D,8),n.Y36(O,8),n.Y36(n.sBO))},f.\u0275cmp=n.Xpm({type:f,selectors:[["mat-progress-bar"]],viewQuery:function(_,d){if(1&_&&n.Gf(a,5),2&_){let h;n.iGM(h=n.CRH())&&(d._primaryValueBar=h.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(_,d){2&_&&(n.uIk("aria-valuenow","indeterminate"===d.mode||"query"===d.mode?null:d.value)("mode",d.mode),n.ekj("_mat-animation-noopable",d._isNoopAnimation))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[n.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(_,d){1&_&&(n.TgZ(0,"div",0),n.O4$(),n.TgZ(1,"svg",1)(2,"defs")(3,"pattern",2),n._UZ(4,"circle",3),n.qZA()(),n._UZ(5,"rect",4),n.qZA(),n.kcU(),n._UZ(6,"div",5)(7,"div",6,7)(9,"div",8),n.qZA()),2&_&&(n.xp6(3),n.Q6J("id",d.progressbarId),n.xp6(2),n.uIk("fill",d._rectangleFillValue),n.xp6(1),n.Q6J("ngStyle",d._bufferTransform()),n.xp6(1),n.Q6J("ngStyle",d._primaryTransform()))},directives:[r.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),f})();function B(f,o=0,_=100){return Math.max(o,Math.min(_,f))}let m=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275mod=n.oAB({type:f}),f.\u0275inj=n.cJS({imports:[[r.ez,E.BQ],E.BQ]}),f})()}}]);