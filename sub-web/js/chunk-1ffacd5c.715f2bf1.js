(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffacd5c"],{"14c3":function(e,t,o){var l=o("c6b6"),n=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var a=o.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"25f0":function(e,t,o){"use strict";var l=o("6eeb"),n=o("825a"),a=o("d039"),i=o("ad6d"),r="toString",s=RegExp.prototype,c=s[r],u=a((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=r;(u||m)&&l(RegExp.prototype,r,(function(){var e=n(this),t=String(e.source),o=e.flags,l=String(void 0===o&&e instanceof RegExp&&!("flags"in s)?i.call(e):o);return"/"+t+"/"+l}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var l=o("23e7"),n=o("b727").filter,a=o("1dde"),i=o("ae40"),r=a("filter"),s=i("filter");l({target:"Array",proto:!0,forced:!r||!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var l=o("d784"),n=o("825a"),a=o("7b0b"),i=o("50c4"),r=o("a691"),s=o("1d80"),c=o("8aa5"),u=o("14c3"),m=Math.max,h=Math.min,f=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};l("replace",2,(function(e,t,o,l){var g=l.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=l.REPLACE_KEEPS_$0,v=g?"$":"$0";return[function(o,l){var n=s(this),a=void 0==o?void 0:o[e];return void 0!==a?a.call(o,n,l):t.call(String(n),o,l)},function(e,l){if(!g&&S||"string"===typeof l&&-1===l.indexOf(v)){var a=o(t,e,this,l);if(a.done)return a.value}var s=n(e),f=String(this),d="function"===typeof l;d||(l=String(l));var p=s.global;if(p){var C=s.unicode;s.lastIndex=0}var R=[];while(1){var x=u(s,f);if(null===x)break;if(R.push(x),!p)break;var A=String(x[0]);""===A&&(s.lastIndex=c(f,i(s.lastIndex),C))}for(var y="",k=0,w=0;w<R.length;w++){x=R[w];for(var U=String(x[0]),L=m(h(r(x.index),f.length),0),O=[],$=1;$<x.length;$++)O.push(b(x[$]));var N=x.groups;if(d){var E=[U].concat(O,L,f);void 0!==N&&E.push(N);var M=String(l.apply(void 0,E))}else M=_(U,f,L,O,N,l);L>=k&&(y+=f.slice(k,L)+M,k=L+U.length)}return y+f.slice(k)}];function _(e,o,l,n,i,r){var s=l+e.length,c=n.length,u=p;return void 0!==i&&(i=a(i),u=d),t.call(r,u,(function(t,a){var r;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,l);case"'":return o.slice(s);case"<":r=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return t;if(u>c){var m=f(u/10);return 0===m?t:m<=c?void 0===n[m-1]?a.charAt(1):n[m-1]+a.charAt(1):t}r=n[u-1]}return void 0===r?"":r}))}}))},6547:function(e,t,o){var l=o("a691"),n=o("1d80"),a=function(e){return function(t,o){var a,i,r=String(n(t)),s=l(o),c=r.length;return s<0||s>=c?e?"":void 0:(a=r.charCodeAt(s),a<55296||a>56319||s+1===c||(i=r.charCodeAt(s+1))<56320||i>57343?e?r.charAt(s):a:e?r.slice(s,s+2):i-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(e,t,o){"use strict";var l=o("6547").charAt;e.exports=function(e,t,o){return t+(o?l(e,t).length:1)}},9263:function(e,t,o){"use strict";var l=o("ad6d"),n=o("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,r=a,s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],m=s||u||c;m&&(r=function(e){var t,o,n,r,m=this,h=c&&m.sticky,f=l.call(m),d=m.source,p=0,b=e;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),b=String(e).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==e[m.lastIndex-1])&&(d="(?: "+d+")",b=" "+b,p++),o=new RegExp("^(?:"+d+")",f)),u&&(o=new RegExp("^"+d+"$(?!\\s)",f)),s&&(t=m.lastIndex),n=a.call(h?o:m,b),h?n?(n.input=n.input.slice(p),n[0]=n[0].slice(p),n.index=m.lastIndex,m.lastIndex+=n[0].length):m.lastIndex=0:s&&n&&(m.lastIndex=m.global?n.index+n[0].length:t),u&&n&&n.length>1&&i.call(n[0],o,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)})),n}),e.exports=r},"9f7f":function(e,t,o){"use strict";var l=o("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=l((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=l((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var l=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&l((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 订阅转换 "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(e._s(e.backendVersion))])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"100px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-col",[o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash New Field"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},n=[],a=(o("4de4"),o("c975"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/CareyWang/sub-web"),i="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",r="https://github.com/tindy2013/subconverter/releases",s="https://subcon.tk/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",m="https://t.me/subconverter_discuss",h={data:function(){var e={backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{"Clash新参数":"clash&new_name=true","ClashR新参数":"clashr&new_name=true",Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",SSAndroid:"sssub",V2Ray:"v2ray",ss:"ss",ssr:"ssr",ssd:"ssd"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","subcon.tk (本站提供）":"https://subcon.tk/sub?","subcon.dlj.tf(subconverter作者提供-稳定)":"https://subcon.dlj.tf/sub?","api.dler.io(sub作者&lhie1提供-稳定)":"https://api.dler.io/sub?","api.wcc.best(sub-web作者提供-稳定)":"https://api.wcc.best/sub?","id9.cc(品云专属后端)":"https://sub.id9.cc/sub?","sub.maoxiongnet.com(猫熊提供)":"https://sub.maoxiongnet.com/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://subcon.tk/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://sub.id9.cc/sub?"},{value:"https://sub.maoxiongnet.com/sub?"}],remoteConfig:[{label:"本站专用",options:[{label:"常规规则",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/normal.ini"},{label:"分区域故障转移",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_Fallback.ini"},{label:"分区域自动测速",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_Urltest.ini"},{label:"分区域无自动测速",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_NoAuto.ini"},{label:"媒体与分区域自动测速",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_Media.ini"},{label:"媒体与分区域无自动测速",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_Media_NoAuto.ini"},{label:"媒体与分区域去广告",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Area_Media_AdblockPlus.ini"},{label:"无自动测速",value:"https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/Media_NoAuto.ini"}]},{label:"ACL4SSR",options:[{label:"ACL4SSR_Online 默认版 分组比较全(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_Online_AdblockPlus 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Online_NoAuto 无自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Online_NoReject 无广告拦截规则(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Online_Mini 精简版(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Online_Full 全分组 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Online_Full_MultiMode.ini 全分组 多模式 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR 本地 默认版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速 ",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"customized",options:[{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"},{label:"贼船",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/zeichuan.ini"}]},{label:"Merlin Clash",options:[{label:"常规规则",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG.ini"},{label:"分区域故障转移",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Fallback.ini"},{label:"分区域自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Urltest.ini"},{label:"分区域无自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_NoAuto.ini"},{label:"媒体与分区域自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Media.ini"},{label:"媒体与分区域无自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Media_NoAuto.ini"}]},{label:"Special",options:[{label:"ConnersHua 神机规则 Outbound",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_new.ini"},{label:"ConnersHua 神机规则 Inbound 回国专用",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"},{label:"lhie1 洞主规则（使用 Clash 分组规则）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"},{label:"lhie1 洞主规则完整版",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"},{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:m,sampleConfig:i},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,l=0;l<o.length;l++)o[l].label.length>10&&(o[l].label=o[l].label.replace(/\s.*/,""));for(var n={},a=Object.keys(e.options.customBackend),r=0;r<a.length;r++){var s=a[r].replace(/\(.*/,"");n[s]=e.options.customBackend[a[r]]}e.options.customBackend=n}return e},created:function(){document.title="在线订阅转换",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash&new_name=true",this.form.customBackend="https://subcon.tk/sub?",this.form.remoteConfig="https://raw.githubusercontent.com/skullssr/merlinclash_clash_related/master/User_config/normal.ini",this.notify(),this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(a)},gotoTgChannel:function(){window.open(m)},gotoGayhub:function(){window.open(r)},gotoRemoteConfig:function(){window.open(i)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?s:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,l=this.form.sourceSubUrl;if(l=l.replace(/(\n|\r|\n\r)/g,"|"),-1!==l.indexOf("losadhwse")&&(-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subcon.tk")||-1!==t.indexOf("subcon.dlj.tf")||-1!==t.indexOf("api.dler.io")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(l)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,l=e?o.filter(this.createFilter(e)):o;t(l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),l="";if(null!==o){var n=JSON.parse(o);n.expire>t?l=n.value:localStorage.removeItem(e)}return l},setLocalStorageItem:function(e,t){var o="86400",l=+new Date,n={setTime:l,ttl:parseInt(o),expire:l+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(n))}}},f=h,d=o("2877"),p=Object(d["a"])(f,l,n,!1,null,null,null);t["default"]=p.exports},ac1f:function(e,t,o){"use strict";var l=o("23e7"),n=o("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,o){"use strict";var l=o("825a");e.exports=function(){var e=l(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,o){var l=o("23e7"),n=o("7b0b"),a=o("df75"),i=o("d039"),r=i((function(){a(1)}));l({target:"Object",stat:!0,forced:r},{keys:function(e){return a(n(e))}})},c975:function(e,t,o){"use strict";var l=o("23e7"),n=o("4d64").indexOf,a=o("a640"),i=o("ae40"),r=[].indexOf,s=!!r&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});l({target:"Array",proto:!0,forced:s||!c||!u},{indexOf:function(e){return s?r.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var l=o("6eeb"),n=o("d039"),a=o("b622"),i=o("9263"),r=o("9112"),s=a("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),m=a("replace"),h=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,m){var d=a(e),p=!n((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),b=p&&!n((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[s]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!p||!b||"replace"===e&&(!c||!u||h)||"split"===e&&!f){var g=/./[d],S=o(d,""[e],(function(e,t,o,l,n){return t.exec===i?p&&!n?{done:!0,value:g.call(t,o,l)}:{done:!0,value:e.call(o,t,l)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),v=S[0],_=S[1];l(String.prototype,e,v),l(RegExp.prototype,d,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}m&&r(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffacd5c.715f2bf1.js.map