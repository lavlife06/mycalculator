(this.webpackJsonpmycalculator=this.webpackJsonpmycalculator||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(2),o=e.n(l),c=(e(13),e(3)),i=e(4),u=e(6),s=e(5),m=e(7),p=(e(14),function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=Object(u.a)(this,(t=Object(s.a)(n)).call.apply(t,[this].concat(r)))).state={value:null,displayString:"0",waitingForOperand:!1,currentoperator:null},e.holdInput=function(t){var n=e.state,a=n.displayString;n.waitingForOperand?e.setState({displayString:t,waitingForOperand:!1}):e.setState({displayString:"0"===a?t:"Error"===a?"Error":a+t})},e.handleDel=function(){var t=e.state.displayString;"Error"!==t&&e.setState({displayString:t.slice(0,t.length-1)})},e.handleSqroot=function(){var t=e.state.displayString;"Error"!==t&&e.setState({displayString:Math.sqrt(t)})},e.handleClear=function(){e.setState({displayString:"0"})},e.handleOperation=function(t){var n=e.state,a=n.displayString,r=n.value,l=n.currentoperator,o=n.waitingForOperand;if("Error"!==a)if(!0===o&&"="!==l)e.setState({value:null,displayString:"Error",waitingForOperand:!1,currentoperator:null});else{var c=parseFloat(a);if(null==r)e.setState({value:c});else if(t){var i={"/":function(t,n){return t/n},X:function(t,n){return t*n},"%":function(t,n){return t%n},"-":function(t,n){return t-n},"+":function(t,n){return t+n},"=":function(t,n){return n}}[l](r||0,c);e.setState({value:i,displayString:String(i)})}e.setState({waitingForOperand:!0,currentoperator:t})}},e}return Object(m.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"display"},this.state.displayString),r.a.createElement("button",{className:"a",onClick:this.handleClear},"AC"),r.a.createElement("button",{className:"b",onClick:function(){return t.holdInput("7")}},"7"),r.a.createElement("button",{className:"c",onClick:function(){return t.holdInput("8")}},"8"),r.a.createElement("button",{className:"d",onClick:function(){return t.holdInput("9")}},"9"),r.a.createElement("button",{className:"e",onClick:function(){return t.handleOperation("%")}},"%"),r.a.createElement("button",{className:"f",onClick:this.handleSqroot},"squareroot"),r.a.createElement("button",{className:"g",onClick:this.handleDel},"DEL"),r.a.createElement("button",{className:"h",onClick:function(){return t.holdInput("4")}},"4"),r.a.createElement("button",{className:"i",onClick:function(){return t.holdInput("5")}},"5"),r.a.createElement("button",{className:"j",onClick:function(){return t.holdInput("6")}},"6"),r.a.createElement("button",{className:"k",onClick:function(){return t.handleOperation("X")}},"X"),r.a.createElement("button",{className:"l",onClick:function(){return t.handleOperation("/")}},"/"),r.a.createElement("button",{className:"m"},"sin()"),r.a.createElement("button",{className:"n",onClick:function(){return t.holdInput("1")}},"1"),r.a.createElement("button",{className:"o",onClick:function(){return t.holdInput("2")}},"2"),r.a.createElement("button",{className:"p",onClick:function(){return t.holdInput("3")}},"3"),r.a.createElement("button",{className:"q",onClick:function(){return t.handleOperation("-")}},"-"),r.a.createElement("button",{className:"r"},"cos()"),r.a.createElement("button",{className:"s",onClick:function(){return t.holdInput("0")}},"0"),r.a.createElement("button",{className:"t",onClick:function(){return t.holdInput("00")}},"00"),r.a.createElement("button",{className:"u",onClick:function(){return t.holdInput(".")}},"."),r.a.createElement("button",{className:"v",onClick:function(){return t.handleOperation("+")}},"+"),r.a.createElement("button",{className:"w",onClick:function(){return t.handleOperation("=")}},"="))}}]),n}(r.a.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,n,e){t.exports=e(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.26664162.chunk.js.map