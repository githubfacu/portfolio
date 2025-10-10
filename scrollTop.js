const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up fa-lg"></i>`;
scrollBtn.id = "scrollToTopBtn";
scrollBtn.setAttribute("aria-label", "Volver arriba");

document.body.appendChild(scrollBtn);

const footerDesktop = document.querySelector("footer.desktop");

function toggleScrollBtn() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  const isDesktop = window.innerWidth > 1024;

  if (isDesktop && document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "flex";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
    setTimeout(() => {
      if (!isDesktop || document.documentElement.scrollTop <= 200) {
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
}

window.addEventListener("scroll", toggleScrollBtn);
window.addEventListener("resize", toggleScrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth"
  });
});
