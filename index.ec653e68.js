const e=document.querySelector(".header"),t=document.querySelector(".header__container"),o=document.querySelector(".nav-container");window.addEventListener("scroll",(function(){this.window.scrollY>0?(e.style.top="-80px",t.style.flexDirection="row-reverse",o.style.position="fixed",o.style.top="25px"):(e.style.top="25px",t.style.flexDirection="row",o.style.position="relative",o.style.top="0")}));const n=document.querySelector(".nav__menu");document.querySelector(".burger-container").addEventListener("click",(function(){document.querySelector(".burger").classList.toggle("active"),n.classList.toggle("open"),window.innerWidth<768&&document.querySelector("body").classList.toggle("no-scroll"),document.querySelector(".nav__menu").classList.toggle("active"),document.querySelector(".burger-container").classList.toggle("active")}));const l={openModalBtn:document.querySelector("[data-modal-open]"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]")},c=()=>{l.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")};l.openModalBtn.addEventListener("click",c),l.closeModalBtn.addEventListener("click",c);
//# sourceMappingURL=index.ec653e68.js.map
