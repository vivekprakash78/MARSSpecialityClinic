(this["webpackJsonpmars-speciality-clinic"]=this["webpackJsonpmars-speciality-clinic"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"infoName":"Call","infoValue":"+91 860 334 8924","infoLink":"tel: +918603348924"},{"id":2,"infoName":"Location","infoValue":"Shaguna More, Patna","infoLink":"https://goo.gl/maps/LwKWLdL3whEqn8th6"}]')},,,,function(e){e.exports=JSON.parse('[{"id":1,"serviceName":"Maternity & Child Care","serviceDesciption":["Incubator & Phototherapy","Vaccination","Asthma Clinic","Nebulization"]},{"id":2,"serviceName":"Obstetrics & Gynaecology","serviceDesciption":["Normal Delivery","Caesarean Section","Infertility Treatment","Laproscopic Gynae Sugery"]},{"id":3,"serviceName":"Laproscopic and Gastrosurgery","serviceDesciption":["Laproscopic Gall Bladder, Appendix, Hernia Surgery","Piles, Fissure, Fistula Surgery by MIPH & Laser","CBD, Pancrease & Liver Surgery","G.I Cancer Surgery"]},{"id":4,"serviceName":"Brain & Spine Surgery (Neuro)","serviceDesciption":["Head Injury","Trauma ICU","Spine Surgery","Brain Tumor Surgery","Shunt & MMC Surgery"]}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"Dr. Madhu Priya","specialisation":"Consultant Paediatrician","degree":"MBBS, DCH, MD (BHU)","picture":"doctorFemale.png"},{"id":2,"name":"Dr. Anjali Prakash","specialisation":"Consultant Gynaecologists & Infertility Specialist","degree":"MBBS, DNB (OBG)","picture":"doctorFemale2.png"},{"id":3,"name":"Dr. Ranvijay Kumar","specialisation":"Advanced Laproscopic & Gastrosurgeon","degree":"MBBS, MS, FMAS, FIAGES","picture":"doctorMale2.png"},{"id":4,"name":"Dr. Sandeep Yadav","specialisation":"Consultant Neuro Surgeon","degree":"MBBS, MS (BHU), MCh (Neuro)","picture":"doctorMale.png"}]')},function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),i=t.n(c),o=(t(21),t(22),t(12),t(2)),l=t(3),s=t(5),u=t(4),m=t(7),d=t(6),p=(t(28),t(10)),f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:this.getLink(this.props.info),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"navbarCard"},r.a.createElement("div",{className:"navCardIcon"},r.a.createElement(m.a,{icon:this.getIcon(this.props.info),className:"cardIcon"})),r.a.createElement("div",{className:"navCardText"},this.getText(this.props.info))))}},{key:"getIcon",value:function(e){switch(e){case"Call":return d.f;case"Location":return d.e;default:return d.c}}},{key:"getText",value:function(e){var a=p.find((function(a){return a.infoName===e}));return a?a.infoValue:"You found a bug!!"}},{key:"getLink",value:function(e){var a=p.find((function(a){return a.infoName===e}));return a?a.infoLink:"You found a bug!!"}}]),t}(n.Component),v=(t(29),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"topbar row no-gutters"},r.a.createElement("div",{className:"topbar-item brand col-lg-4 col-sm-12"},r.a.createElement("div",{className:"brand-image"},r.a.createElement("img",{src:"/logo192.png",className:"d-inline-block align-top",alt:"MARS Speciality Clinic",loading:"lazy"})),r.a.createElement("div",{className:"brand-text"}," Speciality Clinic")),r.a.createElement("div",{className:"col-lg-2"}),r.a.createElement("div",{className:"topbar-item info-cards col-lg-6"},r.a.createElement(f,{info:"Call"}),r.a.createElement(f,{info:"Location"})))}}]),t}(n.Component)),h=(t(30),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbo"},r.a.createElement("div",{className:"jumbo-image"}),r.a.createElement("div",{className:"jumbo-text"},r.a.createElement("h2",{className:"text"},"MARS Speciality Clinic"),r.a.createElement("h5",{className:"sub-text"},"Passion for Cure")))}}]),t}(n.Component)),g=(t(31),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"media block-6 d-block text-center"},r.a.createElement("div",{className:"icon d-flex justify-content-center align-items-center"},r.a.createElement(m.a,{icon:this.getIcon(this.props.service.id),size:"2x"})),r.a.createElement("div",{className:"media-body p-2 mt-3"},r.a.createElement("h3",{className:"heading"},this.props.service.serviceName),r.a.createElement("ul",{className:"serviceList"},this.props.service.serviceDesciption.map((function(e){return r.a.createElement("li",null,e)})))))}},{key:"getIcon",value:function(e){switch(e){case 1:return d.a;case 2:return d.b;case 3:return d.g;case 4:return d.h;default:return d.c}}}]),t}(n.Component)),E=t(14),b=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"services"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row no-gutters"},E.map((function(e){return r.a.createElement("div",{className:"col-md-3 d-flex align-self-stretch p-4 servicesCard",key:e.id},r.a.createElement(g,{service:e}))})))))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card profile-card-1"},r.a.createElement("img",{src:"./Image/Doctors/doctorBackground.png",alt:"profileBack",className:"background"}),r.a.createElement("img",{src:this.getImagePath(this.props.doctor.picture),alt:"profile",className:"profile"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("h2",null,this.props.doctor.name,r.a.createElement("small",null,this.props.doctor.degree)),r.a.createElement("h4",null,this.props.doctor.specialisation)))}},{key:"getImagePath",value:function(e){return"./Image/Doctors/".concat(e)}}]),t}(n.Component),N=t(15),j=(t(32),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"doctor"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"sectionHeader"},"Our Doctors"),r.a.createElement("div",{className:"row justify-content-around"},N.map((function(e){return r.a.createElement("div",{className:"col-md-3",key:e.id},r.a.createElement(y,{doctor:e}))})))))}}]),t}(n.Component)),O=(t(33),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"},r.a.createElement("p",{className:"h5"},"Made with"," ",r.a.createElement(m.a,{icon:d.d,className:"heartIcon"})," in 2020")),r.a.createElement("hr",null))))}}]),t}(n.Component));var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.07f421cf.chunk.js.map