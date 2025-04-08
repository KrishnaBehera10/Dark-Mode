let btn = document.querySelector(".btn");

if (localStorage.getItem("thems") === "dark") {
  document.body.classList.add("dark");
}
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("thems", "dark");
  } else {
    localStorage.setItem("thems", "light");
  }
});
