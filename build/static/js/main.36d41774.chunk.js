(this["webpackJsonpCasper's Resume"]=this["webpackJsonpCasper's Resume"]||[]).push([[0],{197:function(e,t,i){},219:function(e,t,i){},226:function(e,t,i){"use strict";i.r(t);var r,n,l=i(1),c=i.n(l),a=i(100),s=i.n(a),o=(i(197),i(5)),d=i(7),p=i(8),h=i(6),j=i(101),x=i.n(j),g=i(0),b=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e)).state={menu_y:-220},r}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return Object(g.jsx)(x.a,{component:!1,enter:{translateY:this.state.menu_y},leave:{translateY:this.state.menu_y},ref:function(t){return e.menu_bar=t},style:{zIndex:"100"},children:Object(g.jsxs)("header",{className:"App-header",style:{top:"0px",width:"100%",position:"fixed",height:"300px",boxShadow:"#000 0px 15px 30px"},children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("button",{className:"btn btn-primary",style:{marginTop:"-5px",width:"110px",height:"70px",border:"1px solid #fff",visibility:"hidden"},children:"Background"})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("button",{className:"btn btn-primary",style:{marginTop:"-5px",width:"160px",height:"70px",border:"1px solid #fff",visibility:"hidden"},children:"Other Interests"})})]}),Object(g.jsxs)("div",{id:"nav-form-controls",style:{marginTop:"140px",display:"flex"},children:[Object(g.jsx)("button",{className:"btn btn-primary nav-btn",style:{marginLeft:"-10px",float:"left"},onClick:function(){10===e.state.menu_y?e.setState({menu_y:-220}):e.setState({menu_y:10})},children:"Menu"}),Object(g.jsx)("div",{style:{width:"100px",height:"100px",background:"url(../../../psybr-tech-sec.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat"},className:"nav-profile-image",onClick:function(){return window.location="https://calm-ground-0c6108310.3.azurestaticapps.net/"}}),Object(g.jsx)("button",{className:"btn btn-success nav-btn",style:{marginRight:"-10px",float:"right"},children:"Contact Me"})]})]},"app-header")})}}]),i}(c.a.Component),f=i(31),m=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e)).goToNextSlide=r.goToNextSlide.bind(Object(f.a)(r)),r.goToPreviousSlide=r.goToPreviousSlide.bind(Object(f.a)(r)),r.state={menu_y:0,index:0,autoplay:!0,translateValue:0},r}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.state.autoplay&&window.setInterval((function(){e.goToNextSlide()}),8e3)}},{key:"goToNextSlide",value:function(){this.setState({index:this.state.index+1>=this.props.images.length?0:this.state.index+1})}},{key:"goToPreviousSlide",value:function(){this.setState({index:this.state.index-1<0?this.props.images.length-1:this.state.index-1})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"slideshow-container",children:[Object(g.jsx)("div",{className:"slideshow",style:{background:"url("+this.props.images[this.state.index]+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}),Object(g.jsx)("div",{className:"slider-btn",style:{left:"10px",background:"url(./slider-left-arrow.svg)",backgroundRepeat:"no-repeat",backgroundSize:"70% 70%",backgroundPosition:"15px 10px"},onClick:function(){return e.goToPreviousSlide()}}),Object(g.jsx)("div",{className:"slider-btn",style:{right:"10px",background:"url(./slider-right-arrow.svg)",backgroundRepeat:"no-repeat",backgroundSize:"70% 70%",backgroundPosition:"15px 10px"},onClick:function(){return e.goToNextSlide()}}),Object(g.jsx)("div",{style:{marginTop:"-50px"},children:Object(g.jsx)("div",{style:{display:"inline-block",height:"25px",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",borderRadius:"80px",border:"1px dashed #ff7200",backgroundColor:"rgba(0,0,0,.5)"},children:Object(g.jsx)("div",{style:{display:"flex"},children:this.props.images.map((function(t,i){return Object(g.jsx)("div",{style:{width:"17px",height:"17px",marginLeft:"2px",marginRight:"2px",marginTop:"3px",borderRadius:"20px",backgroundColor:i===e.state.index?"#ff7200":"#fff"}},"slideshow-image-".concat(i))}))})})})]})}}]),i}(l.Component),u=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{style:{textAlign:"center",color:"#fff"},children:"Introduction"}),Object(g.jsx)("p",{style:{width:"80%",margin:"auto",color:"#fff"},children:"I'm a 28 year old tech enthusiast who grew up in Randburg, Johannesburg, South Africa. I first learned to code using Borland Delphi 7 (Pascal), 12 years ago. I primarily design & develop applications for the Web but I do also work on applications for Windows, Android & Linux - I occasionally dabble in a bit of MacOS and iOS pet-projects although that's not my primary stack/market - unless it's a WORA/WORE implementation of course. I've worked with most of the common methodologies of the Software Development Life Cycle, mainly the Agile, Extreme Programming & Waterfall methodology along with SCRUM. I'm proficient in JavaScript/Typescript (Front-end using Angular, React, Vue and Back-end using Express, Axios and Nest - along with TypeORM), Java (SpringBoot & Hibernate), C#.NET, PL/SQL and  Bash. I'd describe myself as a curious individual who likes to experiment with a wide range of technologies such as Python, C (mainly for electronics programming - currently Arduino Uno & Mega and the Nordic nRF52) and occassionally some C++ usually only for experimenting with Unreal Engine."}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{style:{width:"80%",margin:"auto",color:"#fff"},children:"My day-to-day stack includes:"}),Object(g.jsx)("div",{style:{width:"25%",margin:"auto",color:"#fff"},children:Object(g.jsxs)("ul",{style:{listStyle:"none"},children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.oracle.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Java SE"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.spring.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Spring Boot API"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.typescriptlang.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TypeScript"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.reactjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ReactJS"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.electronjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ElectronJS"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.getbootstrap.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.expressjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ExpressJS"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"http://www.jade-lang.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Jade Template Engine"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"http://www.keystonejs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"KeystoneJS"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.nginx.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Nginx"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.docker.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Docker"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.heroku.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Heroku"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{style:{textDecoration:"underline",color:"#fff"},href:"https://www.letsencrypt.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Let's Encrypt"})}),Object(g.jsx)("li",{children:"Bash"}),Object(g.jsx)("li",{children:"SSH"}),Object(g.jsx)("li",{children:"and Mac OS X."})]})})]})}}]),i}(c.a.Component),O=u,v=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"skill-container",children:[Object(g.jsx)("p",{style:{textAlign:"center",fontWeight:"bolder"},children:this.props.skills_category}),Object(g.jsx)("div",{style:{display:"block"},children:this.props.skills.map((function(e,t){return Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsx)("p",{style:{margin:"0px 10px 0px 0px",textAlign:"left",float:"left"},children:e.title})}),Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)("div",{id:"skill-bar-".concat(t),className:"skill-bar",children:[Object(g.jsx)("div",{id:"skill-level-".concat(t),style:{width:"".concat(e.level,"%"),height:"5px",backgroundColor:"#ff7400",borderRadius:"5px"}}),Object(g.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:"#ff7400",borderRadius:"20px",margin:"-13px 0px 0px ".concat(e.level-5,"%")}})]})}),Object(g.jsx)("div",{className:"col-lg-4",children:Object(g.jsxs)("p",{className:"skill-level",style:{textAlign:"right",float:"right"},children:[e.level,"%"]})})]},e.id)}))})]})}}]),i}(c.a.Component),y=v,w=[{id:"java",title:"Java",level:80},{id:"csharp",title:"C#",level:70},{id:"javascript",title:"JavaScript",level:85},{id:"html5",title:"HTML5",level:88},{id:"css3",title:"CSS3",level:83},{id:"cpp",title:"C++",level:60},{id:"sql",title:"SQL",level:76},{id:"nosql",title:"NoSQL",level:80},{id:"pascal",title:"Delphi (Pascal)",level:40}],k=[{id:"git",title:"Git",level:75},{id:"docker",title:"Docker",level:80},{id:"npm",title:"NPM",level:70},{id:"jest",title:"Jest",level:50},{id:"junit",title:"JUnit",level:50},{id:"yarn",title:"Yarn",level:30},{id:"webpack",title:"WebPack",level:50},{id:"travis-ci",title:"Travis CI",level:30},{id:"jenkins",title:"Jenkins",level:30}],N=[{id:"public-speaking",title:"Public Speaking",level:45},{id:"communication",title:"Communication",level:80},{id:"flexibility",title:"Flexibility",level:90},{id:"critical-thinking",title:"Critical Thinking",level:91},{id:"professionalism",title:"Professionalism",level:100},{id:"courtesy",title:"Courtesy",level:100},{id:"integrity",title:"Integrity",level:100},{id:"work-ethic",title:"Work Ethic",level:100},{id:"team-work",title:"Team Work",level:100}],S=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{style:{textAlign:"center",color:"#fff"},children:"My current progress in my skill-set"}),Object(g.jsxs)("div",{className:"row",style:{width:"90%",margin:"auto"},children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)(y,{id:"programming-skills",skills_category:"Programming Skills",skills:w})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)(y,{id:"devops-skills",skills_category:"DevOps Skills",skills:k})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)(y,{id:"soft-skills",skills_category:"Soft Skills",skills:N})})]})]})}}]),i}(c.a.Component),C=S,T=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"education-info-container",children:[Object(g.jsx)("h3",{style:{textAlign:"center",margin:"50px 0px 50px 0px",color:"#fff"},children:"Education"}),Object(g.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto",border:"1px solid #fff"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"10px",color:"#fff",fontWeight:"bolder"},children:"2009"})}),Object(g.jsx)("div",{className:"education-info-left",children:Object(g.jsxs)("div",{style:{width:"86%",marginTop:"-10px",borderRadius:"5px",backgroundColor:"#eeeeee",padding:"10px"},children:[Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"Rand Park High School ( 20\xad09 - 2013)"}),Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"Nation Senior Certificate"}),Object(g.jsx)("p",{children:"This is where Casper would fall in love with the art of programming."})]})}),Object(g.jsx)("div",{style:{width:"2px",height:"70px",borderRadius:"10px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"}}),Object(g.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto",border:"1px solid #fff"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"10px",color:"#fff",fontWeight:"bolder"},children:"2014"})}),Object(g.jsx)("div",{className:"education-info-right",children:Object(g.jsxs)("div",{style:{width:"95%",margin:"-10px 0px 0px 14%",borderRadius:"5px",backgroundColor:"#eeeeee",padding:"10px"},children:[Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"Univ. of Johannesburg (2014 - present)"}),Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"BSc Information Technology"}),Object(g.jsx)("p",{children:"Majoring in Computer Science & Informatics and minoring in Mathematics (Calculus 1 & Descrete 1), Business Management 1 and Information Management 1."})]})}),Object(g.jsx)("div",{style:{width:"2px",height:"70px",borderRadius:"10px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"}}),Object(g.jsx)("div",{style:{width:"60px",height:"60px",borderRadius:"60px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"18px",color:"#fff",fontWeight:"bolder"},children:"Now"})})]})}}]),i}(c.a.Component),R=T,A=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"work-history-container",children:[Object(g.jsx)("h3",{style:{textAlign:"center",margin:"50px 0px 50px 0px",color:"#fff"},children:"Work Experience"}),Object(g.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto",border:"1px solid #fff"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"10px",color:"#fff",fontWeight:"bolder"},children:"2014"})}),Object(g.jsx)("div",{className:"xp-info-left",children:Object(g.jsxs)("div",{style:{width:"86%",marginTop:"-10px",borderRadius:"5px",backgroundColor:"#eeeeee",padding:"10px"},children:[Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"Patrish Mobile Nails ( 2014 \xad- 2016)"}),Object(g.jsx)("p",{children:"My role at PMN was to help uplift the company\u2019s online presence by developing and maintaining a modern, responsive and SEO compliant web application."}),Object(g.jsx)("p",{children:"For this project I initially used pHp with MySQL, and eventually rewrote the project in NodeJS."})]})}),Object(g.jsx)("div",{style:{width:"2px",height:"70px",borderRadius:"10px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"}}),Object(g.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto",border:"1px solid #fff"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"10px",color:"#fff",fontWeight:"bolder"},children:"2016"})}),Object(g.jsx)("div",{className:"xp-info-right",children:Object(g.jsxs)("div",{style:{width:"87%",margin:"-10px 0px 0px 14%",borderRadius:"5px",backgroundColor:"#eeeeee",padding:"10px"},children:[Object(g.jsx)("p",{style:{fontSize:"15px",textAlign:"left",fontWeight:"bolder"},children:"Omega Fire & Security (2016 - present)"}),Object(g.jsx)("p",{children:"My primary role at Omega was to develop an internal tool to help the company better manage various aspects of its business operations such as, human resource management, project management, quoting, invoicing, task management, time & attendance as well as a policy/regulatory document \xadmanagement system - essentially a miniature ERP system."})]})}),Object(g.jsx)("div",{style:{width:"2px",height:"70px",borderRadius:"10px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"}}),Object(g.jsx)("div",{style:{width:"60px",height:"60px",borderRadius:"60px",backgroundColor:"#ff7400",marginLeft:"auto",marginRight:"auto"},children:Object(g.jsx)("p",{style:{fontSize:"18px",paddingTop:"18px",color:"#fff",fontWeight:"bolder"},children:"Now"})})]})}}]),i}(c.a.Component),M=A,P=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{width:"90%",margin:"auto",backgroundColor:"#fff",padding:"30px",borderRadius:"10px"},children:[Object(g.jsx)("h3",{style:{textAlign:"center",paddingBottom:"30px"},children:"Stack History"}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-lg-2",children:[Object(g.jsx)("img",{src:"./macosx.png",alt:"Mac OS X",style:{width:"200px",height:"150px"}}),Object(g.jsx)("h3",{style:{textAlign:"center"},children:"Mac OS X"})]}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./windows10.png",alt:"Windows10",style:{width:"200px",height:"45px",marginTop:"60px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./linux.jpeg",alt:"Linux",style:{width:"200px",height:"130px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./android.png",alt:"Android",style:{width:"135px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./java.png",alt:"Java",style:{width:"170px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./spring.png",alt:"Spring Boot",style:{width:"200px",height:"65px",marginTop:"50px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./maven.png",alt:"Maven",style:{width:"150px",height:"50px",marginTop:"50px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./junit.png",alt:"JUnit",style:{width:"130px",height:"80px",marginTop:"50px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./mongo.png",alt:"MongoDB",style:{width:"200px",height:"65px",marginTop:"50px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./node.png",alt:"NodeJS",style:{width:"190px",height:"120px",marginTop:"20px"}})}),Object(g.jsxs)("div",{className:"col-lg-2",children:[Object(g.jsx)("img",{src:"./reactjs.png",alt:"ReactJS",style:{width:"200px",height:"150px"}}),Object(g.jsx)("h3",{style:{textAlign:"center"},children:"ReactJS"})]}),Object(g.jsxs)("div",{className:"col-lg-2",children:[Object(g.jsx)("img",{src:"./electronjs.png",alt:"ElectronJS",style:{width:"150px",height:"150px"}}),Object(g.jsx)("h3",{style:{textAlign:"center"},children:"ElectronJS"})]}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./csharp.png",alt:"C#.NET",style:{width:"200px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./vb.png",alt:"VB.NET",style:{width:"200px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./asp.png",alt:"ASP.NET",style:{width:"200px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./sqlserver.png",alt:"SQL Server",style:{width:"200px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./azure.png",alt:"Microsoft Azure",style:{width:"200px",height:"120px",marginTop:"30px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./msaccess.png",alt:"Microsoft Access",style:{width:"150px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./html5.png",alt:"HTML5",style:{width:"140px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./css3.png",alt:"CSS3",style:{width:"100px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./js.jpeg",alt:"JavaScript",style:{width:"130px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./sass.png",alt:"Sass",style:{width:"160px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./sqlite.jpeg",alt:"SQLite",style:{width:"180px",height:"110px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./sql.png",alt:"SQL",style:{width:"180px",height:"150px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./cpp.png",alt:"C++",style:{width:"150px",height:"150px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("a",{href:"https://www.embarcadero.com/products/delphi",children:Object(g.jsx)("img",{src:"./delphi.png",alt:"Delphi",style:{width:"200px",height:"150px",marginTop:"20px"}})})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./php.png",alt:"pHp",style:{width:"200px",height:"140px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./phpmyadmin.png",alt:"pHp My Admin",style:{width:"200px",height:"150px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./mysql.png",alt:"MySQL",style:{width:"200px",height:"120px",marginTop:"20px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./digitalocean.png",alt:"Digital Ocean",style:{width:"200px",height:"170px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./cpanel.png",alt:"cPanel",style:{width:"180px",height:"50px",marginTop:"60px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./maps.png",alt:"Google Maps API",style:{width:"200px",height:"50px",marginTop:"60px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./firebase.png",alt:"Google Firebase",style:{width:"200px",height:"100px",marginTop:"25px"}})}),Object(g.jsx)("div",{className:"col-lg-2",children:Object(g.jsx)("img",{src:"./analytics.png",alt:"Google Analytics",style:{width:"200px",height:"150px"}})})]})]})}}]),i}(c.a.Component),E=P,L=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{width:"90%",color:"#fff",backgroundColor:"rgba(255,255,255,.6)",margin:"40px auto 0px auto",padding:"30px",borderRadius:"10px",border:"1px solid #fff"},children:[Object(g.jsx)("h3",{style:{textAlign:"center",paddingBottom:"30px"},children:"Project History"}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("a",{href:"http://www.pioneerdesigns.co.za/",children:"Pioneer Designs"})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("a",{href:"https://patrishnails.herokuapp.com/",children:"Patrish Nails"})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("a",{href:"http://airotek.herokuapp.com/",children:"Airotek Engineering"})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("a",{href:"https://calm-ground-0c6108310.3.azurestaticapps.net/",children:"Casper's Resume"})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("a",{href:"http://icebreak.azurewebsites.net/",children:"My group's 3rd year webapp's server and parts of the Android app."})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsxs)("p",{style:{color:"#000"},children:["Also checkout some of my other projects on ",Object(g.jsx)("a",{href:"https://github.com/Cazs",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})})]})]})}}]),i}(c.a.Component),z=L,D=(i(214),function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{width:"100%",height:"auto",backgroundColor:"#56b4d3",marginTop:"20px",borderTop:"1px solid #fff"},children:[Object(g.jsx)("h2",{children:"Pet Projects and Proof of Concepts"}),Object(g.jsxs)("p",{children:["Unfortunately I don't have enough time to work on all my side projects, but don't worry, something really cool is coming!",Object(g.jsx)("span",{role:"img","aria-label":"Shhh Emoji",children:"\ud83e\udd2b"})]}),Object(g.jsxs)("div",{id:"accordion",children:[Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)("a",{className:"card-link","data-toggle":"collapse",href:"#collapseOne",children:"Capture The Flag Game (3rd Year Computer Science Project)"})}),Object(g.jsx)("div",{id:"collapseOne",className:"collapse show","data-parent":"#accordion",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("img",{src:"https://image.ibb.co/iHVTMT/ctf600x375_15fps.gif",width:"640",height:"480",alt:"Capture The Flag game preview",datatype:"gif"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://calm-ground-0c6108310.3.azurestaticapps.net/static/media/capture-the-flag.zip",style:"margin-top: 15px",children:Object(g.jsx)("span",{role:"img","aria-label":"Floppy Disk Emoji",children:"\ud83d\udcbe Download Capture The Flag"})})]})})]}),Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)("a",{className:"card-link","data-toggle":"collapse",href:"#collapseTwo",children:"Platformer Game Level Editor (2nd Year Computer Science Project)"})}),Object(g.jsx)("div",{id:"collapseTwo",className:"collapse show","data-parent":"#accordion",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("img",{src:"https://i.ibb.co/D9m4t93/level-editor700x438-30fps.gif",width:"640",height:"480",alt:"Capture The Flag game preview",datatype:"gif"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://calm-ground-0c6108310.3.azurestaticapps.net/static/media/platformer-level-editor.zip",style:"margin-top: 15px",children:Object(g.jsx)("span",{role:"img","aria-label":"Floppy Disk Emoji",children:"\ud83d\udcbe Download Platformer Level Editor"})})]})})]}),Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)("a",{className:"card-link","data-toggle":"collapse",href:"#collapseThree",children:"Arduino Mega Stuff"})}),Object(g.jsx)("div",{id:"collapseThree",className:"collapse show","data-parent":"#accordion",children:Object(g.jsx)("div",{className:"card-body",children:Object(g.jsx)("iframe",{className:"pet-project-video",src:"https://drive.google.com/file/d/1x2RGKhvKIErYOzhJkaq4uxwI_6WfTQFp/preview",allow:"fullscreen"})})})]}),Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)("a",{className:"collapsed card-link","data-toggle":"collapse",href:"#collapseFour",children:"RC Car Project"})}),Object(g.jsx)("div",{id:"collapseFour",className:"collapse","data-parent":"#accordion",children:Object(g.jsx)("div",{className:"card-body",children:Object(g.jsx)("iframe",{className:"pet-project-video",src:"https://drive.google.com/file/d/1uEUQSd3nP1A1ky5FIsFp18r6Y7qM5xS0/preview",allow:"fullscreen"})})})]}),Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)("a",{className:"collapsed card-link","data-toggle":"collapse",href:"#collapseFive",children:"Makeshift Steering System for RC car"})}),Object(g.jsx)("div",{id:"collapseFive",className:"collapse","data-parent":"#accordion",children:Object(g.jsx)("div",{className:"card-body",children:Object(g.jsx)("iframe",{className:"pet-project-video",src:"https://drive.google.com/file/d/1LmSRjo13e7qKwGtfdDrCESt_LZ6EDkj7/preview",allow:"fullscreen"})})})]})]})]})}}]),i}(c.a.Component)),_=D,W=i(63),J=i(64),I=J.a.a(r||(r=Object(W.a)(["\n    width: 30px;\n    height: 30px;\n    margin: 0px auto 0px auto;\n    background: url(./github-logo.svg);\n    backgroundSize: contain\n    &:hover\n    {\n        background-color: #fff;\n        border-radius: 30px;\n    }\n"]))),F=J.a.a(n||(n=Object(W.a)(["\n    width: 30px;\n    height: 30px;\n    margin: 0px auto 0px auto;\n    background: url(./linkedin-logo.svg);\n    backgroundSize: contain\n    &:hover\n    {\n        background-color: #fff;\n        border-radius: 5px;\n    }\n"]))),B=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{width:"100%",height:"auto",backgroundColor:"#56b4d3",marginTop:"20px",borderTop:"1px solid #fff"},children:[Object(g.jsxs)("p",{style:{width:"80%",textAlign:"center",margin:"10px auto 0px auto",borderRadius:"10px",paddingTop:"10px",color:"#fff",backgroundColor:"rgba(0,0,0,.4)"},children:["At some point in the near future I'd like to work with Virtual Reality ",Object(g.jsx)("span",{role:"img","aria-label":"VR Emoji",children:"\ud83c\udf0b"})," and/or Augmented Reality systems, \ud83d\uddfa use big data \ud83d\uddc4 (and neural nets \ud83d\udd78) to make the lives of people easier/happier \ud83c\udf0d \ud83d\ude42 and maybe embedded systems, robots anyone? \ud83e\udd16"]}),Object(g.jsxs)("p",{style:{color:"#fff",marginTop:"20px"},children:["You can also find a printer friendly version of my CV ",Object(g.jsx)("a",{href:"https://calm-ground-0c6108310.3.azurestaticapps.net/resume.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{role:"img","aria-label":"Ghost Emoji",children:"\ud83d\udc7b"}),Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)(I,{href:"https://github.com/Cazs",target:"_blank",rel:"nofollow noopener noreferrer",style:{marginRight:"-100px"}}),Object(g.jsx)(F,{href:"https://www.linkedin.com/in/casper-ndlovu",target:"_blank",rel:"nofollow noopener noreferrer",style:{marginLeft:"-100px"}})]})]})}}]),i}(c.a.Component),H=B,Q=(i(219),i(220),["./cover_photo.jpg","./aurora.jpg","./galaxies.jpg","./martin.jpg"]),q=function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(b,{},"nav-component"),Object(g.jsx)(m,{images:Q},"slideshow-component"),Object(g.jsx)(O,{},"introduction-component"),Object(g.jsx)(C,{},"skills-component"),Object(g.jsx)(M,{},"work-component"),Object(g.jsx)(R,{},"education-component"),Object(g.jsx)(E,{},"stack-component"),Object(g.jsx)(z,{},"projects-component"),Object(g.jsx)(_,{},"pet-projects-component"),Object(g.jsx)(H,{},"footer-component")]})}}]),i}(l.Component),G=q,U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i(221).config(),s.a.render(Object(g.jsx)(G,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");U?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Y(e)}))}}()}},[[226,1,2]]]);
//# sourceMappingURL=main.36d41774.chunk.js.map