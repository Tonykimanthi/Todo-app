const form = document.querySelector("form");
const listContainer = document.querySelector("ul");

const storeCompletedTodo = [];
console.log(storeCompletedTodo);

window.onload = function () {
  loadLsItems();
};

// incomplete
function loadLsItems() {
  if (localStorage.getItem("store")) {
    let localS = localStorage.getItem("store");
    localS = JSON.parse(localS);

    for (let i = 0; i < localS.length; i++) {
      const newList = document.createElement("li");
      newList.style.display = "flex";
      newList.style.justifyContent = "space-between";
      newList.style.paddingInline = ".5rem";
      newList.style.backgroundColor = "#dcdde1";
      newList.style.marginBlock = ".5em";
      newList.style.paddingBlock = ".5em";
      newList.style.borderRadius = ".3em";

      // Text inside a todo
      const todoText = document.createElement("span");
      todoText.style.alignSelf = "center";

      // Delete button
      const deleteBtn = document.createElement("span");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.style.color = "white";
      deleteBtn.style.fontSize = "1.1rem";
      deleteBtn.style.backgroundColor = "#e84118";
      deleteBtn.style.borderRadius = ".2em";
      deleteBtn.style.padding = ".2em";
      deleteBtn.style.cursor = "pointer";

      todoText.textContent = localS[i];
      newList.appendChild(todoText);
      newList.appendChild(deleteBtn);

      listContainer.appendChild(newList);
      console.log(todoText.textContent);

      deleteBtn.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
      })
    }
  } else {
    console.log("No item available");
  }
}

form.addEventListener("submit", createTodo);

function createTodo(e) {
  e.preventDefault();

  const inputValue = document.querySelector("input").value;

  // New list
  const newList = document.createElement("li");
  newList.style.display = "flex";
  newList.style.justifyContent = "space-between";
  newList.style.paddingInline = ".5rem";
  newList.style.backgroundColor = "#dcdde1";
  newList.style.marginBlock = ".5em";
  newList.style.paddingBlock = ".5em";
  newList.style.borderRadius = ".3em";

  // Text inside a todo
  const todoText = document.createElement("span");
  todoText.style.alignSelf = "center";

  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.style.color = "white";
  deleteBtn.style.fontSize = "1.1rem";
  deleteBtn.style.backgroundColor = "#e84118";
  deleteBtn.style.borderRadius = ".2em";
  deleteBtn.style.padding = ".2em";
  deleteBtn.style.cursor = "pointer";

  if (inputValue) {
    todoText.textContent = inputValue;
    newList.appendChild(todoText);
    newList.appendChild(deleteBtn);

    listContainer.appendChild(newList);

    document.querySelector("input").value = "";
  }

  //   Remove todo
  deleteBtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });

  //   Strike through on a todo
  newList.addEventListener("dblclick", function () {
    if (todoText.style.textDecoration === "none") {
      newList.style.opacity = ".4";
      deleteBtn.innerText = "Saved";
      deleteBtn.style.backgroundColor = "green";
      deleteBtn.style.pointerEvents = "none";
      todoText.style.textDecoration = "line-through";

      const textInTodo = inputValue;
      storeCompletedTodo.push(textInTodo);

      localStorage.setItem("store", JSON.stringify(storeCompletedTodo));
      console.log(storeCompletedTodo);
    } else {
      newList.style.opacity = "1";
      deleteBtn.innerText = "Delete";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.style.pointerEvents = "auto";
      todoText.style.textDecoration = "none";
    }
  });
}
