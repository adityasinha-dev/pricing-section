const container = document.querySelector(".container");
const professtional_version = document.querySelector(".profess");
const enterprise = document.querySelector(".enterprise");
const month = document.querySelectorAll(".month");
container.addEventListener("click", () => {
  // Toggles the class and returns true if added, false if removed
  const isNewState = container.classList.toggle("newState");
  
  if (isNewState) {
    professtional_version.textContent = "$600";
    enterprise.textContent = "$800"
    for(let mon of month){
        mon.textContent = "/Year";
    }
  } else {
    professtional_version.textContent = "$25"; 
    enterprise.textContent = "$100"
    for(let mon of month){
        mon.textContent = "/Month";
    }
  }
});

