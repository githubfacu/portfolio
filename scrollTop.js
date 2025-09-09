const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up fa-lg"></i>`;
scrollBtn.id = "scrollToTopBtn";
scrollBtn.setAttribute("aria-label", "Volver arriba");

document.body.appendChild(scrollBtn);

const footerDesktop = document.querySelector("footer.desktop");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "flex";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
    setTimeout(() => {
      if (document.documentElement.scrollTop <= 200) {
        scrollBtn.style.display = "none";
      }
    }, 300);
  }

  if (footerDesktop) {
    if (scrollPosition >= pageHeight - footerDesktop.offsetHeight) {
      scrollBtn.style.bottom = footerDesktop.offsetHeight + 24 + "px"; 
    } else {
      scrollBtn.style.bottom = "32px";
    }
  } else {
    scrollBtn.style.bottom = "32px";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
