window.onload = function () {
  const header = document.getElementById("header");
  const button = document.getElementById("menu-button");
  const links = document.getElementById("menu-links");
  const intro = document.getElementById("header-intro");
  const about = document.getElementById("header-about");
  const skills = document.getElementById("header-skills");
  const works = document.getElementById("header-works");

  var state = false;

  button.addEventListener("click", function () {
    if (state) {
      intro.classList.add("hidden");
      about.classList.add("hidden");
      skills.classList.add("hidden");
      works.classList.add("hidden");
      header.classList.remove("h-screen");
      header.classList.add("h-max");
      header.classList.remove("bg-opacity-100");
      header.classList.add("bg-opacity-1");
      header.classList.add("bg-black");
      header.classList.remove("bg-white");
      button.classList.add("justify-self-end");
      button.classList.remove("justify-self-start");
    } else {
      intro.classList.remove("hidden");
      about.classList.remove("hidden");
      skills.classList.remove("hidden");
      works.classList.remove("hidden");
      header.classList.remove("h-max");
      header.classList.add("h-screen");
      header.classList.add("bg-opacity-100");
      header.classList.remove("bg-opacity-1");
      header.classList.remove("bg-black");
      header.classList.add("bg-white");
      button.classList.remove("justify-self-end");
      button.classList.add("justify-self-start");
    }
    state = !state;
  });
};
