(this.webpackJsonphomework4=this.webpackJsonphomework4||[]).push([[0],{232:function(e,t,a){e.exports=a(427)},237:function(e,t,a){},238:function(e,t,a){},243:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(237),a(238),a(90)),c=a(24),s=a(19),m=a(84),d=a(41),u=a(181),p=a(182),E=a(198),v=(a(243),a(43)),h=a(464),g=a(448),b=a(91),f=a(92),y=a(450),T=function(e){var t=e.closeModal,a=e.modalIsOpen;return r.a.createElement(h.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:t},r.a.createElement("div",{style:{position:"absolute",top:"30%",left:"30%",width:600,height:100,background:b.a[50],border:"2px solid #000",padding:20}},r.a.createElement("h2",{id:"simple-modal-title",style:{color:f.a[500]}},"Empty task name"),r.a.createElement("p",{id:"simple-modal-description"},"Your are tring close your task without name, enter the title and try again!"),r.a.createElement(g.a,{style:{color:y.a[500],position:"absolute",bottom:15,right:15},onClick:t},"Close")))},k=a(93),I=a(451),S=a(452),O=a(453),C=a(454),w=a(455),A=function(e){var t=e.tasks,a=e.timeToString,n=e.deleteTask;return r.a.createElement("div",{className:"tabs-main"},r.a.createElement(I.a,{className:"tasks-log"},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(C.a,{variant:"body"},"\u2116"),r.a.createElement(C.a,{variant:"body"},"Task"),r.a.createElement(C.a,{variant:"body"},"Time start"),r.a.createElement(C.a,{variant:"body"},"Time end"),r.a.createElement(C.a,{variant:"body"},"Time spend"),r.a.createElement(C.a,{variant:"body"},"Info"),r.a.createElement(C.a,{variant:"body"},"Delete"))),r.a.createElement(w.a,{style:{color:k.a[900]}},t.map((function(e,t){return e.isCompleted?r.a.createElement(O.a,{id:e.id,key:e.id,style:{background:k.a[100]}},r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,t+1)),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,e.name)),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,new Date(e.start).toLocaleTimeString())),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,new Date(e.end).toLocaleTimeString())),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,a(e.spend))),r.a.createElement(C.a,{variant:"head"},r.a.createElement(g.a,{style:{background:b.a[50],borderRadius:0},type:"button",color:"primary",component:c.b,to:"/todoList/task/".concat(e.id)},"Info")),r.a.createElement(C.a,{variant:"head"},r.a.createElement(g.a,{style:{background:b.a[50],borderRadius:0},type:"button",onClick:function(){n(e.id)},color:"primary"},"Delete"))):null})))))},_=a(22),M=a(45),R=function(e,t){return Math.round(Math.random()*(t-e)+e)},N=[],L=(new Date).getTime()-432e5,j=0;j<R(10,15);j++){var D=R(6e5,54e5),V=L+D;N=[].concat(Object(_.a)(N),[{id:L,start:L,end:V,spend:D,isCompleted:!0,hour:new Date(L).getHours(),name:"random task \u2116".concat(j+1)}]),L=V+R(0,6e5)}var x=function(e){var t=e.data,a=e.tasksGenerator;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.e,{height:430},r.a.createElement(M.b,{data:t,margin:{top:50,right:20,bottom:50,left:20}},r.a.createElement(M.c,{strokeDasharray:"3 3"}),r.a.createElement(M.f,{dataKey:"hour",domain:[0,24]}),r.a.createElement(M.g,{domain:[0,60]}),r.a.createElement(M.d,null),r.a.createElement(M.a,{name:"Minuts in this hours",dataKey:"duration",fill:k.a[900],width:30}))),r.a.createElement(g.a,{style:{position:"fixed",bottom:50,right:50},variant:"contained",onClick:function(){return a(N)}},"generate"))},B=a(456),U=a(457),G=a(465),H=a(461),K=a(462),W=a(459),F=function(e){var t=e.error,a=e.tabValue,n=e.timerBtnValue,o=e.inputRef,l=e.timeToString,i=e.addInterval,s=e.removeInterval,m=e.tabMainLog,d=e.tabMainChart,u=e.timer,p=e.inputErrorControler;return r.a.createElement("div",{style:{height:1e3}},r.a.createElement(B.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{maxWidth:1440,margin:"0 auto"}},r.a.createElement(U.a,{maxWidth:!1,className:"task-init"},r.a.createElement(G.a,{id:"standard-basic",style:{width:"300px",margin:"0 auto",display:"flex"},error:t,inputProps:{ref:o,className:"input-task-name",style:{color:t?f.a[500]:k.a[900],textAlign:"center"}},fullWidth:!0,placeholder:"Name of your task",onChange:p}),r.a.createElement(H.a,{className:"circle",color:"primary.main",fontWeight:"500",fontSize:20},r.a.createElement("p",{className:"time"},l(u))),r.a.createElement(g.a,{variant:"text",color:"primary",type:"button",onClick:"start"===n?i:s,style:{margin:"0 auto 30px auto",display:"flex",boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"}},n)),r.a.createElement(K.a,{style:{width:"100%",background:y.a[700]},variant:"fullWidth",value:a},r.a.createElement(W.a,{style:{color:b.a[50]},label:"Tasks log",component:c.b,to:"/todoList/"}),r.a.createElement(W.a,{style:{color:b.a[50]},label:"Tasks chart",component:c.b,to:"/todoList/tasks-chart"})),r.a.createElement(v.a,{exact:!0,path:"/todoList/",component:m}),r.a.createElement(v.a,{path:"/todoList/tasks-chart",component:d})))},P=a(463),J=function(e){var t=e.paramsId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{severity:"error",style:{margin:30}},"A task with id:",t,"does not exist."),r.a.createElement("div",{style:{maxWidth:1440,margin:"0 auto",textAlign:"center",padding:"30px 0"}},r.a.createElement(g.a,{style:{background:b.a[50],boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"},size:"large",type:"button",color:"primary",component:c.b,to:"/todoList/"},"Home")))},z=function(e){var t=e.deleteTask,a=e.task,n=e.timeToString;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:"tasks-log",style:{maxWidth:1440,margin:"0 auto"}},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(C.a,{variant:"body"},"ID"),r.a.createElement(C.a,{variant:"body"},"Task"),r.a.createElement(C.a,{variant:"body"},"Time start"),r.a.createElement(C.a,{variant:"body"},"Time end"),r.a.createElement(C.a,{variant:"body"},"Time spend"),r.a.createElement(C.a,{variant:"body"},"Delete"))),r.a.createElement(w.a,{style:{color:k.a[900]}},r.a.createElement(O.a,{id:a.id,style:{background:k.a[100]}},r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,a.id)),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,a.name)),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,new Date(a.start).toLocaleTimeString())),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,new Date(a.end).toLocaleTimeString())),r.a.createElement(C.a,{variant:"head"},r.a.createElement("div",null,n(a.spend))),r.a.createElement(C.a,{variant:"head"},r.a.createElement(g.a,{style:{background:b.a[50],borderRadius:0},type:"button",component:c.b,onClick:function(){t(a.id)},to:"/todoList/",color:"primary"},"Delete"))))),r.a.createElement("div",{style:{width:"100%",textAlign:"center",padding:"30px 0"}},r.a.createElement(g.a,{style:{background:b.a[50],boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"},size:"large",type:"button",color:"primary",component:c.b,to:"/todoList/"},"Home")))},X=function(e){return{type:"TIMER_BTN_CHANGE_VALUE",payload:e}},Y=function(e){return{type:"CHANGE_ERROR_STATUS",payload:e}},$=function(e){return{type:"VERIFICATION_INPUT",payload:e}},q=function(e){return{type:"STARTED_TASK_CREATION",payload:e}},Q=function(e){return{type:"FINISHED_TASK_CREATION",payload:e}},Z=function(e){return{type:"DELETE_TASK",payload:e}},ee=function(e){return{type:"TAB_CHANGE_ACTIVE",payload:e}},te=function(e){return{type:"MODAL_CONTROLER",payload:e}},ae=function(e){return{type:"GENERETE_TASKS",payload:e}},ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).onUnload=function(){var e=a.props.tasks;localStorage.removeItem("tasks"),localStorage.setItem("tasks",JSON.stringify(e))},a.addInterval=function(){var e=a.props,t=e.timerBtnChangeValue,n=e.startedTaskCreation,r={start:(new Date).getTime(),hour:(new Date).getHours(),isCompleted:!1},o=setInterval((function(){return a.setState({timer:(new Date).getTime()-r.start})}),1e3);n(r),t("stop"),localStorage.setItem("startLastTask",r.start),localStorage.setItem("timerStatus","stop"),a.setState({interval:o})},a.removeInterval=function(){var e=a.state.interval,t=a.props,n=t.canAddTask,r=t.varificationInput,o=t.changeErrorStatus,l=t.timerBtnChangeValue,i=t.finishedTaskCreation,c=t.modalControler,s={end:(new Date).getTime(),name:a.inputRef.current.value,isCompleted:!0};n?(clearInterval(e),l("start"),i(s),o(!1),r(!1),localStorage.removeItem("startLastTask"),localStorage.removeItem("timerStatus"),a.inputRef.current.value="",a.setState({timer:0})):(c(!0),o(!0),r(!1),a.inputRef.current.focus())},a.tabMainLog=function(){var e=a.props,t=e.deleteTask,n=e.changeTabActive,o=e.tasks;return 1===e.tabValue&&n(0),r.a.createElement(A,{deleteTask:t,tasks:o,timeToString:a.timeToString})},a.tabMainChart=function(){var e=a.props,t=e.changeTabActive,n=e.tasks,o=e.tabValue,l=e.tasksGenerator,i=[];0===o&&t(1);for(var c=0;c<24;c++)i.push({hour:c,duration:0});return i.map((function(e,t){return n.map((function(a){var n=60-new Date(a.start).getMinutes();if(e.hour===a.hour){var r=a.spend/1e3/60;if(r<=n)e.duration+=Math.floor(r);else if(r>n){e.duration+=Math.floor(n);var o=r-n;if(t<23){for(var l=1;l<Math.floor(o/60)+1;l++){var c=t+l;i[c>23?c-24:c].duration=60}i[t+1+Math.floor(o/60)>23?t+1+Math.floor(o/60)-24:t+1+Math.floor(o/60)].duration=Math.floor(o%60)}}}return a})),e})),r.a.createElement(x,{data:i,tasksGenerator:l})},a.closeModal=function(){(0,a.props.modalControler)(!1)},a.inputErrorControler=function(){var e=a.props,t=e.varificationInput,n=e.changeErrorStatus;a.inputRef.current.value<1?(t(!1),n(!0)):(t(!0),n(!1))},a.infoPage=function(e){console.log("1");var t=a.props,n=t.deleteTask,o=t.tasks,l=r.a.createElement(J,{paramsId:e.match.params.id});return o.length>0&&o.map((function(t){return+e.match.params.id===t.id&&(l=r.a.createElement(z,{deleteTask:n,task:t,timeToString:a.timeToString})),t})),l},a.homePage=function(){var e=a.props,t=e.error,n=e.timerBtnValue,o=e.varificationInput,l=e.tabValue,i=e.modalIsOpen,c=a.state.timer;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{modalIsOpen:i,closeModal:a.closeModal,timeToString:a.timeToString}),r.a.createElement(F,{inputErrorControler:a.inputErrorControler,error:t,timer:c,varificationInput:o,tabValue:l,timerBtnValue:n,inputRef:a.inputRef,timeToString:a.timeToString,addInterval:a.addInterval,removeInterval:a.removeInterval,tabMainLog:a.tabMainLog,tabMainChart:a.tabMainChart}))},a.timeToString=function(e){var t=Math.floor(e/1e3/60/60%60),a=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60);return"".concat(t<10?"0".concat(t):t,":\n      ").concat(a<10?"0".concat(a):a,":\n      ").concat(n<10?"0".concat(n):n)},a.state={timer:0,interval:null},a.inputRef=r.a.createRef(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.timerBtnValue,a=localStorage.getItem("startLastTask");if("stop"===t){var n=setInterval((function(){return e.setState({timer:(new Date).getTime()-a})}),1e3);this.setState({interval:n})}window.addEventListener("unload",this.onUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unload",this.onUnload)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{exact:!0,path:"/todoList/",component:this.homePage}),r.a.createElement(v.a,{path:"/todoList/task/:id",component:this.infoPage}),r.a.createElement(v.a,{path:"/todoList/tasks-chart",component:this.homePage}))}}]),t}(r.a.Component),re=Object(i.b)((function(e){return{timerBtnValue:e.wievUI.timerBtnValue,error:e.wievUI.error,tabValue:e.wievUI.tabValue,modalIsOpen:e.wievUI.modalIsOpen,isCompleted:e.wievUI.isCompleted,canAddTask:e.tasksManager.canAddTask,tasks:e.tasksManager.tasks}}),(function(e){return{timerBtnChangeValue:Object(s.b)(X,e),changeErrorStatus:Object(s.b)(Y,e),varificationInput:Object(s.b)($,e),startedTaskCreation:Object(s.b)(q,e),finishedTaskCreation:Object(s.b)(Q,e),deleteTask:Object(s.b)(Z,e),changeTabActive:Object(s.b)(ee,e),modalControler:Object(s.b)(te,e),tasksGenerator:Object(s.b)(ae,e)}}))(ne),oe=a(29),le=JSON.parse(localStorage.getItem("tasks")),ie={tasks:null!==le?le:[],canAddTask:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STARTED_TASK_CREATION":return Object(oe.a)({},e,{tasks:[].concat(Object(_.a)(e.tasks),[{id:t.payload.start,start:t.payload.start,end:0,spend:0,isCompleted:t.payload.isCompleted,hour:t.payload.hour}])});case"FINISHED_TASK_CREATION":return Object(oe.a)({},e,{tasks:e.tasks.map((function(a,n){return n===e.tasks.length-1?(a.name=t.payload.name,a.end=t.payload.end,a.spend=t.payload.end-a.start,a.isCompleted=t.payload.isCompleted,a):a}))});case"DELETE_TASK":return Object(oe.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.payload}))});case"GENERETE_TASKS":return Object(oe.a)({},e,{tasks:t.payload});case"VERIFICATION_INPUT":return Object(oe.a)({},e,{canAddTask:t.payload});default:return e}},se=localStorage.getItem("timerStatus"),me={error:!1,timerBtnValue:null!==se?se:"start",modalIsOpen:!1,tabValue:0},de={tasksManager:ce,wievUI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ERROR_STATUS":return Object(oe.a)({},e,{error:t.payload});case"MODAL_CONTROLER":return Object(oe.a)({},e,{modalIsOpen:t.payload});case"TIMER_BTN_CHANGE_VALUE":return Object(oe.a)({},e,{timerBtnValue:t.payload});case"TAB_CHANGE_ACTIVE":return Object(oe.a)({},e,{tabValue:t.payload});default:return e}}},ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,pe=Object(s.d)((function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:de,n={},r=Object.values(a),o=Object.keys(a);return r.forEach((function(a,r){var l=void 0===e?e:e[o[r]];n[a.name]=a(l,t)})),n}),ue(Object(s.a)((function(e){return function(t){return function(a){var n=t(a);return console.log("new state: ",e.getState()),n}}}))));var Ee=function(){return r.a.createElement(i.a,{store:pe},r.a.createElement(c.a,null,r.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.6af7c365.chunk.js.map