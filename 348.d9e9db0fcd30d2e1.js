"use strict";(self.webpackChunkagenda_angular=self.webpackChunkagenda_angular||[]).push([[348],{9087:(R,g,n)=>{n.d(g,{Kr:()=>c,MI:()=>s,XX:()=>u});var a=n(2289),t=n(4650),m=n(8505),_=n(791),f=n(6050);const y=["template"],h=["showViewRelated"],b=["showCreateRelated"],v=["contentViewRelated"],p=["contentCreateRelated"];let u=(()=>{class r{constructor(){this.title="",this.build=null}buildComponent(e){return this.build(e).pipe((0,m.b)(l=>{this.handler=l}))}isInvalid(){return this.handler&&this.handler.form.invalid}clearValues(){this.handler&&this.handler.form&&this.handler.form.setDefault()}saveValue(){if(this.handler)return this.handler.saveValue();throw new Error("Imposible guarrdar el valor si no hay manejador")}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["editable-create-related"]],inputs:{title:"title",build:"build"},decls:0,vars:0,template:function(e,l){},encapsulation:2}),r})(),s=(()=>{class r{constructor(){this.title="",this.build=null}buildComponent(e){return this.build(e)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["editable-view-related"]],inputs:{title:"title",build:"build"},decls:0,vars:0,template:function(e,l){},encapsulation:2}),r})(),c=(()=>{class r extends _.G7{constructor(e,l){super(e),this.cdRef=l,this.display="",this.searchId="uid",this.createLabel="Create new",this.noResultLabel="No results",this.errorSearchingLabel="Error searching",this.error=null,this.searching=!1,this.options=[],this.errorSearching=!1,this.contextFilter={},this.subscriptions.add(e.state.bindSelection(this.contextFilter).subscribe(i=>{}))}openShowRelatedData(e){if(e.cancelBubble=!0,!this.showRelatedDialog)throw new Error("Intentando abrir un dialogo sin plantilla");this.dialogRef=this.service.dialog.open(this.showRelatedDialog,this.service.breakpoint.isMatched([a.u3.XSmall,a.u3.Small])?{panelClass:["fullscreen","fill-dialog"],autoFocus:!0,width:"100vw",maxWidth:"100vw",height:"100vh",maxHeight:"100vh",data:{list:this}}:{panelClass:["fill-dialog"],autoFocus:!0,width:"70vw",data:{list:this}}),this.dialogRef.afterOpened().subscribe(l=>{setTimeout(()=>{var i,d;null===(i=this.viewRelated)||void 0===i||i.buildComponent(null===(d=this.contentViewRelated)||void 0===d?void 0:d.first).subscribe()})})}openCreateRelatedData(e){if(e.cancelBubble=!0,!this.createRelatedDialog)throw new Error("Intentando abrir un dialogo para crear sin plantilla");this.dialogRef=this.service.dialog.open(this.createRelatedDialog,this.service.breakpoint.isMatched([a.u3.XSmall,a.u3.Small])?{panelClass:["fullscreen","fill-dialog"],autoFocus:!0,width:"100vw",maxWidth:"100vw",height:"100vh",maxHeight:"100vh",data:{list:this}}:{panelClass:["fill-dialog"],autoFocus:!0,width:"70vw",data:{list:this}}),this.dialogRef.afterOpened().subscribe(l=>{setTimeout(()=>{var i,d;null===(i=this.createRelated)||void 0===i||i.buildComponent(null===(d=this.contentCreateRelated)||void 0===d?void 0:d.first).subscribe()})})}createRelatedData(){if(this.error=null,!this.createRelated)throw new Error("Intentando guardar datos relacionados sin tener referencia del related");this.subscriptions.add(this.createRelated.saveValue().subscribe({next:e=>{this.valueCreated(e),this.dialogRef&&this.dialogRef.close()},error:e=>{this.error=e}}))}updateOptions(e){return e}searchOptions(e){var l;!e&&this.control&&(!(e=null===(l=this.control)||void 0===l?void 0:l.value)||"string"!=typeof e)&&(e=""),e||(e=""),(!e||"string"==typeof e)&&(e||(e=""),this.searching=!0,this.errorSearching=!1,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable)),this.search&&this.control&&(this.searchObservable=this.search(e,this.contextFilter,this.control).subscribe({next:i=>{const d=[];for(const E of i.content)d.push(E);this.options=this.updateOptions(d),this.searching=!1,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable),this.searchObservable=void 0),this.cdRef.detectChanges()},error:i=>{this.service.errorHandler.cancelError(i),this.errorSearching=i,this.searchObservable&&(this.searchObservable.unsubscribe(),this.subscriptions.remove(this.searchObservable),this.searchObservable=void 0),this.searching=!1}}),this.subscriptions.add(this.searchObservable)))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(f.U),t.Y36(t.sBO))},r.\u0275cmp=t.Xpm({type:r,selectors:[["editable-base"]],contentQueries:function(e,l,i){if(1&e&&(t.Suo(i,u,5),t.Suo(i,s,5),t.Suo(i,y,5)),2&e){let d;t.iGM(d=t.CRH())&&(l.createRelated=d.first),t.iGM(d=t.CRH())&&(l.viewRelated=d.first),t.iGM(d=t.CRH())&&(l.template=d.first)}},viewQuery:function(e,l){if(1&e&&(t.Gf(h,5),t.Gf(b,5),t.Gf(v,5,t.s_b),t.Gf(p,5,t.s_b)),2&e){let i;t.iGM(i=t.CRH())&&(l.showRelatedDialog=i.first),t.iGM(i=t.CRH())&&(l.createRelatedDialog=i.first),t.iGM(i=t.CRH())&&(l.contentViewRelated=i),t.iGM(i=t.CRH())&&(l.contentCreateRelated=i)}},inputs:{display:"display",searchId:"searchId",createLabel:"createLabel",noResultLabel:"noResultLabel",errorSearchingLabel:"errorSearchingLabel",search:"search",retrieve:"retrieve"},features:[t.qOj],decls:0,vars:0,template:function(e,l){},encapsulation:2}),r})()},960:(R,g,n)=>{n.d(g,{M:()=>c});var a=n(6895),t=n(4006),m=n(7957),_=n(4859),f=n(7274),y=n(9549),h=n(7392),b=n(4144),v=n(3162),p=n(9383),u=n(1614),s=n(4650);let c=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[a.ez,p.aw,t.u5,u.r,t.UX,b.c,y.lN,m.Bb,v.Cv,f.Is,_.ot,h.Ps]}),r})()},3162:(R,g,n)=>{n.d(g,{Cv:()=>u,pW:()=>v});var a=n(4650),m=(n(6895),n(3238)),_=n(1281);const f=new a.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),b=(0,m.pj)(class{constructor(s){this._elementRef=s}},"primary");let v=(()=>{class s extends b{constructor(r,o,e,l,i){super(r),this._ngZone=o,this._changeDetectorRef=e,this._animationMode=l,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new a.vpe,this._mode="determinate",this._transitionendHandler=d=>{0===this.animationEnd.observers.length||!d.target||!d.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===l,i&&(i.color&&(this.color=this.defaultColor=i.color),this.mode=i.mode||this.mode)}get value(){return this._value}set value(r){this._value=p((0,_.su)(r)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=p((0,_.su)(r)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(a.sBO),a.Y36(a.QbO,8),a.Y36(f,8))},s.\u0275cmp=a.Xpm({type:s,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(r,o){2&r&&(a.uIk("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),a.ekj("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[a.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(r,o){1&r&&(a.TgZ(0,"div",0),a._UZ(1,"div",1)(2,"div",2),a.qZA(),a.TgZ(3,"div",3),a._UZ(4,"span",4),a.qZA(),a.TgZ(5,"div",5),a._UZ(6,"span",4),a.qZA()),2&r&&(a.xp6(1),a.Udp("flex-basis",o._getBufferBarFlexBasis()),a.xp6(2),a.Udp("transform",o._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),s})();function p(s,c=0,r=100){return Math.max(c,Math.min(r,s))}let u=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[m.BQ]}),s})()}}]);