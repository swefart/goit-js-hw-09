!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.stopBtn.disabled=!0;var e=t.startBtn.style.cssText="width: 100px;height: 50px;border-radius: 4px;";function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.stopBtn.style.cssText="width: 100px;height: 50px;border-radius: 4px;",t.startBtn.addEventListener("click",(function(){t.stopBtn.disabled=!1,t.startBtn.disabled=!0,e=setInterval((function(){t.body.style.backgroundColor=r(),t.stopBtn.style.cssText="width: 100px;\n    height: 50px;\n    border-radius: 4px;\n    border-color: ".concat(r())}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.disabled=!0,t.startBtn.disabled=!1,t.startBtn.style.cssText="width: 100px;\n    height: 50px;\n    border-radius: 4px;\n    border-color: ".concat(r()),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.197b4a4b.js.map
