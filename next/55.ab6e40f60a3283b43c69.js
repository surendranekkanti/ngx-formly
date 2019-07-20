(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"+RMD":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule, ValidationErrors } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { FormControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidator</span>(<span class="hljs-params">control: FormControl</span>): <span class="hljs-title">ValidationErrors</span> </span>{\n  <span class="hljs-keyword">return</span> !control.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(control.value) ? <span class="hljs-literal">null</span> : { <span class="hljs-string">\'ip\'</span>: <span class="hljs-literal">true</span> };\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidatorMessage</span>(<span class="hljs-params">err, field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [\n        { name: <span class="hljs-string">\'ip\'</span>, validation: IpValidator },\n      ],\n      validationMessages: [\n        { name: <span class="hljs-string">\'ip\'</span>, message: IpValidatorMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"4i0H":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},A44q:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl, ValidationErrors } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return !control.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation declared in ngModule)',\n        required: true,\n      },\n      validators: {\n        validation: ['ip'],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.validation` property)',\n        required: true,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.expression` property)',\n        description: 'custom validation message through `validators` property',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: (c) => !c.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"P+Lj":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, FormControl, ValidationErrors } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidator</span>(<span class="hljs-params">control: FormControl</span>): <span class="hljs-title">ValidationErrors</span> </span>{\n  <span class="hljs-keyword">return</span> !control.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(control.value) ? <span class="hljs-literal">null</span> : { <span class="hljs-string">\'ip\'</span>: <span class="hljs-literal">true</span> };\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation declared in ngModule)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        validation: [<span class="hljs-string">\'ip\'</span>],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation through `validators.validation` property)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation through `validators.expression` property)\'</span>,\n        description: <span class="hljs-string">\'custom validation message through `validators` property\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        ip: {\n          expression: <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> !c.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(c.value),\n          message: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},RUTQ:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),o=a("gIcY");function r(n){return!n.value||/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}var t=function(){function n(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation declared in ngModule)",required:!0},validators:{validation:["ip"]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.validation` property)",required:!0},validators:{validation:[r]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.expression` property)",description:"custom validation message through `validators` property",required:!0},validators:{ip:{expression:function(n){return!n.value||/(\d{1,3}\.){3}\d{1,3}/.test(n.value)},message:function(n,s){return'"'+s.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Custom validation",description:"\n              This demonstrates the different ways to define a custom validation, globally or for a specific field.\n            ",component:t,files:[{file:"app.component.html",content:a("oM3T"),filecontent:a("4i0H")},{file:"app.component.ts",content:a("P+Lj"),filecontent:a("A44q")},{file:"app.module.ts",content:a("+RMD"),filecontent:a("hawJ")}]}]},e=function(){return function(){}}(),i=a("NcP4"),m=a("AcC/"),d=a("htty"),c=a("5yjx"),u=a("bg4O"),f=a("1C3p"),h=a("aMyW"),g=a("cD0v"),j=a("FZbr"),y=a("jYRx"),v=a("YBPd"),b=a("pMnS"),F=a("4o01"),C=a("Dl9q"),w=a("UcnZ"),k=a("DAbo"),M=a("9Glx"),x=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,r=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,2).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==r.submit()&&o),o},null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,C.b,C.a)),l["\u0275prd"](512,null,w.a,w.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,M.a,[w.a,k.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending)})}function A(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,I,x)),l["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var _=l["\u0275ccf"]("formly-app-example",t,A,{},{},[]),R=a("Ip0R"),P=a("M2Lx"),V=a("eDkP"),O=a("Fzqc"),S=a("v9Dh"),q=a("ZYjt"),D=a("Wf4p"),E=a("mVsa"),G=a("6LlJ"),N=a("F6kA"),L=a("dWZg"),J=a("lLAP"),T=a("4c35"),U=a("qAlS"),B=a("La40"),H=a("SMsm"),W=a("UodH"),Y=a("5QwG"),Z=a("vqwi"),z=a("WJWa"),$=a("aD/X"),Q=a("rxDs"),X=a("bCbW"),K=a("7yie"),nn=a("xWhi"),sn=a("owZ6"),an=a("DwvE"),ln=a("XR12");function on(n){return!n.value||/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}function rn(n,s){return'"'+s.formControl.value+'" is not a valid IP Address'}a("HkYz");var tn=function(){return function(){}}(),pn=a("Nsh5"),en=a("8mMr"),mn=a("mqvi"),dn=a("lhp3"),cn=a("izcw"),un=a("z6f/"),fn=a("lYui"),hn=a("QcTH"),gn=a("82Si"),jn=a("cJUE"),yn=a("eqw4"),vn=a("nyVy"),bn=a("7BuT"),Fn=a("ZYCi"),Cn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return wn});var wn=l["\u0275cmf"](e,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,m.a,d.a,c.a,u.a,f.a,h.a,g.a,j.a,y.a,v.a,b.a,F.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[l.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,P.c,P.c,[]),l["\u0275mpd"](4608,V.c,V.c,[V.i,V.e,l.ComponentFactoryResolver,V.h,V.f,l.Injector,l.NgZone,R.DOCUMENT,O.b,[2,R.Location]]),l["\u0275mpd"](5120,V.j,V.k,[V.c]),l["\u0275mpd"](5120,S.b,S.c,[V.c]),l["\u0275mpd"](4608,q.HAMMER_GESTURE_CONFIG,D.c,[[2,D.g],[2,D.l]]),l["\u0275mpd"](5120,E.b,E.g,[V.c]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,N.a,N.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,w.a,w.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),l["\u0275mpd"](1073742336,L.b,L.b,[]),l["\u0275mpd"](1073742336,P.d,P.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,O.a,O.a,[]),l["\u0275mpd"](1073742336,T.g,T.g,[]),l["\u0275mpd"](1073742336,U.c,U.c,[]),l["\u0275mpd"](1073742336,V.g,V.g,[]),l["\u0275mpd"](1073742336,D.l,D.l,[[2,D.d],[2,q.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,S.e,S.e,[]),l["\u0275mpd"](1073742336,D.v,D.v,[]),l["\u0275mpd"](1073742336,B.j,B.j,[]),l["\u0275mpd"](1073742336,E.e,E.e,[]),l["\u0275mpd"](1073742336,H.c,H.c,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,Y.b,Y.b,[]),l["\u0275mpd"](512,k.b,k.b,[]),l["\u0275mpd"](1024,k.a,function(n){return[{wrappers:[{name:"form-field",component:Z.a}]},{types:[{name:"input",component:z.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:$.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:X.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:K.a,wrappers:["form-field"]}]},{types:[{name:"select",component:nn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:sn.a}],extensions:[{name:"addons",extension:{postPopulate:an.a}}]},ln.b(n),{validators:[{name:"ip",validation:on}],validationMessages:[{name:"ip",message:rn}]}]},[k.b]),l["\u0275mpd"](1073742336,ln.a,ln.a,[k.b,[2,k.a]]),l["\u0275mpd"](1073742336,pn.h,pn.h,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,jn.a,jn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,vn.a,vn.a,[]),l["\u0275mpd"](1073742336,bn.a,bn.a,[]),l["\u0275mpd"](1073742336,tn,tn,[]),l["\u0275mpd"](1073742336,Fn.s,Fn.s,[[2,Fn.y],[2,Fn.p]]),l["\u0275mpd"](1073742336,e,e,[]),l["\u0275mpd"](1024,Fn.n,function(){return[[{path:"",component:Cn.a,data:p}]]},[])])})},hawJ:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule, ValidationErrors } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { FormControl } from '@angular/forms';\nimport { AppComponent } from './app.component';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return !control.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\nexport function IpValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"${field.formControl.value}\" is not a valid IP Address`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [\n        { name: 'ip', validation: IpValidator },\n      ],\n      validationMessages: [\n        { name: 'ip', message: IpValidatorMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},oM3T:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);