(this["webpackJsonpmars-speciality-clinic"]=this["webpackJsonpmars-speciality-clinic"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"infoName":"Call","infoValue":"+91 860 334 8924","infoLink":"tel: +918603348924"},{"id":2,"infoName":"Location","infoValue":"Shauna More, Patna","infoLink":"https://goo.gl/maps/LwKWLdL3whEqn8th6"}]')},,,,function(e){e.exports=JSON.parse('[{"id":1,"serviceName":"Maternity & Child Care","serviceDesciption":""},{"id":2,"serviceName":"Brain & Spine Surgery (Neuro)","serviceDesciption":""},{"id":3,"serviceName":"Laproscopic and Gastrosurgery","serviceDesciption":""},{"id":4,"serviceName":"Outdoor Patient Department","serviceDesciption":""}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"Dr. Madhu Priya","specialisation":"Paediatrician","degree":"M.B.B.S","picture":"doctorFemale.png"},{"id":2,"name":"Dr. Anjali Prakash","specialisation":"Obstetricians & Gynaecologists","degree":"M.B.B.S","picture":"doctorFemale2.png"},{"id":3,"name":"Dr. Ranvijay Kumar","specialisation":"General Surgeon","degree":"M.B.B.S","picture":"doctorMale2.png"},{"id":4,"name":"Dr. Sandeep Yadav","specialisation":"Neuro Surgeon","degree":"M.B.B.S","picture":"doctorMale.png"}]')},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=(a(21),a(22),a(12),a(2)),l=a(3),s=a(5),m=a(4),u=a(7),d=a(6),p=(a(28),a(10)),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{href:this.getLink(this.props.info),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"navbarCard"},r.a.createElement("div",{className:"navCardIcon"},r.a.createElement(u.a,{icon:this.getIcon(this.props.info),className:"cardIcon"})),r.a.createElement("div",{className:"navCardText"},this.getText(this.props.info))))}},{key:"getIcon",value:function(e){switch(e){case"Call":return d.g;case"Location":return d.f;default:return d.c}}},{key:"getText",value:function(e){var t=p.find((function(t){return t.infoName===e}));return t?t.infoValue:"You found a bug!!"}},{key:"getLink",value:function(e){var t=p.find((function(t){return t.infoName===e}));return t?t.infoLink:"You found a bug!!"}}]),a}(n.Component),v=(a(29),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"topbar row no-gutters"},r.a.createElement("div",{className:"topbar-item brand col-lg-4 col-sm-12"},r.a.createElement("div",{className:"brand-image"},r.a.createElement("img",{src:"/logo192.png",className:"d-inline-block align-top",alt:"MARS Speciality Clinic",loading:"lazy"})),r.a.createElement("div",{className:"brand-text"}," Speciality Clinic")),r.a.createElement("div",{className:"col-lg-2"}),r.a.createElement("div",{className:"topbar-item info-cards col-lg-6"},r.a.createElement(f,{info:"Call"}),r.a.createElement(f,{info:"Location"})))}}]),a}(n.Component)),h=(a(30),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbo"},r.a.createElement("div",{className:"jumbo-image"}),r.a.createElement("div",{className:"jumbo-text"},r.a.createElement("h2",{className:"text"},"MARS Speciality Clinic"),r.a.createElement("h5",{className:"sub-text"},"Passion for Cure")))}}]),a}(n.Component)),g=(a(31),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"media block-6 d-block text-center"},r.a.createElement("div",{className:"icon d-flex justify-content-center align-items-center"},r.a.createElement(u.a,{icon:this.getIcon(this.props.service.id),size:"2x"})),r.a.createElement("div",{className:"media-body p-2 mt-3"},r.a.createElement("h3",{className:"heading"},this.props.service.serviceName),r.a.createElement("p",null,this.props.service.serviceDesciption)))}},{key:"getIcon",value:function(e){switch(e){case 1:return d.a;case 2:return d.b;case 3:return d.h;case 4:return d.e;default:return d.c}}}]),a}(n.Component)),E=a(14),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"services"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row no-gutters"},E.map((function(e){return r.a.createElement("div",{className:"col-md-3 d-flex align-self-stretch p-4 servicesCard",key:e.id},r.a.createElement(g,{service:e}))})))))}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card profile-card-1"},r.a.createElement("img",{src:"./Image/Doctors/doctorBackground.png",alt:"profileBack",className:"background"}),r.a.createElement("img",{src:this.getImagePath(this.props.doctor.picture),alt:"profile",className:"profile"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("h2",null,this.props.doctor.name,r.a.createElement("small",null,this.props.doctor.degree)),r.a.createElement("h4",null,this.props.doctor.specialisation)))}},{key:"getImagePath",value:function(e){return"./Image/Doctors/".concat(e)}}]),a}(n.Component),y=a(15),j=(a(32),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"doctor"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"sectionHeader"},"Our Doctors"),r.a.createElement("div",{className:"row justify-content-around"},y.map((function(e){return r.a.createElement("div",{className:"col-md-3",key:e.id},r.a.createElement(N,{doctor:e}))})))))}}]),a}(n.Component)),O=(a(33),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"},r.a.createElement("p",{className:"h5"},"Made with"," ",r.a.createElement(u.a,{icon:d.d,className:"heartIcon"})," in 2020")),r.a.createElement("hr",null))))}}]),a}(n.Component));var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.8d2d3031.chunk.js.map