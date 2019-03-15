webpackJsonp([27],{"./node_modules/react-bootstrap/lib/utils/StyleConfig.js":function(e,t,a){"use strict";t.__esModule=!0;t.Size={LARGE:"large",SMALL:"small",XSMALL:"xsmall"},t.SIZE_MAP={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"},t.DEVICE_SIZES=["lg","md","sm","xs"],t.State={SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"},t.Style={DEFAULT:"default",PRIMARY:"primary",LINK:"link",INVERSE:"inverse"}},"./node_modules/react-bootstrap/lib/utils/ValidComponentChildren.js":function(e,t,a){"use strict";function r(e,t,a){var r=0;return f.default.Children.map(e,function(e){return f.default.isValidElement(e)?t.call(a,e,r++):e})}function n(e,t,a){var r=0;f.default.Children.forEach(e,function(e){f.default.isValidElement(e)&&t.call(a,e,r++)})}function s(e){var t=0;return f.default.Children.forEach(e,function(e){f.default.isValidElement(e)&&++t}),t}function l(e,t,a){var r=0,n=[];return f.default.Children.forEach(e,function(e){f.default.isValidElement(e)&&t.call(a,e,r++)&&n.push(e)}),n}function o(e,t,a){var r=0,n=void 0;return f.default.Children.forEach(e,function(e){n||f.default.isValidElement(e)&&t.call(a,e,r++)&&(n=e)}),n}function u(e,t,a){var r=0,n=!0;return f.default.Children.forEach(e,function(e){n&&f.default.isValidElement(e)&&(t.call(a,e,r++)||(n=!1))}),n}function i(e,t,a){var r=0,n=!1;return f.default.Children.forEach(e,function(e){n||f.default.isValidElement(e)&&t.call(a,e,r++)&&(n=!0)}),n}function c(e){var t=[];return f.default.Children.forEach(e,function(e){f.default.isValidElement(e)&&t.push(e)}),t}t.__esModule=!0;var d=a("./node_modules/react/react.js"),f=function(e){return e&&e.__esModule?e:{default:e}}(d);t.default={map:r,forEach:n,count:s,find:o,filter:l,every:u,some:i,toArray:c},e.exports=t.default},"./node_modules/react-bootstrap/lib/utils/bootstrapUtils.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];return"function"==typeof a[a.length-1]?e.apply(void 0,a):function(t){return e.apply(void 0,a.concat([t]))}}}function s(e,t){return null==e.bsClass&&(0,S.default)(!1),e.bsClass+(t?"-"+t:"")}function l(e){var t,a=(t={},t[s(e)]=!0,t);if(e.bsSize){a[s(e,_.SIZE_MAP[e.bsSize]||e.bsSize)]=!0}return e.bsStyle&&(a[s(e,e.bsStyle)]=!0),a}function o(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function u(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function i(e){var t={};return(0,p.default)(e).forEach(function(e){var a=e[0],r=e[1];u(a)||(t[a]=r)}),[o(e),t]}function c(e,t){var a={};t.forEach(function(e){a[e]=!0});var r={};return(0,p.default)(e).forEach(function(e){var t=e[0],n=e[1];u(t)||a[t]||(r[t]=n)}),[o(e),r]}function d(e){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];C(a,e)}t.__esModule=!0,t._curry=t.bsSizes=t.bsStyles=t.bsClass=void 0;var f=a("./node_modules/babel-runtime/core-js/object/entries.js"),p=r(f),h=a("./node_modules/babel-runtime/helpers/extends.js"),m=r(h);t.prefix=s,t.getClassSet=l,t.splitBsProps=i,t.splitBsPropsAndOmit=c,t.addStyle=d;var y=a("./node_modules/invariant/browser.js"),S=r(y),b=a("./node_modules/prop-types/index.js"),v=r(b),_=a("./node_modules/react-bootstrap/lib/utils/StyleConfig.js"),C=(t.bsClass=n(function(e,t){var a=t.propTypes||(t.propTypes={}),r=t.defaultProps||(t.defaultProps={});return a.bsClass=v.default.string,r.bsClass=e,t}),t.bsStyles=n(function(e,t,a){"string"!=typeof t&&(a=t,t=void 0);var r=a.STYLES||[],n=a.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var s=v.default.oneOf(r);if(a.STYLES=s._values=r,a.propTypes=(0,m.default)({},n,{bsStyle:s}),void 0!==t){(a.defaultProps||(a.defaultProps={})).bsStyle=t}return a}));t.bsSizes=n(function(e,t,a){"string"!=typeof t&&(a=t,t=void 0);var r=a.SIZES||[],n=a.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var s=[];r.forEach(function(e){var t=_.SIZE_MAP[e];t&&t!==e&&s.push(t),s.push(e)});var l=v.default.oneOf(s);return l._values=s,a.SIZES=r,a.propTypes=(0,m.default)({},n,{bsSize:l}),void 0!==t&&(a.defaultProps||(a.defaultProps={}),a.defaultProps.bsSize=t),a}),t._curry=n},"./node_modules/react-bootstrap/lib/utils/createChainedFunction.js":function(e,t,a){"use strict";function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=Array(a),n=0;n<a;n++)r[n]=arguments[n];e.apply(this,r),t.apply(this,r)}},null)}t.__esModule=!0,t.default=r,e.exports=t.default},"./node_modules/react-bootstrap/lib/utils/index.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ValidComponentChildren=t.createChainedFunction=t.bootstrapUtils=void 0;var n=a("./node_modules/react-bootstrap/lib/utils/bootstrapUtils.js"),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(n),l=a("./node_modules/react-bootstrap/lib/utils/createChainedFunction.js"),o=r(l),u=a("./node_modules/react-bootstrap/lib/utils/ValidComponentChildren.js"),i=r(u);t.bootstrapUtils=s,t.createChainedFunction=o.default,t.ValidComponentChildren=i.default},"./src/components/pages/SearchReport/SearchReport.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,s,l,o,u,i,c=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),d=r(c),f=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=r(f),h=a("./node_modules/babel-runtime/helpers/inherits.js"),m=r(h),y=a("./node_modules/lodash/fp/size.js"),S=r(y),b=a("./node_modules/lodash/fp/isEmpty.js"),v=r(b),_=a("./node_modules/recompose/lifecycle.js"),C=r(_),g=a("./node_modules/react/react.js"),j=r(g),E=a("./node_modules/prop-types/index.js"),P=r(E),x=a("./node_modules/qs/lib/index.js"),R=r(x),M=a("./node_modules/redux/es/index.js"),A=a("./node_modules/react-redux/es/index.js"),T=a("./node_modules/react-bootstrap/es/index.js"),N=a("./node_modules/moment/moment.js"),O=r(N),V=a("./src/components/ui-elements/PTPanel/PTPanel.js"),q=r(V),k=a("./src/components/containers/PatientsChart/PatientsChart.js"),B=r(k),Q=a("./src/utils/HOCs/fetch-patient-on-search.utils.js"),F=a("./src/ducks/fetch-clinical-query-search.duck.js"),I=a("./src/ducks/fetch-basic-patient-search.duck.js"),z=a("./src/components/pages/SearchReport/selectors.js"),D=a("./src/config/patients.constants.js"),L=a("./src/config/client-urls.constants.js"),w=function(e){return{actions:(0,M.bindActionCreators)({fetchClinicalQuerySearchRequest:F.fetchClinicalQuerySearchRequest,fetchBasicPatientSearchRequest:I.fetchBasicPatientSearchRequest},e)}},U=(n=(0,A.connect)(z.patientsSelector,w),s=(0,A.connect)(z.clinicalQuerySearchSelector),l=(0,C.default)(Q.fetchPatientOnSearch),n(o=s(o=l((i=u=function(e){function t(){var a,r,n;(0,d.default)(this,t);for(var s=arguments.length,l=Array(s),o=0;o<s;o++)l[o]=arguments[o];return a=r=(0,p.default)(this,e.call.apply(e,[this].concat(l))),r.state={searchResult:""},r.getSearchParams=function(e){var t=r.context.router,a=t.history.location.search.replace("?",""),n={},s="",l=[];if((0,v.default)(a)||(0,v.default)(e)?r.setState({searchResult:""}):n=JSON.parse(R.default.parse(a).searchString),n.type&&l.push({key:"Search Type",value:n.type}),n.queryContains&&n.queryText&&l.push({key:"Search Query",value:'contains "'+n.queryText+'"'}),(n.minValue||0===n.minValue)&&n.maxValue?l.push({key:"Age Range",value:n.minValue+"-"+n.maxValue}):n.dateOfBirth&&l.push({key:"Date of Birth",value:(0,O.default)(n.dateOfBirth).format("DD-MMM-YYYY")}),n.sexFemale||n.sexMale){var o="";o=n.sexFemale&&n.sexMale?"All":n.sexFemale?"Female":"Male",l.push({key:"Gender",value:o})}for(var u=0;u<l.length;u++)0!==u&&(s+=", "),s+=l[u].key+": "+l[u].value;s.length?r.setState({searchResult:"("+s+")"}):r.setState({searchResult:""})},r.handleBarClick=function(e){var t=r.state.searchResult;r.context.router.history.push({pathname:""+L.clientUrls.PATIENTS,state:{data:e,searchResult:t}})},n=a,(0,p.default)(r,n)}return(0,m.default)(t,e),t.prototype.componentDidMount=function(){this.getSearchParams(this.props.clinicalQuerySearch)},t.prototype.componentWillReceiveProps=function(e){this.getSearchParams(e.clinicalQuerySearch)},t.prototype.render=function(){var e=this.props,t=e.patientsByAge,a=e.clinicalQuerySearch,r=this.state.searchResult,n=t.map(S.default).reduce(function(e,t){return e+t})>0;return j.default.createElement("section",{className:"page-wrapper"},j.default.createElement(T.Row,null,j.default.createElement(T.Col,{xs:12},j.default.createElement(q.default,{className:"col-xs-12",classNameForPanel:(!(0,v.default)(r)&&!(0,v.default)(a))+" ? 'mainPagePanel': ''",header:j.default.createElement("h3",{className:"panel-title"},j.default.createElement("i",{className:"fa fa-bar-chart"})," Patients Sorted By Age "+r)},(0,v.default)(r)||(0,v.default)(a)?j.default.createElement("div",null,"There are no results that match your search criteria"):j.default.createElement(B.default,{title:"Found Patients By Clinical Query",subTitle:"Clinical Query: "+r,patients:t,labels:D.patientAgeRangesForClinicalSearch,borderColor:"rgba(126, 41, 205,1)",backgroundColor:"rgba(126, 41, 205,0.3)",isChartsDataReceived:n,onBarClick:this.handleBarClick,isClinicalQueryChart:!0})))))},t}(g.PureComponent),u.contextTypes={router:P.default.shape({history:P.default.object})},o=i))||o)||o)||o);t.default=U},"./src/components/pages/SearchReport/selectors.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clinicalQuerySearchSelector=t.patientsSelector=t.patientsByAgesSelector=void 0;var r=a("./node_modules/lodash/fp/filter.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(r),s=a("./node_modules/reselect/lib/index.js"),l=a("./src/config/patients.constants.js"),o=t.patientsByAgesSelector=function(e){var t=e.clinicalQuerySearch;return l.patientAgeRangesForClinicalSearch.map(function(e){return(0,n.default)(e.predicate)(t)})},u=function(e){return e.clinicalQuerySearch},i=(0,s.createSelector)(o,function(e){return{patientsByAge:e}}),c=(0,s.createSelector)(u,function(e){return{clinicalQuerySearch:e}});t.patientsSelector=i,t.clinicalQuerySearchSelector=c},"./src/components/ui-elements/PTPanel/PTPanel.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("./node_modules/react/react.js"),s=r(n),l=a("./node_modules/prop-types/index.js"),o=r(l),u=a("./node_modules/react-bootstrap/es/index.js");a("./node_modules/react-bootstrap/lib/utils/index.js").bootstrapUtils.addStyle(u.Panel,"secondary");var i=function(e){return s.default.createElement(u.Col,{className:e.className},s.default.createElement(u.Panel,{header:e.header,bsStyle:"secondary",className:e.classNameForPanel},s.default.createElement("div",{className:"panel-body-inner"},e.children)))};i.propTypes={header:o.default.element.isRequired,children:o.default.element.isRequired,classNameForPanel:o.default.string.isRequired,className:o.default.string.isRequired},t.default=i},"./src/utils/HOCs/fetch-patient-on-search.utils.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPatientOnSearch=void 0;var r=a("./node_modules/qs/lib/index.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(r),s=function(e,t){var a=n.default.parse(e.search.replace("?","")),r=a.orderType,s=a.pageNumber,l=a.searchString,o=a.queryType;return"advanced"===o?t.fetchAdvancedPatientSearchRequest(l):"clinicalQuery"===o?t.fetchClinicalQuerySearchRequest(l):t.fetchBasicPatientSearchRequest({orderType:r,pageNumber:s,searchString:l})};t.fetchPatientOnSearch={componentDidMount:function(){var e=this.props,t=e.location,a=e.actions;s(t,a)},componentWillReceiveProps:function(e){var t=e.location,a=e.actions;t.search!==this.props.location.search&&s(t,a)}}}});