(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{175:function(e,t,n){e.exports=n(341)},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},207:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),o=n.n(l),c=n(38),i=n(55),u=n(32),s=n(20);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m={isAlertOpen:!1,errorTitle:"",errorMessage:"",errorButtonText:""},d=Object(u.State)("appState",{initial:m,reset:function(){return p({},m)},showAlert:function(e,t){return p({},e,{isAlertOpen:!0,errorTitle:t.title,errorMessage:t.errorMessage,errorButtonText:t.errorButtonText})},hideAlert:function(e,t){return p({},e,{isAlertOpen:!1,errorTitle:"",errorMessage:"",errorButtonText:""})}});function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={count:0,denemeField:"",errorMessage:""},v=Object(u.State)("denemeState",{initial:g,reset:function(){return f({},g)},setValue:function(e,t){return f({},e,{count:t})},increment:function(e,t){return f({},e,{count:parseInt(e.count)+1})},decrement:function(e,t){return f({},e,{count:parseInt(e.count)-1})}}),O={appState:d,denemeState:v,counterState:v},C=Object(i.d)(Object(i.c)(O),Object(i.a)(Object(u.CreateJumpstateMiddleware)())),j=(n(184),n(167)),E=n(40),y=n(9),k=n(7),S=n(10),x=n(11),T=n(6),I=n(12),w=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={route:"/logo"},n.handleNavigateToLogoPage=n.handleNavigateToLogoPage.bind(Object(T.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleInputChange",value:function(e){this.setState({route:e.target.value})}},{key:"handleNavigateToLogoPage",value:function(){this.props.history.push({pathname:this.state.route,state:{deneme:"edip"}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to MasterPage"),r.a.createElement("div",null,r.a.createElement("label",null,"Route"),r.a.createElement("input",{className:"input",type:"text",name:"firstname",onChange:this.handleInputChange,value:this.state.route})),r.a.createElement("button",{className:"button",onClick:this.handleNavigateToLogoPage},"Go To "+this.state.route))}}]),t}(r.a.Component),P=n(28),B=n(3),D=n.n(B),N=(n(185),n(2)),A=(n(186),function(e,t){var n=e.text,a=Object(N.a)(e,["text"]),l=t.label,o=t.onContextClick;return r.a.createElement("button",Object.assign({onClick:function(){return o("1")},className:"button"},a),n||l)});A.defaultProps={},A.contextTypes={label:D.a.string,onContextClick:D.a.func};var M=A,L=function(e){function t(e){var n;return Object(y.a)(this,t),n=Object(S.a)(this,Object(x.a)(t).call(this,e)),console.log(e.onChange),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleButtonClick",value:function(e){this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props.description;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement(M,{onClick:function(){return e.handleButtonClick("1")}}),r.a.createElement(M,{text:"Button2",onClick:function(){return e.handleButtonClick("2")}}),r.a.createElement(M,{text:"Button3",onClick:function(){return e.handleButtonClick("3")}})))}}]),t}(r.a.Component);L.defaultProps={};var F=L,V=(n(187),function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.props.description),r.a.createElement("div",null,this.props.buttonList.map(function(e,t){var n="BJK"===e.text?"buttonbjk":"FB"===e.text?"buttonfb":"buttongs";return r.a.createElement("button",{key:t,className:n,onClick:function(){return e.action(e.text)}},e.text)})))}}]),t}(r.a.Component));V.defaultProps={};var W=V,z=(n(188),function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={value:n.formatInput(e.text)},n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.text!==this.props.text&&this.setState({value:this.formatInput(e.text)})}},{key:"formatInput",value:function(e){return e.replace(/-/g,"").split("").join("-")}},{key:"handleInputChange",value:function(e){this.setState({value:this.formatInput(e.target.value)}),this.props.onChange&&this.props.onChange(e.target.value.replace(/-/g,""))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Deneme Input"),r.a.createElement("input",{value:this.state.value,className:"input",type:"text",name:"firstname",onChange:this.handleInputChange}))}}]),t}(r.a.Component));z.defaultProps={text:""};var R=z,U=function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.description,t=this.context.label;return r.a.createElement("div",null,r.a.createElement("h1",null,e),r.a.createElement("span",null,t),r.a.createElement("div",null,r.a.createElement(M,null)))}}]),t}(r.a.Component);U.defaultProps={},U.contextTypes={label:D.a.string};var q=U,J=n(74),_=n.n(J),G=(n(189),function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={age:30,showBanner:!0,bannerButtonText:"Close Banner",chosenTeam:"",buttons:[{text:"BJK",action:function(e){return n.handleTeamSelect(e)}},{text:"GS",action:function(e){return n.handleTeamSelect(e)}},{text:"FB",action:function(e){return n.handleTeamSelect(e)}}],description:"L\xfctfen Tak\u0131m\u0131n\u0131z\u0131 Se\xe7iniz",inputText:"234"},n.handleIncreaseAge=n.handleIncreaseAge.bind(Object(T.a)(n)),n.handleChangeBanner=n.handleChangeBanner.bind(Object(T.a)(n)),n.handleTeamSelect=n.handleTeamSelect.bind(Object(T.a)(n)),n.addButton=n.addButton.bind(Object(T.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n.handleDashedInputChange=n.handleDashedInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t,n){this.state.age!==t.age&&(console.log("this.state.age : ",this.state.age),console.log("prevState.age : ",t.age))}},{key:"componentWillUnmount",value:function(){}},{key:"getChildContext",value:function(){return{label:"Bla Bla Button",onContextClick:this.handleTeamSelect.bind(this)}}},{key:"handleIncreaseAge",value:function(){this.setState(function(e,t){return{age:e.age+1}})}},{key:"handleChangeBanner",value:function(){this.setState(function(e,t){return{showBanner:!e.showBanner,bannerButtonText:e.showBanner?"Open Banner":"Close Banner"}})}},{key:"handleTeamSelect",value:function(e){this.setState({chosenTeam:e})}},{key:"addButton",value:function(){var e=this;this.setState(function(t,n){return{description:"Bla Bla Bla",buttons:[].concat(Object(P.a)(t.buttons),[{text:"TS",action:function(t){return e.handleTeamSelect(t)}}])}})}},{key:"handleInputChange",value:function(e){console.log("handleInputChange - event.target.value : ",e.target.value),this.setState({inputText:e.target.value})}},{key:"handleDashedInputChange",value:function(e){this.setState({inputText:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.state.showBanner?r.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"}):null,r.a.createElement("p",null,"Hello World"),r.a.createElement("span",null,this.state.age),r.a.createElement("button",{onClick:this.handleIncreaseAge},"Increase Age"),r.a.createElement("button",{onClick:this.handleChangeBanner},this.state.bannerButtonText),r.a.createElement("button",{onClick:this.addButton},"Change Button List"),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),r.a.createElement(F,{description:"L\xfctfen Tak\u0131m\u0131n\u0131z\u0131 Se\xe7iniz",onChange:this.handleTeamSelect}),r.a.createElement(q,{description:"L\xfctfen Butona Bas\u0131n\u0131z"}),r.a.createElement("span",null,this.state.chosenTeam),r.a.createElement(W,{description:this.state.description,buttonList:this.state.buttons}),r.a.createElement("div",null,r.a.createElement("label",null,"Deneme Input"),r.a.createElement("input",{className:"input",type:"text",name:"firstname",onChange:this.handleInputChange,value:this.state.inputText})),r.a.createElement(R,{text:this.state.inputText,onChange:this.handleDashedInputChange}),r.a.createElement("span",null,this.props.location.state.deneme)))}}]),t}(r.a.Component));G.childContextTypes={label:D.a.string,onContextClick:D.a.func};var H=G,K=(n(190),function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={value:t.formatInput(e.text),prevText:e.text},n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleInputChange",value:function(e){this.setState({value:t.formatInput(e.target.value)}),this.props.onChange&&this.props.onChange(e.target.value.replace(/-/g,""))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Deneme Input"),r.a.createElement("input",{value:this.state.value,className:"input2",type:"text",name:"firstname",onChange:this.handleInputChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.text!==n.prevText?{prevText:e.text,value:t.formatInput(e.text)}:null}},{key:"formatInput",value:function(e){return e.replace(/-/g,"").split("").join("-")}}]),t}(r.a.Component));K.defaultProps={text:""};var $=K,Q=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={inputText:"123"},n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n.handleDashedInputChange=n.handleDashedInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleInputChange",value:function(e){this.setState({inputText:e.target.value})}},{key:"handleDashedInputChange",value:function(e){this.setState({inputText:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to DenemePage"),r.a.createElement("div",null,r.a.createElement("label",null,"Deneme Input"),r.a.createElement("input",{className:"input",type:"text",name:"firstname",onChange:this.handleInputChange,value:this.state.inputText})),r.a.createElement($,{text:this.state.inputText,onChange:this.handleDashedInputChange}))}}]),t}(r.a.Component),X=n(163),Y="",Z=n.n(X).a.create({baseURL:"https://reqres.in/api",timeout:6e4});Z.interceptors.request.use(function(e){return e},function(e){return d.showAlert({title:"Hata!",errorMessage:e.response.data.error}),Promise.reject(te(e))}),Z.interceptors.response.use(function(e){return ee(e)?e.data:(d.showAlert({title:"Hata!",errorMessage:Y}),Promise.reject(Y))},function(e){return d.showAlert({title:"Hata!",errorMessage:e.response.data.error}),Promise.reject(te(e))});var ee=function(e){return e&&e.data?(Y="",!0):(Y=e.data.error,!1)},te=function(e){return e.response?e.response.status+" - "+e.response.data.error:e.request?e.request._response:e.message},ne=Z;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var le={counterValue:0,id:"",token:"",errorMsg:""},oe=Object(u.State)("counterState",{initial:le,reset:function(){return re({},le)},setValue:function(e,t){return re({},e,{counterValue:t})},setServiceCallResponseFields:function(e,t){return re({},e,{id:t.id,token:t.token})},setServiceCallError:function(e,t){return re({},e,{errorMsg:t.errorMsg})}});oe.denemeServiceCall=Object(u.Effect)("denemeServiceCall",function(e){return new Promise(function(t){var n=!1;ne.post("/register",e).then(function(e){n=e,oe.setServiceCallResponseFields(e)}).catch(function(e){oe.setServiceCallError(e)}).finally(function(){t(n)})})});var ce=oe,ie=(n(207),function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n.handleServiceCall=n.handleServiceCall.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleInputChange",value:function(e){ce.setValue(e.target.value)}},{key:"handleServiceCall",value:function(){ce.denemeServiceCall({}).then(function(e){e?console.log(e):console.log("Service fail d\xf6nd\xfc")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Global State Page"),r.a.createElement("div",null,r.a.createElement("label",null,"Set Counter Value"),r.a.createElement("input",{className:"input",type:"text",name:"counter",onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("span",null,this.props.counterProp),r.a.createElement("br",null),r.a.createElement("button",{className:"call-button",onClick:this.handleServiceCall},"Service Call"),r.a.createElement("br",null),r.a.createElement("span",null,this.props.id),r.a.createElement("br",null),r.a.createElement("span",null,this.props.token),r.a.createElement("br",null),r.a.createElement("span",null,this.props.errorMsg))}}]),t}(r.a.Component));var ue=Object(c.b)(function(e,t){return{counterProp:e.counterState.counterValue,id:e.counterState.id,token:e.counterState.token,errorMsg:e.counterState.errorMsg}})(ie),se=n(81),he=n(168),pe=n(381),me=n(5),de=n(382),be=(n(338),se.object().shape({email:se.string().email("Eposta adresinizi kontrol edin.").required("Eposta zorunlu aland\u0131r."),password:se.string().min(6,"\u015eifre uzunlu\u011fu en az 6 karakter olmal\u0131d\u0131r.").required("\u015eifre zorunlu aland\u0131r.")})),fe=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(S.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e,t){t&&(t.setSubmitting(!1),t.resetForm(),t.setFieldTouched()),ce.denemeServiceCall(e).then(function(e){e?(console.log("response : ",e),n.props.history.push("/master")):console.log("Service fail d\xf6nd\xfc")})},n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"header-style"},"Welcome To Login Page"),r.a.createElement(he.a,{initialValues:{email:"",password:""},onSubmit:function(t,n){return e.handleSubmit(t,n)},validationSchema:be},function(t){var n=t.values,a=t.touched,l=t.errors,o=t.handleChange,c=t.handleBlur,i=t.handleSubmit,u=t.isSubmitting,s=t.classes,h=void 0===s?e.props.classes:s;return r.a.createElement("form",{onSubmit:i,className:h.root},r.a.createElement(pe.a,{className:h.textfield,label:"email",name:"email",value:n.email,onChange:o,onBlur:c,helperText:a.email&&l.email,margin:"normal",error:a.email&&!!l.email,autoComplete:"off"}),r.a.createElement(pe.a,{className:h.textfield,label:"password",name:"password",type:"password",value:n.password,onChange:o,onBlur:c,helperText:a.password&&l.password,margin:"normal",error:a.password&&!!l.password}),r.a.createElement(de.a,{className:h.button,type:"submit",disabled:u,variant:"contained",color:"primary"},"Submit"))}))}}]),t}(r.a.Component),ge=Object(me.a)(function(e){return{root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},textfield:{marginLeft:50,width:200},button:{marginLeft:50,marginTop:30,width:200}}})(fe),ve=n(384),Oe=n(380),Ce=n(378),je=n(379),Ee=n(377),ye=function(e){var t=e.show,n=e.title,a=e.message,l=e.buttonText,o=e.onClose;return r.a.createElement(ve.a,{open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Ee.a,{id:"alert-dialog-title"},n),r.a.createElement(Ce.a,null,r.a.createElement(je.a,{id:"alert-dialog-description"},a)),r.a.createElement(Oe.a,null,r.a.createElement(de.a,{onClick:o,color:"primary",autoFocus:!0},l)))};ye.defaultProps={buttonText:"Tamam"};var ke=ye,Se=(n(339),function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={childToRender:n.selectChildren(0)},n.handleClick=n.handleClick.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"selectChildren",value:function(e){return r.a.Children.map(this.props.children,function(t,n){if(e===n)return t})}},{key:"handleClick",value:function(e){this.setState({childToRender:this.selectChildren(e)})}},{key:"render",value:function(){var e=this,t=this.state.childToRender;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.handleClick(0)}},"button1"),r.a.createElement("button",{onClick:function(){return e.handleClick(1)}},"button2"),r.a.createElement("button",{onClick:function(){return e.handleClick(2)}},"button3"),r.a.createElement("br",null),t)}}]),t}(r.a.Component)),xe=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={chosenTeam:""},n.handleTeamSelect=n.handleTeamSelect.bind(Object(T.a)(n)),n.buttons=[{text:"BJK",action:n.handleTeamSelect},{text:"GS",action:n.handleTeamSelect},{text:"FB",action:n.handleTeamSelect}],n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleTeamSelect",value:function(e){console.log("handleTeamSelect - team : ",e),this.setState({chosenTeam:e})}},{key:"render",value:function(){var e=this.state.chosenTeam;return r.a.createElement(Se,null,r.a.createElement("div",null,r.a.createElement("h1",null,"1. Tab i\xe7eri\u011fi"),r.a.createElement(M,{text:"1. tab butonu"})),r.a.createElement("div",null,r.a.createElement("h1",null,"2. Tab i\xe7eri\u011fi"),r.a.createElement(W,{description:"L\xfctfen tak\u0131m se\xe7iniz",buttonList:this.buttons}),r.a.createElement("span",null,e)),r.a.createElement("div",null,r.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"})))}}]),t}(r.a.Component),Te=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={selectedIndex:n.getChildValue(e.value)},n.handleChange=n.handleChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"getChildValue",value:function(e){console.log("child number : ",this.props.children.length);var t=0;return r.a.Children.forEach(this.props.children,function(n,a){n&&"input"===n.type&&e===n.props.value&&(t=a)}),t}},{key:"handleChange",value:function(e){this.setState({selectedIndex:e})}},{key:"render",value:function(){var e=this;return console.log("this.props.value : ",this.props.value),r.a.createElement("div",null,r.a.Children.map(this.props.children,function(t,n){return"input"===t.type?r.a.cloneElement(t,{checked:e.state.selectedIndex===n,onChange:function(){return e.handleChange(n)}}):t}))}}]),t}(r.a.Component),Ie=function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(Te,{value:"female"},r.a.createElement("input",{type:"radio",name:"gender",value:"male"}),"Male",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"gender",value:"female"}),"Female",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"gender",value:"other"}),"Other",r.a.createElement("br",null))}}]),t}(r.a.Component),we=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).handleIncrement=n.handleIncrement.bind(Object(T.a)(n)),n.handleDecrement=n.handleDecrement.bind(Object(T.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(T.a)(n)),n}return Object(I.a)(t,e),Object(k.a)(t,[{key:"handleInputChange",value:function(e){v.setValue(e.target.value)}},{key:"handleIncrement",value:function(){v.increment()}},{key:"handleDecrement",value:function(){v.decrement()}},{key:"render",value:function(){var e=this.props.counterProp;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Set Counter Value"),r.a.createElement("input",{className:"input",type:"text",name:"counter",onChange:this.handleInputChange,value:this.props.counterProp})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleIncrement},"Increment"),r.a.createElement("button",{onClick:this.handleDecrement},"Decrement")),r.a.createElement("div",null,r.a.createElement("span",null,e)))}}]),t}(r.a.Component);var Pe=Object(c.b)(function(e,t){return{counterProp:e.denemeState.count}})(we);var Be=Object(c.b)(function(e,t){return{showAlert:e.appState.isAlertOpen,title:e.appState.errorTitle,message:e.appState.errorMessage,buttonText:e.appState.errorButtonText}})(function(e){var t=e.showAlert,n=e.title,a=e.message,l=e.buttonText;return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:ge}),r.a.createElement(E.a,{path:"/login",exact:!0,component:ge}),r.a.createElement(E.a,{path:"/tabexample",exact:!0,component:xe}),r.a.createElement(E.a,{path:"/master",exact:!0,component:w}),r.a.createElement(E.a,{path:"/logo",component:H}),r.a.createElement(E.a,{path:"/deneme",component:Q}),r.a.createElement(E.a,{path:"/global",component:ue}),r.a.createElement(E.a,{path:"/radioexample",component:Ie}),r.a.createElement(E.a,{path:"/alternative",component:Pe})),r.a.createElement(ke,{show:t,title:n,message:a,buttonText:l,onClose:function(){d.hideAlert()}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[175,1,2]]]);
//# sourceMappingURL=main.2aa82225.chunk.js.map