(this.webpackJsonphomework4=this.webpackJsonphomework4||[]).push([[0],{232:function(e,t,a){e.exports=a(427)},237:function(e,t,a){},238:function(e,t,a){},243:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=(a(237),a(238),a(90)),c=a(24),s=a(22),m=a(27),d=a(16),u=function(e){return{type:"CHANGE_RUN_TIME",payload:e}},p=function(){return{type:"REMOVE_COUNTER",payload:0}},E=function(e){return{type:"VARIFICATION_CAN_ADD_TASK",payload:e}},h=function(e){return{type:"CHANGE_ERROR_STATUS",payload:e}},b=function(e){return""!==e.target.value&&" "!==e.target.value?{type:"VARIFICATION_INPUT",error:!1,canAddTask:!0}:{type:"VARIFICATION_INPUT",error:!0,canAddTask:!1}},v=function(e){return{type:"TICK",start:e}},g=function(e){return{type:"ADD_TASK",start:e.start,id:e.start,hour:e.hour}},T=function(e){return{type:"FINISH_TASK",isCompleted:e.isCompleted,name:e.name,end:e.end,spend:e.spend}},f=function(e){return{type:"DELETE_TASK",id:e}},k=function(e){return{type:"TAB_CHANGE_ACTIVE",value:e}},y=function(e){return{type:"MODAL_CONTROLER",modalIsOpen:e}},O=function(){for(var e=function(e,t){return Math.round(Math.random()*(t-e)+e)},t=[],a=(new Date).getTime(),n=0;n<e(10,15);n++){var r=e(6e5,54e5),o=a+r;t=[].concat(Object(s.a)(t),[{id:a,start:a,end:o,spend:r,isCompleted:!0,hour:new Date(a).getHours(),name:"random task \u2116".concat(n+1)}]),a=o+e(0,6e5)}return{type:"GENERETE_TASKS",newTasks:t}},I=JSON.parse(localStorage.getItem("state")),A=null!==I?I:{timeRunning:"start",counter:0,canAddTask:!1,error:!1,tasks:[],tabValue:0,chartData:[],startLastTask:0,modalIsOpen:!1},C=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(localStorage.setItem("state",JSON.stringify(e)),t.type){case"CHANGE_RUN_TIME":return Object(m.a)({},e,{timeRunning:t.payload});case"REMOVE_COUNTER":return Object(m.a)({},e,{counter:t.payload});case"VARIFICATION_CAN_ADD_TASK":return Object(m.a)({},e,{canAddTask:t.payload});case"CHANGE_ERROR_STATUS":return Object(m.a)({},e,{error:t.payload});case"VARIFICATION_INPUT":return Object(m.a)({},e,{error:t.error,canAddTask:t.canAddTask});case"TICK":return Object(m.a)({},e,{counter:(new Date).getTime()-t.start});case"ADD_TASK":return Object(m.a)({},e,{tasks:[].concat(Object(s.a)(e.tasks),[{id:t.id,start:t.start,end:0,spend:0,isCompleted:t.isCompleted,hour:t.hour}]),startLastTask:t.start});case"FINISH_TASK":return Object(m.a)({},e,{tasks:e.tasks.filter((function(a,n){if(n===e.tasks.length-1){var r=a;return r.name=t.name,r.end=t.end,r.spend=t.spend,r.isCompleted=t.isCompleted,r}return a}))});case"DELETE_TASK":return Object(m.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"TAB_CHANGE_ACTIVE":return Object(m.a)({},e,{tabValue:t.value});case"MODAL_CONTROLER":return Object(m.a)({},e,{modalIsOpen:t.modalIsOpen});case"GENERETE_TASKS":return Object(m.a)({},e,{tasks:t.newTasks});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=a(84),R=a(41),_=a(182),N=a(183),w=a(198),j=(a(243),a(448)),D=a(94),x=a(43),M=a(45),L=a(464),V=a(92),K=a(93),F=a(450),H=function(e){var t=e.closeModal,a=e.modalIsOpen;return r.a.createElement(L.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:t},r.a.createElement("div",{style:{position:"absolute",top:"30%",left:"30%",width:600,height:100,background:V.a[50],border:"2px solid #000",padding:20}},r.a.createElement("h2",{id:"simple-modal-title",style:{color:K.a[500]}},"Empty task name"),r.a.createElement("p",{id:"simple-modal-description"},"Your are tring close your task without name, enter the title and try again!"),r.a.createElement(j.a,{style:{color:F.a[500],position:"absolute",bottom:15,right:15},onClick:t},"Close")))},U=a(451),G=a(452),W=a(453),P=a(454),B=a(455),J=function(e){var t=e.tasks,a=e.timeToString,n=e.deleteTask;return r.a.createElement("div",{className:"tabs-main"},r.a.createElement(U.a,{className:"tasks-log"},r.a.createElement(G.a,null,r.a.createElement(W.a,null,r.a.createElement(P.a,{variant:"body"},"\u2116"),r.a.createElement(P.a,{variant:"body"},"Task"),r.a.createElement(P.a,{variant:"body"},"Time start"),r.a.createElement(P.a,{variant:"body"},"Time end"),r.a.createElement(P.a,{variant:"body"},"Time spend"),r.a.createElement(P.a,{variant:"body"},"Info"),r.a.createElement(P.a,{variant:"body"},"Delete"))),r.a.createElement(B.a,{style:{color:D.a[900]}},t.map((function(e,t){if(e.isCompleted)return r.a.createElement(W.a,{id:e.id,key:t,style:{background:D.a[100]}},r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,t+1)),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,e.name)),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,new Date(e.start).toLocaleTimeString())),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,new Date(e.end).toLocaleTimeString())),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,a(e.spend))),r.a.createElement(P.a,{variant:"head"},r.a.createElement(j.a,{style:{background:V.a[50],borderRadius:0},type:"button",color:"primary",component:c.b,to:"task/".concat(e.id)},"Info")),r.a.createElement(P.a,{variant:"head"},r.a.createElement(j.a,{style:{background:V.a[50],borderRadius:0},type:"button",onClick:function(){n(e.id)},color:"primary"},"Delete")))})))))},X=a(456),z=a(457),Y=a(465),$=a(461),q=a(462),Q=a(459),Z=function(e){var t=e.error,a=e.counter,n=e.varificationInput,o=e.tabValue,i=e.timeRunning,l=e.inputRef,s=e.timeToString,m=e.addInterval,d=e.removeInterval,u=e.tabMainLog,p=e.tabMainChart;return r.a.createElement("div",{style:{height:1e3}},r.a.createElement(X.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{maxWidth:1440,margin:"0 auto"}},r.a.createElement(z.a,{maxWidth:!1,className:"task-init"},r.a.createElement(Y.a,{id:"standard-basic",style:{width:"300px",margin:"0 auto",display:"flex"},error:t,inputProps:{ref:l,className:"input-task-name",style:{color:t?K.a[500]:D.a[900],textAlign:"center"}},fullWidth:!0,placeholder:"Name of your task",onChange:n}),r.a.createElement($.a,{className:"circle",color:"primary.main",fontWeight:"500",fontSize:20},r.a.createElement("p",{className:"time"},s(a))),r.a.createElement(j.a,{variant:"text",color:"primary",type:"button",onClick:"start"===i?m:d,style:{margin:"0 auto 30px auto",display:"flex",boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"}},i)),r.a.createElement(q.a,{style:{width:"100%",background:F.a[700]},variant:"fullWidth",value:o},r.a.createElement(Q.a,{style:{color:V.a[50]},label:"Tasks log",component:c.b,to:"/"}),r.a.createElement(Q.a,{style:{color:V.a[50]},label:"Tasks chart",component:c.b,to:"/tasks-chart"})),r.a.createElement(x.a,{exact:!0,path:"/",component:u}),r.a.createElement(x.a,{path:"/tasks-chart",component:p})))},ee=a(463),te=function(e){var t=e.paramsId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{severity:"error",style:{margin:30}},"A task with id:",t," does not exist."),r.a.createElement("div",{style:{maxWidth:1440,margin:"0 auto",textAlign:"center",padding:"30px 0"}},r.a.createElement(j.a,{style:{background:V.a[50],boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"},size:"large",type:"button",color:"primary",component:c.b,to:"/"},"Home")))},ae=function(e){var t=e.deleteTask,a=e.task,n=e.timeToString;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{className:"tasks-log",style:{maxWidth:1440,margin:"0 auto"}},r.a.createElement(G.a,null,r.a.createElement(W.a,null,r.a.createElement(P.a,{variant:"body"},"ID"),r.a.createElement(P.a,{variant:"body"},"Task"),r.a.createElement(P.a,{variant:"body"},"Time start"),r.a.createElement(P.a,{variant:"body"},"Time end"),r.a.createElement(P.a,{variant:"body"},"Time spend"),r.a.createElement(P.a,{variant:"body"},"Delete"))),r.a.createElement(B.a,{style:{color:D.a[900]}},r.a.createElement(W.a,{id:a.id,style:{background:D.a[100]}},r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,a.id)),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,a.name)),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,new Date(a.start).toLocaleTimeString())),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,new Date(a.end).toLocaleTimeString())),r.a.createElement(P.a,{variant:"head"},r.a.createElement("div",null,n(a.spend))),r.a.createElement(P.a,{variant:"head"},r.a.createElement(j.a,{style:{background:V.a[50],borderRadius:0},type:"button",component:c.b,onClick:function(){t(a.id)},to:"/",color:"primary"},"Delete"))))),r.a.createElement("div",{style:{width:"100%",textAlign:"center",padding:"30px 0"}},r.a.createElement(j.a,{style:{background:V.a[50],boxShadow:"0 0 3px rgba(0, 0, 0, 0.3)"},size:"large",type:"button",color:"primary",component:c.b,to:"/"},"Home")))},ne=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(_.a)(this,Object(N.a)(t).call(this,e))).addInterval=function(){var e=a.props,t=e.changeRunTime,n=e.addNewTask,r=e.tick,o=new Date;n({start:o.getTime(),hour:o.getHours(),isCompleted:!1}),t("stop");var i=setInterval((function(){return r(o)}),1e3);a.setState({timer:i})},a.removeInterval=function(){var e=a.props,t=e.canAddTask,n=e.verificationCanAddTask,r=e.changeErrorStatus,o=e.counter,i=e.removeCounter,l=e.changeRunTime,c=e.finishTask,s=e.modalControler,m=a.state.timer;t?(clearInterval(m),l("start"),c({end:(new Date).getTime(),spend:o,name:a.inputRef.current.value,isCompleted:!0}),i(),r(!1),n(!1),a.inputRef.current.value=""):(r(!0),s(!0),a.inputRef.current.focus())},a.tabMainLog=function(){var e=a.props,t=e.deleteTask,n=e.changeTabActive,o=e.tasks;return n(0),r.a.createElement(J,{deleteTask:t,tasks:o,timeToString:a.timeToString})},a.tabMainChart=function(){var e=a.props,t=e.changeTabActive,n=e.tasks,o=e.tasksGenerator,i=[];t(1);for(var l=0;l<24;l++)i.push({hour:l,duration:0});return i.map((function(e,t){return n.map((function(a){var n=60-new Date(a.start).getMinutes();if(e.hour===a.hour){var r=a.spend/1e3/60;r<n+1?e.duration+=r:t+1<24&&(i[t+1].duration=e.duration+r-n,e.duration+=n)}else e.duration>60&&(e.duration=60,t+1<24&&(i[t+1].duration=e.duration-60));return a})),e})),r.a.createElement(r.a.Fragment,null,r.a.createElement(M.e,{height:430},r.a.createElement(M.b,{data:i,margin:{top:50,right:20,bottom:50,left:20}},r.a.createElement(M.c,{strokeDasharray:"3 3"}),r.a.createElement(M.f,{dataKey:"hour",domain:[0,24]}),r.a.createElement(M.g,{domain:[0,60]}),r.a.createElement(M.d,null),r.a.createElement(M.a,{name:"Minuts in this hours",dataKey:"duration",fill:D.a[900],width:30}))),r.a.createElement(j.a,{style:{position:"fixed",bottom:50,right:50},variant:"contained",onClick:o},"generate"))},a.closeModal=function(){(0,a.props.modalControler)(!1)},a.taskInfo=function(e){var t=a.props,n=t.deleteTask,o=t.tasks,i=r.a.createElement(te,{paramsId:e.match.params.id});return o.length>0&&o.map((function(t){+e.match.params.id===t.id&&(i=r.a.createElement(ae,{deleteTask:n,task:t,timeToString:a.timeToString}))})),i},a.homePage=function(){var e=a.props,t=e.error,n=e.timeRunning,o=e.counter,i=e.varificationInput,l=e.tabValue,c=e.modalIsOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{modalIsOpen:c,closeModal:a.closeModal,timeToString:a.timeToString}),r.a.createElement(Z,{error:t,counter:o,varificationInput:i,tabValue:l,timeRunning:n,inputRef:a.inputRef,timeToString:a.timeToString,addInterval:a.addInterval,removeInterval:a.removeInterval,tabMainLog:a.tabMainLog,tabMainChart:a.tabMainChart}))},a.timeToString=function(e){var t=Math.floor(e/1e3/60/60%60),a=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60);return"".concat(t<10?"0".concat(t):t,":").concat(a<10?"0".concat(a):a,":").concat(n<10?"0".concat(n):n," ")},a.state={timer:null},a.inputRef=r.a.createRef(),a}return Object(w.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.timeRunning,a=e.startLastTask,n=e.tick;if("stop"===t){var r=setInterval((function(){return n(a)}),1e3);this.setState({timer:r})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{exact:!0,path:"/",component:this.homePage}),r.a.createElement(x.a,{path:"/task/:id",component:this.taskInfo}),r.a.createElement(x.a,{path:"/tasks-chart",component:this.homePage}))}}]),t}(r.a.Component),re=Object(l.b)((function(e){return{timeRunning:e.timeRunning,counter:e.counter,canAddTask:e.canAddTask,error:e.error,tasks:e.tasks,tabValue:e.tabValue,modalIsOpen:e.modalIsOpen,isCompleted:e.isCompleted,startLastTask:e.startLastTask}}),(function(e){return{changeRunTime:Object(d.a)(u,e),removeCounter:Object(d.a)(p,e),verificationCanAddTask:Object(d.a)(E,e),changeErrorStatus:Object(d.a)(h,e),varificationInput:Object(d.a)(b,e),tick:Object(d.a)(v,e),addNewTask:Object(d.a)(g,e),finishTask:Object(d.a)(T,e),deleteTask:Object(d.a)(f,e),changeTabActive:Object(d.a)(k,e),modalControler:Object(d.a)(y,e),tasksGenerator:Object(d.a)(O,e)}}))(ne);var oe=function(){return r.a.createElement(l.a,{store:C},r.a.createElement(c.a,null,r.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.14dc72cb.chunk.js.map