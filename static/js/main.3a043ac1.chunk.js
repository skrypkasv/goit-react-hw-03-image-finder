(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(11),o=n.n(s),i=(n(18),n(12)),l=n(3),u=n(4),b=n(6),d=n(5),m=n(9),h=n.n(m);function j(t){var e=t.title,n=void 0===e?"":e,c=t.children;return Object(a.jsxs)("div",{className:h.a.section,children:[Object(a.jsx)("h2",{className:h.a.title,children:n}),c]})}var f=n(10),_=n(7),O=n.n(_),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeName=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleChangeNumber=function(e){var n=e.target,a=n.name,c=n.value,r=n.maxLength,s=c.slice(0,r);t.setState(Object(f.a)({},a,s))},t.handleSubmit=function(e){e.preventDefault(),t.state.name.trim().length>0?t.props.onAddContact(t.state):alert("unable to add empty field!!!"),t.resetInputs()},t.resetInputs=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:O.a.label,children:"Name"}),Object(a.jsx)("input",{type:"text",required:!0,placeholder:"John Snow",value:this.state.name,onChange:this.handleChangeName,name:"name"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:O.a.label,children:"Number"}),Object(a.jsx)("input",{type:"number",required:!0,placeholder:"+38-097-000-01-07",maxLength:"13",value:this.state.number,onChange:this.handleChangeNumber,name:"number"})]}),Object(a.jsx)("button",{type:"submit",className:O.a.btn_submit,children:"Add contact"})]})}}]),n}(c.Component),C=n(2),x=n.n(C);function v(t){var e=t.list,n=t.onDelContact;return e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)("li",{className:x.a.item,children:Object(a.jsxs)("ul",{className:x.a.item_list,children:[Object(a.jsxs)("li",{className:x.a.contact_data,children:[Object(a.jsx)("span",{className:x.a.name,children:c}),":"," "]}),Object(a.jsx)("li",{className:x.a.contact_data,children:Object(a.jsx)("span",{className:x.a.number,children:r})}),Object(a.jsx)("li",{className:x.a.contact_btn_del,children:Object(a.jsx)("button",{className:x.a.btn_delete,type:"button",onClick:function(){return n(e)},children:"Delete"})})]})},e)}))}function g(t){var e=t.contacts,n=t.onClearContact;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:Object(a.jsx)(v,{list:e,onDelContact:n})})})}function N(t){var e=t.value,n=t.onUpdateFilter;return Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:function(t){return n(t.target.value)}})]})}var S=n(21),y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.makeLocalStorageRecord=function(){localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(S.a)(),name:n,number:a};t.checkForUniqueness(n)?alert("contact of ".concat(n," is already exist!!!")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.checkForUniqueness=function(e){return!!t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase())},t.clearContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.updateFilter=function(e){t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&this.makeLocalStorageRecord()}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{title:"Phonebook",children:Object(a.jsx)(p,{onAddContact:this.addContact})}),this.state.contacts.length>1&&Object(a.jsx)(j,{children:Object(a.jsx)(N,{value:t,onUpdateFilter:this.updateFilter})}),this.state.contacts.length>0&&Object(a.jsx)(j,{title:"Contacts:",children:Object(a.jsx)(g,{contacts:e,onClearContact:this.clearContact})})]})}}]),n}(c.Component),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),F()},2:function(t,e,n){t.exports={item:"Contact_item__sMWIN",item_list:"Contact_item_list__2Yda2",contact_data:"Contact_contact_data__2EbRA",contact_btn_del:"Contact_contact_btn_del__bGlvG",number:"Contact_number__19Dgc",name:"Contact_name__TaNrO",btn_delete:"Contact_btn_delete__3z2RQ"}},7:function(t,e,n){t.exports={label:"ContactForm_label__m0cRG",btn_submit:"ContactForm_btn_submit__A1FCE"}},9:function(t,e,n){t.exports={section:"Section_section__TCrzQ",title:"Section_title__3bAvo"}}},[[19,1,2]]]);
//# sourceMappingURL=main.3a043ac1.chunk.js.map