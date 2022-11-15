"use strict";(self.webpackChunkagenda_angular=self.webpackChunkagenda_angular||[]).push([[94],{4094:(M,_,t)=>{t.r(_),t.d(_,{UsersViewDetailComponent:()=>w});var u=t(6537),f=t(3075),c=t(727),m=t(262),v=t(2843),g=t(8505),p=t(5097),e=t(5e3),x=t(1654),b=t(9808),E=t(791),O=t(502),h=t(7093),D=t(1062);function C(l,n){if(1&l&&(e.TgZ(0,"editable-text",2),e.ALo(1,"translate"),e.ALo(2,"translate"),e._UZ(3,"editable-error",3),e.ALo(4,"translate"),e._UZ(5,"editable-error",4),e.ALo(6,"translate"),e.qZA()),2&l){const i=e.oxw(2);e.s9C("label",e.lcZ(1,6,".users-view.form.login.label")),e.s9C("placeholder",e.lcZ(2,8,".users-view.form.login.placeholder")),e.Q6J("control",i.fields.login.control)("required",!0),e.xp6(3),e.s9C("message",e.lcZ(4,10,".users-view.form.login.rule.required")),e.xp6(2),e.s9C("message",e.lcZ(6,12,".users-view.form.login.rule.maxlength"))}}function P(l,n){if(1&l&&e.YNc(0,C,7,14,"editable-text",1),2&l){const i=e.oxw();e.Q6J("ngIf",null==i.fields.login?null:i.fields.login.visible)}}let w=(()=>{class l{constructor(i,s,d){this.usersRepository=i,this.cdRef=s,this.disabled=!0,this.defaults={},this.fixed=[],this.hidden=[],this.fields={login:{visible:!0,editable:!0,disabled:!1}},this.fixedFields=[],this.initialsAndDefaults={},this.dirty=!1,this.invalid=!1,this.error=null,this.subscriptions=new c.w0,this.initialsAndDefaults={login:""},this.form=d.group({login:this.fields.login.control=new f.NI("",[f.kI.required,f.kI.maxLength(250)])})}ngOnInit(){}ngAfterViewInit(){var i;this.acl?this.updateAcl():null!==(i=this.data)&&void 0!==i&&i.uid?this.usersRepository.specificAcl(this.data.uid).subscribe(s=>{this.acl=s,this.updateAcl()}):this.usersRepository.genericAcl().subscribe(s=>{this.acl=s,this.updateAcl()}),this.subscriptions.add(this.form.valueChanges.subscribe({next:()=>{this.updateValues()}})),this.formView&&this.formView.bindValues(this.fields)}ngOnDestroy(){this.subscriptions.unsubscribe()}ngOnChanges(i){i.defaults&&Object.assign(this.initialsAndDefaults,this.defaults),i.fixed&&(this.fixedFields=[],this.fixed.forEach&&this.fixed.forEach(s=>{this.fixedFields.push(s)})),i.acl&&this.updateAcl()}clearErrors(){this.formView&&this.formView.clearErrors()}saveValue(){if(this.formView){const i=this.usersRepository.key(this.data),s=this.formView.retrieveValue();return(i?this.usersRepository.update(i,s):this.usersRepository.add(s)).pipe((0,p.I)(),(0,m.K)(o=>{var a;return i&&this.usersRepository.retrieve(i).subscribe(r=>{this.formView&&this.formView.markOriginal(r)}),null===(a=this.formView)||void 0===a||a.showError(o),(0,v._)(()=>o)}),(0,g.b)(o=>{var a;Object.keys(o).forEach(r=>{this.data[r]=o[r],this.formView&&(this.formView.data[r]=o[r])}),null===(a=this.formView)||void 0===a||a.refresh()}))}throw new Error("Intentando guardar sin formView")}updateValues(){var i,s;this.formView&&this.formView.bindValues(this.fields),this.dirty=!(null===(i=this.form)||void 0===i||!i.dirty),this.invalid=!(null===(s=this.form)||void 0===s||!s.invalid),this.cdRef.detectChanges()}updateAcl(){var i,s;this.formView&&this.formView.bindFields(this.fields),this.dirty=!(null===(i=this.form)||void 0===i||!i.dirty),this.invalid=!(null===(s=this.form)||void 0===s||!s.invalid),this.cdRef.detectChanges()}}return l.\u0275fac=function(i){return new(i||l)(e.Y36(x.m),e.Y36(e.sBO),e.Y36(f.qu))},l.\u0275cmp=e.Xpm({type:l,selectors:[["users-view-detail"]],viewQuery:function(i,s){if(1&i&&e.Gf(u.k,7),2&i){let d;e.iGM(d=e.CRH())&&(s.formView=d.first)}},inputs:{defaults:"defaults",editables:"editables",visibles:"visibles",fixed:"fixed",hidden:"hidden",acl:"acl",data:"data"},features:[e.TTD],decls:2,vars:10,consts:[["fxLayout","row wrap","fxLayoutGap","10px",3,"messagePreffix","form","disabled","fixed","hidden","editables","visibles","defaults","acl","data"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-users-login",3,"control","required","label","placeholder",4,"ngIf"],["fxFlex","45%","fxFlex.sm","90%","fxFlex.xs","90%","id","editable-users-login",3,"control","required","label","placeholder"],["for","required",3,"message"],["for","maxlength",3,"message"]],template:function(i,s){1&i&&(e.TgZ(0,"form-view",0),e.YNc(1,P,1,1,"ng-template"),e.qZA()),2&i&&e.Q6J("messagePreffix",".users")("form",s.form)("disabled",s.disabled)("fixed",s.fixedFields)("hidden",s.hidden)("editables",s.editables)("visibles",s.visibles)("defaults",s.initialsAndDefaults)("acl",s.acl)("data",s.data)},dependencies:[b.O5,E.IK,O.x,h.xw,h.SQ,h.yH,u.k,D.X$],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.inicial[_ngcontent-%COMP%], .modificado[_ngcontent-%COMP%], .remoto[_ngcontent-%COMP%]{display:block;margin:.5em}.diff-field[_ngcontent-%COMP%]{font-weight:700;font-size:20px}"],changeDetection:0}),l})()}}]);