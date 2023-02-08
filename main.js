const container = document.getElementById("container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const task = document.getElementsByClassName("task")


form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
  <span class="icon-star icon"> </span>
  <p class="task-Text">${ input.value}</p>
  <div>
    <span class="icon-trash icon"> </span>
    <span class="icon-angry2 icon"> </span>
  </div>
</div>`
  container.innerHTML += task;
  input.value="";
})

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove()

  }
  else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn")

    const heart = `<span class="icon-heart"> </span>`
    eo.target.parentElement.parentElement.getElementsByClassName("task-Text")[0].classList.add("finish");
    eo.target.parentElement.innerHTML += heart;

  }
  else if(eo.target.className =="icon-heart"){
eo.target.classList.add("dn")
eo.target.parentElement.parentElement.getElementsByClassName("task-Text")[0].classList.remove("finish");
const angry= `<span class="icon-angry2 icon"> </span>`
eo.target.parentElement.innerHTML+= angry ; }
else if (eo.target.className =="icon-star icon"){
  container.prepend(eo.target.parentElement)
  eo.target.classList.add("orange");

}
else if(eo.target.className =="icon-star icon orange"){
  eo.target.classList.remove("orange");

}
})