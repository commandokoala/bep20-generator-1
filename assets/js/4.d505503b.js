(window.webpackJsonp=window.webpackJsonp||[]).push([[4,14,15],{307:function(t,e,a){},309:function(t,e,a){"use strict";a(307)},311:function(t,e,a){"use strict";a.r(e);var r={name:"Footer"},s=a(40),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"footer",attrs:{fluid:""}},[a("b-row",{staticClass:"bg-dark text-light py-4"},[a("b-col",{attrs:{lg:"12",xl:"8","offset-xl":"2"}},[a("b-row",[a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{staticClass:"text-light",attrs:{to:"/"}},[t._v("\n                            BEP20 Token Generator\n                        ")]),t._v(" "),a("b-list-group-item",{staticClass:"text-light",attrs:{to:"/docs/"}},[t._v("\n                            Documentation\n                        ")])],1)],1),t._v(" "),a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{staticClass:"text-light",attrs:{to:"/create-token/"}},[t._v("\n                            Create BEP20 Token\n                        ")]),t._v(" "),a("b-list-group-item",{staticClass:"text-warning",attrs:{href:"https://tokencenter.github.io/erc20-generator/",target:"_blank"}},[t._v("\n                            Create ERC20 Token\n                        ")])],1)],1),t._v(" "),a("b-col",{attrs:{lg:"4"}},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-terms",modifiers:{"modal-terms":!0}}]},[a("small",[t._v("Terms of Use")])])],1)],1)],1)],1),t._v(" "),a("b-col",{attrs:{lg:"12",xl:"8","offset-xl":"2"}},[a("hr"),t._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[a("small",[t._v("\n                        created by\n                        "),a("b-link",{staticClass:"text-warning",attrs:{href:"https://tokencenter.github.io/",target:"_blank"}},[t._v("\n                            tokencenter\n                        ")])],1)])],1)],1)],1),t._v(" "),a("b-modal",{attrs:{id:"modal-terms",title:"Terms of Use",size:"lg",centered:"","hide-footer":""}},[a("b-embed",{attrs:{type:"iframe",aspect:"4by3",src:"https://tokencenter.github.io/bep20-generator-terms/",allow:"accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",allowfullscreen:""}})],1)],1)}),[],!1,null,null,null);e.default=o.exports},312:function(t,e,a){"use strict";a.r(e);var r={name:"Header",props:{page:{type:String,default:null}}},s=a(40),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[a("b-icon-house")],1),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/create-token/",active:"Generator"===t.page}},[t._v("Create BEP20 Token")])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{to:"/",active:"Home"===t.page}},[t._v("Home")]),t._v(" "),a("b-nav-item",{attrs:{to:"/docs/",active:"Docs"===t.page}},[t._v("Docs")]),t._v(" "),a("b-nav-item",{attrs:{target:"_blank",href:"https://medium.com/erc20generator"}},[a("small",[t._v("Blog")])])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},333:function(t,e,a){"use strict";a.r(e);var r=a(312),s=a(311),o={components:{SiteHeader:r.default,SiteFooter:s.default},computed:{page:function(){return this.$page.frontmatter.component||null}}},i=(a(309),a(40)),n=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-wrapper"},[e("site-header",{attrs:{page:this.page}}),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[this.page?e(this.page,{key:this.page,tag:"component"}):this._e()],1),this._v(" "),e("site-footer")],1)}),[],!1,null,null,null);e.default=n.exports}}]);