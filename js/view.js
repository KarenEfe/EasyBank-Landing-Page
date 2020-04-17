const menuBar = document.querySelector(".hamburger-icon");

menuBar.addEventListener("click", () => {
  if (document.querySelector(".mobile-navbar-view").style.display !== "block") {
    document.querySelector(".hamburger-icon").src = "./images/icon-close.svg";
    document.querySelector(".mobile-navbar-view").style.display = "block";
    document.querySelector("body").classList.add("stop-scrolling");
    return;
  }
  document.querySelector(".hamburger-icon").src = "./images/icon-hamburger.svg";
  document.querySelector(".mobile-navbar-view").style.display = "none";
  document.querySelector("body").classList.remove("stop-scrolling");
});
