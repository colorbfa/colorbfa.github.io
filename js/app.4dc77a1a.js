(function(t){function s(s){for(var i,l,c=s[0],o=s[1],r=s[2],p=0,m=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(s);while(m.length)m.shift()();return e.push.apply(e,r||[]),a()}function a(){for(var t,s=0;s<e.length;s++){for(var a=e[s],i=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(i=!1)}i&&(e.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},e=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var u=o;e.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"bjimg"}),a("top"),a("index")],1)},e=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-container"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"history-wrapper"},[a("span",{staticClass:"iconfont icon-arrow-lift",on:{click:t.back}}),a("span",{staticClass:"iconfont icon-arrow-right",on:{click:t.forward}})])]),a("div",{staticClass:"right-box"},[a("div",{staticClass:"el-input el-input--small el-input--prefix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"搜索"},domProps:{value:t.inputValue},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.toResult(s)},input:function(s){s.target.composing||(t.inputValue=s.target.value)}}}),t._m(0)])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"el-input__prefix"},[a("i",{staticClass:"el-input__icon el-icon-search"})])}],o=(new i["default"],{name:"top",data:function(){return{query:"",inputValue:""}},methods:{toResult:function(){""==this.inputValue?this.$message.warning("请输入内容"):(this.$router.push("./result?q="+this.inputValue),this.$router.go(0))},back:function(){this.$router.back()},forward:function(){this.$router.forward()}}}),r=o,u=a("2877"),p=Object(u["a"])(r,l,c,!1,null,"4c6cb48c",null),m=p.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-container"},[a("div",{staticClass:"nav"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/discovery"}},[a("span",{staticClass:"iconfont icon-find-music"}),t._v(" 发现音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/playlists"}},[a("span",{staticClass:"iconfont icon-music-list"}),t._v(" 推荐歌单 ")])],1),a("li",[a("router-link",{attrs:{to:"/songs"}},[a("span",{staticClass:"iconfont icon-music"}),t._v(" 最新音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/mvs"}},[a("span",{staticClass:"iconfont icon-mv"}),t._v(" 最新MV ")])],1)])]),a("div",{staticClass:"main"},[a("router-view")],1),a("div",{staticClass:"player"},[a("audio",{attrs:{src:t.musicUrl,autoplay:"",controls:""}})])])},d=[],h={name:"index",data:function(){return{musicUrl:"http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3"}}},g=h,C=Object(u["a"])(g,v,d,!1,null,null,null),f=C.exports,_={name:"app",components:{top:m,index:f}},y=_,b=(a("034f"),Object(u["a"])(y,n,e,!1,null,null,null)),w=b.exports,k=a("5c96"),L=a.n(k),$=(a("0fae"),a("d940c"),a("8c4f")),x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"discovery-container"},[a("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t,s){return a("el-carousel-item",{key:s},[a("img",{attrs:{src:t.imageUrl,alt:""}})])})),1),a("div",{staticClass:"recommend"},[a("h3",{staticClass:"title"},[t._v(" 推荐歌单 ")]),a("div",{staticClass:"items"},t._l(t.sheet,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toSongs(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"desc"},[t._v(t._s(s.copywriter))])]),a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("div",{staticClass:"news"},[a("h3",{staticClass:"title"},[t._v(" 最新音乐 ")]),a("div",{staticClass:"items"},t._l(t.news,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(s.id)}}})]),a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"song-name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.song.artists[0].name))])])])})),0)]),a("div",{staticClass:"mvs"},[a("h3",{staticClass:"title"},[t._v("推荐MV")]),a("div",{staticClass:"items"},t._l(t.mv,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1)},M=[],q=a("bc3a"),I=a.n(q),S={data:function(){return{banners:[],sheet:[],news:[],mv:[]}},methods:{playMusic:function(t){var s=this;I()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;s.$parent.musicUrl=a}))},toMv:function(t){this.$router.push("/mv?q=".concat(t))},toSongs:function(t){this.$router.push("/playlist?q=".concat(t))}},name:"discovery",created:function(){var t=this;I()({url:"https://autumnfish.cn/banner",method:"get"}).then((function(s){t.banners=s.data.banners})),I()({url:"https://autumnfish.cn/personalized",method:"get",params:{limit:10}}).then((function(s){console.log(s),t.sheet=s.data.result})),I()({url:" https://autumnfish.cn/personalized/newsong",method:"get"}).then((function(s){t.news=s.data.result})),I()({url:" https://autumnfish.cn/personalized/mv",method:"get"}).then((function(s){t.mv=s.data.result}))}},U=S,D=Object(u["a"])(U,x,M,!1,null,null,null),O=D.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlists-container"},[a("div",{staticClass:"top-card"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:t.topList.coverImgUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"tag"},[t._v("精品歌单")]),a("div",{staticClass:"title"},[t._v(t._s(t.topList.name))]),a("div",{staticClass:"info"},[t._v(t._s(t.topList.description))])]),a("img",{staticClass:"bg",attrs:{src:t.topList.coverImgUrl,alt:""}}),a("div",{staticClass:"bg-mask"})]),a("div",{staticClass:"tab-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:"全部"==t.tag},on:{click:function(s){t.tag="全部"}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:"欧美"==t.tag},on:{click:function(s){t.tag="欧美"}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:"华语"==t.tag},on:{click:function(s){t.tag="华语"}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:"流行"==t.tag},on:{click:function(s){t.tag="流行"}}},[t._v("流行")]),a("span",{staticClass:"item",class:{active:"说唱"==t.tag},on:{click:function(s){t.tag="说唱"}}},[t._v("说唱")]),a("span",{staticClass:"item",class:{active:"摇滚"==t.tag},on:{click:function(s){t.tag="摇滚"}}},[t._v("摇滚")]),a("span",{staticClass:"item",class:{active:"民谣"==t.tag},on:{click:function(s){t.tag="民谣"}}},[t._v("民谣")]),a("span",{staticClass:"item",class:{active:"电子"==t.tag},on:{click:function(s){t.tag="电子"}}},[t._v("电子")]),a("span",{staticClass:"item",class:{active:"轻音乐"==t.tag},on:{click:function(s){t.tag="轻音乐"}}},[t._v("轻音乐")]),a("span",{staticClass:"item",class:{active:"影视原声"==t.tag},on:{click:function(s){t.tag="影视原声"}}},[t._v("影视原声")]),a("span",{staticClass:"item",class:{active:"ACG"==t.tag},on:{click:function(s){t.tag="ACG"}}},[t._v("ACG")]),a("span",{staticClass:"item",class:{active:"怀旧"==t.tag},on:{click:function(s){t.tag="怀旧"}}},[t._v("怀旧")]),a("span",{staticClass:"item",class:{active:"治愈"==t.tag},on:{click:function(s){t.tag="治愈"}}},[t._v("治愈")]),a("span",{staticClass:"item",class:{active:"旅行"==t.tag},on:{click:function(s){t.tag="旅行"}}},[t._v("旅行")])]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"items"},t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"img-wrap",on:{click:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)])]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1)},H=[],E={name:"recommend",data:function(){return{total:0,page:1,topList:{},list:[],tag:"全部"}},watch:{tag:function(){this.topData(),this.listData(),this.page=1}},created:function(){this.topData(),this.listData()},methods:{topData:function(){var t=this;I()({url:"https://autumnfish.cn/top/playlist/highquality",methods:"get",params:{limit:1,cat:this.tag}}).then((function(s){t.topList=s.data.playlists[0]}))},listData:function(){var t=this;I()({url:"https://autumnfish.cn/top/playlist/",methods:"get",params:{limit:10,offset:10*(this.page-1),cat:this.tag}}).then((function(s){t.total=s.data.total,t.list=s.data.playlists}))},handleCurrentChange:function(t){this.page=t,this.listData()},toplaylist:function(t){this.$router.push("/playlist?q=".concat(t))}}},R=E,V=Object(u["a"])(R,j,H,!1,null,null,null),z=V.exports,P=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songs-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:0==t.tag},on:{click:function(s){t.tag=0}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:7==t.tag},on:{click:function(s){t.tag=7}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:96==t.tag},on:{click:function(s){t.tag=96}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:8==t.tag},on:{click:function(s){t.tag=8}}},[t._v("日本")]),a("span",{staticClass:"item",class:{active:16==t.tag},on:{click:function(s){t.tag=16}}},[t._v("韩国")])]),a("table",{staticClass:"el-table playlit-table"},[t._m(0),a("tbody",t._l(t.list,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row"},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.album.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(s.id)}}})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),a("span",{staticClass:"iconfont icon-mv"})]),a("span",[t._v(t._s(s.album.name))])])]),a("td",[t._v(t._s(s.artists[0].name))]),a("td",[t._v(t._s(s.album.name))]),a("td",[t._v(t._s(s.duration))])])})),0)])])},T=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])])}],N=(a("99af"),{name:"songs",data:function(){return{src:"",list:[],tag:0}},created:function(){this.getlist()},watch:{tag:function(){this.getlist(),console.log(this.tag)}},methods:{getlist:function(){var t=this;I()({url:"https://autumnfish.cn/top/song",method:"get",paramas:{type:this.tag}}).then((function(s){console.log(s),t.list=s.data.data;for(var a=0;a<t.list.length;a++){var i=t.list[a].duration,n=parseInt(i/1e3/60);n<10&&(n="0"+n);var e=parseInt(i/1e3%60);e<10&&(e="0"+e),t.list[a].duration="".concat(n,":").concat(e)}}))},playMusic:function(t){var s=this;I()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){console.log(t);var a=t.data.data[0].url;s.$parent.musicUrl=a}))}}}),F=N,Y=Object(u["a"])(F,P,T,!1,null,null,null),A=Y.exports,G=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mvs-container"},[a("div",{staticClass:"filter-wrap"},[a("div",{staticClass:"seciton-wrap"},[a("span",{staticClass:"section-type"},[t._v("地区:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(s){t.area="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(s){t.area="内地"}}},[t._v("内地")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(s){t.area="港台"}}},[t._v("港台")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(s){t.area="欧美"}}},[t._v("欧美")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(s){t.area="日本"}}},[t._v("日本")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(s){t.area="韩国"}}},[t._v("韩国")])])])]),a("div",{staticClass:"type-wrap"},[a("span",{staticClass:"type-type"},[t._v("类型:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"全部"==t.type},on:{click:function(s){t.type="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(s){t.type="官方版"}}},[t._v("官方版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(s){t.type="原声"}}},[t._v("原声")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(s){t.type="现场版"}}},[t._v("现场版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"网易出品"==t.type},on:{click:function(s){t.type="网易出品"}}},[t._v("网易出品")])])])]),a("div",{staticClass:"order-wrap"},[a("span",{staticClass:"order-type"},[t._v("排序:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"上升最快"==t.type},on:{click:function(s){t.type="上升最快"}}},[t._v("上升最快")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最热"==t.type},on:{click:function(s){t.type="最热"}}},[t._v("最热")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最新"==t.type},on:{click:function(s){t.type="最新"}}},[t._v("最新")])])])])]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)])},J=[],B={name:"mvs",data:function(){return{total:20,page:1,limit:12,area:"全部",type:"全部",order:"上升最快",list:[]}},methods:{toMv:function(t){this.$router.push("/mv?q=".concat(t))},handleCurrentChange:function(t){this.page=t,this.getlist()},getlist:function(){var t=this;I()({url:"https://autumnfish.cn/mv/all",method:"get",params:{area:this.area,type:this.type,order:this.order,limit:this.limit,offset:(this.page-1)*this.limit}}).then((function(s){console.log(s),t.list=s.data.data;for(var a=0;a<t.list.length;a++)t.list[a].playCount>=1e5&&(t.list[a].playCount=parseInt(t.list[a].playCount/1e4)+"万");s.count&&(t.total=s.data.count)}))}},created:function(){this.getlist()},watch:{area:function(){this.getlist(),this.page=1},type:function(){this.getlist(),this.page=1},order:function(){this.getlist(),this.page=1}}},K=B,Q=Object(u["a"])(K,G,J,!1,null,null,null),W=Q.exports,X=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"result-container"},[a("div",{staticClass:"title-wrap"},[a("h2",{staticClass:"title"},[t._v(t._s(this.$route.query.q))]),a("span",{staticClass:"sub-title"},[t._v("找到"+t._s(t.total)+"个结果")])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[a("table",{staticClass:"el-table"},[a("thead",[a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.songList,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row",on:{dblclick:function(a){return t.playMusic(s.id)}}},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),0!=s.mvid?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.toMv(s.mvid)}}}):t._e()]),0!=s.alias.length?a("span",[t._v(t._s(s.alias[0]))]):t._e()])]),a("td",[t._v(t._s(s.artists[0].name))]),a("td",[t._v(t._s(s.album.name))]),a("td",[t._v(t._s(s.druation))])])})),0)])]),a("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},[a("div",{staticClass:"items"},t._l(t.playlists,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toplaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[a("div",{staticClass:"items mv"},t._l(t.mvList,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("span",{staticClass:"time"},[t._v(t._s(s.druation))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":10,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)},Z=[],tt={name:"result",data:function(){return{total:0,activeIndex:"songs",songList:[],playlists:[],mvList:[],count:0,type:1,limit:10,page:1}},created:function(){this.songSearch()},watch:{activeIndex:function(){var t=this;switch(this.page=1,this.activeIndex){case"songs":this.type=1;break;case"lists":this.type=1e3,console.log(this.type);break;case"mv":this.type=1004;break;default:break}I()({url:" https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:this.type,limit:this.limit}}).then((function(s){if(1==t.type){t.songList=s.data.result.songs,t.songCount=s.data.result.songCount,t.total=s.data.result.songCount;for(var a=0;a<t.songList.length;a++){var i=parseInt(t.songList[a].duration/1e3/60),n=parseInt(t.songList[a].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.songList[a].druation=i+":"+n}}else if(1e3==t.type){t.playlists=s.data.result.playlists,t.total=s.data.result.playlistCount,console.log(s);for(var e=0;e<t.playlists.length;e++)t.playlists[e].playCount>1e5&&(t.playlists[e].playCount=parseInt(t.playlists[e].playCount/1e4)+"万")}else{t.mvList=s.data.result.mvs,t.total=s.data.result.mvCount,console.log(s);for(var l=0;l<t.mvList.length;l++){var c=parseInt(t.mvList[l].duration/1e3/60),o=parseInt(t.mvList[l].duration/1e3%60);c<10&&(c="0"+c),o<10&&(o="0"+o),t.mvList[l].duration=c+":"+o,t.mvList[l].playCount>1e5&&(t.mvList[l].playCount=parseInt(t.mvList[l].playCount/1e4)+"万")}}}))}},methods:{playMusic:function(t){var s=this;I()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;s.$parent.musicUrl=a}))},songSearch:function(){var t=this;I()({url:" https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:1,limit:this.limit,offset:(this.page-1)*this.limit}}).then((function(s){console.log(s),t.songList=s.data.result.songs,t.songCount=s.data.result.songCount,t.total=s.data.result.songCount;for(var a=0;a<t.songList.length;a++){var i=parseInt(t.songList[a].duration/1e3/60),n=parseInt(t.songList[a].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.songList[a].druation=i+":"+n}}))},toMv:function(t){this.$router.push("/mv?q=".concat(t))},toplaylist:function(t){this.$router.push("/playlist?q=".concat(t))},handleCurrentChange:function(t){var s=this;console.log("当前页: ".concat(t)),this.page=t,I()({url:" https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,limit:this.limit,offset:(this.page-1)*this.limit,type:this.type}}).then((function(t){if(1==s.type){s.songList=t.data.result.songs,s.count=t.data.result.songCount,s.total=t.data.result.songCount;for(var a=0;a<s.songList.length;a++){var i=s.songList[a].duration,n=parseInt(i/1e3/60);n<10&&(n="0"+n);var e=parseInt(i/1e3%60);e<10&&(e="0"+e),s.songList[a].duration="".concat(n,":").concat(e)}}else if(1e3==s.type){console.log(t),s.playlists=t.data.result.playlists,s.total=t.data.result.playlistCount;for(var l=0;l<s.playList.length;l++)s.playlists[l].playCount>1e5&&(s.playlists[l].playCount=parseInt(s.playlists[l].playCount/1e4)+"万")}else{s.mvList=t.data.result.mvs,s.total=t.data.result.mvCount;for(var c=0;c<s.mv.length;c++)s.mvList[c].playCount>1e5&&(s.mvList[c].playCount=parseInt(s.mvList[c].playCount/1e4)+"万")}}))}}},st=tt,at=Object(u["a"])(st,X,Z,!1,null,null,null),it=at.exports,nt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlist-container"},[a("div",{staticClass:"top-wrap"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),a("div",{staticClass:"info-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))]),a("div",{staticClass:"author-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.playlist.creator.avatarUrl,alt:""}}),a("span",{staticClass:"name"},[t._v(t._s(t.playlist.creator.nickname))]),a("span",{staticClass:"time"},[t._v(t._s(t.playlist.createTime)+" 创建")])]),t._m(0),a("div",{staticClass:"tag-wrap"},[a("span",{staticClass:"title"},[t._v("标签:")]),a("ul",t._l(t.playlist.tags,(function(s,i){return a("li",{key:i},[t._v(t._s(s))])})),0)]),a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"title"},[t._v("简介:")]),a("span",{staticClass:"desc"},[t._v(t._s(t.playlist.description))])])])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[a("table",{staticClass:"el-table playlit-table"},[a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.playlist.tracks,(function(s,i){return a("tr",{key:i,staticClass:"el-table__row"},[a("td",[t._v(t._s(i+1))]),a("td",[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.al.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.play(s.id)}}})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),0!==s.mv?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.toMV(s.mv)}}}):t._e()]),a("span",[t._v(t._s(s.alia[0]))])])]),a("td",[t._v(t._s(s.ar[0].name))]),a("td",[t._v(t._s(s.al.name))]),a("td",[t._v(t._s(s.dt))])])})),0)])]),a("el-tab-pane",{attrs:{label:"评论("+t.total+")",name:"2"}},[a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论 "),a("span",{staticClass:"number"},[t._v("("+t._s(this.hotCount)+")")])]),t._l(t.comments,(function(s,i){return a("div",{key:i,staticClass:"comments-wrap"},[a("div",{staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])])}))],2),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论 "),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.newcomments,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+":")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},et=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"play-wrap"},[a("span",{staticClass:"iconfont icon-circle-play"}),a("span",{staticClass:"text"},[t._v("播放全部")])])}],lt={name:"playlist",data:function(){return{activeIndex:"1",total:0,page:1,playlist:{},tags:[],comments:[],hotCount:0,newcomments:[]}},methods:{handleCurrentChange:function(t){var s=this;this.page=t,I()({url:" https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.q,limit:10,offset:10*(this.page-1)}}).then((function(t){console.log(t),s.newcomments=t.data.comments,s.total=t.data.total}))},play:function(t){var s=this;I()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var a=t.data.data[0].url;null==a||""==a||void 0==a?s.$message({message:"您没有取得权限！",type:"warning"}):s.$parent.musicUrl=a}))},toMV:function(t){console.log(t),this.$router.push("/mv?q=".concat(t))}},created:function(){var t=this;I()({url:"https://autumnfish.cn/playlist/detail",method:"get",params:{id:this.$route.query.q}}).then((function(s){console.log(s),t.playlist=s.data.playlist;for(var a=0;a<t.playlist.tracks.length;a++){var i=parseInt(s.data.playlist.tracks[a].dt/1e3/60);i<10&&(i="0"+i);var n=parseInt(s.data.playlist.tracks[a].dt/1e3%60);n<10&&(n="0"+n),t.playlist.tracks[a].dt="".concat(i,":").concat(n)}var e=new Date(t.playlist.createTime);Date.prototype.toLocaleString=function(){return this.hour=this.getHours()<10?"0"+this.getHours():this.getHours(),this.minute=this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes(),this.second=this.getSeconds()<10?"0"+this.getSeconds():this.getSeconds(),this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()},t.playlist.createTime=e.toLocaleString()})),I()({url:"https://autumnfish.cn/comment/hot",method:"get",params:{id:this.$route.query.q,type:2}}).then((function(s){console.log(s),t.comments=s.data.hotComments,t.hotCount=s.data.total;for(var a=0;a<t.comments.length;a++){var i=new Date(t.comments[a].time);Date.prototype.toLocaleString=function(){return this.hour=this.getHours()<10?"0"+this.getHours():this.getHours(),this.minute=this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes(),this.second=this.getSeconds()<10?"0"+this.getSeconds():this.getSeconds(),this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+" "+this.hour+":"+this.minute+":"+this.second},t.comments[a].time=i.toLocaleString()}})),I()({url:" https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.q,limit:10,offset:0}}).then((function(s){console.log(s),t.newcomments=s.data.comments,t.total=s.data.total;for(var a=0;a<t.newcomments.length;a++){var i=new Date(t.newcomments[a].time);Date.prototype.toLocaleString=function(){return this.hour=this.getHours()<10?"0"+this.getHours():this.getHours(),this.minute=this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes(),this.second=this.getSeconds()<10?"0"+this.getSeconds():this.getSeconds(),this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+" "+this.hour+":"+this.minute+":"+this.second},t.newcomments[a].time=i.toLocaleString()}}))}},ct=lt,ot=Object(u["a"])(ct,nt,et,!1,null,null,null),rt=ot.exports,ut=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",autoplay:"",src:t.mvUrl}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.icon,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.mvmsg.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvmsg.name))]),a("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvmsg.publishTime))]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvmsg.playCount)+"次")]),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvmsg.desc)+" ")])])]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论 "),a("span",{staticClass:"number"},[t._v("("+t._s(t.hotComments.length)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hotComments,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",[t._v(t._s(s.user.nickname)+" : ")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论 "),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(s.time))])])])})),0)]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.mvList,(function(s,i){return a("div",{key:i,staticClass:"item",on:{click:function(a){return t.toMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])]),a("span",{staticClass:"time"},[t._v(t._s(s.duration))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])])])},pt=[],mt={name:"mv",data:function(){return{total:20,page:1,limit:10,mvUrl:"",mvList:[],count:"",mvmsg:{},icon:"",comments:[],hotComments:[]}},created:function(){var t=this;I()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:this.$route.query.q}}).then((function(s){t.mvUrl=s.data.data.url})),I()({url:"https://autumnfish.cn/simi/mv",method:"get",params:{mvid:this.$route.query.q}}).then((function(s){t.mvList=s.data.mvs,t.count=s.data.playCount;for(var a=0;a<t.mvList.length;a++){var i=parseInt(t.mvList[a].duration/1e3/60),n=parseInt(t.mvList[a].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.mvList[a].duration=i+":"+n,t.mvList[a].playCount>1e5&&(t.mvList[a].playCount=parseInt(t.mvList[a].playCount/1e4)+"万")}})),I()({url:"https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.q}}).then((function(s){t.mvmsg=s.data.data,I()({url:"https://autumnfish.cn/artists",method:"get",params:{id:t.mvmsg.artists[0].id}}).then((function(s){t.icon=s.data.artist.picUrl}))})),I()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.q,offset:0}}).then((function(s){console.log(s),t.comments=s.data.comments,t.hotComments=s.data.hotComments,t.total=s.data.total})),this.gotocomments()},methods:{handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.page=t,this.gotocomments()},toMv:function(t){this.$router.push("/mv?q=".concat(t)),this.$router.go(0)},gotocomments:function(){var t=this;I()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.q,offset:10*(this.page-1)}}).then((function(s){console.log(s),t.comments=s.data.comments,t.total=s.data.total;for(var a=0;a<t.hotComments.length;a++){var i=new Date(t.hotComments[a].time);Date.prototype.toLocaleString=function(){return this.hour=this.getHours()<10?"0"+this.getHours():this.getHours(),this.minute=this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes(),this.second=this.getSeconds()<10?"0"+this.getSeconds():this.getSeconds(),this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+" "+this.hour+":"+this.minute+":"+this.second},t.hotComments[a].time=i.toLocaleString()}for(var n=0;n<t.comments.length;n++){i=new Date(t.comments[n].time);Date.prototype.toLocaleString=function(){return this.hour=this.getHours()<10?"0"+this.getHours():this.getHours(),this.minute=this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes(),this.second=this.getSeconds()<10?"0"+this.getSeconds():this.getSeconds(),this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+" "+this.hour+":"+this.minute+":"+this.second},t.comments[n].time=i.toLocaleString()}}))}}},vt=mt,dt=Object(u["a"])(vt,ut,pt,!1,null,null,null),ht=dt.exports;i["default"].use(L.a),i["default"].use($["a"]);var gt=new $["a"]({routes:[{path:"/",redirect:"/discovery"},{path:"/discovery",component:O},{path:"/playlists",component:z},{path:"/playlist",component:rt},{path:"/songs",component:A},{path:"/mvs",component:W},{path:"/mv",component:ht},{path:"/result",component:it}]});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(w)},router:gt}).$mount("#app")},"85ec":function(t,s,a){},d940c:function(t,s,a){}});
//# sourceMappingURL=app.4dc77a1a.js.map