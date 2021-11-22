const btn = document.querySelector(".btn");

// Mouse Event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Changed</h1>";
});
