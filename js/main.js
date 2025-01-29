let readMoreBtn = document.querySelectorAll(".read-more");
let projectTools = document.querySelectorAll(
  "#projects .row .col .card .tools"
);
let projectAbout = document.querySelectorAll(
  "#projects .row .col .card .card-body .card-text"
);

projectAbout.forEach((element) => {
  let idx = Array.prototype.indexOf.call(projectAbout, element);
  if (element.children[0].innerText !== "") {
    readMoreBtn[idx].style.display = "block";
  } else if (element.children[0].innerText === "") {
    readMoreBtn[idx].style.display = "none";
  }
});

projectTools.forEach((element) => {
  let idx = Array.prototype.indexOf.call(projectTools, element);
  if (element.children[0].innerText !== "") {
    readMoreBtn[idx].style.display = "block";
  } else if (element.children[0].innerText === "") {
    readMoreBtn[idx].style.display = "none";
  }
});

readMoreBtn.forEach((element) => {
  let idx = Array.prototype.indexOf.call(readMoreBtn, element);
  element.onclick = () => {
    if (element.innerText === "Read More") {
      projectAbout[idx].style.height = "fit-content";
      projectTools[idx].style.height = "fit-content";
      element.innerText = "Read Less";
    } else {
      projectAbout[idx].style.height = "70px";
      projectTools[idx].style.height = "35px";
      element.innerText = "Read More";
    }
  };
});
