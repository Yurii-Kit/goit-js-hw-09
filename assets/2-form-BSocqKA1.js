const e={email:"",message:""},t=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state");if(s){const a=JSON.parse(s);e.email=a.email||"",e.message=a.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message}t.addEventListener("input",m);function m(a){e[a.target.name]=a.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}t.addEventListener("submit",l);function l(a){if(a.preventDefault(),e.email===""||e.message==="")return alert("Fill please all fields");console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()}
//# sourceMappingURL=2-form-BSocqKA1.js.map
