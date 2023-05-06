const form = document.querySelector("form");
const listContainer = document.querySelector("ul");


form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputValue = document.querySelector("input").value;
    const newList = document.createElement("li");

    // styles
    if(inputValue){
    newList.style.paddingLeft = "0.5rem";
    newList.style.paddingBlock = "0.4rem";
    newList.style.background = "#1dd1a1";
    newList.style.margin = ".2em";
    newList.style.borderRadius = "5px";
    newList.style.fontSize = "1.2rem";

    listContainer.appendChild(newList);
    newList.innerText = inputValue;
    document.querySelector("input").value = ""
    }
    
})