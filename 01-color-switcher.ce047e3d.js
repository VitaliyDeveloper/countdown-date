!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.style.cssText="border-radius: 50%; background-color: green",e.style.cssText="border-radius: 50%; background-color: red",t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),o=setInterval((function(){r.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),500)})),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),clearInterval(o)}));var o=null;e.setAttribute("disabled","true")}();
//# sourceMappingURL=01-color-switcher.ce047e3d.js.map
