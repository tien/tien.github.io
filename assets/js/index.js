const mainAvatar = document.getElementById("main-avatar");

const nav = document.getElementById("navigation");
const menu = nav.getElementsByClassName("nav-bar")[0];
const menuButton = nav.getElementsByClassName("menu-button")[0];

const darkModeButton = document.getElementById("dark-mode-button");
const darkModeStateIndicator = darkModeButton.getElementsByClassName(
  "dark-mode-state"
)[0];

const getDarkMode = () => JSON.parse(window.localStorage.getItem("darkMode"));

const setDarkMode = bool => {
  if (bool) {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--foreground-color", "white");
    document.documentElement.style.setProperty("--hyper-link-color", "white");
    mainAvatar.style.setProperty("filter", "invert(1)");
    darkModeStateIndicator.textContent = "on";
    window.localStorage.setItem("darkMode", "true");
  } else {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--foreground-color", "black");
    document.documentElement.style.setProperty("--hyper-link-color", "blue");
    mainAvatar.style.setProperty("filter", "none");
    darkModeStateIndicator.textContent = "off";
    window.localStorage.setItem("darkMode", "false");
  }
};

menuButton.addEventListener("click", function() {
  menu.classList.toggle("active");
});

darkModeButton.addEventListener("click", function() {
  if (getDarkMode()) {
    setDarkMode(false);
  } else {
    setDarkMode(true);
  }
});

// Init
if (getDarkMode()) {
  setDarkMode(true);
} else {
  setDarkMode(false);
}
