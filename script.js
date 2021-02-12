// console.log("test");
const elements = document.getElementsByClassName("check");
// console.log(elements);
for (let i = 0; i < elements.length; i++) {
  //   console.log(elements[i]);
  elements[i].addEventListener("click", (e) => {
    let dzieci = e.target.parentElement.children;
    for (let j = 0; j < dzieci.length; j++) {
      if (dzieci[j].classList[0] == "dziecko") {
        dzieci[j].classList.toggle("hidden");
        dzieci[j].classList.toggle("shown");
      }
    }
  });
}
