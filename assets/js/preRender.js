if (JSON.parse(window.localStorage.getItem("darkMode"))) {
  document.documentElement.style.setProperty("--background-color", "black");
  document.documentElement.style.setProperty("--foreground-color", "white");
} else {
  document.documentElement.style.setProperty("--background-color", "white");
  document.documentElement.style.setProperty("--foreground-color", "black");
}
