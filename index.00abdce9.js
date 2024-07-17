document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id),e.before(t);var l=e.getAttribute("name").split(/(?=[A-Z])/).join(" ").toLocaleLowerCase();t.textContent=l;var a=l[0].toUpperCase()+l.slice(1);e.placeholder=a});
//# sourceMappingURL=index.00abdce9.js.map
