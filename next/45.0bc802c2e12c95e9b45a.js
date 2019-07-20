(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"2MLY":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n\n  model = {\n    lastName: 'Smith',\n  };\n\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      defaultValue: 'This is a default value',\n      templateOptions: {\n        label: 'First Name (initialized via default value)',\n      },\n    },\n    {\n      key: 'lastName',\n      type: 'input',\n      defaultValue: 'This is a default value',\n      templateOptions: {\n        label: 'Last Name (initialized via the model)',\n      },\n    },\n    {\n      key: 'candy',\n      type: 'select',\n      defaultValue: 'milky_way',\n      templateOptions: {\n        label: 'Favorite Candy (initialized via default value',\n        options: [\n          { label: 'Snickers', value: 'snickers' },\n          { label: 'Baby Ruth', value: 'baby_ruth' },\n          { label: 'Milky Way', value: 'milky_way' },\n        ],\n      },\n    },\n    {\n      key: 'agree',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Agree? (not initialized at all)',\n        required: true,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},Q3rr:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>'},bWD0:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>'},oQxA:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n\n  model = {\n    lastName: <span class="hljs-string">\'Smith\'</span>,\n  };\n\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-string">\'This is a default value\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'First Name (initialized via default value)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'lastName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-string">\'This is a default value\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Last Name (initialized via the model)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'candy\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      defaultValue: <span class="hljs-string">\'milky_way\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Favorite Candy (initialized via default value\'</span>,\n        options: [\n          { label: <span class="hljs-string">\'Snickers\'</span>, value: <span class="hljs-string">\'snickers\'</span> },\n          { label: <span class="hljs-string">\'Baby Ruth\'</span>, value: <span class="hljs-string">\'baby_ruth\'</span> },\n          { label: <span class="hljs-string">\'Milky Way\'</span>, value: <span class="hljs-string">\'milky_way\'</span> },\n        ],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'agree\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Agree? (not initialized at all)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},r8TX:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),e=a("gIcY"),o=function(){function n(){this.form=new e.FormGroup({}),this.model={lastName:"Smith"},this.options={},this.fields=[{key:"firstName",type:"input",defaultValue:"This is a default value",templateOptions:{label:"First Name (initialized via default value)"}},{key:"lastName",type:"input",defaultValue:"This is a default value",templateOptions:{label:"Last Name (initialized via the model)"}},{key:"candy",type:"select",defaultValue:"milky_way",templateOptions:{label:"Favorite Candy (initialized via default value",options:[{label:"Snickers",value:"snickers"},{label:"Baby Ruth",value:"baby_ruth"},{label:"Milky Way",value:"milky_way"}]}},{key:"agree",type:"checkbox",templateOptions:{label:"Agree? (not initialized at all)",required:!0}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),t={examples:[{title:"Default Value",description:"\n              There are two ways to initialize the form with default values.\n              <ol>\n                <li>Default the model (preferred)</li>\n                <li>Use the\n                  <code>defaultValue</code> option on the field</li>\n              </ol>\n              Both methods are demonstrated below.\n            ",component:o,files:[{file:"app.component.html",content:a("bWD0"),filecontent:a("Q3rr")},{file:"app.component.ts",content:a("oQxA"),filecontent:a("2MLY")},{file:"app.module.ts",content:a("tu+i"),filecontent:a("uTEP")}]}]},p=function(){return function(){}}(),r=a("NcP4"),i=a("AcC/"),m=a("htty"),u=a("5yjx"),c=a("bg4O"),d=a("1C3p"),f=a("aMyW"),h=a("cD0v"),y=a("FZbr"),g=a("jYRx"),b=a("YBPd"),j=a("pMnS"),v=a("4o01"),k=a("Dl9q"),w=a("UcnZ"),F=a("DAbo"),C=a("9Glx"),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var e=!0,o=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==o.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275prd"](512,null,w.a,w.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,C.a,[w.a,F.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function x(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,M)),l["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var N=l["\u0275ccf"]("formly-app-example",o,x,{},{},[]),R=a("Ip0R"),S=a("M2Lx"),O=a("eDkP"),A=a("Fzqc"),D=a("v9Dh"),z=a("ZYjt"),G=a("Wf4p"),L=a("mVsa"),T=a("6LlJ"),V=a("F6kA"),B=a("dWZg"),W=a("lLAP"),E=a("4c35"),q=a("qAlS"),I=a("La40"),P=a("SMsm"),U=a("UodH"),J=a("5QwG"),Y=a("vqwi"),Z=a("WJWa"),Q=a("aD/X"),H=a("rxDs"),X=a("bCbW"),K=a("7yie"),$=a("xWhi"),nn=a("owZ6"),sn=a("DwvE"),an=a("XR12"),ln=a("Nsh5"),en=a("8mMr"),on=a("mqvi"),tn=a("lhp3"),pn=a("izcw"),rn=a("z6f/"),mn=a("lYui"),un=a("QcTH"),cn=a("82Si"),dn=a("cJUE"),fn=a("eqw4"),hn=a("nyVy"),yn=a("7BuT"),gn=function(){return function(){}}(),bn=a("ZYCi"),jn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return vn});var vn=l["\u0275cmf"](p,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,u.a,c.a,d.a,f.a,h.a,y.a,g.a,b.a,j.a,v.a,N]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[l.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,O.c,O.c,[O.i,O.e,l.ComponentFactoryResolver,O.h,O.f,l.Injector,l.NgZone,R.DOCUMENT,A.b,[2,R.Location]]),l["\u0275mpd"](5120,O.j,O.k,[O.c]),l["\u0275mpd"](5120,D.b,D.c,[O.c]),l["\u0275mpd"](4608,z.HAMMER_GESTURE_CONFIG,G.c,[[2,G.g],[2,G.l]]),l["\u0275mpd"](5120,L.b,L.g,[O.c]),l["\u0275mpd"](4608,T.a,T.a,[]),l["\u0275mpd"](4608,V.a,V.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,w.a,w.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),l["\u0275mpd"](1073742336,B.b,B.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,A.a,A.a,[]),l["\u0275mpd"](1073742336,E.g,E.g,[]),l["\u0275mpd"](1073742336,q.c,q.c,[]),l["\u0275mpd"](1073742336,O.g,O.g,[]),l["\u0275mpd"](1073742336,G.l,G.l,[[2,G.d],[2,z.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,D.e,D.e,[]),l["\u0275mpd"](1073742336,G.v,G.v,[]),l["\u0275mpd"](1073742336,I.j,I.j,[]),l["\u0275mpd"](1073742336,L.e,L.e,[]),l["\u0275mpd"](1073742336,P.c,P.c,[]),l["\u0275mpd"](1073742336,U.c,U.c,[]),l["\u0275mpd"](1073742336,J.b,J.b,[]),l["\u0275mpd"](512,F.b,F.b,[]),l["\u0275mpd"](1024,F.a,function(n){return[{wrappers:[{name:"form-field",component:Y.a}]},{types:[{name:"input",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:H.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:X.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:K.a,wrappers:["form-field"]}]},{types:[{name:"select",component:$.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:nn.a}],extensions:[{name:"addons",extension:{postPopulate:sn.a}}]},an.b(n),{}]},[F.b]),l["\u0275mpd"](1073742336,an.a,an.a,[F.b,[2,F.a]]),l["\u0275mpd"](1073742336,ln.h,ln.h,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,on.a,on.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,gn,gn,[]),l["\u0275mpd"](1073742336,bn.s,bn.s,[[2,bn.y],[2,bn.p]]),l["\u0275mpd"](1073742336,p,p,[]),l["\u0275mpd"](1024,bn.n,function(){return[[{path:"",component:jn.a,data:t}]]},[])])})},"tu+i":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},uTEP:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);