const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.style.cssText="border-radius: 50%; background-color: green",t.style.cssText="border-radius: 50%; background-color: red",e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500)})),t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),clearInterval(d)}));let d=null;t.setAttribute("disabled","true");
//# sourceMappingURL=01-color-switcher.f69a92ee.js.map