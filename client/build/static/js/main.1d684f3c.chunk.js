(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{227:function(e,t,a){e.exports=a(452)},232:function(e,t,a){},233:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},234:function(e,t,a){},235:function(e,t,a){},353:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){},428:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){},452:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(22),l=a.n(o),r=(a(232),a(12)),i=a(13),c=a(20),u=a(21),h=a(468),d=a(54),m=(a(233),a(234),a(11)),p=a(453),v=(a(235),a(144)),f=(a(236),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={value:"",showErrorText:!1,showLocationInput:!1,_huge:!0},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(m.a)(n)),n.handleKeyUp=n.handleKeyUp.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.beResponsive=n.beResponsive.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(max-width: 500px)");this.beResponsive(e),e.addListener(this.beResponsive)}},{key:"beResponsive",value:function(e){console.log(e);document.getElementsByClassName("PhoneInput")[0];this.setState({huge:!e.matches})}},{key:"keyCodeIsNumber",value:function(e){return e>=48&&e<=57||e>=96&&e<=105}},{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.handleSubmit(),console.log(e.key)}},{key:"handleKeyUp",value:function(e){this.state.deleteOnUp&&this.handleChange(e)}},{key:"handleSubmit",value:function(e){Object(v.b)(this.state.value)?(this.props.displayForm(!0),this.props.retrieveNumber(this.state.value),this.setState({showErrorText:!1})):this.setState({showErrorText:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"NumberInput"},s.a.createElement("div",{className:"input-container"},s.a.createElement(v.a,{countries:["US"],value:this.state.value,onChange:this.handleChange,limitMaxLength:!0,addInternationalOption:!1,className:this.state.huge?"ui input huge":"ui input medium",id:"number-input",onKeyPress:this.handleKeyDown}),s.a.createElement(p.a,{className:"submit-btn",onClick:this.handleSubmit},"Go")),this.state.showErrorText?s.a.createElement("p",{className:"error"}," Not a valid phone number!"):null)}}]),a}(n.Component)),b=a(139),g=(a(353),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSuggestSelect=n.onSuggestSelect.bind(Object(m.a)(n)),n.state={default:null},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.default!==this.props.default&&null!=this.props.default&&this.setState({default:this.props.default})}},{key:"onFocus",value:function(){console.log("onFocus")}},{key:"onBlur",value:function(e){console.log("onBlur",e)}},{key:"onChange",value:function(e){console.log("input changes to :"+e)}},{key:"onSuggestSelect",value:function(e){this.props.onSelect(e)}},{key:"onSuggestNoResults",value:function(e){console.log("onSuggestNoResults for :"+e)}},{key:"render",value:function(){return console.log(this.state.default),s.a.createElement("div",{className:"LocationInput"},s.a.createElement(b.a,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,onSuggestSelect:this.onSuggestSelect,onSuggestNoResults:this.onSuggestNoResults,location:new window.google.maps.LatLng(53.558572,9.9278215),country:"us",radius:"20",placeholder:"Enter zipcode or address",initialValue:this.state.default}))}}]),a}(s.a.Component)),y=a(217),E=a(209),S=a(464),k=a(140),C=a.n(k),O="https://coronalert.herokuapp.com/api",j=function(){function e(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(r.a)(this,e);var s={method:"GET",url:O+t};s.data=n.data,void 0!==n.method&&(s.method=n.method),s.params=n.params,C()(s).then((function(e){"undefined"!==typeof a.then&&a.then(e)})).catch((function(e){"undefined"!==typeof a.catch&&a.catch(e)}))}return Object(i.a)(e,[{key:"catch",value:function(e){return this.catch=e,this}},{key:"then",value:function(e){return this.then=e,this}}]),e}(),w=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"get_data",value:function(e){return new j("/datapull/get_data",{data:e,method:"POST"})}},{key:"test_get_data",value:function(){return new j("/datapull/test_get_data")}}]),e}(),N=(a(370),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={stats:null,errorMsg:null,loading:!1},n.getStats=n.getStats.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&null!=this.props.data&&this.getStats()}},{key:"getStats",value:function(){var e=this;w.get_data(this.props.data).then((function(t){console.log(t);var a=t.data,n=a.data,s=a.source,o=a.last_updated;e.setState({stats:n,source:s,lastUpdated:o,errorMsg:null,loading:!1}),e.props.getFIPS(t.data.fips)})).catch((function(t){console.log(t),null!=t.data&&e.setState({errorMsg:t.data.msg}),e.setState({stats:null,loading:!1})}))}},{key:"parseAddress",value:function(e){var t,a="",n="",s=Object(E.a)(e);try{for(s.s();!(t=s.n()).done;){var o=t.value;o.types.includes("administrative_area_level_2")&&(a=o.long_name),o.types.includes("administrative_area_level_1")&&(n=o.short_name)}}catch(l){s.e(l)}finally{s.f()}return[a,n]}},{key:"render",value:function(){if(null==this.props.data)return null;if(this.state.loading)return s.a.createElement(S.a,{active:!0,inline:"centered"});console.log(this.props.data);var e=this.props.data.gmaps.address_components,t=this.parseAddress(e),a=Object(y.a)(t,2),n=a[0],o=a[1],l=[];if(null!=this.state.stats)for(var r=0,i=Object.entries(this.state.stats);r<i.length;r++){var c=i[r];l.push(s.a.createElement("p",{key:c[0]},s.a.createElement("strong",null,c[0],":")," ",c[1]))}return s.a.createElement("div",{className:"LocationStats"},s.a.createElement("h3",null,this.state.errorMsg),s.a.createElement("h3",null,n,", ",o),l,s.a.createElement("div",{className:"source-block"},s.a.createElement("p",null,"Source: ",this.state.source),s.a.createElement("p",null,"Last Updated: ",this.state.lastUpdated)))}}]),a}(n.Component)),I=(a(371),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={selection:null,fips:null,defaultVal:null},n.handleSelection=n.handleSelection.bind(Object(m.a)(n)),n.getFIPS=n.getFIPS.bind(Object(m.a)(n)),n.update=n.update,n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&null!=this.props.data&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){null!=this.props.data&&(this.setState({defaultVal:this.props.data.data.description,selection:this.props.data.data,fips:this.props.data.data.fips}),console.log(this.props.data))}},{key:"handleSelection",value:function(e){this.setState({selection:e}),this.props.retrieveLocInfo(this.props.id,e,"location")}},{key:"getFIPS",value:function(e){this.setState({fips:e}),this.props.retrieveLocInfo(this.props.id,e,"fips")}},{key:"render",value:function(){this.state.selection;return s.a.createElement("div",{className:"LocationModal"},s.a.createElement(g,{default:this.state.defaultVal,onSelect:this.handleSelection}),s.a.createElement(N,{default:this.state.fips,data:this.state.selection,getFIPS:this.getFIPS}))}}]),a}(s.a.Component)),D=a(469),M=a(470),F=a(465),_=a(471),L=a(215),A=(a(426),a(427),a(428),{0:"ASAP",1:"Daily",2:"3 Days",3:"Weekly",4:"Custom"}),R={0:0,1:1,2:3,3:7},V={0:0,1:1,3:2,7:3},x=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),null==e.data?(n.state={showCustomFreq:!1,freqValue:0,reportChangesValue:!0},e.retrieveSettings(n.state)):n.state=e.data,n.handleSliderChange=n.handleSliderChange.bind(Object(m.a)(n)),n.handleCustomChange=n.handleCustomChange.bind(Object(m.a)(n)),n.handleRadioChange=n.handleRadioChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&null!=this.props.data&&this.setState(this.props.data)}},{key:"componentDidMount",value:function(){null==this.props.data&&this.props.retrieveSettings(this.state)}},{key:"handleSliderChange",value:function(e){var t=this;4===e?this.setState({showCustomFreq:!0,freqValue:0,reportChangesValue:!0},(function(){return t.props.retrieveSettings(t.state)})):this.setState({freqValue:R[e],showCustomFreq:!1},(function(){return t.props.retrieveSettings(t.state)}))}},{key:"handleCustomChange",value:function(e){var t=this;this.setState({freqValue:e.target.value},(function(){return t.props.retrieveSettings(t.state)}))}},{key:"handleRadioChange",value:function(e){var t=this;this.setState({reportChangesValue:!this.state.reportChangesValue},(function(){return t.props.retrieveSettings(t.state)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"settings-bar"},s.a.createElement(D.a,{className:"settings-container"},s.a.createElement("div",{className:"alert-freq-wrap"},s.a.createElement("div",{className:"setting-wrap"},s.a.createElement(M.a,{as:"h5",className:"settings-label"},"Alert Frequency"),s.a.createElement(L.a,{className:"slider",marks:A,min:0,max:4,defaultValue:0,value:V[this.state.freqValue],step:null,onChange:this.handleSliderChange})),this.state.showCustomFreq?s.a.createElement(F.a,{label:{content:"days"},labelPosition:"right",placeholder:"Every...",className:"custom-freq",transparent:!0,onChange:this.handleCustomChange}):null),s.a.createElement("div",{className:"setting-wrap"},s.a.createElement(M.a,{as:"h5",className:"settings-label"},"Only Report Changes"),s.a.createElement(_.a,{toggle:!0,checked:this.state.reportChangesValue,onChange:this.handleRadioChange}))))}}]),a}(n.Component),T=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"submit",value:function(e){return console.log(e),new j("/user/submit",{data:e,method:"POST"})}},{key:"getData",value:function(e){return new j("/user/get_data",{data:{number:e},method:"POST"})}}]),e}(),U=(a(432),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={locModals:[],locData:{},settings:null,error:!1,data:null},n.handleAdd=n.handleAdd.bind(Object(m.a)(n)),n.handleRemove=n.handleRemove.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.retrieveSettings=n.retrieveSettings.bind(Object(m.a)(n)),n.retrieveLocInfo=n.retrieveLocInfo.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;null==this.state.data&&T.getData(this.props.number).then((function(t){if(console.log(t),t.data.success){var a={},n=[];t.data.data.places.map((function(t,o){console.log("VAL:",t),a[o]=t,n.push(s.a.createElement(D.a,{key:o},s.a.createElement(I,{id:o,retrieveLocInfo:e.retrieveLocInfo,data:t})))})),e.setState({data:t.data.data,settings:t.data.data.settings,locData:a,locModals:n})}}))}},{key:"handleAdd",value:function(){var e=this.state,t=e.locModals,a=e.locData,n=t.length;a[n]={},this.setState({locModals:t.concat(s.a.createElement(D.a,{key:n},s.a.createElement(I,{id:n,retrieveLocInfo:this.retrieveLocInfo}))),locData:a})}},{key:"handleRemove",value:function(){var e=this.state,t=e.locModals;delete e.locData[t.pop().key],this.setState({locModals:t})}},{key:"handleSubmit",value:function(){var e=this,t={places:Object.values(this.state.locData),settings:this.state.settings,phone_number:this.props.number};if(null==t.places[0].fips)return this.setState({errorMsg:"Must enter a location!",error:!0}),null;T.submit(t).then((function(t){e.props.completeSubmit(),e.setState({error:!1})})).catch((function(t){console.log(t),e.setState({error:!0,errorMsg:"Could not submit! Please try again later"})}))}},{key:"retrieveLocInfo",value:function(e,t,a){var n=this.state.locData;"fips"==a?n[e].fips=t:n[e].data=t,this.setState({locData:n})}},{key:"retrieveSettings",value:function(e){this.setState({settings:e}),console.log(e)}},{key:"render",value:function(){return 0===this.state.locModals.length&&this.handleAdd(),console.log(this.state),s.a.createElement("div",{className:"AlertForm"},s.a.createElement(x,{retrieveSettings:this.retrieveSettings,data:this.state.settings}),s.a.createElement(M.a,{as:"h5"},"Locations to Track"),s.a.createElement(D.a.Group,{className:"location-modal-group"},this.state.locModals),s.a.createElement("div",{className:"button-group"},s.a.createElement("div",{className:"edit-buttons-group"},s.a.createElement(p.a,{basic:!0,onClick:this.handleAdd,content:"Add Location",icon:"add"}),this.state.locModals.length>1?s.a.createElement(p.a,{basic:!0,onClick:this.handleRemove,content:"Remove Location",icon:"minus"}):null),s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(p.a,{color:"blue",onClick:this.handleSubmit},"Submit"),this.state.error?s.a.createElement("p",null,this.state.errorMsg):null)))}}]),a}(n.Component)),P=(a(433),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={displayForm:!1,number:null,data:null,submitted:!1},n.displayForm=n.displayForm.bind(Object(m.a)(n)),n.retrieveNumber=n.retrieveNumber.bind(Object(m.a)(n)),n.completeSubmit=n.completeSubmit.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"displayForm",value:function(e){this.setState({displayForm:e,submitted:!1})}},{key:"retrieveNumber",value:function(e){this.setState({number:e})}},{key:"completeSubmit",value:function(){this.setState({displayForm:!1,submitted:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"AlertInterface"},s.a.createElement(f,{displayForm:this.displayForm,retrieveNumber:this.retrieveNumber}),this.state.displayForm?s.a.createElement(U,{number:this.state.number,completeSubmit:this.completeSubmit}):s.a.createElement("h5",{className:"label"},"Put in your phone number to get started"),this.state.submitted?s.a.createElement("h4",{style:{color:"grey"}},"Thanks for submitting! To edit any settings, simply re-fill out this form"):null)}}]),a}(n.Component)),q=(a(434),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"HomeView"},s.a.createElement(M.a,{as:"h1",id:"main-title"}," Coronalert",s.a.createElement(M.a.Subheader,{style:{fontSize:"0.5em"}},"An Amber Alert system for Covid-19 cases in your area.")),s.a.createElement(P,null))}}]),a}(n.Component)),K=a(466),B=a(216),G=(a(435),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"SourcesView"},s.a.createElement(M.a,{as:"h1",className:"main-title"}," Sources"),s.a.createElement("p",null,"Coronalert pulls from open source datasets that are regularly updated.",s.a.createElement("br",null),"Currently, the highest resolution data available is at the ",s.a.createElement("b",null,"county-level"),"."),s.a.createElement(K.a.Group,{className:"source-card"},s.a.createElement(K.a,{fluid:!0,href:"https://github.com/CSSEGISandData/COVID-19",target:"_blank",link:!0},s.a.createElement(B.a,{src:"https://systems.jhu.edu/wp-content/uploads/2020/02/Dashboard_screenshot-1024x456.png",wrapped:!0,ui:!1}),s.a.createElement(K.a.Content,null,s.a.createElement(K.a.Header,null,"Johns Hopkins University CSSE"),s.a.createElement(K.a.Meta,null,s.a.createElement("span",{className:"date"},"Center for Systems Science and Engineering")),s.a.createElement(K.a.Description,null,"The Johns Hokins Center for Systems Science and Engineering collects data from a variety of sources and compiles them daily into one github repository. More information can be found",s.a.createElement("a",{href:"https://systems.jhu.edu/research/public-health/ncov/"}," here."))),s.a.createElement(K.a.Content,{extra:!0},s.a.createElement("a",null,s.a.createElement(d.a,{name:"clock"}),"Updated Daily"))),s.a.createElement(K.a,{fluid:!0,href:"https://github.com/nytimes/covid-19-data",target:"_blank",link:!0},s.a.createElement(B.a,{src:"https://static01.nyt.com/images/2020/03/03/us/coronavirus-us-cases-map-promo-1583277425489/coronavirus-us-cases-map-promo-1583277425489-superJumbo-v164.png",wrapped:!0,ui:!1}),s.a.createElement(K.a.Content,null,s.a.createElement(K.a.Header,null,"New York Times"),s.a.createElement(K.a.Meta,null,s.a.createElement("span",{className:"date"})),s.a.createElement(K.a.Description,null,"Database compiled by the New York Times to track Covid-19 on the county level. More information can be found",s.a.createElement("a",{href:"https://www.nytimes.com/article/coronavirus-county-data-us.html"}," here."))),s.a.createElement(K.a.Content,{extra:!0},s.a.createElement("a",null,s.a.createElement(d.a,{name:"clock"}),"Updated Regularly")))))}}]),a}(n.Component)),H=(a(436),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"SourcesView"},s.a.createElement(M.a,{as:"h1",className:"main-title"}," About"),s.a.createElement("p",null,"Although some cities have started working on their own text alert systems for Covid-19, the United States has ",s.a.createElement("a",{href:"https://www.washingtonpost.com/weather/2020/03/23/wireless-emergency-alerts-coronavirus/"},"yet to establish a national alert system"),' for Covid-19, seen in countries such as South Korea. Coronalert is an SMS-based, "amber-alert" style app for alerting users of active Covid-19 cases in their area. The alerts are meant to reflect the most up to date data at a frequency chosen by the user.',s.a.createElement("br",null)),s.a.createElement("p",null,"The most susceptible population to the Covid-19 outbreak, members of the older generation, are also the least likely demographic to download the latest Covid-19 contact tracing app, or check ",s.a.createElement("a",{href:"https://covid19.health"},"online data visualizations")," of Covid-19 cases. SMS is not only easy to use and ubiquitous, it's also the most accessible interface for the elderly population to keep up to date with cases of the disease in their area.",s.a.createElement("br",null)),s.a.createElement("p",null,"This was a submission for the ",s.a.createElement("a",{href:"https://covid-global-hackathon.devpost.com"},"Covid-19 Global Hackathon 1")))}}]),a}(n.Component)),J=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n.state={activeItem:"home"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.activeItem,t=null;return console.log(e),t="about"===e?s.a.createElement(H,null):"sources"===e?s.a.createElement(G,null):s.a.createElement(q,null),console.log(t),s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{className:"navbar",size:"massive",secondary:!0},s.a.createElement(h.a.Menu,{position:"right"},s.a.createElement(h.a.Item,{name:"home",onClick:this.handleItemClick}),s.a.createElement(h.a.Item,{name:"sources",active:"sources"===e,onClick:this.handleItemClick}),s.a.createElement(h.a.Item,{name:"about",active:"about"===e,onClick:this.handleItemClick}))),t,s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footer-content"},s.a.createElement("a",{href:"https://jsyu.me",target:"_blank"},"Justin Yu")," 2020",s.a.createElement("a",{href:"https://github.com/justinyu1618/Coronalert",target:"_blank",style:{marginLeft:"10px"}},s.a.createElement(d.a,{size:"large",name:"github",color:"grey","data-tip":"Source Code",link:!0})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.1d684f3c.chunk.js.map