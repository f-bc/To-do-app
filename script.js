const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if (inputBox.value === ''){
    alert("You must write something!");
  }else{
    let li = document.createElement("li");//creates:<li></li> But only in memory (not yet on the page)
    li.innerHTML = inputBox.value;//If user typed:Buy milk.  Now: <li>Buy milk</li>
    listContainer.appendChild(li);//Add it to the page:
    // <ul id="list-container">
    //    <li>Buy milk</li>
    // </ul>
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";//code for cross icon X
    li.appendChild(span);
  }
  inputBox.value="";//to clear the input box after havind added the task
  saveData();//saved the updated content in the browser
}

listContainer.addEventListener("click", function(e){//whenever we click in the listcontainer
  if (e.target.tagName === "LI"){//if we have clicked on li
    e.target.classList.toggle("checked");//will add checked class name(if checked class name is already there it will be removed because we did toggle)
    saveData();
  }else if(e.target.tagName === "SPAN"){//if we click the target elt span(the X button)
    e.target.parentElement.remove();//the task is deleted
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
  //whatever is in innercontainer will be stored in the browser using under the name "data" 
  //so that when we close the browser or refresh the page we still have all of our information
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");//gets all the contents of the item "data"
}
showTask();//display the data when we open the website again