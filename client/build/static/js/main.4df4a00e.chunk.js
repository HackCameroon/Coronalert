(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{178:function(e,t,a){},227:function(e,t,a){e.exports=a(448)},232:function(e,t,a){},233:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},234:function(e,t,a){},235:function(e,t,a){},369:function(e,t,a){},426:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),o=a.n(r),l=(a(232),a(13)),i=a(14),c=a(21),u=a(22),h=a(464),d=a(52),m=(a(233),a(234),a(11)),v=a(449),g=(a(235),a(144)),p=(a(236),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"",showErrorText:!1,showLocationInput:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(m.a)(n)),n.handleKeyUp=n.handleKeyUp.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"keyCodeIsNumber",value:function(e){return e>=48&&e<=57||e>=96&&e<=105}},{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.handleSubmit(),console.log(e.key)}},{key:"handleKeyUp",value:function(e){this.state.deleteOnUp&&this.handleChange(e)}},{key:"handleSubmit",value:function(e){Object(g.b)(this.state.value)?(this.props.displayForm(!0),this.props.retrieveNumber(this.state.value),this.setState({showErrorText:!1})):this.setState({showErrorText:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"NumberInput"},s.a.createElement("div",{className:"input-container"},s.a.createElement(g.a,{countries:["US"],value:this.state.value,onChange:this.handleChange,limitMaxLength:!0,addInternationalOption:!1,className:"ui huge input",onKeyPress:this.handleKeyDown}),s.a.createElement(v.a,{className:"submit-btn",onClick:this.handleSubmit},"Go")),this.state.showErrorText?s.a.createElement("p",{className:"error"}," Not a valid phone number!"):null)}}]),a}(n.Component)),b=a(139),f=(a(178),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSuggestSelect=n.onSuggestSelect.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"onFocus",value:function(){console.log("onFocus")}},{key:"onBlur",value:function(e){console.log("onBlur",e)}},{key:"onChange",value:function(e){console.log("input changes to :"+e)}},{key:"onSuggestSelect",value:function(e){this.props.onSelect(e)}},{key:"onSuggestNoResults",value:function(e){console.log("onSuggestNoResults for :"+e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"LocationInput"},s.a.createElement(b.a,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,onSuggestSelect:this.onSuggestSelect,onSuggestNoResults:this.onSuggestNoResults,location:new window.google.maps.LatLng(53.558572,9.9278215),country:"us",radius:"20",placeholder:"Enter zipcode or address"}))}}]),a}(s.a.Component)),y=a(218),S=a(210),E=a(461),O=a(140),k=a.n(O),j=function(){function e(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(l.a)(this,e);var s={method:"GET",url:"/api"+t};s.data=n.data,void 0!==n.method&&(s.method=n.method),s.params=n.params,k()(s).then((function(e){"undefined"!==typeof a.then&&a.then(e)})).catch((function(e){"undefined"!==typeof a.catch&&a.catch(e)}))}return Object(i.a)(e,[{key:"catch",value:function(e){return this.catch=e,this}},{key:"then",value:function(e){return this.then=e,this}}]),e}(),C=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"get_data",value:function(e){return new j("/datapull/get_data",{data:e,method:"POST"})}},{key:"test_get_data",value:function(){return new j("/datapull/test_get_data")}}]),e}(),N=(a(369),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={stats:null,errorMsg:null,loading:!1},n.getStats=n.getStats.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&null!=this.props.data&&this.getStats()}},{key:"getStats",value:function(){var e=this;C.get_data(this.props.data).then((function(t){console.log(t);var a=t.data,n=a.data,s=a.source,r=a.last_updated;e.setState({stats:n,source:s,lastUpdated:r,errorMsg:null,loading:!1}),e.props.getFIPS(t.data.fips)})).catch((function(t){console.log(t),null!=t.data&&e.setState({errorMsg:t.data.msg}),e.setState({stats:null,loading:!1})}))}},{key:"parseAddress",value:function(e){var t,a="",n="",s=Object(S.a)(e);try{for(s.s();!(t=s.n()).done;){var r=t.value;r.types.includes("administrative_area_level_2")&&(a=r.long_name),r.types.includes("administrative_area_level_1")&&(n=r.short_name)}}catch(o){s.e(o)}finally{s.f()}return[a,n]}},{key:"render",value:function(){if(null==this.props.data)return null;if(this.state.loading)return s.a.createElement(E.a,{active:!0,inline:"centered"});console.log(this.props.data);var e=this.props.data.gmaps.address_components,t=this.parseAddress(e),a=Object(y.a)(t,2),n=a[0],r=a[1],o=[];if(null!=this.state.stats)for(var l=0,i=Object.entries(this.state.stats);l<i.length;l++){var c=i[l];o.push(s.a.createElement("p",{key:c[0]},s.a.createElement("strong",null,c[0],":")," ",c[1]))}return s.a.createElement("div",{className:"LocationStats"},s.a.createElement("h3",null,this.state.errorMsg),s.a.createElement("h3",null,n,", ",r),o,s.a.createElement("div",{className:"source-block"},s.a.createElement("p",null,"Source: ",this.state.source),s.a.createElement("p",null,"Last Updated: ",this.state.lastUpdated)))}}]),a}(n.Component)),w=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selection:null,fips:null},n.handleSelection=n.handleSelection.bind(Object(m.a)(n)),n.getFIPS=n.getFIPS.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleSelection",value:function(e){this.setState({selection:e}),this.props.retrieveLocInfo(this.props.id,e,"location")}},{key:"getFIPS",value:function(e){this.setState({fips:e}),this.props.retrieveLocInfo(this.props.id,e,"fips")}},{key:"render",value:function(){console.log("bruh "+this.props.id);this.state.selection;return s.a.createElement("div",{className:"LocationModal"},s.a.createElement(f,{onSelect:this.handleSelection}),s.a.createElement(N,{data:this.state.selection,getFIPS:this.getFIPS}))}}]),a}(s.a.Component),I=a(465),F=a(466),_=a(462),L=a(467),A=a(216),D=(a(424),a(425),a(426),{0:"ASAP",1:"Daily",2:"3 Days",3:"Weekly",4:"Custom"}),M={0:0,1:1,2:3,3:7},R=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showCustomFreq:!1,freqValue:0,reportChangesValue:!0},n.handleSliderChange=n.handleSliderChange.bind(Object(m.a)(n)),n.handleCustomChange=n.handleCustomChange.bind(Object(m.a)(n)),n.handleRadioChange=n.handleRadioChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.retrieveSettings(this.state)}},{key:"handleSliderChange",value:function(e){4===e?this.setState({showCustomFreq:!0,freqValue:0,reportChangesValue:!0}):this.setState({freqValue:M[e],showCustomFreq:!1}),this.props.retrieveSettings(this.state)}},{key:"handleCustomChange",value:function(e){this.setState({freqValue:e.target.value}),this.props.retrieveSettings(this.state)}},{key:"handleRadioChange",value:function(e){this.setState({reportChangesValue:!this.state.reportChangesValue}),this.props.retrieveSettings(this.state)}},{key:"render",value:function(){return s.a.createElement("div",{className:"settings-bar"},s.a.createElement(I.a,{className:"settings-container"},s.a.createElement("div",{className:"alert-freq-wrap"},s.a.createElement("div",{className:"setting-wrap"},s.a.createElement(F.a,{as:"h5",className:"settings-label"},"Alert Frequency"),s.a.createElement(A.a,{className:"slider",marks:D,min:0,max:4,defaultValue:0,step:null,onChange:this.handleSliderChange})),this.state.showCustomFreq?s.a.createElement(_.a,{label:{content:"days"},labelPosition:"right",placeholder:"Every...",className:"custom-freq",transparent:!0,onChange:this.handleCustomChange}):null),s.a.createElement("div",{className:"setting-wrap"},s.a.createElement(F.a,{as:"h5",className:"settings-label"},"Only Report Changes"),s.a.createElement(L.a,{toggle:!0,defaultChecked:!0,onChange:this.handleRadioChange}))))}}]),a}(n.Component),P=a(81),q=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"submit",value:function(e){return new j("/user/submit",{data:e,method:"POST"})}},{key:"getData",value:function(e){return new j("/user/get_data/?number="+e)}}]),e}(),x=(a(430),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={locModals:[],locData:{},settings:{},error:!1},n.handleAdd=n.handleAdd.bind(Object(m.a)(n)),n.handleRemove=n.handleRemove.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.retrieveSettings=n.retrieveSettings.bind(Object(m.a)(n)),n.retrieveLocInfo=n.retrieveLocInfo.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleAdd",value:function(){var e=this.state,t=e.locModals,a=e.locData,n=t.length;a[n]={},this.setState({locModals:t.concat(s.a.createElement(I.a,{key:n},s.a.createElement(w,{id:n,retrieveLocInfo:this.retrieveLocInfo}))),locData:a})}},{key:"handleRemove",value:function(){var e=this.state,t=e.locModals;delete e.locData[t.pop().key],this.setState({locModals:t})}},{key:"handleSubmit",value:function(){var e=this,t={places:Object.values(this.state.locData),settings:this.state.settings,number:this.props.number};q.submit(t).then((function(t){e.props.completeSubmit(),e.setState({error:!1})})).catch((function(t){console.log(t),e.setState({error:!0})}))}},{key:"retrieveLocInfo",value:function(e,t,a){var n=this.state.locData;"fips"==a?n[e].fips=t:n[e].data=t,this.setState({locData:n})}},{key:"retrieveSettings",value:function(e){this.setState({settings:e})}},{key:"render",value:function(){return 0===this.state.locModals.length&&this.handleAdd(),console.log(this.state),s.a.createElement("div",{className:"AlertForm"},s.a.createElement(R,{retrieveSettings:this.retrieveSettings}),s.a.createElement(F.a,{as:"h5"},"Locations to Track"),s.a.createElement(I.a.Group,null,this.state.locModals),s.a.createElement("div",{className:"button-group"},s.a.createElement("div",{className:"edit-buttons-group"},s.a.createElement(v.a,{basic:!0,onClick:this.handleAdd,content:"Add Location",icon:"add"}),this.state.locModals.length>1?s.a.createElement(v.a,{basic:!0,onClick:this.handleRemove,content:"Remove Location",icon:"minus"}):null),s.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.a.createElement(v.a,{color:"blue",onClick:this.handleSubmit},"Submit"),this.state.error?s.a.createElement(P.a,{basic:!0,color:"red",pointing:!0,content:"Error: Please try again later!"}):null)))}}]),a}(n.Component)),V=(a(431),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={displayForm:!1,number:null},n.displayForm=n.displayForm.bind(Object(m.a)(n)),n.retrieveNumber=n.retrieveNumber.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"displayForm",value:function(e){this.setState({displayForm:e})}},{key:"retrieveNumber",value:function(e){this.setState({number:e})}},{key:"render",value:function(){return console.log(this.state.displayForm),s.a.createElement("div",{className:"AlertInterface"},s.a.createElement(p,{displayForm:this.displayForm,retrieveNumber:this.retrieveNumber}),this.state.displayForm?s.a.createElement(x,{number:this.state.number}):s.a.createElement("h5",{className:"label"},"Put in your phone number to get started!"))}}]),a}(n.Component)),U=(a(432),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"HomeView"},s.a.createElement(F.a,{style:{fontSize:"3em"},as:"h1",className:"main-title"}," Coronalert",s.a.createElement(F.a.Subheader,{style:{fontSize:"0.5em"}},"An Amber Alert system for Covid-19 cases in your area.")),s.a.createElement(V,null))}}]),a}(n.Component)),K=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n.state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{size:"massive",secondary:!0},s.a.createElement(h.a.Menu,{position:"right"},s.a.createElement(h.a.Item,{name:"sources",active:"home"===e,onClick:this.handleItemClick}),s.a.createElement(h.a.Item,{name:"about",active:"messages"===e,onClick:this.handleItemClick}))),s.a.createElement(U,null),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footer-content"},s.a.createElement("a",{href:"https://jsyu.me",target:"_blank"},"Justin Yu")," 2020",s.a.createElement("a",{href:"https://github.com/justinyu1618/Coronalert",target:"_blank",style:{marginLeft:"10px"}},s.a.createElement(d.a,{size:"large",name:"github",color:"grey","data-tip":"Source Code",link:!0})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.4df4a00e.chunk.js.map